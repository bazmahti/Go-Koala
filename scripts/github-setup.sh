#!/usr/bin/env bash
# scripts/github-setup.sh
# One-time GitHub token setup. Run once per project.
# Usage: bash scripts/github-setup.sh

set -e

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  GitHub Automation Setup"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

ENV_FILE=".env.local"

# Check if token already set
if grep -q "GITHUB_TOKEN" "$ENV_FILE" 2>/dev/null; then
  echo "✅ GITHUB_TOKEN already configured in $ENV_FILE"
else
  echo "Paste your GitHub Personal Access Token (needs: repo, workflow scopes):"
  read -r -s GITHUB_TOKEN
  echo "GITHUB_TOKEN=$GITHUB_TOKEN" >> "$ENV_FILE"
  echo "✅ Token saved to $ENV_FILE"
fi

# Get repo info
REPO_OWNER=$(git remote get-url origin | sed -n 's/.*github.com[:/]\([^/]*\)\/.*/\1/p')
REPO_NAME=$(git remote get-url origin | sed -n 's/.*\/\([^.]*\)\.git$/\1/p')

if [ -z "$REPO_OWNER" ] || [ -z "$REPO_NAME" ]; then
  echo ""
  echo "No GitHub remote found. Create one?"
  echo "Enter GitHub username/org:"
  read -r REPO_OWNER
  echo "Enter repository name:"
  read -r REPO_NAME
  echo "Private repo? (y/n):"
  read -r IS_PRIVATE

  PRIVATE_FLAG="false"
  [ "$IS_PRIVATE" = "y" ] && PRIVATE_FLAG="true"

  source "$ENV_FILE"
  curl -s -X POST https://api.github.com/user/repos \
    -H "Authorization: Bearer $GITHUB_TOKEN" \
    -H "Content-Type: application/json" \
    -d "{\"name\":\"$REPO_NAME\",\"private\":$PRIVATE_FLAG,\"auto_init\":false}" \
    > /dev/null

  git remote add origin "https://github.com/$REPO_OWNER/$REPO_NAME.git"
  echo "✅ Repo created: https://github.com/$REPO_OWNER/$REPO_NAME"
fi

# Save repo info
echo "GITHUB_OWNER=$REPO_OWNER" >> "$ENV_FILE"
echo "GITHUB_REPO=$REPO_NAME" >> "$ENV_FILE"

echo ""
echo "✅ GitHub setup complete."
echo "   Repo: https://github.com/$REPO_OWNER/$REPO_NAME"
echo ""
echo "Run 'bash scripts/github-describe.sh' to auto-generate marketing copy."
