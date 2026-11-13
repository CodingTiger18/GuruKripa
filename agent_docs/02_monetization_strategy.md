# GuruKripa — Ad-Revenue & Monetization Strategy (Stage 2)
**Author:** `agent-2-monetization`  
**Date:** 2026-11-13  
**Status:** Completed  
**Observer Status:** No active conflicts in `CONFLICT_LOG.md`. Fully aligned with the 5 Goal Pillars ($0 cost, dynamic global geo-Panchang, 11 scripts, AdSense zero-CLS safety, zero-loophole cybersecurity).

---

## Executive Summary
This document establishes the monetization and sustainable ad-revenue strategy for **GuruKripa**. Spiritual and Vedic astrology portals generate substantial pageviews with extended dwell time (users chanting Japa, checking daily Muhurtas, and reciting stotras). 

To achieve maximum RPM (Revenue Per Mille) across both **Tier-1 Indian Diaspora Traffic** (US, UK, Canada, Australia, Singapore, UAE) and **Domestic Indian Vernacular Traffic**—while strictly preserving zero recurring infrastructure cost and zero Cumulative Layout Shift (CLS)—this plan outlines:
1. **Ad Network Hierarchy & Approval Blueprint** (Google AdSense as primary anchor).
2. **Zero-CLS Responsive Ad-Slot Specifications** (Pre-allocated CSS layout containers).
3. **Content Originality & Copyright Safety Guidelines** (Ensuring instant AdSense approval).
4. **Ethical Spiritual Affiliate & Merchandising Roadmap** (Books, puja essentials, brass items).
5. **Cookieless, Zero-Cost Analytics & Consent Management** (Cloudflare Web Analytics + Lightweight GDPR/CCPA banner).
6. **Machine-Readable JSON Ad-Slot Blueprint** for `agent-3-architect` and `agent-5-builder`.

---

## 1. Traffic Demographics & Ad Revenue Potential

### 1.1 Traffic Segmentation & RPM Benchmarks
GuruKripa addresses two high-value audience segments:

| Demographic | Share of Visits | Avg. CPM / RPM Range | Key User Intent | Preferred Ad Formats |
| :--- | :--- | :--- | :--- | :--- |
| **Tier-1 Diaspora** (USA, UK, Canada, Australia, Singapore) | 35% – 45% | **\$12.00 – \$28.00** | High-precision local Panchang, festival muhurtas, festival calendars, moral stories for children | Sticky bottom desktop banners, in-article display units, premium travel/remittance native ads |
| **Indian Domestic & Vernacular** (Metros & Tier 2/3) | 55% – 65% | **\$1.20 – \$4.50** | Daily Rahu Kalam/Yamagandam, Gowri Panchangam, daily stotras, Japa chanting | Mobile anchor banners (320x50), native in-feed units between shlokas, festive shopping ads |

### 1.2 User Journey & Monetization Touchpoints
* **Daily Morning Routine (Panchang Page):** Devotees check local sunrise, Tithi, Nakshatra, and inauspicious timings. Dwell time: 45–90 seconds. Optimal ad slot: Below sunrise summary card (pre-allocated 728x90 desktop / 300x250 mobile).
* **Deep Meditation Routine (108 Japa Mala):** Devotees spend 10–25 minutes chanting. To preserve spiritual sanctity and prevent distraction, **zero interstitial or video popup ads** are allowed on the Japa screen; only a subtle, non-intrusive reserved banner at the screen foot is permitted.
* **Devotional Recitation (Slokas & Stotras):** Devotees chant verses line by line. Dwell time: 3–8 minutes. Optimal ad slots: Header leaderboard and in-article banner between the final verse and the concluding philosophical commentary (*Phalastuti*).
* **Family / Cultural Reading (Moral Stories & Tid-bits):** High shareability and social traffic. Dwell time: 2–5 minutes. Optimal ad slot: Inline native ad between story and the interactive dilemma quiz.

---

## 2. Ad Network Evaluation & Phased Rollout

| Ad Network | Minimum Traffic Threshold | Revenue Share / Terms | Pros | Cons | Recommendation |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Google AdSense** | 0 visits (Content quality review) | 68% publisher share; monthly payout at \$100 | Universal demand, automated contextual matching for Vedic/Indian queries, global advertiser pool, zero cost to integrate. | Strict editorial policy; account ban risk if site has scraped or duplicate text. | **Primary Day-1 Network (Approved)** |
| **Ezoic** | 0 visits (Access Now tier) | Standard rev share; automated ML layout testing | High programmatic yield via header bidding. | Injects multiple client-side JS wrappers, potential CLS degradation, slower mobile page speed. | Phase 2 (Optional testing after 100k visits) |
| **Mediavine** | 50,000 monthly sessions | 75% publisher share | Industry-leading RPMs (\$25–\$45), dedicated ad optimization team. | High traffic barrier; requires English primary traffic. | Phase 3 (Long-term diaspora goal) |
| **Raptive (AdThrive)** | 100,000 monthly pageviews | 75% publisher share | Highest Tier-1 RPMs. | Requires 50%+ US traffic and strict traffic minimum. | Phase 3 (Long-term) |

---

## 3. Strict Zero-CLS Ad-Slot Architecture

A critical flaw identified by `agent-1-explorer` in competitor portals (Drik Panchang, AstroSage) is **Cumulative Layout Shift (CLS)**. When third-party ad scripts load asynchronously, they pop into existence and shove textual content downwards, ruining user experience and triggering Google Search ranking penalties.

GuruKripa guarantees **CLS < 0.02** by enforcing CSS container dimension reservations:

```
┌──────────────────────────────────────────────────────────────┐
│  Ad Container Wrapper (.gk-ad-wrapper)                      │
│  - CSS contain: layout;                                      │
│  - CSS aspect-ratio / min-height enforced                   │
│  - Subdued background placeholder ("Sponsor Message")        │
│                                                              │
│      ┌────────────────────────────────────────────────┐      │
│      │  Google AdSense Unit (Ins Tag / Script)        │      │
│      │  (Fills pre-allocated space smoothly)          │      │
│      └────────────────────────────────────────────────┘      │
└──────────────────────────────────────────────────────────────┘
```

### 3.1 Standard Pre-Allocated Ad Slots

1. **`ad-header-leaderboard`**
   - Viewport: Desktop ($\ge 768px$)
   - Dimensions: `728px × 90px` (or `970px × 90px` Super Leaderboard)
   - CSS: `min-height: 90px; width: 100%; max-width: 728px; margin: 12px auto; contain: layout;`
2. **`ad-panchang-inline`**
   - Viewport: Responsive (Mobile & Desktop)
   - Dimensions: `336px × 280px` (Desktop Large Rectangle) / `300px × 250px` (Mobile Medium Rectangle)
   - CSS: `min-height: 280px; width: 100%; max-width: 336px; margin: 16px auto; contain: layout;`
3. **`ad-stotra-incontent`**
   - Viewport: Responsive
   - Dimensions: `300px × 250px`
   - Placement: Positioned strictly after Verse sections and before concluding Commentary.
4. **`ad-footer-anchor`**
   - Viewport: Mobile ($< 768px$)
   - Dimensions: `320px × 50px` (or `320px × 100px` Large Mobile Banner)
   - Placement: Sticky bottom bar with close toggle (`x`), styled with backdrop-filter blur.

---

## 4. Google AdSense Approval & Copyright Safety Protocol

Google AdSense strictly rejects websites that violate "Low Value Content", "Scraped Content", or copyright ownership. GuruKripa eliminates this risk through a rigorous 4-step compliance protocol:

1. **100% Public-Domain Foundation:**
   - Texts are restricted to ancient Sanskrit classics whose copyrights have expired by centuries: *Valmiki Ramayana, Vyasa Mahabharata, Rig Veda Suktas, Adi Shankaracharya Stotras, Vishnu Sahasranama, Narayana Hitopadesha, Vishnu Sharma Panchatantra*.
2. **Original Value-Add Commentary:**
   - Every sloka and story must be accompanied by:
     * Structured word-by-word Sanskrit-to-English literal meanings (*Śabdārtha*).
     * Fluid philosophical translation.
     * Original practical purport explaining how the verse or fable applies to contemporary spiritual, psychological, and ethical dilemmas.
3. **Mandatory Legal & Policy Pages:**
   - `public/privacy.html`: Comprehensive GDPR, CCPA, and Google AdSense Cookie disclosure.
   - `public/terms.html`: Terms of service, copyright attribution, and fair use disclosures.
   - `public/disclaimer.html`: Astrological and spiritual educational disclaimer.
   - `public/about.html`: Editorial mission, linguistic methodology, and non-profit $0 ethos.
4. **`ads.txt` Integration:**
   - Root-level file `public/ads.txt` formatted per IAB standards to authorize Google AdSense inventory sellers:
     ```text
     google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
     ```

---

## 5. Ethical Spiritual Affiliate Roadmap

To supplement ad revenue without visual clutter, GuruKripa integrates non-intrusive, contextual affiliate partnerships:

1. **Sacred Scriptural Books:**
   - Contextual affiliate links to authentic publishers (Gita Press Gorakhpur editions, Motilal Banarsidass academic publications, Chaukhamba Sanskrit Pratishthan) on Amazon Associates.
   - E.g., On Bhagavad Gita verses $\rightarrow$ "View Authentic Gita Press Hardcover Edition".
2. **Puja Essentials & Natural Incense:**
   - Direct affiliate partnerships with ethical, certified natural agarbatti, pure cow ghee wicks, and cold-pressed sesame oil producers.
3. **Certified Japa Malas:**
   - Contextual link inside the Digital Japa Mala settings $\rightarrow$ "Looking for a consecrated physical Mala? View certified 5-Mukhi Indonesian/Nepali Rudraksha & Vrindavan Tulsi Malas".

---

## 6. Cookieless Analytics & Lightweight Consent Management

To maintain zero recurring cost and full GDPR/CCPA privacy compliance without slowing down page load:
* **Cloudflare Web Analytics ($0/month):**
  - Cookieless, privacy-first, lightweight beacon JS script (`< 1KB`).
  - Measures pageviews, unique visitors, top countries, referrers, and Core Web Vitals without collecting personal data or IP addresses.
* **Lightweight Custom Consent Banner:**
  - Zero third-party vendor monthly fees (avoiding OneTrust/Cookiebot \$20–\$50/mo charges).
  - Clean HTML/CSS banner that checks `localStorage.getItem('gk_consent')`.
  - Supports Google Consent Mode v2 signals (`ad_storage: 'denied'`, `analytics_storage: 'granted'`).

---

## 7. Machine-Readable JSON Ad-Slot Blueprint

This JSON structure is consumed by `agent-3-architect` and `agent-5-builder` for component rendering:

```json
{
  "monetization_version": "1.0.0",
  "primary_network": "Google AdSense",
  "publisher_id_placeholder": "ca-pub-XXXXXXXXXXXXXXXX",
  "ads_txt_path": "/ads.txt",
  "zero_cls_enforced": true,
  "ad_slots": [
    {
      "id": "ad-header-leaderboard",
      "format": "leaderboard",
      "desktop_dimensions": { "width": 728, "height": 90 },
      "mobile_dimensions": { "width": 320, "height": 50 },
      "placement": "top_navigation_sub_header",
      "css_container": "min-height: 90px; width: 100%; max-width: 728px; margin: 12px auto; contain: layout; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.02); border-radius: 8px;",
      "allowed_pages": ["home", "panchang", "stotras", "stories", "blogs"]
    },
    {
      "id": "ad-panchang-inline",
      "format": "medium_rectangle",
      "desktop_dimensions": { "width": 336, "height": 280 },
      "mobile_dimensions": { "width": 300, "height": 250 },
      "placement": "below_muhurta_grid",
      "css_container": "min-height: 280px; width: 100%; max-width: 336px; margin: 20px auto; contain: layout; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.02); border-radius: 8px;",
      "allowed_pages": ["panchang"]
    },
    {
      "id": "ad-stotra-incontent",
      "format": "responsive_rectangle",
      "desktop_dimensions": { "width": 336, "height": 280 },
      "mobile_dimensions": { "width": 300, "height": 250 },
      "placement": "between_verse_and_purport",
      "css_container": "min-height: 280px; width: 100%; max-width: 336px; margin: 24px auto; contain: layout; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.02); border-radius: 8px;",
      "allowed_pages": ["stotras"]
    },
    {
      "id": "ad-story-native",
      "format": "in_feed_native",
      "desktop_dimensions": { "width": 600, "height": 200 },
      "mobile_dimensions": { "width": 300, "height": 250 },
      "placement": "between_story_and_moral_quiz",
      "css_container": "min-height: 200px; width: 100%; max-width: 600px; margin: 20px auto; contain: layout; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.02); border-radius: 8px;",
      "allowed_pages": ["stories"]
    },
    {
      "id": "ad-footer-anchor",
      "format": "mobile_sticky_anchor",
      "desktop_dimensions": { "width": 728, "height": 90 },
      "mobile_dimensions": { "width": 320, "height": 50 },
      "placement": "fixed_viewport_bottom",
      "css_container": "position: fixed; bottom: 0; left: 0; right: 0; z-index: 999; display: flex; justify-content: center; background: rgba(255,255,255,0.95); backdrop-filter: blur(8px); border-top: 1px solid #e0e0e0; min-height: 50px;",
      "allowed_pages": ["home", "panchang", "stotras", "stories", "blogs"]
    }
  ],
  "disallowed_screens": [
    "japa_mala_active_screen",
    "fullscreen_meditation_mode"
  ]
}
```
