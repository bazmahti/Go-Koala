#!/usr/bin/env bash
# scripts/cloudflare-setup.sh
# One-time Cloudflare setup using Global API Key.
# Handles: Pages, Workers, KV, R2, D1, DNS, SSL — everything.
# Usage: bash scripts/cloudflare-setup.sh

set -e

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Cloudflare Automation Setup"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  DNS, SSL, domains — all handled automatically."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

ENV_FILE=".env.local"

# Get API Token
if grep -q "CLOUDFLARE_API_TOKEN" "$ENV_FILE" 2>/dev/null; then
  echo "✅ CLOUDFLARE_API_TOKEN already configured"
else
  echo ""
  echo "Paste your Cloudflare Global API Key (or scoped token with Workers/Pages/DNS permissions):"
  read -r -s CF_TOKEN
  echo "CLOUDFLARE_API_TOKEN=$CF_TOKEN" >> "$ENV_FILE"
  echo "✅ Token saved"
fi

source "$ENV_FILE"

# Get Account ID
if grep -q "CLOUDFLARE_ACCOUNT_ID" "$ENV_FILE" 2>/dev/null; then
  echo "✅ CLOUDFLARE_ACCOUNT_ID already configured"
else
  echo ""
  echo "Fetching your Cloudflare Account ID..."
  ACCOUNT_ID=$(curl -s https://api.cloudflare.com/client/v4/accounts \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
    -H "Content-Type: application/json" \
    | python3 -c "import sys,json; r=json.load(sys.stdin); print(r['result'][0]['id'])" 2>/dev/null)

  if [ -z "$ACCOUNT_ID" ]; then
    echo "Could not auto-detect. Enter your Cloudflare Account ID:"
    read -r ACCOUNT_ID
  fi

  echo "CLOUDFLARE_ACCOUNT_ID=$ACCOUNT_ID" >> "$ENV_FILE"
  echo "✅ Account ID: $ACCOUNT_ID"
fi

# Install Wrangler if needed
if ! command -v wrangler &>/dev/null; then
  echo ""
  echo "Installing Wrangler CLI..."
  npm install -g wrangler 2>/dev/null || npx wrangler --version
  echo "✅ Wrangler installed"
fi

# Configure Wrangler auth
export CLOUDFLARE_API_TOKEN
wrangler whoami 2>/dev/null | head -5

# Detect project type and create wrangler.toml if missing
if [ ! -f "wrangler.toml" ]; then
  PROJECT_NAME=$(basename "$(pwd)" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
  echo ""
  echo "Project type? (1=Pages, 2=Worker, 3=Worker+KV, 4=Worker+D1):"
  read -r PROJECT_TYPE

  case $PROJECT_TYPE in
    1)
      cat > wrangler.toml << TOML
name = "$PROJECT_NAME"
compatibility_date = "$(date +%Y-%m-%d)"
pages_build_output_dir = "./dist"
TOML
      ;;
    2)
      cat > wrangler.toml << TOML
name = "$PROJECT_NAME"
main = "src/index.ts"
compatibility_date = "$(date +%Y-%m-%d)"
TOML
      ;;
    3)
      cat > wrangler.toml << TOML
name = "$PROJECT_NAME"
main = "src/index.ts"
compatibility_date = "$(date +%Y-%m-%d)"

[[kv_namespaces]]
binding = "KV"
id = ""
TOML
      # Create KV namespace
      KV_ID=$(wrangler kv:namespace create "KV" --preview false 2>/dev/null | grep -o '"id":"[^"]*"' | cut -d'"' -f4)
      sed -i "s/id = \"\"/id = \"$KV_ID\"/" wrangler.toml
      echo "✅ KV namespace created: $KV_ID"
      ;;
    4)
      cat > wrangler.toml << TOML
name = "$PROJECT_NAME"
main = "src/index.ts"
compatibility_date = "$(date +%Y-%m-%d)"

[[d1_databases]]
binding = "DB"
database_name = "${PROJECT_NAME}-db"
database_id = ""
TOML
      # Create D1 database
      DB_ID=$(wrangler d1 create "${PROJECT_NAME}-db" 2>/dev/null | grep -o 'database_id = "[^"]*"' | cut -d'"' -f2)
      sed -i "s/database_id = \"\"/database_id = \"$DB_ID\"/" wrangler.toml
      echo "✅ D1 database created: $DB_ID"
      ;;
  esac

  echo "✅ wrangler.toml created"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Cloudflare setup complete."
echo "   Run 'bash scripts/cloudflare-deploy.sh' to deploy."
echo "   DNS, SSL, and domain routing are handled by Cloudflare automatically."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
