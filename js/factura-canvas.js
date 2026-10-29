/**
 * ==============================================================================
 * NOVA REFRIMOTORS - MOTOR DE FACTURACIÓN CANVAS 2D Y SISTEMA DE ALERTAS
 * Archivo: factura-canvas.js
 * ==============================================================================
 * Módulo independiente de renderizado de facturas digitales tipo ticket y
 * sistema de avisos modales personalizados.
 * 
 * Funcionalidades:
 * - Pre-carga asíncrona de membrete oficial (assets/nova-factura.png).
 * - Generador gráfico en Canvas HTML5 2D con alta resolución Retina (SCALE = 2).
 * - Formateo dinámico de líneas, divisores punteados, cálculos en USD y Bolívares.
 * - Copiado directo al portapapeles (navigator.clipboard) con fallback móvil.
 * - Descarga directa del ticket en formato PNG con nomenclatura de fecha/timestamp.
 * - Sistema de alertas modales accesibles (showNovaAlert / closeNovaAlert).
 * ==============================================================================
 */

// ==========================================
// PRE-CARGA DEL LOGO DE FACTURA PARA CANVAS 2D
// (Evita dependencia de bibliotecas externas o html2canvas en iOS Safari)
// ==========================================
let _invoiceLogoImg = null;
(function () {
    const img = new Image();
    img.onload = function () { _invoiceLogoImg = img; };
    img.onerror = function () { console.warn('No se pudo pre-cargar assets/nova-factura.png'); };
    img.src = 'assets/nova-factura.png';
})();

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
            // info
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
// GENERADOR NATIVO DE FACTURA EN CANVAS 2D
// (Reutilizable para copiar y para vista previa)
// ==========================================
async function buildInvoiceCanvas() {
    if (typeof cart === 'undefined' || cart.length === 0) return null;

    // --- Datos del cliente ---
    const clientName = document.getElementById('customerName').value.trim() || 'Cliente No Registrado';
    const clientRif = document.getElementById('customerRif').value.trim() || 'J-000000000';
    const clientPhone = document.getElementById('customerPhone').value.trim() || 'No especificado';
    const method = document.getElementById('paymentMethod').value;

    // --- Fecha y Hora ---
    const now = new Date();
    const fecha = now.toLocaleDateString('es-VE', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const hora = now.toLocaleTimeString('es-VE', { hour: '2-digit', minute: '2-digit', hour12: true });

    // --- Moneda ---
    const isUSD = method === 'EFECTIVO_USD' || method === 'OTRAS FORMAS DE PAGO';
    const currencySymbol = isUSD ? '$' : 'Bs. ';
    let methodNameDisplay = method;
    if (method === 'EFECTIVO_USD') methodNameDisplay = 'EFECTIVO USD';
    if (method === 'EFECTIVO_BS') methodNameDisplay = 'EFECTIVO BS';
    if (method === 'OTRAS FORMAS DE PAGO') methodNameDisplay = 'OTRAS FORMAS DE PAGO';

    // --- Preparar ítems ---
    let totalFactura = 0;
    let totalItems = 0;
    const items = [];
    cart.forEach(item => {
        const preciosItem = calcularPrecios(item.costoCompra);
        const tasa = typeof TASA_BCV !== 'undefined' ? TASA_BCV : 1;
        const itemPrice = isUSD ? preciosItem.novaClientesUSD : (preciosItem.novaClientesUSD * tasa);
        const lineTotal = itemPrice * item.quantity;
        totalFactura += lineTotal;
        totalItems += item.quantity;
        items.push({
            text: `${item.quantity}x [${item.id}] ${item.name}`,
            price: `${currencySymbol}${lineTotal.toFixed(2)}`
        });
    });

    // Esperar si el logo aún está cargando
    if (!_invoiceLogoImg || !_invoiceLogoImg.complete || _invoiceLogoImg.naturalWidth === 0) {
        try {
            await new Promise((resolve) => {
                const img = new Image();
                img.onload = () => { _invoiceLogoImg = img; resolve(); };
                img.onerror = () => resolve();
                img.src = 'assets/nova-factura.png';
                setTimeout(resolve, 500);
            });
        } catch (e) { }
    }

    // Configuración visual del ticket
    const SCALE = 2;
    const WIDTH = 320 * SCALE;
    const PAD = 20 * SCALE;
    const CONTENT_W = WIDTH - PAD * 2;
    const FONT_SIZE = 11 * SCALE;
    const SMALL_FONT_SIZE = 10 * SCALE;
    const LINE_H = Math.round(FONT_SIZE * 1.5);
    const FONT = FONT_SIZE + "px 'Courier New', Courier, monospace";
    const FONT_BOLD = "bold " + FONT_SIZE + "px 'Courier New', Courier, monospace";
    const FONT_SMALL = SMALL_FONT_SIZE + "px 'Courier New', Courier, monospace";

    function wrapText(ctx, text, maxWidth) {
        const lines = [];
        let currentLine = '';
        for (let i = 0; i < text.length; i++) {
            const testLine = currentLine + text[i];
            if (ctx.measureText(testLine).width > maxWidth && currentLine.length > 0) {
                lines.push(currentLine);
                currentLine = text[i];
            } else {
                currentLine = testLine;
            }
        }
        if (currentLine) lines.push(currentLine);
        return lines;
    }

    function drawDashedDivider(ctx, y) {
        ctx.save();
        ctx.setLineDash([4 * SCALE, 3 * SCALE]);
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 1 * SCALE;
        ctx.beginPath();
        ctx.moveTo(PAD, y);
        ctx.lineTo(WIDTH - PAD, y);
        ctx.stroke();
        ctx.restore();
    }

    // Pre-calcular alturas
    const measureCanvas = document.createElement('canvas');
    measureCanvas.width = 1;
    measureCanvas.height = 1;
    const measureCtx = measureCanvas.getContext('2d');
    measureCtx.font = FONT;

    const ITEM_NAME_W = Math.round(CONTENT_W * 0.65);
    const itemsLayout = items.map(item => {
        const nameLines = wrapText(measureCtx, item.text, ITEM_NAME_W);
        return { nameLines, price: item.price, height: Math.max(nameLines.length, 1) * LINE_H + 4 * SCALE };
    });
    const totalItemsHeight = itemsLayout.reduce((sum, it) => sum + it.height, 0);

    // Calcular alto total
    let totalHeight = PAD;
    let logoDrawH = 0;
    if (_invoiceLogoImg && _invoiceLogoImg.naturalWidth > 0) {
        const logoScale = CONTENT_W / _invoiceLogoImg.naturalWidth;
        logoDrawH = Math.round(_invoiceLogoImg.naturalHeight * logoScale);
        totalHeight += logoDrawH + 10 * SCALE;
    }
    totalHeight += LINE_H * 3;           // info cliente (3 líneas)
    totalHeight += 5 * SCALE;            // espacio
    totalHeight += LINE_H;              // fecha/hora
    totalHeight += 5 * SCALE;            // espacio
    totalHeight += 16 * SCALE;           // divisor
    totalHeight += totalItemsHeight;     // ítems
    totalHeight += 10 * SCALE;           // margen ítems
    totalHeight += 16 * SCALE;           // divisor
    totalHeight += LINE_H * 3 + 5 * SCALE; // totales
    totalHeight += 30 * SCALE;           // margen footer
    totalHeight += LINE_H * 2;           // footer (2 líneas)
    totalHeight += PAD;                  // padding inferior

    // Renderizar Canvas
    const canvas = document.createElement('canvas');
    canvas.width = WIDTH;
    canvas.height = totalHeight;
    const ctx = canvas.getContext('2d');

    // Fondo blanco
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, WIDTH, totalHeight);

    ctx.fillStyle = '#000000';
    ctx.textBaseline = 'top';
    let curY = PAD;

    // Logo
    if (_invoiceLogoImg && _invoiceLogoImg.naturalWidth > 0) {
        ctx.drawImage(_invoiceLogoImg, PAD, curY, CONTENT_W, logoDrawH);
        curY += logoDrawH + 10 * SCALE;
    }

    // Info Cliente
    ctx.font = FONT;
    ctx.fillText('NOMBRE: ' + clientName, PAD, curY);
    curY += LINE_H;
    ctx.fillText('RIF: ' + clientRif, PAD, curY);
    curY += LINE_H;
    ctx.fillText('TELÉFONO: ' + clientPhone, PAD, curY);
    curY += LINE_H + 5 * SCALE;

    // Fecha / Hora
    ctx.fillText('FECHA: ' + fecha + '   HORA: ' + hora, PAD, curY);
    curY += LINE_H + 5 * SCALE;

    // Divisor
    curY += 8 * SCALE;
    drawDashedDivider(ctx, curY);
    curY += 8 * SCALE;

    // Ítems
    ctx.font = FONT;
    itemsLayout.forEach(item => {
        item.nameLines.forEach((line, lineIdx) => {
            ctx.fillText(line, PAD, curY + lineIdx * LINE_H);
        });
        const priceW = ctx.measureText(item.price).width;
        ctx.fillText(item.price, WIDTH - PAD - priceW, curY);
        curY += item.height;
    });
    curY += 10 * SCALE;

    // Divisor
    curY += 8 * SCALE;
    drawDashedDivider(ctx, curY);
    curY += 8 * SCALE;

    // Totales
    ctx.font = FONT_BOLD;
    const totalVal = currencySymbol + totalFactura.toFixed(2);
    ctx.fillText('TOTAL', PAD, curY);
    ctx.fillText(totalVal, WIDTH - PAD - ctx.measureText(totalVal).width, curY);
    curY += LINE_H;

    const methodVal = currencySymbol + totalFactura.toFixed(2);
    ctx.fillText(methodNameDisplay, PAD, curY);
    ctx.fillText(methodVal, WIDTH - PAD - ctx.measureText(methodVal).width, curY);
    curY += LINE_H + 5 * SCALE;

    const prodVal = '' + totalItems;
    ctx.fillText('TOTAL PRODUCTOS VENDIDOS:', PAD, curY);
    ctx.fillText(prodVal, WIDTH - PAD - ctx.measureText(prodVal).width, curY);
    curY += LINE_H;

    // Footer
    curY += 30 * SCALE;
    ctx.font = FONT_SMALL;
    const footer1 = '*** CONSERVE SU RECIBO PARA CUALQUIER RECLAMO ***';
    const footer2 = '**** LAS PIEZAS ELECTRICAS NO TIENEN GARANTIA ****';
    ctx.fillText(footer1, PAD + (CONTENT_W - ctx.measureText(footer1).width) / 2, curY);
    curY += LINE_H;
    ctx.fillText(footer2, PAD + (CONTENT_W - ctx.measureText(footer2).width) / 2, curY);

    const imgUrl = canvas.toDataURL('image/png');
    return { canvas, imgUrl, clientName, totalFactura, currencySymbol };
}

// ==========================================
// VISTA PREVIA DE FACTURA DIGITAL
// ==========================================
let _currentInvoiceImgUrl = null;

async function previewInvoice() {
    if (typeof cart === 'undefined' || cart.length === 0) {
        showNovaAlert({
            type: 'warning',
            title: 'Carrito Vacío',
            message: 'Agrega al menos un repuesto al carrito para ver la vista previa de la factura.'
        });
        return;
    }

    const btn = document.querySelector('.invoice-preview-btn');
    if (btn && btn.dataset.generating === 'true') return;
    const originalBtnText = btn ? btn.innerText : '';

    try {
        if (btn) {
            btn.innerText = "Generando vista...";
            btn.dataset.generating = 'true';
        }
        await new Promise(r => setTimeout(r, 60));

        const result = await buildInvoiceCanvas();
        if (result && result.imgUrl) {
            openInvoicePreviewModal(result.imgUrl, { isFallback: false });
        }
    } catch (e) {
        console.error("Error al previsualizar factura:", e);
        showNovaAlert({
            type: 'error',
            title: 'Error de Visualización',
            message: 'Hubo un error al generar la vista previa: ' + e.message
        });
    } finally {
        if (btn) {
            btn.innerText = originalBtnText;
            btn.dataset.generating = 'false';
        }
    }
}

function openInvoicePreviewModal(imgUrl, options = {}) {
    _currentInvoiceImgUrl = imgUrl;
    const modal = document.getElementById('invoicePreviewModal');
    const img = document.getElementById('invoicePreviewImg');
    const notice = document.getElementById('invoicePreviewNotice');

    if (img) img.src = imgUrl;
    if (notice) {
        if (options.isFallback) {
            notice.innerHTML = '📱 <strong>Factura generada con éxito:</strong> En iPhone o navegadores móviles, mantén presionada la imagen para <em>"Copiar"</em> o <em>"Compartir"</em> directamente, o usa el botón <strong>Descargar</strong>.';
            notice.className = 'nova-preview-tip nova-preview-tip-alert';
        } else {
            notice.innerHTML = '💡 <strong>Vista previa lista:</strong> Revisa el detalle o usa los botones inferiores para copiar la imagen o descargarla en tu dispositivo.';
            notice.className = 'nova-preview-tip';
        }
    }

    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeInvoicePreview(event) {
    if (event && event.target !== event.currentTarget && !event.target.classList.contains('nova-preview-close') && !event.target.classList.contains('nova-preview-btn-close')) {
        return;
    }
    const modal = document.getElementById('invoicePreviewModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

async function copyInvoiceFromPreview() {
    if (!_currentInvoiceImgUrl) return;
    const btn = document.getElementById('btnCopyFromPreview');
    const originalText = btn ? btn.innerHTML : '';

    try {
        if (btn) btn.innerHTML = '⏳ Copiando...';
        const fetchRes = await fetch(_currentInvoiceImgUrl);
        const blob = await fetchRes.blob();
        const clipItem = new ClipboardItem({ "image/png": blob });
        await navigator.clipboard.write([clipItem]);

        if (btn) {
            btn.innerHTML = '✅ ¡Copiado!';
            btn.classList.add('btn-success-state');
            setTimeout(() => {
                if (btn) {
                    btn.innerHTML = originalText;
                    btn.classList.remove('btn-success-state');
                }
            }, 2500);
        }

        showNovaAlert({
            type: 'success',
            title: '¡Factura Copiada!',
            message: 'La imagen ha sido copiada a tu portapapeles. Ya puedes pegarla en WhatsApp.',
            confirmText: '¡Excelente!'
        });
    } catch (err) {
        if (btn) btn.innerHTML = originalText;
        showNovaAlert({
            type: 'info',
            title: 'Copiado Manual',
            message: 'Tu navegador requiere copiado manual: mantén presionada la imagen de la factura y pulsa "Copiar" o "Compartir". También puedes usar el botón "Descargar".'
        });
    }
}

function downloadInvoiceFromPreview() {
    if (!_currentInvoiceImgUrl) return;
    const dateStr = new Date().toISOString().slice(0, 10);
    const link = document.createElement('a');
    link.href = _currentInvoiceImgUrl;
    link.download = `Factura-NOVA-${dateStr}-${Date.now().toString().slice(-4)}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showNovaAlert({
        type: 'success',
        title: '¡Descarga Iniciada!',
        message: 'La imagen de la factura se ha guardado en tus descargas.',
        confirmText: 'Listo'
    });
}

