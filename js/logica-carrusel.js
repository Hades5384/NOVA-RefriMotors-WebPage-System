// logica-carrusel.js — NOVA RefriMotors
// Lógica de Pestañas (Tabs), Autoplay Inteligente, Barra de Progreso en Tiempo Real,
// Desplazamiento Táctil/Ratón (Drag-to-Scroll), Inclinación 3D y Navegación por Teclado

let currentActiveInterval = null;

// ==========================================
// 1. CAMBIO DE MARCA INTERACTIVO
// ==========================================
function showBrand(brandName, btnElement) {
    // 1. Quitar la clase 'active' de todos los botones de marcas
    const tabs = document.querySelectorAll('.brand-tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // 2. Añadir la clase 'active' al botón presionado y auto-centrarlo en vista móvil
    if (btnElement) {
        btnElement.classList.add('active');
        if (typeof btnElement.scrollIntoView === 'function') {
            btnElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    }

    // Actualizar hash de URL para enlaces directos y favoritos
    if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', '#' + brandName);
    }

    // 3. Ocultar todos los carruseles y quitar clase activa
    const carousels = document.querySelectorAll('.carousel-bg-card');
    carousels.forEach(c => {
        c.style.display = 'none';
        c.classList.remove('active-brand');
    });

    // 4. Mostrar el carrusel seleccionado con display flex nativo
    const targetCarousel = document.getElementById('brand-' + brandName);
    if (!targetCarousel) return;

    targetCarousel.style.display = 'flex';
    targetCarousel.classList.add('active-brand');

    // 5. Carga Perezosa de imágenes (data-src -> src)
    const lazyImages = targetCarousel.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
        const dataSrc = img.getAttribute('data-src');
        if (dataSrc) {
            img.onerror = function () {
                this.onerror = null;
                this.src = 'productos/NO_PHOTO.webp';
            };
            img.src = dataSrc;
            img.removeAttribute('data-src');
        }
    });

    // 6. Actualizar barra de progreso y contador
    const track = targetCarousel.querySelector('.carousel-track');
    const fillEl = targetCarousel.querySelector('.carousel-progress-fill');
    const counterEl = targetCarousel.querySelector('.carousel-counter');
    if (track && fillEl) {
        updateProgress(track, fillEl, counterEl);
    }

    // 7. Activar AutoPlay en la marca visible
    initAutoPlayForCard(targetCarousel);
}

// ==========================================
// 2. AUTOPLAY INTELIGENTE CON PAUSA AL HOVER
// ==========================================
function initAutoPlayForCard(carouselCard) {
    if (currentActiveInterval) {
        clearInterval(currentActiveInterval);
        currentActiveInterval = null;
    }
    if (!carouselCard) return;

    const track = carouselCard.querySelector('.carousel-track');
    if (!track) return;

    function nextSlide() {
        const slideWidth = 340;
        if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 15) {
            track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            track.scrollBy({ left: slideWidth, behavior: 'smooth' });
        }
    }

    currentActiveInterval = setInterval(nextSlide, 4500);

    // Pausar al pasar el ratón o tocar
    track.onmouseenter = () => clearInterval(currentActiveInterval);
    track.onmouseleave = () => {
        clearInterval(currentActiveInterval);
        currentActiveInterval = setInterval(nextSlide, 4500);
    };
    track.ontouchstart = () => clearInterval(currentActiveInterval);
    track.ontouchend = () => {
        clearInterval(currentActiveInterval);
        currentActiveInterval = setInterval(nextSlide, 4500);
    };
}

// ==========================================
// 3. BARRA DE PROGRESO Y CONTADOR EN TIEMPO REAL
// ==========================================
function updateProgress(track, fillEl, counterEl) {
    if (!track || !fillEl) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const progress = maxScroll > 0 ? (track.scrollLeft / maxScroll) : 0;
    const clamped = Math.max(0, Math.min(1, progress));
    fillEl.style.width = Math.max(15, clamped * 100) + '%';

    if (counterEl) {
        const slides = track.querySelectorAll('.carousel-slide');
        const totalSlides = slides.length;
        if (totalSlides > 0) {
            const slideWidth = 340;
            const currentIndex = Math.min(
                totalSlides,
                Math.max(1, Math.round(track.scrollLeft / slideWidth) + 1)
            );
            const currentStr = currentIndex < 10 ? '0' + currentIndex : currentIndex;
            const totalStr = totalSlides < 10 ? '0' + totalSlides : totalSlides;
            counterEl.textContent = `${currentStr} / ${totalStr}`;
        }
    }
}

// ==========================================
// 4. INICIALIZACIÓN GLOBAL (DOM READY)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.carousel-bg-card');

    cards.forEach(card => {
        const wrapper = card.querySelector('.carousel-wrapper');
        const track = card.querySelector('.carousel-track');
        const prevBtn = card.querySelector('.prev-btn');
        const nextBtn = card.querySelector('.next-btn');

        if (!track || !wrapper) return;

        // Inyectar Barra de Progreso y Contador si no existen
        let progressWrap = card.querySelector('.carousel-progress-wrap');
        if (!progressWrap) {
            progressWrap = document.createElement('div');
            progressWrap.className = 'carousel-progress-wrap';
            progressWrap.innerHTML = `
                <div class="carousel-progress-bar">
                    <div class="carousel-progress-fill"></div>
                </div>
                <span class="carousel-counter">01 / 06</span>
            `;
            wrapper.insertAdjacentElement('afterend', progressWrap);
        }

        const fillEl = progressWrap.querySelector('.carousel-progress-fill');
        const counterEl = progressWrap.querySelector('.carousel-counter');

        // Escuchar evento scroll para actualizar la barra y el contador
        let ticking = false;
        track.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateProgress(track, fillEl, counterEl);
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Botón Anterior (Prev)
        if (prevBtn) {
            prevBtn.onclick = (e) => {
                e.stopPropagation();
                track.scrollBy({ left: -340, behavior: 'smooth' });
                const activeCard = document.querySelector('.carousel-bg-card.active-brand');
                initAutoPlayForCard(activeCard);
            };
        }

        // Botón Siguiente (Next)
        if (nextBtn) {
            nextBtn.onclick = (e) => {
                e.stopPropagation();
                track.scrollBy({ left: 340, behavior: 'smooth' });
                const activeCard = document.querySelector('.carousel-bg-card.active-brand');
                initAutoPlayForCard(activeCard);
            };
        }

        // ==========================================
        // ARRASTRE CINÉTICO CON RATÓN (DRAG-TO-SCROLL)
        // ==========================================
        let isDown = false;
        let startX = 0;
        let scrollStart = 0;
        let hasDragged = false;

        track.addEventListener('mousedown', (e) => {
            isDown = true;
            hasDragged = false;
            track.classList.add('is-dragging');
            startX = e.pageX - track.offsetLeft;
            scrollStart = track.scrollLeft;
        });

        window.addEventListener('mouseup', () => {
            if (!isDown) return;
            isDown = false;
            track.classList.remove('is-dragging');
            setTimeout(() => { hasDragged = false; }, 50);
        });

        track.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - track.offsetLeft;
            const walk = (x - startX) * 1.3;
            if (Math.abs(walk) > 6) {
                hasDragged = true;
            }
            track.scrollLeft = scrollStart - walk;
        });

        // Prevenir click accidental en enlaces de productos al arrastrar
        track.addEventListener('click', (e) => {
            if (hasDragged) {
                e.preventDefault();
                e.stopPropagation();
            }
        }, true);

        // ==========================================
        // EFECTO DE INCLINACIÓN 3D SUTIL EN TARJETAS
        // ==========================================
        const slides = track.querySelectorAll('.carousel-slide');
        slides.forEach(slide => {
            slide.addEventListener('mousemove', (e) => {
                if (isDown) return;
                const rect = slide.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -4.5;
                const rotateY = ((x - centerX) / centerX) * 4.5;
                slide.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px) scale3d(1.02, 1.02, 1.02)`;
            });

            slide.addEventListener('mouseleave', () => {
                slide.style.transform = '';
            });
        });

        // Actualización inicial de progreso de la tarjeta
        updateProgress(track, fillEl, counterEl);
    });

    // ==========================================
    // 5. NAVEGACIÓN GLOBAL POR FLECHAS DE TECLADO (← / →)
    // ==========================================
    window.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        const activeCard = document.querySelector('.carousel-bg-card.active-brand');
        if (!activeCard) return;

        const track = activeCard.querySelector('.carousel-track');
        if (!track) return;

        if (e.key === 'ArrowRight') {
            track.scrollBy({ left: 340, behavior: 'smooth' });
            initAutoPlayForCard(activeCard);
        } else if (e.key === 'ArrowLeft') {
            track.scrollBy({ left: -340, behavior: 'smooth' });
            initAutoPlayForCard(activeCard);
        }
    });

    // Garantizar que todas las imágenes del carrusel manejen errores suavemente
    document.querySelectorAll('.carousel-slide img').forEach(img => {
        if (!img.getAttribute('onerror')) {
            img.onerror = function () {
                this.onerror = null;
                this.src = 'productos/NO_PHOTO.webp';
            };
        }
    });

    // Iniciar con la marca de la URL (#marca) o la predeterminada (Exceline)
    function checkInitialHash() {
        const hash = window.location.hash.replace('#', '').toLowerCase();
        const hashBtn = hash ? document.querySelector(`.brand-tab.tab-${hash}`) : null;
        if (hash && hashBtn) {
            showBrand(hash, hashBtn);
        } else {
            const initialBrand = document.querySelector('.carousel-bg-card.active-brand');
            if (initialBrand) {
                initAutoPlayForCard(initialBrand);
                const initialTrack = initialBrand.querySelector('.carousel-track');
                const initialFill = initialBrand.querySelector('.carousel-progress-fill');
                const initialCounter = initialBrand.querySelector('.carousel-counter');
                if (initialTrack && initialFill) {
                    updateProgress(initialTrack, initialFill, initialCounter);
                }
            }
        }
    }

    checkInitialHash();

    // Sincronizar si el usuario navega con el historial (Atrás / Adelante)
    window.addEventListener('hashchange', () => {
        const newHash = window.location.hash.replace('#', '').toLowerCase();
        const tabBtn = newHash ? document.querySelector(`.brand-tab.tab-${newHash}`) : null;
        if (tabBtn) {
            showBrand(newHash, tabBtn);
        }
    });
});