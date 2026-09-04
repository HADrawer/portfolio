var I18N = {
  en: {
    "nav.work": "Work",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.hello": "Hello, my name is",
    "hero.r1": "Full-stack developer",
    "hero.r2": "APIs",
    "hero.r3": "Blockchain",
    "hero.lede": "I build backends that hold up and frontends people can actually use.",
    "hero.hire": "Hire me",
    "hero.cv": "Download CV",
    "hero.open": "Open to work",
    "about.kick": "About",
    "about.em": "in short",
    "about.p1": "I'm Hashem, a full-stack developer from Bahrain. Two years at Reboot building real systems with other people — Rust servers, Go social apps, Solidity marketplaces — then an internship at Script Solutions on SaaS features, APIs, and the unglamorous debugging in between.",
    "about.p2": "Most of my work is APIs, databases, and auth. The blockchain parts came from genuine curiosity about how money moves on-chain, not hype. Everything below is code you can read.",
    "about.job": "Software developer intern, Jul–Aug 2026",
    "about.edu1t": "University of Bahrain",
    "about.edu1": "BSc Computer Science, cloud track",
    "about.edu2": "Full-stack diploma, 2024–2026",
    "work.kick": "Portfolio",
    "work.title": "My recent works",
    "work.more": "More experiments live on",
    "work.p1": "Multi-tenant clinic management — patients, appointments, pharmacy, billing. Tenant isolation and roles done properly.",
    "work.p2": "Stablecoin, tokenized shares, bonds — with order matching and withdrawal guards that protect locked funds.",
    "work.p3": "Auth, profiles, and public/private visibility. My part was accounts and privacy; teammates did chat and groups.",
    "work.p4": "Listing, buying, and transferring NFTs through contract calls, wired to marketplace state.",
    "work.p5": "Graduation project: bilingual itineraries, recommendations, saved trips. I did the APIs and accounts.",
    "work.p6": "A CLI prototype for off-chain channels — funding, balances, node info. Built to understand channel state.",
    "contact.kick": "Contact",
    "contact.title": "Let's build something.",
    "contact.p": "Email is fastest. I read everything, even if I reply at odd hours.",
    "contact.email": "Email me",
    "footer.resume": "Résumé page",
    "resume.title": "Résumé",
    "resume.p": "One page, kept current.",
    "resume.download": "Download PDF",
    "resume.back": "Back to site",
    "meta.title": "Hashem Alkhaldy — Full-stack developer",
    "meta.desc": "Hashem Alkhaldy is a full-stack developer in Bahrain. APIs, databases, and blockchain tooling."
  },
  ar: {
    "nav.work": "أعمالي",
    "nav.about": "عني",
    "nav.contact": "تواصل",
    "hero.hello": "مرحبا، اسمي",
    "hero.r1": "مطور full-stack",
    "hero.r2": "واجهات برمجية",
    "hero.r3": "بلوكتشين",
    "hero.lede": "أبني أنظمة خلفية تتحمل الضغط وواجهات سهلة الاستخدام.",
    "hero.hire": "وظفني",
    "hero.cv": "حمّل السيرة الذاتية",
    "hero.open": "متاح للعمل",
    "about.kick": "عني",
    "about.em": "باختصار",
    "about.p1": "أنا هاشم، مطور full-stack من البحرين. سنتين في Reboot أبني أنظمة حقيقية مع فريق — سيرفرات Rust وتطبيقات Go وأسواق Solidity — وبعدها تدريب في Script Solutions على مزايا SaaS وواجهات برمجية وتنقيح الأخطاء.",
    "about.p2": "معظم شغلي APIs وقواعد بيانات ومصادقة. جزء الـ blockchain جاء من فضول حقيقي عن حركة الفلوس على السلسلة، مو موضة. وكل اللي تحت كود تقدر تقراه.",
    "about.job": "متدرب تطوير برمجيات، يوليو – أغسطس 2026",
    "about.edu1t": "جامعة البحرين",
    "about.edu1": "بكالوريوس علوم حاسب، مسار سحابي",
    "about.edu2": "دبلوم full-stack، 2024–2026",
    "work.kick": "الأعمال",
    "work.title": "أحدث أعمالي",
    "work.more": "تجارب أكثر على",
    "work.p1": "نظام إدارة عيادات متعدد المستأجرين — مرضى ومواعيد وصيدلية وفوترة، مع عزل البيانات والصلاحيات.",
    "work.p2": "عملة مستقرة وأسهم مرمزة وسندات — مع مطابقة الطلبات وضوابط سحب تحمي الأموال المقفلة.",
    "work.p3": "مصادقة وحسابات وخصوصية عام/خاص. جزئي كان الحسابات والخصوصية، والفريق سوى المحادثات والمجموعات.",
    "work.p4": "عرض وشراء ونقل NFTs عبر العقود الذكية، مربوطة بحالة السوق.",
    "work.p5": "مشروع تخرج: مخطط رحلات ثنائي اللغة مع توصيات ورحلات محفوظة. سويت الـ APIs والحسابات.",
    "work.p6": "نموذج CLI لقنوات الدفع خارج السلسلة — تمويل وأرصدة ومعلومات العقد. سويته لفهم حالة القنوات.",
    "contact.kick": "تواصل",
    "contact.title": "خلنا نبني شي.",
    "contact.p": "الإيميل أسرع طريقة. أقرا كل شي حتى لو رديت في وقت غريب.",
    "contact.email": "راسلني",
    "footer.resume": "صفحة السيرة الذاتية",
    "resume.title": "السيرة الذاتية",
    "resume.p": "صفحة واحدة، محدثة دائمًا.",
    "resume.download": "تحميل PDF",
    "resume.back": "رجوع للموقع",
    "meta.title": "هاشم الخالدي — مطور full-stack",
    "meta.desc": "هاشم الخالدي مطور full-stack في البحرين. APIs وقواعد بيانات وأدوات blockchain."
  }
};

function applyLang(lang) {
  var dict = I18N[lang] || I18N.en;
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = dict["meta.title"];
  var meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", dict["meta.desc"]);
  var btn = document.getElementById("langToggle");
  if (btn) btn.textContent = lang === "ar" ? "EN" : "عربي";
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

function initReveal() {
  if (!("IntersectionObserver" in window)) return;
  document.documentElement.classList.add("js");
  var els = document.querySelectorAll(".rv");
  var show = function (el) { el.classList.add("in"); };
  els.forEach(function (el) {
    var r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.98) { show(el); return; }
  });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { show(en.target); io.unobserve(en.target); }
    });
  }, { threshold: 0.05, rootMargin: "0px 0px 10% 0px" });
  els.forEach(function (el) { io.observe(el); });
  setTimeout(function () { els.forEach(show); }, 1200);
}

(function init() {
  var lang = "en";
  try { lang = localStorage.getItem("lang") || "en"; } catch (e) {}
  if (lang !== "ar") lang = "en";
  applyLang(lang);
  var toggle = document.getElementById("langToggle");
  if (toggle) toggle.addEventListener("click", function () {
    var next = document.documentElement.lang === "ar" ? "en" : "ar";
    applyLang(next);
  });
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
  initReveal();
})();
