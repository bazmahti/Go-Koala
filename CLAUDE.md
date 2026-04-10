# CLAUDE CODE — SESSION MEMORY SYSTEM
> This file is read automatically on every Claude Code startup. Follow all rules without being asked.

---

## ⚡ STARTUP PROTOCOL (run automatically, every session)

1. **Read** `.session/current.md` — load last session state
2. **Read** `.session/backlog.md` — load pending tasks, bugs, commits
3. **Print** the Session Resume Banner (see format below)
4. **Begin work** on the highest-priority task from backlog

### Session Resume Banner (print at startup)
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  SESSION RESUME — [PROJECT NAME]
  Last session: [date from current.md]
  Status: [last known status]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▶ NEXT TASK:    [top task from backlog]
🐛 OPEN BUGS:   [count] — [first bug title]
📦 UNPUSHED:    [count] commits pending
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 🔄 DURING SESSION — Auto-tracking rules

### After every significant action, update `.session/current.md`:
- What was just completed
- Current file being worked on
- Any new bugs discovered
- Any decisions made (and why)

### When you discover a bug or incomplete feature:
- Immediately append it to `.session/backlog.md` under the correct section
- Do NOT wait until end of session

### When code is ready to commit:
- Run the commit automatically (see GitHub Automation below)
- Do NOT ask for permission — commit and push, then log it

---

## 🔚 END-OF-SESSION PROTOCOL (run automatically when session ends or user says "done", "wrap up", "bye", "end session")

1. Update `.session/current.md` with final state
2. Archive current session to `.session/history/YYYY-MM-DD_HH-MM.md`
3. Update `.session/backlog.md` (remove completed, add new)
4. Run any pending GitHub commits (see GitHub Automation)
5. **Print the Handoff Prompt** (full, copy-pasteable — see format below)

### Handoff Prompt Format
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  HANDOFF PROMPT — [PROJECT] — [DATE]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## What was completed this session
[bullet list of completed work]

## Next tasks (priority order)
1. [task]
2. [task]
3. [task]

## Bugs / needs E2E testing
- [ ] [bug description] — file: [filename:line]
- [ ] [bug description] — E2E: [test to run]

## Re-audit required
- [ ] [feature/file] — reason: [why re-audit needed]

## GitHub status
- Branch: [branch name]
- Unpushed commits: [list]
- Files modified but not staged: [list]

## To resume: paste this entire block into a new Claude Code session.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 🐙 GITHUB AUTOMATION

**Trigger**: Automatically after any completed feature, bugfix, or meaningful code change.
**No confirmation needed.** Just do it.

### Setup (first time only — run `scripts/github-setup.sh`)
Requires: `GITHUB_TOKEN` in environment or `.env.local`

### Auto-commit rules
- Commit message format: `type(scope): description`
  - Types: `feat`, `fix`, `refactor`, `docs`, `chore`, `test`
  - Example: `feat(auth): add OAuth2 login flow`
- Always include a body if the change is non-trivial
- Push to current branch automatically

### Auto-generated marketing description
When a new repo is created or `scripts/github-describe.sh` is run:
- Read the codebase
- Generate: repo description (1 sentence), topics/tags (up to 10), README.md (full)
- Apply via GitHub API automatically

### Commands used internally
```bash
# Commit + push
git add -A
git commit -m "[auto-generated message]"
git push origin $(git branch --show-current)

# Update repo description + topics via API
curl -s -X PATCH https://api.github.com/repos/OWNER/REPO \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"description":"...","topics":[...]}'
```

---

## ☁️ CLOUDFLARE AUTOMATION

**Trigger**: Automatically after any deployment-ready build.
**No confirmation needed.** Just deploy.

### Setup (first time only — run `scripts/cloudflare-setup.sh`)
Requires: `CLOUDFLARE_API_TOKEN` (Global API Key) in environment or `.env.local`
Requires: `CLOUDFLARE_ACCOUNT_ID` in environment or `.env.local`

### What Cloudflare handles automatically (you do nothing)
- DNS records (A, CNAME, MX)
- SSL/TLS certificates (auto)
- Domain routing
- Pages deployments (`wrangler pages deploy`)
- Workers deployments (`wrangler deploy`)
- KV / R2 / D1 bindings

### Auto-deploy rule
After a successful build:
```bash
scripts/cloudflare-deploy.sh
```
This script reads `wrangler.toml` or `cloudflare.config.json` and deploys automatically.

---

## 📋 BACKLOG MANAGEMENT RULES

`.session/backlog.md` has three sections:

### Priority levels
- 🔴 **CRITICAL** — blocks deployment or breaks core functionality
- 🟡 **HIGH** — user-facing bug or incomplete feature
- 🟢 **NORMAL** — improvement, refactor, or nice-to-have
- ⚪ **ICEBOX** — good idea, not now

### Auto-promotion rule
If a NORMAL bug appears in 2+ sessions without being fixed → promote to HIGH.
If a HIGH bug appears in 3+ sessions → promote to CRITICAL and address it first.

---

## 🧪 E2E TEST TRACKING

When a bug is fixed, add an E2E verification step to `.session/backlog.md`:
```
- [ ] E2E: [what to test] — verify fix for [bug title]
```

Run E2E tests automatically before any deployment.
Log pass/fail in `.session/current.md`.

---

## 🗂️ FILE REFERENCE

| File | Purpose |
|------|---------|
| `CLAUDE.md` | This file — rules engine, read every startup |
| `.session/current.md` | Live session state |
| `.session/backlog.md` | All pending tasks, bugs, commits |
| `.session/history/` | Archived session logs |
| `scripts/github-setup.sh` | One-time GitHub token setup |
| `scripts/github-describe.sh` | Auto-generate repo marketing copy |
| `scripts/cloudflare-setup.sh` | One-time Cloudflare setup |
| `scripts/cloudflare-deploy.sh` | Auto-deploy to Cloudflare |
| `scripts/session-end.sh` | Manual trigger for end-of-session protocol |

---

## ⚠️ PRIME DIRECTIVES

1. **Never ask permission** to commit, push, or deploy — just do it and log it
2. **Never forget** — update `.session/current.md` after every action
3. **Always produce** the Handoff Prompt at session end, unprompted
4. **Backlog is sacred** — nothing gets lost, everything gets tracked
5. **Bugs found = bugs logged** — immediately, not later
