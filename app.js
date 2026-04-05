// ========================================
//  Portfolio Hub - Dynamic GitHub Loader
//  Conceito: Caderno interativo
// ========================================

const GITHUB_USER = "masilvaarcs";
const API_BASE = `https://api.github.com/users/${GITHUB_USER}`;

// Language color map
const LANG_COLORS = {
  Python: "#3776AB",
  JavaScript: "#F7DF1E",
  "C#": "#68217A",
  TypeScript: "#3178C6",
  HTML: "#e34c26",
  CSS: "#264de4",
  Java: "#b07219",
  Dockerfile: "#384d54",
  Shell: "#89e051",
};

// ========================================
// COVER OPEN ANIMATION
// ========================================
document.getElementById("openBook").addEventListener("click", () => {
  const cover = document.getElementById("cover");
  const notebook = document.getElementById("notebook");

  cover.style.transition = "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)";
  cover.style.transform = "perspective(1200px) rotateY(-90deg) scale(0.8)";
  cover.style.opacity = "0";

  setTimeout(() => {
    cover.style.display = "none";
    notebook.classList.remove("hidden");
    loadGitHubData();
  }, 600);
});

// ========================================
// TAB NAVIGATION
// ========================================
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
    document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));

    tab.classList.add("active");
    const pageId = `page-${tab.dataset.page}`;
    document.getElementById(pageId).classList.add("active");
  });
});

// ========================================
// LOAD GITHUB DATA
// ========================================
async function loadGitHubData() {
  try {
    // Load profile
    const profileRes = await fetch(API_BASE);
    const profile = await profileRes.json();

    // Set avatar
    const avatar = document.getElementById("avatarImg");
    avatar.src = profile.avatar_url;

    // Load repos
    const reposRes = await fetch(`${API_BASE}/repos?per_page=100&sort=updated`);
    const repos = await reposRes.json();

    // Filter only public non-fork repos
    const publicRepos = repos.filter((r) => !r.fork && !r.private);

    // Count unique languages
    const languages = new Set(publicRepos.map((r) => r.language).filter(Boolean));

    // Count stars
    const totalStars = publicRepos.reduce((sum, r) => sum + r.stargazers_count, 0);

    // Animate counters
    animateCounter("repoCount", publicRepos.length);
    animateCounter("langCount", languages.size);
    animateCounter("starCount", totalStars);

    // Render projects
    renderProjects(publicRepos);

    // Setup filters
    setupFilters(publicRepos);
  } catch (err) {
    console.error("Error loading GitHub data:", err);
    document.getElementById("projectsGrid").innerHTML =
      '<p style="color:#c0392b; font-family: var(--font-hand); font-size: 1.2rem;">Erro ao carregar projetos. Tente novamente.</p>';
  }
}

// ========================================
// RENDER PROJECTS
// ========================================
function renderProjects(repos) {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";

  if (repos.length === 0) {
    grid.innerHTML = '<p class="handwritten" style="font-size:1.3rem; color:#888;">Nenhum projeto encontrado.</p>';
    return;
  }

  repos.forEach((repo, i) => {
    const lang = repo.language || "Other";
    const color = LANG_COLORS[lang] || "#999";
    const desc = repo.description || "Sem descrição";
    const updated = new Date(repo.updated_at).toLocaleDateString("pt-BR");

    const card = document.createElement("div");
    card.className = "project-card";
    card.dataset.lang = lang;
    card.style.animationDelay = `${i * 0.05}s`;
    card.style.animation = "pageFlip 0.4s ease both";

    card.innerHTML = `
      <div class="project-name">${repo.name}</div>
      <div class="project-desc">${escapeHtml(desc)}</div>
      <div class="project-meta">
        <span class="project-lang">
          <span class="lang-dot" style="background:${color}"></span>
          ${lang}
        </span>
        <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
        <span><i class="fas fa-clock"></i> ${updated}</span>
        <a href="${repo.html_url}" target="_blank" rel="noopener" class="project-link">
          <i class="fab fa-github"></i> Abrir
        </a>
      </div>
    `;

    grid.appendChild(card);
  });
}

// ========================================
// FILTERS
// ========================================
function setupFilters(allRepos) {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      const filtered =
        filter === "all" ? allRepos : allRepos.filter((r) => r.language === filter);

      renderProjects(filtered);
    });
  });
}

// ========================================
// UTILS
// ========================================
function animateCounter(id, target) {
  const el = document.getElementById(id);
  const duration = 1200;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
