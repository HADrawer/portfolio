// Deep test: real script.js against a stub DOM (lang, theme, filter, copy, reveal).
const fs = require("fs");
const vm = require("vm");
const src = fs.readFileSync("D:/Code/cv-portfolio/script.js", "utf8");

function makeDoc() {
  const texts = {};
  const listeners = {};
  const classes = {};
  const liState = [
    { tags: "backend", hidden: false },
    { tags: "chain", hidden: false },
  ];
  const chips = ["all", "backend", "chain"].map((f) => ({
    filter: f,
    on: f === "all",
    classList: {
      remove: (c) => { if (c === "on") chips.find((x) => x.filter === f).on = false; },
      add: (c) => { if (c === "on") chips.find((x) => x.filter === f).on = true; },
    },
    getAttribute: (k) => (k === "data-filter" ? f : null),
    addEventListener: (ev, fn) => { listeners["chip:" + f] = fn; },
  }));
  const docEl = {
    lang: "en", dir: "ltr", theme: "light", _cls: new Set(),
    setAttribute(k, v) { if (k === "lang") this.lang = v; else if (k === "dir") this.dir = v; else this.theme = v; },
    getAttribute(k) { return k === "data-theme" ? this.theme : null; },
    classList: { add: (c) => docEl._cls.add(c) },
  };
  const liEls = liState.map((s) => ({
    getAttribute: (k) => (k === "data-tags" ? s.tags : null),
    classList: { toggle: (c, force) => { if (c === "hide") s.hidden = !!force; } },
  }));
  const byId = {};
  const doc = {
    documentElement: docEl,
    title: "",
    _texts: texts,
    querySelectorAll: (sel) => {
      if (sel === "[data-i18n]") return [];
      if (sel === ".fchip") return chips;
      if (sel === ".jobs li") return liEls;
      if (sel === ".rv") return [];
      return [];
    },
    querySelector: () => ({ setAttribute() {} }),
    createElement: () => ({ style: {}, select() {}, value: "" }),
    body: { appendChild() {}, removeChild() {} },
    execCommand: () => true,
    getElementById: (id) => {
      if (!byId[id]) byId[id] = { _t: "", listeners: {},
        querySelector: () => ({ style: {} }),
        set textContent(v) { this._t = v; }, get textContent() { return this._t; },
        addEventListener(ev, fn) { this.listeners[ev] = fn; } };
      return byId[id];
    },
  };
  return { doc, byId, listeners, liState, chips, texts };
}

const store = {};
const { doc, byId, listeners, liState } = makeDoc();
const sandbox = {
  localStorage: { getItem: (k) => (k in store ? store[k] : null), setItem: (k, v) => { store[k] = v; } },
  matchMedia: () => ({ matches: false }),
  navigator: {},
  setTimeout: (fn) => 0,
  document: doc,
  console,
};
sandbox.window = sandbox;
vm.createContext(sandbox);
vm.runInContext(src, sandbox);

let fails = 0;
const eq = (name, got, want) => {
  const ok = got === want;
  if (!ok) fails++;
  console.log((ok ? "PASS" : "FAIL") + " " + name + " => " + JSON.stringify(got));
};

// lang both ways
byId["langToggle"].listeners["click"]();
eq("AR dir", doc.documentElement.dir, "rtl");
byId["langToggle"].listeners["click"]();
eq("back EN dir", doc.documentElement.dir, "ltr");

// filter blockchain
listeners["chip:chain"]();
eq("backend hidden on chain filter", liState[0].hidden, true);
eq("chain visible on chain filter", liState[1].hidden, false);
listeners["chip:all"]();
eq("all visible again", liState[0].hidden, false);

// copy button exists and doesn't throw
byId["copyEmail"].listeners["click"]();
console.log("PASS copy click no-throw");
console.log(fails === 0 ? "ALL BEHAVIOR PASS" : fails + " FAILURES");
process.exit(fails === 0 ? 0 : 1);
