#!/usr/bin/env bash
# scripts/github-describe.sh
# Auto-generates repo description, topics, and README using Claude, then applies via GitHub API.
# Triggered automatically after first deploy or on demand.
# Usage: bash scripts/github-describe.sh

set -e

# Load global credentials first, then local overrides
source "$HOME/.session-memory/config" 2>/dev/null || true
source .env.local 2>/dev/null || true

if [ -z "$GITHUB_TOKEN" ]; then
  echo "❌ GITHUB_TOKEN not set. Run scripts/github-setup.sh first."
  exit 1
fi

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  GitHub Auto-Describe"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Collect codebase summary for Claude
CODEBASE_SUMMARY=$(find . \
  -not -path './.git/*' \
  -not -path './node_modules/*' \
  -not -path './.session/*' \
  -name '*.md' -o -name '*.json' -o -name '*.ts' -o -name '*.js' -o -name '*.py' \
  2>/dev/null | head -40 | xargs head -n 30 2>/dev/null | head -500)

PACKAGE_JSON=""
[ -f "package.json" ] && PACKAGE_JSON=$(cat package.json)

# Ask Claude to generate marketing copy
echo "📝 Generating marketing copy via Claude API..."

RESPONSE=$(curl -s https://api.anthropic.com/v1/messages \
  -H "Content-Type: application/json" \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -d "$(cat <<EOF
{
  "model": "claude-opus-4-5",
  "max_tokens": 1024,
  "messages": [{
    "role": "user",
    "content": "You are writing GitHub repository marketing copy. Based on this codebase, generate:\n1. A one-sentence repository description (max 350 chars, no markdown)\n2. Up to 10 GitHub topics (lowercase, hyphenated, no spaces, relevant to the tech and purpose)\n3. A complete README.md (professional, developer-focused, with badges placeholder, features list, quick start, and license section)\n\nRespond ONLY in this JSON format with no markdown fences:\n{\"description\":\"...\",\"topics\":[\"tag1\",\"tag2\"],\"readme\":\"...\"}\n\nCodebase context:\n$PACKAGE_JSON\n\n$CODEBASE_SUMMARY"
  }]
}
EOF
)")

# Parse response
DESCRIPTION=$(echo "$RESPONSE" | python3 -c "
import sys, json
data = json.load(sys.stdin)
content = json.loads(data['content'][0]['text'])
print(content['description'])
" 2>/dev/null)

TOPICS=$(echo "$RESPONSE" | python3 -c "
import sys, json
data = json.load(sys.stdin)
content = json.loads(data['content'][0]['text'])
print(json.dumps(content['topics']))
" 2>/dev/null)

README=$(echo "$RESPONSE" | python3 -c "
import sys, json
data = json.load(sys.stdin)
content = json.loads(data['content'][0]['text'])
print(content['readme'])
" 2>/dev/null)

echo "📋 Description: $DESCRIPTION"
echo "🏷️  Topics: $TOPICS"

# Apply description + topics via GitHub API
curl -s -X PATCH "https://api.github.com/repos/$GITHUB_OWNER/$GITHUB_REPO" \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"description\":\"$DESCRIPTION\"}" > /dev/null

curl -s -X PUT "https://api.github.com/repos/$GITHUB_OWNER/$GITHUB_REPO/topics" \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.mercy-preview+json" \
  -H "Content-Type: application/json" \
  -d "{\"names\":$TOPICS}" > /dev/null

# Write and commit README
echo "$README" > README.md
git add README.md
git commit -m "docs: auto-generated README and repo marketing copy" 2>/dev/null || true
git push origin "$(git branch --show-current)" 2>/dev/null || true

echo "✅ GitHub repo updated:"
echo "   https://github.com/$GITHUB_OWNER/$GITHUB_REPO"
