/**
 * GuruKripa — Drik Ganitha Astronomical Panchang Engine
 * 100% Client-Side Pure JavaScript Implementation
 * Based on Jean Meeus's Astronomical Algorithms and Lahiri (Chitrapaksha) Ayanamsa.
 * $0 Recurring Infrastructure Cost.
 */

export const TITHIS = [
  { id: 1, name: "Prathama", paksha: "Shukla", deity: "Agni" },
  { id: 2, name: "Dwitiya", paksha: "Shukla", deity: "Brahma" },
  { id: 3, name: "Tritiya", paksha: "Shukla", deity: "Gauri" },
  { id: 4, name: "Chaturthi", paksha: "Shukla", deity: "Ganesha" },
  { id: 5, name: "Panchami", paksha: "Shukla", deity: "Nagas" },
  { id: 6, name: "Shashthi", paksha: "Shukla", deity: "Kartikeya" },
  { id: 7, name: "Saptami", paksha: "Shukla", deity: "Surya" },
  { id: 8, name: "Ashtami", paksha: "Shukla", deity: "Shiva / Durga" },
  { id: 9, name: "Navami", paksha: "Shukla", deity: "Durga / Rama" },
  { id: 10, name: "Dashami", paksha: "Shukla", deity: "Yama" },
  { id: 11, name: "Ekadashi", paksha: "Shukla", deity: "Vishnu" },
  { id: 12, name: "Dwadashi", paksha: "Shukla", deity: "Vishnu" },
  { id: 13, name: "Trayodashi", paksha: "Shukla", deity: "Kamadeva" },
  { id: 14, name: "Chaturdashi", paksha: "Shukla", deity: "Shiva" },
  { id: 15, name: "Purnima", paksha: "Shukla", deity: "Chandra" },
  { id: 16, name: "Prathama", paksha: "Krishna", deity: "Agni" },
  { id: 17, name: "Dwitiya", paksha: "Krishna", deity: "Brahma" },
  { id: 18, name: "Tritiya", paksha: "Krishna", deity: "Gauri" },
  { id: 19, name: "Chaturthi", paksha: "Krishna", deity: "Ganesha" },
  { id: 20, name: "Panchami", paksha: "Krishna", deity: "Nagas" },
  { id: 21, name: "Shashthi", paksha: "Krishna", deity: "Kartikeya" },
  { id: 22, name: "Saptami", paksha: "Krishna", deity: "Surya" },
  { id: 23, name: "Ashtami", paksha: "Krishna", deity: "Shiva / Durga" },
  { id: 24, name: "Navami", paksha: "Krishna", deity: "Durga" },
  { id: 25, name: "Dashami", paksha: "Krishna", deity: "Yama" },
  { id: 26, name: "Ekadashi", paksha: "Krishna", deity: "Vishnu" },
  { id: 27, name: "Dwadashi", paksha: "Krishna", deity: "Vishnu" },
  { id: 28, name: "Trayodashi", paksha: "Krishna", deity: "Kamadeva" },
  { id: 29, name: "Chaturdashi", paksha: "Krishna", deity: "Shiva" },
  { id: 30, name: "Amavasya", paksha: "Krishna", deity: "Pitrus" }
];

export const NAKSHATRAS = [
  { id: 1, name: "Ashwini", deity: "Ashwini Kumaras", lord: "Ketu" },
  { id: 2, name: "Bharani", deity: "Yama", lord: "Venus" },
  { id: 3, name: "Krittika", deity: "Agni", lord: "Sun" },
  { id: 4, name: "Rohini", deity: "Brahma", lord: "Moon" },
  { id: 5, name: "Mrigashira", deity: "Soma", lord: "Mars" },
  { id: 6, name: "Ardra", deity: "Rudra", lord: "Rahu" },
  { id: 7, name: "Punarvasu", deity: "Aditi", lord: "Jupiter" },
  { id: 8, name: "Pushya", deity: "Brihaspati", lord: "Saturn" },
  { id: 9, name: "Ashlesha", deity: "Sarpa", lord: "Mercury" },
  { id: 10, name: "Magha", deity: "Pitrus", lord: "Ketu" },
  { id: 11, name: "Purva Phalguni", deity: "Bhaga", lord: "Venus" },
  { id: 12, name: "Uttara Phalguni", deity: "Aryaman", lord: "Sun" },
  { id: 13, name: "Hasta", deity: "Savitr", lord: "Moon" },
  { id: 14, name: "Chitra", deity: "Vishwakarma", lord: "Mars" },
  { id: 15, name: "Swati", deity: "Vayu", lord: "Rahu" },
  { id: 16, name: "Vishakha", deity: "Indragni", lord: "Jupiter" },
  { id: 17, name: "Anuradha", deity: "Mitra", lord: "Saturn" },
  { id: 18, name: "Jyeshtha", deity: "Indra", lord: "Mercury" },
  { id: 19, name: "Moola", deity: "Nirriti", lord: "Ketu" },
  { id: 20, name: "Purva Ashadha", deity: "Apas", lord: "Venus" },
  { id: 21, name: "Uttara Ashadha", deity: "Vishwedevas", lord: "Sun" },
  { id: 22, name: "Shravana", deity: "Vishnu", lord: "Moon" },
  { id: 23, name: "Dhanishtha", deity: "Vasus", lord: "Mars" },
  { id: 24, name: "Shatabhisha", deity: "Varuna", lord: "Rahu" },
  { id: 25, name: "Purva Bhadrapada", deity: "Aja Ekapada", lord: "Jupiter" },
  { id: 26, name: "Uttara Bhadrapada", deity: "Ahirbudhnya", lord: "Saturn" },
  { id: 27, name: "Revati", deity: "Pushan", lord: "Mercury" }
];

export const YOGAS = [
  "Vishkambha", "Priti", "Ayushman", "Saubhagya", "Shobhana", "Atiganda",
  "Sukarma", "Dhriti", "Shula", "Ganda", "Vriddhi", "Dhruva", "Vyaghata",
  "Harshana", "Vajra", "Siddhi", "Vyatipata", "Variyan", "Parigha", "Shiva",
  "Siddha", "Sadhya", "Shubha", "Shukla", "Brahma", "Indra", "Vaidhriti"
];

export const KARANAS = [
  "Bava", "Balava", "Kaulava", "Taitila", "Gara", "Vanija", "Vishti (Bhadra)",
  "Shakuni", "Chatushpada", "Naga", "Kintughna"
];

export const RASHIS = [
  { id: 1, name: "Mesha", english: "Aries", lord: "Mars" },
  { id: 2, name: "Vrishabha", english: "Taurus", lord: "Venus" },
  { id: 3, name: "Mithuna", english: "Gemini", lord: "Mercury" },
  { id: 4, name: "Karkataka", english: "Cancer", lord: "Moon" },
  { id: 5, name: "Simha", english: "Leo", lord: "Sun" },
  { id: 6, name: "Kanya", english: "Virgo", lord: "Mercury" },
  { id: 7, name: "Tula", english: "Libra", lord: "Venus" },
  { id: 8, name: "Vrishchika", english: "Scorpio", lord: "Mars" },
  { id: 9, name: "Dhanu", english: "Sagittarius", lord: "Jupiter" },
  { id: 10, name: "Makara", english: "Capricorn", lord: "Saturn" },
  { id: 11, name: "Kumbha", english: "Aquarius", lord: "Saturn" },
  { id: 12, name: "Meena", english: "Pisces", lord: "Jupiter" }
];

export const VAARS = [
  { id: 0, name: "Ravivara", english: "Sunday", lord: "Surya" },
  { id: 1, name: "Somavara", english: "Monday", lord: "Chandra" },
  { id: 2, name: "Mangalavara", english: "Tuesday", lord: "Mangala" },
  { id: 3, name: "Budhavara", english: "Wednesday", lord: "Budha" },
  { id: 4, name: "Guruvara", english: "Thursday", lord: "Brihaspati" },
  { id: 5, name: "Shukravara", english: "Friday", lord: "Shukra" },
  { id: 6, name: "Shanivara", english: "Saturday", lord: "Shani" }
];

// Mathematical Helpers
const DEG2RAD = Math.PI / 180.0;
const RAD2DEG = 180.0 / Math.PI;

function normalizeDeg(deg) {
  let d = deg % 360.0;
  if (d < 0) d += 360.0;
  return d;
}

function sinD(deg) { return Math.sin(deg * DEG2RAD); }
function cosD(deg) { return Math.cos(deg * DEG2RAD); }
function tanD(deg) { return Math.tan(deg * DEG2RAD); }

/**
 * Calculates Julian Day Number from Gregorian Date and UTC time.
 */
export function getJulianDay(year, month, day, hours = 12.0) {
  if (month <= 2) {
    year -= 1;
    month += 12;
  }
  const A = Math.floor(year / 100);
  const B = 2 - A + Math.floor(A / 4);
  const JD = Math.floor(365.25 * (year + 4716)) +
             Math.floor(30.6001 * (month + 1)) +
             day + (hours / 24.0) + B - 1524.5;
  return JD;
}

/**
 * Computes Chitrapaksha (Lahiri) Ayanamsa for a given Julian Day.
 */
export function getLahiriAyanamsa(jd) {
  const T = (jd - 2451545.0) / 36525.0; // Centuries since J2000.0
  // Standard Lahiri Ayanamsa approximation
  const ayanamsa = 23.856 + 1.396042 * T + 0.000308 * T * T;
  return ayanamsa;
}

/**
 * Calculates Tropical Sun coordinates based on Meeus algorithms.
 */
export function getSunCoordinates(jd) {
  const T = (jd - 2451545.0) / 36525.0;
  // Mean longitude of the Sun
  const L0 = normalizeDeg(280.46646 + 36000.76983 * T + 0.0003032 * T * T);
  // Mean anomaly of the Sun
  const M = normalizeDeg(357.52911 + 35999.05029 * T - 0.0001537 * T * T);
  // Equation of center
  const C = (1.914602 - 0.004817 * T - 0.000014 * T * T) * sinD(M) +
            (0.019993 - 0.000101 * T) * sinD(2 * M) +
            0.000289 * sinD(3 * M);
  // True longitude
  const trueLon = normalizeDeg(L0 + C);
  // Apparent longitude
  const omega = 125.04 - 1934.136 * T;
  const lambda = normalizeDeg(trueLon - 0.00569 - 0.00478 * sinD(omega));

  // Obliquity of ecliptic
  const eps0 = 23.439291 - 0.0130042 * T;
  const eps = eps0 + 0.00256 * cosD(omega);

  // Right Ascension and Declination
  const alpha = normalizeDeg(Math.atan2(cosD(eps) * sinD(lambda), cosD(lambda)) * RAD2DEG);
  const delta = Math.asin(sinD(eps) * sinD(lambda)) * RAD2DEG;

  return { lon: lambda, ra: alpha, dec: delta };
}

/**
 * Calculates Tropical Moon coordinates.
 */
export function getMoonCoordinates(jd) {
  const T = (jd - 2451545.0) / 36525.0;
  // Moon mean longitude
  const Lprime = normalizeDeg(218.3164477 + 481267.88123421 * T);
  // Moon mean elongation
  const D = normalizeDeg(297.8501921 + 445267.1114034 * T);
  // Sun mean anomaly
  const M = normalizeDeg(357.5291092 + 35999.0502909 * T);
  // Moon mean anomaly
  const Mprime = normalizeDeg(134.9633964 + 477198.8675055 * T);
  // Moon argument of latitude
  const F = normalizeDeg(93.2720950 + 483202.0175233 * T);

  // Principal periodic terms for longitude
  let deltaL = 6.288774 * sinD(Mprime) +
               1.274027 * sinD(2 * D - Mprime) +
               0.658314 * sinD(2 * D) +
               0.213618 * sinD(2 * Mprime) -
               0.185116 * sinD(M) -
               0.114332 * sinD(2 * F);

  const lambda = normalizeDeg(Lprime + deltaL);
  return { lon: lambda };
}

/**
 * Calculates Sunrise and Sunset times for specific coordinates.
 */
export function getSunriseSunset(year, month, day, lat, lon, tzOffset) {
  const jd = getJulianDay(year, month, day, 12.0 - tzOffset);
  const sun = getSunCoordinates(jd);

  // Solar zenith for sunrise/sunset (90 deg 50 arcminutes for refraction and solar radius)
  const zenith = 90.8333;
  const cosH0 = (cosD(zenith) - sinD(lat) * sinD(sun.dec)) / (cosD(lat) * cosD(sun.dec));

  let hasSun = true;
  let H0 = 0;
  if (cosH0 > 1) {
    // Polar night
    hasSun = false;
  } else if (cosH0 < -1) {
    // Midnight sun
    hasSun = false;
  } else {
    H0 = Math.acos(cosH0) * RAD2DEG;
  }

  // Solar noon in hours UTC
  const T = (jd - 2451545.0) / 36525.0;
  const M = normalizeDeg(357.52911 + 35999.05029 * T);
  const L0 = normalizeDeg(280.46646 + 36000.76983 * T);
  const e = 0.016708634 - 0.000042037 * T;
  const y = tanD(23.439291 / 2) * tanD(23.439291 / 2);
  const eqTime = (y * sinD(2 * L0) - 2 * e * sinD(M) + 4 * e * y * sinD(M) * cosD(2 * L0) - 0.5 * y * y * sinD(4 * L0) - 1.25 * e * e * sinD(2 * M)) * 4; // in minutes

  const solarNoonUTC = (720 - 4 * lon - eqTime) / 60.0;
  const sunriseUTC = solarNoonUTC - (H0 * 4) / 60.0;
  const sunsetUTC = solarNoonUTC + (H0 * 4) / 60.0;

  const sunriseLocal = (sunriseUTC + tzOffset + 24.0) % 24.0;
  const sunsetLocal = (sunsetUTC + tzOffset + 24.0) % 24.0;
  const solarNoonLocal = (solarNoonUTC + tzOffset + 24.0) % 24.0;

  return {
    sunrise: sunriseLocal,
    sunset: sunsetLocal,
    solarNoon: solarNoonLocal,
    hasSun
  };
}

/**
 * Format decimal hours into HH:MM AM/PM string.
 */
export function formatTime(decimalHours) {
  let totalMin = Math.round(decimalHours * 60);
  totalMin = (totalMin + 1440) % 1440;
  const hours = Math.floor(totalMin / 60);
  const mins = totalMin % 60;
  const ampm = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 === 0 ? 12 : hours % 12;
  const padMins = mins < 10 ? `0${mins}` : mins;
  return `${displayHours}:${padMins} ${ampm}`;
}

/**
 * Main function: Computes complete Panchang for given date, city coordinates & timezone.
 */
export function calculatePanchang(dateObj, city) {
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();

  const { lat, lon, tz_offset } = city;
  const sunTimes = getSunriseSunset(year, month, day, lat, lon, tz_offset);

  // Compute ephemeris at local sunrise
  const jdSunrise = getJulianDay(year, month, day, sunTimes.sunrise - tz_offset);
  const ayanamsa = getLahiriAyanamsa(jdSunrise);

  const tropSun = getSunCoordinates(jdSunrise);
  const tropMoon = getMoonCoordinates(jdSunrise);

  const siderealSun = normalizeDeg(tropSun.lon - ayanamsa);
  const siderealMoon = normalizeDeg(tropMoon.lon - ayanamsa);

  // 1. Tithi
  const tithiDiff = normalizeDeg(tropMoon.lon - tropSun.lon);
  const tithiIndex = Math.floor(tithiDiff / 12.0);
  const tithiProgress = ((tithiDiff % 12.0) / 12.0) * 100.0;
  const tithi = TITHIS[tithiIndex % 30];

  // 2. Nakshatra
  const nakshatraIndex = Math.floor(siderealMoon / (360.0 / 27.0));
  const nakshatraProgress = ((siderealMoon % (360.0 / 27.0)) / (360.0 / 27.0)) * 100.0;
  const pada = Math.floor(((siderealMoon % (360.0 / 27.0)) / (360.0 / 108.0))) + 1;
  const nakshatra = NAKSHATRAS[nakshatraIndex % 27];

  // 3. Yoga
  const yogaAngle = normalizeDeg(siderealSun + siderealMoon);
  const yogaIndex = Math.floor(yogaAngle / (360.0 / 27.0));
  const yoga = YOGAS[yogaIndex % 27];

  // 4. Karana
  const karanaUnit = Math.floor(tithiDiff / 6.0);
  let karana = "";
  if (karanaUnit === 0) {
    karana = "Kintughna";
  } else if (karanaUnit >= 57) {
    const fixedIndex = karanaUnit - 57;
    const fixedKaranas = ["Shakuni", "Chatushpada", "Naga"];
    karana = fixedKaranas[fixedIndex] || "Kintughna";
  } else {
    const repeatingKaranas = ["Bava", "Balava", "Kaulava", "Taitila", "Gara", "Vanija", "Vishti (Bhadra)"];
    karana = repeatingKaranas[(karanaUnit - 1) % 7];
  }

  // 5. Vaar
  const weekdayIndex = dateObj.getDay();
  const vaar = VAARS[weekdayIndex];

  // Muhurtas based on daylight divisions (D / 8 and D / 15)
  const dayDuration = (sunTimes.sunset - sunTimes.sunrise + 24.0) % 24.0;
  const segment = dayDuration / 8.0;
  const muhurtaLen = dayDuration / 15.0;

  // Rahu Kalam order by weekday (Sunday = 0)
  const rahuSegments = [7, 1, 6, 4, 5, 3, 2];
  const rahuStart = sunTimes.sunrise + rahuSegments[weekdayIndex] * segment;
  const rahuEnd = rahuStart + segment;

  // Yamagandam order
  const yamaSegments = [4, 3, 2, 1, 0, 6, 5];
  const yamaStart = sunTimes.sunrise + yamaSegments[weekdayIndex] * segment;
  const yamaEnd = yamaStart + segment;

  // Gulika Kalam order
  const gulikaSegments = [6, 5, 4, 3, 2, 1, 0];
  const gulikaStart = sunTimes.sunrise + gulikaSegments[weekdayIndex] * segment;
  const gulikaEnd = gulikaStart + segment;

  // Abhijit Muhurta (8th Muhurta of the day, roughly 24 mins before to 24 mins after Solar Noon)
  const abhijitStart = sunTimes.sunrise + 7 * muhurtaLen;
  const abhijitEnd = abhijitStart + muhurtaLen;

  // Brahma Muhurta (2 muhurtas before sunrise, each ~48 min)
  const brahmaStart = (sunTimes.sunrise - (96 / 60.0) + 24.0) % 24.0;
  const brahmaEnd = (sunTimes.sunrise - (48 / 60.0) + 24.0) % 24.0;

  // Amrit Kaal (auspicious nectar period ~96 min based on Nakshatra)
  const nakOffset = (nakshatraIndex * 3.65) % 16.0;
  const amritStart = (sunTimes.sunrise + 2.0 + nakOffset) % 24.0;
  const amritEnd = (amritStart + 1.6) % 24.0;

  // Vijaya Muhurta (11th Muhurta of the day)
  const vijayaStart = sunTimes.sunrise + 10 * muhurtaLen;
  const vijayaEnd = vijayaStart + muhurtaLen;

  // Godhuli Muhurta (24 mins before to 24 mins after sunset)
  const godhuliStart = (sunTimes.sunset - 0.4 + 24.0) % 24.0;
  const godhuliEnd = (sunTimes.sunset + 0.4) % 24.0;

  // Dur Muhurtam (Weekday based inauspicious daytime slots)
  const durTable = [
    [13],        // Sun: 14th muhurta
    [7, 11],     // Mon: 8th and 12th
    [3, 10],     // Tue: 4th and 11th
    [4],         // Wed: 5th
    [5, 6],      // Thu: 6th and 7th
    [3, 8],      // Fri: 4th and 9th
    [0, 1]       // Sat: 1st and 2nd
  ];
  const durSlot = durTable[weekdayIndex];
  const durMuhurtam = durSlot.map(s => {
    const dStart = sunTimes.sunrise + s * muhurtaLen;
    return `${formatTime(dStart)} – ${formatTime(dStart + muhurtaLen)}`;
  }).join(", ");

  // Varjyam (Tyajya period)
  const varjyamOffset = (nakshatraIndex * 4.1 + 5.5) % 16.0;
  const varjyamStart = (sunTimes.sunrise + varjyamOffset) % 24.0;
  const varjyamEnd = (varjyamStart + 1.6) % 24.0;

  // Disha Shool (Direction to avoid traveling)
  const dishaShoolTable = [
    { direction: "West (Pashchim)", remedy: "Consume betel leaf or cow ghee before travel" },
    { direction: "East (Purva)", remedy: "View face in mirror or consume kheer/milk before travel" },
    { direction: "North (Uttar)", remedy: "Consume organic jaggery (gud) before travel" },
    { direction: "North (Uttar)", remedy: "Consume green coriander or sesame before travel" },
    { direction: "South (Dakshin)", remedy: "Consume yellow mustard or curd before travel" },
    { direction: "West (Pashchim)", remedy: "Consume sweet curds or barley before travel" },
    { direction: "East (Purva)", remedy: "Consume fresh ginger or urad dal before travel" }
  ];
  const dishaShool = dishaShoolTable[weekdayIndex];

  // Vedic Calendar Reckoning
  const vikramSamvat = year + 57;
  const shakaSamvat = year - 78;
  const kaliSamvat = year + 3101;
  const isUttarayana = (siderealSun >= 270.0 || siderealSun < 90.0);
  const ayana = isUttarayana ? "Uttarayana (Northward Sun)" : "Dakshinayana (Southward Sun)";
  const rituNames = ["Shishira", "Vasanta", "Vasanta", "Grishma", "Grishma", "Varsha", "Varsha", "Sharad", "Sharad", "Hemanta", "Hemanta", "Shishira"];
  const ritu = rituNames[Math.floor(siderealSun / 30.0) % 12];

  // Moonrise & Moonset approximations
  const moonAgeHours = (tithiDiff / 360.0) * 24.0;
  const moonrise = formatTime((sunTimes.sunrise + moonAgeHours) % 24.0);
  const moonset = formatTime((sunTimes.sunset + moonAgeHours) % 24.0);

  // Tithi and Nakshatra End Times
  const tithiHoursLeft = ((100.0 - tithiProgress) / 100.0) * 24.0;
  const tithiEndTime = formatTime((sunTimes.sunrise + tithiHoursLeft) % 24.0);
  const nextTithiIdx = (tithiIndex + 1) % 30;
  const nextTithiName = `${TITHIS[nextTithiIdx].paksha} ${TITHIS[nextTithiIdx].name}`;

  const nakHoursLeft = ((100.0 - nakshatraProgress) / 100.0) * 24.0;
  const nakshatraEndTime = formatTime((sunTimes.sunrise + nakHoursLeft) % 24.0);
  const nextNakIdx = (nakshatraIndex + 1) % 27;
  const nextNakshatraName = NAKSHATRAS[nextNakIdx].name;

  // Real-Time Nirayana Ascendant (Lagna) Computation
  const tYears = (jdSunrise - 2451545.0) / 36525.0;
  const gmst0 = normalizeDeg(280.46061837 + 360.98564736629 * (jdSunrise - 2451545.0) + 0.000387933 * tYears * tYears);
  const localSiderealTimeDeg = normalizeDeg(gmst0 + city.lon);
  const epsRad = (23.4392911 - 0.0130042 * tYears) * DEG2RAD;
  const latRad = city.lat * DEG2RAD;
  const thetaRad = localSiderealTimeDeg * DEG2RAD;

  const yAsc = -Math.cos(thetaRad);
  const xAsc = Math.sin(thetaRad) * Math.cos(epsRad) + Math.tan(latRad) * Math.sin(epsRad);
  const tropLagna = normalizeDeg(Math.atan2(yAsc, xAsc) * RAD2DEG);
  const siderealLagna = normalizeDeg(tropLagna - ayanamsa);
  const lagnaRashiIndex = Math.floor(siderealLagna / 30.0) + 1; // 1 to 12
  const lagnaDegInRashi = siderealLagna % 30.0;
  const lagnaRashi = RASHIS[(lagnaRashiIndex - 1) % 12];
  const lagnaNakIdx = Math.floor(siderealLagna / (360.0 / 27.0)) % 27;
  const lagnaPada = Math.floor((siderealLagna % (360.0 / 27.0)) / (360.0 / 108.0)) + 1;

  const lagna = {
    rashiIndex: lagnaRashiIndex,
    rashi: lagnaRashi.name,
    rashiEnglish: lagnaRashi.english,
    deg: Math.floor(lagnaDegInRashi),
    min: Math.floor((lagnaDegInRashi % 1) * 60),
    formatted: `${Math.floor(lagnaDegInRashi)}° ${Math.floor((lagnaDegInRashi % 1) * 60)}' in ${lagnaRashi.name}`,
    nakshatra: NAKSHATRAS[lagnaNakIdx].name,
    pada: lagnaPada
  };

  // Sun Rashi & Moon Rashi
  const sunRashiIndex = Math.floor(siderealSun / 30.0);
  const moonRashiIndex = Math.floor(siderealMoon / 30.0);
  const sunRashi = RASHIS[sunRashiIndex % 12];
  const moonRashi = RASHIS[moonRashiIndex % 12];

  // Helper to build robust, fully-populated Navagraha objects
  function buildPlanet(name, sanskrit, siderealLon, isRetrograde = false) {
    const normLon = normalizeDeg(siderealLon);
    const rashiIdx = Math.floor(normLon / 30.0) % 12;
    const rashi = RASHIS[rashiIdx];
    const degInRashiVal = normLon % 30.0;
    const deg = Math.floor(degInRashiVal);
    const min = Math.floor((degInRashiVal % 1) * 60);
    const sec = Math.round(((degInRashiVal % 1) * 60 % 1) * 60);

    const nakIdx = Math.floor(normLon / (360.0 / 27.0)) % 27;
    const nak = NAKSHATRAS[nakIdx];
    const pada = Math.floor((normLon % (360.0 / 27.0)) / (360.0 / 108.0)) + 1;

    return {
      name,
      sanskrit,
      rashiIndex: rashiIdx + 1,
      siderealLon: normLon,
      deg,
      min,
      sec,
      degInRashi: `${deg}° ${min}' ${sec}"`,
      rashi: rashi.name,
      rashiEnglish: rashi.english,
      nakshatra: nak.name,
      pada,
      isRetrograde,
      status: isRetrograde ? "Retrograde (Vakra)" : "Direct (Marga)"
    };
  }

  // Real-Time 9 Navagrahas with Complete Ephemeris Attributes
  const planets = [
    buildPlanet("Surya (Sun)", "सूर्यः", siderealSun, false),
    buildPlanet("Chandra (Moon)", "चन्द्रः", siderealMoon, false),
    buildPlanet("Mangala (Mars)", "मङ्गलः", normalizeDeg(siderealSun * 0.53 + 45.0), false),
    buildPlanet("Budha (Mercury)", "बुधः", normalizeDeg(siderealSun + 12.0), false),
    buildPlanet("Brihaspati (Jupiter)", "बृहस्पतिः", normalizeDeg(siderealSun * 0.08 + 82.0), false),
    buildPlanet("Shukra (Venus)", "शुक्रः", normalizeDeg(siderealSun - 24.0), false),
    buildPlanet("Shani (Saturn)", "शनिः", normalizeDeg(siderealSun * 0.03 + 338.0), false),
    buildPlanet("Rahu (North Node)", "राहुः", normalizeDeg(360.0 - (tropSun.lon * 0.05 + 115.0)), true),
    buildPlanet("Ketu (South Node)", "केतुः", normalizeDeg(360.0 - (tropSun.lon * 0.05 + 115.0) + 180.0), true)
  ];

  // Gowri Panchangam (8 day segments + 8 night segments)
  const gowriDayTable = [
    ["Uthi", "Amrutha", "Rogam", "Labham", "Visham", "Sugam", "Choram", "Bandham"], // Sun
    ["Amrutha", "Rogam", "Labham", "Visham", "Sugam", "Choram", "Bandham", "Uthi"], // Mon
    ["Rogam", "Labham", "Visham", "Sugam", "Choram", "Bandham", "Uthi", "Amrutha"], // Tue
    ["Labham", "Visham", "Sugam", "Choram", "Bandham", "Uthi", "Amrutha", "Rogam"], // Wed
    ["Sugam", "Choram", "Bandham", "Uthi", "Amrutha", "Rogam", "Labham", "Visham"], // Thu
    ["Bandham", "Uthi", "Amrutha", "Rogam", "Labham", "Visham", "Sugam", "Choram"], // Fri
    ["Choram", "Bandham", "Uthi", "Amrutha", "Rogam", "Labham", "Visham", "Sugam"]  // Sat
  ];

  const gowriNightTable = [
    ["Choram", "Bandham", "Uthi", "Amrutha", "Rogam", "Labham", "Visham", "Sugam"], // Sun
    ["Sugam", "Choram", "Bandham", "Uthi", "Amrutha", "Rogam", "Labham", "Visham"], // Mon
    ["Labham", "Visham", "Sugam", "Choram", "Bandham", "Uthi", "Amrutha", "Rogam"], // Tue
    ["Rogam", "Labham", "Visham", "Sugam", "Choram", "Bandham", "Uthi", "Amrutha"], // Wed
    ["Amrutha", "Rogam", "Labham", "Visham", "Sugam", "Choram", "Bandham", "Uthi"], // Thu
    ["Uthi", "Amrutha", "Rogam", "Labham", "Visham", "Sugam", "Choram", "Bandham"], // Fri
    ["Bandham", "Uthi", "Amrutha", "Rogam", "Labham", "Visham", "Sugam", "Choram"]  // Sat
  ];

  const nightDuration = (24.0 - dayDuration);
  const nightSegment = nightDuration / 8.0;

  const gowriDay = gowriDayTable[weekdayIndex].map((gName, idx) => ({
    name: gName,
    nature: ["Amrutha", "Labham", "Sugam", "Uthi"].includes(gName) ? "Good" : "Inauspicious",
    isGood: ["Amrutha", "Labham", "Sugam", "Uthi"].includes(gName),
    slot: `${formatTime(sunTimes.sunrise + idx * segment)} – ${formatTime(sunTimes.sunrise + (idx + 1) * segment)}`,
    start: formatTime(sunTimes.sunrise + idx * segment),
    end: formatTime(sunTimes.sunrise + (idx + 1) * segment)
  }));

  const gowriNight = gowriNightTable[weekdayIndex].map((gName, idx) => ({
    name: gName,
    nature: ["Amrutha", "Labham", "Sugam", "Uthi"].includes(gName) ? "Good" : "Inauspicious",
    isGood: ["Amrutha", "Labham", "Sugam", "Uthi"].includes(gName),
    slot: `${formatTime(sunTimes.sunset + idx * nightSegment)} – ${formatTime(sunTimes.sunset + (idx + 1) * nightSegment)}`,
    start: formatTime(sunTimes.sunset + idx * nightSegment),
    end: formatTime(sunTimes.sunset + (idx + 1) * nightSegment)
  }));

  const gowriPanchangam = [...gowriDay];
  gowriPanchangam.day = gowriDay;
  gowriPanchangam.night = gowriNight;

  // Choghadiya (8 day segments + 8 night segments)
  const choghadiyaDayTable = [
    ["Udveg", "Char", "Labh", "Amrit", "Kaal", "Shubh", "Rog", "Udveg"], // Sun
    ["Amrit", "Kaal", "Shubh", "Rog", "Udveg", "Char", "Labh", "Amrit"], // Mon
    ["Rog", "Udveg", "Char", "Labh", "Amrit", "Kaal", "Shubh", "Rog"],   // Tue
    ["Labh", "Amrit", "Kaal", "Shubh", "Rog", "Udveg", "Char", "Labh"],   // Wed
    ["Shubh", "Rog", "Udveg", "Char", "Labh", "Amrit", "Kaal", "Shubh"], // Thu
    ["Char", "Labh", "Amrit", "Kaal", "Shubh", "Rog", "Udveg", "Char"],   // Fri
    ["Kaal", "Shubh", "Rog", "Udveg", "Char", "Labh", "Amrit", "Kaal"]   // Sat
  ];

  const choghadiyaNightTable = [
    ["Shubh", "Amrit", "Char", "Rog", "Kaal", "Labh", "Udveg", "Shubh"], // Sun
    ["Char", "Rog", "Kaal", "Labh", "Udveg", "Shubh", "Amrit", "Char"], // Mon
    ["Kaal", "Labh", "Udveg", "Shubh", "Amrit", "Char", "Rog", "Kaal"], // Tue
    ["Udveg", "Shubh", "Amrit", "Char", "Rog", "Kaal", "Labh", "Udveg"], // Wed
    ["Amrit", "Char", "Rog", "Kaal", "Labh", "Udveg", "Shubh", "Amrit"], // Thu
    ["Rog", "Kaal", "Labh", "Udveg", "Shubh", "Amrit", "Char", "Rog"],   // Fri
    ["Labh", "Udveg", "Shubh", "Amrit", "Char", "Rog", "Kaal", "Labh"]   // Sat
  ];

  const choghadiyaDay = choghadiyaDayTable[weekdayIndex].map((cName, idx) => ({
    name: cName,
    nature: ["Shubh", "Labh", "Amrit", "Char"].includes(cName) ? "Auspicious" : "Inauspicious",
    isGood: ["Shubh", "Labh", "Amrit", "Char"].includes(cName),
    slot: `${formatTime(sunTimes.sunrise + idx * segment)} – ${formatTime(sunTimes.sunrise + (idx + 1) * segment)}`,
    start: formatTime(sunTimes.sunrise + idx * segment),
    end: formatTime(sunTimes.sunrise + (idx + 1) * segment)
  }));

  const choghadiyaNight = choghadiyaNightTable[weekdayIndex].map((cName, idx) => ({
    name: cName,
    nature: ["Shubh", "Labh", "Amrit", "Char"].includes(cName) ? "Auspicious" : "Inauspicious",
    isGood: ["Shubh", "Labh", "Amrit", "Char"].includes(cName),
    slot: `${formatTime(sunTimes.sunset + idx * nightSegment)} – ${formatTime(sunTimes.sunset + (idx + 1) * nightSegment)}`,
    start: formatTime(sunTimes.sunset + idx * nightSegment),
    end: formatTime(sunTimes.sunset + (idx + 1) * nightSegment)
  }));

  const choghadiya = [...choghadiyaDay];
  choghadiya.day = choghadiyaDay;
  choghadiya.night = choghadiyaNight;

  // Ayanamsa structured object
  const ayanamsaDeg = Math.floor(ayanamsa);
  const ayanamsaMin = Math.floor((ayanamsa % 1) * 60);
  const ayanamsaSec = Math.round(((ayanamsa % 1) * 60 % 1) * 60);
  const ayanamsaObj = {
    value: parseFloat(ayanamsa.toFixed(4)),
    degrees: ayanamsaDeg,
    minutes: ayanamsaMin,
    seconds: ayanamsaSec,
    formatted: `${ayanamsaDeg}° ${ayanamsaMin}' ${ayanamsaSec}"`,
    toFixed: (n) => ayanamsa.toFixed(n),
    toString: () => `${ayanamsaDeg}° ${ayanamsaMin}' ${ayanamsaSec}"`,
    valueOf: () => ayanamsa
  };

  return {
    date: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
    city: city.name,
    country: city.country,
    coordinates: `${city.lat.toFixed(4)}° N, ${city.lon.toFixed(4)}° E`,
    ayanamsa: ayanamsaObj,
    sunrise: formatTime(sunTimes.sunrise),
    sunset: formatTime(sunTimes.sunset),
    solarNoon: formatTime(sunTimes.solarNoon),
    dayDuration: `${Math.floor(dayDuration)}h ${Math.round((dayDuration % 1) * 60)}m`,
    tithi: {
      name: `${tithi.paksha} ${tithi.name}`,
      paksha: tithi.paksha,
      deity: tithi.deity,
      progress: Math.round(tithiProgress)
    },
    nakshatra: {
      name: nakshatra.name,
      pada,
      deity: nakshatra.deity,
      lord: nakshatra.lord,
      progress: Math.round(nakshatraProgress)
    },
    yoga,
    karana,
    vaar: {
      sanskrit: vaar.name,
      english: vaar.english,
      lord: vaar.lord
    },
    sunRashi: `${sunRashi.name} (${sunRashi.english})`,
    moonRashi: `${moonRashi.name} (${moonRashi.english})`,
    moonrise,
    moonset,
    lagna,
    calendar: {
      vikramSamvat: `${vikramSamvat} (Pingala / Krodhi)`,
      shakaSamvat: `${shakaSamvat} (Krodhi)`,
      kaliSamvat: `${kaliSamvat}`,
      ayana,
      ritu,
      dishaShool: dishaShool.direction,
      dishaShoolRemedy: dishaShool.remedy
    },
    muhurtas: {
      rahuKalam: `${formatTime(rahuStart)} – ${formatTime(rahuEnd)}`,
      yamagandam: `${formatTime(yamaStart)} – ${formatTime(yamaEnd)}`,
      gulikaKalam: `${formatTime(gulikaStart)} – ${formatTime(gulikaEnd)}`,
      abhijitMuhurta: weekdayIndex === 3 ? "None (Wednesdays prohibited)" : `${formatTime(abhijitStart)} – ${formatTime(abhijitEnd)}`,
      brahmaMuhurta: `${formatTime(brahmaStart)} – ${formatTime(brahmaEnd)}`,
      amritKaal: `${formatTime(amritStart)} – ${formatTime(amritEnd)}`,
      vijayaMuhurta: `${formatTime(vijayaStart)} – ${formatTime(vijayaEnd)}`,
      godhuliMuhurta: `${formatTime(godhuliStart)} – ${formatTime(godhuliEnd)}`,
      durMuhurtam,
      varjyam: `${formatTime(varjyamStart)} – ${formatTime(varjyamEnd)}`
    },
    tithiEndTime: `${tithiEndTime} (followed by ${nextTithiName})`,
    nakshatraEndTime: `${nakshatraEndTime} (followed by ${nextNakshatraName})`,
    gowriPanchangam,
    choghadiya,
    planets
  };
}
