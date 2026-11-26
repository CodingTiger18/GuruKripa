(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();const zt="modulepreload",Vt=function(u){return"/"+u},La={},T=function(a,t,i){let e=Promise.resolve();if(t&&t.length>0){let o=function(d){return Promise.all(d.map(l=>Promise.resolve(l).then(c=>({status:"fulfilled",value:c}),c=>({status:"rejected",reason:c}))))};document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),s=r?.nonce||r?.getAttribute("nonce");e=o(t.map(d=>{if(d=Vt(d),d in La)return;La[d]=!0;const l=d.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${c}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":zt,l||(h.as="script"),h.crossOrigin="",h.href=d,s&&h.setAttribute("nonce",s),document.head.appendChild(h),l)return new Promise((y,g)=>{h.addEventListener("load",y),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${d}`)))})}))}function n(o){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o}return e.then(o=>{for(const r of o||[])r.status==="rejected"&&n(r.reason);return a().catch(n)})},na=[{id:1,name:"Prathama",paksha:"Shukla",deity:"Agni"},{id:2,name:"Dwitiya",paksha:"Shukla",deity:"Brahma"},{id:3,name:"Tritiya",paksha:"Shukla",deity:"Gauri"},{id:4,name:"Chaturthi",paksha:"Shukla",deity:"Ganesha"},{id:5,name:"Panchami",paksha:"Shukla",deity:"Nagas"},{id:6,name:"Shashthi",paksha:"Shukla",deity:"Kartikeya"},{id:7,name:"Saptami",paksha:"Shukla",deity:"Surya"},{id:8,name:"Ashtami",paksha:"Shukla",deity:"Shiva / Durga"},{id:9,name:"Navami",paksha:"Shukla",deity:"Durga / Rama"},{id:10,name:"Dashami",paksha:"Shukla",deity:"Yama"},{id:11,name:"Ekadashi",paksha:"Shukla",deity:"Vishnu"},{id:12,name:"Dwadashi",paksha:"Shukla",deity:"Vishnu"},{id:13,name:"Trayodashi",paksha:"Shukla",deity:"Kamadeva"},{id:14,name:"Chaturdashi",paksha:"Shukla",deity:"Shiva"},{id:15,name:"Purnima",paksha:"Shukla",deity:"Chandra"},{id:16,name:"Prathama",paksha:"Krishna",deity:"Agni"},{id:17,name:"Dwitiya",paksha:"Krishna",deity:"Brahma"},{id:18,name:"Tritiya",paksha:"Krishna",deity:"Gauri"},{id:19,name:"Chaturthi",paksha:"Krishna",deity:"Ganesha"},{id:20,name:"Panchami",paksha:"Krishna",deity:"Nagas"},{id:21,name:"Shashthi",paksha:"Krishna",deity:"Kartikeya"},{id:22,name:"Saptami",paksha:"Krishna",deity:"Surya"},{id:23,name:"Ashtami",paksha:"Krishna",deity:"Shiva / Durga"},{id:24,name:"Navami",paksha:"Krishna",deity:"Durga"},{id:25,name:"Dashami",paksha:"Krishna",deity:"Yama"},{id:26,name:"Ekadashi",paksha:"Krishna",deity:"Vishnu"},{id:27,name:"Dwadashi",paksha:"Krishna",deity:"Vishnu"},{id:28,name:"Trayodashi",paksha:"Krishna",deity:"Kamadeva"},{id:29,name:"Chaturdashi",paksha:"Krishna",deity:"Shiva"},{id:30,name:"Amavasya",paksha:"Krishna",deity:"Pitrus"}],_=[{id:1,name:"Ashwini",deity:"Ashwini Kumaras",lord:"Ketu"},{id:2,name:"Bharani",deity:"Yama",lord:"Venus"},{id:3,name:"Krittika",deity:"Agni",lord:"Sun"},{id:4,name:"Rohini",deity:"Brahma",lord:"Moon"},{id:5,name:"Mrigashira",deity:"Soma",lord:"Mars"},{id:6,name:"Ardra",deity:"Rudra",lord:"Rahu"},{id:7,name:"Punarvasu",deity:"Aditi",lord:"Jupiter"},{id:8,name:"Pushya",deity:"Brihaspati",lord:"Saturn"},{id:9,name:"Ashlesha",deity:"Sarpa",lord:"Mercury"},{id:10,name:"Magha",deity:"Pitrus",lord:"Ketu"},{id:11,name:"Purva Phalguni",deity:"Bhaga",lord:"Venus"},{id:12,name:"Uttara Phalguni",deity:"Aryaman",lord:"Sun"},{id:13,name:"Hasta",deity:"Savitr",lord:"Moon"},{id:14,name:"Chitra",deity:"Vishwakarma",lord:"Mars"},{id:15,name:"Swati",deity:"Vayu",lord:"Rahu"},{id:16,name:"Vishakha",deity:"Indragni",lord:"Jupiter"},{id:17,name:"Anuradha",deity:"Mitra",lord:"Saturn"},{id:18,name:"Jyeshtha",deity:"Indra",lord:"Mercury"},{id:19,name:"Moola",deity:"Nirriti",lord:"Ketu"},{id:20,name:"Purva Ashadha",deity:"Apas",lord:"Venus"},{id:21,name:"Uttara Ashadha",deity:"Vishwedevas",lord:"Sun"},{id:22,name:"Shravana",deity:"Vishnu",lord:"Moon"},{id:23,name:"Dhanishtha",deity:"Vasus",lord:"Mars"},{id:24,name:"Shatabhisha",deity:"Varuna",lord:"Rahu"},{id:25,name:"Purva Bhadrapada",deity:"Aja Ekapada",lord:"Jupiter"},{id:26,name:"Uttara Bhadrapada",deity:"Ahirbudhnya",lord:"Saturn"},{id:27,name:"Revati",deity:"Pushan",lord:"Mercury"}],Ft=["Vishkambha","Priti","Ayushman","Saubhagya","Shobhana","Atiganda","Sukarma","Dhriti","Shula","Ganda","Vriddhi","Dhruva","Vyaghata","Harshana","Vajra","Siddhi","Vyatipata","Variyan","Parigha","Shiva","Siddha","Sadhya","Shubha","Shukla","Brahma","Indra","Vaidhriti"],O=[{id:1,name:"Mesha",english:"Aries",lord:"Mars"},{id:2,name:"Vrishabha",english:"Taurus",lord:"Venus"},{id:3,name:"Mithuna",english:"Gemini",lord:"Mercury"},{id:4,name:"Karkataka",english:"Cancer",lord:"Moon"},{id:5,name:"Simha",english:"Leo",lord:"Sun"},{id:6,name:"Kanya",english:"Virgo",lord:"Mercury"},{id:7,name:"Tula",english:"Libra",lord:"Venus"},{id:8,name:"Vrishchika",english:"Scorpio",lord:"Mars"},{id:9,name:"Dhanu",english:"Sagittarius",lord:"Jupiter"},{id:10,name:"Makara",english:"Capricorn",lord:"Saturn"},{id:11,name:"Kumbha",english:"Aquarius",lord:"Saturn"},{id:12,name:"Meena",english:"Pisces",lord:"Jupiter"}],Nt=[{id:0,name:"Ravivara",english:"Sunday",lord:"Surya"},{id:1,name:"Somavara",english:"Monday",lord:"Chandra"},{id:2,name:"Mangalavara",english:"Tuesday",lord:"Mangala"},{id:3,name:"Budhavara",english:"Wednesday",lord:"Budha"},{id:4,name:"Guruvara",english:"Thursday",lord:"Brihaspati"},{id:5,name:"Shukravara",english:"Friday",lord:"Shukra"},{id:6,name:"Shanivara",english:"Saturday",lord:"Shani"}],R=Math.PI/180,H=180/Math.PI;function p(u){let a=u%360;return a<0&&(a+=360),a}function S(u){return Math.sin(u*R)}function D(u){return Math.cos(u*R)}function Ta(u){return Math.tan(u*R)}function Pa(u,a,t,i=12){a<=2&&(u-=1,a+=12);const e=Math.floor(u/100),n=2-e+Math.floor(e/4);return Math.floor(365.25*(u+4716))+Math.floor(30.6001*(a+1))+t+i/24+n-1524.5}function Bt(u){const a=(u-2451545)/36525;return 23.856+1.396042*a+308e-6*a*a}function Ia(u){const a=(u-2451545)/36525,t=p(280.46646+36000.76983*a+3032e-7*a*a),i=p(357.52911+35999.05029*a-1537e-7*a*a),e=(1.914602-.004817*a-14e-6*a*a)*S(i)+(.019993-101e-6*a)*S(2*i)+289e-6*S(3*i),n=p(t+e),o=125.04-1934.136*a,r=p(n-.00569-.00478*S(o)),d=23.439291-.0130042*a+.00256*D(o),l=p(Math.atan2(D(d)*S(r),D(r))*H),c=Math.asin(S(d)*S(r))*H;return{lon:r,ra:l,dec:c}}function Kt(u){const a=(u-2451545)/36525,t=p(218.3164477+481267.88123421*a),i=p(297.8501921+445267.1114034*a),e=p(357.5291092+35999.0502909*a),n=p(134.9633964+477198.8675055*a),o=p(93.272095+483202.0175233*a);let r=6.288774*S(n)+1.274027*S(2*i-n)+.658314*S(2*i)+.213618*S(2*n)-.185116*S(e)-.114332*S(2*o);return{lon:p(t+r)}}function _t(u,a,t,i,e,n){const o=Pa(u,a,t,12-n),r=Ia(o),d=(D(90.8333)-S(i)*S(r.dec))/(D(i)*D(r.dec));let l=!0,c=0;d>1||d<-1?l=!1:c=Math.acos(d)*H;const h=(o-2451545)/36525,y=p(357.52911+35999.05029*h),g=p(280.46646+36000.76983*h),k=.016708634-42037e-9*h,A=Ta(23.439291/2)*Ta(23.439291/2),C=(A*S(2*g)-2*k*S(y)+4*k*A*S(y)*D(2*g)-.5*A*A*S(4*g)-1.25*k*k*S(2*y))*4,$=(720-4*e-C)/60,w=$-c*4/60,P=$+c*4/60,q=(w+n+24)%24,j=(P+n+24)%24,J=($+n+24)%24;return{sunrise:q,sunset:j,solarNoon:J,hasSun:l}}function m(u){let a=Math.round(u*60);a=(a+1440)%1440;const t=Math.floor(a/60),i=a%60,e=t>=12?"PM":"AM",n=t%12===0?12:t%12,o=i<10?`0${i}`:i;return`${n}:${o} ${e}`}function Ot(u,a){const t=u.getFullYear(),i=u.getMonth()+1,e=u.getDate(),{lat:n,lon:o,tz_offset:r}=a,s=_t(t,i,e,n,o,r),d=Pa(t,i,e,s.sunrise-r),l=Bt(d),c=Ia(d),h=Kt(d),y=p(c.lon-l),g=p(h.lon-l),k=p(h.lon-c.lon),A=Math.floor(k/12),C=k%12/12*100,$=na[A%30],w=Math.floor(g/(360/27)),P=g%(360/27)/(360/27)*100,q=Math.floor(g%(360/27)/(360/108))+1,j=_[w%27],J=p(y+g),Ra=Math.floor(J/(360/27)),ja=Ft[Ra%27],F=Math.floor(k/6);let N="";if(F===0)N="Kintughna";else if(F>=57){const b=F-57;N=["Shakuni","Chatushpada","Naga"][b]||"Kintughna"}else N=["Bava","Balava","Kaulava","Taitila","Gara","Vanija","Vishti (Bhadra)"][(F-1)%7];const E=u.getDay(),W=Nt[E],z=(s.sunset-s.sunrise+24)%24,x=z/8,I=z/15,za=[7,1,6,4,5,3,2],sa=s.sunrise+za[E]*x,Va=sa+x,Fa=[4,3,2,1,0,6,5],oa=s.sunrise+Fa[E]*x,Na=oa+x,Ba=[6,5,4,3,2,1,0],da=s.sunrise+Ba[E]*x,Ka=da+x,la=s.sunrise+7*I,_a=la+I,Oa=(s.sunrise-96/60+24)%24,Ga=(s.sunrise-48/60+24)%24,Ha=w*3.65%16,ca=(s.sunrise+2+Ha)%24,Ua=(ca+1.6)%24,ha=s.sunrise+10*I,qa=ha+I,Ja=(s.sunset-.4+24)%24,Wa=(s.sunset+.4)%24,Xa=[[13],[7,11],[3,10],[4],[5,6],[3,8],[0,1]][E].map(b=>{const f=s.sunrise+b*I;return`${m(f)} – ${m(f+I)}`}).join(", "),Ya=(w*4.1+5.5)%16,ua=(s.sunrise+Ya)%24,Za=(ua+1.6)%24,ga=[{direction:"West (Pashchim)",remedy:"Consume betel leaf or cow ghee before travel"},{direction:"East (Purva)",remedy:"View face in mirror or consume kheer/milk before travel"},{direction:"North (Uttar)",remedy:"Consume organic jaggery (gud) before travel"},{direction:"North (Uttar)",remedy:"Consume green coriander or sesame before travel"},{direction:"South (Dakshin)",remedy:"Consume yellow mustard or curd before travel"},{direction:"West (Pashchim)",remedy:"Consume sweet curds or barley before travel"},{direction:"East (Purva)",remedy:"Consume fresh ginger or urad dal before travel"}][E],Qa=t+57,at=t-78,tt=t+3101,et=y>=270||y<90?"Uttarayana (Northward Sun)":"Dakshinayana (Southward Sun)",it=["Shishira","Vasanta","Vasanta","Grishma","Grishma","Varsha","Varsha","Sharad","Sharad","Hemanta","Hemanta","Shishira"][Math.floor(y/30)%12],ma=k/360*24,nt=m((s.sunrise+ma)%24),rt=m((s.sunset+ma)%24),st=(100-C)/100*24,ot=m((s.sunrise+st)%24),pa=(A+1)%30,dt=`${na[pa].paksha} ${na[pa].name}`,lt=(100-P)/100*24,ct=m((s.sunrise+lt)%24),ht=(w+1)%27,ut=_[ht].name,X=(d-2451545)/36525,gt=p(280.46061837+360.98564736629*(d-2451545)+387933e-9*X*X),mt=p(gt+a.lon),ya=(23.4392911-.0130042*X)*R,pt=a.lat*R,va=mt*R,yt=-Math.cos(va),vt=Math.sin(va)*Math.cos(ya)+Math.tan(pt)*Math.sin(ya),ft=p(Math.atan2(yt,vt)*H),B=p(ft-l),fa=Math.floor(B/30)+1,K=B%30,Y=O[(fa-1)%12],bt=Math.floor(B/(360/27))%27,kt=Math.floor(B%(360/27)/(360/108))+1,St={rashiIndex:fa,rashi:Y.name,rashiEnglish:Y.english,deg:Math.floor(K),min:Math.floor(K%1*60),formatted:`${Math.floor(K)}° ${Math.floor(K%1*60)}' in ${Y.name}`,nakshatra:_[bt].name,pada:kt},wt=Math.floor(y/30),xt=Math.floor(g/30),ba=O[wt%12],ka=O[xt%12];function M(b,f,Pt,xa=!1){const V=p(Pt),$a=Math.floor(V/30)%12,Aa=O[$a],ia=V%30,Ea=Math.floor(ia),Ca=Math.floor(ia%1*60),Ma=Math.round(ia%1*60%1*60),It=Math.floor(V/(360/27))%27,Rt=_[It],jt=Math.floor(V%(360/27)/(360/108))+1;return{name:b,sanskrit:f,rashiIndex:$a+1,siderealLon:V,deg:Ea,min:Ca,sec:Ma,degInRashi:`${Ea}° ${Ca}' ${Ma}"`,rashi:Aa.name,rashiEnglish:Aa.english,nakshatra:Rt.name,pada:jt,isRetrograde:xa,status:xa?"Retrograde (Vakra)":"Direct (Marga)"}}const $t=[M("Surya (Sun)","सूर्यः",y,!1),M("Chandra (Moon)","चन्द्रः",g,!1),M("Mangala (Mars)","मङ्गलः",p(y*.53+45),!1),M("Budha (Mercury)","बुधः",p(y+12),!1),M("Brihaspati (Jupiter)","बृहस्पतिः",p(y*.08+82),!1),M("Shukra (Venus)","शुक्रः",p(y-24),!1),M("Shani (Saturn)","शनिः",p(y*.03+338),!1),M("Rahu (North Node)","राहुः",p(360-(c.lon*.05+115)),!0),M("Ketu (South Node)","केतुः",p(360-(c.lon*.05+115)+180),!0)],At=[["Uthi","Amrutha","Rogam","Labham","Visham","Sugam","Choram","Bandham"],["Amrutha","Rogam","Labham","Visham","Sugam","Choram","Bandham","Uthi"],["Rogam","Labham","Visham","Sugam","Choram","Bandham","Uthi","Amrutha"],["Labham","Visham","Sugam","Choram","Bandham","Uthi","Amrutha","Rogam"],["Sugam","Choram","Bandham","Uthi","Amrutha","Rogam","Labham","Visham"],["Bandham","Uthi","Amrutha","Rogam","Labham","Visham","Sugam","Choram"],["Choram","Bandham","Uthi","Amrutha","Rogam","Labham","Visham","Sugam"]],Et=[["Choram","Bandham","Uthi","Amrutha","Rogam","Labham","Visham","Sugam"],["Sugam","Choram","Bandham","Uthi","Amrutha","Rogam","Labham","Visham"],["Labham","Visham","Sugam","Choram","Bandham","Uthi","Amrutha","Rogam"],["Rogam","Labham","Visham","Sugam","Choram","Bandham","Uthi","Amrutha"],["Amrutha","Rogam","Labham","Visham","Sugam","Choram","Bandham","Uthi"],["Uthi","Amrutha","Rogam","Labham","Visham","Sugam","Choram","Bandham"],["Bandham","Uthi","Amrutha","Rogam","Labham","Visham","Sugam","Choram"]],L=(24-z)/8,Sa=At[E].map((b,f)=>({name:b,nature:["Amrutha","Labham","Sugam","Uthi"].includes(b)?"Good":"Inauspicious",isGood:["Amrutha","Labham","Sugam","Uthi"].includes(b),slot:`${m(s.sunrise+f*x)} – ${m(s.sunrise+(f+1)*x)}`,start:m(s.sunrise+f*x),end:m(s.sunrise+(f+1)*x)})),Ct=Et[E].map((b,f)=>({name:b,nature:["Amrutha","Labham","Sugam","Uthi"].includes(b)?"Good":"Inauspicious",isGood:["Amrutha","Labham","Sugam","Uthi"].includes(b),slot:`${m(s.sunset+f*L)} – ${m(s.sunset+(f+1)*L)}`,start:m(s.sunset+f*L),end:m(s.sunset+(f+1)*L)})),Z=[...Sa];Z.day=Sa,Z.night=Ct;const Mt=[["Udveg","Char","Labh","Amrit","Kaal","Shubh","Rog","Udveg"],["Amrit","Kaal","Shubh","Rog","Udveg","Char","Labh","Amrit"],["Rog","Udveg","Char","Labh","Amrit","Kaal","Shubh","Rog"],["Labh","Amrit","Kaal","Shubh","Rog","Udveg","Char","Labh"],["Shubh","Rog","Udveg","Char","Labh","Amrit","Kaal","Shubh"],["Char","Labh","Amrit","Kaal","Shubh","Rog","Udveg","Char"],["Kaal","Shubh","Rog","Udveg","Char","Labh","Amrit","Kaal"]],Lt=[["Shubh","Amrit","Char","Rog","Kaal","Labh","Udveg","Shubh"],["Char","Rog","Kaal","Labh","Udveg","Shubh","Amrit","Char"],["Kaal","Labh","Udveg","Shubh","Amrit","Char","Rog","Kaal"],["Udveg","Shubh","Amrit","Char","Rog","Kaal","Labh","Udveg"],["Amrit","Char","Rog","Kaal","Labh","Udveg","Shubh","Amrit"],["Rog","Kaal","Labh","Udveg","Shubh","Amrit","Char","Rog"],["Labh","Udveg","Shubh","Amrit","Char","Rog","Kaal","Labh"]],wa=Mt[E].map((b,f)=>({name:b,nature:["Shubh","Labh","Amrit","Char"].includes(b)?"Auspicious":"Inauspicious",isGood:["Shubh","Labh","Amrit","Char"].includes(b),slot:`${m(s.sunrise+f*x)} – ${m(s.sunrise+(f+1)*x)}`,start:m(s.sunrise+f*x),end:m(s.sunrise+(f+1)*x)})),Tt=Lt[E].map((b,f)=>({name:b,nature:["Shubh","Labh","Amrit","Char"].includes(b)?"Auspicious":"Inauspicious",isGood:["Shubh","Labh","Amrit","Char"].includes(b),slot:`${m(s.sunset+f*L)} – ${m(s.sunset+(f+1)*L)}`,start:m(s.sunset+f*L),end:m(s.sunset+(f+1)*L)})),Q=[...wa];Q.day=wa,Q.night=Tt;const aa=Math.floor(l),ta=Math.floor(l%1*60),ea=Math.round(l%1*60%1*60),Dt={value:parseFloat(l.toFixed(4)),degrees:aa,minutes:ta,seconds:ea,formatted:`${aa}° ${ta}' ${ea}"`,toFixed:b=>l.toFixed(b),toString:()=>`${aa}° ${ta}' ${ea}"`,valueOf:()=>l};return{date:`${t}-${String(i).padStart(2,"0")}-${String(e).padStart(2,"0")}`,city:a.name,country:a.country,coordinates:`${a.lat.toFixed(4)}° N, ${a.lon.toFixed(4)}° E`,ayanamsa:Dt,sunrise:m(s.sunrise),sunset:m(s.sunset),solarNoon:m(s.solarNoon),dayDuration:`${Math.floor(z)}h ${Math.round(z%1*60)}m`,tithi:{name:`${$.paksha} ${$.name}`,paksha:$.paksha,deity:$.deity,progress:Math.round(C)},nakshatra:{name:j.name,pada:q,deity:j.deity,lord:j.lord,progress:Math.round(P)},yoga:ja,karana:N,vaar:{sanskrit:W.name,english:W.english,lord:W.lord},sunRashi:`${ba.name} (${ba.english})`,moonRashi:`${ka.name} (${ka.english})`,moonrise:nt,moonset:rt,lagna:St,calendar:{vikramSamvat:`${Qa} (Pingala / Krodhi)`,shakaSamvat:`${at} (Krodhi)`,kaliSamvat:`${tt}`,ayana:et,ritu:it,dishaShool:ga.direction,dishaShoolRemedy:ga.remedy},muhurtas:{rahuKalam:`${m(sa)} – ${m(Va)}`,yamagandam:`${m(oa)} – ${m(Na)}`,gulikaKalam:`${m(da)} – ${m(Ka)}`,abhijitMuhurta:E===3?"None (Wednesdays prohibited)":`${m(la)} – ${m(_a)}`,brahmaMuhurta:`${m(Oa)} – ${m(Ga)}`,amritKaal:`${m(ca)} – ${m(Ua)}`,vijayaMuhurta:`${m(ha)} – ${m(qa)}`,godhuliMuhurta:`${m(Ja)} – ${m(Wa)}`,durMuhurtam:Xa,varjyam:`${m(ua)} – ${m(Za)}`},tithiEndTime:`${ot} (followed by ${dt})`,nakshatraEndTime:`${ct} (followed by ${ut})`,gowriPanchangam:Z,choghadiya:Q,planets:$t}}const Gt=[{code:"sa",name:"Sanskrit",native:"संस्कृतम्",script:"Devanagari"},{code:"hi",name:"Hindi",native:"हिन्दी",script:"Devanagari"},{code:"mr",name:"Marathi",native:"मराठी",script:"Devanagari"},{code:"ta",name:"Tamil",native:"தமிழ்",script:"Tamil"},{code:"te",name:"Telugu",native:"తెలుగు",script:"Telugu"},{code:"kn",name:"Kannada",native:"ಕನ್ನಡ",script:"Kannada"},{code:"ml",name:"Malayalam",native:"മലയാളം",script:"Malayalam"},{code:"gu",name:"Gujarati",native:"ગુજરાતી",script:"Gujarati"},{code:"bn",name:"Bengali",native:"বাংলা",script:"Bengali"},{code:"or",name:"Odia",native:"ଓଡ଼ିଆ",script:"Odia"},{code:"en",name:"English (IAST)",native:"English (IAST)",script:"Latin"}];function U(u){return u?u.replace(/[\u0951\u0952\u0953\u0954\u1CD0-\u1CF9\uA8E0-\uA8F7]/g,""):""}const Ht={sa:"ॐ",hi:"ॐ",mr:"ॐ",ta:"ஓம்",te:"ఓం",kn:"ಓಂ",ml:"ഓം",gu:"ૐ",bn:"ওঁ",or:"ଓଁ",en:"Oṃ"},ra={अ:"a",आ:"ā",इ:"i",ई:"ī",उ:"u",ऊ:"ū",ऋ:"ṛ",ॠ:"ṝ",ऌ:"ḷ",ॡ:"ḹ",ए:"e",ऐ:"ai",ओ:"o",औ:"au","ा":"ā","ि":"i","ी":"ī","ु":"u","ू":"ū","ृ":"ṛ","ॄ":"ṝ","ॢ":"ḷ","ॣ":"ḹ","े":"e","ै":"ai","ो":"o","ौ":"au","ं":"ṃ","ः":"ḥ","्":"",ऽ:"'",ॐ:"Oṃ",क:"ka",ख:"kha",ग:"ga",घ:"gha",ङ:"ṅa",च:"ca",छ:"cha",ज:"ja",झ:"jha",ञ:"ña",ट:"ṭa",ठ:"ṭha",ड:"ḍa",ढ:"ḍha",ण:"ṇa",त:"ta",थ:"tha",द:"da",ध:"dha",न:"na",प:"pa",फ:"pha",ब:"ba",भ:"bha",म:"ma",य:"ya",र:"ra",ल:"la",व:"va",श:"śa",ष:"ṣa",स:"sa",ह:"ha",ळ:"ḷa",क्ष:"kṣa",ज्ञ:"jña","०":"0","१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","।":"|","॥":"||"};function Ut(u,a,t){let i="";const e=U(u);for(let n=0;n<e.length;n++){const o=e[n],r=e.charCodeAt(n);if(o==="ॐ"){i+=Ht[t]||"ॐ";continue}if(r===2404||r===2405){i+=o;continue}if(r>=2305&&r<=2416){if(t==="ta"){const d={ख:"க",ग:"க",घ:"க",ङ:"ங",च:"ச",छ:"ச",ज:"ஜ",झ:"ச",ञ:"ஞ",ठ:"ட",ड:"ட",ढ:"ட",थ:"த",द:"த",ध:"த",फ:"ப",ब:"ப",भ:"ப",श:"ஶ",ष:"ஷ",स:"ஸ",ह:"ஹ",क्ष:"க்ஷ",ऋ:"ரி",ॠ:"ரீ","ृ":"்ரி","ॄ":"்ரீ","ं":"ம்","ः":"ஃ"};if(d[o]){i+=d[o];continue}}if(t==="bn"){if(o==="व"){i+="ব";continue}if(o==="र"){i+="র";continue}}if(t==="or"&&o==="व"){i+="ୱ";continue}if(t==="ml"&&o==="र"&&e[n+1]==="्"){i+="ർ",n++;continue}const s=r+a;i+=String.fromCharCode(s)}else i+=o}return i}function qt(u){const a=U(u);let t="",i=0;for(;i<a.length;){const e=a[i],n=a[i+1];if(e==="्"){i++;continue}if(ra[e]){let o=ra[e];if(o.endsWith("a")){if(n&&["ा","ि","ी","ु","ू","ृ","ॄ","े","ै","ो","ौ"].includes(n)){o=o.slice(0,-1)+ra[n],i+=2,t+=o;continue}else if(n==="्"){o=o.slice(0,-1),i+=2,t+=o;continue}}t+=o,i++}else t+=e,i++}return t}const G=new Map,Jt=1500;function v(u,a,t=!0){if(!u)return"";const i=`${a}:${t?1:0}:${u}`,e=G.get(i);if(e!==void 0)return e;let n;if(a==="sa"||a==="hi"||a==="mr")n=t?U(u):u;else if(a==="en")n=qt(u);else{const r={bn:128,gu:384,or:512,ta:640,te:768,kn:896,ml:1024}[a];r!==void 0?n=Ut(u,r,a):n=t?U(u):u}return G.size>=Jt&&G.clear(),G.set(i,n),n}const Da={id:"new-delhi-in",name:"New Delhi",state:"Delhi",country:"India",lat:28.6139,lon:77.209,tz:"Asia/Kolkata",tz_offset:5.5,elevation_m:216},Wt={ta:"Noto+Sans+Tamil:wght@400;600;700",te:"Noto+Sans+Telugu:wght@400;600;700",kn:"Noto+Sans+Kannada:wght@400;600;700",ml:"Noto+Sans+Malayalam:wght@400;600;700",bn:"Noto+Sans+Bengali:wght@400;600;700",gu:"Noto+Sans+Gujarati:wght@400;600;700",or:"Noto+Sans+Oriya:wght@400;600;700"};class Xt{constructor(){this.cities=[Da],this.selectedCity=this.loadSavedCity()||Da,this.selectedDate=new Date,this.selectedLang=localStorage.getItem("gk_lang")||"sa",this.currentView=this.getViewFromHash(),this.panchangTab="overview",this.chartStyle="north",this.slokaFontSize=1.35,this.showSabdartha=!0,this.cityModalOpen=!1,this.theme=localStorage.getItem("gk_theme")||"light",this._modCache={},this._panchangCache=new Map,this._loadedFonts=new Set,this._renderSeq=0,this.japaEngine=null,this.deityPosterModalOpen=!1,this.posterAspectRatio="portrait",this.posterTheme="gold",this.selectedDeity="all",this.selectedCategory="all",this.playingSlokaId=null,this.chantSpeed=1,this.audioCtx=null,this.audioTimer=null,this.activeCardSloka=null,this.cardTheme="saffron",this.init()}getOrigin(){return typeof window<"u"&&window.location&&window.location.origin&&!window.location.origin.startsWith("file:")?window.location.origin:"https://gurukripa.pages.dev"}ensureRegionalFont(a){const t=Wt[a];if(!t||this._loadedFonts.has(a)||typeof document>"u")return;this._loadedFonts.add(a);const i=document.createElement("link");i.rel="stylesheet",i.href=`https://fonts.googleapis.com/css2?family=${t}&display=swap`,document.head.appendChild(i)}async _loadModule(a,t){return this._modCache[a]||(this._modCache[a]=t().catch(i=>{throw delete this._modCache[a],i})),this._modCache[a]}loadCities(){return this._loadModule("cities",()=>T(()=>import("./cities-CrmYQ7RW.js"),[])).then(a=>(this.cities=a.default||a,this.cities))}loadChartEngine(){return this._loadModule("chart",()=>T(()=>import("./chart-engine-BRojn5IU.js"),[]))}loadJyotirlingas(){return this._loadModule("jyotirlingas",()=>T(()=>import("./jyotirlinga-data-CgnK_MFk.js"),[]))}loadSlokas(){return this._loadModule("slokas",()=>T(()=>import("./slokas-data-TcbxtgBl.js"),[]))}loadStories(){return this._loadModule("stories",()=>T(()=>import("./stories-data-BHsV97xG.js"),[]))}loadDeityPoster(){return this._loadModule("poster",()=>T(()=>import("./deity-poster-engine-BEbCKdi6.js"),[])).then(a=>(this._resolvedPosterMod=a,a))}async ensureJapaEngine(){if(!this.japaEngine){const{JapaMalaEngine:a}=await this._loadModule("japa",()=>T(()=>import("./japa-engine-ghF9y28l.js"),[]));this.japaEngine=new a}return this.japaEngine}prefetchSecondaryModules(){const a=()=>{this.loadSlokas().catch(()=>{}),this.loadJyotirlingas().catch(()=>{}),this.loadChartEngine().catch(()=>{}),this.loadStories().catch(()=>{}),this.ensureJapaEngine().catch(()=>{}),this.loadDeityPoster().catch(()=>{}),this.loadCities().catch(()=>{})};typeof window<"u"&&"requestIdleCallback"in window?window.requestIdleCallback(a,{timeout:2e3}):setTimeout(a,600)}getPanchangData(){const a=this.selectedDate instanceof Date?this.selectedDate:new Date(this.selectedDate),t=`${a.getFullYear()}-${a.getMonth()+1}-${a.getDate()}`,i=this.selectedCity,e=`${t}:${i.id||i.name}:${i.lat}:${i.lon}`;let n=this._panchangCache.get(e);return n||(this._panchangCache.size>32&&this._panchangCache.clear(),n=Ot(a,i),this._panchangCache.set(e,n)),n}loadSavedCity(){try{const a=localStorage.getItem("gk_selected_city");return a?JSON.parse(a):null}catch{return null}}saveCity(a){this.selectedCity=a;try{localStorage.setItem("gk_selected_city",JSON.stringify(a))}catch{}}getViewFromHash(){const a=window.location.hash.replace("#","").split("?")[0];return["panchang","jyotirlingas","stotras","japa","stories"].includes(a)?a:"panchang"}init(){document.documentElement.setAttribute("data-theme",this.theme),document.documentElement.setAttribute("data-lang",this.selectedLang),this.ensureRegionalFont(this.selectedLang),window.addEventListener("hashchange",()=>{const a=this.getViewFromHash();a!==this.currentView&&(this.currentView=a,this.renderViewOnly())}),window.addEventListener("keydown",a=>{this.currentView==="japa"&&(a.code==="Space"||a.code==="Enter")&&(a.preventDefault(),this.handleJapaClick())}),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})}),this.mountShell(),this.render(),this.prefetchSecondaryModules()}toggleTheme(){this.theme=this.theme==="light"?"dark":"light",localStorage.setItem("gk_theme",this.theme),document.documentElement.setAttribute("data-theme",this.theme);const a=document.getElementById("gk-theme-btn");a&&(a.innerHTML=this.theme==="light"?"🌙 Dark":"☀️ Light")}handleJapaClick(){const a=this.japaEngine.increment(),t=document.getElementById("gk-bead-number"),i=document.getElementById("gk-stat-rounds"),e=document.getElementById("gk-stat-total");t&&(t.innerText=a.bead),i&&(i.innerText=a.rounds),e&&(e.innerText=a.totalChants),a.reachedMeru&&this.japaEngine.meruReversalMode&&alert(`✨ Haribol! You have reached the sacred Sumeru (Meru) bead.
In traditional practice, do not cross the Guru bead; turn your mala around for the next round.`)}autoDetectLocation(){if(!navigator.geolocation){alert("Geolocation is not supported by your browser. Please select a city manually.");return}navigator.geolocation.getCurrentPosition(a=>{const t=a.coords.latitude,i=a.coords.longitude,e=-new Date().getTimezoneOffset()/60,n={id:"gps-current",name:"Current GPS Location",state:"Local",country:"Live Coordinates",lat:parseFloat(t.toFixed(4)),lon:parseFloat(i.toFixed(4)),tz:Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC",tz_offset:e,elevation_m:50};this.saveCity(n),this.cityModalOpen=!1,this.render()},a=>{alert("GPS detection failed: "+a.message+". Please choose your city from the global directory.")},{timeout:1e4,enableHighAccuracy:!0})}async playChantSound(a){if(this.playingSlokaId===a){this.stopChantSound();return}this.stopChantSound();const[{SLOKAS_DATA:t},{JYOTIRLINGAS:i}]=await Promise.all([this.loadSlokas(),this.loadJyotirlingas()]);let e=t.find(r=>r.id===a);if(e||(e=i.find(r=>r.id===a)),!e)return;this.playingSlokaId=a,document.querySelectorAll(".gk-audio-play-btn").forEach(r=>{const s=r.getAttribute("data-play-id");r.innerHTML=s===a?r.textContent.includes("Chant")?"⏸ Pause Chant":"⏸":r.textContent.includes("Pause")||r.textContent.includes("Chant")?"▶ Chant Verse":"▶"});const o=(e.devanagari||e.stotramVerse||e.sanskritName||"").replace(/[॥।\r\n]+/g," ").replace(/\s+/g," ").trim();if("speechSynthesis"in window&&o)try{window.speechSynthesis.cancel();const r=new SpeechSynthesisUtterance(o);r.lang="hi-IN",r.rate=.82*this.chantSpeed,r.pitch=.95;const d=window.speechSynthesis.getVoices().find(l=>l.lang&&(l.lang.startsWith("hi")||l.lang.startsWith("sa")||l.lang.includes("IN"))||l.name&&(l.name.includes("Hindi")||l.name.includes("India")||l.name.includes("Kalpana")||l.name.includes("Lekha")));d&&(r.voice=d),r.onend=()=>{this.stopChantSound()},r.onerror=()=>{this.stopChantSound()},this.currentUtterance=r,window.speechSynthesis.speak(r)}catch(r){console.warn("Speech synthesis notice:",r)}try{const r=window.AudioContext||window.webkitAudioContext;if(r){this.audioCtx=new r;const s=this.audioCtx.createGain();s.gain.setValueAtTime(.01,this.audioCtx.currentTime),s.gain.exponentialRampToValueAtTime(.08,this.audioCtx.currentTime+1);const d=[136.1,204.15,272.2];this.droneOscillators=d.map((l,c)=>{const h=this.audioCtx.createOscillator(),y=this.audioCtx.createGain();return h.type=c===0?"sine":"triangle",h.frequency.setValueAtTime(l,this.audioCtx.currentTime),y.gain.setValueAtTime(1/(c+1),this.audioCtx.currentTime),h.connect(y),y.connect(s),h.start(),h}),s.connect(this.audioCtx.destination),this.droneGain=s}}catch(r){console.warn("Chant audio drone notice:",r)}}stopChantSound(){if("speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}if(this.currentUtterance=null,this.audioCtx)try{this.droneGain&&this.droneGain.gain.exponentialRampToValueAtTime(1e-4,this.audioCtx.currentTime+.3),setTimeout(()=>{this.droneOscillators&&(this.droneOscillators.forEach(a=>{try{a.stop()}catch{}}),this.droneOscillators=null),this.audioCtx&&(this.audioCtx.close().catch(()=>{}),this.audioCtx=null)},350)}catch{this.audioCtx=null}this.playingSlokaId=null,document.querySelectorAll(".gk-audio-play-btn").forEach(a=>{a.innerHTML="▶"})}async openCardMaker(a){const{SLOKAS_DATA:t}=await this.loadSlokas(),i=t.find(e=>e.id===a);i&&(this.activeCardSloka=i,this.renderModalOnly(),requestAnimationFrame(()=>this.drawShareCanvas()))}closeCardMaker(){this.activeCardSloka=null,this.renderModalOnly()}drawShareCanvas(){const a=document.getElementById("gk-share-canvas");if(!a||!this.activeCardSloka)return;const t=a.getContext("2d"),i=this.activeCardSloka;a.width=1080,a.height=1920;const e=t.createLinearGradient(0,0,1080,1920);this.cardTheme==="saffron"?(e.addColorStop(0,"#FF8F00"),e.addColorStop(.5,"#E65100"),e.addColorStop(1,"#6A0D18")):this.cardTheme==="maroon"?(e.addColorStop(0,"#4A0E17"),e.addColorStop(.5,"#800020"),e.addColorStop(1,"#250409")):this.cardTheme==="sandal"?(e.addColorStop(0,"#C5A059"),e.addColorStop(.6,"#8A6828"),e.addColorStop(1,"#3D2D10")):(e.addColorStop(0,"#0A192F"),e.addColorStop(.5,"#1E3A8A"),e.addColorStop(1,"#1A0B2E")),t.fillStyle=e,t.fillRect(0,0,1080,1920),t.strokeStyle="#D4AF37",t.lineWidth=14,t.strokeRect(40,40,1e3,1840),t.lineWidth=4,t.strokeRect(60,60,960,1800),t.fillStyle="rgba(255, 255, 255, 0.06)",t.font='bold 360px "Noto Serif Devanagari", serif',t.textAlign="center",t.fillText("ॐ",540,1050),t.fillStyle="#FFE082",t.font='700 42px "Cinzel", Georgia, serif',t.fillText("G U R U K R I P A",540,150),t.font="400 28px sans-serif",t.fillStyle="rgba(255, 255, 255, 0.8)",t.fillText("Sacred Daily Sanatana Dharma Wisdom",540,195),t.fillStyle="#FFFFFF",t.font='bold 52px "Cinzel", Georgia, serif',t.fillText(i.deity,540,310),t.fillStyle="#FFE082",t.font='600 36px "Cinzel", Georgia, serif',t.fillText(i.title,540,370);const n=v(i.devanagari,this.selectedLang).split(`
`);t.fillStyle="#FFFFFF",t.font='600 48px "Noto Serif Devanagari", "Noto Sans Tamil", "Noto Sans Telugu", serif';let o=560;for(const l of n)t.fillText(l,540,o),o+=85;t.fillStyle="#FFE0B2",t.font="italic 34px Georgia, serif",o+=40;const r=i.iast.split(`
`);for(const l of r)t.fillText(l,540,o),o+=56;o+=40,t.strokeStyle="rgba(212, 175, 55, 0.5)",t.beginPath(),t.moveTo(200,o),t.lineTo(880,o),t.stroke(),o+=80,t.fillStyle="rgba(255, 255, 255, 0.95)",t.font='400 32px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';const s=i.translation.split(" ");let d="";for(const l of s){const c=d?d+" "+l:l;t.measureText(c).width>860?(t.fillText(d,540,o),o+=52,d=l):d=c}d&&t.fillText(d,540,o),t.fillStyle="#FFE082",t.font='600 28px "Cinzel", Georgia, serif',t.fillText(`${this.getOrigin().replace(/^https?:\/\//,"")} • 100% Client-Side Vedic Wisdom`,540,1800)}downloadCardImage(){const a=document.getElementById("gk-share-canvas");if(!a||!this.activeCardSloka)return;const t=a.toDataURL("image/png"),i=document.createElement("a");i.href=t,i.download=`GuruKripa_${this.activeCardSloka.id}_${this.cardTheme}.png`,i.click()}shareCardToWhatsApp(){if(!document.getElementById("gk-share-canvas")||!this.activeCardSloka)return;const t=this.activeCardSloka,i=encodeURIComponent(`🕉️ *${t.title}* (${t.deity})

"${v(t.devanagari,this.selectedLang)}"

*Meaning:* ${t.translation}

Chant daily on GuruKripa: ${this.getOrigin()}/#stotras`);window.open(`https://api.whatsapp.com/send?text=${i}`,"_blank")}mountShell(){const a=document.getElementById("app");if(!a)return;const t=typeof sessionStorage<"u"&&sessionStorage.getItem("gk_hide_sticky_ad")==="true";a.innerHTML=`
      <div id="gk-header-root">${this.renderHeader()}</div>
      <main class="gk-main">
        <div id="gk-nav-root">${this.renderNavSubbar()}</div>
        ${this.renderAdSlot("ad-header-leaderboard","leaderboard")}
        <div id="gk-view-root"></div>
      </main>
      ${this.renderFooter()}
      <div id="gk-modal-root"></div>
      ${t?"":this.renderAdSlot("ad-footer-anchor","sticky-footer")}
      ${this.renderConsentBanner()}
    `,this.bindShellEvents()}render(){const a=document.getElementById("gk-header-root"),t=document.getElementById("gk-nav-root");!a||!t?this.mountShell():(a.innerHTML=this.renderHeader(),t.innerHTML=this.renderNavSubbar(),this.bindHeaderNavEvents()),this.renderViewOnly(),this.renderModalOnly()}async renderViewOnly(){const a=document.getElementById("gk-view-root");if(!a)return;const t=++this._renderSeq;document.querySelectorAll(".gk-nav-links a").forEach(e=>{const n=(e.getAttribute("href")||"").replace("#","");e.classList.toggle("active",n===this.currentView)});const i=await this.renderView();t===this._renderSeq&&(a.innerHTML=i,this.bindViewEvents(),this.updateSEO(),this.pushAdSenseSlots(a))}async renderPanchangSubTabOnly(){const a=document.getElementById("gk-panchang-tab-content");if(!a)return this.renderViewOnly();const t=++this._renderSeq;document.querySelectorAll(".gk-tab-btn").forEach(n=>{n.classList.toggle("active",n.getAttribute("data-tab")===this.panchangTab)});const i=this.getPanchangData(),e=await this.renderPanchangSubTabHtml(i);t===this._renderSeq&&(a.innerHTML=e,this.bindViewEvents())}async renderModalOnly(){const a=document.getElementById("gk-modal-root");if(!a)return;let t="";this.cityModalOpen&&(await this.loadCities(),t+=this.renderCityModal()),this.activeCardSloka&&(t+=this.renderCardMakerModal()),this.deityPosterModalOpen&&(await this.loadDeityPoster(),t+=this.renderDeityPosterModal()),a.innerHTML=t,this.bindModalEvents()}pushAdSenseSlots(a=document){try{typeof window<"u"&&window.adsbygoogle&&a.querySelectorAll("ins.adsbygoogle:not([data-adsbygoogle-status])").forEach(()=>{(window.adsbygoogle=window.adsbygoogle||[]).push({})})}catch{}}renderHeader(){return`
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
              ${Gt.map(a=>`
                <option value="${a.code}" ${a.code===this.selectedLang?"selected":""}>
                  ${a.native} (${a.name})
                </option>
              `).join("")}
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
              ${this.theme==="light"?"🌙 Dark":"☀️ Light"}
            </button>
          </div>
        </div>
      </header>
    `}renderNavSubbar(){return`
      <nav class="gk-nav-subbar">
        <div class="gk-nav-subbar-inner">
          <ul class="gk-nav-links">
            <li><a href="#panchang" class="${this.currentView==="panchang"?"active":""}">Panchangam</a></li>
            <li><a href="#jyotirlingas" class="${this.currentView==="jyotirlingas"?"active":""}">12 Jyotirlingas</a></li>
            <li><a href="#stotras" class="${this.currentView==="stotras"?"active":""}">Stotras & 12 Deities</a></li>
            <li><a href="#japa" class="${this.currentView==="japa"?"active":""}">108 Japa Mala</a></li>
            <li><a href="#stories" class="${this.currentView==="stories"?"active":""}">Dharmic Stories</a></li>
          </ul>

          <div class="gk-location-pill">
            <span>Lat: ${this.selectedCity.lat.toFixed(2)}°, Lon: ${this.selectedCity.lon.toFixed(2)}° (${this.selectedCity.tz})</span>
          </div>
        </div>
      </nav>
    `}async renderView(){switch(this.currentView){case"panchang":return this.renderPanchang();case"jyotirlingas":return this.renderJyotirlingas();case"stotras":return this.renderStotras();case"japa":return this.renderJapa();case"stories":return this.renderStories();default:return this.renderPanchang()}}async renderPanchangSubTabHtml(a){return this.panchangTab==="kundali"?this.renderPanchangKundali(a):this.panchangTab==="gowri"?this.renderGowriTable(a.gowriPanchangam):this.panchangTab==="choghadiya"?this.renderChoghadiyaTable(a.choghadiya):this.panchangTab==="planets"?this.renderPlanetsTable(a.planets,a.ayanamsa):this.renderPanchangOverview(a)}async renderPanchang(){const a=this.getPanchangData(),t=await this.renderPanchangSubTabHtml(a);return`
      <section>
        <!-- Traditional Vedic Almanac Header -->
        <div class="gk-almanac-header">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
            <div>
              <div class="gk-almanac-title">
                ${v("दैनिक पञ्चाङ्गम्",this.selectedLang)} — ${a.date}
              </div>
              <div style="font-size:0.85rem; color:#FFE0B2;">
                📍 ${this.selectedCity.name}, ${this.selectedCity.country} • Lahiri Ayanamsa: ${a.ayanamsa&&a.ayanamsa.formatted?a.ayanamsa.formatted:a.ayanamsa&&a.ayanamsa.degrees!==void 0?`${a.ayanamsa.degrees}° ${a.ayanamsa.minutes}'`:a.ayanamsa}
              </div>
            </div>
            <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
              <button id="gk-open-deity-poster" class="gk-btn" style="background:linear-gradient(135deg, #FFD700, #FF6F00); color:#000000; font-weight:800; border:none; box-shadow:0 2px 10px rgba(255,215,0,0.35); display:inline-flex; align-items:center; gap:6px; cursor:pointer;" title="Generate Instagram/X/WhatsApp Deity Postcard">
                🎨 Share Deity Postcard
              </button>
              <input type="date" id="gk-date-picker" class="gk-select" value="${a.date}" style="background:#FFF; color:#222; font-weight:700;">
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
              <strong>${v(a.vaar.sanskrit,this.selectedLang)}</strong>
            </div>
          </div>
        </div>

        <div class="gk-tabs">
          <button class="gk-tab-btn ${this.panchangTab==="overview"?"active":""}" data-tab="overview">5 Daily Limbs</button>
          <button class="gk-tab-btn ${this.panchangTab==="kundali"?"active":""}" data-tab="kundali">Rāśi Kundali (Chart of the Day)</button>
          <button class="gk-tab-btn ${this.panchangTab==="gowri"?"active":""}" data-tab="gowri">Gowri Panchangam</button>
          <button class="gk-tab-btn ${this.panchangTab==="choghadiya"?"active":""}" data-tab="choghadiya">Choghadiya Muhurtas</button>
          <button class="gk-tab-btn ${this.panchangTab==="planets"?"active":""}" data-tab="planets">Planetary Longitudes</button>
        </div>

        <div id="gk-panchang-tab-content">${t}</div>

        ${this.renderAdSlot("ad-panchang-inline","rectangle")}
      </section>
    `}async renderPanchangKundali(a){const{buildChartData:t,renderNorthIndianChart:i,renderSouthIndianChart:e,renderEastIndianChart:n,renderWestIndianChart:o}=await this.loadChartEngine(),r=t(a.lagna.rashiIndex,a.lagna.deg,a.planets);let s="";return this.chartStyle==="south"?s=e(r):this.chartStyle==="east"?s=n(r):this.chartStyle==="west"?s=o(r):s=i(r),`
      <div class="gk-card" style="margin-top:16px;">
        <div class="gk-chart-controls">
          <div>
            <h3 style="color:var(--color-primary); margin:0 0 4px 0; font-size:1.2rem;">
              Vedic Rāśi Kundali (Chart of the Day)
            </h3>
            <p style="font-size:0.85rem; color:var(--color-text-muted); margin:0;">
              Calculated for ${this.selectedCity.name} (${a.coordinates}) using Lahiri Ayanamsa (${a.ayanamsa.formatted||a.ayanamsa})
            </p>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <label for="gk-chart-style-select" style="font-size:0.85rem; font-weight:700; color:var(--color-secondary);">Chart Style:</label>
            <select id="gk-chart-style-select" class="gk-chart-select">
              <option value="north" ${this.chartStyle==="north"?"selected":""}>North Indian (Parashara Diamond) [Default]</option>
              <option value="south" ${this.chartStyle==="south"?"selected":""}>South Indian (Fixed-Sign Grid)</option>
              <option value="east" ${this.chartStyle==="east"?"selected":""}>East Indian (Bengali / Surya)</option>
              <option value="west" ${this.chartStyle==="west"?"selected":""}>West Indian (Circular Wheel / Western)</option>
            </select>
          </div>
        </div>

        <div class="gk-kundali-wrapper">
          <div class="gk-kundali-chart-box">
            ${s}
            <div style="font-size:0.82rem; color:var(--color-text); margin-top:14px; text-align:center; line-height:1.4;">
              Ascendant (Lagna): <strong style="color:var(--color-primary);">${a.lagna.rashi} (${a.lagna.rashiEnglish}) ${a.lagna.deg}° ${a.lagna.min}'</strong><br>
              <span style="font-size:0.76rem; color:var(--color-text-muted);">Nakshatra: ${a.lagna.nakshatra} (Pada ${a.lagna.pada})</span>
            </div>
          </div>

          <div class="gk-kundali-details-box">
            <h4 style="color:var(--color-primary); margin-top:0; margin-bottom:12px; border-bottom:1px solid var(--color-border); padding-bottom:6px;">
              Planetary Occupation of Houses (Bhava Sthiti)
            </h4>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(210px, 1fr)); gap:10px;">
              ${a.planets.map(d=>`
                <div style="background:var(--color-background); border:1px solid var(--color-border); border-radius:6px; padding:8px 12px; font-size:0.85rem;">
                  <div style="font-weight:700; color:var(--color-primary); display:flex; justify-content:space-between;">
                    <span>${d.name.split(" ")[0]} (${d.sanskrit})</span>
                    <span style="color:var(--color-secondary); font-size:0.75rem;">${d.status}</span>
                  </div>
                  <div style="color:var(--color-text-muted); font-size:0.8rem; margin-top:2px;">
                    ${d.rashi} (${d.rashiEnglish}) • ${d.degInRashi}
                  </div>
                  <div style="font-size:0.75rem; color:var(--color-accent); margin-top:2px;">
                    ${d.nakshatra} (Pada ${d.pada})
                  </div>
                </div>
              `).join("")}
            </div>

            <div style="margin-top:18px; padding:12px; background:rgba(212,175,55,0.08); border-left:3px solid var(--color-accent); border-radius:0 6px 6px 0; font-size:0.82rem; line-height:1.45;">
              <strong style="color:var(--color-primary);">Astrological Reading Guidance:</strong>
              Planets marked in parentheses (e.g. <em>(Ra), (Ke)</em>) are in retrograde (Vakra) motion. The Ascendant (Lagna) anchors House 1 in the North Indian chart, while in South Indian charts it is indicated by an oblique stroke.
            </div>
          </div>
        </div>
      </div>
    `}renderPanchangOverview(a){const t=a.calendar||{};return`
      <div class="gk-panchang-hero">
        <div class="gk-card">
          <div class="gk-card-title"><span>Sunrise / Sunset</span><span>☀️</span></div>
          <div class="gk-card-value">${a.sunrise} — ${a.sunset}</div>
          <div class="gk-card-meta">Solar Noon: ${a.solarNoon} (Day Duration: ${a.dayDuration})</div>
          <div style="font-size:0.76rem; color:var(--color-secondary); margin-top:4px;">
            🌙 Moonrise: ${a.moonrise||"N/A"} • Moonset: ${a.moonset||"N/A"}
          </div>
        </div>
        <div class="gk-card">
          <div class="gk-card-title"><span>Tithi (Lunar Day)</span><span>🌙</span></div>
          <div class="gk-card-value">${v(a.tithi.name,this.selectedLang)}</div>
          <div class="gk-card-meta">Paksha: ${a.tithi.paksha} • Progress: ${a.tithi.progress}% • Deity: ${a.tithi.deity}</div>
          <div style="font-size:0.76rem; color:var(--color-text-muted); margin-top:4px;">
            Ends at: ${a.tithiEndTime||"N/A"}
          </div>
        </div>
        <div class="gk-card">
          <div class="gk-card-title"><span>Nakshatra (Lunar Mansion)</span><span>✨</span></div>
          <div class="gk-card-value">${v(a.nakshatra.name,this.selectedLang)} (Pada ${a.nakshatra.pada})</div>
          <div class="gk-card-meta">Lord: ${a.nakshatra.lord} • Deity: ${a.nakshatra.deity}</div>
          <div style="font-size:0.76rem; color:var(--color-text-muted); margin-top:4px;">
            Ends at: ${a.nakshatraEndTime||"N/A"}
          </div>
        </div>
        <div class="gk-card">
          <div class="gk-card-title"><span>Yoga & Karana</span><span>🌀</span></div>
          <div class="gk-card-value">${v(a.yoga,this.selectedLang)} / ${v(a.karana,this.selectedLang)}</div>
          <div class="gk-card-meta">Vaar: ${v(a.vaar.sanskrit,this.selectedLang)} (${a.vaar.english} - Lord: ${a.vaar.lord})</div>
          <div style="font-size:0.76rem; color:var(--color-text-muted); margin-top:4px;">
            Lagna: ${a.lagna?`${a.lagna.rashi} (${a.lagna.deg}°)`:"Calculated"}
          </div>
        </div>
        <div class="gk-card">
          <div class="gk-card-title"><span>Sun & Moon Rashi</span><span>♈</span></div>
          <div class="gk-card-value">${v(a.moonRashi,this.selectedLang)}</div>
          <div class="gk-card-meta">Sun: ${v(a.sunRashi,this.selectedLang)} (Chitrapaksha Lahiri Ayanamsa)</div>
          <div style="font-size:0.76rem; color:var(--color-text-muted); margin-top:4px;">
            Ayana: ${t.ayana||"Uttarayana"} • Ritu: ${t.ritu||"Sharad"}
          </div>
        </div>
        <div class="gk-card">
          <div class="gk-card-title"><span>Auspicious Windows</span><span>🌟</span></div>
          <div class="gk-card-value" style="font-size:1rem; color:var(--color-good);">
            Abhijit: ${a.muhurtas.abhijitMuhurta}
          </div>
          <div class="gk-card-meta">Brahma Muhurta: ${a.muhurtas.brahmaMuhurta}</div>
          <div style="font-size:0.76rem; color:var(--color-good); margin-top:4px;">
            Amrit Kaal: ${a.muhurtas.amritKaal||"N/A"}
          </div>
        </div>
      </div>

      <!-- Drik Panchang Comprehensive Muhurta & Kaalam Schedule -->
      <div class="gk-card" style="margin-top:20px;">
        <h3 style="color:var(--color-primary); margin-bottom:12px; font-size:1.15rem;">
          Drik Panchang Muhurta & Kaalam Schedule (${this.selectedCity.name})
        </h3>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:16px;">
          <div style="background:rgba(198,40,40,0.06); padding:12px; border-radius:6px; border-left:4px solid var(--color-inauspicious);">
            <div style="font-weight:700; color:var(--color-inauspicious); font-size:0.9rem;">
              ⚠️ Rahu Kalam (Inauspicious)
            </div>
            <div style="font-size:1.1rem; font-weight:700; margin:4px 0;">${a.muhurtas.rahuKalam}</div>
            <div style="font-size:0.75rem; color:var(--color-text-muted);">Avoid initiating travel or signing contracts</div>
          </div>

          <div style="background:rgba(230,81,0,0.06); padding:12px; border-radius:6px; border-left:4px solid var(--color-secondary);">
            <div style="font-weight:700; color:var(--color-secondary); font-size:0.9rem;">
              ⏳ Yamaganda Kalam
            </div>
            <div style="font-size:1.1rem; font-weight:700; margin:4px 0;">${a.muhurtas.yamagandam||a.muhurtas.yamaganda}</div>
            <div style="font-size:0.75rem; color:var(--color-text-muted);">Ruled by Yama; unsuitable for new investments</div>
          </div>

          <div style="background:rgba(212,175,55,0.08); padding:12px; border-radius:6px; border-left:4px solid var(--color-accent);">
            <div style="font-weight:700; color:var(--color-gold-dark); font-size:0.9rem;">
              ⏱️ Gulika Kalam
            </div>
            <div style="font-size:1.1rem; font-weight:700; margin:4px 0;">${a.muhurtas.gulikaKalam}</div>
            <div style="font-size:0.75rem; color:var(--color-text-muted);">Ruled by Saturn; deeds performed here repeat</div>
          </div>

          <div style="background:rgba(46,125,50,0.06); padding:12px; border-radius:6px; border-left:4px solid var(--color-good);">
            <div style="font-weight:700; color:var(--color-good); font-size:0.9rem;">
              ✨ Abhijit Muhurta (Most Auspicious)
            </div>
            <div style="font-size:1.1rem; font-weight:700; margin:4px 0;">${a.muhurtas.abhijitMuhurta}</div>
            <div style="font-size:0.75rem; color:var(--color-text-muted);">Midday victory window; destroys all doshas</div>
          </div>

          <div style="background:rgba(76,175,80,0.06); padding:12px; border-radius:6px; border-left:4px solid #66bb6a;">
            <div style="font-weight:700; color:#2e7d32; font-size:0.9rem;">
              🍯 Amrit Kaal (Nectar Window)
            </div>
            <div style="font-size:1.1rem; font-weight:700; margin:4px 0;">${a.muhurtas.amritKaal||"N/A"}</div>
            <div style="font-size:0.75rem; color:var(--color-text-muted);">Ideal for spiritual initiation, medicine, ceremonies</div>
          </div>

          <div style="background:rgba(142,36,170,0.06); padding:12px; border-radius:6px; border-left:4px solid #ab47bc;">
            <div style="font-weight:700; color:#7b1fa2; font-size:0.9rem;">
              🏹 Vijaya Muhurta
            </div>
            <div style="font-size:1.1rem; font-weight:700; margin:4px 0;">${a.muhurtas.vijayaMuhurta||"N/A"}</div>
            <div style="font-size:0.75rem; color:var(--color-text-muted);">Window of conquest, endeavors, and ventures</div>
          </div>

          <div style="background:rgba(255,160,0,0.06); padding:12px; border-radius:6px; border-left:4px solid #ffb300;">
            <div style="font-weight:700; color:#f57c00; font-size:0.9rem;">
              🌅 Godhuli Muhurta
            </div>
            <div style="font-size:1.1rem; font-weight:700; margin:4px 0;">${a.muhurtas.godhuliMuhurta||"N/A"}</div>
            <div style="font-size:0.75rem; color:var(--color-text-muted);">Twilight window of peace and home worship</div>
          </div>

          <div style="background:rgba(183,28,28,0.06); padding:12px; border-radius:6px; border-left:4px solid #d32f2f;">
            <div style="font-weight:700; color:#c62828; font-size:0.9rem;">
              ⛔ Dur Muhurtam & Varjyam
            </div>
            <div style="font-size:0.95rem; font-weight:700; margin:4px 0;">Dur: ${a.muhurtas.durMuhurtam||"N/A"}</div>
            <div style="font-size:0.8rem; color:var(--color-text-muted);">Varjyam: ${a.muhurtas.varjyam||"N/A"}</div>
          </div>
        </div>

        <!-- Disha Shool & Travel Guidance -->
        <div style="margin-top:16px; padding:12px 16px; background:rgba(230,81,0,0.06); border-radius:6px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
          <div>
            <strong style="color:var(--color-secondary);">🧭 Disha Shool (Travel Restriction):</strong>
            <span style="font-weight:700; margin-left:6px;">${t.dishaShool||"West"}</span>
          </div>
          <div style="font-size:0.85rem; color:var(--color-text-muted);">
            <strong>Remedy if traveling is unavoidable:</strong> ${t.dishaShoolRemedy||"Consume betel leaf or ghee"}
          </div>
        </div>
      </div>
    `}renderGowriTable(a){if(!a)return'<div class="gk-card"><p>Gowri Panchangam not available for current location.</p></div>';const t=a.day||(Array.isArray(a)?a:[]),i=a.night||[];return`
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
                ${t.map(e=>`
                  <tr>
                    <td>${e.slot||`${e.start} – ${e.end}`}</td>
                    <td><strong>${v(e.name,this.selectedLang)}</strong></td>
                    <td><span class="${e.isGood||e.nature==="Good"?"gk-badge-good":"gk-badge-inauspicious"}">${e.nature||(e.isGood?"Good":"Inauspicious")}</span></td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
          <div>
            <h4 style="color:var(--color-primary); margin-bottom:8px;">🌙 Nighttime Gowri (Astamanam to Suryodayam)</h4>
            <table class="gk-table">
              <thead><tr><th>Interval</th><th>Gowri Lord</th><th>Nature</th></tr></thead>
              <tbody>
                ${i.length>0?i.map(e=>`
                  <tr>
                    <td>${e.slot||`${e.start} – ${e.end}`}</td>
                    <td><strong>${v(e.name,this.selectedLang)}</strong></td>
                    <td><span class="${e.isGood||e.nature==="Good"?"gk-badge-good":"gk-badge-inauspicious"}">${e.nature||(e.isGood?"Good":"Inauspicious")}</span></td>
                  </tr>
                `).join(""):`
                  <tr><td colspan="3" style="text-align:center; color:var(--color-text-muted); padding:12px;">Night slots active after sunset</td></tr>
                `}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}renderChoghadiyaTable(a){if(!a)return'<div class="gk-card"><p>Choghadiya not available for current location.</p></div>';const t=a.day||(Array.isArray(a)?a:[]),i=a.night||[];return`
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
                ${t.map(e=>`
                  <tr>
                    <td>${e.slot||`${e.start} – ${e.end}`}</td>
                    <td><strong>${v(e.name,this.selectedLang)}</strong></td>
                    <td><span class="${e.isGood||e.nature==="Auspicious"?"gk-badge-good":"gk-badge-inauspicious"}">${e.nature||(e.isGood?"Auspicious":"Inauspicious")}</span></td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
          <div>
            <h4 style="color:var(--color-primary); margin-bottom:8px;">🌙 Night Choghadiya</h4>
            <table class="gk-table">
              <thead><tr><th>Time</th><th>Choghadiya</th><th>Effect</th></tr></thead>
              <tbody>
                ${i.length>0?i.map(e=>`
                  <tr>
                    <td>${e.slot||`${e.start} – ${e.end}`}</td>
                    <td><strong>${v(e.name,this.selectedLang)}</strong></td>
                    <td><span class="${e.isGood||e.nature==="Auspicious"?"gk-badge-good":"gk-badge-inauspicious"}">${e.nature||(e.isGood?"Auspicious":"Inauspicious")}</span></td>
                  </tr>
                `).join(""):`
                  <tr><td colspan="3" style="text-align:center; color:var(--color-text-muted); padding:12px;">Night slots active after sunset</td></tr>
                `}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}renderPlanetsTable(a,t){return!a||!Array.isArray(a)?'<div class="gk-card"><p>Planetary positions not available.</p></div>':`
      <div class="gk-card">
        <h3 style="color:var(--color-primary); margin-bottom:8px;">Real-Time Sidereal Planetary Longitudes (Nirayana)</h3>
        <p style="font-size:0.85rem; color:var(--color-text-muted); margin-bottom:14px;">
          Calculated using Jean Meeus high-precision solar system algorithms with Lahiri Chitrapaksha Ayanamsa (${t&&t.formatted?t.formatted:t&&t.degrees!==void 0?`${t.degrees}° ${t.minutes}' ${t.seconds||0}"`:typeof t=="number"||typeof t=="string"?`${t}°`:`24° 13' 52"`}).
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
              ${a.map(e=>{const n=e.deg!==void 0?e.deg:Math.floor((e.siderealLon||0)%30),o=e.min!==void 0?e.min:Math.floor((e.siderealLon||0)%1*60),r=e.sec!==void 0?e.sec:Math.round((e.siderealLon||0)%1*60%1*60),s=e.sanskrit?` (${v(e.sanskrit,this.selectedLang)})`:"",d=e.nakshatra?v(e.nakshatra,this.selectedLang):"—",l=e.pada!==void 0?e.pada:1,c=e.status||(e.isRetrograde?"Retrograde (Vakra)":"Direct (Marga)"),h=e.isRetrograde||c.includes("Retrograde");return`
                  <tr>
                    <td><strong>${e.name}${s}</strong></td>
                    <td>${n}° ${o}' ${r}"</td>
                    <td>${v(e.rashi||"",this.selectedLang)} (${e.rashiEnglish||""})</td>
                    <td>${d}</td>
                    <td>Pada ${l}</td>
                    <td><span class="${h?"gk-badge-inauspicious":"gk-badge-good"}">${c}</span></td>
                  </tr>
                `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}async renderJyotirlingas(){const{JYOTIRLINGAS:a}=await this.loadJyotirlingas();return`
      <section>
        <div class="gk-jyotir-header-banner">
          <div class="gk-jyotir-header-title">
            द्वादश ज्योतिर्लिङ्ग महाक्षेत्राणि
          </div>
          <div style="font-family:'Cinzel',serif; font-size:1.15rem; color:#FFE0B2; margin-bottom:6px;">
            The 12 Sacred Jyotirlingas of Lord Shiva
          </div>
          <div class="gk-jyotir-stotram-box">
            सौराष्ट्रे सोमनाथं च श्रीशैले मल्लिकार्जुनम् ।<br>
            उज्जयिन्यां महाकालमोंकारममलेश्वरम् ॥<br>
            परल्यां वैद्यनाथं च डाकिन्यां भीमशङ्करम् ।<br>
            सेतुबन्धे तु रामेशं नागेशं दारुकावने ॥<br>
            वाराणस्यां च विश्वेशं त्र्यम्बकं गौतमीतटे ।<br>
            हिमवन्ते तु केदारं घुश्मेशं च शिवालये ॥
          </div>
          <p style="font-size:0.88rem; color:#FFFFFF; opacity:0.9; max-width:760px; margin:0 auto; line-height:1.5;">
            Sacred pilgrimage guide detailing divine Vigraha manifestations, astrologically verified Parikaras & Dosha Nivarana remedies, specific temple pooja rituals, and authentic puranic, local sthala, and folklore histories.
          </p>
        </div>

        <div class="gk-jyotir-grid">
          ${a.map(t=>`
            <div class="gk-jyotir-card" id="jyotir-${t.id}">
              <div class="gk-jyotir-top">
                <div class="gk-jyotir-icon-wrapper">
                  ${t.iconSvg}
                </div>
                <div class="gk-jyotir-names">
                  <div class="gk-jyotir-title">${t.name}</div>
                  <div class="gk-jyotir-sanskrit">${v(t.sanskritName,this.selectedLang)}</div>
                  <div class="gk-jyotir-location">📍 ${t.location}</div>
                  <div style="font-size:0.75rem; color:var(--color-secondary); margin-top:2px;">
                    🌊 ${t.riverOrSea}
                  </div>
                </div>
              </div>

              <!-- What a Visit Can Do (Parikaras & Dosha Nivarana) -->
              <div class="gk-jyotir-benefits-box">
                <div class="gk-jyotir-section-heading">
                  <span>🪷</span> Spiritual Upliftment & Remedies
                </div>
                <div class="gk-jyotir-benefit-row">
                  <strong>🛡️ Parikaras:</strong> ${t.whatVisitDoes.parikaras}
                </div>
                <div class="gk-jyotir-benefit-row">
                  <strong>🔱 Dosha Nivarana:</strong> ${t.whatVisitDoes.doshaNivarana}
                </div>
                <div class="gk-jyotir-benefit-row">
                  <strong>✨ Upliftment:</strong> ${t.whatVisitDoes.spiritualUpliftment}
                </div>
              </div>

              <!-- Specific Pooja Practices -->
              <div class="gk-jyotir-poojas-box">
                <div class="gk-jyotir-section-heading">
                  <span>🪔</span> Specific Pooja Practices
                </div>
                ${t.specificPoojas.map(i=>`
                  <div class="gk-pooja-pill">
                    <div class="gk-pooja-pill-title">
                      <span>${i.name}</span>
                      <span class="gk-pooja-pill-timing">${i.timing}</span>
                    </div>
                    <div class="gk-pooja-pill-desc">${i.details}</div>
                  </div>
                `).join("")}
              </div>

              <!-- Deep History (Puranic, Local, Folklore) -->
              <div class="gk-history-accordion">
                <div class="gk-jyotir-section-heading" style="margin-bottom:10px;">
                  <span>📜</span> Sacred Temple History
                </div>
                <div class="gk-history-block">
                  <span class="gk-history-tag">📖 Puranic History (Shiva Purana)</span>
                  ${t.history.puranic}
                </div>
                <div class="gk-history-block">
                  <span class="gk-history-tag">🏛️ Local Sthala Mahatmyam</span>
                  ${t.history.local}
                </div>
                <div class="gk-history-block">
                  <span class="gk-history-tag">✨ Living Tradition & Folklore</span>
                  ${t.history.folklore}
                </div>
              </div>

              <!-- Authentic Chanting Button for this Shrine -->
              <div style="margin-top:14px; padding-top:12px; border-top:1px dashed var(--color-border); display:flex; justify-content:space-between; align-items:center;">
                <button class="gk-btn gk-audio-play-btn" data-play-id="${t.id}" style="font-size:0.8rem; padding:6px 12px; display:inline-flex; align-items:center; gap:6px;">
                  ${this.playingSlokaId===t.id?"⏸ Pause Chant":"▶ Chant Verse"}
                </button>
                <span style="font-family:'Noto Serif Devanagari',serif; font-size:0.85rem; color:var(--color-text-muted);">
                  ${t.stotramVerse}
                </span>
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    `}async renderStotras(){const{SLOKAS_DATA:a,DEITY_HUBS:t}=await this.loadSlokas(),i=a.filter(n=>{const o=this.selectedDeity==="all"||n.deityId===this.selectedDeity,r=this.selectedCategory==="all"||n.category===this.selectedCategory;return o&&r}),e=["all","Stotra","Mantra","Chalisa","Ashtakam","Suprabhatam","Prayer"];return`
      <section>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; flex-wrap:wrap; gap:12px;">
          <div>
            <h2 style="color:var(--color-primary); font-size:1.6rem;">
              ${v("स्तोत्राणि मन्त्राश्च",this.selectedLang)} (12 Deity Shrines & Stotras)
            </h2>
            <p style="font-size:0.85rem; color:var(--color-text-muted);">
              Select any Sacred Shrine or filter by Category. Instant 1-click script switching across 11 Indian scripts.
            </p>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <button id="gk-font-dec" class="gk-btn" title="Decrease Font">A-</button>
            <button id="gk-font-inc" class="gk-btn" title="Increase Font">A+</button>
            <button id="gk-toggle-sabdartha" class="gk-btn ${this.showSabdartha?"gk-btn-primary":""}">
              ${this.showSabdartha?"✓ Sabdartha":"+ Sabdartha"}
            </button>
          </div>
        </div>

        <!-- 12 Sacred Deity Hubs Shrines Bar -->
        <div class="gk-deity-hub-container">
          <div class="gk-deity-scroll-track">
            ${t.map(n=>`
              <div class="gk-deity-card-chip ${this.selectedDeity===n.id?"active":""}" data-deity-id="${n.id}">
                <span class="gk-deity-icon">${n.icon}</span>
                <div class="gk-deity-meta">
                  <span class="gk-deity-name">${n.name}</span>
                  <span class="gk-deity-sanskrit">${v(n.sanskrit,this.selectedLang)}</span>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Category Filter Pills -->
        <div class="gk-category-pills">
          ${e.map(n=>`
            <button class="gk-cat-pill ${this.selectedCategory===n?"active":""}" data-category="${n}">
              ${n==="all"?"All Types":n}
            </button>
          `).join("")}
        </div>

        <!-- Sloka Cards List -->
        ${i.length===0?`
          <div class="gk-card" style="text-align:center; padding:32px;">
            <p>No texts found for this shrine & category filter.</p>
            <button class="gk-btn gk-btn-primary" id="gk-reset-filters" style="margin-top:12px;">Reset Filters</button>
          </div>
        `:i.map((n,o)=>`
          <article class="gk-sloka-card" id="${n.id}">
            <div class="gk-sloka-header">
              <div>
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                  <span class="gk-badge-good">${n.category}</span>
                  <span style="font-size:0.75rem; color:var(--color-text-muted);">Shrine: <strong>${n.deity}</strong></span>
                </div>
                <h3 class="gk-sloka-title">${v(n.title,this.selectedLang)}</h3>
                <span class="gk-sloka-source">${n.source} • Meter: ${n.meter}</span>
              </div>
              <div style="display:flex; gap:8px; align-items:center;">
                <button class="gk-share-card-btn" data-share-id="${n.id}" title="Generate Devotional WhatsApp Status Card">
                  🎨 Share Card
                </button>
              </div>
            </div>

            <!-- Chanting Audio Bar with Speed Selector -->
            <div class="gk-chant-player">
              <div class="gk-audio-controls-left">
                <button class="gk-audio-play-btn" data-play-id="${n.id}" title="Chant sacred Sanskrit verse with temple Tanpura">
                  ${this.playingSlokaId===n.id?"⏸":"▶"}
                </button>
                <span class="gk-audio-label">
                  ${this.playingSlokaId===n.id?"Chanting sacred Sanskrit verse with Tanpura...":"Chant Sanskrit Sloka"}
                </span>
              </div>
              <div class="gk-speed-selector">
                <span style="font-size:0.75rem; color:var(--color-text-muted); margin-right:4px;">Speed:</span>
                <button class="gk-speed-btn ${this.chantSpeed===.75?"active":""}" data-speed="0.75">0.75x</button>
                <button class="gk-speed-btn ${this.chantSpeed===1?"active":""}" data-speed="1.0">1.0x</button>
                <button class="gk-speed-btn ${this.chantSpeed===1.25?"active":""}" data-speed="1.25">1.25x</button>
              </div>
            </div>

            <!-- Sacred Verse (100% Clean Font Rendering - Zero Tofu Boxes) -->
            <div class="gk-sloka-text" style="font-size:${this.slokaFontSize}rem;">
              ${v(n.devanagari,this.selectedLang)}
            </div>

            <div class="gk-sloka-iast">${n.iast}</div>

            ${this.showSabdartha&&n.sabdartha?`
              <div class="gk-sabdartha-grid">
                ${n.sabdartha.map(r=>`
                  <div class="gk-sabdartha-item">
                    <span class="gk-sabdartha-word">${v(r.word,this.selectedLang)}:</span> ${r.meaning}
                  </div>
                `).join("")}
              </div>
            `:""}

            <div class="gk-sloka-translation">
              <strong>Translation:</strong> ${n.translation}
            </div>

            <div class="gk-sloka-purport">
              <strong>Purport & Spiritual Insight:</strong> ${n.purport}
            </div>

            ${o===1?this.renderAdSlot("ad-stotra-incontent","rectangle"):""}
          </article>
        `).join("")}

        <!-- Ethical Spiritual Affiliate Recommendations -->
        ${this.renderAffiliateScriptures()}
      </section>
    `}async renderJapa(){return await this.ensureJapaEngine(),`
      <section>
        <div class="gk-japa-container">
          <h2 style="color:var(--color-primary); margin-bottom:6px;">
            ${v("जपमाला",this.selectedLang)} (108-Bead Japa Mala)
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
              ${this.japaEngine.soundEnabled?"🔔 Sound: ON":"🔕 Sound: OFF"}
            </button>
            <button id="gk-japa-vib-toggle" class="gk-btn">
              ${this.japaEngine.vibrationEnabled?"📳 Haptics: ON":"📴 Haptics: OFF"}
            </button>
            <button id="gk-japa-meru-toggle" class="gk-btn">
              ${this.japaEngine.meruReversalMode?"🔄 Meru Reversal: ON":"🔁 Continuous Loop"}
            </button>
            <button id="gk-japa-reset" class="gk-btn" style="color:var(--color-inauspicious);">Reset Round</button>
          </div>

          <div style="margin-top:24px; border-top:1px solid var(--color-border); padding-top:16px;">
            <button id="gk-japa-export" class="gk-btn" style="font-size:0.75rem;">💾 Export Sadhana JSON</button>
          </div>
        </div>

        <!-- Ethical Consecrated Physical Mala Recommendations -->
        ${this.renderAffiliateMalas()}
      </section>
    `}async renderStories(){const{STORIES_DATA:a}=await this.loadStories();return`
      <section>
        <div style="margin-bottom:24px;">
          <h2 style="color:var(--color-primary); font-size:1.6rem;">
            ${v("नीतिकथाः",this.selectedLang)} (Dharmic Wisdom & Moral Stories)
          </h2>
          <p style="font-size:0.85rem; color:var(--color-text-muted);">
            Timeless fables from the 5 Books of Panchatantra, Hitopadesha, Tenali Raman, and Upanishads with illuminated moral cards.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:20px;">
          ${a.map((t,i)=>`
            <article class="gk-story-card">
              <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                  <span class="gk-badge-good">${t.collection}</span>
                  <span style="font-size:0.75rem; color:var(--color-text-muted);">Reading: 3 mins</span>
                </div>
                <h3 style="color:var(--color-primary); font-size:1.25rem; margin-bottom:8px;">${t.title}</h3>
                
                <div style="background:rgba(230,81,0,0.04); padding:10px 14px; border-radius:6px; margin-bottom:14px; font-style:italic; font-size:0.85rem; border-left:3px solid var(--color-secondary);">
                  "${t.epigraphTranslation}"
                </div>

                <p style="font-size:0.9rem; line-height:1.65; margin-bottom:14px; color:var(--color-text);">
                  ${t.summary}
                </p>

                <!-- Prominent Golden Moral Takeaway Card -->
                <div class="gk-moral-takeaway-card">
                  <div class="gk-moral-takeaway-label">✨ Sacred Moral Takeaway</div>
                  <div class="gk-moral-takeaway-text">${t.moral}</div>
                </div>

                <div style="margin-bottom:14px;">
                  <div style="font-size:0.75rem; text-transform:uppercase; color:var(--color-text-muted); margin-bottom:4px;">Sanskrit Vocabulary:</div>
                  <div style="display:flex; flex-wrap:wrap; gap:6px;">
                    ${t.vocabulary.map(e=>`
                      <span style="font-size:0.75rem; background:rgba(0,0,0,0.05); padding:2px 8px; border-radius:4px;" title="${e.meaning}">
                        ${e.term}
                      </span>
                    `).join("")}
                  </div>
                </div>
              </div>

              <!-- Interactive Ethical Dilemma Quiz -->
              <div style="border-top:1px solid var(--color-border); padding-top:12px; margin-top:12px;">
                <div style="font-size:0.85rem; font-weight:700; margin-bottom:6px;">Dharmic Reflection:</div>
                <p style="font-size:0.85rem; margin-bottom:10px;">${t.quiz.question}</p>
                <div class="gk-quiz-options" data-story="${t.id}">
                  ${t.quiz.options.map((e,n)=>`
                    <button class="gk-btn gk-quiz-btn" data-story="${t.id}" data-idx="${n}" style="width:100%; text-align:left; margin-bottom:6px; font-size:0.8rem;">
                      ${e}
                    </button>
                  `).join("")}
                </div>
                <div id="gk-quiz-result-${t.id}" style="display:none; padding:8px 12px; border-radius:6px; font-size:0.8rem; margin-top:6px;"></div>
              </div>
            </article>
            ${i===0?this.renderAdSlot("ad-story-native","native"):""}
          `).join("")}
        </div>
      </section>
    `}renderCityModal(){return`
      <div class="gk-modal-backdrop" id="gk-city-modal-backdrop">
        <div class="gk-modal">
          <div class="gk-modal-header">
            <h3 style="color:var(--color-primary);">Select Global City</h3>
            <button id="gk-modal-close" class="gk-btn" style="border:none; font-size:1.2rem;">✕</button>
          </div>
          <input type="text" id="gk-city-search" class="gk-search-input" placeholder="Search 100+ global cities (e.g. Chennai, London, New York)..." autofocus>
          <ul class="gk-city-list" id="gk-city-list">
            ${this.cities.map(a=>`
              <li class="gk-city-item ${a.id===this.selectedCity.id?"active":""}" data-city-id="${a.id}">
                <div>
                  <strong>${a.name}</strong>
                  <span style="font-size:0.75rem; color:var(--color-text-muted); display:block;">${a.state?a.state+", ":""}${a.country}</span>
                </div>
                <span style="font-size:0.75rem; color:var(--color-accent); font-weight:700;">${a.tz_offset>=0?"+"+a.tz_offset:a.tz_offset}h</span>
              </li>
            `).join("")}
          </ul>
        </div>
      </div>
    `}renderCardMakerModal(){return`
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
            <div class="gk-theme-swatch gk-theme-saffron ${this.cardTheme==="saffron"?"active":""}" data-theme="saffron">
              Saffron Dawn
            </div>
            <div class="gk-theme-swatch gk-theme-maroon ${this.cardTheme==="maroon"?"active":""}" data-theme="maroon">
              Sacred Maroon
            </div>
            <div class="gk-theme-swatch gk-theme-sandal ${this.cardTheme==="sandal"?"active":""}" data-theme="sandal">
              Sandalwood
            </div>
            <div class="gk-theme-swatch gk-theme-indigo ${this.cardTheme==="indigo"?"active":""}" data-theme="indigo">
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
    `}async openDeityPoster(){this.deityPosterModalOpen=!0,await this.renderModalOnly(),requestAnimationFrame(()=>this.drawDeityPoster())}closeDeityPoster(){this.deityPosterModalOpen=!1,this.renderModalOnly()}async drawDeityPoster(){const a=document.getElementById("gk-deity-poster-canvas");if(!a)return;const{drawDeityPostcardCanvas:t}=await this.loadDeityPoster(),i=this.getPanchangData();t(a,i,{aspectRatio:this.posterAspectRatio,theme:this.posterTheme,lang:this.selectedLang})}downloadDeityPoster(){const a=document.getElementById("gk-deity-poster-canvas");if(!a)return;const t=document.createElement("a");t.download=`GuruKripa-Deity-Panchang-${this.selectedCity.name}-${new Date().toISOString().slice(0,10)}.png`,t.href=a.toDataURL("image/png"),t.click()}async shareDeityPosterNative(){const a=document.getElementById("gk-deity-poster-canvas");if(!a)return;const{getDailyDeityInfo:t}=await this.loadDeityPoster(),i=this.getPanchangData(),e=t(i),n=`${e?e.festival:"Daily Panchang"} • GuruKripa`,o=`${e?e.deityName+" — "+e.quote:"Daily Vedic Panchang"}

📍 ${i.city} • Tithi: ${i.tithi.name} • Nakshatra: ${i.nakshatra.name}

Live Panchang: ${this.getOrigin()}`;a.toBlob(async r=>{if(!r)return;const s=new File([r],`GuruKripa-Panchang-${i.city}.png`,{type:"image/png"});if(navigator.canShare&&navigator.canShare({files:[s]}))try{await navigator.share({title:n,text:o,files:[s]})}catch(d){d.name!=="AbortError"&&this.downloadDeityPoster()}else this.downloadDeityPoster(),window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(o)}`,"_blank")},"image/png")}async copyDeityPosterClip(){const a=document.getElementById("gk-deity-poster-canvas");if(a)try{a.toBlob(async t=>{t&&(await navigator.clipboard.write([new ClipboardItem({"image/png":t})]),alert("✨ Deity Postcard copied to clipboard! You can paste (Ctrl+V) directly into X, WhatsApp Web, or Instagram."))},"image/png")}catch{this.downloadDeityPoster()}}async shareDeityPosterX(){const{getDailyDeityInfo:a}=await this.loadDeityPoster(),t=this.getPanchangData(),i=a(t),e=encodeURIComponent(`🕉️ ${i?i.festival:"Daily Panchang"}
Deity: ${i?i.deityName:"Sanatana Dharma"}
📍 ${t.city} • Tithi: ${t.tithi.name} • Nakshatra: ${t.nakshatra.name}

"${i?i.quote:""}"

#Panchang #HinduCalendar #${i?i.theme:"Bhakti"} #GuruKripa
${this.getOrigin()}`);window.open(`https://twitter.com/intent/tweet?text=${e}`,"_blank")}renderDeityPosterModal(){const a=this.getPanchangData(),{getDailyDeityInfo:t,POSTER_ASPECT_RATIOS:i,POSTER_THEMES:e}=this._resolvedPosterMod||{},n=t?t(a):null,o=i||[],r=e||{};return`
      <div class="gk-modal-backdrop" id="gk-deity-poster-backdrop">
        <div class="gk-deity-poster-modal">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <div>
              <h3 style="color:var(--color-primary); font-size:1.35rem; margin:0;">
                🎨 Daily Panchang Deity Postcard & Social Publisher
              </h3>
              <p style="font-size:0.82rem; color:var(--color-text-muted); margin:3px 0 0 0;">
                ${n?n.festival:"Daily Sacred Occasion"} • Presiding Divinity: <strong style="color:var(--color-secondary);">${n?n.deityName:""}</strong>
              </p>
            </div>
            <button id="gk-deity-poster-close" class="gk-btn" style="border:none; font-size:1.3rem; cursor:pointer;">✕</button>
          </div>

          <!-- Aspect Ratio Selector Pills -->
          <div style="margin-top:10px;">
            <label style="font-size:0.8rem; font-weight:800; text-transform:uppercase; color:var(--color-secondary); letter-spacing:0.04em;">1. Target Social Format:</label>
            <div class="gk-aspect-pills">
              ${o.map(s=>`
                <button class="gk-aspect-pill ${this.posterAspectRatio===s.id?"active":""}" data-aspect="${s.id}">
                  ${s.name}
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Theme Selector Pills -->
          <div>
            <label style="font-size:0.8rem; font-weight:800; text-transform:uppercase; color:var(--color-secondary); letter-spacing:0.04em;">2. Sacred Devotional Theme:</label>
            <div class="gk-theme-pills">
              ${Object.values(r).map(s=>`
                <button class="gk-theme-pill ${this.posterTheme===s.id?"active":""}" data-theme="${s.id}">
                  ${s.name}
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Live High-DPI Canvas Preview -->
          <div class="gk-poster-canvas-preview">
            <canvas id="gk-deity-poster-canvas"></canvas>
          </div>

          <!-- Multi-Platform Publishing & Export Actions -->
          <div class="gk-social-share-btns">
            <button id="gk-btn-share-native" class="gk-btn-share-native" title="Share with Image to Instagram, X, WhatsApp">
              📱 Share on Instagram / WhatsApp / X
            </button>
            <button id="gk-btn-share-x" class="gk-btn-share-x" title="Publish to X Timeline">
              𝕏 Post on X
            </button>
            <button id="gk-btn-download-poster" class="gk-btn gk-btn-primary" style="flex:1; min-width:140px;">
              📥 Download PNG (300 DPI)
            </button>
            <button id="gk-btn-copy-clip" class="gk-btn-copy-clip" title="Copy Image to Clipboard">
              📋 Copy Image
            </button>
          </div>
        </div>
      </div>
    `}renderAdSlot(a,t="banner"){const i=typeof window<"u"&&window.GURUKRIPA_ADSENSE_ID?window.GURUKRIPA_ADSENSE_ID:"ca-pub-XXXXXXXXXXXXXXXX";return t==="sticky-footer"?`
        <div class="gk-ad-sticky-footer" id="${a}" data-ad-slot="${a}">
          <button class="gk-ad-close" id="gk-close-${a}" title="Dismiss Sponsor Banner" aria-label="Close Ad">✕</button>
          <div class="gk-ad-sticky-content">
            <div class="gk-ad-wrapper" style="width:100%; height:100%; border:none; background:transparent;">
              <span class="gk-ad-label" style="font-size:0.6rem; opacity:0.75;">SPONSOR MESSAGE</span>
              <ins class="adsbygoogle"
                   style="display:inline-block;width:320px;height:50px"
                   data-ad-client="${i}"
                   data-ad-slot="${a}"></ins>
              <div class="gk-ad-fallback" style="font-size:0.72rem; color:#8C7853; text-align:center; padding:2px 8px;">
                🕉️ Support GuruKripa's Zero-Cost Spiritual Mission • <a href="/about.html" style="color:var(--color-primary);text-decoration:underline;">Devotional Sponsor Space</a>
              </div>
            </div>
          </div>
        </div>
      `:`
      <div class="gk-ad-container gk-ad-${t}" id="${a}" data-ad-slot="${a}">
        <span class="gk-ad-label">SPONSOR MESSAGE</span>
        <div class="gk-ad-wrapper" style="width:100%; height:100%;">
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="${i}"
               data-ad-slot="${a}"
               data-ad-format="${t==="native"?"fluid":"auto"}"
               data-full-width-responsive="true"></ins>
          <div class="gk-ad-fallback" style="font-size:0.75rem; color:#8C7853; text-align:center; padding:10px 14px;">
            <span style="font-weight:700; color:var(--color-primary);">🕉️ GuruKripa Sanatana Dharma Patron</span><br>
            <span style="font-size:0.72rem; opacity:0.85;">Zero-CLS AdSense Space • <a href="/about.html" style="color:var(--color-primary);text-decoration:underline;">Learn How Sponsorship Keeps This Portal Free</a></span>
          </div>
        </div>
      </div>
    `}renderAffiliateScriptures(){return`
      <section class="gk-affiliate-section" style="margin-top:32px; background:rgba(255,215,0,0.03); border:1px solid rgba(212,175,55,0.35); border-radius:12px; padding:22px; contain:layout;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:8px;">
          <div>
            <h3 style="font-size:1.2rem; color:var(--color-primary); margin:0;">
              🕉️ Recommended Authentic Scriptures & Sādhanā Editions
            </h3>
            <p style="font-size:0.82rem; color:var(--color-text-muted); margin:4px 0 0 0;">
              Authorized Sanskrit-English publications from venerable institutions (Gita Press Gorakhpur, Chaukhamba) for serious spiritual seekers.
            </p>
          </div>
          <span style="font-size:0.7rem; background:rgba(212,175,55,0.15); color:var(--color-secondary); padding:4px 10px; border-radius:20px; font-weight:700; letter-spacing:0.05em;">
            CURATED DHARMIC EDITIONS
          </span>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:16px;">
          <div style="background:var(--color-surface); border:1px solid var(--color-border); border-radius:8px; padding:14px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="font-size:0.75rem; color:var(--color-secondary); font-weight:700;">GITA PRESS GORAKHPUR</div>
              <h4 style="font-size:0.95rem; margin:6px 0 8px 0; color:var(--color-primary);">Bhagavad Gita (Code 11 — Deluxe Hardcover)</h4>
              <p style="font-size:0.8rem; color:var(--color-text-muted); margin-bottom:10px;">
                Original Devanagari verses, word-for-word Sanskrit meanings, and unvarnished commentaries by Swami Ramsukhdasji.
              </p>
            </div>
            <a href="https://www.amazon.com/dp/812930410X?tag=gurukripa-20" target="_blank" rel="sponsored nofollow noopener" class="gk-btn" style="text-align:center; font-size:0.8rem; background:linear-gradient(135deg, #FFD700, #FF6F00); color:#000; font-weight:700; border:none; text-decoration:none;">
              📖 View Authentic Edition
            </a>
          </div>

          <div style="background:var(--color-surface); border:1px solid var(--color-border); border-radius:8px; padding:14px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="font-size:0.75rem; color:var(--color-secondary); font-weight:700;">VALMIKI RAMAYANA</div>
              <h4 style="font-size:0.95rem; margin:6px 0 8px 0; color:var(--color-primary);">Srimad Valmiki Ramayana (2-Volume Complete Set)</h4>
              <p style="font-size:0.8rem; color:var(--color-text-muted); margin-bottom:10px;">
                Complete 24,000 verses across 6 Kandas with Sanskrit text and verse-by-verse lucid English translation.
              </p>
            </div>
            <a href="https://www.amazon.com/dp/8129300287?tag=gurukripa-20" target="_blank" rel="sponsored nofollow noopener" class="gk-btn" style="text-align:center; font-size:0.8rem; background:linear-gradient(135deg, #FFD700, #FF6F00); color:#000; font-weight:700; border:none; text-decoration:none;">
              📖 View 2-Vol Set
            </a>
          </div>

          <div style="background:var(--color-surface); border:1px solid var(--color-border); border-radius:8px; padding:14px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="font-size:0.75rem; color:var(--color-secondary); font-weight:700;">SHIVA PURANA</div>
              <h4 style="font-size:0.95rem; margin:6px 0 8px 0; color:var(--color-primary);">Shiva Purana with Jyotirlinga Mahatmya</h4>
              <p style="font-size:0.8rem; color:var(--color-text-muted); margin-bottom:10px;">
                Sacred lore of the 12 Jyotirlingas, Kotirudra Samhita, and deep esoteric meaning of the Mahamrityunjaya and Shiva Sahasranama.
              </p>
            </div>
            <a href="https://www.amazon.com/dp/8129302158?tag=gurukripa-20" target="_blank" rel="sponsored nofollow noopener" class="gk-btn" style="text-align:center; font-size:0.8rem; background:linear-gradient(135deg, #FFD700, #FF6F00); color:#000; font-weight:700; border:none; text-decoration:none;">
              📖 View Shiva Purana
            </a>
          </div>

          <div style="background:var(--color-surface); border:1px solid var(--color-border); border-radius:8px; padding:14px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="font-size:0.75rem; color:var(--color-secondary); font-weight:700;">PUJA ESSENTIALS</div>
              <h4 style="font-size:0.95rem; margin:6px 0 8px 0; color:var(--color-primary);">Pure Brass Pancha Aarti & Akhand Diya</h4>
              <p style="font-size:0.8rem; color:var(--color-text-muted); margin-bottom:10px;">
                Traditional heavy cast brass 5-flame lamp crafted per Shilpa Shastra proportions for daily Mangala Aarti.
              </p>
            </div>
            <a href="https://www.amazon.com/dp/B08XYZ1234?tag=gurukripa-20" target="_blank" rel="sponsored nofollow noopener" class="gk-btn" style="text-align:center; font-size:0.8rem; background:linear-gradient(135deg, #FFD700, #FF6F00); color:#000; font-weight:700; border:none; text-decoration:none;">
              🪔 View Brass Diya
            </a>
          </div>
        </div>

        <div style="font-size:0.7rem; color:var(--color-text-muted); margin-top:14px; text-align:right;">
          * All affiliate links are designated with <code>rel="sponsored nofollow noopener"</code> per Google Webmaster Guidelines. Commissions directly support domain and zero-cost hosting.
        </div>
      </section>
    `}renderAffiliateMalas(){return`
      <section class="gk-affiliate-section" style="margin-top:28px; background:rgba(230,81,0,0.03); border:1px solid rgba(230,81,0,0.25); border-radius:12px; padding:20px; contain:layout;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
          <div>
            <h4 style="font-size:1.1rem; color:var(--color-primary); margin:0;">
              📿 Looking for a Physical Consecrated Japa Mala?
            </h4>
            <p style="font-size:0.82rem; color:var(--color-text-muted); margin:4px 0 0 0;">
              For tactile Sparsha Japa sadhana, natural organic beads retain electro-magnetic spiritual vibrations.
            </p>
          </div>
          <span style="font-size:0.7rem; background:rgba(230,81,0,0.12); color:#E65100; padding:4px 8px; border-radius:20px; font-weight:700;">
            TRADITIONAL SADHANA
          </span>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:14px;">
          <div style="background:var(--color-surface); border:1px solid var(--color-border); border-radius:8px; padding:12px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="font-size:0.75rem; color:#E65100; font-weight:700;">INDONESIAN / NEPALI</div>
              <h5 style="font-size:0.9rem; margin:4px 0 6px 0; color:var(--color-primary);">Certified 5-Mukhi Rudraksha (108+1 Beads)</h5>
              <p style="font-size:0.78rem; color:var(--color-text-muted); margin-bottom:8px;">
                Lab-certified natural five-face seeds knotted with silk thread and traditional red tassel for Shiva & Mahamrityunjaya chanting.
              </p>
            </div>
            <a href="https://www.amazon.com/dp/B07RUDRA01?tag=gurukripa-20" target="_blank" rel="sponsored nofollow noopener" class="gk-btn" style="text-align:center; font-size:0.75rem; background:var(--color-primary); color:#FFF; font-weight:700; border:none; text-decoration:none;">
              View Certified Mala
            </a>
          </div>

          <div style="background:var(--color-surface); border:1px solid var(--color-border); border-radius:8px; padding:12px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="font-size:0.75rem; color:#E65100; font-weight:700;">VRINDAVAN DHAM</div>
              <h5 style="font-size:0.9rem; margin:4px 0 6px 0; color:var(--color-primary);">Natural Vrindavan Sacred Tulasi Mala</h5>
              <p style="font-size:0.78rem; color:var(--color-text-muted); margin-bottom:8px;">
                Pure Holy Basil wood carved by traditional artisans in Vrindavan, ideal for Maha Mantra and Vishnu Sahasranama chanting.
              </p>
            </div>
            <a href="https://www.amazon.com/dp/B07TULSI02?tag=gurukripa-20" target="_blank" rel="sponsored nofollow noopener" class="gk-btn" style="text-align:center; font-size:0.75rem; background:var(--color-primary); color:#FFF; font-weight:700; border:none; text-decoration:none;">
              View Tulasi Mala
            </a>
          </div>

          <div style="background:var(--color-surface); border:1px solid var(--color-border); border-radius:8px; padding:12px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="font-size:0.75rem; color:#E65100; font-weight:700;">MYSORE CHANDAN</div>
              <h5 style="font-size:0.9rem; margin:4px 0 6px 0; color:var(--color-primary);">Fragrant White Sandalwood Mala</h5>
              <p style="font-size:0.78rem; color:var(--color-text-muted); margin-bottom:8px;">
                Cooling natural sandalwood beads with natural soothing aroma that calms mental agitation during prolonged dhyāna.
              </p>
            </div>
            <a href="https://www.amazon.com/dp/B07SANDAL3?tag=gurukripa-20" target="_blank" rel="sponsored nofollow noopener" class="gk-btn" style="text-align:center; font-size:0.75rem; background:var(--color-primary); color:#FFF; font-weight:700; border:none; text-decoration:none;">
              View Sandalwood Mala
            </a>
          </div>
        </div>
      </section>
    `}renderConsentBanner(){return localStorage.getItem("gk_consent")?"":`
      <div class="gk-consent-banner" id="gk-consent-banner">
        <div class="gk-consent-text">
          GuruKripa operates with a <strong>Zero-Server, Zero-PII</strong> architecture. We store your preferred city, script, and sadhana counts strictly inside your browser's private local storage.
        </div>
        <div class="gk-consent-actions">
          <button id="gk-consent-accept" class="gk-btn gk-btn-primary" style="font-size:0.8rem;">Accept & Continue</button>
        </div>
      </div>
    `}renderFooter(){return`
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
    `}bindShellEvents(){this.bindHeaderNavEvents();const a=document.getElementById("gk-consent-accept");a&&a.addEventListener("click",()=>{localStorage.setItem("gk_consent","accepted");const i=document.getElementById("gk-consent-banner");i&&i.remove()});const t=document.getElementById("gk-close-ad-footer-anchor");t&&t.addEventListener("click",()=>{typeof sessionStorage<"u"&&sessionStorage.setItem("gk_hide_sticky_ad","true");const i=document.getElementById("ad-footer-anchor");i&&i.remove()}),this.pushAdSenseSlots(document)}bindHeaderNavEvents(){const a=document.getElementById("gk-lang-select");a&&a.addEventListener("change",n=>{this.selectedLang=n.target.value,localStorage.setItem("gk_lang",this.selectedLang),document.documentElement.setAttribute("data-lang",this.selectedLang),this.ensureRegionalFont(this.selectedLang),this.renderViewOnly()});const t=document.getElementById("gk-city-btn");t&&t.addEventListener("click",()=>{this.cityModalOpen=!0,this.renderModalOnly()});const i=document.getElementById("gk-gps-btn");i&&i.addEventListener("click",()=>this.autoDetectLocation());const e=document.getElementById("gk-theme-btn");e&&e.addEventListener("click",()=>this.toggleTheme()),document.querySelectorAll(".gk-nav-links a").forEach(n=>{n.addEventListener("click",o=>{o.preventDefault();const r=n.getAttribute("href");if(r&&r.startsWith("#")){const s=r.replace("#","");this.currentView=s,window.location.hash!==`#${s}`&&history.pushState(null,"",`#${s}`),this.renderViewOnly(),window.scrollTo({top:0,behavior:"smooth"})}})})}bindViewEvents(){document.querySelectorAll(".gk-tab-btn").forEach(g=>{g.addEventListener("click",()=>{this.panchangTab=g.getAttribute("data-tab"),this.renderPanchangSubTabOnly()})});const a=document.getElementById("gk-chart-style-select");a&&a.addEventListener("change",g=>{this.chartStyle=g.target.value,this.renderPanchangSubTabOnly()});const t=document.getElementById("gk-date-picker");t&&t.addEventListener("change",g=>{this.selectedDate=new Date(g.target.value),this.renderViewOnly()}),document.querySelectorAll(".gk-deity-card-chip").forEach(g=>{g.addEventListener("click",()=>{this.selectedDeity=g.getAttribute("data-deity-id"),this.renderViewOnly()})}),document.querySelectorAll(".gk-cat-pill").forEach(g=>{g.addEventListener("click",()=>{this.selectedCategory=g.getAttribute("data-category"),this.renderViewOnly()})});const i=document.getElementById("gk-reset-filters");i&&i.addEventListener("click",()=>{this.selectedDeity="all",this.selectedCategory="all",this.renderViewOnly()}),document.querySelectorAll(".gk-audio-play-btn").forEach(g=>{g.addEventListener("click",()=>{const k=g.getAttribute("data-play-id");this.playChantSound(k)})}),document.querySelectorAll(".gk-speed-btn").forEach(g=>{g.addEventListener("click",()=>{this.chantSpeed=parseFloat(g.getAttribute("data-speed")),document.querySelectorAll(".gk-speed-btn").forEach(k=>{k.classList.toggle("active",parseFloat(k.getAttribute("data-speed"))===this.chantSpeed)})})}),document.querySelectorAll(".gk-share-card-btn").forEach(g=>{g.addEventListener("click",()=>{const k=g.getAttribute("data-share-id");this.openCardMaker(k)})});const e=document.getElementById("gk-open-deity-poster");e&&e.addEventListener("click",()=>this.openDeityPoster());const n=document.getElementById("gk-font-inc");n&&n.addEventListener("click",()=>{this.slokaFontSize=Math.min(this.slokaFontSize+.15,2.2),this.renderViewOnly()});const o=document.getElementById("gk-font-dec");o&&o.addEventListener("click",()=>{this.slokaFontSize=Math.max(this.slokaFontSize-.15,.9),this.renderViewOnly()});const r=document.getElementById("gk-toggle-sabdartha");r&&r.addEventListener("click",()=>{this.showSabdartha=!this.showSabdartha,this.renderViewOnly()});const s=document.getElementById("gk-japa-trigger");s&&s.addEventListener("click",()=>this.handleJapaClick());const d=document.getElementById("gk-japa-sound-toggle");d&&d.addEventListener("click",()=>{this.japaEngine.soundEnabled=!this.japaEngine.soundEnabled,this.japaEngine.saveState(),d.innerHTML=this.japaEngine.soundEnabled?"🔔 Sound: ON":"🔕 Sound: OFF"});const l=document.getElementById("gk-japa-vib-toggle");l&&l.addEventListener("click",()=>{this.japaEngine.vibrationEnabled=!this.japaEngine.vibrationEnabled,this.japaEngine.saveState(),l.innerHTML=this.japaEngine.vibrationEnabled?"📳 Haptics: ON":"📴 Haptics: OFF"});const c=document.getElementById("gk-japa-meru-toggle");c&&c.addEventListener("click",()=>{this.japaEngine.meruReversalMode=!this.japaEngine.meruReversalMode,this.japaEngine.saveState(),c.innerHTML=this.japaEngine.meruReversalMode?"🔄 Meru Reversal: ON":"🔁 Continuous Loop"});const h=document.getElementById("gk-japa-reset");h&&h.addEventListener("click",()=>{confirm("Reset current 108 bead counter to 0?")&&(this.japaEngine.resetCurrentMala(),this.renderViewOnly())});const y=document.getElementById("gk-japa-export");y&&y.addEventListener("click",()=>{const g=this.japaEngine.exportDataJSON(),k=new Blob([g],{type:"application/json"}),A=URL.createObjectURL(k),C=document.createElement("a");C.href=A,C.download=`GuruKripa_Japa_Backup_${new Date().toISOString().slice(0,10)}.json`,C.click()}),document.querySelectorAll(".gk-quiz-btn").forEach(g=>{g.addEventListener("click",async()=>{const k=g.getAttribute("data-story"),A=parseInt(g.getAttribute("data-idx"),10),{STORIES_DATA:C}=await this.loadStories(),$=C.find(P=>P.id===k),w=document.getElementById(`gk-quiz-result-${k}`);$&&w&&(w.style.display="block",A===$.quiz.correctIndex?(w.style.background="rgba(46, 125, 50, 0.1)",w.style.color="#2E7D32",w.innerHTML=`<strong>✓ Spot On!</strong> ${$.quiz.explanation}`):(w.style.background="rgba(198, 40, 40, 0.1)",w.style.color="#C62828",w.innerHTML="<strong>Reflect Again:</strong> Consider the spiritual principle of Buddhi and Satya."))})})}bindModalEvents(){const a=document.getElementById("gk-card-maker-close");a&&a.addEventListener("click",()=>this.closeCardMaker()),document.querySelectorAll(".gk-theme-swatch").forEach(c=>{c.addEventListener("click",()=>{this.cardTheme=c.getAttribute("data-theme"),document.querySelectorAll(".gk-theme-swatch").forEach(h=>h.classList.remove("active")),c.classList.add("active"),this.drawShareCanvas()})});const t=document.getElementById("gk-canvas-download");t&&t.addEventListener("click",()=>this.downloadCardImage());const i=document.getElementById("gk-canvas-whatsapp");i&&i.addEventListener("click",()=>this.shareCardToWhatsApp());const e=document.getElementById("gk-deity-poster-close");e&&e.addEventListener("click",()=>this.closeDeityPoster()),document.querySelectorAll(".gk-aspect-pill").forEach(c=>{c.addEventListener("click",()=>{this.posterAspectRatio=c.getAttribute("data-aspect"),document.querySelectorAll(".gk-aspect-pill").forEach(h=>h.classList.remove("active")),c.classList.add("active"),this.drawDeityPoster()})}),document.querySelectorAll(".gk-theme-pill").forEach(c=>{c.addEventListener("click",()=>{this.posterTheme=c.getAttribute("data-theme"),document.querySelectorAll(".gk-theme-pill").forEach(h=>h.classList.remove("active")),c.classList.add("active"),this.drawDeityPoster()})});const n=document.getElementById("gk-btn-share-native");n&&n.addEventListener("click",()=>this.shareDeityPosterNative());const o=document.getElementById("gk-btn-share-x");o&&o.addEventListener("click",()=>this.shareDeityPosterX());const r=document.getElementById("gk-btn-download-poster");r&&r.addEventListener("click",()=>this.downloadDeityPoster());const s=document.getElementById("gk-btn-copy-clip");s&&s.addEventListener("click",()=>this.copyDeityPosterClip());const d=document.getElementById("gk-modal-close");d&&d.addEventListener("click",()=>{this.cityModalOpen=!1,this.renderModalOnly()});const l=document.getElementById("gk-city-search");l&&l.addEventListener("input",c=>{const h=c.target.value.toLowerCase();document.querySelectorAll(".gk-city-item").forEach(g=>{const k=g.innerText.toLowerCase();g.style.display=k.includes(h)?"flex":"none"})}),document.querySelectorAll(".gk-city-item").forEach(c=>{c.addEventListener("click",()=>{const h=c.getAttribute("data-city-id"),y=this.cities.find(g=>g.id===h);y&&(this.saveCity(y),this.cityModalOpen=!1,this.render())})})}updateSEO(){if(typeof document>"u")return;const a={panchang:{title:"Today's Vedic Panchangam, Rahu Kalam & Planetary Ephemeris — GuruKripa",desc:`Live Vedic Panchangam for ${this.selectedCity.name}, ${this.selectedCity.country} on ${this.selectedDate}. Accurate Tithi, Nakshatra, Yoga, Karana, Abhijit Muhurta, Rahu Kalam, and sidereal Nirayana planetary longitudes calculated 100% in-browser with Lahiri Ayanamsa.`,keywords:`Panchang, Vedic calendar, Rahu Kalam, ${this.selectedCity.name} panchangam, Tithi, Nakshatra, Lahiri Ayanamsa, daily horoscope, Hindu Vaara`},jyotirlingas:{title:"12 Jyotirlinga Mahakshetra & Sacred Shrines Guide — GuruKripa",desc:"Comprehensive pilgrimage guide to the 12 sacred Jyotirlingas: Somnath, Mallikarjuna, Mahakaleshwar, Omkareshwar, Kedarnath, Bhimashankar, Kashi Vishwanath, Trimbakeshwar, Vaidyanath, Nageshwar, Rameshwaram, and Grishneshwar with authentic puranic history, dosha nivarana parikaras, and specific poojas.",keywords:"12 Jyotirlingas, Somnath, Mahakaleshwar, Kedarnath, Kashi Vishwanath, Shiva shrines, dosha nivarana, parikaras, Jyotirlinga pilgrimage"},stotras:{title:"Sanskrit Stotras, Mantras & Hymns in 11 Indian Scripts — GuruKripa",desc:"Chant authentic sacred Sanskrit stotras including Shiva Tandava Stotram, Sri Venkateswara Suprabhatam, Mahalakshmi Ashtakam, and Aditya Hridaya Stotram with word-by-word Sabdartha and dynamic transliteration across 11 Indic scripts.",keywords:"Sanskrit stotras, Shiva Tandava Stotram, Venkateswara Suprabhatam, Mahalakshmi Ashtakam, Sanskrit mantras, Indic transliteration, Sabdartha"},japa:{title:"108-Bead Interactive Digital Japa Mala & Chanting Counter — GuruKripa",desc:"Sacred 108 Japa Mala counter with sensory haptic vibration, bell chimes, custom bead goals, and offline sadhana history tracker for mantra meditation.",keywords:"Japa mala, digital japa counter, 108 beads, mantra meditation, sadhana tracker, Hare Krishna japa, Om Namah Shivaya"},stories:{title:"Sanatana Dharma Moral Stories & Panchatantra Fables — GuruKripa",desc:"Inspiring Hindu moral stories, Hitopadesha wisdom, Panchatantra fables, and Dharmic reflection dilemmas with illuminated takeaways for seekers and families.",keywords:"Panchatantra stories, Hitopadesha, Hindu moral stories, Dharmic wisdom, Indian fables, Vedic bedtime stories"}},t=a[this.currentView]||a.panchang;document.title=t.title;let i=document.querySelector('meta[name="description"]');i||(i=document.createElement("meta"),i.name="description",document.head.appendChild(i)),i.content=t.desc;let e=document.querySelector('meta[name="keywords"]');e||(e=document.createElement("meta"),e.name="keywords",document.head.appendChild(e)),e.content=t.keywords;const n=this.getOrigin();let o=document.querySelector('link[rel="canonical"]');o||(o=document.createElement("link"),o.rel="canonical",document.head.appendChild(o)),o.href=`${n}/#${this.currentView}`;const r=(l,c)=>{let h=document.querySelector(`meta[property="${l}"]`);h||(h=document.createElement("meta"),h.setAttribute("property",l),document.head.appendChild(h)),h.content=c};r("og:title",t.title),r("og:description",t.desc),r("og:url",`${n}/#${this.currentView}`),r("og:image",`${n}/assets/og-banner.svg`);const s=(l,c)=>{let h=document.querySelector(`meta[name="${l}"]`);h||(h=document.createElement("meta"),h.setAttribute("name",l),document.head.appendChild(h)),h.content=c};s("twitter:title",t.title),s("twitter:description",t.desc),s("twitter:image",`${n}/assets/og-banner.svg`),document.documentElement.lang=this.selectedLang||"en";const d=document.getElementById("gk-schema-jsonld");if(d){const l=[{"@type":"WebApplication","@id":`${n}/#webapp`,name:"GuruKripa",url:n,description:t.desc,applicationCategory:"LifestyleApplication",operatingSystem:"All",inLanguage:["sa","hi","mr","ta","te","kn","ml","gu","bn","or","en"],offers:{"@type":"Offer",price:"0",priceCurrency:"USD"}},{"@type":"BreadcrumbList","@id":`${n}/#breadcrumb-${this.currentView}`,itemListElement:[{"@type":"ListItem",position:1,name:"GuruKripa",item:`${n}/`},{"@type":"ListItem",position:2,name:t.title,item:`${n}/#${this.currentView}`}]}];this.currentView==="panchang"&&l.push({"@type":"FAQPage","@id":`${n}/#faq-panchang`,mainEntity:[{"@type":"Question",name:"What is Rahu Kalam and why is it important?",acceptedAnswer:{"@type":"Answer",text:"Rahu Kalam is an inauspicious time window of approximately 90 minutes each day governed by Rahu. Auspicious ventures, travel, and pujas are traditionally avoided during this period."}},{"@type":"Question",name:"How does GuruKripa calculate planetary longitudes dynamically?",acceptedAnswer:{"@type":"Answer",text:"GuruKripa computes high-precision sidereal Nirayana longitudes using Jean Meeus astronomical algorithms coupled with Lahiri Chitrapaksha Ayanamsa 100% in the user's browser."}},{"@type":"Question",name:"What are the 5 Limbs of Panchang?",acceptedAnswer:{"@type":"Answer",text:"The 5 limbs (Panchanga) are Tithi (Lunar Day), Vaara (Solar Weekday), Nakshatra (Lunar Mansion), Yoga (Luni-Solar angular distance), and Karana (Half-Tithi)."}}]}),d.textContent=JSON.stringify({"@context":"https://schema.org","@graph":l},null,2)}}}document.addEventListener("DOMContentLoaded",()=>{new Xt});
