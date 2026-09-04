var I18N = {
  en: {
    "ui.theme": "Dark",
    "hero.kicker": "Bahrain · Open to work",
    "hero.role": "Full-stack developer",
    "hero.lede": "I build APIs, databases, and web apps. Lately, blockchain tooling.",
    "hero.email": "Email me",
    "hero.cv": "CV (PDF)",
    "work.title": "Work",
    "work.more": "Everything else is on",
    "work.p1": "Clinic management with tenant isolation and roles.",
    "work.p2": "Stablecoin, shares, bonds — with withdrawal guards.",
    "work.p3": "Accounts and privacy; teammates did chat and groups.",
    "work.p4": "List, buy, and transfer NFTs on-chain.",
    "work.p5": "Bilingual itineraries. I did the APIs and accounts.",
    "work.p6": "Off-chain channel prototype to learn channel state.",
    "about.title": "About",
    "about.p1": "Two years at Reboot building systems with a team, then a SaaS internship at Script Solutions. I like the unglamorous parts: auth, migrations, debugging.",
    "about.edu": "BSc Computer Science (cloud), University of Bahrain · Full-stack diploma, Reboot (2024–2026)",
    "stack.title": "Stack",
    "contact.title": "Contact",
    "footer.resume": "Résumé",
    "resume.title": "Résumé",
    "resume.p": "One page, kept current.",
    "resume.download": "Download PDF",
    "resume.back": "Back",
    "meta.title": "Hashem Alkhaldy — Full-stack developer",
    "meta.desc": "Hashem Alkhaldy, full-stack developer in Bahrain. APIs, databases, blockchain tooling."
  },
  ar: {
    "ui.theme": "داكن",
    "hero.kicker": "البحرين · متاح للعمل",
    "hero.role": "مطور full-stack",
    "hero.lede": "أبني واجهات برمجية وقواعد بيانات وتطبيقات ويب. وأخيرًا أدوات blockchain.",
    "hero.email": "راسلني",
    "hero.cv": "السيرة (PDF)",
    "work.title": "الأعمال",
    "work.more": "الباقي كله على",
    "work.p1": "إدارة عيادات مع عزل البيانات والصلاحيات.",
    "work.p2": "عملة مستقرة وأسهم وسندات — مع ضوابط سحب.",
    "work.p3": "الحسابات والخصوصية؛ والفريق سوى المحادثات.",
    "work.p4": "عرض وشراء ونقل NFTs على السلسلة.",
    "work.p5": "مخطط رحلات ثنائي اللغة. سويت الـ APIs والحسابات.",
    "work.p6": "نموذج قنوات خارج السلسلة لتعلم حالتها.",
    "about.title": "عني",
    "about.p1": "سنتين في Reboot أبني أنظمة مع فريق، وبعدها تدريب SaaS في Script Solutions. أحب الأجزاء غير اللامعة: المصادقة والترحيلات وتنقيح الأخطاء.",
    "about.edu": "بكالوريوس علوم حاسب (سحابي)، جامعة البحرين · دبلوم full-stack، Reboot (2024–2026)",
    "stack.title": "الأدوات",
    "contact.title": "التواصل",
    "footer.resume": "السيرة الذاتية",
    "resume.title": "السيرة الذاتية",
    "resume.p": "صفحة واحدة، محدثة دائمًا.",
    "resume.download": "تحميل PDF",
    "resume.back": "رجوع",
    "meta.title": "هاشم الخالدي — مطور full-stack",
    "meta.desc": "هاشم الخالدي مطور full-stack في البحرين. APIs وقواعد بيانات وأدوات blockchain."
  }
};

function currentTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "dark" ? "#14110D" : "#FAF7F2");
  try { localStorage.setItem("theme", theme); } catch (e) {}
}

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

(function init() {
  var toggle = document.getElementById("themeToggle");
  if (toggle) toggle.addEventListener("click", function () {
    applyTheme(currentTheme() === "dark" ? "light" : "dark");
  });
  var langToggle = document.getElementById("langToggle");
  if (langToggle) langToggle.addEventListener("click", function () {
    applyLang(document.documentElement.lang === "ar" ? "en" : "ar");
  });
  var lang = "en";
  try { lang = localStorage.getItem("lang") || "en"; } catch (e) {}
  if (lang !== "ar") lang = "en";
  applyLang(lang);
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
