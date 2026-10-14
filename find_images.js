let d = '';
process.stdin.on('data', c => d += c);
process.stdin.on('end', () => {
  try {
    const r = JSON.parse(d);
    const p = r.query.pages;
    for (const pid of Object.keys(p)) {
      const page = p[pid];
      const title = page.title;
      if (!page.imageinfo) continue;
      const i = page.imageinfo[0];
      if (!i.mime.startsWith('image/')) continue;
      if (i.width < 1600) continue;
      const license = i.extmetadata?.LicenseShortName?.value || 'N/A';
      if (!license.includes('CC0') && !license.includes('CC BY') && !license.includes('Public domain') && !license.includes('CC BY-SA')) continue;
      const artist = (i.extmetadata?.Artist?.value || '').replace(/<[^>]+>/g, '');
      console.log('---');
      console.log('TITLE:', title);
      console.log('WIDTH:', i.width);
      console.log('LICENSE:', license);
      console.log('ARTIST:', artist);
      console.log('URL:', i.url.substring(0, 120));
      console.log('---');
    }
  } catch (e) {
    console.error('Error:', e.message);
  }
});
