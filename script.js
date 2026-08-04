"use strict";

document.documentElement.classList.add("js");

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function setupNavigation() {
  const header = document.querySelector("[data-site-header]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const navigation = document.querySelector("[data-nav]");
  const links = [...document.querySelectorAll("[data-nav-link]")];

  if (!header || !toggle || !navigation) return;

  toggle.hidden = false;

  const closeMenu = () => {
    header.classList.remove("is-nav-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const willOpen = toggle.getAttribute("aria-expanded") !== "true";
    header.classList.toggle("is-nav-open", willOpen);
    toggle.setAttribute("aria-expanded", String(willOpen));
  });

  links.forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("is-nav-open")) {
      closeMenu();
      toggle.focus();
    }
  });

  const desktopQuery = window.matchMedia("(min-width: 48rem)");
  desktopQuery.addEventListener("change", (event) => {
    if (event.matches) closeMenu();
  });

  const linksBySection = new Map(
    links.map((link) => [link.getAttribute("href").slice(1), link]),
  );

  const markSection = (id) => {
    links.forEach((link) => link.removeAttribute("aria-current"));
    linksBySection.get(id)?.setAttribute("aria-current", "location");
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (active) markSection(active.target.dataset.section);
      },
      { rootMargin: "-18% 0px -62%", threshold: [0, 0.12, 0.35] },
    );

    document.querySelectorAll("[data-section]").forEach((section) => observer.observe(section));
  } else {
    markSection("home");
  }
}

function setupReveal() {
  const items = [...document.querySelectorAll("[data-reveal]")];

  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        currentObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 },
  );

  items.forEach((item) => observer.observe(item));
}

function setupProjectAtmosphere() {
  const projects = [...document.querySelectorAll("[data-project]")];
  const atlasLinks = [...document.querySelectorAll('.project-atlas a[href^="#project-"]')];

  const markProject = (project) => {
    projects.forEach((item) => item.classList.toggle("is-current", item === project));
    atlasLinks.forEach((link) => {
      const isCurrent = link.getAttribute("href") === `#${project.id}`;
      if (isCurrent) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });

    const ambient = project.dataset.ambient;
    if (ambient) document.documentElement.style.setProperty("--ambient-rgb", ambient);
  };

  if (!("IntersectionObserver" in window)) {
    if (projects[0]) markProject(projects[0]);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const active = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!active) return;

      markProject(active.target);
    },
    { rootMargin: "-18% 0px -28%", threshold: [0.12, 0.35, 0.6] },
  );

  projects.forEach((project) => observer.observe(project));
}

function setupTechnicalRecords() {
  document.querySelectorAll(".technical-record").forEach((record) => {
    const summary = record.querySelector("summary");
    if (!summary) return;

    const syncExpandedState = () => {
      summary.setAttribute("aria-expanded", String(record.open));
    };

    syncExpandedState();
    record.addEventListener("toggle", syncExpandedState);
  });
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.inset = "0 auto auto -9999px";
  document.body.append(textArea);
  textArea.select();
  const copied = document.execCommand("copy");
  textArea.remove();

  if (!copied) throw new Error("Clipboard access was unavailable.");
}

function setupCopyEmail() {
  const button = document.querySelector("[data-copy-email]");
  const status = document.querySelector("[data-copy-status]");
  const address = "hashemalsaie0457@gmail.com";

  if (!button || !status) return;
  button.hidden = false;

  button.addEventListener("click", async () => {
    button.disabled = true;

    try {
      await copyText(address);
      button.textContent = "Email copied";
      status.textContent = "Email address copied to the clipboard.";
    } catch {
      button.textContent = "Copy email address";
      status.textContent = "Copy was unavailable. Select the email address above instead.";
    } finally {
      button.disabled = false;
    }
  });
}

function setupPuzzle() {
  const openButton = document.querySelector("[data-open-puzzle]");
  const dialog = document.querySelector("[data-puzzle-dialog]");
  const closeButton = document.querySelector("[data-close-puzzle]");
  const resetButton = document.querySelector("[data-reset-puzzle]");
  const nodes = [...document.querySelectorAll("[data-signal-node]")];
  const progress = document.querySelector("[data-signal-progress]");
  const status = document.querySelector("[data-puzzle-status]");
  const reward = document.querySelector("[data-puzzle-reward]");

  if (!openButton || !dialog || !closeButton || !resetButton || !status || !reward) return;

  openButton.hidden = false;
  let nextStep = 1;

  const updateProgress = () => {
    if (progress) progress.style.strokeDasharray = `${Math.max(0, nextStep - 1)} 4`;
  };

  const resetPuzzle = () => {
    nextStep = 1;
    nodes.forEach((node) => {
      node.disabled = false;
      node.classList.remove("is-connected", "is-error");
      node.removeAttribute("aria-pressed");
    });
    reward.hidden = true;
    status.textContent = "Signal dormant. Begin with the request source.";
    updateProgress();
  };

  const openDialog = () => {
    resetPuzzle();
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
  };

  const closeDialog = () => {
    if (typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
      openButton.focus();
    }
  };

  openButton.addEventListener("click", openDialog);
  closeButton.addEventListener("click", closeDialog);
  resetButton.addEventListener("click", resetPuzzle);

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog();
  });

  nodes.forEach((node) => {
    node.addEventListener("click", () => {
      const selectedStep = Number(node.dataset.signalNode);

      if (selectedStep !== nextStep) {
        node.classList.remove("is-error");
        void node.offsetWidth;
        node.classList.add("is-error");
        status.textContent = `That node is out of sequence. Find step ${nextStep}.`;
        return;
      }

      node.classList.remove("is-error");
      node.classList.add("is-connected");
      node.setAttribute("aria-pressed", "true");
      node.disabled = true;
      nextStep += 1;
      updateProgress();

      if (nextStep <= nodes.length) {
        const nextLabel = nodes[nextStep - 1].textContent.trim().replace(/^\d+/, "");
        status.textContent = `Signal restored through step ${nextStep - 1}. Continue to ${nextLabel}.`;
        return;
      }

      status.textContent = "Signal path restored: client, API, access control, service, database.";
      reward.hidden = false;
      document.body.classList.add("path-discovered");
      reward.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "nearest" });
    });
  });
}

setupNavigation();
setupReveal();
setupProjectAtmosphere();
setupTechnicalRecords();
setupCopyEmail();
setupPuzzle();
