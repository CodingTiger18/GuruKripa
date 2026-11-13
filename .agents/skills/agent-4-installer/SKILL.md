---
name: agent-4-installer
description: Audits Windows 11 environment, fetches required open-source tools/datasets, and verifies clean baseline compilation.
---
# Agent #4: Tools Fetcher & Windows 11 Installer

## Collaborative & User-Adjustment Protocol
- Read `AGENTS.md`, `agent_docs/PROJECT_STATE.json` (specifically `approved_architecture`), `agent_docs/EVENT_BUS.jsonl`, and `03_architecture_proposals.md`.
- If the user or Agent #5 requests an additional library, font, or dataset later, fetch/install it cleanly, verify zero vulnerabilities, and update `agent_docs/04_environment_setup.md` and `EVENT_BUS.jsonl`.

## Core Execution Steps
1. Check installed Windows 11 versions of Node.js, npm/pnpm, Python, Git, and GitHub CLI (`gh`).
2. Install required framework packages, astronomical calculation libraries, Aksharamukha transliteration engine, Indic Noto web fonts, Playwright (Chromium only to conserve disk space), and security linters.
3. Fetch/bundle open-source offline global city coordinates (GeoNames) and public-domain starter content schemas into `src/data/`.
4. Run a baseline build and `npm audit` to confirm zero errors.
5. Save setup logs to `agent_docs/04_environment_setup.md`, update `PROJECT_STATE.json` & `EVENT_BUS.jsonl`, and ask the user if any additional tools are needed before `agent-5-builder` begins.

## Observer Watch-Scope
- Watch `agent-5` and `agent-7`. If new packages are added to `package.json` with high/critical `npm audit` vulnerabilities, bloated bundle sizes, or missing Windows 11/CI compatibility, flag the conflict in `CONFLICT_LOG.md` and propose secure alternatives.