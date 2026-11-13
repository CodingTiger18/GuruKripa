# GuruKripa — GitHub CI/CD Automation & Deployment Setup (Stage 7)
**Author:** `agent-7-cicd`  
**Date:** 2026-11-13  
**Status:** Completed  
**Observer Status:** No active conflicts in `CONFLICT_LOG.md`. Fully aligned with the 5 Goal Pillars ($0 cost, dynamic global geo-Panchang, 11 scripts, AdSense zero-CLS safety, zero-loophole cybersecurity).

---

## Executive Summary
This document establishes the automated continuous integration and continuous deployment (CI/CD) infrastructure for **GuruKripa**. 

A hardened GitHub Actions workflow (`.github/workflows/ci-cd-daily.yml`) has been configured to execute on every code push, every pull request, and **daily on a recurring schedule at 2:00 AM IST** (Indian Standard Time, UTC `30 20 * * *`). The pipeline automatically audits dependencies, executes the 16-suite astronomical and multi-language test suite, refreshes daily SEO sitemap timestamps, compiles clean production bundles, and deploys atomically to Cloudflare Pages at **$0/month recurring cost**.

---

## 1. Automated CI/CD Workflow Architecture

```
                               ┌────────────────────────────────────────────────────────┐
                               │                 GitHub Actions Triggers                │
                               │  • Push to main                                        │
                               │  • Pull Request to main                                │
                               │  • Daily Cron: 2:00 AM IST (20:30 UTC)                 │
                               │  • Manual Workflow Dispatch                            │
                               └────────────────────────────────────────────────────────┘
                                                           │
                                                           ▼
                               ┌────────────────────────────────────────────────────────┐
                               │          Job 1: audit-test-build (Ubuntu)              │
                               ├────────────────────────────────────────────────────────┤
                               │ 1. Checkout repository (actions/checkout@v4)           │
                               │ 2. Setup Node.js v24 with npm cache                    │
                               │ 3. npm install                                         │
                               │ 4. npm audit --audit-level=high (Supply-Chain Check)   │
                               │ 5. npm test (16 Test Suites: Astro, 11 Scripts, Japa)  │
                               │ 6. Auto-update sitemap.xml <lastmod> timestamps        │
                               │ 7. npm run build (Compile to dist/)                    │
                               │ 8. Audit dist/ for zero test files, maps, or secrets   │
                               │ 9. Upload dist/ as workflow artifact                   │
                               └────────────────────────────────────────────────────────┘
                                                           │
                                                           ▼ (If branch == main)
                               ┌────────────────────────────────────────────────────────┐
                               │          Job 2: deploy-cloudflare                      │
                               ├────────────────────────────────────────────────────────┤
                               │ 1. Download dist/ artifact                             │
                               │ 2. Atomic deployment to Cloudflare Pages Anycast Edge  │
                               │ 3. Zero-downtime cache invalidation across 300+ PoPs   │
                               └────────────────────────────────────────────────────────┘
```

---

## 2. Schedule Specification (2:00 AM IST)

```yaml
schedule:
  # Daily at 2:00 AM IST (Indian Standard Time, UTC +5:30)
  # 2:00 AM IST minus 5 hours 30 minutes = 20:30 UTC of previous day
  # Cron format: minute (30), hour (20), day (*), month (*), weekday (*)
  - cron: '30 20 * * *'
```

* **Why 2:00 AM IST?**
  - Runs during the quiet spiritual pre-dawn hours before Brahma Muhurta (4:00 AM – 6:00 AM).
  - Refreshes sitemap dates and verifies all planetary calculation baselines before morning temple visitors wake up in India, the Middle East, and Southeast Asia.

---

## 3. GitHub Secrets Configuration Matrix

| Secret Identifier | Purpose | How to Acquire |
| :--- | :--- | :--- |
| `CLOUDFLARE_API_TOKEN` | Authorizes Wrangler action to push builds to Cloudflare Pages | Cloudflare Dashboard → My Profile → API Tokens → Create Token (Cloudflare Pages template) |
| `CLOUDFLARE_ACCOUNT_ID` | Identifies your Cloudflare account | Cloudflare Dashboard → Overview URL / Account ID |

---

## 4. Git Repository & Ignore Configuration

The `.gitignore` has been hardened to prevent accidental leakage of sensitive files or bloated build outputs:
* Node modules (`node_modules/`) and package lock files.
* Local environment files (`.env`, `.env.*`).
* Ephemeral debug files (`*.log`, `.DS_Store`, `Thumbs.db`).
* Build directories (`dist/`), while explicitly tracking the release package (`release/GuruKripa-production-v1.0.zip`).
