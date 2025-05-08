// scripts/pack.js
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Ensure dist directory exists
const distDir = path.join(projectRoot, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Get current timestamp
const timestamp = new Date().getTime();
const outputFile = path.join(distDir, `output-${timestamp}.html`);

// Build the project with vite
console.log('Building project with inlined assets...');
execSync('npm run build', { stdio: 'inherit', cwd: projectRoot });

// Read the generated index.html and rename it with timestamp
const builtHtmlPath = path.join(distDir, 'index.html');
if (fs.existsSync(builtHtmlPath)) {
  fs.copyFileSync(builtHtmlPath, outputFile);
  
  // Remove original index.html and any other unnecessary files
  fs.unlinkSync(builtHtmlPath);
  const viteSvgPath = path.join(distDir, 'vite.svg');
  if (fs.existsSync(viteSvgPath)) {
    fs.unlinkSync(viteSvgPath);
  }
  
  console.log(`Successfully created: ${outputFile}`);
} else {
  console.error('Error: Build did not produce an index.html file');
  process.exit(1);
}
