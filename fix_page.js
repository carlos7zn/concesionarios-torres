const fs = require('fs');

const filePath = 'app/page.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

content = content.replace(
  'src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=90"',
  'src="/images/hero.jpg"'
);

content = content.replace(
  "image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80'",
  "image: '/images/vehicles/cupra-formentor-vz-hybrid/01_front.jpg'"
);

content = content.replace(
  "image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80'",
  "image: '/images/vehicles/toyota-rav4-hybrid/01.jpg'"
);

content = content.replace(
  "image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1b?auto=format&fit=crop&w=800&q=80'",
  "image: '/images/vehicles/tesla-model-y-long-range/01.jpg'"
);

content = content.replace(
  "image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80'",
  "image: '/images/vehicles/bmw-serie-3-320d/01.jpg'"
);

content = content.replace(
  "image: 'https://images.unsplash.com/photo-1622227922714-ed25612f0e0c?auto=format&fit=crop&w=800&q=80'",
  "image: '/images/vehicles/volkswagen-golf-gti/01.jpg'"
);

content = content.replace(
  "image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80'",
  "image: '/images/vehicles/bmw-serie-3-320d/01.jpg'"
);

content = content.replace(
  'src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80"',
  'src="/images/hero.jpg"'
);

content = content.replace(
  'src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1000&q=80"',
  'src="/images/taller.jpg"'
);

fs.writeFileSync('app/page.tsx', content);
console.log('page.tsx actualizado');
