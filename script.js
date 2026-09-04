var I18N = {
  en: {
    "ui.theme": "Dark",
    "nav.work": "Work",
    "nav.exp": "Experience",
    "nav.edu": "Education",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.name": "Hashem Alkhaldy",
    "hero.kicker": "Bahrain · Open to work",
    "hero.role": "Full-stack developer",
    "hero.lede": "I build APIs, databases, and web apps. Lately, blockchain tooling.",
    "hero.lede2": "Currently open to junior and full-stack roles.",
    "hero.email": "Email me",
    "hero.cv": "CV (PDF)",
    "hero.copy": "Copy email",
    "hero.copied": "Copied",
    "work.title": "Work",
    "work.all": "All",
    "work.backend": "Backend",
    "work.chain": "Blockchain",
    "work.more": "Everything else is on",
    "exp.title": "Experience",
    "exp.company": "Script Solutions · Sanabis",
    "exp.role": "Software developer intern · Jul to Aug 2026",
    "exp.p1": "SaaS features and API integrations under supervision. Debugging, tests, docs. Learned the habits that matter: version control, reading requirements, keeping code maintainable.",
    "work.p1": "Clinic management with tenant isolation and roles.",
    "work.p2": "Stablecoin, shares, bonds, with withdrawal guards.",
    "work.p3": "Accounts and privacy; teammates did chat and groups.",
    "work.p4": "List, buy, and transfer NFTs on-chain.",
    "work.p5": "Bilingual itineraries. I did the APIs and accounts.",
    "work.p6": "Off-chain channel prototype to learn channel state.",
    "about.title": "About",
    "about.p1": "Two years at Reboot building systems with a team, then a SaaS internship at Script Solutions. I like the unglamorous parts: auth, migrations, debugging.",
    "edu.title": "Education",
    "edu.uob": "University of Bahrain",
    "edu.uobd": "BSc Computer Science, cloud track",
    "edu.rb": "Reboot Coding Institute",
    "edu.rbd": "Full-stack diploma, 2024 to 2026",
    "stack.title": "Stack",
    "contact.title": "Contact",
    "footer.resume": "Résumé",
    "resume.title": "Résumé",
    "resume.p": "One page, kept current.",
    "resume.download": "Download PDF",
    "resume.back": "Back",
    "meta.title": "Hashem Alkhaldy · Full-stack developer",
    "meta.desc": "Hashem Alkhaldy, full-stack developer in Bahrain. APIs, databases, blockchain tooling."
  },
  ar: {
    "ui.theme": "داكن",
    "nav.work": "أعمالي",
    "nav.exp": "الخبرة",
    "nav.edu": "التعليم",
    "nav.about": "عني",
    "nav.contact": "تواصل",
    "hero.name": "هاشم الخالدي",
    "hero.kicker": "البحرين · متاح للعمل",
    "hero.role": "مطور full-stack",
    "hero.lede": "أبني واجهات برمجية وقواعد بيانات وتطبيقات ويب. وأخيرًا أدوات blockchain.",
    "hero.lede2": "متاح حاليًا لوظائف المبتدئين والـ full-stack.",
    "hero.email": "راسلني",
    "hero.cv": "السيرة (PDF)",
    "hero.copy": "نسخ الإيميل",
    "hero.copied": "تم النسخ",
    "work.title": "الأعمال",
    "work.all": "الكل",
    "work.backend": "خلفية",
    "work.chain": "بلوكتشين",
    "work.more": "الباقي كله على",
    "exp.title": "الخبرة",
    "exp.company": "Script Solutions · السنابس",
    "exp.role": "متدرب تطوير برمجيات · يوليو إلى أغسطس 2026",
    "exp.p1": "مزايا SaaS وتكاملات API تحت إشراف. تنقيح أخطاء واختبارات وتوثيق. تعلمت العادات المهمة: version control وقراءة المتطلبات وكود يتحمل.",
    "work.p1": "إدارة عيادات مع عزل البيانات والصلاحيات.",
    "work.p2": "عملة مستقرة وأسهم وسندات، مع ضوابط سحب.",
    "work.p3": "الحسابات والخصوصية؛ والفريق سوى المحادثات.",
    "work.p4": "عرض وشراء ونقل NFTs على السلسلة.",
    "work.p5": "مخطط رحلات ثنائي اللغة. سويت الـ APIs والحسابات.",
    "work.p6": "نموذج قنوات خارج السلسلة لتعلم حالتها.",
    "about.title": "عني",
    "about.p1": "سنتين في Reboot أبني أنظمة مع فريق، وبعدها تدريب SaaS في Script Solutions. أحب الأجزاء غير اللامعة: المصادقة والترحيلات وتنقيح الأخطاء.",
    "edu.title": "التعليم",
    "edu.uob": "جامعة البحرين",
    "edu.uobd": "بكالوريوس علوم حاسب، مسار سحابي",
    "edu.rb": "معهد Reboot للبرمجة",
    "edu.rbd": "دبلوم full-stack، 2024 إلى 2026",
    "stack.title": "الأدوات",
    "contact.title": "التواصل",
    "footer.resume": "السيرة الذاتية",
    "resume.title": "السيرة الذاتية",
    "resume.p": "صفحة واحدة، محدثة دائمًا.",
    "resume.download": "تحميل PDF",
    "resume.back": "رجوع",
    "meta.title": "هاشم الخالدي · مطور full-stack",
    "meta.desc": "هاشم الخالدي مطور full-stack في البحرين. APIs وقواعد بيانات وأدوات blockchain."
  }
};

var EMAIL = "hashemalsaie0457@gmail.com";

function currentTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "dark" ? "#1D140D" : "#F0E6D2");
  try { localStorage.setItem("theme", theme); } catch (e) {}
}

function langNow() {
  return document.documentElement.lang === "ar" ? "ar" : "en";
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

function initFilters() {
  var chips = document.querySelectorAll(".fchip");
  if (!chips.length) return;
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("on"); });
      chip.classList.add("on");
      var f = chip.getAttribute("data-filter");
      document.querySelectorAll(".jobs li").forEach(function (li) {
        var tags = (li.getAttribute("data-tags") || "").split(" ");
        li.classList.toggle("hide", f !== "all" && tags.indexOf(f) === -1);
      });
    });
  });
}

function flashCopied(btn) {
  var dict = I18N[langNow()] || I18N.en;
  var orig = btn.textContent;
  btn.textContent = dict["hero.copied"];
  setTimeout(function () { btn.textContent = orig; }, 1500);
}

function copyText(text, done) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
  } else {
    fallbackCopy(text);
    done();
  }
}

function fallbackCopy(text) {
  var ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); } catch (e) {}
  document.body.removeChild(ta);
}

function initCopy() {
  ["copyEmail", "copyEmail2"].forEach(function (id) {
    var btn = document.getElementById(id);
    if (btn) btn.addEventListener("click", function () {
      copyText(EMAIL, function () { flashCopied(btn); });
    });
  });
}

function initTilt() {
  var art = document.getElementById("heroArt");
  var img = art ? art.querySelector(".portrait") : null;
  if (!art || !img) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(hover: none)").matches) return;
  art.addEventListener("mousemove", function (e) {
    var r = art.getBoundingClientRect();
    var x = (e.clientX - r.left) / r.width - 0.5;
    var y = (e.clientY - r.top) / r.height - 0.5;
    img.style.transform = "perspective(700px) rotateY(" + (x * 8) + "deg) rotateX(" + (-y * 8) + "deg)";
  });
  art.addEventListener("mouseleave", function () { img.style.transform = ""; });
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
  var toggle = document.getElementById("themeToggle");
  if (toggle) toggle.addEventListener("click", function () {
    applyTheme(currentTheme() === "dark" ? "light" : "dark");
  });
  var langToggle = document.getElementById("langToggle");
  if (langToggle) langToggle.addEventListener("click", function () {
    applyLang(langNow() === "ar" ? "en" : "ar");
  });
  var lang = "en";
  try { lang = localStorage.getItem("lang") || "en"; } catch (e) {}
  if (lang !== "ar") lang = "en";
  applyLang(lang);
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
  initFilters();
  initCopy();
  initTilt();
  initReveal();
})();
