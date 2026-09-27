/* ============================================================
   Verde Vita Jardinería — Interacciones
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Navbar scroll effect ---------- */
  const navbar = document.querySelector('.navbar');
  const handleScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else                    navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ---------- Active nav link (based on current URL) ---------- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;
    if (href === currentPath) link.classList.add('active');
    if (currentPath === '' && href === 'index.html') link.classList.add('active');
  });

  /* ---------- Close mobile menu on click ---------- */
  const navCollapse = document.getElementById('mainNav');
  if (navCollapse) {
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992 && navCollapse.classList.contains('show')) {
          new bootstrap.Collapse(navCollapse).hide();
        }
      });
    });
  }

  /* ---------- Smooth scroll for in-page anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      if (targetId.length < 2) return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ---------- Reveal on scroll (IntersectionObserver) ---------- */
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
    revealItems.forEach(el => io.observe(el));
  } else {
    revealItems.forEach(el => el.classList.add('visible'));
  }

  /* ---------- Counters animation ---------- */
  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length && 'IntersectionObserver' in window) {
    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.counter, 10);
        const duration = 1800;
        const start = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target).toLocaleString('es-CL');
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target.toLocaleString('es-CL');
        };
        requestAnimationFrame(step);
        counterIO.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => counterIO.observe(c));
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Back to top ---------- */
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) backToTop.classList.add('show');
      else                       backToTop.classList.remove('show');
    }, { passive: true });
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Contact form ---------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (!contactForm.checkValidity()) {
        contactForm.classList.add('was-validated');
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Enviando...';

      setTimeout(() => {
        const modal = document.getElementById('successModal');
        if (modal) new bootstrap.Modal(modal).show();
        contactForm.reset();
        contactForm.classList.remove('was-validated');
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 1100);
    });
  }

  /* ---------- Service modal (servicios.html) ---------- */
  const serviceModal = document.getElementById('serviceModal');
  if (serviceModal) {
    serviceModal.addEventListener('show.bs.modal', (event) => {
      const trigger = event.relatedTarget;
      const id = trigger.getAttribute('data-service');
      const svc = SERVICIOS.find(s => s.id === id);
      if (!svc) return;

      serviceModal.querySelector('.modal-img').src = svc.imagen;
      serviceModal.querySelector('.modal-img').alt = svc.nombre;
      serviceModal.querySelector('.modal-title').textContent = svc.nombre;
      serviceModal.querySelector('.modal-body p').textContent = svc.descripcion;

      const iconEl = serviceModal.querySelector('.modal-icon');
      iconEl.className = 'modal-icon bi ' + svc.icono;

      const priceEl = serviceModal.querySelector('.modal-price');
      if (svc.precioDesde > 0) {
        priceEl.innerHTML = '<small>Desde</small> $' + svc.precioDesde.toLocaleString('es-CL') + ' <small>CLP</small>';
        priceEl.style.display = 'block';
      } else {
        priceEl.innerHTML = '<small>Precio variable según producto</small>';
        priceEl.style.display = 'block';
      }
    });
  }

  /* ---------- Mark active FAQ item on open ---------- */
  document.querySelectorAll('.accordion-button').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      if (item) {
        document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active-faq'));
        if (btn.classList.contains('collapsed')) item.classList.add('active-faq');
      }
    });
  });

  /* ---------- Render team (sobre-nosotros.html) ---------- */
  const teamRow = document.getElementById('teamRow');
  if (teamRow && typeof EQUIPO !== 'undefined') {
    teamRow.innerHTML = EQUIPO.map((p, i) => `
      <div class="col-md-6 col-lg-3 reveal reveal-delay-${(i % 3) + 1}">
        <div class="team-card">
          <div class="img-wrap">
            <img src="${p.foto}" alt="${p.nombre}" loading="lazy" />
          </div>
          <div class="card-body">
            <h5 class="card-title">${p.nombre}</h5>
            <span class="badge rounded-pill">${p.cargo}</span>
            <p class="text-muted small mb-1"><strong>${p.especialidad}</strong></p>
            <p class="text-muted small mb-0">${p.bio}</p>
          </div>
        </div>
      </div>
    `).join('');

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll('#teamRow .reveal:not(.visible)').forEach(el => io.observe(el));
    }
  }

  /* ---------- Render timeline (sobre-nosotros.html) ---------- */
  const timelineRow = document.getElementById('timelineRow');
  if (timelineRow && typeof HISTORIA !== 'undefined') {
    timelineRow.innerHTML = HISTORIA.map((h, i) => `
      <div class="timeline-item reveal reveal-delay-${(i % 3) + 1}">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <span class="year">${h.año}</span>
          <h4 class="mt-2 mb-2">${h.titulo}</h4>
          <p class="text-muted mb-0">${h.descripcion}</p>
        </div>
      </div>
    `).join('');

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll('#timelineRow .reveal:not(.visible)').forEach(el => io.observe(el));
    }
  }

  /* ---------- Render valores (sobre-nosotros.html / index.html) ---------- */
  const valoresRow = document.getElementById('valoresRow');
  if (valoresRow && typeof VALORES !== 'undefined') {
    valoresRow.innerHTML = VALORES.map((v, i) => `
      <div class="col-md-6 col-lg-3 reveal reveal-delay-${(i % 3) + 1}">
        <div class="feature-card">
          <div class="icon-box"><i class="bi ${v.icono}"></i></div>
          <h4>${v.titulo}</h4>
          <p class="text-muted small mb-0">${v.descripcion}</p>
        </div>
      </div>
    `).join('');

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll('#valoresRow .reveal:not(.visible)').forEach(el => io.observe(el));
    }
  }

  /* ---------- Render proceso (servicios.html) ---------- */
  const procesoRow = document.getElementById('procesoRow');
  if (procesoRow && typeof PROCESO !== 'undefined') {
    procesoRow.innerHTML = PROCESO.map((p, i) => `
      <div class="col-md-6 col-lg-3 reveal reveal-delay-${i+1}">
        <div class="process-card">
          <div class="step-number">${p.paso}</div>
          <div class="process-icon"><i class="bi ${p.icono}"></i></div>
          <h4>${p.titulo}</h4>
          <p class="text-muted small mb-0">${p.descripcion}</p>
        </div>
      </div>
    `).join('');

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll('#procesoRow .reveal:not(.visible)').forEach(el => io.observe(el));
    }
  }

  /* ---------- Render planes (precios.html) ---------- */
  const planesRow = document.getElementById('planesRow');
  if (planesRow && typeof PLANES !== 'undefined') {
    planesRow.innerHTML = PLANES.map((p, i) => `
      <div class="col-md-4 reveal reveal-delay-${i+1}">
        <div class="pricing-card ${p.destacado ? 'featured' : ''}">
          ${p.destacado ? '<span class="badge-featured">MÁS POPULAR</span>' : ''}
          <h3>${p.nombre}</h3>
          <div class="price">
            $${p.precio.toLocaleString('es-CL')}
            <small>/ ${p.periodo}</small>
          </div>
          <p class="text-muted">${p.incluye.length} beneficios incluidos</p>
          <ul>
            ${p.incluye.map(item => `<li><i class="bi bi-check-circle-fill"></i>${item}</li>`).join('')}
          </ul>
          <a href="contacto.html" class="btn btn-${p.color} w-100 mt-3">
            <i class="bi bi-chat-dots me-2"></i>Solicitar este plan
          </a>
        </div>
      </div>
    `).join('');

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll('#planesRow .reveal:not(.visible)').forEach(el => io.observe(el));
    }
  }

  /* ---------- Render precios tabla (precios.html) ---------- */
  const preciosRow = document.getElementById('preciosRow');
  if (preciosRow && typeof PRECIOS_TABLA !== 'undefined') {
    preciosRow.innerHTML = PRECIOS_TABLA.map((cat, i) => `
      <div class="col-md-6 reveal reveal-delay-${(i % 3) + 1}">
        <div class="price-table">
          <h5><i class="bi bi-tag-fill me-2"></i>${cat.categoria}</h5>
          <table class="table mb-0">
            <tbody>
              ${cat.items.map(item => `
                <tr>
                  <td>${item.nombre}</td>
                  <td class="price-cell">${item.precio}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `).join('');

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll('#preciosRow .reveal:not(.visible)').forEach(el => io.observe(el));
    }
  }

  /* ---------- Render FAQ ---------- */
  const renderFAQ = (selector, data) => {
    const container = document.querySelector(selector);
    if (container && Array.isArray(data)) {
      container.innerHTML = data.map((f, i) => `
        <div class="accordion-item rounded-3 mb-2 border">
          <h2 class="accordion-header">
            <button class="accordion-button ${i !== 0 ? 'collapsed' : ''} rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#faq-${selector.replace('#','')}-${i}">
              <i class="bi bi-question-circle-fill text-primary me-2"></i>${f.pregunta}
            </button>
          </h2>
          <div id="faq-${selector.replace('#','')}-${i}" class="accordion-collapse collapse ${i === 0 ? 'show' : ''}" data-bs-parent="${selector}">
            <div class="accordion-body text-muted">${f.respuesta}</div>
          </div>
        </div>
      `).join('');
    }
  };

  if (typeof FAQ !== 'undefined') {
    const faqAccordion = document.getElementById('faqAccordion');
    if (faqAccordion) renderFAQ('#faqAccordion', FAQ);

    const contactFaq = document.getElementById('contactFaqAccordion');
    if (contactFaq) {
      contactFaq.innerHTML = FAQ.slice(0, 4).map((f, i) => `
        <div class="accordion-item rounded-3 mb-2 border">
          <h2 class="accordion-header">
            <button class="accordion-button ${i !== 0 ? 'collapsed' : ''} rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#cfaq-${i}">
              <i class="bi bi-question-circle-fill text-primary me-2"></i>${f.pregunta}
            </button>
          </h2>
          <div id="cfaq-${i}" class="accordion-collapse collapse ${i === 0 ? 'show' : ''}" data-bs-parent="#contactFaqAccordion">
            <div class="accordion-body text-muted">${f.respuesta}</div>
          </div>
        </div>
      `).join('');
    }
  }

  /* ---------- Set min date to today (contact form) ---------- */
  const fechaInput = document.getElementById('fecha');
  if (fechaInput) {
    const today = new Date().toISOString().split('T')[0];
    fechaInput.min = today;
  }

  /* ---------- Re-observe newly-rendered reveal elements ---------- */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => io.observe(el));
  }
})();
