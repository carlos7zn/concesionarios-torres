const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = '/c/Users/Carlo/AppData/Local/Temp/concesionarios-torres/public/images/vehicles/cupra-formentor-vz-hybrid';
const outputDir = inputDir;
const files = ['01_front.jpg', '02_rear.jpg', '03_highres.jpg'];

files.forEach(file => {
  const input = path.join(inputDir, file);
  const output = path.join(outputDir, file.replace('.jpg', '.webp'));
  
  sharp(input)
    .resize(1920)
    .webp({ quality: 80 })
    .then(() => console.log(`Convertido: ${file} -> ${output}`))
    .catch(err => console.error(`Error en ${file}:`, err));
});
