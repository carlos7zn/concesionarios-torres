const fs = require('fs');

const content = fs.readFileSync('data/vehicles.ts', 'utf-8');
let newContent = content;

// 1. Fix CUPRA Formentor - use correct .jpg files
newContent = newContent.replace(
  "image: '/images/vehicles/cupra-formentor-vz-hybrid/01.webp'",
  "image: '/images/vehicles/cupra-formentor-vz-hybrid/01_front.jpg'"
);
newContent = newContent.replace(
  "gallery: [\n      '/images/vehicles/cupra-formentor-vz-hybrid/01.webp',\n      '/images/vehicles/cupra-formentor-vz-hybrid/02.webp',\n    ]",
  "gallery: [\n      '/images/vehicles/cupra-formentor-vz-hybrid/01_front.jpg',\n      '/images/vehicles/cupra-formentor-vz-hybrid/02_rear.jpg',\n      '/images/vehicles/cupra-formentor-vz-hybrid/03_highres.jpg',\n    ]"
);

// 2. Fix Audi Q3 Sportback - use its own images
newContent = newContent.replace(
  "image: '/images/vehicles/cupra-formentor-vz-hybrid/02.webp'",
  "image: '/images/vehicles/audi-q3-sportback-s-line/01.jpg'"
);
newContent = newContent.replace(
  "gallery: [\n      '/images/vehicles/cupra-formentor-vz-hybrid/02.webp',\n    ]",
  "gallery: [\n      '/images/vehicles/audi-q3-sportback-s-line/01.jpg',\n      '/images/vehicles/audi-q3-sportback-s-line/02.jpg',\n      '/images/vehicles/audi-q3-sportback-s-line/03.jpg',\n    ]"
);

// 3. Fix Tesla Model Y - add more images to gallery
newContent = newContent.replace(
  "gallery: [\n      '/images/vehicles/tesla-model-y-long-range/01.jpg',\n    ]",
  "gallery: [\n      '/images/vehicles/tesla-model-y-long-range/01.jpg',\n      '/images/vehicles/tesla-model-y-long-range/02.jpg',\n      '/images/vehicles/tesla-model-y-long-range/03.jpg',\n    ]"
);

// 4. Fix VW Golf GTI
newContent = newContent.replace(
  "gallery: [\n      '/images/vehicles/volkswagen-golf-gti/01.jpg',\n    ]",
  "gallery: [\n      '/images/vehicles/volkswagen-golf-gti/01.jpg',\n      '/images/vehicles/volkswagen-golf-gti/02.jpg',\n      '/images/vehicles/volkswagen-golf-gti/03.jpg',\n    ]"
);

// 5. Fix Toyota RAV4
newContent = newContent.replace(
  "gallery: [\n      '/images/vehicles/toyota-rav4-hybrid/01.jpg',\n    ]",
  "gallery: [\n      '/images/vehicles/toyota-rav4-hybrid/01.jpg',\n      '/images/vehicles/toyota-rav4-hybrid/02.jpg',\n      '/images/vehicles/toyota-rav4-hybrid/03.jpg',\n    ]"
);

// 6. Fix BMW Serie 3
newContent = newContent.replace(
  "gallery: [\n      '/images/vehicles/bmw-serie-3-320d/01.jpg',\n    ]",
  "gallery: [\n      '/images/vehicles/bmw-serie-3-320d/01.jpg',\n      '/images/vehicles/bmw-serie-3-320d/02.jpg',\n      '/images/vehicles/bmw-serie-3-320d/03.jpg',\n    ]"
);

// 7. Fix Mercedes - change KM0 to Seminuevo
newContent = newContent.replace(
  "badge: 'KM0'",
  "badge: 'Seminuevo'"
);

// 8. Fix Hyundai Tucson
newContent = newContent.replace(
  "gallery: [\n      '/images/vehicles/hyundai-tucson-hybrid/01.jpg',\n    ]",
  "gallery: [\n      '/images/vehicles/hyundai-tucson-hybrid/01.jpg',\n      '/images/vehicles/hyundai-tucson-hybrid/02.jpg',\n      '/images/vehicles/hyundai-tucson-hybrid/03.jpg',\n    ]"
);

// 9. Fix VW Golf GTI gallery
newContent = newContent.replace(
  "gallery: [\n      '/images/vehicles/volkswagen-golf-gti/01.jpg',\n    ]",
  "gallery: [\n      '/images/vehicles/volkswagen-golf-gti/01.jpg',\n      '/images/vehicles/volkswagen-golf-gti/02.jpg',\n      '/images/vehicles/volkswagen-golf-gti/03.jpg',\n    ]"
);

// 10. Fix Toyota RAV4 gallery
newContent = newContent.replace(
  "gallery: [\n      '/images/vehicles/toyota-rav4-hybrid/01.jpg',\n    ]",
  "gallery: [\n      '/images/vehicles/toyota-rav4-hybrid/01.jpg',\n      '/images/vehicles/toyota-rav4-hybrid/02.jpg',\n      '/images/vehicles/toyota-rav4-hybrid/03.jpg',\n    ]"
);

// 11. Fix BMW Serie 3 gallery
newContent = newContent.replace(
  "gallery: [\n      '/images/vehicles/bmw-serie-3-320d/01.jpg',\n    ]",
  "gallery: [\n      '/images/vehicles/bmw-serie-3-320d/01.jpg',\n      '/images/vehicles/bmw-serie-3-320d/02.jpg',\n      '/images/vehicles/bmw-serie-3-320d/03.jpg',\n    ]"
);

// 12. Fix Hyundai Tucson gallery
newContent = newContent.replace(
  "gallery: [\n      '/images/vehicles/hyundai-tucson-hybrid/01.jpg',\n    ]",
  "gallery: [\n      '/images/vehicles/hyundai-tucson-hybrid/01.jpg',\n      '/images/vehicles/hyundai-tucson-hybrid/02.jpg',\n      '/images/vehicles/hyundai-tucson-hybrid/03.jpg',\n    ]"
);

require('fs').writeFileSync('data/vehicles.ts', newContent);
console.log('data/vehicles.ts actualizado');
