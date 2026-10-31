// ==========================================
// 1. CONFIGURACIÓN DEL SISTEMA
// ==========================================
const TASA_BCV = 889.58;
const NUMERO_WHATSAPP = "584246192394";
const PORCENTAJE_UTILIDAD = 1.30;
const PORCENTAJE_IVA = 1.16;
const TASA_INTERNA = 1050;

// Mostrar tasa BCV en el encabezado
document.getElementById('bcv-display').innerText = `Bs. ${TASA_BCV.toFixed(2)}`;

// ============================================================================
// 2. BASE DE DATOS DE PRODUCTOS CARGADA DESDE productos.js
// (Ver productos.js para agregar, editar o revisar inventario de repuestos)
// ============================================================================
// ==========================================
// 3. VARIABLES GLOBALES Y PAGINACIÓN
// ==========================================
let currentCategory = 'Todos';
let cart = [];
let currentPage = 1;
const itemsPerPage = 20;

function resetPaginationAndFilter() {
    currentPage = 1;
    filterProducts();
    updateHash();
}

function calcularPrecios(costoCompra) {
    let precioNovaClientesUSD = costoCompra * PORCENTAJE_UTILIDAD * PORCENTAJE_IVA;
    let precioPublicoBs = precioNovaClientesUSD * TASA_INTERNA;
    let precioPublicoUSD = precioPublicoBs / TASA_BCV;
    return { novaClientesUSD: precioNovaClientesUSD, publicoBs: precioPublicoBs, publicoUSD: precioPublicoUSD };
}

function setCategory(categoryName, btnElement) {
    currentCategory = categoryName;
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    if (btnElement && btnElement.classList) {
        btnElement.classList.add('active');
    }
    currentPage = 1;
    filterProducts();
    updateHash();
}

function filterProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const filtered = products.map(prod => {
        let matchesSearch = prod.name.toLowerCase().includes(query) || prod.id.toLowerCase().includes(query) || prod.model.toLowerCase().includes(query);
        let matchingVariantIndex = -1;

        if (query !== '' && prod.variants) {
            matchingVariantIndex = prod.variants.findIndex(v => v.name.toLowerCase().includes(query) || v.id.toLowerCase().includes(query));
            if (matchingVariantIndex !== -1) {
                matchesSearch = true;
            }
        }

        const matchesCategory = (currentCategory === 'Todos') || (prod.category === currentCategory);

        if (matchesSearch && matchesCategory) {
            return { ...prod, _matchedVariantIndex: matchingVariantIndex };
        }
        return null;
    }).filter(p => p !== null);

    setupPagination(filtered);
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = filtered.slice(start, end);
    renderProducts(paginatedItems);
}

function setupPagination(filteredArray) {
    const totalPages = Math.ceil(filteredArray.length / itemsPerPage);
    const container = document.getElementById('pagination-container');
    container.innerHTML = '';
    if (totalPages <= 1) return;

    container.innerHTML += `<button class="page-btn page-arrow" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>&laquo; Ant</button>`;
    for (let i = 1; i <= totalPages; i++) {
        container.innerHTML += `<button class="page-btn ${currentPage === i ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
    }
    container.innerHTML += `<button class="page-btn page-arrow" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>Sig &raquo;</button>`;
}

function changePage(pageNumber) {
    currentPage = pageNumber;
    filterProducts();
    updateHash();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 4. RENDERIZADO DE LA GRILLA DE PRODUCTOS
// ==========================================
function renderProducts(productList) {
    const container = document.getElementById('products-container');
    if (productList.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #666;">No se encontraron repuestos con estos filtros.</p>';
        return;
    }
    let htmlContent = '';
    productList.forEach(prod => {
        const precios = calcularPrecios(prod.costoCompra);
        // Verificamos si el producto tiene imágenes guardadas. Si no, usamos NO_PHOTO
        const imgSrc = (prod.images && prod.images.length > 0) ? prod.images[0] : 'productos/NO_PHOTO.webp';

        const variantParam = (prod._matchedVariantIndex !== undefined && prod._matchedVariantIndex !== -1) ? `, ${prod._matchedVariantIndex}` : '';
        const onClk = `openQuickView('${prod.id}'${variantParam})`;

        // Creamos la etiqueta de imagen usando la variable segura que acabamos de crear
        const imgTag = `<img src="${imgSrc}" alt="${prod.name}" loading="lazy" onclick="${onClk}" onerror="this.src='productos/NO_PHOTO.webp'">`;

        // Si el producto tiene variantes (ej: la placa PUN), el botón dice "Ver Opciones"
        const btnText = prod.variants ? 'Ver Opciones' : 'Agregar al Pedido';
        const btnAction = prod.variants ? onClk : `addToCart('${prod.id}')`;

        htmlContent += `
            <div class="product-card">
                ${imgTag}
                <div class="product-code" onclick="${onClk}">CÓDIGO: ${prod.id}</div>
                <div class="product-title" onclick="${onClk}">${prod.name}</div>
                <div class="price-container" style="margin-top: auto;">
                    <div class="price-public-usd">Precio: $${precios.publicoUSD.toFixed(2)}</div>
                    <div class="price-public-bs">Ref: Bs. ${precios.publicoBs.toFixed(2)}</div>
                </div>
                <button class="add-btn" onclick="${btnAction}">${btnText}</button>
            </div>
        `;
    });
    container.innerHTML = htmlContent;
}

// ==========================================
// 5. LÓGICA DE VISTA RÁPIDA (QUICK VIEW) Y VARIANTES
// ==========================================
let currentViewedProduct = null;
let currentVariantIndex = 0;

function openQuickView(productId, autoVariantIndex = -1) {
    currentViewedProduct = products.find(p => p.id === productId);
    if (!currentViewedProduct) return;

    currentVariantIndex = (autoVariantIndex !== -1 && autoVariantIndex !== undefined) ? autoVariantIndex : 0;

    document.getElementById('qvCategory').innerText = currentViewedProduct.category;
    document.getElementById('qvTitle').innerText = currentViewedProduct.name;

    const descEl = document.getElementById('qvDesc');
    const btnEl = document.getElementById('qvReadMoreBtn');
    descEl.innerHTML = currentViewedProduct.desc;
    descEl.classList.remove('expanded');
    btnEl.innerText = 'Leer más';

    const descLength = currentViewedProduct.desc ? currentViewedProduct.desc.length : 0;
    if (descLength > 130) {
        btnEl.style.display = 'inline-block';
    } else {
        btnEl.style.display = 'none';
        descEl.classList.add('expanded');
    }

    // --- MANEJO DE VARIANTES (MEDIDAS) ---
    const variantContainer = document.getElementById('qvVariantContainer');
    const variantSelect = document.getElementById('qvVariantSelect');

    if (currentViewedProduct.variants) {
        variantContainer.style.display = 'block';
        variantSelect.innerHTML = '';
        currentViewedProduct.variants.forEach((v, index) => {
            variantSelect.innerHTML += `<option value="${index}">${v.name}</option>`;
        });

        if (currentVariantIndex >= 0 && currentVariantIndex < currentViewedProduct.variants.length) {
            variantSelect.value = currentVariantIndex;
        }

        // Al cambiar de medida en el select, actualizamos precios, código e imagen correspondiente
        variantSelect.onchange = function () {
            currentVariantIndex = parseInt(this.value);
            updateQuickViewPrices();
            updateQuickViewVariantImage();
        };
    } else {
        variantContainer.style.display = 'none';
    }

    // Actualizamos precios (con o sin variante)
    updateQuickViewPrices();

    // Especificaciones
    const specsTable = document.getElementById('qvSpecsTable');
    specsTable.innerHTML = '';
    for (const [key, value] of Object.entries(currentViewedProduct.specs)) {
        specsTable.innerHTML += `<tr><td>${key}</td><td>${value}</td></tr>`;
    }

    // Miniaturas
    const thumbContainer = document.getElementById('qvThumbnails');
    thumbContainer.innerHTML = '';
    const imagesList = (currentViewedProduct.images && currentViewedProduct.images.length > 0)
        ? currentViewedProduct.images
        : ['productos/NO_PHOTO.webp'];

    imagesList.forEach((imgUrl, idx) => {
        thumbContainer.innerHTML += `<img src="${imgUrl}" class="qv-thumb ${idx === 0 ? 'active' : ''}" onclick="changeMainImage(this.src, this)" onerror="this.style.display='none'">`;
    });

    // Actualizamos la imagen inicial del modal (según variante seleccionada o predeterminada)
    updateQuickViewVariantImage();

    // Botón Agregar al Pedido desde el Modal
    const addBtn = document.getElementById('qvAddBtn');
    addBtn.onclick = function () {
        if (currentViewedProduct.variants) {
            // Si tiene variantes, agregamos el hijo específico seleccionado
            const variant = currentViewedProduct.variants[currentVariantIndex];
            const item = {
                id: variant.id,
                name: currentViewedProduct.name + " (" + variant.name + ")",
                costoCompra: variant.costoCompra,
                images: currentViewedProduct.images
            };
            addItemToCart(item);
        } else {
            // Producto normal
            addItemToCart(currentViewedProduct);
        }
        closeQuickView();
    };

    document.getElementById('quickViewModal').classList.add('active');
    openProductInHash(productId);
}

function updateQuickViewPrices() {
    let costo = currentViewedProduct.costoCompra;
    let codigo = currentViewedProduct.id;

    // Si tiene variantes, obtenemos el costo y el código de la variante seleccionada
    if (currentViewedProduct.variants) {
        costo = currentViewedProduct.variants[currentVariantIndex].costoCompra;
        codigo = currentViewedProduct.variants[currentVariantIndex].id;
    }

    document.getElementById('qvCode').innerText = `CÓDIGO: ${codigo}`;

    const precios = calcularPrecios(costo);
    document.getElementById('qvPrice').innerText = `Precio: $${precios.publicoUSD.toFixed(2)}`;
    document.getElementById('qvPriceVes').innerText = `Ref: Bs. ${precios.publicoBs.toFixed(2)}`;
    document.getElementById('qvPriceNova').innerText = `$${precios.novaClientesUSD.toFixed(2)}`;
}

// Utilidades del Modal
function openZoom() {
    const currentImgSrc = document.getElementById('qvMainImg').src;
    document.getElementById('zoomImg').src = currentImgSrc;
    document.getElementById('zoomOverlay').classList.add('active');
}

function closeZoom(event) {
    if (!event || event.target.id === 'zoomOverlay' || (event.target.closest && event.target.closest('.close-zoom'))) {
        document.getElementById('zoomOverlay').classList.remove('active');
    }
}

function toggleDescription() {
    const descEl = document.getElementById('qvDesc');
    const btnEl = document.getElementById('qvReadMoreBtn');
    descEl.classList.toggle('expanded');
    if (descEl.classList.contains('expanded')) {
        btnEl.innerText = 'Ocultar descripción';
    } else {
        btnEl.innerText = 'Leer más';
    }
}

function findVariantImage(variantId) {
    if (!currentViewedProduct) return null;
    const defaultList = currentViewedProduct.images || [];
    if (!variantId) return defaultList[0] || 'productos/NO_PHOTO.webp';

    const cleanCode = variantId.trim().toUpperCase();

    // 1. Buscar en las imágenes declaradas del producto que contengan el código de la variante
    const matchedInImages = defaultList.find(imgUrl => {
        const fn = imgUrl.split('/').pop().toUpperCase().replace(/\.[^/.]+$/, "");
        return fn === cleanCode || fn.includes(cleanCode);
    });
    if (matchedInImages) return matchedInImages;

    return null;
}

function updateQuickViewVariantImage() {
    if (!currentViewedProduct) return;
    const mainImg = document.getElementById('qvMainImg');
    const defaultImg = (currentViewedProduct.images && currentViewedProduct.images.length > 0)
        ? currentViewedProduct.images[0]
        : 'productos/NO_PHOTO.webp';

    let targetImg = defaultImg;

    if (currentViewedProduct.variants && currentViewedProduct.variants[currentVariantIndex]) {
        const variant = currentViewedProduct.variants[currentVariantIndex];
        const found = findVariantImage(variant.id);
        if (found) {
            targetImg = found;
        }
    }

    // Aplicar imagen seleccionada con fallback
    mainImg.src = targetImg;
    mainImg.onerror = function () {
        this.src = defaultImg;
        this.onerror = function () { this.src = 'productos/NO_PHOTO.webp'; };
    };

    // Resaltar miniatura activa
    highlightThumbnail(targetImg);
}

function highlightThumbnail(targetSrc) {
    const thumbs = document.querySelectorAll('.qv-thumb');
    thumbs.forEach(thumb => {
        const thumbSrc = thumb.getAttribute('src');
        if (targetSrc && (targetSrc === thumbSrc || targetSrc.endsWith(thumbSrc) || thumbSrc.endsWith(targetSrc))) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

function changeMainImage(url, thumbElement) {
    const mainImg = document.getElementById('qvMainImg');
    mainImg.src = url;
    if (thumbElement) {
        document.querySelectorAll('.qv-thumb').forEach(t => t.classList.remove('active'));
        thumbElement.classList.add('active');
    } else {
        highlightThumbnail(url);
    }

    // Sincronizar select si la miniatura seleccionada coincide con una variante
    if (currentViewedProduct && currentViewedProduct.variants) {
        const fn = url.split('/').pop().toUpperCase().replace(/\.[^/.]+$/, "");
        const matchedIndex = currentViewedProduct.variants.findIndex(v => {
            const vCode = v.id.toUpperCase();
            return fn === vCode || fn.includes(vCode);
        });
        if (matchedIndex !== -1 && matchedIndex !== currentVariantIndex) {
            currentVariantIndex = matchedIndex;
            const selectEl = document.getElementById('qvVariantSelect');
            if (selectEl) selectEl.value = currentVariantIndex;
            updateQuickViewPrices();
        }
    }
}

function closeQuickView(event) {
    if (!event || event.target.id === 'quickViewModal' || (event.target.closest && event.target.closest('.close-qv'))) {
        document.getElementById('quickViewModal').classList.remove('active');
        removeProductFromHash();
    }
}

// ==========================================
// 6. CARRITO DE COMPRAS Y WHATSAPP
// ==========================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product && !product.variants) {
        addItemToCart(product);
    }
}

function addItemToCart(item) {
    const existingItem = cart.find(i => i.id === item.id);
    if (existingItem) { existingItem.quantity += 1; }
    else { cart.push({ ...item, quantity: 1 }); }
    updateCartUI();
    document.getElementById('cartModal').classList.add('active');
}

function changeQuantity(index, amount) {
    cart[index].quantity += amount;
    if (cart[index].quantity <= 0) removeFromCart(index);
    else updateCartUI();
}

function updateCartUI() {
    const cartContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotalPublic = document.getElementById('cart-total-public');
    const cartTotalNova = document.getElementById('cart-total-nova');
    let totalPublicUSD = 0;
    let totalPublicBs = 0;
    let totalNovaUSD = 0;
    let totalItems = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p style="text-align:center; color:#999; margin-top: 20px;">Tu carrito está vacío.</p>';
        cartCount.innerText = "0";
        cartTotalPublic.innerText = "$0.00 (Bs. 0.00)";
        cartTotalNova.innerText = "$0.00";
        return;
    }

    let htmlContent = '';
    cart.forEach((item, index) => {
        const preciosItem = calcularPrecios(item.costoCompra);
        totalPublicUSD += preciosItem.publicoUSD * item.quantity;
        totalPublicBs += preciosItem.publicoBs * item.quantity;
        totalNovaUSD += preciosItem.novaClientesUSD * item.quantity;
        totalItems += item.quantity;

        const imgSource = (item.images && item.images.length > 0) ? item.images[0] : 'productos/NO_PHOTO.webp';

        htmlContent += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <img src="${imgSource}" alt="${item.name}" class="cart-item-img" onerror="this.onerror=null;this.src='productos/NO_PHOTO.webp'">
                    <div class="cart-item-details">
                        <span class="cart-item-code">${item.id}</span>
                        <span class="cart-item-name">${item.name}</span>
                    </div>
                </div>
                <div class="cart-controls">
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="changeQuantity(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="changeQuantity(${index}, 1)">+</button>
                    </div>
                    <button class="del-btn" onclick="removeFromCart(${index})" title="Eliminar">
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                        <span>Eliminar</span>
                    </button>
                </div>
            </div>
        `;
    });

    cartContainer.innerHTML = htmlContent;
    cartCount.innerText = totalItems;
    cartTotalPublic.innerText = `$${totalPublicUSD.toFixed(2)} (Bs. ${totalPublicBs.toFixed(2)})`;
    cartTotalNova.innerText = `$${totalNovaUSD.toFixed(2)}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function toggleCart() {
    document.getElementById('cartModal').classList.toggle('active');
}

// ==========================================
// SISTEMA DE ALERTAS Y AVISOS NOVA
// ==========================================
let _novaAlertCallback = null;

function showNovaAlert({ title, message, type = 'info', confirmText = 'Entendido', onConfirm = null }) {
    _novaAlertCallback = onConfirm;
    const modal = document.getElementById('novaAlertModal');
    const titleEl = document.getElementById('novaAlertTitle');
    const msgEl = document.getElementById('novaAlertMessage');
    const iconEl = document.getElementById('novaAlertIcon');
    const btnEl = document.getElementById('novaAlertConfirmBtn');

    if (!modal) {
        alert(message);
        if (onConfirm) onConfirm();
        return;
    }

    if (titleEl) titleEl.innerText = title;
    if (msgEl) msgEl.innerText = message;
    if (btnEl) btnEl.innerText = confirmText;

    if (iconEl) {
        iconEl.className = 'nova-alert-icon ' + type;
        if (type === 'warning') {
            iconEl.innerHTML = `
                <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>`;
        } else if (type === 'success') {
            iconEl.innerHTML = `
                <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>`;
        } else if (type === 'error') {
            iconEl.innerHTML = `
                <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>`;
        } else {
            iconEl.innerHTML = `
                <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>`;
        }
    }

    modal.classList.add('active');
    if (btnEl) btnEl.focus();
}

function closeNovaAlert(event) {
    if (event && event.target !== event.currentTarget && !event.target.classList.contains('nova-alert-btn')) {
        return;
    }
    const modal = document.getElementById('novaAlertModal');
    if (modal) modal.classList.remove('active');
    if (_novaAlertCallback) {
        const cb = _novaAlertCallback;
        _novaAlertCallback = null;
        try { cb(); } catch (err) { console.error(err); }
    }
}

// ==========================================
// ENVÍO DE PEDIDO POR WHATSAPP
// ==========================================
function sendWhatsApp() {
    if (cart.length === 0) {
        showNovaAlert({
            type: 'warning',
            title: 'Carrito Vacío',
            message: 'Agrega al menos un repuesto para consultar la disponibilidad.'
        });
        return;
    }

    const clientName = document.getElementById('customerName').value.trim();
    const clientPhone = document.getElementById('customerPhone').value.trim();

    if (clientName === "" || clientPhone === "") {
        showNovaAlert({
            type: 'warning',
            title: 'Datos Requeridos',
            message: 'Por favor, ingresa tu Nombre y tu número de WhatsApp para registrar el pedido.',
            confirmText: 'Completar Datos',
            onConfirm: () => {
                const nameInput = document.getElementById('customerName');
                if (nameInput) {
                    nameInput.focus();
                    nameInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
        return;
    }

    let messageLines = [
        `Hola equipo de *NOVA RefriMotors*. Mi nombre es *${clientName}* (Tlf: ${clientPhone}) y quisiera consultar la disponibilidad de los siguientes repuestos de su web:\n`
    ];

    cart.forEach(item => {
        messageLines.push(`• Código: *${item.id}* - (Cantidad: ${item.quantity})`);
    });

    const fullMessage = messageLines.join('\n');
    const destinationPhone = NUMERO_WHATSAPP.replace(/[^0-9]/g, '');
    const whatsappURL = `https://wa.me/${destinationPhone}?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappURL, '_blank');
}

// Cerrar modales con la tecla Escape
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const alertModal = document.getElementById('novaAlertModal');
        if (alertModal && alertModal.classList.contains('active')) {
            closeNovaAlert();
            return;
        }
        const qvModal = document.getElementById('quickViewModal');
        if (qvModal && qvModal.classList.contains('active')) {
            closeQuickView();
            return;
        }
        const cartModal = document.getElementById('cartModal');
        if (cartModal && cartModal.classList.contains('active')) {
            cartModal.classList.remove('active');
            return;
        }
    }
});

// ==========================================
// HASH ROUTING — Estado persistente en URL
// ==========================================
function updateHash() {
    const params = new URLSearchParams();
    if (currentPage > 1) params.set('page', currentPage);
    if (currentCategory !== 'Todos') params.set('category', currentCategory);
    const query = document.getElementById('searchInput').value.trim();
    if (query) params.set('search', query);

    const hashStr = params.toString();
    history.replaceState(null, '', hashStr ? '#' + hashStr : location.pathname + location.search);
}

function openProductInHash(productId) {
    const params = new URLSearchParams(location.hash.slice(1));
    params.set('product', productId);
    history.replaceState(null, '', '#' + params.toString());
}

function removeProductFromHash() {
    const params = new URLSearchParams(location.hash.slice(1));
    params.delete('product');
    const hashStr = params.toString();
    history.replaceState(null, '', hashStr ? '#' + hashStr : location.pathname + location.search);
}

function readHashAndRestore() {
    const hash = location.hash.slice(1);
    if (!hash) { filterProducts(); return; }

    const params = new URLSearchParams(hash);

    // Restaurar categoría
    const category = params.get('category');
    if (category) {
        currentCategory = category;
        document.querySelectorAll('.cat-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent.trim() === category) btn.classList.add('active');
        });
    }

    // Restaurar filtro de letra (si se proporcionó)
    const letter = params.get('letter');
    if (letter) {
        document.querySelectorAll('.alpha-btn').forEach(btn => btn.classList.remove('active'));
        const letterBtn = document.getElementById('letter-' + letter);
        if (letterBtn) letterBtn.classList.add('active');
    }

    // Restaurar búsqueda
    const search = params.get('search');
    if (search) document.getElementById('searchInput').value = search;

    // Restaurar página
    const page = parseInt(params.get('page'));
    if (page && page > 0) currentPage = page;

    // Renderizar con el estado restaurado
    filterProducts();

    // Abrir producto si viene en el hash
    const productId = params.get('product');
    if (productId) {
        // Buscar como producto principal
        const found = products.find(p => p.id === productId);
        if (found) {
            openQuickView(productId);
        } else {
            // Buscar como variante dentro de un producto padre
            for (const p of products) {
                if (p.variants) {
                    const vi = p.variants.findIndex(v => v.id === productId);
                    if (vi !== -1) {
                        openQuickView(p.id, vi);
                        break;
                    }
                }
            }
        }
    } else {
        // Cerrar QuickView si estaba abierta
        document.getElementById('quickViewModal').classList.remove('active');
    }
}

// ==========================================
// ARRANQUE DEL SISTEMA
// ==========================================
readHashAndRestore();
window.addEventListener('hashchange', readHashAndRestore);

