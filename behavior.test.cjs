// Deep test: run the real script.js against a stub DOM.
const fs = require("fs");
const vm = require("vm");
const src = fs.readFileSync("D:/Code/cv-portfolio/script.js", "utf8");

const applied = {};
const listeners = {};
const store = {};
const docEl = {
  lang: "en", dir: "ltr", theme: "light",
  setAttribute(k, v) { if (k === "lang") this.lang = v; else if (k === "dir") this.dir = v; else this.theme = v; },
  getAttribute(k) { return k === "data-theme" ? this.theme : null; },
};
const textNodes = [{ key: "hero.role", textContent: "" }, { key: "work.title", textContent: "" }];
const sandbox = {
  localStorage: { getItem: (k) => (k in store ? store[k] : null), setItem: (k, v) => { store[k] = v; } },
  matchMedia: () => ({ matches: false }),
  document: {
    documentElement: docEl,
    title: "",
    querySelectorAll: () => textNodes.map((n) => ({
      getAttribute: () => n.key,
      set textContent(v) { n.textContent = v; applied[n.key] = v; },
    })),
    querySelector: () => ({ setAttribute() {} }),
    getElementById: (id) => ({
      set textContent(v) {},
      addEventListener: (ev, fn) => { listeners[id] = fn; },
    }),
  },
};
sandbox.window = sandbox;
sandbox.console = console;
vm.createContext(sandbox);
vm.runInContext(src, sandbox);

let fails = 0;
const eq = (name, got, want) => {
  const ok = got === want;
  if (!ok) fails++;
  console.log((ok ? "PASS" : "FAIL") + " " + name + " => " + JSON.stringify(got));
};

eq("default lang", docEl.lang, "en");
eq("default dir", docEl.dir, "ltr");
eq("EN role applied", applied["hero.role"], "Full-stack developer");

listeners["langToggle"](); // -> ar
eq("AR lang", docEl.lang, "ar");
eq("AR dir", docEl.dir, "rtl");
eq("AR role applied", applied["hero.role"], "مطور full-stack");
eq("AR title", sandbox.document.title, "هاشم الخالدي — مطور full-stack");
eq("lang persisted", store["lang"], "ar");

listeners["langToggle"](); // -> en
eq("back to EN", docEl.lang, "en");

listeners["themeToggle"]();
eq("theme -> dark", docEl.theme, "dark");
eq("theme persisted", store["theme"], "dark");
listeners["themeToggle"]();
eq("theme -> light", docEl.theme, "light");

console.log(fails === 0 ? "ALL BEHAVIOR PASS" : fails + " FAILURES");
process.exit(fails === 0 ? 0 : 1);
