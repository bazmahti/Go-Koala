#!/usr/bin/env bash
# scripts/cloudflare-deploy.sh
# Auto-deploy to Cloudflare. Called automatically by Claude Code after builds.
# Usage: bash scripts/cloudflare-deploy.sh

set -e

# Load global credentials first, then local overrides
source "$HOME/.session-memory/config" 2>/dev/null || true
source .env.local 2>/dev/null || true
export CLOUDFLARE_API_TOKEN

if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
  echo "❌ CLOUDFLARE_API_TOKEN not set. Run scripts/cloudflare-setup.sh first."
  exit 1
fi

echo "🚀 Deploying to Cloudflare..."

# Detect deploy type from wrangler.toml
if grep -q "pages_build_output_dir" wrangler.toml 2>/dev/null; then
  # Pages project — build first if needed
  BUILD_DIR=$(grep "pages_build_output_dir" wrangler.toml | cut -d'"' -f2 | tr -d ' ' | tr -d '.')
  
  if [ -f "package.json" ] && grep -q '"build"' package.json; then
    echo "📦 Building..."
    npm run build
  fi

  PROJECT_NAME=$(grep "^name" wrangler.toml | cut -d'"' -f2)
  DEPLOY_OUTPUT=$(wrangler pages deploy "$BUILD_DIR" --project-name "$PROJECT_NAME" 2>&1)
  DEPLOY_URL=$(echo "$DEPLOY_OUTPUT" | grep -o 'https://[^ ]*\.pages\.dev' | head -1)

else
  # Worker
  DEPLOY_OUTPUT=$(wrangler deploy 2>&1)
  DEPLOY_URL=$(echo "$DEPLOY_OUTPUT" | grep -o 'https://[^ ]*\.workers\.dev' | head -1)
fi

TIMESTAMP=$(date '+%Y-%m-%d %H:%M')
echo "✅ Deployed: $DEPLOY_URL ($TIMESTAMP)"

# Log to session
SESSION_FILE=".session/current.md"
if [ -f "$SESSION_FILE" ]; then
  sed -i "s|Last deploy: .*|Last deploy: $TIMESTAMP|" "$SESSION_FILE" 2>/dev/null || true
  sed -i "s|Deploy status: .*|Deploy status: ✅ $DEPLOY_URL|" "$SESSION_FILE" 2>/dev/null || true
fi

echo "$DEPLOY_URL"
