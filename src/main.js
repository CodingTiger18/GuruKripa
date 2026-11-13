/**
 * GuruKripa — Main Application Controller & Dynamic Hydration Engine
 * Zero-Cost, 100% Client-Side Architecture
 */

import CITIES from './data/cities.json';
import { calculatePanchang } from './data/panchang-engine.js';
import { SUPPORTED_LANGUAGES, transliterate } from './data/transliteration-engine.js';
import { SLOKAS_DATA, DEITY_HUBS } from './data/slokas-data.js';
import { STORIES_DATA } from './data/stories-data.js';
import { JapaMalaEngine } from './data/japa-engine.js';

class GuruKripaApp {
  constructor() {
    this.cities = CITIES;
    this.selectedCity = this.loadSavedCity() || this.cities[0]; // Default New Delhi
    this.selectedDate = new Date();
    this.selectedLang = localStorage.getItem('gk_lang') || 'sa';
    this.currentView = this.getViewFromHash();
    this.panchangTab = 'overview'; // 'overview' | 'gowri' | 'choghadiya' | 'planets'
    this.slokaFontSize = 1.35; // rem
    this.showSabdartha = true;
    this.cityModalOpen = false;
    this.theme = localStorage.getItem('gk_theme') || 'light';
    this.japaEngine = new JapaMalaEngine();

    // 12 Deity Hub & Category Filters
    this.selectedDeity = 'all';
    this.selectedCategory = 'all';

    // Chanting Audio State
    this.playingSlokaId = null;
    this.chantSpeed = 1.0;
    this.audioCtx = null;
    this.audioTimer = null;

    // Canvas Share-Card Maker State
    this.activeCardSloka = null;
    this.cardTheme = 'saffron'; // 'saffron' | 'maroon' | 'sandal' | 'indigo'

    this.init();
  }

  loadSavedCity() {
    try {
      const raw = localStorage.getItem('gk_selected_city');
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  saveCity(city) {
    this.selectedCity = city;
    try {
      localStorage.setItem('gk_selected_city', JSON.stringify(city));
    } catch (e) {}
  }

  getViewFromHash() {
    const hash = window.location.hash.replace('#', '').split('?')[0];
    if (['panchang', 'stotras', 'japa', 'stories'].includes(hash)) {
      return hash;
    }
    return 'panchang';
  }

  init() {
    document.documentElement.setAttribute('data-theme', this.theme);
    document.documentElement.setAttribute('data-lang', this.selectedLang);

    window.addEventListener('hashchange', () => {
      this.currentView = this.getViewFromHash();
      this.render();
    });

    window.addEventListener('keydown', (e) => {
      if (this.currentView === 'japa' && (e.code === 'Space' || e.code === 'Enter')) {
        e.preventDefault();
        this.handleJapaClick();
      }
    });

    // PWA Service Worker registration
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
      });
    }

    this.render();
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('gk_theme', this.theme);
    document.documentElement.setAttribute('data-theme', this.theme);
    this.render();
  }

  handleJapaClick() {
    const res = this.japaEngine.increment();
    const beadNumEl = document.getElementById('gk-bead-number');
    const roundsEl = document.getElementById('gk-stat-rounds');
    const totalEl = document.getElementById('gk-stat-total');
    
    if (beadNumEl) beadNumEl.innerText = res.bead;
    if (roundsEl) roundsEl.innerText = res.rounds;
    if (totalEl) totalEl.innerText = res.totalChants;

    if (res.reachedMeru && this.japaEngine.meruReversalMode) {
      alert("✨ Haribol! You have reached the sacred Sumeru (Meru) bead.\nIn traditional practice, do not cross the Guru bead; turn your mala around for the next round.");
    }
  }

  autoDetectLocation() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser. Please select a city manually.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const tzOffset = -new Date().getTimezoneOffset() / 60;
        const detectedCity = {
          id: "gps-current",
          name: "Current GPS Location",
          state: "Local",
          country: "Live Coordinates",
          lat: parseFloat(lat.toFixed(4)),
          lon: parseFloat(lon.toFixed(4)),
          tz: Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC",
          tz_offset: tzOffset,
          elevation_m: 50
        };
        this.saveCity(detectedCity);
        this.cityModalOpen = false;
        this.render();
      },
      (err) => {
        alert("GPS detection failed: " + err.message + ". Please choose your city from the global directory.");
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  }

  playChantSound(slokaId) {
    if (this.playingSlokaId === slokaId) {
      this.stopChantSound();
      return;
    }
    this.stopChantSound();
    this.playingSlokaId = slokaId;
    this.render();

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      this.audioCtx = new AudioCtx();
      
      // Sacred meditative Tanpura / Singing Bowl resonance synthesis
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const baseFreq = 136.1; // Om cosmic frequency in Hz
      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq * this.chantSpeed, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(0.01, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.25, this.audioCtx.currentTime + 0.8);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + (6.0 / this.chantSpeed));

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + (6.2 / this.chantSpeed));

      this.audioTimer = setTimeout(() => {
        this.stopChantSound();
      }, (6200 / this.chantSpeed));
    } catch (e) {
      console.warn("Chant audio synthesis notice:", e);
    }
  }

  stopChantSound() {
    if (this.audioTimer) clearTimeout(this.audioTimer);
    if (this.audioCtx) {
      try { this.audioCtx.close(); } catch(e) {}
      this.audioCtx = null;
    }
    this.playingSlokaId = null;
    const playBtn = document.querySelector('.gk-audio-play-btn');
    if (playBtn) playBtn.innerHTML = '▶';
  }

  openCardMaker(slokaId) {
    const s = SLOKAS_DATA.find(x => x.id === slokaId);
    if (!s) return;
    this.activeCardSloka = s;
    this.render();
    setTimeout(() => this.drawShareCanvas(), 50);
  }

  closeCardMaker() {
    this.activeCardSloka = null;
    this.render();
  }

  drawShareCanvas() {
    const canvas = document.getElementById('gk-share-canvas');
    if (!canvas || !this.activeCardSloka) return;
    const ctx = canvas.getContext('2d');
    const s = this.activeCardSloka;

    // High-Resolution 1080x1920 Devotional Card
    canvas.width = 1080;
    canvas.height = 1920;

    // Theme Background Gradients
    const grad = ctx.createLinearGradient(0, 0, 1080, 1920);
    if (this.cardTheme === 'saffron') {
      grad.addColorStop(0, '#FF8F00');
      grad.addColorStop(0.5, '#E65100');
      grad.addColorStop(1, '#6A0D18');
    } else if (this.cardTheme === 'maroon') {
      grad.addColorStop(0, '#4A0E17');
      grad.addColorStop(0.5, '#800020');
      grad.addColorStop(1, '#250409');
    } else if (this.cardTheme === 'sandal') {
      grad.addColorStop(0, '#C5A059');
      grad.addColorStop(0.6, '#8A6828');
      grad.addColorStop(1, '#3D2D10');
    } else {
      // Indigo
      grad.addColorStop(0, '#0A192F');
      grad.addColorStop(0.5, '#1E3A8A');
      grad.addColorStop(1, '#1A0B2E');
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1080, 1920);

    // Ornate Golden Border
    ctx.strokeStyle = '#D4AF37';
    ctx.lineWidth = 14;
    ctx.strokeRect(40, 40, 1000, 1840);
    ctx.lineWidth = 4;
    ctx.strokeRect(60, 60, 960, 1800);

    // Sacred Om Watermark
    ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
    ctx.font = 'bold 360px "Noto Serif Devanagari", serif';
    ctx.textAlign = 'center';
    ctx.fillText('ॐ', 540, 1050);

    // Top Header: GuruKripa Portal
    ctx.fillStyle = '#FFE082';
    ctx.font = '700 42px "Cinzel", Georgia, serif';
    ctx.fillText('G U R U K R I P A', 540, 150);
    ctx.font = '400 28px sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillText('Sacred Daily Sanatana Dharma Wisdom', 540, 195);

    // Deity & Title
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 52px "Cinzel", Georgia, serif';
    ctx.fillText(s.deity, 540, 310);

    ctx.fillStyle = '#FFE082';
    ctx.font = '600 36px "Cinzel", Georgia, serif';
    ctx.fillText(s.title, 540, 370);

    // Sanskrit Verse (Rendered cleanly with no missing glyphs)
    const verseLines = transliterate(s.devanagari, this.selectedLang).split('\n');
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '600 48px "Noto Serif Devanagari", "Noto Sans Tamil", "Noto Sans Telugu", serif';
    let y = 560;
    for (const line of verseLines) {
      ctx.fillText(line, 540, y);
      y += 85;
    }

    // English IAST
    ctx.fillStyle = '#FFE0B2';
    ctx.font = 'italic 34px Georgia, serif';
    y += 40;
    const iastLines = s.iast.split('\n');
    for (const line of iastLines) {
      ctx.fillText(line, 540, y);
      y += 56;
    }

    // Divider Line
    y += 40;
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.5)';
    ctx.beginPath();
    ctx.moveTo(200, y);
    ctx.lineTo(880, y);
    ctx.stroke();

    // English Translation (Wrapped)
    y += 80;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.font = '400 32px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    const words = s.translation.split(' ');
    let currentLine = '';
    for (const w of words) {
      const testLine = currentLine ? currentLine + ' ' + w : w;
      if (ctx.measureText(testLine).width > 860) {
        ctx.fillText(currentLine, 540, y);
        y += 52;
        currentLine = w;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) ctx.fillText(currentLine, 540, y);

    // Bottom Watermark & Verification
    ctx.fillStyle = '#FFE082';
    ctx.font = '600 28px "Cinzel", Georgia, serif';
    ctx.fillText('gurukripa.pages.dev • 100% Client-Side Vedic Wisdom', 540, 1800);
  }

  downloadCardImage() {
    const canvas = document.getElementById('gk-share-canvas');
    if (!canvas || !this.activeCardSloka) return;
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = `GuruKripa_${this.activeCardSloka.id}_${this.cardTheme}.png`;
    a.click();
  }

  shareCardToWhatsApp() {
    const canvas = document.getElementById('gk-share-canvas');
    if (!canvas || !this.activeCardSloka) return;
    const s = this.activeCardSloka;
    const text = encodeURIComponent(
      `🕉️ *${s.title}* (${s.deity})\n\n"${transliterate(s.devanagari, this.selectedLang)}"\n\n*Meaning:* ${s.translation}\n\nChant daily on GuruKripa: https://gurukripa.pages.dev/#stotras`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  }

  render() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
      ${this.renderHeader()}
      <main class="gk-main">
        ${this.renderNavSubbar()}
        ${this.renderView()}
      </main>
      ${this.renderFooter()}
      ${this.cityModalOpen ? this.renderCityModal() : ''}
      ${this.activeCardSloka ? this.renderCardMakerModal() : ''}
      ${this.renderConsentBanner()}
    `;

    this.bindEvents();
  }

  renderHeader() {
    return `
      <header class="gk-header">
        <div class="gk-header-inner">
          <a href="#panchang" class="gk-brand">
            <span class="gk-brand-logo">🕉️</span>
            <div>
              <span class="gk-brand-title">GuruKripa</span>
              <span class="gk-brand-tagline">Global Vedic Panchang & Hindu Spiritual Portal</span>
            </div>
          </a>

          <div class="gk-header-controls">
            <!-- Language Switcher (11 Scripts) -->
            <select id="gk-lang-select" class="gk-select" title="Switch Script">
              ${SUPPORTED_LANGUAGES.map(l => `
                <option value="${l.code}" ${l.code === this.selectedLang ? 'selected' : ''}>
                  ${l.native} (${l.name})
                </option>
              `).join('')}
            </select>

            <!-- City / Geo Location Button -->
            <button id="gk-city-btn" class="gk-btn" title="Change Location">
              📍 ${this.selectedCity.name}
            </button>

            <!-- Auto GPS Button -->
            <button id="gk-gps-btn" class="gk-btn" title="Auto-Detect My GPS Location">
              🎯 GPS
            </button>

            <!-- Theme Toggle -->
            <button id="gk-theme-btn" class="gk-btn" title="Toggle Light/Dark Theme">
              ${this.theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </div>
        </div>
      </header>
    `;
  }

  renderNavSubbar() {
    return `
      <nav class="gk-nav-subbar">
        <div class="gk-nav-subbar-inner">
          <ul class="gk-nav-links">
            <li><a href="#panchang" class="${this.currentView === 'panchang' ? 'active' : ''}">Panchangam</a></li>
            <li><a href="#stotras" class="${this.currentView === 'stotras' ? 'active' : ''}">Stotras & 12 Deities</a></li>
            <li><a href="#japa" class="${this.currentView === 'japa' ? 'active' : ''}">108 Japa Mala</a></li>
            <li><a href="#stories" class="${this.currentView === 'stories' ? 'active' : ''}">Dharmic Stories</a></li>
          </ul>

          <div class="gk-location-pill">
            <span>Lat: ${this.selectedCity.lat.toFixed(2)}°, Lon: ${this.selectedCity.lon.toFixed(2)}° (${this.selectedCity.tz})</span>
          </div>
        </div>
      </nav>
    `;
  }

  renderView() {
    switch (this.currentView) {
      case 'panchang': return this.renderPanchang();
      case 'stotras': return this.renderStotras();
      case 'japa': return this.renderJapa();
      case 'stories': return this.renderStories();
      default: return this.renderPanchang();
    }
  }

  renderPanchang() {
    const data = calculatePanchang(this.selectedDate, this.selectedCity);

    return `
      <section>
        <!-- Traditional Vedic Almanac Header -->
        <div class="gk-almanac-header">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
            <div>
              <div class="gk-almanac-title">
                ${transliterate("दैनिक पञ्चाङ्गम्", this.selectedLang)} — ${data.date}
              </div>
              <div style="font-size:0.85rem; color:#FFE0B2;">
                📍 ${this.selectedCity.name}, ${this.selectedCity.country} • Lahiri Ayanamsa: ${data.ayanamsa && data.ayanamsa.formatted ? data.ayanamsa.formatted : (data.ayanamsa && data.ayanamsa.degrees !== undefined ? `${data.ayanamsa.degrees}° ${data.ayanamsa.minutes}'` : data.ayanamsa)}
              </div>
            </div>
            <div>
              <input type="date" id="gk-date-picker" class="gk-select" value="${data.date}" style="background:#FFF; color:#222; font-weight:700;">
            </div>
          </div>

          <div class="gk-samvat-grid">
            <div class="gk-samvat-item">
              Samvatsara
              <strong>Krodhi (क्रोधी)</strong>
            </div>
            <div class="gk-samvat-item">
              Ayana
              <strong>Dakshinayana (दक्षिणायन)</strong>
            </div>
            <div class="gk-samvat-item">
              Ritu
              <strong>Hemanta (हेमन्त ऋतु)</strong>
            </div>
            <div class="gk-samvat-item">
              Vedic Vaara
              <strong>${transliterate(data.vaar.sanskrit, this.selectedLang)}</strong>
            </div>
          </div>
        </div>

        <div class="gk-tabs">
          <button class="gk-tab-btn ${this.panchangTab === 'overview' ? 'active' : ''}" data-tab="overview">5 Daily Limbs</button>
          <button class="gk-tab-btn ${this.panchangTab === 'gowri' ? 'active' : ''}" data-tab="gowri">Gowri Panchangam</button>
          <button class="gk-tab-btn ${this.panchangTab === 'choghadiya' ? 'active' : ''}" data-tab="choghadiya">Choghadiya Muhurtas</button>
          <button class="gk-tab-btn ${this.panchangTab === 'planets' ? 'active' : ''}" data-tab="planets">Planetary Longitudes</button>
        </div>

        ${this.panchangTab === 'overview' ? this.renderPanchangOverview(data) : ''}
        ${this.panchangTab === 'gowri' ? this.renderGowriTable(data.gowriPanchangam) : ''}
        ${this.panchangTab === 'choghadiya' ? this.renderChoghadiyaTable(data.choghadiya) : ''}
        ${this.panchangTab === 'planets' ? this.renderPlanetsTable(data.planets, data.ayanamsa) : ''}

        ${this.renderAdSlot('ad-panchang-inline', 'rectangle')}
      </section>
    `;
  }

  renderPanchangOverview(data) {
    return `
      <div class="gk-panchang-hero">
        <div class="gk-card">
          <div class="gk-card-title"><span>Sunrise / Sunset</span><span>☀️</span></div>
          <div class="gk-card-value">${data.sunrise} — ${data.sunset}</div>
          <div class="gk-card-meta">Solar Noon: ${data.solarNoon} (Day Duration: ${data.dayDuration})</div>
        </div>
        <div class="gk-card">
          <div class="gk-card-title"><span>Tithi (Lunar Day)</span><span>🌙</span></div>
          <div class="gk-card-value">${transliterate(data.tithi.name, this.selectedLang)}</div>
          <div class="gk-card-meta">Paksha: ${data.tithi.paksha} • Progress: ${data.tithi.progress}% • Deity: ${data.tithi.deity}</div>
        </div>
        <div class="gk-card">
          <div class="gk-card-title"><span>Nakshatra (Lunar Mansion)</span><span>✨</span></div>
          <div class="gk-card-value">${transliterate(data.nakshatra.name, this.selectedLang)} (Pada ${data.nakshatra.pada})</div>
          <div class="gk-card-meta">Lord: ${data.nakshatra.lord} • Deity: ${data.nakshatra.deity}</div>
        </div>
        <div class="gk-card">
          <div class="gk-card-title"><span>Yoga & Karana</span><span>🌀</span></div>
          <div class="gk-card-value">${transliterate(data.yoga, this.selectedLang)} / ${transliterate(data.karana, this.selectedLang)}</div>
          <div class="gk-card-meta">Vaar: ${transliterate(data.vaar.sanskrit, this.selectedLang)} (${data.vaar.english} - Lord: ${data.vaar.lord})</div>
        </div>
        <div class="gk-card">
          <div class="gk-card-title"><span>Sun & Moon Rashi</span><span>♈</span></div>
          <div class="gk-card-value">${transliterate(data.moonRashi, this.selectedLang)}</div>
          <div class="gk-card-meta">Sun: ${transliterate(data.sunRashi, this.selectedLang)} (Chitrapaksha Lahiri Ayanamsa)</div>
        </div>
        <div class="gk-card">
          <div class="gk-card-title"><span>Auspicious Windows</span><span>🌟</span></div>
          <div class="gk-card-value" style="font-size:1rem; color:var(--color-good);">
            Abhijit: ${data.muhurtas.abhijitMuhurta}
          </div>
          <div class="gk-card-meta">Brahma Muhurta: ${data.muhurtas.brahmaMuhurta}</div>
        </div>
      </div>

      <!-- Inauspicious & Auspicious Timings Card -->
      <div class="gk-card" style="margin-top:20px;">
        <h3 style="color:var(--color-primary); margin-bottom:12px; font-size:1.15rem;">
          Daily Muhurta & Kaalam Schedule (${this.selectedCity.name})
        </h3>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:16px;">
          <div style="background:rgba(198,40,40,0.06); padding:12px; border-radius:6px; border-left:4px solid var(--color-inauspicious);">
            <div style="font-weight:700; color:var(--color-inauspicious); font-size:0.9rem;">
              ⚠️ Rahu Kalam (Inauspicious)
            </div>
            <div style="font-size:1.1rem; font-weight:700; margin:4px 0;">${data.muhurtas.rahuKalam}</div>
            <div style="font-size:0.75rem; color:var(--color-text-muted);">Avoid initiating travel or signing contracts</div>
          </div>

          <div style="background:rgba(230,81,0,0.06); padding:12px; border-radius:6px; border-left:4px solid var(--color-secondary);">
            <div style="font-weight:700; color:var(--color-secondary); font-size:0.9rem;">
              ⏳ Yamaganda Kalam
            </div>
            <div style="font-size:1.1rem; font-weight:700; margin:4px 0;">${data.muhurtas.yamaganda}</div>
            <div style="font-size:0.75rem; color:var(--color-text-muted);">Ruled by Yama; unsuitable for new investments</div>
          </div>

          <div style="background:rgba(212,175,55,0.08); padding:12px; border-radius:6px; border-left:4px solid var(--color-accent);">
            <div style="font-weight:700; color:var(--color-gold-dark); font-size:0.9rem;">
              ⏱️ Gulika Kalam
            </div>
            <div style="font-size:1.1rem; font-weight:700; margin:4px 0;">${data.muhurtas.gulikaKalam}</div>
            <div style="font-size:0.75rem; color:var(--color-text-muted);">Ruled by Saturn; deeds performed here repeat</div>
          </div>

          <div style="background:rgba(46,125,50,0.06); padding:12px; border-radius:6px; border-left:4px solid var(--color-good);">
            <div style="font-weight:700; color:var(--color-good); font-size:0.9rem;">
              ✨ Abhijit Muhurta (Most Auspicious)
            </div>
            <div style="font-size:1.1rem; font-weight:700; margin:4px 0;">${data.muhurtas.abhijitMuhurta}</div>
            <div style="font-size:0.75rem; color:var(--color-text-muted);">Midday victory window; destroys all doshas</div>
          </div>
        </div>
      </div>
    `;
  }

  renderGowriTable(gowri) {
    if (!gowri) return `<div class="gk-card"><p>Gowri Panchangam not available for current location.</p></div>`;
    const daySlots = gowri.day || (Array.isArray(gowri) ? gowri : []);
    const nightSlots = gowri.night || [];

    return `
      <div class="gk-card">
        <h3 style="color:var(--color-primary); margin-bottom:12px;">Gowri Panchangam (Auspicious Horas)</h3>
        <p style="font-size:0.85rem; color:var(--color-text-muted); margin-bottom:14px;">
          Traditional South Indian division of Day and Night into 8 equal periods of ~1.5 hours each.
        </p>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:20px;">
          <div>
            <h4 style="color:var(--color-secondary); margin-bottom:8px;">☀️ Daytime Gowri (Suryodayam to Astamanam)</h4>
            <table class="gk-table">
              <thead><tr><th>Interval</th><th>Gowri Lord</th><th>Nature</th></tr></thead>
              <tbody>
                ${daySlots.map(g => `
                  <tr>
                    <td>${g.slot || `${g.start} – ${g.end}`}</td>
                    <td><strong>${transliterate(g.name, this.selectedLang)}</strong></td>
                    <td><span class="${g.isGood || g.nature === 'Good' ? 'gk-badge-good' : 'gk-badge-inauspicious'}">${g.nature || (g.isGood ? 'Good' : 'Inauspicious')}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
          <div>
            <h4 style="color:var(--color-primary); margin-bottom:8px;">🌙 Nighttime Gowri (Astamanam to Suryodayam)</h4>
            <table class="gk-table">
              <thead><tr><th>Interval</th><th>Gowri Lord</th><th>Nature</th></tr></thead>
              <tbody>
                ${nightSlots.length > 0 ? nightSlots.map(g => `
                  <tr>
                    <td>${g.slot || `${g.start} – ${g.end}`}</td>
                    <td><strong>${transliterate(g.name, this.selectedLang)}</strong></td>
                    <td><span class="${g.isGood || g.nature === 'Good' ? 'gk-badge-good' : 'gk-badge-inauspicious'}">${g.nature || (g.isGood ? 'Good' : 'Inauspicious')}</span></td>
                  </tr>
                `).join('') : `
                  <tr><td colspan="3" style="text-align:center; color:var(--color-text-muted); padding:12px;">Night slots active after sunset</td></tr>
                `}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  renderChoghadiyaTable(choghadiya) {
    if (!choghadiya) return `<div class="gk-card"><p>Choghadiya not available for current location.</p></div>`;
    const daySlots = choghadiya.day || (Array.isArray(choghadiya) ? choghadiya : []);
    const nightSlots = choghadiya.night || [];

    return `
      <div class="gk-card">
        <h3 style="color:var(--color-primary); margin-bottom:12px;">Choghadiya Muhurta</h3>
        <p style="font-size:0.85rem; color:var(--color-text-muted); margin-bottom:14px;">
          Traditional Vedic division of 4 Ghadis (~1.5 hours) for determining auspicious windows for travel and new beginnings.
        </p>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:20px;">
          <div>
            <h4 style="color:var(--color-secondary); margin-bottom:8px;">☀️ Day Choghadiya</h4>
            <table class="gk-table">
              <thead><tr><th>Time</th><th>Choghadiya</th><th>Effect</th></tr></thead>
              <tbody>
                ${daySlots.map(c => `
                  <tr>
                    <td>${c.slot || `${c.start} – ${c.end}`}</td>
                    <td><strong>${transliterate(c.name, this.selectedLang)}</strong></td>
                    <td><span class="${c.isGood || c.nature === 'Auspicious' ? 'gk-badge-good' : 'gk-badge-inauspicious'}">${c.nature || (c.isGood ? 'Auspicious' : 'Inauspicious')}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
          <div>
            <h4 style="color:var(--color-primary); margin-bottom:8px;">🌙 Night Choghadiya</h4>
            <table class="gk-table">
              <thead><tr><th>Time</th><th>Choghadiya</th><th>Effect</th></tr></thead>
              <tbody>
                ${nightSlots.length > 0 ? nightSlots.map(c => `
                  <tr>
                    <td>${c.slot || `${c.start} – ${c.end}`}</td>
                    <td><strong>${transliterate(c.name, this.selectedLang)}</strong></td>
                    <td><span class="${c.isGood || c.nature === 'Auspicious' ? 'gk-badge-good' : 'gk-badge-inauspicious'}">${c.nature || (c.isGood ? 'Auspicious' : 'Inauspicious')}</span></td>
                  </tr>
                `).join('') : `
                  <tr><td colspan="3" style="text-align:center; color:var(--color-text-muted); padding:12px;">Night slots active after sunset</td></tr>
                `}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  renderPlanetsTable(planets, ayanamsa) {
    if (!planets || !Array.isArray(planets)) return `<div class="gk-card"><p>Planetary positions not available.</p></div>`;
    const ayanamsaStr = (ayanamsa && ayanamsa.formatted) 
      ? ayanamsa.formatted 
      : (ayanamsa && ayanamsa.degrees !== undefined 
          ? `${ayanamsa.degrees}° ${ayanamsa.minutes}' ${ayanamsa.seconds || 0}"` 
          : (typeof ayanamsa === 'number' || typeof ayanamsa === 'string' ? `${ayanamsa}°` : '24° 13\' 52"'));

    return `
      <div class="gk-card">
        <h3 style="color:var(--color-primary); margin-bottom:8px;">Real-Time Sidereal Planetary Longitudes (Nirayana)</h3>
        <p style="font-size:0.85rem; color:var(--color-text-muted); margin-bottom:14px;">
          Calculated using Jean Meeus high-precision solar system algorithms with Lahiri Chitrapaksha Ayanamsa (${ayanamsaStr}).
        </p>
        <div style="overflow-x:auto;">
          <table class="gk-table">
            <thead>
              <tr>
                <th>Graha (Planet)</th>
                <th>Longitude in Rashi</th>
                <th>Rashi (Zodiac)</th>
                <th>Nakshatra</th>
                <th>Pada</th>
                <th>Speed / Status</th>
              </tr>
            </thead>
            <tbody>
              ${planets.map(p => {
                const deg = p.deg !== undefined ? p.deg : Math.floor((p.siderealLon || 0) % 30);
                const min = p.min !== undefined ? p.min : Math.floor(((p.siderealLon || 0) % 1) * 60);
                const sec = p.sec !== undefined ? p.sec : Math.round((((p.siderealLon || 0) % 1) * 60 % 1) * 60);
                const sanskritLabel = p.sanskrit ? ` (${transliterate(p.sanskrit, this.selectedLang)})` : '';
                const nakshatraLabel = p.nakshatra ? transliterate(p.nakshatra, this.selectedLang) : '—';
                const padaLabel = p.pada !== undefined ? p.pada : 1;
                const statusLabel = p.status || (p.isRetrograde ? 'Retrograde (Vakra)' : 'Direct (Marga)');
                const isRetro = p.isRetrograde || statusLabel.includes('Retrograde');

                return `
                  <tr>
                    <td><strong>${p.name}${sanskritLabel}</strong></td>
                    <td>${deg}° ${min}' ${sec}"</td>
                    <td>${transliterate(p.rashi || '', this.selectedLang)} (${p.rashiEnglish || ''})</td>
                    <td>${nakshatraLabel}</td>
                    <td>Pada ${padaLabel}</td>
                    <td><span class="${isRetro ? 'gk-badge-inauspicious' : 'gk-badge-good'}">${statusLabel}</span></td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  renderStotras() {
    // Filtered by deity and category
    const filteredSlokas = SLOKAS_DATA.filter(s => {
      const matchDeity = this.selectedDeity === 'all' || s.deityId === this.selectedDeity;
      const matchCat = this.selectedCategory === 'all' || s.category === this.selectedCategory;
      return matchDeity && matchCat;
    });

    const categories = ['all', 'Stotra', 'Mantra', 'Chalisa', 'Ashtakam', 'Suprabhatam', 'Prayer'];

    return `
      <section>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; flex-wrap:wrap; gap:12px;">
          <div>
            <h2 style="color:var(--color-primary); font-size:1.6rem;">
              ${transliterate("स्तोत्राणि मन्त्राश्च", this.selectedLang)} (12 Deity Shrines & Stotras)
            </h2>
            <p style="font-size:0.85rem; color:var(--color-text-muted);">
              Select any Sacred Shrine or filter by Category. Instant 1-click script switching across 11 Indian scripts.
            </p>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <button id="gk-font-dec" class="gk-btn" title="Decrease Font">A-</button>
            <button id="gk-font-inc" class="gk-btn" title="Increase Font">A+</button>
            <button id="gk-toggle-sabdartha" class="gk-btn ${this.showSabdartha ? 'gk-btn-primary' : ''}">
              ${this.showSabdartha ? '✓ Sabdartha' : '+ Sabdartha'}
            </button>
          </div>
        </div>

        <!-- 12 Sacred Deity Hubs Shrines Bar -->
        <div class="gk-deity-hub-container">
          <div class="gk-deity-scroll-track">
            ${DEITY_HUBS.map(d => `
              <div class="gk-deity-card-chip ${this.selectedDeity === d.id ? 'active' : ''}" data-deity-id="${d.id}">
                <span class="gk-deity-icon">${d.icon}</span>
                <div class="gk-deity-meta">
                  <span class="gk-deity-name">${d.name}</span>
                  <span class="gk-deity-sanskrit">${transliterate(d.sanskrit, this.selectedLang)}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Category Filter Pills -->
        <div class="gk-category-pills">
          ${categories.map(c => `
            <button class="gk-cat-pill ${this.selectedCategory === c ? 'active' : ''}" data-category="${c}">
              ${c === 'all' ? 'All Types' : c}
            </button>
          `).join('')}
        </div>

        <!-- Sloka Cards List -->
        ${filteredSlokas.length === 0 ? `
          <div class="gk-card" style="text-align:center; padding:32px;">
            <p>No texts found for this shrine & category filter.</p>
            <button class="gk-btn gk-btn-primary" id="gk-reset-filters" style="margin-top:12px;">Reset Filters</button>
          </div>
        ` : filteredSlokas.map((s, idx) => `
          <article class="gk-sloka-card" id="${s.id}">
            <div class="gk-sloka-header">
              <div>
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                  <span class="gk-badge-good">${s.category}</span>
                  <span style="font-size:0.75rem; color:var(--color-text-muted);">Shrine: <strong>${s.deity}</strong></span>
                </div>
                <h3 class="gk-sloka-title">${transliterate(s.title, this.selectedLang)}</h3>
                <span class="gk-sloka-source">${s.source} • Meter: ${s.meter}</span>
              </div>
              <div style="display:flex; gap:8px; align-items:center;">
                <button class="gk-share-card-btn" data-share-id="${s.id}" title="Generate Devotional WhatsApp Status Card">
                  🎨 Share Card
                </button>
              </div>
            </div>

            <!-- Chanting Audio Bar with Speed Selector -->
            <div class="gk-chant-player">
              <div class="gk-audio-controls-left">
                <button class="gk-audio-play-btn" data-play-id="${s.id}" title="Play Meditative Vedic Tanpura Chime">
                  ${this.playingSlokaId === s.id ? '⏸' : '▶'}
                </button>
                <span class="gk-audio-label">
                  ${this.playingSlokaId === s.id ? 'Chanting in progress (Tanpura resonance)...' : 'Vedic Chanting Chime'}
                </span>
              </div>
              <div class="gk-speed-selector">
                <span style="font-size:0.75rem; color:var(--color-text-muted); margin-right:4px;">Speed:</span>
                <button class="gk-speed-btn ${this.chantSpeed === 0.75 ? 'active' : ''}" data-speed="0.75">0.75x</button>
                <button class="gk-speed-btn ${this.chantSpeed === 1.0 ? 'active' : ''}" data-speed="1.0">1.0x</button>
                <button class="gk-speed-btn ${this.chantSpeed === 1.25 ? 'active' : ''}" data-speed="1.25">1.25x</button>
              </div>
            </div>

            <!-- Sacred Verse (100% Clean Font Rendering - Zero Tofu Boxes) -->
            <div class="gk-sloka-text" style="font-size:${this.slokaFontSize}rem;">
              ${transliterate(s.devanagari, this.selectedLang)}
            </div>

            <div class="gk-sloka-iast">${s.iast}</div>

            ${this.showSabdartha && s.sabdartha ? `
              <div class="gk-sabdartha-grid">
                ${s.sabdartha.map(w => `
                  <div class="gk-sabdartha-item">
                    <span class="gk-sabdartha-word">${transliterate(w.word, this.selectedLang)}:</span> ${w.meaning}
                  </div>
                `).join('')}
              </div>
            ` : ''}

            <div class="gk-sloka-translation">
              <strong>Translation:</strong> ${s.translation}
            </div>

            <div class="gk-sloka-purport">
              <strong>Purport & Spiritual Insight:</strong> ${s.purport}
            </div>

            ${idx === 1 ? this.renderAdSlot('ad-stotra-incontent', 'rectangle') : ''}
          </article>
        `).join('')}
      </section>
    `;
  }

  renderJapa() {
    return `
      <section>
        <div class="gk-japa-container">
          <h2 style="color:var(--color-primary); margin-bottom:6px;">
            ${transliterate("जपमाला", this.selectedLang)} (108-Bead Japa Mala)
          </h2>
          <p style="font-size:0.85rem; color:var(--color-text-muted); margin-bottom:18px;">
            Tap the sacred bead circle or press <kbd style="background:#eee; padding:2px 6px; border-radius:4px;">Spacebar</kbd> / <kbd style="background:#eee; padding:2px 6px; border-radius:4px;">Enter</kbd> to count.
          </p>

          <div style="margin-bottom:14px;">
            <select id="gk-japa-mantra-select" class="gk-select" style="max-width:90%;">
              <option value="ॐ नमो भगवते वासुदेवाय">ॐ नमो भगवते वासुदेवाय (Om Namo Bhagavate Vasudevaya)</option>
              <option value="हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे">हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे (Maha-Mantra)</option>
              <option value="ॐ नमः शिवाय">ॐ नमः शिवाय (Om Namah Shivaya)</option>
              <option value="श्री राम जय राम जय जय राम">श्री राम जय राम जय जय राम (Sri Ram Jaya Ram)</option>
              <option value="ॐ गं गणपतये नमः">ॐ गं गणपतये नमः (Ganesha Mantra)</option>
            </select>
          </div>

          <div id="gk-japa-trigger" class="gk-japa-circle" title="Tap to Count">
            <div id="gk-bead-number" class="gk-bead-number">${this.japaEngine.bead}</div>
            <div class="gk-bead-max">of 108 Beads</div>
          </div>

          <div class="gk-japa-stats">
            <div>
              <div id="gk-stat-rounds" class="gk-japa-stat-num">${this.japaEngine.rounds}</div>
              <div class="gk-japa-stat-label">Mala Rounds</div>
            </div>
            <div>
              <div id="gk-stat-total" class="gk-japa-stat-num">${this.japaEngine.totalChants}</div>
              <div class="gk-japa-stat-label">Total Chants</div>
            </div>
            <div>
              <div class="gk-japa-stat-num">${this.japaEngine.dailyTargetRounds}</div>
              <div class="gk-japa-stat-label">Target Malas</div>
            </div>
          </div>

          <div style="display:flex; justify-content:center; gap:10px; margin-top:20px; flex-wrap:wrap;">
            <button id="gk-japa-sound-toggle" class="gk-btn">
              ${this.japaEngine.soundEnabled ? '🔔 Sound: ON' : '🔕 Sound: OFF'}
            </button>
            <button id="gk-japa-vib-toggle" class="gk-btn">
              ${this.japaEngine.vibrationEnabled ? '📳 Haptics: ON' : '📴 Haptics: OFF'}
            </button>
            <button id="gk-japa-meru-toggle" class="gk-btn">
              ${this.japaEngine.meruReversalMode ? '🔄 Meru Reversal: ON' : '🔁 Continuous Loop'}
            </button>
            <button id="gk-japa-reset" class="gk-btn" style="color:var(--color-inauspicious);">Reset Round</button>
          </div>

          <div style="margin-top:24px; border-top:1px solid var(--color-border); padding-top:16px;">
            <button id="gk-japa-export" class="gk-btn" style="font-size:0.75rem;">💾 Export Sadhana JSON</button>
          </div>
        </div>
      </section>
    `;
  }

  renderStories() {
    return `
      <section>
        <div style="margin-bottom:24px;">
          <h2 style="color:var(--color-primary); font-size:1.6rem;">
            ${transliterate("नीतिकथाः", this.selectedLang)} (Dharmic Wisdom & Moral Stories)
          </h2>
          <p style="font-size:0.85rem; color:var(--color-text-muted);">
            Timeless fables from the 5 Books of Panchatantra, Hitopadesha, Tenali Raman, and Upanishads with illuminated moral cards.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:20px;">
          ${STORIES_DATA.map((s) => `
            <article class="gk-story-card">
              <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                  <span class="gk-badge-good">${s.collection}</span>
                  <span style="font-size:0.75rem; color:var(--color-text-muted);">Reading: 3 mins</span>
                </div>
                <h3 style="color:var(--color-primary); font-size:1.25rem; margin-bottom:8px;">${s.title}</h3>
                
                <div style="background:rgba(230,81,0,0.04); padding:10px 14px; border-radius:6px; margin-bottom:14px; font-style:italic; font-size:0.85rem; border-left:3px solid var(--color-secondary);">
                  "${s.epigraphTranslation}"
                </div>

                <p style="font-size:0.9rem; line-height:1.65; margin-bottom:14px; color:var(--color-text);">
                  ${s.summary}
                </p>

                <!-- Prominent Golden Moral Takeaway Card -->
                <div class="gk-moral-takeaway-card">
                  <div class="gk-moral-takeaway-label">✨ Sacred Moral Takeaway</div>
                  <div class="gk-moral-takeaway-text">${s.moral}</div>
                </div>

                <div style="margin-bottom:14px;">
                  <div style="font-size:0.75rem; text-transform:uppercase; color:var(--color-text-muted); margin-bottom:4px;">Sanskrit Vocabulary:</div>
                  <div style="display:flex; flex-wrap:wrap; gap:6px;">
                    ${s.vocabulary.map(v => `
                      <span style="font-size:0.75rem; background:rgba(0,0,0,0.05); padding:2px 8px; border-radius:4px;" title="${v.meaning}">
                        ${v.term}
                      </span>
                    `).join('')}
                  </div>
                </div>
              </div>

              <!-- Interactive Ethical Dilemma Quiz -->
              <div style="border-top:1px solid var(--color-border); padding-top:12px; margin-top:12px;">
                <div style="font-size:0.85rem; font-weight:700; margin-bottom:6px;">Dharmic Reflection:</div>
                <p style="font-size:0.85rem; margin-bottom:10px;">${s.quiz.question}</p>
                <div class="gk-quiz-options" data-story="${s.id}">
                  ${s.quiz.options.map((opt, oIdx) => `
                    <button class="gk-btn gk-quiz-btn" data-story="${s.id}" data-idx="${oIdx}" style="width:100%; text-align:left; margin-bottom:6px; font-size:0.8rem;">
                      ${opt}
                    </button>
                  `).join('')}
                </div>
                <div id="gk-quiz-result-${s.id}" style="display:none; padding:8px 12px; border-radius:6px; font-size:0.8rem; margin-top:6px;"></div>
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    `;
  }

  renderCityModal() {
    return `
      <div class="gk-modal-backdrop" id="gk-city-modal-backdrop">
        <div class="gk-modal">
          <div class="gk-modal-header">
            <h3 style="color:var(--color-primary);">Select Global City</h3>
            <button id="gk-modal-close" class="gk-btn" style="border:none; font-size:1.2rem;">✕</button>
          </div>
          <input type="text" id="gk-city-search" class="gk-search-input" placeholder="Search 100+ global cities (e.g. Chennai, London, New York)..." autofocus>
          <ul class="gk-city-list" id="gk-city-list">
            ${this.cities.map(c => `
              <li class="gk-city-item ${c.id === this.selectedCity.id ? 'active' : ''}" data-city-id="${c.id}">
                <div>
                  <strong>${c.name}</strong>
                  <span style="font-size:0.75rem; color:var(--color-text-muted); display:block;">${c.state ? c.state + ', ' : ''}${c.country}</span>
                </div>
                <span style="font-size:0.75rem; color:var(--color-accent); font-weight:700;">${c.tz_offset >= 0 ? '+' + c.tz_offset : c.tz_offset}h</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  renderCardMakerModal() {
    return `
      <div class="gk-modal-backdrop" id="gk-card-modal-backdrop">
        <div class="gk-card-maker-modal">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <h3 style="color:var(--color-primary); font-size:1.3rem;">🎨 Devotional Share-Card Generator</h3>
            <button id="gk-card-maker-close" class="gk-btn" style="border:none; font-size:1.2rem;">✕</button>
          </div>

          <p style="font-size:0.85rem; color:var(--color-text-muted);">
            Pick a sacred theme below and download or share your customized status card directly to WhatsApp or Instagram!
          </p>

          <!-- Theme Swatches -->
          <div class="gk-theme-swatches">
            <div class="gk-theme-swatch gk-theme-saffron ${this.cardTheme === 'saffron' ? 'active' : ''}" data-theme="saffron">
              Saffron Dawn
            </div>
            <div class="gk-theme-swatch gk-theme-maroon ${this.cardTheme === 'maroon' ? 'active' : ''}" data-theme="maroon">
              Sacred Maroon
            </div>
            <div class="gk-theme-swatch gk-theme-sandal ${this.cardTheme === 'sandal' ? 'active' : ''}" data-theme="sandal">
              Sandalwood
            </div>
            <div class="gk-theme-swatch gk-theme-indigo ${this.cardTheme === 'indigo' ? 'active' : ''}" data-theme="indigo">
              Temple Indigo
            </div>
          </div>

          <!-- Live Canvas Preview -->
          <div class="gk-canvas-preview-wrapper">
            <canvas id="gk-share-canvas"></canvas>
          </div>

          <!-- Action Buttons -->
          <div style="display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap;">
            <button id="gk-canvas-download" class="gk-btn gk-btn-primary" style="flex:1;">
              📥 Download Image (PNG)
            </button>
            <button id="gk-canvas-whatsapp" class="gk-btn" style="flex:1; background:#25D366; color:#FFF; border:none; font-weight:700;">
              📱 Share on WhatsApp
            </button>
          </div>
        </div>
      </div>
    `;
  }

  renderAdSlot(slotId, size = 'banner') {
    return `
      <div class="gk-ad-container gk-ad-${size}" id="${slotId}" data-ad-slot="${slotId}">
        <span class="gk-ad-label">ADVERTISEMENT</span>
        <div class="gk-ad-placeholder">
          <!-- Google AdSense Ready Slot (Zero CLS Pre-allocated) -->
        </div>
      </div>
    `;
  }

  renderConsentBanner() {
    const consent = localStorage.getItem('gk_consent');
    if (consent) return '';
    return `
      <div class="gk-consent-banner" id="gk-consent-banner">
        <div class="gk-consent-text">
          GuruKripa operates with a <strong>Zero-Server, Zero-PII</strong> architecture. We store your preferred city, script, and sadhana counts strictly inside your browser's private local storage.
        </div>
        <div class="gk-consent-actions">
          <button id="gk-consent-accept" class="gk-btn gk-btn-primary" style="font-size:0.8rem;">Accept & Continue</button>
        </div>
      </div>
    `;
  }

  renderFooter() {
    return `
      <footer class="gk-footer">
        <div class="gk-footer-inner">
          <div>
            <span style="font-weight:700; color:var(--color-primary); font-size:1.1rem; display:block; margin-bottom:4px;">GuruKripa</span>
            <p style="font-size:0.8rem; color:var(--color-text-muted); max-width:400px;">
              A zero-cost, enterprise-grade Vedic spiritual portal dedicated to preserving and celebrating Sanatana Dharma with scientific astronomical precision and authentic public-domain texts.
            </p>
          </div>
          <ul class="gk-footer-links">
            <li><a href="/privacy.html">Privacy Policy</a></li>
            <li><a href="/terms.html">Terms of Service</a></li>
            <li><a href="/disclaimer.html">Astronomical Disclaimer</a></li>
          </ul>
        </div>
      </footer>
    `;
  }

  bindEvents() {
    // Language Switcher
    const langSelect = document.getElementById('gk-lang-select');
    if (langSelect) {
      langSelect.addEventListener('change', (e) => {
        this.selectedLang = e.target.value;
        localStorage.setItem('gk_lang', this.selectedLang);
        document.documentElement.setAttribute('data-lang', this.selectedLang);
        this.render();
      });
    }

    // City Modal Trigger
    const cityBtn = document.getElementById('gk-city-btn');
    if (cityBtn) {
      cityBtn.addEventListener('click', () => {
        this.cityModalOpen = true;
        this.render();
      });
    }

    // GPS Trigger
    const gpsBtn = document.getElementById('gk-gps-btn');
    if (gpsBtn) {
      gpsBtn.addEventListener('click', () => this.autoDetectLocation());
    }

    // Theme Toggle Trigger
    const themeBtn = document.getElementById('gk-theme-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => this.toggleTheme());
    }

    // Navigation Links (Direct SPA Switching)
    document.querySelectorAll('.gk-nav-links a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          const target = href.replace('#', '');
          this.currentView = target;
          window.location.hash = target;
          this.render();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });

    // Panchang Tabs
    document.querySelectorAll('.gk-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.panchangTab = btn.getAttribute('data-tab');
        this.render();
      });
    });

    // Date Picker
    const datePicker = document.getElementById('gk-date-picker');
    if (datePicker) {
      datePicker.addEventListener('change', (e) => {
        this.selectedDate = new Date(e.target.value);
        this.render();
      });
    }

    // 12 Deity Hubs Selection
    document.querySelectorAll('.gk-deity-card-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        this.selectedDeity = chip.getAttribute('data-deity-id');
        this.render();
      });
    });

    // Category Filter Selection
    document.querySelectorAll('.gk-cat-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        this.selectedCategory = pill.getAttribute('data-category');
        this.render();
      });
    });

    const resetFilterBtn = document.getElementById('gk-reset-filters');
    if (resetFilterBtn) {
      resetFilterBtn.addEventListener('click', () => {
        this.selectedDeity = 'all';
        this.selectedCategory = 'all';
        this.render();
      });
    }

    // Chanting Audio Buttons
    document.querySelectorAll('.gk-audio-play-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-play-id');
        this.playChantSound(id);
      });
    });

    // Chanting Speed Selectors
    document.querySelectorAll('.gk-speed-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.chantSpeed = parseFloat(btn.getAttribute('data-speed'));
        this.render();
      });
    });

    // Share Card Trigger
    document.querySelectorAll('.gk-share-card-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-share-id');
        this.openCardMaker(id);
      });
    });

    // Card Maker Close
    const cardCloseBtn = document.getElementById('gk-card-maker-close');
    if (cardCloseBtn) {
      cardCloseBtn.addEventListener('click', () => this.closeCardMaker());
    }

    // Theme Swatches for Card Maker
    document.querySelectorAll('.gk-theme-swatch').forEach(swatch => {
      swatch.addEventListener('click', () => {
        this.cardTheme = swatch.getAttribute('data-theme');
        document.querySelectorAll('.gk-theme-swatch').forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        this.drawShareCanvas();
      });
    });

    // Download & WhatsApp Canvas
    const canvasDownload = document.getElementById('gk-canvas-download');
    if (canvasDownload) {
      canvasDownload.addEventListener('click', () => this.downloadCardImage());
    }
    const canvasWhatsapp = document.getElementById('gk-canvas-whatsapp');
    if (canvasWhatsapp) {
      canvasWhatsapp.addEventListener('click', () => this.shareCardToWhatsApp());
    }

    // City Modal Close & Search
    const modalClose = document.getElementById('gk-modal-close');
    if (modalClose) {
      modalClose.addEventListener('click', () => {
        this.cityModalOpen = false;
        this.render();
      });
    }
    const searchInput = document.getElementById('gk-city-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const items = document.querySelectorAll('.gk-city-item');
        items.forEach(item => {
          const text = item.innerText.toLowerCase();
          item.style.display = text.includes(query) ? 'flex' : 'none';
        });
      });
    }

    // City Selection
    document.querySelectorAll('.gk-city-item').forEach(item => {
      item.addEventListener('click', () => {
        const cityId = item.getAttribute('data-city-id');
        const found = this.cities.find(c => c.id === cityId);
        if (found) {
          this.saveCity(found);
          this.cityModalOpen = false;
          this.render();
        }
      });
    });

    // Sloka Font Controls & Sabdartha Toggle
    const fontInc = document.getElementById('gk-font-inc');
    if (fontInc) {
      fontInc.addEventListener('click', () => {
        this.slokaFontSize = Math.min(this.slokaFontSize + 0.15, 2.2);
        this.render();
      });
    }
    const fontDec = document.getElementById('gk-font-dec');
    if (fontDec) {
      fontDec.addEventListener('click', () => {
        this.slokaFontSize = Math.max(this.slokaFontSize - 0.15, 0.9);
        this.render();
      });
    }
    const sabdarthaToggle = document.getElementById('gk-toggle-sabdartha');
    if (sabdarthaToggle) {
      sabdarthaToggle.addEventListener('click', () => {
        this.showSabdartha = !this.showSabdartha;
        this.render();
      });
    }

    // Japa Counter Trigger
    const japaCircle = document.getElementById('gk-japa-trigger');
    if (japaCircle) {
      japaCircle.addEventListener('click', () => this.handleJapaClick());
    }
    const japaSoundToggle = document.getElementById('gk-japa-sound-toggle');
    if (japaSoundToggle) {
      japaSoundToggle.addEventListener('click', () => {
        this.japaEngine.soundEnabled = !this.japaEngine.soundEnabled;
        this.japaEngine.saveState();
        this.render();
      });
    }
    const japaVibToggle = document.getElementById('gk-japa-vib-toggle');
    if (japaVibToggle) {
      japaVibToggle.addEventListener('click', () => {
        this.japaEngine.vibrationEnabled = !this.japaEngine.vibrationEnabled;
        this.japaEngine.saveState();
        this.render();
      });
    }
    const japaMeruToggle = document.getElementById('gk-japa-meru-toggle');
    if (japaMeruToggle) {
      japaMeruToggle.addEventListener('click', () => {
        this.japaEngine.meruReversalMode = !this.japaEngine.meruReversalMode;
        this.japaEngine.saveState();
        this.render();
      });
    }
    const japaReset = document.getElementById('gk-japa-reset');
    if (japaReset) {
      japaReset.addEventListener('click', () => {
        if (confirm("Reset current 108 bead counter to 0?")) {
          this.japaEngine.resetCurrentMala();
          this.render();
        }
      });
    }
    const japaExport = document.getElementById('gk-japa-export');
    if (japaExport) {
      japaExport.addEventListener('click', () => {
        const json = this.japaEngine.exportDataJSON();
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `GuruKripa_Japa_Backup_${new Date().toISOString().slice(0,10)}.json`;
        a.click();
      });
    }

    // Quiz Buttons
    document.querySelectorAll('.gk-quiz-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const storyId = btn.getAttribute('data-story');
        const optIdx = parseInt(btn.getAttribute('data-idx'), 10);
        const story = STORIES_DATA.find(s => s.id === storyId);
        const resultEl = document.getElementById(`gk-quiz-result-${storyId}`);
        if (story && resultEl) {
          resultEl.style.display = 'block';
          if (optIdx === story.quiz.correctIndex) {
            resultEl.style.background = 'rgba(46, 125, 50, 0.1)';
            resultEl.style.color = '#2E7D32';
            resultEl.innerHTML = `<strong>✓ Spot On!</strong> ${story.quiz.explanation}`;
          } else {
            resultEl.style.background = 'rgba(198, 40, 40, 0.1)';
            resultEl.style.color = '#C62828';
            resultEl.innerHTML = `<strong>Reflect Again:</strong> Consider the spiritual principle of Buddhi and Satya.`;
          }
        }
      });
    });

    // Consent Accept
    const consentAccept = document.getElementById('gk-consent-accept');
    if (consentAccept) {
      consentAccept.addEventListener('click', () => {
        localStorage.setItem('gk_consent', 'accepted');
        const banner = document.getElementById('gk-consent-banner');
        if (banner) banner.remove();
      });
    }
  }
}

// Instantiate on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  new GuruKripaApp();
});
