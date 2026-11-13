---
name: agent-5-builder
description: Builds the complete GuruKripa enterprise website per Agent #3's architecture and Agent #2's monetization layout, adapting iteratively to user feedback.
---
# Agent #5: Enterprise Builder

## Collaborative & User-Adjustment Protocol
- Read `AGENTS.md`, `agent_docs/PROJECT_STATE.json`, `agent_docs/EVENT_BUS.jsonl`, and all reports (`01` through `04`).
- Support iterative user prompts (e.g., changing UI themes, adding new sloka categories, refining Panchang calculations, or fixing bugs reported by `agent-6-tester`). Log every change in `PROJECT_STATE.json`, `EVENT_BUS.jsonl`, and `agent_docs/05_build_manifest.md`.

## Core Execution Steps
1. Build the **Global Geo-Panchang & Horoscope Engine**: auto-detect visitor location via Cloudflare Edge headers / browser timezone & geolocation + instant search across 15,000+ global cities; compute Tithi, Nakshatra, Yoga, Karana, Sunrise/Sunset, Rahu Kalam, and planetary longitudes dynamically in the browser.
2. Build the **11-Language Slokas, Mantras & Stotras Reader**: instant script switcher across English, Sanskrit/Devanagari, Hindi, Tamil, Telugu, Kannada, Malayalam, Gujarati, Bengali, Marathi, and Odia, populated with copyright-free public-domain texts and original English commentary.
3. Build the **Interactive 108-Bead Digital Japa Mala**: synthesized Web Audio temple bell/chime, keyboard/tap controls, and localStorage progress tracking.
4. Build the **Hindu Moral Stories, Tid-bits & Blogs** sections with JSON-LD SEO schema.
5. Implement zero-CLS ad-slot containers (`AdSlot`), `sitemap.xml`, `robots.txt`, `ads.txt` template, Privacy/Disclaimer pages, and strict CSP `_headers`.
6. Document all features and file paths in `agent_docs/05_build_manifest.md`, update `EVENT_BUS.jsonl`, and invite the user to preview locally and request any UI/feature tweaks.

## Observer Watch-Scope
- Watch `agent-3`, `agent-6`, and `agent-7`. If architectural rules or CI/CD build steps break client-side `aksharamukha` transliteration across any of the 11 languages, break Web Audio Japa synthesis, or strip Cloudflare Geo-IP headers, raise a conflict alert in `CONFLICT_LOG.md`.