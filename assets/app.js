// Renders the project grid, the area filters and the theme toggle. No dependencies.
(function () {
  "use strict";

  const projects = Array.isArray(window.PROJECTS) ? window.PROJECTS : [];
  const grid = document.getElementById("projectGrid");
  const filters = document.getElementById("filters");
  const count = document.getElementById("projectsCount");
  const template = document.getElementById("projectCardTemplate");

  // ---------- Theme ----------
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const STORAGE_KEY = "theme";

  function currentTheme() {
    const explicit = root.getAttribute("data-theme");
    if (explicit) return explicit;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    toggle.setAttribute("aria-pressed", String(theme === "dark"));
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (_) {
      /* storage unavailable (private mode): the choice lasts for this page view */
    }
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);
  } catch (_) {
    /* ignore */
  }
  toggle.setAttribute("aria-pressed", String(currentTheme() === "dark"));
  toggle.addEventListener("click", () => applyTheme(currentTheme() === "dark" ? "light" : "dark"));

  // ---------- Filters ----------
  const areas = ["All", ...new Set(projects.flatMap((p) => p.areas || []))];
  let active = "All";

  function renderFilters() {
    filters.replaceChildren(
      ...areas.map((area) => {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "chip";
        chip.textContent = area;
        chip.setAttribute("aria-pressed", String(area === active));
        chip.addEventListener("click", () => {
          active = area;
          renderFilters();
          renderProjects();
        });
        return chip;
      })
    );
  }

  // ---------- Cards ----------
  function renderProjects() {
    const visible = projects.filter((p) => active === "All" || (p.areas || []).includes(active));

    grid.replaceChildren(
      ...visible.map((p) => {
        const node = template.content.firstElementChild.cloneNode(true);
        // Only the newest project carries a badge; other cards drop the meta row entirely
        if (!p.isNew) node.querySelector(".card-meta").remove();

        const link = node.querySelector(".card-link");
        link.href = p.url;
        link.textContent = p.title;

        node.querySelector(".card-desc").textContent = p.description;
        node.querySelector(".tags").replaceChildren(
          ...(p.tags || []).map((t) => {
            const li = document.createElement("li");
            li.textContent = t;
            return li;
          })
        );
        node.querySelector(".card-cta").href = p.url;
        return node;
      })
    );

    count.textContent = `${visible.length} of ${projects.length}`;
  }

  renderFilters();
  renderProjects();
  document.getElementById("year").textContent = new Date().getFullYear();
})();
