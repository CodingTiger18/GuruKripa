const x=["Mesha","Vrishabha","Mithuna","Karkataka","Simha","Kanya","Tula","Vrishchika","Dhanu","Makara","Kumbha","Meena"],C=["♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓"],H={"Surya (Sun)":"Su","Chandra (Moon)":"Mo","Mangala (Mars)":"Ma","Budha (Mercury)":"Me","Brihaspati (Jupiter)":"Ju","Shukra (Venus)":"Ve","Shani (Saturn)":"Sa","Rahu (North Node)":"Ra","Ketu (South Node)":"Ke"};function v(c,n,r){const t={};for(let e=1;e<=12;e++)t[e]=[];const a=Math.max(1,Math.min(12,c||1));return t[a].push({name:"Lagna (Ascendant)",short:"Lg",isLagna:!0,deg:n?Math.floor(n%30):0}),Array.isArray(r)&&r.forEach(e=>{let s=e.rashiIndex;if(!s){const l=e.siderealLon!==void 0?e.siderealLon:e.longitude;typeof l=="number"&&!isNaN(l)&&(s=Math.floor(l/30)+1)}(!s||s<1||s>12)&&(s=1),t[s]||(t[s]=[]);const i=H[e.name]||e.name.substring(0,2),o=e.isRetrograde||e.status&&e.status.includes("Retrograde");t[s].push({name:e.name,short:o?`(${i})`:i,isRetrograde:o,deg:e.degrees!==void 0?e.degrees:e.deg!==void 0?e.deg:0})}),{lagnaRashi:a,signOccupants:t}}function I(c){const{lagnaRashi:n,signOccupants:r}=c,t={};for(let e=1;e<=12;e++)t[e]=(n-1+(e-1))%12+1;function a(e){const s=t[e];return(r[s]||[]).map(o=>o.short).join(" ")}return`<svg viewBox="0 0 400 400" class="gk-kundali-svg" aria-label="North Indian Kundli Chart">
    <rect x="2" y="2" width="396" height="396" fill="#180e22" stroke="#d4af37" stroke-width="2.5" rx="6"/>
    
    <!-- Outer Diagonals -->
    <line x1="2" y1="2" x2="398" y2="398" stroke="#d4af37" stroke-width="1.8" opacity="0.9"/>
    <line x1="398" y1="2" x2="2" y2="398" stroke="#d4af37" stroke-width="1.8" opacity="0.9"/>
    
    <!-- Inner Diamond -->
    <polygon points="200,2 398,200 200,398 2,200" fill="#241434" stroke="#d4af37" stroke-width="2" opacity="0.95"/>
    
    <!-- House Labels & Occupants -->
    <!-- House 1: Top Diamond -->
    <text x="200" y="70" class="gk-k-sign" text-anchor="middle">${t[1]}</text>
    <text x="200" y="125" class="gk-k-planets" text-anchor="middle">${a(1)}</text>
    <text x="200" y="145" class="gk-k-house-sub" text-anchor="middle">House 1 (Tanu)</text>

    <!-- House 2: Top Left Triangle -->
    <text x="125" y="45" class="gk-k-sign" text-anchor="middle">${t[2]}</text>
    <text x="100" y="75" class="gk-k-planets" text-anchor="middle">${a(2)}</text>

    <!-- House 3: Upper Left Corner Triangle -->
    <text x="45" y="125" class="gk-k-sign" text-anchor="middle">${t[3]}</text>
    <text x="65" y="100" class="gk-k-planets" text-anchor="middle">${a(3)}</text>

    <!-- House 4: Left Diamond -->
    <text x="70" y="200" class="gk-k-sign" text-anchor="middle">${t[4]}</text>
    <text x="125" y="205" class="gk-k-planets" text-anchor="middle">${a(4)}</text>
    <text x="125" y="222" class="gk-k-house-sub" text-anchor="middle">House 4 (Matru)</text>

    <!-- House 5: Lower Left Corner Triangle -->
    <text x="45" y="275" class="gk-k-sign" text-anchor="middle">${t[5]}</text>
    <text x="65" y="300" class="gk-k-planets" text-anchor="middle">${a(5)}</text>

    <!-- House 6: Bottom Left Triangle -->
    <text x="125" y="365" class="gk-k-sign" text-anchor="middle">${t[6]}</text>
    <text x="100" y="335" class="gk-k-planets" text-anchor="middle">${a(6)}</text>

    <!-- House 7: Bottom Diamond -->
    <text x="200" y="345" class="gk-k-sign" text-anchor="middle">${t[7]}</text>
    <text x="200" y="285" class="gk-k-planets" text-anchor="middle">${a(7)}</text>
    <text x="200" y="265" class="gk-k-house-sub" text-anchor="middle">House 7 (Kalatra)</text>

    <!-- House 8: Bottom Right Triangle -->
    <text x="275" y="365" class="gk-k-sign" text-anchor="middle">${t[8]}</text>
    <text x="300" y="335" class="gk-k-planets" text-anchor="middle">${a(8)}</text>

    <!-- House 9: Lower Right Corner Triangle -->
    <text x="355" y="275" class="gk-k-sign" text-anchor="middle">${t[9]}</text>
    <text x="335" y="300" class="gk-k-planets" text-anchor="middle">${a(9)}</text>

    <!-- House 10: Right Diamond -->
    <text x="330" y="200" class="gk-k-sign" text-anchor="middle">${t[10]}</text>
    <text x="275" y="205" class="gk-k-planets" text-anchor="middle">${a(10)}</text>
    <text x="275" y="222" class="gk-k-house-sub" text-anchor="middle">House 10 (Karma)</text>

    <!-- House 11: Upper Right Corner Triangle -->
    <text x="355" y="125" class="gk-k-sign" text-anchor="middle">${t[11]}</text>
    <text x="335" y="100" class="gk-k-planets" text-anchor="middle">${a(11)}</text>

    <!-- House 12: Top Right Triangle -->
    <text x="275" y="45" class="gk-k-sign" text-anchor="middle">${t[12]}</text>
    <text x="300" y="75" class="gk-k-planets" text-anchor="middle">${a(12)}</text>
    
    <!-- Central Title Badge -->
    <circle cx="200" cy="200" r="16" fill="#180e22" stroke="#d4af37" stroke-width="1.5"/>
    <text x="200" y="205" class="gk-k-center-om" text-anchor="middle">ॐ</text>
  </svg>`}function T(c){const{lagnaRashi:n,signOccupants:r}=c,t=[[12,1,2,3],[11,null,null,4],[10,null,null,5],[9,8,7,6]];let a="";for(let e=0;e<4;e++)for(let s=0;s<4;s++){const i=t[e][s],o=s*100,l=e*100;if(i===null)continue;const k=i===n,y=(r[i]||[]).map(g=>g.short).join(" ");a+=`
        <rect x="${o+2}" y="${l+2}" width="96" height="96" fill="${k?"#2a1435":"#180e22"}" stroke="#d4af37" stroke-width="1.2" rx="3"/>
        ${k?`<line x1="${o+2}" y1="${l+2}" x2="${o+98}" y2="${l+98}" stroke="#e53935" stroke-width="1.5" opacity="0.6"/>`:""}
        <text x="${o+8}" y="${l+18}" class="gk-k-sign-si">${x[i-1]} (${i})</text>
        <text x="${o+50}" y="${l+55}" class="gk-k-planets" text-anchor="middle">${y}</text>
      `}return`<svg viewBox="0 0 400 400" class="gk-kundali-svg" aria-label="South Indian Fixed-Sign Kundli Chart">
    <rect x="2" y="2" width="396" height="396" fill="#12081c" stroke="#d4af37" stroke-width="2.5" rx="6"/>
    
    <!-- Outer Grid Lines -->
    <line x1="100" y1="2" x2="100" y2="398" stroke="#d4af37" stroke-width="1.5"/>
    <line x1="200" y1="2" x2="200" y2="100" stroke="#d4af37" stroke-width="1.5"/>
    <line x1="200" y1="300" x2="200" y2="398" stroke="#d4af37" stroke-width="1.5"/>
    <line x1="300" y1="2" x2="300" y2="398" stroke="#d4af37" stroke-width="1.5"/>
    
    <line x1="2" y1="100" x2="398" y2="100" stroke="#d4af37" stroke-width="1.5"/>
    <line x1="2" y1="200" x2="100" y2="200" stroke="#d4af37" stroke-width="1.5"/>
    <line x1="300" y1="200" x2="398" y2="200" stroke="#d4af37" stroke-width="1.5"/>
    <line x1="2" y1="300" x2="398" y2="300" stroke="#d4af37" stroke-width="1.5"/>

    <!-- Individual Boxes -->
    ${a}

    <!-- Center Hollow Sacred Space -->
    <rect x="102" y="102" width="196" height="196" fill="#1e0f2b" stroke="#d4af37" stroke-width="1.5" rx="4"/>
    <text x="200" y="175" class="gk-k-center-om" text-anchor="middle" font-size="36">ॐ</text>
    <text x="200" y="215" class="gk-k-center-title" text-anchor="middle">RĀŚI KUNDALI</text>
    <text x="200" y="235" class="gk-k-house-sub" text-anchor="middle">South Indian (Dakshina) Style</text>
  </svg>`}function B(c){const{lagnaRashi:n,signOccupants:r}=c;function t(a){return(r[a]||[]).map(s=>s.short).join(" ")}return`<svg viewBox="0 0 400 400" class="gk-kundali-svg" aria-label="East Indian Kundli Chart">
    <rect x="2" y="2" width="396" height="396" fill="#180e22" stroke="#d4af37" stroke-width="2.5" rx="6"/>
    
    <!-- Outer Diagonals & Crosses -->
    <line x1="2" y1="2" x2="398" y2="398" stroke="#d4af37" stroke-width="1.8"/>
    <line x1="398" y1="2" x2="2" y2="398" stroke="#d4af37" stroke-width="1.8"/>
    
    <!-- Intermediate Diamond Lines -->
    <polygon points="200,2 398,200 200,398 2,200" fill="none" stroke="#d4af37" stroke-width="1.8"/>

    <!-- Sign Labels and Occupants (Fixed signs 1 to 12) -->
    <!-- Sign 1: Mesha (Top Left) -->
    <text x="80" y="65" class="gk-k-sign">${x[0]} (1)</text>
    <text x="80" y="85" class="gk-k-planets">${t(1)}</text>
    ${n===1?'<text x="80" y="105" class="gk-k-lagna-badge">Lagna</text>':""}

    <!-- Sign 2: Vrishabha (Top Center) -->
    <text x="200" y="65" class="gk-k-sign" text-anchor="middle">${x[1]} (2)</text>
    <text x="200" y="85" class="gk-k-planets" text-anchor="middle">${t(2)}</text>
    ${n===2?'<text x="200" y="105" class="gk-k-lagna-badge" text-anchor="middle">Lagna</text>':""}

    <!-- Sign 3: Mithuna (Top Right) -->
    <text x="320" y="65" class="gk-k-sign" text-anchor="end">${x[2]} (3)</text>
    <text x="320" y="85" class="gk-k-planets" text-anchor="end">${t(3)}</text>
    ${n===3?'<text x="320" y="105" class="gk-k-lagna-badge" text-anchor="end">Lagna</text>':""}

    <!-- Sign 4: Karkataka (Right Upper) -->
    <text x="365" y="145" class="gk-k-sign" text-anchor="end">${x[3]} (4)</text>
    <text x="365" y="165" class="gk-k-planets" text-anchor="end">${t(4)}</text>
    ${n===4?'<text x="365" y="185" class="gk-k-lagna-badge" text-anchor="end">Lagna</text>':""}

    <!-- Sign 5: Simha (Right Center) -->
    <text x="320" y="210" class="gk-k-sign" text-anchor="middle">${x[4]} (5)</text>
    <text x="320" y="230" class="gk-k-planets" text-anchor="middle">${t(5)}</text>
    ${n===5?'<text x="320" y="250" class="gk-k-lagna-badge" text-anchor="middle">Lagna</text>':""}

    <!-- Sign 6: Kanya (Right Lower) -->
    <text x="365" y="295" class="gk-k-sign" text-anchor="end">${x[5]} (6)</text>
    <text x="365" y="315" class="gk-k-planets" text-anchor="end">${t(6)}</text>
    ${n===6?'<text x="365" y="335" class="gk-k-lagna-badge" text-anchor="end">Lagna</text>':""}

    <!-- Sign 7: Tula (Bottom Right) -->
    <text x="320" y="365" class="gk-k-sign" text-anchor="end">${x[6]} (7)</text>
    <text x="320" y="340" class="gk-k-planets" text-anchor="end">${t(7)}</text>
    ${n===7?'<text x="320" y="320" class="gk-k-lagna-badge" text-anchor="end">Lagna</text>':""}

    <!-- Sign 8: Vrishchika (Bottom Center) -->
    <text x="200" y="365" class="gk-k-sign" text-anchor="middle">${x[7]} (8)</text>
    <text x="200" y="340" class="gk-k-planets" text-anchor="middle">${t(8)}</text>
    ${n===8?'<text x="200" y="320" class="gk-k-lagna-badge" text-anchor="middle">Lagna</text>':""}

    <!-- Sign 9: Dhanu (Bottom Left) -->
    <text x="80" y="365" class="gk-k-sign">${x[8]} (9)</text>
    <text x="80" y="340" class="gk-k-planets">${t(9)}</text>
    ${n===9?'<text x="80" y="320" class="gk-k-lagna-badge">Lagna</text>':""}

    <!-- Sign 10: Makara (Left Lower) -->
    <text x="35" y="295" class="gk-k-sign">${x[9]} (10)</text>
    <text x="35" y="315" class="gk-k-planets">${t(10)}</text>
    ${n===10?'<text x="35" y="335" class="gk-k-lagna-badge">Lagna</text>':""}

    <!-- Sign 11: Kumbha (Left Center) -->
    <text x="80" y="210" class="gk-k-sign" text-anchor="middle">${x[10]} (11)</text>
    <text x="80" y="230" class="gk-k-planets" text-anchor="middle">${t(11)}</text>
    ${n===11?'<text x="80" y="250" class="gk-k-lagna-badge" text-anchor="middle">Lagna</text>':""}

    <!-- Sign 12: Meena (Left Upper) -->
    <text x="35" y="145" class="gk-k-sign">${x[11]} (12)</text>
    <text x="35" y="165" class="gk-k-planets">${t(12)}</text>
    ${n===12?'<text x="35" y="185" class="gk-k-lagna-badge">Lagna</text>':""}

    <!-- Center Om and Badge -->
    <circle cx="200" cy="200" r="22" fill="#180e22" stroke="#d4af37" stroke-width="1.8"/>
    <text x="200" y="208" class="gk-k-center-om" text-anchor="middle">ॐ</text>
  </svg>`}function K(c){const{lagnaRashi:n,signOccupants:r}=c,t=200,a=200,e=190,s=135,i=65;let o="",l="",k="";for(let d=0;d<12;d++){const y=d+1,g=(180-d*30)*Math.PI/180,h=(180-(d+.5)*30)*Math.PI/180,$=t+e*Math.cos(g),m=a-e*Math.sin(g),f=t+s*Math.cos(g),p=a-s*Math.sin(g);o+=`<line x1="${f}" y1="${p}" x2="${$}" y2="${m}" stroke="#d4af37" stroke-width="1.2" opacity="0.8"/>`;const w=t+(s+28)*Math.cos(h),L=a-(s+28)*Math.sin(h);l+=`<text x="${w}" y="${L+5}" class="gk-k-glyph" text-anchor="middle">${C[d]}</text>`;const u=r[y]||[];if(u.length>0){const S=t+(i+35)*Math.cos(h),b=a-(i+35)*Math.sin(h),M=u.map(R=>R.short).join(" ");k+=`<text x="${S}" y="${b+4}" class="gk-k-planets-circ" text-anchor="middle">${M}</text>`}}return`<svg viewBox="0 0 400 400" class="gk-kundali-svg" aria-label="West Indian Circular Zodiac Kundli Wheel">
    <rect x="2" y="2" width="396" height="396" fill="#12081c" stroke="#d4af37" stroke-width="2.5" rx="6"/>
    
    <!-- Concentric Rings -->
    <circle cx="${t}" cy="${a}" r="${e}" fill="#1a0c28" stroke="#d4af37" stroke-width="2"/>
    <circle cx="${t}" cy="${a}" r="${s}" fill="#241434" stroke="#d4af37" stroke-width="1.5"/>
    <circle cx="${t}" cy="${a}" r="${i}" fill="#12081c" stroke="#d4af37" stroke-width="2"/>
    
    <!-- Radial Sectors -->
    ${o}
    ${l}
    ${k}

    <!-- Center Om & Lagna Indicator -->
    <circle cx="${t}" cy="${a}" r="22" fill="#180e22" stroke="#d4af37" stroke-width="1.5"/>
    <text x="${t}" y="${a+7}" class="gk-k-center-om" text-anchor="middle">ॐ</text>
    <text x="${t}" y="${a-35}" class="gk-k-house-sub" text-anchor="middle">Lagna: ${x[n-1]}</text>
  </svg>`}export{H as PLANET_SHORT,C as RASHI_GLYPHS,x as RASHI_NAMES,v as buildChartData,B as renderEastIndianChart,I as renderNorthIndianChart,T as renderSouthIndianChart,K as renderWestIndianChart};
