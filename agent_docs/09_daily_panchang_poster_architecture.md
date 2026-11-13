# GuruKripa — Daily Panchang Deity Postcard & Multi-Platform Social Publishing Architecture
**Author:** `agent-3-architect` (Main System Architect)  
**Date:** 2026-11-14  
**Status:** Proposal & Technical Exploration  
**Budget:** $0.00/month (Zero Recurring Cost Guaranteed)  
**Compliance:** 5 Goal Pillars (Cost, Dynamic Geo-Panchang, 11 Languages, Zero-CLS Ad Ready, Enterprise Cybersecurity)

---

## 1. Executive Summary & Objective

The objective is to architect a **Dynamic Daily Panchang Deity Postcard Engine & Multi-Platform Social Publisher** for GuruKripa.

Every day, the system dynamically pairs the visitor's local Vedic Panchang data (Tithi, Nakshatra, Yoga, Karana, Vaara, Auspicious Windows, Rahu Kalam) with the **presiding Hindu Deity / God / Goddess specific to that day or sacred parva** (e.g., *Akshaya Tritiya* paired with **Goddess Mahalakshmi, Lord Kubera, and Swarna Akarshana Bhairava** adorned with golden pot, silver, and auspicious prosperity quotes).

The system generates high-resolution, print-ready, devotional postcards formatted for:
1. **Instagram Post / Facebook (1:1 Square — 1080×1080 px & 4:5 Portrait — 1080×1350 px)**
2. **Instagram Stories / WhatsApp Status / YouTube Shorts (9:16 Vertical — 1080×1920 px)**
3. **X (Twitter) Feed (16:9 Landscape — 1200×675 px)**

It enables **1-Click Native Social Publishing** on mobile devices via the HTML5 Web Share API, instant high-res PNG download, and an automated zero-cost headless social publisher via GitHub Actions for official accounts.

---

## 2. Deity & Sacred Day Dynamic Mapping Engine

The engine computes the presiding deity using a prioritized 4-tier astronomical rule engine:

```
                               ┌────────────────────────────────────────────────────────┐
                               │           Daily Astronomical Date & Ephemeris          │
                               └────────────────────────────────────────────────────────┘
                                                           │
                                                           ▼
                               ┌────────────────────────────────────────────────────────┐
                               │  Tier 1: Annual Sacred Parva / Festival Overrides      │
                               │  • Akshaya Tritiya (Vaishakha Shukla Tritiya)          │
                               │    -> Goddess Lakshmi, Kubera, Swarna Akarshana Bhairav │
                               │  • Maha Shivaratri (Magha Krishna Chaturdashi) -> Shiva│
                               │  • Krishna Janmashtami (Bhadrapada Krishna Ashtami)     │
                               │  • Rama Navami (Chaitra Shukla Navami) -> Sri Rama     │
                               │  • Vinayaka Chaturthi (Bhadrapada Shukla Chaturthi)     │
                               │  • Skanda Sashti (Kartika Shukla Shashthi) -> Murugan   │
                               │  • Deepavali (Kartika Amavasya) -> Lakshmi & Ganesha   │
                               └────────────────────────────────────────────────────────┘
                                                           │ (If not a major festival)
                                                           ▼
                               ┌────────────────────────────────────────────────────────┐
                               │  Tier 2: Tithi & Paksha Governance                    │
                               │  • Ekadashi (11th) -> Maha Vishnu / Narayana           │
                               │  • Trayodashi / Pradosham (13th) -> Shiva & Nandi      │
                               │  • Chaturthi (4th) -> Sri Ganesha                      │
                               │  • Ashtami / Navami (8th/9th) -> Maa Durga / Sri Rama  │
                               │  • Purnima (15th) -> Sri Satyanarayana & Lalita Devi   │
                               │  • Amavasya (30th) -> Pitru Devatas & Mahakali         │
                               └────────────────────────────────────────────────────────┘
                                                           │ (Fallback to weekly rhythm)
                                                           ▼
                               ┌────────────────────────────────────────────────────────┐
                               │  Tier 3: Vaara (Weekday) Presiding Divinities          │
                               │  • Ravivara (Sun) -> Lord Surya Narayana               │
                               │  • Somavara (Mon) -> Lord Chandramouliswara (Shiva)    │
                               │  • Mangalavara (Tue) -> Lord Hanuman / Lord Murugan    │
                               │  • Budhavara (Wed) -> Sri Krishna / Lord Vishnu        │
                               │  • Guruvara (Thu) -> Sri Brihaspati / Dattatreya       │
                               │  • Shukravara (Fri) -> Maa Mahalakshmi / Kamakshi Devi │
                               │  • Shanivara (Sat) -> Sri Venkateswara / Shani Dev     │
                               └────────────────────────────────────────────────────────┘
```

---

## 3. Case Study: Akshaya Tritiya Poster Specification

When the visitor selects or arrives on **Akshaya Tritiya** (Vaishakha Shukla Tritiya):

| Component | Content & Aesthetic Rendering |
| :--- | :--- |
| **Presiding Divinities** | **Maa Mahalakshmi** (Bestower of Ashta Lakshmi prosperity), **Lord Kubera** (Cosmic Treasurer of Navanidhis), and **Swarna Akarshana Bhairava** (Attractor of divine gold and destroyer of scarcity). |
| **Visual Elements** | Imperial Gold & Vermillion Red glowing border, overflowing kalasha of gold coins, silver ornaments, glowing lotus flowers, and sacred Bilva leaves. |
| **Panchang Snapshot** | Localized to visitor city: *Date, Sunrise/Sunset, Shukla Tritiya, Rohini Nakshatra, Shobhana Yoga, Taitila Karana, Abhijit & Gold Purchase Muhurtas*. |
| **Auspicious Sanskrit Mantra** | *ॐ श्रीं ह्रीं क्लीं त्रिभुवनमहालक्ष्म्यै अस्माकं दारिद्र्यं नाशय नाशय प्रचुरधनं देहि देहि क्लीं ह्रीं श्रीं ॐ ॥* |
| **Sacred Blessing Quote** | *"On this auspicious Akshaya Tritiya, may the divine grace of Goddess Mahalakshmi and Lord Kubera endow your home with imperishable spiritual wisdom, noble wealth, and everlasting peace."* |
| **Language Support** | Displayed in any of the **11 scripts** selected by the user. |

---

## 4. Multi-Platform Social Publishing Architecture

### Strategy A: 1-Click Client-Side Native Sharing (Zero-Cost, Universal)
* **Technology:** HTML5 Canvas API + `canvas.toBlob()` + `navigator.share({ files: [imageFile], title, text, url })`.
* **User Experience:**
  1. Visitor views the daily Panchang and clicks **"🎨 Create Deity Postcard"**.
  2. The visitor selects the target aspect ratio (**Instagram 1:1, Story 9:16, or X 16:9**) and theme (**Swarna Gold, Temple Saffron, Sacred Maroon, Neelkanth Blue**).
  3. The visitor taps **"Share on Instagram / X / WhatsApp"**.
  4. On mobile devices (Android / iOS), the OS native share sheet opens with the high-resolution postcard image pre-attached. The user picks Instagram Stories, X post, or WhatsApp status with one tap.
  5. On desktop, provides 1-Click **"📥 Download PNG (300 DPI)"**, **"📋 Copy Image to Clipboard"** (for pasting with `Ctrl+V` into WhatsApp Web or Twitter), and pre-filled web intent links.
* **Cost:** **$0.00/month**.

### Strategy B: Automated Headless Social Publishing (Official Channel Broadcast)
For official GuruKripa social media accounts (@GuruKripaDaily on X and Instagram):
* **Trigger:** Integrated into the existing **2:00 AM IST daily GitHub Actions CI/CD workflow** (`.github/workflows/ci-cd-daily.yml`).
* **Execution Pipeline:**
  1. A Node.js headless renderer (`scripts/publish-social-poster.js`) runs at 2:00 AM IST.
  2. Generates the day's deity postcard for standard IST coordinates (New Delhi / Ujjain / Kashi).
  3. **Publishing to X (Twitter):** Calls X API v2 `POST https://api.twitter.com/2/tweets` with media upload. Free tier allows 1,500 posts/month ($0 cost).
  4. **Publishing to Instagram:** Calls Meta Graph API `POST https://graph.facebook.com/v19.0/{ig_user_id}/media` with `image_url` followed by `media_publish`. Free for Instagram Creator/Business accounts ($0 cost).
* **Cost:** **$0.00/month**.

---

## 5. Architectural Blueprint & Trade-Offs

```
┌────────────────────────────────────────────────────────────────────────┐
│                        GuruKripa Client Application                    │
├────────────────────────────────────────────────────────────────────────┤
│ 1. panchang-engine.js (Astronomical Math, Tithi, Nakshatra, Muhurtas)   │
│ 2. deity-poster-engine.js (Deity Mapping, Mantras, Quotes, Layouts)     │
│ 3. HTML5 Canvas Renderer (1080x1080, 1080x1350, 1080x1920, 1200x675)  │
│ 4. transliteration-engine.js (11 Indic Scripts font rendering)         │
│ 5. Web Share API & Clipboard Engine (Direct Instagram, X, WhatsApp)   │
└────────────────────────────────────────────────────────────────────────┘
```

| Evaluation Dimension | Client-Side 1-Click Canvas | Headless Server-Side Bot (Puppeteer) | Third-Party SaaS (Bannerbear/Canva API) |
| :--- | :--- | :--- | :--- |
| **Recurring Cost** | **$0.00 / month** | $10–$30/mo (VPS server needed for Chrome) | $49–$199/month subscription |
| **User Privacy** | **100% Private (Renders in browser)** | Data logged on server | Third-party cloud tracking |
| **Offline Capability** | **100% Functional in PWA offline** | Fails without internet | Fails without API connection |
| **11-Language Font Fidelity** | **Uses client-loaded Google Noto fonts** | Complex font installation on Linux | Limited Indic script support |
| **Scalability** | **Infinite (Zero server CPU load)** | Severely limited by server concurrency | Monthly API call limits |
| **Recommendation** | **OFFICIALLY SELECTED** | Optional add-on for official brand | Rejected (Violates Pillar 1) |

---

## 6. Implementation Roadmap

1. **Phase 1: Engine & Catalog Creation (`src/data/deity-poster-engine.js`)**
   - Implement festival and tithi-to-deity rule mapping.
   - Curate authentic Sanskrit mantras, English purports, and auspicious deity blessing quotes across all 30 Tithis and major festivals (Akshaya Tritiya, Shivaratri, Janmashtami, Navaratri, Ekadashis, Pradoshams).
2. **Phase 2: High-DPI Multi-Aspect Canvas Generator (`src/main.js` & CSS)**
   - Add "🎨 Share Deity Postcard" button on the Panchang overview banner.
   - Build modal with live aspect ratio selector:
     - Square (1:1 — 1080×1080) for Instagram & Facebook
     - Portrait (4:5 — 1080×1350) for Instagram Feed
     - Vertical Story (9:16 — 1080×1920) for WhatsApp Status & IG Story
     - Landscape (16:9 — 1200×675) for X (Twitter)
   - Add theme selectors: *Swarna Gold (Lakshmi/Kubera)*, *Temple Saffron*, *Sacred Maroon*, *Neelkanth Blue*.
3. **Phase 3: Multi-Platform Export & Social Sharing**
   - Web Share API for native mobile sharing with image attachment.
   - Copy-to-Clipboard and High-Res PNG download.
   - Pre-composed X and WhatsApp share intent links.
4. **Phase 4: Automated Testing & CI/CD Verification**
   - Automated test suite `tests/deity-poster.test.js` validating that all 30 tithis and festivals map to valid deities, mantras, and quotes without undefined values.
