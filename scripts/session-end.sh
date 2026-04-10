#!/usr/bin/env bash
# scripts/session-end.sh
# Manually trigger end-of-session protocol.
# Claude Code runs this automatically. You can also run it yourself.
# Usage: bash scripts/session-end.sh

set -e

TIMESTAMP=$(date '+%Y-%m-%d_%H-%M')
DATE_DISPLAY=$(date '+%Y-%m-%d %H:%M')
BRANCH=$(git branch --show-current 2>/dev/null || echo "unknown")
PROJECT=$(basename "$(pwd)")

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  SESSION END — $PROJECT"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Archive current session
if [ -f ".session/current.md" ]; then
  mkdir -p .session/history
  cp .session/current.md ".session/history/$TIMESTAMP.md"
  echo "✅ Session archived: .session/history/$TIMESTAMP.md"
fi

# Check git status
UNCOMMITTED=$(git status --porcelain 2>/dev/null | wc -l | tr -d ' ')
UNPUSHED=$(git log origin/"$(git branch --show-current)"..HEAD --oneline 2>/dev/null | wc -l | tr -d ' ')

if [ "$UNCOMMITTED" -gt "0" ]; then
  echo ""
  echo "⚠️  $UNCOMMITTED uncommitted file(s). Committing now..."
  git add -A
  git commit -m "chore: end-of-session auto-commit [$DATE_DISPLAY]"
fi

if [ "$UNPUSHED" -gt "0" ]; then
  echo "⬆️  Pushing $UNPUSHED commit(s)..."
  git push origin "$BRANCH"
fi

# Get backlog summary
CRITICAL=$(grep -c "^- \[ \]" .session/backlog.md 2>/dev/null | tr -d ' ' || echo "0")

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  PASTE THIS INTO YOUR NEXT SESSION:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "## Resuming: $PROJECT — $DATE_DISPLAY"
echo ""
echo "### Last session summary"
cat .session/current.md 2>/dev/null | grep -A 20 "## Completed this session"
echo ""
echo "### Open backlog"
cat .session/backlog.md 2>/dev/null | grep -E "^(##|🔴|🟡|🧪|📦|🔍)" | head -20
echo ""
echo "### Git status"
echo "- Branch: $BRANCH"
echo "- All changes pushed: ✅"
echo ""
echo "Start by reading .session/current.md and .session/backlog.md, then resume work."
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
