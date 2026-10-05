
// ==================== script part 1 ====================

  // ----- menu overlay -----
  const btn = document.getElementById('menuBtn');
  const overlay = document.getElementById('overlay');
  const label = document.getElementById('menuLabel');
  function setMenu(open) {
    overlay.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    label.textContent = open ? 'Close' : 'Menu';
    document.body.classList.toggle('locked', open);
  }
  btn.addEventListener('click', () => setMenu(!overlay.classList.contains('open')));
  overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  // ----- draggable stickers -----
  const hero = document.getElementById('home');
  let z = 10;
  document.querySelectorAll('.sticker').forEach(el => {
    let dragging = false, ox = 0, oy = 0;
    el.addEventListener('pointerdown', e => {
      dragging = true;
      el.setPointerCapture(e.pointerId);
      const r = el.getBoundingClientRect();
      ox = e.clientX - r.left; oy = e.clientY - r.top;
      el.style.zIndex = ++z;
      el.classList.add('drag');
    });
    el.addEventListener('pointermove', e => {
      if (!dragging) return;
      const p = hero.getBoundingClientRect();
      let x = e.clientX - p.left - ox;
      let y = e.clientY - p.top - oy;
      x = Math.max(0, Math.min(x, p.width - el.offsetWidth));
      y = Math.max(0, Math.min(y, p.height - el.offsetHeight));
      el.style.left = x + 'px'; el.style.top = y + 'px';
      el.style.right = 'auto'; el.style.marginLeft = '0';
    });
    const stop = () => { dragging = false; el.classList.remove('drag'); };
    el.addEventListener('pointerup', stop);
    el.addEventListener('pointercancel', stop);
  });

  // ----- photo: show the real image once a src is set, otherwise keep the initials -----
  document.querySelectorAll('.s-photo, .c-photo').forEach(box => {
    const img = box.querySelector('.portrait');
    const ini = box.querySelector('.initials');
    if (img && img.getAttribute('src')) {
      img.style.display = 'block';
      if (ini) ini.style.display = 'none';
    }
  });

// ==================== script part 2 ====================

  document.documentElement.classList.add('js');
 
  // reveal once when About scrolls into view, count up the numbers
  const about = document.querySelector('.about');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function countUp() {
    document.querySelectorAll('[data-count]').forEach(el => {
      const end = +el.dataset.count, suffix = end >= 10 ? '+' : '+';
      if (reduce) { el.textContent = end + suffix; return; }
      const start = performance.now(), dur = 1200;
      (function step(t) {
        const p = Math.min((t - start) / dur, 1);
        el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + (p === 1 ? suffix : '');
        if (p < 1) requestAnimationFrame(step);
      })(start);
    });
  }
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries, obs) => {
      if (entries[0].isIntersecting) { about.classList.add('in'); countUp(); obs.disconnect(); }
    }, { threshold: 0.15 }).observe(about);
  } else { about.classList.add('in'); countUp(); }
 
// ==================== script part 3 ====================

  /* =====================================================
     ADD YOUR PROJECTS HERE
     To add a new project, copy one { ... }, paste it in
     the list, and change the details.
 
     image : path to your website screenshot (example: "images/shop.jpg")
             Put your images in a folder called "images" next to this file.
             If the image is missing, a placeholder shows instead.
     live  : link to the live website ("" hides the button)
     code  : link to the code on GitHub ("" hides the button)
     featured : true adds a "Featured project" badge
     ===================================================== */
  const projects = [
    {
      title: "CT World School",
      year: "2026",
      description: "A modern, responsive school website showcasing academics, campus life, and achievements.",
      tags: ["PHP", "HTML", "CSS", "JavaScript"],
      image: "images/ctworld.png",
      live: "https://ctworld.in/"
     
    },
    {
      title: "CT Public School",
      year: "2026",
      description: "A modern, responsive school website showcasing academics, achievements, facilities, and student life.",
       tags: ["PHP", "HTML", "CSS", "JavaScript"],
      image: "images/ctpublic.png",
      live: "https://ctpublicschooljal.com/"
    
    },
     {
      title: "CT World School - Blogs Admin Panel",
      year: "2026",
      description: "A modern, responsive school website showcasing academics, achievements, facilities, and student life.",
       tags: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
      image: "images/blogs.png",
      
    
    },
    {
      title: "CTIAP",
      year: "2026",
      description: "A modern institute website showcasing programs, campus life, facilities, and student opportunities.",
        tags: ["PHP", "HTML", "CSS", "JavaScript"],
      image: "images/ctiap.png",
      live: "https://ctiap.com/",
      
    },
    
    {
      title: "CT Group Of Institutions - Maqsudan Campus Admission Landing Page",
      year: "2026",
     description: "A focused admission landing page designed to highlight programs, facilities, and admission opportunities.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "images/apply.png",
      live: "https://apply.ctgroup.in/",
      code: ""
    },
    {
      title: "CT Group Of Institutions - Shahpur Campus  Management Admission Landing Page",
      year: "2026",
      description: "A modern management department landing page showcasing programs, campus facilities, and career opportunities.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "images/managemnt.png",
      live: "https://enroll.ctgroup.in/management/",
     
    },
    {
      title: "CT Group Of Institutions - Shahpur Campus  Vocational Admission Landing Page",
      year: "2026",
      description: "A modern vocational department landing page showcasing programs, campus facilities, and career opportunities.",
     tags: ["HTML", "CSS", "JavaScript"],
      image: "images/vocational.png",
      live: "https://enroll.ctgroup.in/vocational/",
     
    },
    {
      title: "CTIHS- Senior Secondary Wing",
      year: "2026",
      description: "A modern vocational department landing page showcasing programs, campus facilities, and career opportunities.",
      tags: ["PHP", "HTML", "CSS", "JavaScript"],
      image: "images/ssw.png",
      live: "https://collegiate.ctgroup.in/",
     
    },
     {
      title: "CTIHS",
      year: "2025",
     description: "A modern institute website highlighting academics, programs, facilities, and student opportunities.",
      tags: ["PHP", "HTML", "CSS", "JavaScript"],
      image: "images/ctihs.png",
      live: "https://ctihs.in/",
     
    },
     {
      title: "MKCE",
      year: "2025",
     description: "A modern institute website highlighting academics, programs, facilities, and student opportunities.",
      tags: ["PHP", "HTML", "CSS", "JavaScript"],
      image: "images/mkce.png",
      live: "https://mkce.in/",
     
    },
    {
      title: "CTCP",
      year: "2025",
     description: "A modern institute website highlighting academics, programs, facilities, and student opportunities.",
      tags: ["PHP", "HTML", "CSS", "JavaScript"],
      image: "images/ctcp.png",
      live: "https://ctcp.in/"
     
    },
     {
      title: "CTIHM",
      year: "2025",
     description: "A modern institute website highlighting academics, programs, facilities, and student opportunities.",
      tags: ["PHP", "HTML", "CSS", "JavaScript"],
      image: "images/ctihm.png",
      live: "https://ctihm.in/"
     
    },
    {
      title: "CTIEMT",
      year: "2025",
     description: "A modern institute website highlighting academics, programs, facilities, and student opportunities.",
      tags: ["PHP", "HTML", "CSS", "JavaScript"],
      image: "images/ctiemt.png",
      live: "https://ctiemt.edu.in/"
     
    },
    {
      title: "CTIT",
      year: "2025",
     description: "A modern institute website highlighting academics, programs, facilities, and student opportunities.",
      tags: ["PHP", "HTML", "CSS", "JavaScript"],
      image: "images/ctit.png",
      live: "https://ctit.in/"
     
    }

  ];
 
  /* ---------- you don't need to edit below this line ---------- */
  const track = document.getElementById('track');
  const arrow = '<svg viewBox="0 0 24 24"><path d="M7 17L17 7M8 7h9v9"/></svg>';
  const codeIcon = '<svg viewBox="0 0 24 24"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5"/></svg>';
  const pad = n => String(n).padStart(2, '0');
 
  const mock = title => `<div class="mock" aria-hidden="true">
           <div class="dots"><i></i><i></i><i></i></div>
           <div class="ln w1"></div><div class="ln w2"></div><div class="ln w3"></div><div class="ln blk"></div>
           <span class="letter">${title.charAt(0)}</span>
         </div>`;
 
  function thumb(p, i) {
    const inner = p.image
      ? `<img src="${p.image}" alt="Screenshot of the ${p.title} website" loading="lazy" data-title="${p.title}">`
      : mock(p.title);
    const cls = `thumb c${i % 5}`;
    return p.live
      ? `<a class="${cls}" href="${p.live}" target="_blank" rel="noopener" aria-label="Open ${p.title} (opens in a new tab)">${inner}<span class="visit">View live ↗</span></a>`
      : `<div class="${cls}">${inner}</div>`;
  }
 
  function card(p, i) {
    const badge = p.featured ? '<span class="badge"><i></i>Featured project</span>' : '';
    const live = p.live ? `<a class="link link-main" href="${p.live}" target="_blank" rel="noopener">Live ${arrow}</a>` : '';
    const code = p.code ? `<a class="link link-alt" href="${p.code}" target="_blank" rel="noopener">${codeIcon} Code</a>` : '';
    return `
      <article class="project">
        ${thumb(p, i)}
        <div class="info">
          ${badge}
          <div class="meta"><b>${pad(i + 1)} / ${pad(projects.length)}</b><span>${p.year}</span></div>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <ul class="tags">${p.tags.map(t => `<li>${t}</li>`).join('')}</ul>
          <div class="links">${live}${code}</div>
        </div>
      </article>`;
  }
 
  track.innerHTML = projects.map(card).join('');
 
  // if an image file can't be found, show the placeholder instead of a broken icon
  track.querySelectorAll('.thumb img').forEach(img => {
    img.addEventListener('error', () => img.replaceWith(Object.assign(document.createElement('div'), { innerHTML: mock(img.dataset.title) }).firstElementChild));
  });
 
  /* ---------- slider: one card per slide, arrows + dots, auto-advance ---------- */
  const view = document.getElementById('pview');
  const dots = document.getElementById('pDots');
  const prev = document.getElementById('pPrev');
  const next = document.getElementById('pNext');
  const noMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const total = projects.length;
  const HOLD = 5000;                        // ms each slide stays up
  let index = 0, timer = 0, held = false;
 
  dots.innerHTML = projects
    .map((p, i) => `<button type="button" data-i="${i}" aria-label="Show ${p.title}"></button>`)
    .join('');
 
  function show(i) {
    index = (i + total) % total;
    track.style.transform = `translate3d(${-index * 100}%, 0, 0)`;
    [...dots.children].forEach((d, n) => d.setAttribute('aria-current', n === index ? 'true' : 'false'));
    [...track.children].forEach((c, n) => c.setAttribute('aria-hidden', n === index ? 'false' : 'true'));
  }
 
  // focusable links inside a hidden slide must not be tab-reachable
  function tabGuard() {
    [...track.children].forEach((c, n) => {
      const off = n !== index;
      c.querySelectorAll('a, button').forEach(el => el.tabIndex = off ? -1 : 0);
    });
  }
 
  function go(i, manual) {
    show(i);
    tabGuard();
    if (manual !== false) restart();
  }
  const step = d => go(index + d);
 
  function play() {
    if (noMotion || held || total < 2) return;
    halt();
    timer = setInterval(() => step(1), HOLD);
  }
  function halt() { clearInterval(timer); timer = 0; }
  function restart() { halt(); play(); }
  function hold() { held = true; halt(); }
  function release() { held = false; restart(); }
 
  prev.addEventListener('click', () => step(-1));
  next.addEventListener('click', () => step(1));
  dots.addEventListener('click', e => {
    const d = e.target.closest('button');
    if (d) go(Number(d.dataset.i));
  });
 
  // keyboard + swipe
  view.tabIndex = 0;
  view.setAttribute('role', 'group');
  view.setAttribute('aria-roledescription', 'carousel');
  view.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
  });
  let sx = 0, sy = 0, swiping = false;
  view.addEventListener('pointerdown', e => { swiping = true; sx = e.clientX; sy = e.clientY; hold(); });
  view.addEventListener('pointerup', e => {
    if (!swiping) return;
    swiping = false;
    const dx = e.clientX - sx, dy = e.clientY - sy;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
    release();
  });
  view.addEventListener('pointercancel', release);
 
  // pause while the section is being read or the tab is in the background
  const section = document.getElementById('projects');
  ['pointerenter', 'focusin'].forEach(e => section.addEventListener(e, hold));
  ['pointerleave', 'focusout'].forEach(e => section.addEventListener(e, e => { if (!section.contains(e.relatedTarget)) release(); }));
  document.addEventListener('visibilitychange', () => document.hidden ? hold() : release());
 
  prev.disabled = next.disabled = total < 2;
  go(0, false);

// ==================== script part 4 ====================

  const tkTabs = [...document.querySelectorAll('.tk-tab')];
  const tkStage = document.getElementById('stage');
  const tkCorner = document.getElementById('corner');
  const tkNav = document.querySelector('.tk-nav');
  const tkCounts = { skills: '07', tech: '08', tools: '13' };

  // on narrow screens the tabs are a horizontal scroller: keep the chosen one in view
  function tkRevealTab(tab) {
    if (!tkNav || tkNav.scrollWidth <= tkNav.clientWidth) return;
    const left = tab.offsetLeft - (tkNav.clientWidth - tab.offsetWidth) / 2;
    tkNav.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
  }
 
  function tkOpen(name, focus) {
    tkTabs.forEach(t => {
      const on = t.dataset.tab === name;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      if (on && focus) t.focus();
      if (on) tkRevealTab(t);
    });
    document.querySelectorAll('.tk-pane').forEach(p => {
      const on = p.id === 'pane-' + name;
      p.hidden = !on;
      p.classList.remove('play');
      if (on) { void p.offsetWidth; p.classList.add('play'); }
    });
    tkStage.dataset.tab = name;
    tkCorner.textContent = tkCounts[name];
  }
 
  tkTabs.forEach((t, i) => {
    t.addEventListener('click', () => tkOpen(t.dataset.tab));
    t.addEventListener('keydown', e => {
      const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
      if (!(e.key in keys)) return;
      e.preventDefault();
      tkOpen(tkTabs[(i + keys[e.key] + tkTabs.length) % tkTabs.length].dataset.tab, true);
    });
  });
 /* ---------- SETTINGS ---------- */
  const CT_EMAIL = "you@example.com";   // where messages are sent (opens your email app)
  const CT_ENDPOINT = "api/contact.php"; // saves messages in your MySQL database (see portfolio-admin)
                                        // Set to "" to open the visitor's email app instead.

  const ctForm = document.getElementById('ctForm');
  const ctBox = document.getElementById('ctMsgBox');
  const ctSend = document.getElementById('ctSend');
  const ctSendText = document.getElementById('ctSendText');
  document.getElementById('ctYear').textContent = new Date().getFullYear();

  function ctShow(type, text) { ctBox.className = 'ct-msg ' + type; ctBox.textContent = text; }

  ctForm.addEventListener('submit', async e => {
    e.preventDefault();
    ctBox.className = 'ct-msg';
    const d = Object.fromEntries(new FormData(ctForm));

    if (!d.name.trim() || !/^\S+@\S+\.\S+$/.test(d.email) || !d.message.trim()) {
      ctShow('err', 'Please fill in your name, a valid email, and your message.');
      return;
    }

    if (CT_ENDPOINT) {
      ctSend.disabled = true; ctSendText.textContent = 'Sending…';
      try {
        const res = await fetch(CT_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(d) });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || !data.ok) {
          ctShow('err', data.error || 'Something went wrong. Please email me directly at ' + CT_EMAIL + '.');
        } else {
          ctForm.reset();
          ctShow('ok', 'Thank you! Your message was sent. I will reply soon.');
        }
      } catch {
        ctShow('err', 'Could not reach the server. Please email me directly at ' + CT_EMAIL + '.');
      }
      ctSend.disabled = false; ctSendText.textContent = 'Send message';
    } else {
      const subject = encodeURIComponent(`${d.service} – message from ${d.name}`);
      const body = encodeURIComponent(`Name: ${d.name}\nEmail: ${d.email}\nNeed: ${d.service}\n\n${d.message}`);
      window.location.href = `mailto:${CT_EMAIL}?subject=${subject}&body=${body}`;
      ctShow('ok', 'Your email app should open with the message ready to send.');
    }
  });