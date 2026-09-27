/* ============================================================
   Verde Vita Jardinería — Galería + Lightbox + Filtros
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Render gallery filters ---------- */
  const filtersContainer = document.getElementById('galleryFilters');
  if (filtersContainer && typeof CATEGORIAS_GALERIA !== 'undefined') {
    filtersContainer.innerHTML = CATEGORIAS_GALERIA.map((cat, i) => `
      <button class="gallery-filter-btn ${i === 0 ? 'active' : ''}" data-filter="${cat}">${cat}</button>
    `).join('');
  }

  /* ---------- Render gallery grid ---------- */
  const grid = document.getElementById('galleryGrid');
  if (grid && typeof GALERIA !== 'undefined') {
    grid.innerHTML = GALERIA.map((g, i) => `
      <div class="col-md-6 col-lg-4 reveal reveal-delay-${(i % 3) + 1}">
        <div class="gallery-item" data-category="${g.categoria}" data-index="${i}" data-bs-toggle="modal" data-bs-target="#lightboxModal">
          <img src="${g.imagen}" alt="${g.titulo}" loading="lazy" />
          <div class="overlay">
            <span><i class="bi bi-tag-fill me-1"></i>${g.categoria}</span>
            <h5>${g.titulo}</h5>
          </div>
          <div class="zoom-icon"><i class="bi bi-arrows-fullscreen"></i></div>
        </div>
      </div>
    `).join('');

    /* Filter behavior */
    document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        document.querySelectorAll('.gallery-item').forEach(item => {
          const cat = item.dataset.category;
          if (filter === 'Todos' || cat === filter) {
            item.parentElement.style.display = '';
            setTimeout(() => {
              item.parentElement.classList.remove('reveal');
              item.parentElement.style.opacity = '0';
              requestAnimationFrame(() => {
                item.parentElement.style.transition = 'opacity .35s ease';
                item.parentElement.style.opacity = '1';
              });
            }, 10);
          } else {
            item.parentElement.style.display = 'none';
          }
        });
      });
    });

    /* Lightbox content population */
    const lightboxModal = document.getElementById('lightboxModal');
    if (lightboxModal) {
      lightboxModal.addEventListener('show.bs.modal', (event) => {
        const trigger = event.relatedTarget;
        const index = parseInt(trigger.dataset.index, 10);
        const item = GALERIA[index];
        if (!item) return;

        lightboxModal.querySelector('.lightbox-img').src = item.imagen;
        lightboxModal.querySelector('.lightbox-img').alt = item.titulo;
        lightboxModal.querySelector('.lightbox-category').innerHTML = `<i class="bi bi-tag-fill me-1"></i>${item.categoria}`;
        lightboxModal.querySelector('.lightbox-title').textContent = item.titulo;
        lightboxModal.querySelector('.lightbox-desc').textContent = item.descripcion;

        const prevBtn = lightboxModal.querySelector('.lightbox-prev');
        const nextBtn = lightboxModal.querySelector('.lightbox-next');

        const show = (newIndex) => {
          const safeIndex = (newIndex + GALERIA.length) % GALERIA.length;
          const newItem = GALERIA[safeIndex];
          lightboxModal.querySelector('.lightbox-img').src = newItem.imagen;
          lightboxModal.querySelector('.lightbox-img').alt = newItem.titulo;
          lightboxModal.querySelector('.lightbox-category').innerHTML = `<i class="bi bi-tag-fill me-1"></i>${newItem.categoria}`;
          lightboxModal.querySelector('.lightbox-title').textContent = newItem.titulo;
          lightboxModal.querySelector('.lightbox-desc').textContent = newItem.descripcion;
          lightboxModal.querySelector('.lightbox-counter').textContent = `${safeIndex + 1} / ${GALERIA.length}`;
          trigger.dataset.index = safeIndex;
        };

        prevBtn.onclick = () => show(index - 1);
        nextBtn.onclick = () => show(index + 1);
        lightboxModal.querySelector('.lightbox-counter').textContent = `${index + 1} / ${GALERIA.length}`;

        /* Keyboard navigation */
        const keyHandler = (e) => {
          if (e.key === 'ArrowLeft')  show(parseInt(lightboxModal.querySelector('.lightbox-img').alt === item.titulo ? index : trigger.dataset.index, 10) - 1);
          if (e.key === 'ArrowRight') show(parseInt(lightboxModal.querySelector('.lightbox-img').alt === item.titulo ? index : trigger.dataset.index, 10) + 1);
          if (e.key === 'Escape') {
            const modalInstance = bootstrap.Modal.getInstance(lightboxModal);
            if (modalInstance) modalInstance.hide();
          }
        };
        document.addEventListener('keydown', keyHandler);
        lightboxModal.addEventListener('hidden.bs.modal', () => {
          document.removeEventListener('keydown', keyHandler);
        }, { once: true });
      });
    }

    /* Reveal observer for dynamically rendered items */
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll('#galleryGrid .reveal:not(.visible)').forEach(el => io.observe(el));
    }
  }
})();
