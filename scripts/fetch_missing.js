const https = require('https');

const missingUrls = [
  'https://www.mypoojabox.in/',
  'https://shapercult.com/'
];

missingUrls.forEach(url => {
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log(`=== ${url} ===`);
      const logos = data.match(/https?:[^\s"'<>]*(?:logo|header|brand)[^\s"'<>]*\.(?:png|jpg|jpeg|svg|webp)/gi);
      console.log('Logos found:', logos ? logos.slice(0, 10) : 'None');
    });
  }).on('error', e => console.log(e.message));
});
