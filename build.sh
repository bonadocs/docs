#!/bin/bash

# Netlify Build Script for Docusaurus
# This script helps debug build issues

echo "🔍 Node.js version:"
node --version

echo "📦 NPM version:"
npm --version

echo "🧹 Cleaning any existing build..."
rm -rf build/

echo "📥 Installing dependencies..."
npm ci

echo "🏗️ Building site..."
npm run build

echo "✅ Build completed successfully!"
echo "📁 Build output:"
ls -la build/

echo "📊 Build size:"
du -sh build/
