/* ─── State ─── */
const GITHUB_BASE = "https://github.com/SURYA-SAHIL-787/AI-STACK-HUB/tree/main/categories/";
let activeFilters = { pricing: "all", role: "all", skill: "all" };
let searchQuery = "";

/* ══════════════════════════════════════
   STAR FIELD CANVAS
══════════════════════════════════════ */
(function initStars() {
  const canvas = document.getElementById("stars-canvas");
  const ctx = canvas.getContext("2d");

  let W, H, stars = [], shooters = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function mkStar() {
    const r = Math.random();
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: r < 0.7 ? 0.4 : r < 0.9 ? 0.8 : 1.3,
      alpha: Math.random() * 0.6 + 0.2,
      da: (Math.random() * 0.008 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
      hue: Math.random() > 0.85 ? (Math.random() > 0.5 ? 200 : 280) : 0,
      sat: Math.random() > 0.85 ? 80 : 0
    };
  }

  function mkShooter() {
    const angle = (Math.random() * 30 + 15) * Math.PI / 180;
    return {
      x: Math.random() * W * 0.6,
      y: Math.random() * H * 0.4,
      len: Math.random() * 180 + 80,
      speed: Math.random() * 12 + 8,
      alpha: 1,
      dx: Math.cos(angle),
      dy: Math.sin(angle),
      dead: false
    };
  }

  function build() {
    resize();
    stars = Array.from({ length: 220 }, mkStar);
  }

  function drawStars() {
    ctx.clearRect(0, 0, W, H);

    stars.forEach(s => {
      s.alpha += s.da;
      if (s.alpha > 0.9 || s.alpha < 0.1) s.da = -s.da;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      if (s.hue) {
        ctx.fillStyle = `hsla(${s.hue}, ${s.sat}%, 90%, ${s.alpha})`;
      } else {
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
      }
      ctx.fill();
    });

    shooters = shooters.filter(s => !s.dead);
    shooters.forEach(s => {
      const tail = { x: s.x - s.dx * s.len, y: s.y - s.dy * s.len };
      const grad = ctx.createLinearGradient(tail.x, tail.y, s.x, s.y);
      grad.addColorStop(0, "rgba(255,255,255,0)");
      grad.addColorStop(1, `rgba(255,255,255,${s.alpha})`);
      ctx.beginPath();
      ctx.moveTo(tail.x, tail.y);
      ctx.lineTo(s.x, s.y);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      s.x += s.dx * s.speed;
      s.y += s.dy * s.speed;
      s.alpha -= 0.018;
      if (s.alpha <= 0 || s.x > W || s.y > H) s.dead = true;
    });

    requestAnimationFrame(drawStars);
  }

  setInterval(() => { if (shooters.length < 3) shooters.push(mkShooter()); }, 3500);
  window.addEventListener("resize", build);
  build();
  drawStars();
})();

/* ══════════════════════════════════════
   CURSOR GLOW
══════════════════════════════════════ */
(function initCursor() {
  const glow = document.getElementById("cursor-glow");
  let mx = -100, my = -100, cx = -100, cy = -100;

  document.addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; });

  document.addEventListener("mouseover", e => {
    if (e.target.closest("a, button, .card")) glow.classList.add("big");
    else glow.classList.remove("big");
  });

  (function animateCursor() {
    cx += (mx - cx) * 0.12;
    cy += (my - cy) * 0.12;
    glow.style.left = cx + "px";
    glow.style.top  = cy + "px";
    requestAnimationFrame(animateCursor);
  })();
})();

/* ══════════════════════════════════════
   TYPEWRITER
══════════════════════════════════════ */
(function initTypewriter() {
  const el = document.getElementById("typewriter");
  const lines = [
    "31 Categories. No Fluff. No Affiliate Spam.",
    "From Free Open-Source To Enterprise Tools.",
    "Filter By Pricing, Role, And Skill Level.",
    "The Only AI Directory You'll Ever Need."
  ];
  let li = 0, ci = 0, deleting = false;

  function type() {
    const line = lines[li];
    if (!deleting) {
      el.textContent = line.slice(0, ++ci);
      if (ci === line.length) { deleting = true; return setTimeout(type, 2200); }
      setTimeout(type, 45);
    } else {
      el.textContent = line.slice(0, --ci);
      if (ci === 0) { deleting = false; li = (li + 1) % lines.length; return setTimeout(type, 400); }
      setTimeout(type, 22);
    }
  }
  setTimeout(type, 800);
})();

/* ══════════════════════════════════════
   COUNTER ANIMATION
══════════════════════════════════════ */
(function initCounters() {
  const nums = document.querySelectorAll(".stat-num");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      const duration = 1200;
      const start = performance.now();
      function update(now) {
        const t = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(ease * target);
        if (t < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
      observer.unobserve(el);
    });
  });
  nums.forEach(n => observer.observe(n));
})();

/* ══════════════════════════════════════
   CARD TILT
══════════════════════════════════════ */
function addTilt(card) {
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    card.style.transform = `perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateZ(8px)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
}

/* ══════════════════════════════════════
   RIPPLE ON PILLS
══════════════════════════════════════ */
function addRipple(btn) {
  btn.addEventListener("click", e => {
    const r = btn.getBoundingClientRect();
    const rip = document.createElement("span");
    rip.style.cssText = `
      position:absolute; border-radius:50%;
      width:80px; height:80px;
      background:rgba(255,255,255,0.2);
      transform:scale(0); animation:ripple-anim 0.5s ease;
      left:${e.clientX - r.left - 40}px; top:${e.clientY - r.top - 40}px;
      pointer-events:none;
    `;
    if (!document.getElementById("ripple-style")) {
      const s = document.createElement("style");
      s.id = "ripple-style";
      s.textContent = "@keyframes ripple-anim{to{transform:scale(2.5);opacity:0}}";
      document.head.appendChild(s);
    }
    btn.appendChild(rip);
    setTimeout(() => rip.remove(), 500);
  });
}

/* ══════════════════════════════════════
   FILTER & RENDER
══════════════════════════════════════ */
function matches(cat) {
  const p = activeFilters.pricing === "all" || cat.pricing.includes(activeFilters.pricing);
  const r = activeFilters.role === "all"    || cat.roles.includes(activeFilters.role);
  const s = activeFilters.skill === "all"   || cat.skill.includes(activeFilters.skill);
  const q = !searchQuery || [cat.name, cat.description, cat.freePick, cat.paidPick, ...cat.roles]
    .join(" ").toLowerCase().includes(searchQuery.toLowerCase());
  return p && r && s && q;
}

function render() {
  const grid = document.getElementById("grid");
  const noRes = document.getElementById("no-results");
  const badge = document.getElementById("search-badge");
  const resultsTxt = document.getElementById("results-text");
  const resetBtn = document.getElementById("reset-btn");

  const filtered = CATEGORIES.filter(matches);

  badge.textContent = filtered.length;
  resultsTxt.textContent = filtered.length === CATEGORIES.length
    ? `Showing All ${CATEGORIES.length} Categories`
    : `Showing ${filtered.length} Of ${CATEGORIES.length} Categories`;

  const isFiltered = Object.values(activeFilters).some(v => v !== "all") || searchQuery;
  resetBtn.classList.toggle("visible", isFiltered);

  if (filtered.length === 0) {
    grid.innerHTML = "";
    noRes.classList.add("visible");
    return;
  }

  noRes.classList.remove("visible");

  grid.innerHTML = filtered.map((cat, i) => `
    <a class="card" href="${GITHUB_BASE}${cat.slug}/" target="_blank" rel="noopener"
       style="animation-delay:${i * 40}ms">
      <div class="card-head">
        <div class="card-icon">${cat.icon}</div>
        <div class="card-name">${cat.name}</div>
        <div class="card-badge">10 Tools</div>
      </div>
      <div class="card-desc">${cat.description}</div>
      <div class="card-divider"></div>
      <div class="card-picks">
        <div class="pick-row">
          <span class="pick-tag free">Free</span>
          <span class="pick-name">${cat.freePick}</span>
        </div>
        <div class="pick-row">
          <span class="pick-tag paid">Paid</span>
          <span class="pick-name">${cat.paidPick}</span>
        </div>
      </div>
    </a>
  `).join("");

  grid.querySelectorAll(".card").forEach(addTilt);
}

function resetFilters() {
  activeFilters = { pricing: "all", role: "all", skill: "all" };
  searchQuery = "";
  document.getElementById("search").value = "";
  document.querySelectorAll(".pill").forEach(p => {
    p.classList.toggle("active", p.dataset.value === "all");
  });
  render();
}

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  render();

  /* Filter pills */
  document.querySelectorAll(".pill").forEach(btn => {
    addRipple(btn);
    btn.addEventListener("click", () => {
      const group = btn.dataset.group;
      document.querySelectorAll(`.pill[data-group="${group}"]`).forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilters[group] = btn.dataset.value;
      render();
    });
  });

  /* Search */
  let timer;
  document.getElementById("search").addEventListener("input", e => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      searchQuery = e.target.value.trim();
      render();
    }, 150);
  });
});
