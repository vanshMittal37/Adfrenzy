const https = require('https');
const http = require('http');

const urls = [
  'https://www.mypoojabox.in/',
  'https://shoemistri.com/',
  'https://twirlandtote.com/',
  'https://labelmehu.com/',
  'https://pawbasket.co/',
  'https://aasabysimran.com/',
  'https://thewhitewillow.in/',
  'https://www.arkayejewels.com/',
  'https://shapercult.com/'
];

function fetchUrl(targetUrl) {
  return new Promise((resolve) => {
    const client = targetUrl.startsWith('https') ? https : http;
    const req = client.get(targetUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          const origin = new URL(targetUrl).origin;
          redirectUrl = origin + redirectUrl;
        }
        return fetchUrl(redirectUrl).then(resolve);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ targetUrl, data }));
    });
    req.on('error', (err) => resolve({ targetUrl, error: err.message }));
    req.setTimeout(10000, () => { req.destroy(); resolve({ targetUrl, error: 'timeout' }); });
  });
}

async function run() {
  for (const u of urls) {
    const res = await fetchUrl(u);
    if (res.error) {
      console.log(`URL: ${u} | ERROR: ${res.error}`);
      continue;
    }
    const html = res.data;
    // Find logo images or og:image
    const matches = [];
    const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
    let m;
    while ((m = imgRegex.exec(html)) !== null) {
      if (m[0].toLowerCase().includes('logo') || m[1].toLowerCase().includes('logo')) {
        matches.push(m[1]);
      }
    }
    const ogMatch = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ||
                    html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);

    console.log(`--- ${u} ---`);
    console.log(`Logo Matches:`, matches.slice(0, 5));
    if (ogMatch) console.log(`OG Image:`, ogMatch[1]);
  }
}

run();
