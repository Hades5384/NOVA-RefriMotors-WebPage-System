// ==========================================
// 1. CONFIGURACIÓN DEL SISTEMA Y SESIÓN
// ==========================================
let TASA_BCV = 919.82;
const NUMERO_WHATSAPP = "584246192394";
const PORCENTAJE_UTILIDAD = 1.30;
const PORCENTAJE_IVA = 1.16;
let TASA_INTERNA = 1100;

const SUPABASE_CRM_URL = "https://krsahhdkxfeehyernwmf.supabase.co";
const SUPABASE_CRM_KEY = "sb_publishable_4dLnKHj89ri1Z9qV0JE3mw_nRGLhxbE";

let _pendingUnlockTargetId = null;

// Función para sincronizar la visualización de la tasa BCV en cabecera y carrito
function updateBcvDisplays() {
    const formatted = `Bs. ${TASA_BCV.toFixed(2)}`;
    const elHeader = document.getElementById('bcv-display');
    const elCart = document.getElementById('cart-bcv-display');
    if (elHeader) elHeader.innerText = formatted;
    if (elCart) elCart.innerText = formatted;
}

// Sincronizar tasa BCV oficial desde Supabase si hay conexión
(async function syncCloudSettings() {
    try {
        if (typeof window.supabase !== 'undefined' && window.supabase.createClient) {
            const client = window.supabase.createClient(SUPABASE_CRM_URL, SUPABASE_CRM_KEY);
            const { data } = await client.from('configuracion').select('*').eq('id', 'default').maybeSingle();
            if (data) {
                const bcv = parseFloat(data.tasa_bcv);
                if (!isNaN(bcv) && bcv > 0) {
                    TASA_BCV = bcv;
                    updateBcvDisplays();
                }
                const interna = parseFloat(data.tasa_interna);
                if (!isNaN(interna) && interna > 0) TASA_INTERNA = interna;
            }
        }
    } catch (e) {}
})();

// Mostrar tasa BCV de forma segura al inicio
updateBcvDisplays();

// --- GESTIÓN DE SESIÓN DE CLIENTES Y ACCESO A PRECIOS ---
function getCustomerSession() {
    try {
        const raw = localStorage.getItem('nova_customer_session') || localStorage.getItem('nova_cliente_sesion');
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (parsed && (parsed.nombre || parsed.name)) return parsed;
    } catch (e) {}
    return null;
}

function getLastCustomerInfo() {
    try {
        const raw = localStorage.getItem('nova_last_client_info');
        if (raw) return JSON.parse(raw);
    } catch (e) {}
    return null;
}

function hasCustomerSession() {
    return !!getCustomerSession();
}

function updateClientSessionPill() {
    const container = document.getElementById('clientSessionPill');
    if (!container) return;
    const session = getCustomerSession();
    if (session) {
        const firstName = (session.nombre || session.name || '').trim().split(' ')[0] || 'Cliente';
        container.innerHTML = `
            <button class="client-pill-btn" onclick="openClientProfileModal()" title="Sesión activa: ${session.nombre} (${session.rif})">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <span>${firstName}</span>
            </button>
        `;
    } else {
        container.innerHTML = `
            <button class="client-pill-btn unauth" onclick="openClientRegisterModal()" title="Acceder o Registrarse">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <span>Acceder</span>
            </button>
        `;
    }
}

function openClientRegisterModal(targetProductId = null) {
    _pendingUnlockTargetId = targetProductId;
    const modal = document.getElementById('clientRegisterModal');
    if (modal) {
        // Autocompletar automáticamente con datos de sesión o última información guardada
        const data = getCustomerSession() || getLastCustomerInfo();
        const nameInput = document.getElementById('clientFullName');
        const rifTypeInput = document.getElementById('clientRifType');
        const rifNumInput = document.getElementById('clientRifNum');
        const phoneInput = document.getElementById('clientPhone');

        if (data) {
            if (nameInput && (!nameInput.value || nameInput.value.trim() === '') && (data.nombre || data.name)) {
                nameInput.value = data.nombre || data.name;
            }
            if (data.rif) {
                const match = data.rif.match(/^([VJECG]-?)(.+)$/i);
                if (match) {
                    if (rifTypeInput) rifTypeInput.value = match[1].toUpperCase().replace(/-?$/, '-');
                    if (rifNumInput && (!rifNumInput.value || rifNumInput.value.trim() === '')) rifNumInput.value = match[2];
                } else if (rifNumInput && (!rifNumInput.value || rifNumInput.value.trim() === '')) {
                    rifNumInput.value = data.rif;
                }
            }
            if (phoneInput && (!phoneInput.value || phoneInput.value.trim() === '') && (data.telefono || data.phone)) {
                phoneInput.value = data.telefono || data.phone;
            }
        }

        modal.classList.add('active');
        if (nameInput) setTimeout(() => nameInput.focus(), 150);
    }
}

function closeClientRegisterModal(e) {
    if (e && e.target && e.target !== e.currentTarget && !e.target.classList.contains('client-modal-close')) {
        return;
    }
    const modal = document.getElementById('clientRegisterModal');
    if (modal) modal.classList.remove('active');
}

function openClientProfileModal() {
    const session = getCustomerSession();
    if (!session) {
        openClientRegisterModal();
        return;
    }
    const modal = document.getElementById('clientProfileModal');
    if (!modal) return;

    const nameEl = document.getElementById('profileModalName');
    const rifEl = document.getElementById('profileModalRif');
    const phoneEl = document.getElementById('profileModalPhone');

    if (nameEl) nameEl.innerText = session.nombre || 'Mi Perfil';
    if (rifEl) rifEl.innerText = session.rif || '-';
    if (phoneEl) phoneEl.innerText = session.telefono || '-';

    modal.classList.add('active');
}

function closeClientProfileModal(e) {
    if (e && e.target && e.target !== e.currentTarget && !e.target.classList.contains('client-modal-close')) {
        return;
    }
    const modal = document.getElementById('clientProfileModal');
    if (modal) modal.classList.remove('active');
}

function editCustomerData() {
    closeClientProfileModal();
    const session = getCustomerSession();
    openClientRegisterModal();
    if (session) {
        const nameInput = document.getElementById('clientFullName');
        const rifTypeInput = document.getElementById('clientRifType');
        const rifNumInput = document.getElementById('clientRifNum');
        const phoneInput = document.getElementById('clientPhone');

        if (nameInput) nameInput.value = session.nombre || '';
        if (session.rif) {
            const match = session.rif.match(/^([VJECG]-?)(.+)$/i);
            if (match) {
                if (rifTypeInput) rifTypeInput.value = match[1].toUpperCase().replace(/-?$/, '-');
                if (rifNumInput) rifNumInput.value = match[2];
            } else if (rifNumInput) {
                rifNumInput.value = session.rif;
            }
        }
        if (phoneInput) phoneInput.value = session.telefono || '';
    }
}

function logoutCustomerSession() {
    closeClientProfileModal();
    localStorage.removeItem('nova_customer_session');
    localStorage.removeItem('nova_cliente_sesion');
    updateClientSessionPill();
    filterProducts();
    showNovaAlert({
        title: "Sesión Cerrada",
        message: "Has cerrado sesión correctamente. Los precios se han bloqueado hasta tu próximo ingreso.",
        type: "info"
    });
}

async function submitClientRegister(e) {
    if (e && e.preventDefault) e.preventDefault();
    const nameInput = document.getElementById('clientFullName');
    const rifTypeInput = document.getElementById('clientRifType');
    const rifNumInput = document.getElementById('clientRifNum');
    const phoneInput = document.getElementById('clientPhone');

    const fullName = nameInput ? nameInput.value.trim() : '';
    const rifPrefix = rifTypeInput ? rifTypeInput.value : 'V-';
    const rifNumber = rifNumInput ? rifNumInput.value.trim() : '';
    const fullRif = (rifPrefix + rifNumber).toUpperCase();
    const phone = phoneInput ? phoneInput.value.trim() : '';

    if (!fullName || !rifNumber || !phone) {
        showNovaAlert({
            title: "Datos Incompletos",
            message: "Por favor, completa tu Nombre y Apellido, Cédula y Teléfono de contacto.",
            type: "warning"
        });
        return;
    }

    // 1. Guardar sesión persistente
    const clientData = {
        id: 'CLI-' + Date.now().toString().slice(-4),
        nombre: fullName,
        rif: fullRif,
        telefono: phone,
        tipo: 'cliente',
        timestamp: Date.now()
    };
    localStorage.setItem('nova_customer_session', JSON.stringify(clientData));
    localStorage.setItem('nova_cliente_sesion', JSON.stringify(clientData));
    localStorage.setItem('nova_last_client_info', JSON.stringify(clientData));

    // 2. Prellenar datos en el carrito
    const cartName = document.getElementById('customerName');
    const cartPhone = document.getElementById('customerPhone');
    if (cartName) cartName.value = fullName;
    if (cartPhone) cartPhone.value = phone;

    // 3. Sincronizar de inmediato con Supabase CRM (ERP)
    try {
        if (typeof window.supabase !== 'undefined' && window.supabase.createClient) {
            const client = window.supabase.createClient(SUPABASE_CRM_URL, SUPABASE_CRM_KEY);
            (async () => {
                const { data: existing } = await client.from('clientes').select('id').eq('rif', clientData.rif).maybeSingle();
                if (existing && existing.id) {
                    await client.from('clientes').update({
                        nombre: clientData.nombre,
                        telefono: clientData.telefono,
                        notas: 'Actualizado desde Catálogo Web Oficial'
                    }).eq('id', existing.id);
                    console.log('[Supabase CRM] Cliente existente actualizado:', existing.id);
                } else {
                    await client.from('clientes').insert([{
                        id: clientData.id,
                        nombre: clientData.nombre,
                        rif: clientData.rif,
                        telefono: clientData.telefono,
                        tipo: 'cliente',
                        notas: 'Registrado desde Catálogo Web Oficial'
                    }]);
                    console.log('[Supabase CRM] Nuevo cliente insertado con éxito:', clientData.id);
                }
            })().catch(err => console.warn('[Supabase CRM] Error sincronizando cliente:', err));
        }
    } catch (dbErr) {
        console.warn('[Supabase CRM] Error de conexión:', dbErr);
    }

    // 4. Notificación automática por WhatsApp a NOVA
    const waMsgText = `¡Hola NOVA RefriMotors! Acabo de ingresar a su catálogo web y deseo consultar repuestos y precios:\n\n👤 *Nombre:* ${fullName}\n🪪 *Cédula/RIF:* ${fullRif}\n📱 *Teléfono:* ${phone}\n\nQuedo atento a su asesoría técnica.`;
    const waUrl = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(waMsgText)}`;
    window.open(waUrl, '_blank');

    // 5. Cerrar modal y desbloquear catálogo
    const modal = document.getElementById('clientRegisterModal');
    if (modal) modal.classList.remove('active');

    updateClientSessionPill();
    filterProducts();

    // 6. Mensaje de bienvenida cordial
    showNovaAlert({
        title: "¡Bienvenido a NOVA!",
        message: `Hola <b>${fullName}</b>. Ya puedes consultar todo nuestro catálogo con precios actualizados a tasa oficial BCV.`,
        type: "success"
    });

    // 7. Si intentaba ver un repuesto específico, abrirlo
    if (_pendingUnlockTargetId) {
        const targetId = _pendingUnlockTargetId;
        _pendingUnlockTargetId = null;
        setTimeout(() => {
            openQuickView(targetId);
        }, 350);
    }
}

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

let _searchDebounceTimer = null;
function debouncedSearch() {
    clearTimeout(_searchDebounceTimer);
    _searchDebounceTimer = setTimeout(() => {
        currentPage = 1;
        filterProducts();
        updateHash();
    }, 180);
}

function handleSearchKey(event) {
    if (event.key === 'Enter') {
        clearTimeout(_searchDebounceTimer);
        currentPage = 1;
        filterProducts();
        updateHash();
    } else {
        debouncedSearch();
    }
}

function resetPaginationAndFilter() {
    clearTimeout(_searchDebounceTimer);
    currentPage = 1;
    filterProducts();
    updateHash();
    setTimeout(updateCategoryNavState, 150);
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
        if (typeof btnElement.scrollIntoView === 'function') {
            btnElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    }
    currentPage = 1;
    filterProducts();
    updateHash();
    setTimeout(updateCategoryNavState, 150);
}

function filterProducts() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    let filtered;
    if (!query && currentCategory === 'Todos') {
        filtered = products;
    } else {
        filtered = products.filter(prod => {
            const matchesCategory = (currentCategory === 'Todos') || (prod.category === currentCategory);
            if (!matchesCategory) return false;

            if (!query) {
                prod._matchedVariantIndex = -1;
                return true;
            }

            const nameMatch = prod.name && prod.name.toLowerCase().includes(query);
            const idMatch = prod.id && prod.id.toLowerCase().includes(query);
            const modelMatch = prod.model && prod.model.toLowerCase().includes(query);

            if (nameMatch || idMatch || modelMatch) {
                prod._matchedVariantIndex = -1;
                return true;
            }

            if (prod.variants && prod.variants.length > 0) {
                const vi = prod.variants.findIndex(v =>
                    (v.name && v.name.toLowerCase().includes(query)) ||
                    (v.id && v.id.toLowerCase().includes(query))
                );
                if (vi !== -1) {
                    prod._matchedVariantIndex = vi;
                    return true;
                }
            }

            return false;
        });
    }

    setupPagination(filtered);
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = filtered.slice(start, end);
    renderProducts(paginatedItems);
}

function setupPagination(filteredArray) {
    const totalPages = Math.ceil(filteredArray.length / itemsPerPage);
    const container = document.getElementById('pagination-container');
    if (!container) return;

    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }

    let html = '';
    html += '<button class="page-btn page-arrow" onclick="changePage(' + (currentPage - 1) + ')" ' + (currentPage === 1 ? 'disabled' : '') + ' aria-label="P&aacute;gina anterior">&laquo; Ant</button>';

    if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) {
            html += '<button class="page-btn ' + (currentPage === i ? 'active' : '') + '" onclick="changePage(' + i + ')">' + i + '</button>';
        }
    } else {
        html += '<button class="page-btn ' + (currentPage === 1 ? 'active' : '') + '" onclick="changePage(1)">1</button>';

        let start = Math.max(2, currentPage - 1);
        let end = Math.min(totalPages - 1, currentPage + 1);

        if (currentPage <= 3) {
            end = 4;
        } else if (currentPage >= totalPages - 2) {
            start = totalPages - 3;
        }

        if (start > 2) {
            html += '<span class="page-ellipsis">&hellip;</span>';
        }

        for (let i = start; i <= end; i++) {
            html += '<button class="page-btn ' + (currentPage === i ? 'active' : '') + '" onclick="changePage(' + i + ')">' + i + '</button>';
        }

        if (end < totalPages - 1) {
            html += '<span class="page-ellipsis">&hellip;</span>';
        }

        html += '<button class="page-btn ' + (currentPage === totalPages ? 'active' : '') + '" onclick="changePage(' + totalPages + ')">' + totalPages + '</button>';
    }

    html += '<button class="page-btn page-arrow" onclick="changePage(' + (currentPage + 1) + ')" ' + (currentPage === totalPages ? 'disabled' : '') + ' aria-label="P&aacute;gina siguiente">Sig &raquo;</button>';
    container.innerHTML = html;
}

function changePage(pageNumber) {
    currentPage = pageNumber;
    filterProducts();
    updateHash();
    setTimeout(updateCategoryNavState, 150);
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
    const isUnlocked = hasCustomerSession();
    let htmlContent = '';
    productList.forEach(prod => {
        const precios = calcularPrecios(prod.costoCompra);
        // Verificamos si el producto tiene imágenes guardadas. Si no, usamos NO_PHOTO
        const imgSrc = (prod.images && prod.images.length > 0) ? prod.images[0] : 'productos/NO_PHOTO.webp';

        const variantParam = (prod._matchedVariantIndex !== undefined && prod._matchedVariantIndex !== -1) ? `, ${prod._matchedVariantIndex}` : '';
        const onClk = `openQuickView('${prod.id}'${variantParam})`;

        // Creamos la etiqueta de imagen usando la variable segura que acabamos de crear
        const imgTag = `<img src="${imgSrc}" alt="${prod.name}" width="260" height="200" loading="lazy" decoding="async" onclick="${onClk}" onerror="this.src='productos/NO_PHOTO.webp'">`;

        let priceHtml = '';
        let btnText = '';
        let btnAction = '';

        if (isUnlocked) {
            priceHtml = `
                <div class="price-container" style="margin-top: auto;">
                    <div class="price-public-usd">Precio: $${precios.publicoUSD.toFixed(2)}</div>
                    <div class="price-public-bs">Ref: Bs. ${precios.publicoBs.toFixed(2)}</div>
                </div>`;
            btnText = prod.variants ? 'Ver Opciones' : 'Agregar al Pedido';
            btnAction = prod.variants ? onClk : `addToCart('${prod.id}')`;
        } else {
            priceHtml = '';
            btnText = prod.variants ? 'Ver Opciones' : 'Agregar al Pedido';
            btnAction = prod.variants ? onClk : `addToCart('${prod.id}')`;
        }

        htmlContent += `
            <div class="product-card">
                ${imgTag}
                <div class="product-code" onclick="${onClk}">CÓDIGO: ${prod.id}</div>
                <div class="product-title" onclick="${onClk}">${prod.name}</div>
                ${priceHtml}
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

    // Botón Agregar al Pedido desde el Modal (siempre permite agregar sin bloquear)
    const addBtn = document.getElementById('qvAddBtn');
    addBtn.innerText = 'Agregar al Pedido';
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

    const isUnlocked = hasCustomerSession();
    const priceBox = document.querySelector('.qv-price-box');
    const existingGated = document.getElementById('qvPriceGatedContainer');
    if (existingGated) existingGated.remove();

    if (!isUnlocked) {
        if (priceBox) priceBox.style.display = 'none';
    } else {
        if (priceBox) priceBox.style.display = 'block';
        const precios = calcularPrecios(costo);
        document.getElementById('qvPrice').innerText = `Precio: $${precios.publicoUSD.toFixed(2)}`;
        document.getElementById('qvPriceVes').innerText = `Ref: Bs. ${precios.publicoBs.toFixed(2)}`;
        document.getElementById('qvPriceNova').innerText = `$${precios.novaClientesUSD.toFixed(2)}`;
    }
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
    if (existingItem) { 
        existingItem.quantity += 1; 
    } else { 
        cart.push({ ...item, quantity: 1 }); 
    }
    updateCartUI();
    const cartModal = document.getElementById('cartModal');
    if (cartModal) cartModal.classList.add('active');
}

function changeQuantity(index, amount) {
    if (!cart[index]) return;
    cart[index].quantity += amount;
    if (cart[index].quantity <= 0) {
        removeFromCart(index);
    } else {
        updateCartUI();
    }
}

function updateCartUI() {
    const cartContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotalPublic = document.getElementById('cart-total-public');
    const cartTotalNova = document.getElementById('cart-total-nova');
    const cartPricesUnlocked = document.getElementById('cartPricesUnlocked');
    const cartPricesLocked = document.getElementById('cartPricesLocked');
    const cartCustomerUnauthNotice = document.getElementById('cartCustomerUnauthNotice');
    const cartCustomerAuthNotice = document.getElementById('cartCustomerAuthNotice');
    const cartCustomerInputs = document.getElementById('cartCustomerInputs');
    const cartCustomerActiveName = document.getElementById('cartCustomerActiveName');
    const cartCustomerActiveRif = document.getElementById('cartCustomerActiveRif');
    const cartSubmitBtnText = document.getElementById('cartSubmitBtnText');

    const isUnlocked = hasCustomerSession();
    let totalPublicUSD = 0;
    let totalPublicBs = 0;
    let totalNovaUSD = 0;
    let totalItems = 0;

    if (cart.length === 0) {
        if (cartContainer) cartContainer.innerHTML = '<p style="text-align:center; color:#999; margin-top: 20px;">Tu carrito está vacío.</p>';
        if (cartCount) cartCount.innerText = "0";
        if (cartTotalPublic) cartTotalPublic.innerText = "$0.00 (Bs. 0.00)";
        if (cartTotalNova) cartTotalNova.innerText = "$0.00";
        if (cartPricesUnlocked) cartPricesUnlocked.style.display = isUnlocked ? 'flex' : 'none';
        if (cartPricesLocked) cartPricesLocked.style.display = isUnlocked ? 'none' : 'block';
        return;
    }

    let htmlContent = '';
    cart.forEach((item, index) => {
        const preciosItem = calcularPrecios(item.costoCompra);
        totalPublicUSD += preciosItem.publicoUSD * item.quantity;
        totalPublicBs += preciosItem.publicoBs * item.quantity;
        totalNovaUSD += preciosItem.novaClientesUSD * item.quantity;
        totalItems += item.quantity;

        let imgSource = 'productos/NO_PHOTO.webp';
        if (item.images && item.images.length > 0) {
            const cleanCode = (item.id || '').toUpperCase();
            const matchedVariant = item.images.find(imgUrl => {
                const fn = imgUrl.split('/').pop().toUpperCase().replace(/\.[^/.]+$/, "");
                return fn === cleanCode || fn.includes(cleanCode);
            });
            imgSource = matchedVariant || item.images[0];
        }

        let priceText = '';
        if (isUnlocked) {
            priceText = `<div style="font-size: 11.5px; font-weight: 700; color: #1e3a8a; margin-top: 2px;">Ref: $${(preciosItem.publicoUSD * item.quantity).toFixed(2)} <span style="font-size:10px; font-weight:500; color:#64748b;">($${preciosItem.publicoUSD.toFixed(2)} c/u)</span></div>`;
        }

        htmlContent += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <img src="${imgSource}" alt="${item.name}" class="cart-item-img" onerror="this.onerror=null;this.src='productos/NO_PHOTO.webp'">
                    <div class="cart-item-details">
                        <span class="cart-item-code">${item.id}</span>
                        <span class="cart-item-name">${item.name}</span>
                        ${priceText}
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

    if (cartContainer) cartContainer.innerHTML = htmlContent;
    if (cartCount) cartCount.innerText = totalItems;

    // Configuración de visualización de precios y totales
    if (isUnlocked) {
        if (cartTotalPublic) cartTotalPublic.innerText = `$${totalPublicUSD.toFixed(2)} (Bs. ${totalPublicBs.toFixed(2)})`;
        if (cartTotalNova) cartTotalNova.innerText = `$${totalNovaUSD.toFixed(2)}`;
        if (cartPricesUnlocked) cartPricesUnlocked.style.display = 'flex';
        if (cartPricesLocked) cartPricesLocked.style.display = 'none';

        const session = getCustomerSession();
        if (cartCustomerAuthNotice) {
            cartCustomerAuthNotice.style.display = 'flex';
            if (cartCustomerActiveName) cartCustomerActiveName.innerText = (session && session.nombre) ? session.nombre : 'Cliente';
            if (cartCustomerActiveRif) cartCustomerActiveRif.innerText = (session && session.rif) ? `(${session.rif})` : '';
        }
        if (cartCustomerUnauthNotice) cartCustomerUnauthNotice.style.display = 'none';
        if (cartCustomerInputs) cartCustomerInputs.style.display = 'none';
        if (cartSubmitBtnText) cartSubmitBtnText.innerText = 'Consultar Disponibilidad por WhatsApp';
    } else {
        if (cartPricesUnlocked) cartPricesUnlocked.style.display = 'none';
        if (cartPricesLocked) cartPricesLocked.style.display = 'block';

        if (cartCustomerAuthNotice) cartCustomerAuthNotice.style.display = 'none';
        if (cartCustomerUnauthNotice) cartCustomerUnauthNotice.style.display = 'block';
        if (cartCustomerInputs) cartCustomerInputs.style.display = 'block';
        if (cartSubmitBtnText) cartSubmitBtnText.innerText = 'Consultar Disponibilidad por WhatsApp';
    }

    // Autocompletar inputs si están vacíos
    const savedData = getCustomerSession() || getLastCustomerInfo();
    if (savedData) {
        const nameInput = document.getElementById('customerName');
        const rifTypeInput = document.getElementById('customerRifType');
        const rifNumInput = document.getElementById('customerRifNum');
        const phoneInput = document.getElementById('customerPhone');

        if (nameInput && (!nameInput.value || nameInput.value.trim() === '') && (savedData.nombre || savedData.name)) {
            nameInput.value = savedData.nombre || savedData.name;
        }
        if (savedData.rif) {
            const match = savedData.rif.match(/^([VJECG]-?)(.+)$/i);
            if (match) {
                if (rifTypeInput) rifTypeInput.value = match[1].toUpperCase().replace(/-?$/, '-');
                if (rifNumInput && (!rifNumInput.value || rifNumInput.value.trim() === '')) rifNumInput.value = match[2];
            } else if (rifNumInput && (!rifNumInput.value || rifNumInput.value.trim() === '')) {
                rifNumInput.value = savedData.rif;
            }
        }
        if (phoneInput && (!phoneInput.value || phoneInput.value.trim() === '') && (savedData.telefono || savedData.phone)) {
            phoneInput.value = savedData.telefono || savedData.phone;
        }
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function editCustomerDataFromCart() {
    const cartCustomerInputs = document.getElementById('cartCustomerInputs');
    if (cartCustomerInputs) {
        if (cartCustomerInputs.style.display === 'none') {
            cartCustomerInputs.style.display = 'block';
            const nameInput = document.getElementById('customerName');
            if (nameInput) nameInput.focus();
        } else {
            cartCustomerInputs.style.display = 'none';
        }
    }
}

function toggleCart() {
    const modal = document.getElementById('cartModal');
    if (!modal) return;
    const willOpen = !modal.classList.contains('active');
    modal.classList.toggle('active');
    if (willOpen) {
        updateCartUI();
    }
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

    if (titleEl) titleEl.innerHTML = title;
    if (msgEl) msgEl.innerHTML = message;
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
// ENVÍO DE PEDIDO POR WHATSAPP Y DESBLOQUEO
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

    const nameInput = document.getElementById('customerName');
    const rifTypeInput = document.getElementById('customerRifType');
    const rifNumInput = document.getElementById('customerRifNum');
    const phoneInput = document.getElementById('customerPhone');

    const clientName = nameInput ? nameInput.value.trim() : '';
    const rifPrefix = rifTypeInput ? rifTypeInput.value : 'V-';
    const rifNumber = rifNumInput ? rifNumInput.value.trim() : '';
    const clientPhone = phoneInput ? phoneInput.value.trim() : '';

    const isUnlocked = hasCustomerSession();

    if (!isUnlocked) {
        if (!clientName) {
            showNovaAlert({
                type: 'warning',
                title: 'Nombre Requerido',
                message: 'Por favor, indícanos tu Nombre y Apellido para preparar tu cotización.',
                confirmText: 'Completar Nombre',
                onConfirm: () => {
                    if (nameInput) {
                        nameInput.focus();
                        nameInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }
            });
            return;
        }

        if (!rifNumber || rifNumber.length < 5) {
            showNovaAlert({
                type: 'warning',
                title: 'Cédula o RIF Requerido',
                message: 'Por favor, indícanos tu número de Cédula o RIF para emitir tu presupuesto formal.',
                confirmText: 'Completar Cédula',
                onConfirm: () => {
                    if (rifNumInput) {
                        rifNumInput.focus();
                        rifNumInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }
            });
            return;
        }

        if (!clientPhone || clientPhone.length < 7) {
            showNovaAlert({
                type: 'warning',
                title: 'Teléfono Requerido',
                message: 'Por favor, indícanos tu número de WhatsApp para enviarte la cotización.',
                confirmText: 'Completar Teléfono',
                onConfirm: () => {
                    if (phoneInput) {
                        phoneInput.focus();
                        phoneInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }
            });
            return;
        }

        const fullRif = `${rifPrefix}${rifNumber}`;
        const newClientData = {
            id: `CLI-${Date.now().toString().slice(-6)}`,
            nombre: clientName,
            rif: fullRif,
            telefono: clientPhone,
            tipo: 'cliente',
            fecha_registro: new Date().toISOString()
        };

        localStorage.setItem('nova_customer_session', JSON.stringify(newClientData));
        localStorage.setItem('nova_cliente_sesion', JSON.stringify(newClientData));
        localStorage.setItem('nova_last_client_info', JSON.stringify(newClientData));

        if (typeof supabaseClient !== 'undefined' && supabaseClient) {
            (async () => {
                try {
                    await supabaseClient.from('clientes').insert([{
                        nombre: newClientData.nombre,
                        rif: newClientData.rif,
                        telefono: newClientData.telefono,
                        tipo: 'cliente',
                        notas: 'Registrado desde Carrito del Catálogo Web'
                    }]);
                } catch (dbErr) {
                    console.warn('[CRM Sync Error]', dbErr);
                }
            })();
        }

        // Desbloquear catálogo en pantalla inmediatamente
        updateClientSessionPill();
        filterProducts();
    }

    const session = getCustomerSession();
    const finalName = clientName || (session ? session.nombre : 'Cliente');
    const finalRif = rifNumber ? `${rifPrefix}${rifNumber}` : (session ? session.rif : '');
    const finalPhone = clientPhone || (session ? session.telefono : '');
    const rifString = finalRif ? `\n🪪 *Cédula/RIF:* ${finalRif}` : '';
    const phoneString = finalPhone ? `\n📱 *Teléfono:* ${finalPhone}` : '';

    let messageLines = [
        `¡Hola equipo de *NOVA RefriMotors*! Mi nombre es *${finalName}*${rifString}${phoneString}.\n\nDeseo consultar la disponibilidad y precios de los siguientes repuestos de su catálogo web:\n`
    ];

    let totalEstimadoUSD = 0;
    cart.forEach(item => {
        const precios = calcularPrecios(item.costoCompra);
        const subtotalUSD = precios.publicoUSD * item.quantity;
        totalEstimadoUSD += subtotalUSD;
        messageLines.push(`• *${item.name}* [Código: ${item.id}] x${item.quantity} -> Ref: $${subtotalUSD.toFixed(2)}`);
    });

    messageLines.push(`\n*Total Estimado:* $${totalEstimadoUSD.toFixed(2)}`);
    messageLines.push(`¿Podrían confirmarme la disponibilidad en tienda? ¡Muchas gracias!`);

    const fullMessage = messageLines.join('\n');
    const destinationPhone = NUMERO_WHATSAPP.replace(/[^0-9]/g, '');
    const whatsappURL = `https://wa.me/${destinationPhone}?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappURL, '_blank');

    // Actualizar UI del carrito ahora desbloqueado
    updateCartUI();

    // Mensaje de bienvenida cordial si se registró en este envío
    if (!isUnlocked) {
        showNovaAlert({
            title: "¡Bienvenido a NOVA!",
            message: `Hola <b>${finalName}</b>. Tu solicitud ha sido enviada por WhatsApp y ya puedes consultar todos nuestros repuestos con sus precios oficiales.`,
            type: "success"
        });
    }
}

// Cerrar modales con la tecla Escape
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const profModal = document.getElementById('clientProfileModal');
        if (profModal && profModal.classList.contains('active')) {
            closeClientProfileModal();
            return;
        }
        const regModal = document.getElementById('clientRegisterModal');
        if (regModal && regModal.classList.contains('active')) {
            regModal.classList.remove('active');
            return;
        }
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
            if (btn.textContent.trim() === category) {
                btn.classList.add('active');
                if (typeof btn.scrollIntoView === 'function') {
                    btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                }
            }
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
// ============================================================================
// NAVEGACIÓN Y DESPLAZAMIENTO FLUIDO DE CATEGORÍAS
// ============================================================================
function scrollCategories(direction) {
    const menu = document.getElementById('categoryMenu');
    if (!menu) return;
    const step = 280;
    menu.scrollBy({ left: direction * step, behavior: 'smooth' });
}

function updateCategoryNavState() {
    const wrapper = document.getElementById('categoryNavWrapper');
    const menu = document.getElementById('categoryMenu');
    const prevBtn = document.getElementById('catNavPrev');
    const nextBtn = document.getElementById('catNavNext');
    if (!menu) return;

    const scrollLeft = menu.scrollLeft;
    const maxScroll = menu.scrollWidth - menu.clientWidth;
    const canScrollLeft = scrollLeft > 8;
    const canScrollRight = scrollLeft < maxScroll - 8;

    if (prevBtn) {
        if (canScrollLeft) prevBtn.classList.add('visible');
        else prevBtn.classList.remove('visible');
    }
    if (nextBtn) {
        if (canScrollRight) nextBtn.classList.add('visible');
        else nextBtn.classList.remove('visible');
    }
    if (wrapper) {
        if (canScrollLeft) wrapper.classList.add('has-scroll-left');
        else wrapper.classList.remove('has-scroll-left');

        if (canScrollRight) wrapper.classList.add('has-scroll-right');
        else wrapper.classList.remove('has-scroll-right');
    }
}

function initCategoryNavigation() {
    const menu = document.getElementById('categoryMenu');
    if (!menu) return;

    menu.addEventListener('scroll', updateCategoryNavState, { passive: true });
    window.addEventListener('resize', updateCategoryNavState, { passive: true });

    // Desplazamiento horizontal fluido con rueda del ratón (Mouse Wheel)
    menu.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();
            menu.scrollBy({ left: e.deltaY * 1.3, behavior: 'smooth' });
        }
    }, { passive: false });

    // Arrastre horizontal con clic sostenido del ratón (Drag-to-Scroll)
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let hasMoved = false;

    menu.addEventListener('mousedown', (e) => {
        isDown = true;
        hasMoved = false;
        menu.classList.add('is-dragging');
        startX = e.pageX - menu.offsetLeft;
        scrollLeft = menu.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
        if (!isDown) return;
        isDown = false;
        menu.classList.remove('is-dragging');
    });

    menu.addEventListener('mouseleave', () => {
        if (!isDown) return;
        isDown = false;
        menu.classList.remove('is-dragging');
    });

    menu.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        const x = e.pageX - menu.offsetLeft;
        const walk = (x - startX) * 1.5;
        if (Math.abs(walk) > 4) {
            hasMoved = true;
        }
        menu.scrollLeft = scrollLeft - walk;
    });

    menu.addEventListener('click', (e) => {
        if (hasMoved) {
            e.preventDefault();
            e.stopPropagation();
            hasMoved = false;
        }
    }, true);

    // Navegación con teclado accesible (Flechas, Inicio, Fin)
    menu.addEventListener('keydown', (e) => {
        const btns = Array.from(menu.querySelectorAll('.cat-btn'));
        const activeIdx = btns.indexOf(document.activeElement);
        if (activeIdx === -1) return;

        if (e.key === 'ArrowRight' && activeIdx < btns.length - 1) {
            e.preventDefault();
            btns[activeIdx + 1].focus();
            btns[activeIdx + 1].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        } else if (e.key === 'ArrowLeft' && activeIdx > 0) {
            e.preventDefault();
            btns[activeIdx - 1].focus();
            btns[activeIdx - 1].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        } else if (e.key === 'Home') {
            e.preventDefault();
            btns[0].focus();
            btns[0].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        } else if (e.key === 'End') {
            e.preventDefault();
            btns[btns.length - 1].focus();
            btns[btns.length - 1].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    });

    setTimeout(updateCategoryNavState, 80);
}

initCategoryNavigation();
updateClientSessionPill();
readHashAndRestore();
window.addEventListener('hashchange', readHashAndRestore);


