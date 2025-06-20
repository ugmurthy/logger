#!/usr/bin/env node

/**
 * Build script for @ugm/logger
 * Handles both ESM and CommonJS builds
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Paths
const distDir = path.join(__dirname, 'dist');
const cjsDir = path.join(distDir, 'cjs');

console.log('Creating build directories...');

// Ensure directories exist
try {
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
    console.log(`Created directory: ${distDir}`);
  }

  if (!fs.existsSync(cjsDir)) {
    fs.mkdirSync(cjsDir, { recursive: true });
    console.log(`Created directory: ${cjsDir}`);
  }
} catch (err) {
  console.error('Error creating directories:', err);
  process.exit(1);
}

// Create package.json for CJS
console.log('Creating package.json for CommonJS...');
try {
  const cjsPackageJson = {
    type: 'commonjs'
  };

  fs.writeFileSync(
    path.join(cjsDir, 'package.json'),
    JSON.stringify(cjsPackageJson, null, 2)
  );
  console.log('✅ Created package.json for CommonJS');
} catch (err) {
  console.error('Error creating package.json for CommonJS:', err);
  process.exit(1);
}

// Copy files manually instead of using TypeScript
console.log('Copying files...');
try {
  // Copy src files to dist with .js extension
  const files = fs.readdirSync(path.join(__dirname, 'src'));
  for (const file of files) {
    if (file.endsWith('.js') || file.endsWith('.d.ts')) {
      const srcPath = path.join(__dirname, 'src', file);
      const destPath = path.join(distDir, file);
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${srcPath} to ${destPath}`);
    }
  }

  // Copy to CJS directory as well
  for (const file of files) {
    if (file.endsWith('.js') || file.endsWith('.d.ts')) {
      const srcPath = path.join(__dirname, 'src', file);
      const destPath = path.join(cjsDir, file);
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${srcPath} to ${destPath}`);
    }
  }
  
  // Special handling for CommonJS version
  if (fs.existsSync(path.join(__dirname, 'src', 'index.cjs'))) {
    // Copy the index.cjs file to dist/cjs/index.js
    fs.copyFileSync(
      path.join(__dirname, 'src', 'index.cjs'),
      path.join(cjsDir, 'index.js')
    );
    console.log(`Copied src/index.cjs to dist/cjs/index.js (for CommonJS support)`);
  }

  console.log('✅ Build completed successfully');
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}