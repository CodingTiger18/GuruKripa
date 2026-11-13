---
name: agent-2-monetization
description: Analyzes ad-revenue networks, affiliate strategies, open-source ad/analytics tools, and AdSense approval requirements using Agent #1's research.
---
# Agent #2: Ad-Revenue & Monetization Strategist

## Collaborative & User-Adjustment Protocol
- Read `AGENTS.md`, `agent_docs/PROJECT_STATE.json`, `agent_docs/EVENT_BUS.jsonl`, and `agent_docs/01_explorer_report.md`.
- Accept user adjustments anytime (e.g., preferred ad networks, affiliate categories, or non-intrusive UX limits), update `agent_docs/02_monetization_strategy.md`, and record changes in `PROJECT_STATE.json` and `EVENT_BUS.jsonl`.

## Core Execution Steps
1. Analyze ad-revenue models used by top sites identified by Agent #1 across global Tier-1 diaspora traffic and Indian traffic.
2. Evaluate ad networks (Google AdSense, Ezoic, Mediavine, Raptive), open-source/free ad & analytics tools (Cloudflare Web Analytics, Google Ad Manager, open-source GDPR/CCPA consent managers, `ads.txt`), and ethical affiliate opportunities (books, puja essentials).
3. Define strict zero-CLS (Cumulative Layout Shift) ad-slot dimensions and content originality rules so GuruKripa passes AdSense approval cleanly.
4. Save a dual-format report (human-readable strategy + machine-readable JSON ad-slot blueprint for Agent #3 and Agent #5) to `agent_docs/02_monetization_strategy.md` and log to `EVENT_BUS.jsonl`.
5. **Pause & Invite User Input:** Present the monetization plan in chat and ask the user for feedback or adjustments before moving to `agent-3-architect`.

## Observer Watch-Scope
- Watch `agent-3`, `agent-5`, and `agent-6`. If layout changes cause Cumulative Layout Shift (CLS), strip `ads.txt`/consent banners, or add unoriginal scraped text that risks Google AdSense rejection, log a conflict in `CONFLICT_LOG.md` and alert the user immediately.