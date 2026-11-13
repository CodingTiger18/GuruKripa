# GuruKripa — Production Deployment & AdSense Activation Guide
**Zero-Cost ($0/Month) Setup Guide for Cloudflare Pages, GitHub CI/CD & Google AdSense**

---

## 1. Zero-Cost Hosting Architecture
GuruKripa is engineered to operate at **$0/month recurring cost** with infinite scalability and enterprise-grade performance. Because all astronomical calculations and script transliterations execute 100% inside the visitor's browser, there are zero server compute bills, zero API fees, and zero database hosting costs.

### Hosting Option A (Recommended): Cloudflare Pages
* **Cost:** $0.00 / month forever (Unlimited bandwidth, 300+ global edge Anycast locations, automatic Brotli compression, and free Universal SSL).
* **Setup Steps:**
  1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/) (free tier).
  2. Navigate to **Workers & Pages** → **Create Application** → **Pages** → **Connect to Git**.
  3. Select your `GuruKripa` repository.
  4. Set Build Settings:
     - **Framework preset:** `Vite`
     - **Build command:** `npm run build`
     - **Build output directory:** `dist`
  5. Click **Save and Deploy**. Your portal will be instantly live at `https://gurukripa.pages.dev`.

### Hosting Option B (Fallback): GitHub Pages
* **Cost:** $0.00 / month.
* **Setup Steps:**
  1. In your GitHub repository, navigate to **Settings** → **Pages**.
  2. Under **Build and deployment** → **Source**, select **GitHub Actions**.
  3. Every push to `main` will build and publish automatically.

---

## 2. Automated Daily CI/CD Workflow (2:00 AM IST)

GuruKripa includes `.github/workflows/ci-cd-daily.yml` configured to run automatically:
1. On every push or pull request to the `main` branch.
2. **Every night at 2:00 AM IST (Indian Standard Time)** via UTC cron `30 20 * * *`.

### Configuring GitHub Secrets for Atomic Deployment:
To allow the workflow to deploy directly to your Cloudflare Pages project:
1. In Cloudflare, go to **My Profile** → **API Tokens** → **Create Token** → use **Cloudflare Pages** template.
2. In GitHub, go to your repository → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**:
   - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token.
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare Account ID (found on your dashboard home URL).

---

## 3. Custom Domain, Free SSL & DNSSEC Setup

To connect a branded domain (e.g., `www.gurukripa.org` or `gurukripa.com`):
1. In Cloudflare Pages, click your `gurukripa` project → **Custom domains** → **Set up a domain**.
2. Enter your custom domain (e.g., `gurukripa.org`).
3. If your domain's DNS is managed by Cloudflare, it will automatically configure the CNAME and DNSSEC records with one click.
4. Universal SSL certificate will be issued automatically within 5 minutes.

---

## 4. Google AdSense Activation & Approval Checklist

GuruKripa is pre-configured with all files necessary for immediate Google AdSense approval:

| Step | Requirement | Pre-Engineered Location in GuruKripa |
| :--- | :--- | :--- |
| **1. Authorized Sellers** | `ads.txt` present at root | `public/ads.txt` → published at `/ads.txt` |
| **2. Legal Disclosures** | Privacy, Terms, Disclaimer | `public/privacy.html`, `public/terms.html`, `public/disclaimer.html` |
| **3. Original Content** | Public domain texts + original commentary | `src/data/slokas-data.js` and `src/data/stories-data.js` |
| **4. Zero CLS Ad Layouts** | Pre-allocated CSS ad slots | `src/styles/ad-slots.css` (Guarantees Core Web Vitals CLS < 0.02) |
| **5. Cookieless Consent** | Consent Mode v2 banner | `src/main.js` (`#gk-consent-banner`) |

### Activating Your Google AdSense Account:
1. Sign in to your [Google AdSense Dashboard](https://www.google.com/adsense/).
2. Click **Sites** → **Add Site** → Enter your domain (e.g. `https://gurukripa.pages.dev` or your custom domain).
3. Copy your AdSense Publisher ID (format: `pub-XXXXXXXXXXXXXXXX`).
4. Replace the placeholder in `public/ads.txt`:
   ```text
   google.com, pub-YOUR_ACTUAL_ID, DIRECT, f08c47fec0942fa0
   ```
5. In `index.html`, uncomment the Google AdSense script tag in the `<head>`:
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ACTUAL_ID" crossorigin="anonymous"></script>
   ```
6. Commit, push, and let the CI/CD pipeline deploy. Google will review and approve your site within 24 to 48 hours.
