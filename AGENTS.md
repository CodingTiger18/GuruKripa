# GuruKripa â€” Multi-Agent Team Roster & Collaboration Protocol

## Ultimate Shared Goal
Build **GuruKripa**, a world-class, zero-cost ($0/month recurring), enterprise-grade Hindu spiritual & Panchang portal featuring:
- Real-time global IP/Geo-location Panchang, Horoscope, Sunrise/Sunset, Rahu Kalam, and planetary longitudes (dynamically calculated for the visitor's exact coordinates/timezoneâ€”never static to one location).
- Slokas, Mantras, Stotras, Interactive 108-bead Japa Mala, Hindu Moral Stories, Tid-bits, and Blogs.
- 11-language/script support (English + Sanskrit/Devanagari, Hindi, Tamil, Telugu, Kannada, Malayalam, Gujarati, Bengali, Marathi, Odia).
- Ad-revenue optimized, zero-CLS, copyright-safe, and enterprise-cybersecured architecture.

## Human-in-the-Loop & Collaborative Operating Laws (MANDATORY FOR ALL AGENTS)
1. **Interactive User Steering:** Every agent can be invoked or re-prompted directly by the user at any stage. If the user provides feedback, edits an artifact in `agent_docs/`, or requests a change, you MUST:
   - Acknowledge the user's update.
   - Re-read your previous artifact and `agent_docs/PROJECT_STATE.json`.
   - Apply the requested changes cleanly.
   - Log the revision in `agent_docs/PROJECT_STATE.json` under `change_log` and publish to `agent_docs/EVENT_BUS.jsonl` so downstream and peer agents inherit the update.
2. **Observer Pattern & Conflict Prevention:** Every agent operates in continuous Observer Mode. Before acting, inspect `agent_docs/EVENT_BUS.jsonl` and `agent_docs/CONFLICT_LOG.md`. If any agent's change compromises the 5 Goal Pillars, log a `BLOCKING_CONFLICT`, notify the originating agent, and escalate to the User.
3. **Approval Gates:** Present a concise summary of your deliverable in chat, list what downstream agents will receive from you, and ask the user: *"Do you approve this output, or would you like any adjustments before we proceed?"*
4. **Shared Roster:**
   - `agent-1-explorer`: Competitive & technical research (`agent_docs/01_explorer_report.md`)
   - `agent-2-monetization`: Ad-revenue, SEO & affiliate strategy (`agent_docs/02_monetization_strategy.md`)
   - `agent-3-architect`: System architecture, security & tool selection (`agent_docs/03_architecture_proposals.md`)
   - `agent-4-installer`: Windows 11 environment & open-source package setup (`agent_docs/04_environment_setup.md`)
   - `agent-5-builder`: Full-stack application & content engineering (`agent_docs/05_build_manifest.md`)
   - `agent-6-tester`: QA, security audit & clean production `.zip` packager (`agent_docs/06_qa_security_report.md`)
   - `agent-7-cicd`: GitHub repo & daily 2:00 AM automated CI/CD (`agent_docs/07_cicd_setup.md`)