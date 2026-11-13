/**
 * GuruKripa — Main Application Controller & Dynamic Hydration Engine
 * Zero-Cost, 100% Client-Side Architecture
 */

import CITIES from './data/cities.json';
import { calculatePanchang } from './data/panchang-engine.js';
import { SUPPORTED_LANGUAGES, transliterate } from './data/transliteration-engine.js';
import { SLOKAS_DATA } from './data/slokas-data.js';
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
        // Detect timezone offset
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
          elevation: 10
        };
        this.saveCity(detectedCity);
        this.cityModalOpen = false;
        this.render();
      },
      (err) => {
        alert("Unable to detect GPS position: " + err.message + ". Please choose your city from the list.");
      }
    );
  }

  render() {
    const appEl = document.getElementById('app');
    if (!appEl) return;

    appEl.innerHTML = `
      ${this.renderHeader()}
      <main class="gk-main">
        ${this.renderLocationBar()}
        ${this.renderAdSlot('ad-header-leaderboard', 'leaderboard')}
        ${this.renderViewContent()}
      </main>
      ${this.renderFooter()}
      ${this.cityModalOpen ? this.renderCityModal() : ''}
      ${this.renderConsentBanner()}
    `;

    this.attachEventListeners();
  }

  renderHeader() {
    return `
      <header class="gk-header">
        <div class="gk-header-inner">
          <a href="#panchang" class="gk-brand">
            <span class="gk-brand-logo">🕉️</span>
            <div>
              <span class="gk-brand-title">GuruKripa</span>
              <span class="gk-brand-tagline">Vedic Panchang & Spiritual Portal</span>
            </div>
          </a>
          <ul class="gk-nav-links">
            <li><a href="#panchang" class="${this.currentView === 'panchang' ? 'active' : ''}">Panchang</a></li>
            <li><a href="#stotras" class="${this.currentView === 'stotras' ? 'active' : ''}">Stotras & Slokas</a></li>
            <li><a href="#japa" class="${this.currentView === 'japa' ? 'active' : ''}">108 Japa Mala</a></li>
            <li><a href="#stories" class="${this.currentView === 'stories' ? 'active' : ''}">Moral Stories</a></li>
          </ul>
          <div class="gk-controls">
            <select id="gk-lang-select" class="gk-select" title="Switch Sacred Script">
              ${SUPPORTED_LANGUAGES.map(lang => `
                <option value="${lang.code}" ${this.selectedLang === lang.code ? 'selected' : ''}>
                  ${lang.native} (${lang.name})
                </option>
              `).join('')}
            </select>
            <button id="gk-theme-toggle" class="gk-btn" title="Toggle Theme">
              ${this.theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </header>
    `;
  }

  renderLocationBar() {
    return `
      <div class="gk-location-bar">
        <div class="gk-location-info">
          <span class="gk-location-pin">📍</span>
          <div>
            <span class="gk-location-name">${this.selectedCity.name}, ${this.selectedCity.country}</span>
            <span class="gk-location-coords">(${this.selectedCity.lat.toFixed(2)}° N, ${this.selectedCity.lon.toFixed(2)}° E • UTC ${this.selectedCity.tz_offset >= 0 ? '+' : ''}${this.selectedCity.tz_offset})</span>
          </div>
        </div>
        <div style="display:flex; gap:8px;">
          <button id="gk-open-city-modal" class="gk-btn">Change City</button>
          <button id="gk-auto-detect-btn" class="gk-btn gk-btn-primary">📡 Auto Detect GPS</button>
        </div>
      </div>
    `;
  }

  renderViewContent() {
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
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; flex-wrap:wrap; gap:10px;">
          <h2 style="color:var(--color-primary); font-size:1.5rem;">
            ${transliterate("दैनिक पञ्चाङ्गम्", this.selectedLang)} — ${data.date}
          </h2>
          <div style="display:flex; align-items:center; gap:8px;">
            <label for="gk-date-picker" style="font-size:0.85rem; font-weight:600;">Date:</label>
            <input type="date" id="gk-date-picker" class="gk-select" value="${data.date}">
          </div>
        </div>

        <div class="gk-tabs">
          <button class="gk-tab-btn ${this.panchangTab === 'overview' ? 'active' : ''}" data-tab="overview">Daily Limbs</button>
          <button class="gk-tab-btn ${this.panchangTab === 'gowri' ? 'active' : ''}" data-tab="gowri">Gowri Panchangam</button>
          <button class="gk-tab-btn ${this.panchangTab === 'choghadiya' ? 'active' : ''}" data-tab="choghadiya">Choghadiya</button>
          <button class="gk-tab-btn ${this.panchangTab === 'planets' ? 'active' : ''}" data-tab="planets">Planetary Positions</button>
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

      <div class="gk-card" style="margin-top:16px;">
        <h3 style="color:var(--color-primary); margin-bottom:12px;">Inauspicious Muhurtas (Avoid during Auspicious Undertakings)</h3>
        <div class="gk-table-wrapper">
          <table class="gk-table">
            <thead>
              <tr>
                <th>Period</th>
                <th>Calculated Timing</th>
                <th>Significance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong style="color:var(--color-inauspicious);">Rahu Kalam</strong></td>
                <td>${data.muhurtas.rahuKalam}</td>
                <td>Governed by Rahu; prohibited for starting new commercial or spiritual ventures.</td>
              </tr>
              <tr>
                <td><strong>Yamagandam</strong></td>
                <td>${data.muhurtas.yamagandam}</td>
                <td>Governed by Yama; inauspicious for travel or financial contracts.</td>
              </tr>
              <tr>
                <td><strong>Gulika Kalam</strong></td>
                <td>${data.muhurtas.gulikaKalam}</td>
                <td>Governed by Saturn's son Gulika; actions performed recur repeatedly.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  renderGowriTable(gowriList) {
    return `
      <div class="gk-card">
        <h3 style="color:var(--color-primary); margin-bottom:8px;">Gowri Panchangam (Daytime 8 Divisions)</h3>
        <p style="font-size:0.85rem; color:var(--color-text-muted); margin-bottom:14px;">
          Traditional South Indian division of daytime based on local sunrise-to-sunset.
        </p>
        <div class="gk-table-wrapper">
          <table class="gk-table">
            <thead>
              <tr>
                <th>Segment</th>
                <th>Time Window</th>
                <th>Gowri Status</th>
                <th>Recommendation</th>
              </tr>
            </thead>
            <tbody>
              ${gowriList.map((g, idx) => `
                <tr>
                  <td>Segment ${idx + 1}</td>
                  <td>${g.start} – ${g.end}</td>
                  <td><strong>${g.name}</strong></td>
                  <td>
                    <span class="${g.isGood ? 'gk-badge-good' : 'gk-badge-alert'}">
                      ${g.isGood ? 'Auspicious (Shubham)' : 'Avoid (Ashubham)'}
                    </span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  renderChoghadiyaTable(choghadiyaList) {
    return `
      <div class="gk-card">
        <h3 style="color:var(--color-primary); margin-bottom:8px;">Choghadiya Muhurta (Daytime 8 Divisions)</h3>
        <p style="font-size:0.85rem; color:var(--color-text-muted); margin-bottom:14px;">
          Widely practiced Vedic timing system for instant decision making, journeys, and puja.
        </p>
        <div class="gk-table-wrapper">
          <table class="gk-table">
            <thead>
              <tr>
                <th>Segment</th>
                <th>Time Window</th>
                <th>Choghadiya Name</th>
                <th>Nature</th>
              </tr>
            </thead>
            <tbody>
              ${choghadiyaList.map((c, idx) => `
                <tr>
                  <td>Segment ${idx + 1}</td>
                  <td>${c.start} – ${c.end}</td>
                  <td><strong>${c.name}</strong></td>
                  <td>
                    <span class="${c.isGood ? 'gk-badge-good' : 'gk-badge-alert'}">
                      ${c.isGood ? 'Favorable / Shubh' : 'Inauspicious / Ashubh'}
                    </span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  renderPlanetsTable(planets, ayanamsa) {
    return `
      <div class="gk-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <h3 style="color:var(--color-primary);">Planetary Positions (Graha Sthiti)</h3>
          <span style="font-size:0.8rem; color:var(--color-text-muted);">Lahiri Ayanamsa: ${ayanamsa}°</span>
        </div>
        <div class="gk-table-wrapper">
          <table class="gk-table">
            <thead>
              <tr>
                <th>Graha (Planet)</th>
                <th>Sidereal Longitude</th>
                <th>Rashi (Sign)</th>
                <th>Degree in Sign</th>
              </tr>
            </thead>
            <tbody>
              ${planets.map(p => `
                <tr>
                  <td><strong>${p.name}</strong></td>
                  <td>${p.siderealLon.toFixed(2)}°</td>
                  <td>${transliterate(p.rashi, this.selectedLang)} (${p.rashiEnglish})</td>
                  <td>${p.degInRashi}°</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  renderStotras() {
    return `
      <section>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:12px;">
          <div>
            <h2 style="color:var(--color-primary); font-size:1.6rem;">
              ${transliterate("स्तोत्राणि मन्त्राश्च", this.selectedLang)} (Sacred Slokas & Mantras)
            </h2>
            <p style="font-size:0.85rem; color:var(--color-text-muted);">
              Authentic Vedic swaras, word-by-word Sabdartha, translation, and practical purport.
            </p>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <button id="gk-font-dec" class="gk-btn" title="Decrease Font">A-</button>
            <button id="gk-font-inc" class="gk-btn" title="Increase Font">A+</button>
            <button id="gk-toggle-sabdartha" class="gk-btn ${this.showSabdartha ? 'gk-btn-primary' : ''}">
              ${this.showSabdartha ? '✓ Sabdartha Visible' : '+ Show Sabdartha'}
            </button>
          </div>
        </div>

        ${SLOKAS_DATA.map((s, idx) => `
          <article class="gk-sloka-card" id="${s.id}">
            <div class="gk-sloka-header">
              <div>
                <h3 class="gk-sloka-title">${transliterate(s.title, this.selectedLang)}</h3>
                <span class="gk-sloka-source">${s.source} • Deity: ${s.deity} • Meter: ${s.meter}</span>
              </div>
            </div>

            <div class="gk-sloka-text" style="font-size:${this.slokaFontSize}rem;">
              ${transliterate(s.devanagari, this.selectedLang)}
            </div>

            <div class="gk-sloka-iast">${s.iast}</div>

            ${this.showSabdartha ? `
              <div class="gk-sabdartha-grid">
                ${s.sabdartha.map(w => `
                  <div class="gk-sabdartha-item">
                    <span class="gk-sabdartha-word">${w.word}:</span> ${w.meaning}
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
            <button id="gk-japa-reset" class="gk-btn" style="color:var(--color-inauspicious);">Reset Current Round</button>
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
            ${transliterate("नीतिकथाः", this.selectedLang)} (Hindu Moral Stories & Philosophy)
          </h2>
          <p style="font-size:0.85rem; color:var(--color-text-muted);">
            Timeless moral wisdom from the 5 Books of Panchatantra, Hitopadesha, Tenali Raman, and Upanishads.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:20px;">
          ${STORIES_DATA.map((s, idx) => `
            <article class="gk-card" style="display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <span class="gk-badge-good" style="margin-bottom:8px; display:inline-block;">${s.collection}</span>
                <h3 style="color:var(--color-primary); font-size:1.2rem; margin-bottom:8px;">${s.title}</h3>
                
                <div style="background:rgba(230,81,0,0.04); padding:10px; border-radius:6px; margin-bottom:12px; font-style:italic; font-size:0.85rem; border-left:3px solid var(--color-secondary);">
                  "${s.epigraphTranslation}"
                </div>

                <p style="font-size:0.9rem; line-height:1.6; margin-bottom:14px;">
                  ${s.summary}
                </p>

                <div style="margin-bottom:14px;">
                  <strong style="font-size:0.85rem; color:var(--color-secondary);">Moral Lesson:</strong>
                  <p style="font-size:0.85rem; font-weight:600; color:var(--color-primary);">${s.moral}</p>
                </div>

                <div style="margin-bottom:14px;">
                  <div style="font-size:0.75rem; text-transform:uppercase; color:var(--color-text-muted); margin-bottom:4px;">Vocabulary:</div>
                  <div style="display:flex; flex-wrap:wrap; gap:6px;">
                    ${s.vocabulary.map(v => `
                      <span style="font-size:0.75rem; background:#EEE; padding:2px 8px; border-radius:4px;" title="${v.meaning}">
                        ${v.term}
                      </span>
                    `).join('')}
                  </div>
                </div>
              </div>

              <!-- Interactive Quiz -->
              <div style="border-top:1px solid var(--color-border); padding-top:12px; margin-top:12px;">
                <div style="font-size:0.85rem; font-weight:700; margin-bottom:6px;">Ethical Dilemma Reflection:</div>
                <p style="font-size:0.85rem; margin-bottom:10px;">${s.quiz.question}</p>
                <div class="gk-quiz-options" data-story="${s.id}">
                  ${s.quiz.options.map((opt, oIdx) => `
                    <button class="gk-btn gk-quiz-btn" data-story="${s.id}" data-idx="${oIdx}" style="width:100%; text-align:left; margin-bottom:6px; font-size:0.8rem;">
                      ${opt}
                    </button>
                  `).join('')}
                </div>
                <div id="gk-quiz-result-${s.id}" style="font-size:0.8rem; display:none; padding:8px; border-radius:6px; margin-top:8px;"></div>
              </div>
            </article>
          `).join('')}
        </div>

        ${this.renderAdSlot('ad-story-native', 'native')}
      </section>
    `;
  }

  renderCityModal() {
    return `
      <div class="gk-modal-backdrop" id="gk-city-modal-backdrop">
        <div class="gk-modal">
          <div class="gk-modal-header">
            <h3 style="color:var(--color-primary);">Select Global City</h3>
            <button id="gk-close-city-modal" class="gk-btn" style="border:none; font-size:1.2rem;">✕</button>
          </div>
          <input type="text" id="gk-city-search-input" class="gk-search-input" placeholder="Search Indian pilgrimage towns or global diaspora cities...">
          <ul class="gk-city-list" id="gk-city-list-items">
            ${this.cities.map(c => `
              <li class="gk-city-item" data-city-id="${c.id}">
                <div>
                  <strong>${c.name}</strong>, <span style="font-size:0.85rem; color:var(--color-text-muted);">${c.state}, ${c.country}</span>
                </div>
                <span style="font-size:0.75rem; color:var(--color-accent); font-weight:700;">UTC ${c.tz_offset >= 0 ? '+' : ''}${c.tz_offset}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  renderAdSlot(slotId, format) {
    return `
      <aside class="gk-ad-container" aria-label="Sponsor Advertisement">
        <div class="gk-ad-wrapper gk-ad-${format}" id="${slotId}">
          <span class="gk-ad-label">Sponsor Message</span>
          <div style="font-size:0.75rem; color:#8C7853; text-align:center; padding:10px;">
            Reserve Ad Placement (${format.toUpperCase()})<br>
            <span style="font-size:0.65rem; opacity:0.7;">CLS = 0.00 Guaranteed • Google AdSense Compliant</span>
          </div>
        </div>
      </aside>
    `;
  }

  renderConsentBanner() {
    if (localStorage.getItem('gk_consent')) return '';
    return `
      <div class="gk-consent-banner" id="gk-consent-banner">
        <div class="gk-consent-text">
          <strong>Privacy & Cookies:</strong> We use privacy-first cookieless analytics and Google AdSense to serve non-intrusive contextual messages. Your location and Japa counters remain 100% on your device.
        </div>
        <div class="gk-consent-actions">
          <button id="gk-consent-accept" class="gk-btn gk-btn-primary">Accept & Continue</button>
        </div>
      </div>
    `;
  }

  renderFooter() {
    return `
      <footer class="gk-footer">
        <div class="gk-footer-inner">
          <div>
            <strong style="color:var(--color-primary); font-size:1.1rem;">GuruKripa (गुरूकृपा)</strong>
            <p style="font-size:0.8rem; color:var(--color-text-muted); margin-top:4px;">
              Enterprise-Grade Zero-Cost Hindu Spiritual Portal • 100% Client-Side Ephemeris Calculations.
            </p>
          </div>
          <ul class="gk-footer-links">
            <li><a href="/privacy.html">Privacy Policy</a></li>
            <li><a href="/terms.html">Terms & Copyright</a></li>
            <li><a href="/disclaimer.html">Astrological Disclaimer</a></li>
            <li><a href="/about.html">About & Mission</a></li>
            <li><a href="/sitemap.xml">Sitemap</a></li>
          </ul>
        </div>
        <div style="text-align:center; font-size:0.75rem; color:var(--color-text-muted); margin-top:24px;">
          Om Sarve Bhavantu Sukhinah • May All Beings Attain Peace & Liberation.
        </div>
      </footer>
    `;
  }

  attachEventListeners() {
    // Language Switcher
    const langSelect = document.getElementById('gk-lang-select');
    if (langSelect) {
      langSelect.addEventListener('change', (e) => {
        this.selectedLang = e.target.value;
        localStorage.setItem('gk_lang', this.selectedLang);
        this.render();
      });
    }

    // Theme Toggle
    const themeToggle = document.getElementById('gk-theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    // Date Picker
    const datePicker = document.getElementById('gk-date-picker');
    if (datePicker) {
      datePicker.addEventListener('change', (e) => {
        if (e.target.value) {
          this.selectedDate = new Date(e.target.value + "T12:00:00");
          this.render();
        }
      });
    }

    // Panchang Tabs
    document.querySelectorAll('.gk-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.panchangTab = e.target.getAttribute('data-tab');
        this.render();
      });
    });

    // City Modal Controls
    const openCityBtn = document.getElementById('gk-open-city-modal');
    if (openCityBtn) {
      openCityBtn.addEventListener('click', () => {
        this.cityModalOpen = true;
        this.render();
      });
    }

    const closeCityBtn = document.getElementById('gk-close-city-modal');
    if (closeCityBtn) {
      closeCityBtn.addEventListener('click', () => {
        this.cityModalOpen = false;
        this.render();
      });
    }

    const autoDetectBtn = document.getElementById('gk-auto-detect-btn');
    if (autoDetectBtn) {
      autoDetectBtn.addEventListener('click', () => this.autoDetectLocation());
    }

    // City Search Filter
    const searchInput = document.getElementById('gk-city-search-input');
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
      item.addEventListener('click', (e) => {
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
      btn.addEventListener('click', (e) => {
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
