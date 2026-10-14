const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = '/c/Users/Carlo/AppData/Local/Temp/concesionarios-torres';
const vehiclesPath = path.join(projectRoot, 'data/vehicles.ts');

const content = fs.readFileSync(vehiclesPath, 'utf-8');

const imagePaths = [];

// Extract image paths from the file
const regex = /['"](\/images\/vehicles\/[^'"]+)['"]/g;
let match;
while ((match = regex.exec(content)) !== null) {
  imagePaths.push(match[1]);
}

console.log('=== RUTAS ENCONTRADAS EN data/vehicles.ts ===');
console.log(`Total de referencias: ${imagePaths.length}`);
console.log('\nRutas únicas:');
const uniquePaths = [...new Set(imagePaths)];
uniquePaths.forEach(p => console.log(p));

console.log('\n=== VERIFICACIÓN EN SISTEMA DE ARCHIVOS ===');
uniquePaths.forEach(p => {
  const fullPath = path.join('/c/Users/Carlo/AppData/Local/Temp/concesionarios-torres/public', p);
  const exists = fs.existsSync(fullPath);
  let sizeKB = 0;
  let metadata = '';
  if (exists) {
    const stats = fs.statSync(fullPath);
    sizeKB = Math.round(stats.size / 1024);
    if (sizeKB < 20) {
      metadata = ' ⚠️ ARCHIVO PEQUEÑO (< 20KB)';
    }
  }
  console.log(`${exists ? '✅' : '❌'} ${p} ${metadata}`);
});

console.log('\n=== ARCHIVOS EN GIT (git ls-files) ===');
try {
  const gitFiles = execSync('git ls-files public/images', { cwd: '/c/Users/Carlo/AppData/Local/Temp/concesionarios-torres', encoding: 'utf-8' });
  console.log(gitFiles);
} catch (e) {
  console.error('Error:', e.message);
}
