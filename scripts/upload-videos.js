import fs from "fs";
import path from "path";
import crypto from "crypto";

// Custom parser to load environment variables from .env.local without external dependencies
try {
  const envPath = path.resolve(process.cwd(), ".env.local");
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, "utf-8");
    envContent.split(/\r?\n/).forEach(line => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let val = match[2] || "";
        val = val.trim();
        if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
        if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
        process.env[key] = val;
      }
    });
  }
} catch (err) {
  console.warn("⚠️ Warning: Could not parse .env.local automatically:", err.message);
}

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  console.error("❌ Error: Missing Cloudinary credentials in .env.local!");
  console.log("Please make sure the following are set:");
  console.log("NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME");
  console.log("CLOUDINARY_API_KEY");
  console.log("CLOUDINARY_API_SECRET");
  process.exit(1);
}

const videosToUpload = [
  { filename: "testimonial2.mp4", id: "testimonial2" },
  { filename: "testimonial3.mp4", id: "testimonial3" },
  { filename: "testimonial4.MP4", id: "testimonial4" },
  { filename: "IMG_9656.MP4", id: "IMG_9656" }
];

async function uploadVideo(filePath, publicId) {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET;
  
  console.log(`⏳ Uploading ${path.basename(filePath)} to Cloudinary...`);

  // Read file as buffer
  const fileBuffer = fs.readFileSync(filePath);
  const boundary = "----CloudinaryBoundary" + Math.random().toString(16);
  const header = `--${boundary}\r\n`;
  const footer = `\r\n--${boundary}--\r\n`;

  let body = Buffer.alloc(0);

  const addField = (name, value) => {
    let part = `${header}Content-Disposition: form-data; name="${name}"\r\n\r\n${value}\r\n`;
    body = Buffer.concat([body, Buffer.from(part)]);
  };

  const addFile = (name, filename, buffer) => {
    let part = `${header}Content-Disposition: form-data; name="${name}"; filename="${filename}"\r\nContent-Type: video/mp4\r\n\r\n`;
    body = Buffer.concat([body, Buffer.from(part), buffer]);
  };

  if (uploadPreset) {
    // Unsigned upload using Preset (requires no signature)
    addField("upload_preset", uploadPreset);
  } else {
    // Signed upload (Only sign timestamp to prevent custom public_id permission restrictions)
    const paramString = `timestamp=${timestamp}${apiSecret}`;
    const signature = crypto.createHash("sha1").update(paramString).digest("hex");
    
    addField("api_key", apiKey);
    addField("timestamp", timestamp.toString());
    addField("signature", signature);
  }

  addFile("file", path.basename(filePath), fileBuffer);
  body = Buffer.concat([body, Buffer.from(footer)]);

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/video/upload`, {
    method: "POST",
    headers: {
      "Content-Type": `multipart/form-data; boundary=${boundary}`
    },
    body: body
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Cloudinary upload failed: ${response.statusText} - ${errText}`);
  }

  const result = await response.json();
  return result.secure_url;
}

async function main() {
  console.log("🚀 Starting Cloudinary Testimonial Videos Upload...");
  const urls = {};

  for (const video of videosToUpload) {
    const localPath = path.join(process.cwd(), "public", video.filename);
    if (!fs.existsSync(localPath)) {
      console.warn(`⚠️ Warning: Local file not found: ${localPath}. Skipping.`);
      continue;
    }

    try {
      const url = await uploadVideo(localPath, video.id);
      console.log(`✅ Uploaded successfully: ${url}`);
      urls[video.filename] = url;
    } catch (error) {
      console.error(`❌ Failed to upload ${video.filename}:`, error.message);
    }
  }

  console.log("\n🎉 Upload completed! Cloudinary secure URLs generated:\n");
  console.log(JSON.stringify(urls, null, 2));
}

main();
