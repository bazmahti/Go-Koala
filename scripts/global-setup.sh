#!/usr/bin/env bash
# scripts/global-setup.sh
# Run ONCE ever on your machine. All projects inherit these credentials automatically.
# Usage: bash scripts/global-setup.sh

set -e

GLOBAL_DIR="$HOME/.session-memory"
GLOBAL_CONFIG="$GLOBAL_DIR/config"

mkdir -p "$GLOBAL_DIR"
chmod 700 "$GLOBAL_DIR"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Session Memory — Global Setup"
echo "  Run this ONCE. All projects inherit these."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# GitHub Token
if grep -q "GITHUB_TOKEN" "$GLOBAL_CONFIG" 2>/dev/null; then
  echo "✅ GitHub token already saved globally"
else
  echo "Paste your GitHub Personal Access Token (repo + workflow scopes):"
  read -r -s GITHUB_TOKEN
  echo ""
  GITHUB_USER=$(curl -s -H "Authorization: Bearer $GITHUB_TOKEN" https://api.github.com/user | python3 -c "import sys,json; print(json.load(sys.stdin)['login'])" 2>/dev/null || echo "unknown")
  echo "GITHUB_TOKEN=$GITHUB_TOKEN" >> "$GLOBAL_CONFIG"
  echo "GITHUB_USER=$GITHUB_USER" >> "$GLOBAL_CONFIG"
  echo "✅ GitHub token saved (user: $GITHUB_USER)"
fi

echo ""

# Cloudflare Token
if grep -q "CLOUDFLARE_API_TOKEN" "$GLOBAL_CONFIG" 2>/dev/null; then
  echo "✅ Cloudflare token already saved globally"
else
  echo "Paste your Cloudflare Global API Key (or scoped token):"
  read -r -s CLOUDFLARE_API_TOKEN
  echo ""
  ACCOUNT_ID=$(curl -s -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
    https://api.cloudflare.com/client/v4/accounts \
    | python3 -c "import sys,json; r=json.load(sys.stdin); print(r['result'][0]['id'])" 2>/dev/null || echo "")
  echo "CLOUDFLARE_API_TOKEN=$CLOUDFLARE_API_TOKEN" >> "$GLOBAL_CONFIG"
  [ -n "$ACCOUNT_ID" ] && echo "CLOUDFLARE_ACCOUNT_ID=$ACCOUNT_ID" >> "$GLOBAL_CONFIG"
  echo "✅ Cloudflare token saved"
fi

echo ""

# Anthropic API Key (for github-describe.sh auto-README)
if grep -q "ANTHROPIC_API_KEY" "$GLOBAL_CONFIG" 2>/dev/null; then
  echo "✅ Anthropic API key already saved globally"
else
  echo "Paste your Anthropic API Key (for auto-README generation — optional, press Enter to skip):"
  read -r -s ANTHROPIC_KEY
  echo ""
  if [ -n "$ANTHROPIC_KEY" ]; then
    echo "ANTHROPIC_API_KEY=$ANTHROPIC_KEY" >> "$GLOBAL_CONFIG"
    echo "✅ Anthropic API key saved"
  else
    echo "⏭️  Skipped"
  fi
fi

chmod 600 "$GLOBAL_CONFIG"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Global setup complete. Saved to $GLOBAL_CONFIG"
echo ""
echo "From now on: just run the one-line installer in"
echo "any project and it works immediately. No per-project setup."
echo ""
echo "  curl -sL https://raw.githubusercontent.com/bazmahti/claude-code-session-memory/main/install.sh | bash"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
