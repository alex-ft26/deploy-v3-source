#!/bin/bash
# Build and deploy a prospect site to Vercel
# Usage: ./scripts/build-and-deploy.sh [project-name]
#
# Prerequisites:
#   - prospect-data.json must exist in project root
#   - VERCEL_TOKEN env var must be set
#   - npm dependencies installed

set -euo pipefail

PROJECT_NAME="${1:-prospect-site}"

# Check for prospect data
if [ ! -f "prospect-data.json" ]; then
  echo "ERROR: prospect-data.json not found."
  echo "Copy prospect-data.example.json and fill in prospect data."
  exit 1
fi

# Check for Vercel token
if [ -z "${VERCEL_TOKEN:-}" ]; then
  echo "ERROR: VERCEL_TOKEN environment variable not set."
  exit 1
fi

# Install deps if needed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install --production=false
fi

# Build
echo "Building ${PROJECT_NAME}..."
npm run build

# Deploy
echo "Deploying to Vercel..."
DEPLOY_URL=$(npx vercel deploy --yes --token="$VERCEL_TOKEN" --name="$PROJECT_NAME" 2>/dev/null)

echo ""
echo "========================================="
echo "  DEPLOYED: ${DEPLOY_URL}"
echo "========================================="
echo ""
echo "Project: ${PROJECT_NAME}"
echo "URL: ${DEPLOY_URL}"
