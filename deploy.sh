#!/bin/bash

# 🚀 Vercel Deployment Script
# Use: npm run deploy

echo "🔥 Starting Vercel Deployment Process..."

# Test build first
echo "📦 Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to Vercel
    echo "🚀 Deploying to Vercel..."
    npx vercel --prod
    
    echo "🎉 Deployment completed!"
    echo "📋 Check your Vercel dashboard for the live URL"
else
    echo "❌ Build failed! Please fix errors before deploying."
    exit 1
fi