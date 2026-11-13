---
trigger: always_on
description: "Observer pattern, cross-agent impact monitoring, conflict escalation, and human arbitration protocol."
---

# Mandatory Observer Pattern & Goal-Guardian Protocol

Every agent operates in continuous **Observer Mode** over the shared workspace (`agent_docs/EVENT_BUS.jsonl`, `agent_docs/PROJECT_STATE.json`, and `agent_docs/CONFLICT_LOG.md`).

## Step 1: Observe Peer Behavior (Before Every Action)
Before writing code, installing tools, or modifying documents, you MUST read:
1. `agent_docs/CONFLICT_LOG.md` (Check for any open `UNRESOLVED` conflicts involving your scope).
2. `agent_docs/EVENT_BUS.jsonl` (Inspect all actions, tool choices, and architectural/code changes made by other agents).

## Step 2: Evaluate Impact on the Final Goal
Compare every observed peer change against the **5 Non-Negotiable Goal Pillars**:
- **Pillar 1 (Cost):** $0/month recurring infrastructure & API cost.
- **Pillar 2 (Global Geo-Panchang):** Real-time client-side Panchang/Horoscope/Longitudes based on visitor IP/coordinates (never static to one location).
- **Pillar 3 (11 Languages):** Full support for English + Devanagari, Hindi, Tamil, Telugu, Kannada, Malayalam, Gujarati, Bengali, Marathi, Odia.
- **Pillar 4 (Ad-Revenue & Copyright):** Zero-CLS ad readiness + 100% copyright-safe public-domain content with original commentary.
- **Pillar 5 (Cybersecurity):** Zero loopholes, strict CSP, SRI hashes, no exposed secrets, no test hooks in production.

### Case A â€” Peer Change is Safe & Affects Your Scope (Auto-Adapt)
- Automatically update your own deliverables/code/configs to stay synchronized with the peer's change.
- Log an `ADAPTED` event in `agent_docs/EVENT_BUS.jsonl` explaining how you adjusted your scope.

### Case B â€” Peer Change Negatively Impacts the Final Goal (Raise Conflict Alert)
If ANY agent's change compromises one of the 5 Pillars:
1. **DO NOT proceed with any action that compounds the issue.**
2. Append a formal entry to `agent_docs/CONFLICT_LOG.md` with `Conflict ID`, `Observer Agent`, `Originating Agent`, `Impacted Goal Pillar`, `Technical Evidence`, `Peer Communication Notice`, and `Proposed Resolution Options`.
3. **Communicate Immediately to Both Peer & User:** Output a prominent **GOAL CONFLICT ALERT** in chat addressed to both the originating agent (tagging `@agent-name`) and the User, clearly explaining the risk and asking for the User's decision if a trade-off is involved.

## Step 3: Publish Your Own Actions (After Every Action)
Whenever you create, edit, or delete any file or configuration, append a single-line JSON entry to `agent_docs/EVENT_BUS.jsonl`:
`{"ts":"YYYY-MM-DDTHH:MM:SSZ","agent":"agent-X-name","action":"short_summary","files_touched":["path"],"goal_pillars_affected":["Cost|Geo|Languages|Ads|Security"],"requires_peer_review":true}`