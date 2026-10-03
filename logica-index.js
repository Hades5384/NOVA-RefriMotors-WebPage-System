// ==========================================
// 1. CONFIGURACIÓN DEL SISTEMA
// ==========================================
const TASA_BCV = 871.37;
const NUMERO_WHATSAPP = "584246192394";
const PORCENTAJE_UTILIDAD = 1.30;
const PORCENTAJE_IVA = 1.16;
const TASA_INTERNA = 1000;

// Mostrar tasa BCV en el encabezado
document.getElementById('bcv-display').innerText = `Bs. ${TASA_BCV.toFixed(2)}`;

const products = [

    // ============================================================== //
    // ============================================================== //

    // SECCIÓN: GASES REFRIGERANTES Y SOLDADURA //
    // (MANTENER EN REVISION CONSTANTE)

    // ============================================================== //
    // ============================================================== //

    {
        id: "GAS002",
        name: "Recarga de Gas Refrigerante R134a (Por Kilo)",
        category: "Refrigeración",
        model: "R134a",
        desc: `<b>Recarga de Gas R134a para Neveras / Autos</b><br><br>Servicio de recarga de gas refrigerante R134a kileado para neveras y automóviles. El precio indicado es por Kilo.`,
        costoCompra: 13.26153846,
        images: ["productos/GAS002.webp"],
        specs: { "Tipo": "Gas Refrigerante", "Gas": "R134a", "Presentación": "Recarga (Por Kilo)" }
    },
    {
        id: "GAS003",
        name: "Recarga de Gas Refrigerante R410a (Por Kilo)",
        category: "Refrigeración",
        model: "R410A",
        desc: `<b>Recarga de Gas R410A para Aires Acondicionados</b><br><br>Gas refrigerante R410A de alta eficiencia para aires acondicionados. El precio indicado es por Kilo.`,
        costoCompra: 13.26153846,
        images: ["productos/GAS003.webp"],
        specs: { "Tipo": "Gas Refrigerante", "Gas": "R410A", "Presentación": "Recarga (Por Kilo)" }
    },
    {
        id: "GAS006",
        name: "Lata de Gas Propano de 400gr Maxwell MAPP PRO",
        category: "Herramientas",
        model: "MAPP 400G",
        desc: `<b>Lata de Gas Propano de 400gr Maxwell MAPP Pro</b><br><br>Lata de gas propano Maxwell MAPP Pro ideal para trabajos de soldadura fuerte en tuberías de refrigeración. Presentación por unidad.`,
        costoCompra: 6.62307692,
        images: ["productos/GAS006.webp"],
        specs: { "Tipo": "Gas de Soldadura", "Gas": "Propano MAPP", "Presentación": "Lata de 400G" }
    },
    {
        id: "GAS007",
        name: "Recarga de Gas Refrigerante R404a (Por Kilo)",
        category: "Refrigeración",
        model: "R404a",
        desc: `<b>Recarga de Gas R404a para Cava-Cuarto</b><br><br>Gas refrigerante R404a diseñado para sistemas de refrigeración comercial y cavas cuarto. El precio indicado es por Kilo.`,
        costoCompra: 13.26153846,
        images: ["productos/GAS007.webp"],
        specs: { "Tipo": "Gas Refrigerante", "Gas": "R404a", "Presentación": "Recarga (Por Kilo)" }
    },
    {
        id: "GAS008",
        name: "Lata de Gas Refrigerante R600A de 160gr",
        category: "Refrigeración",
        model: "R600A 160G",
        desc: `<b>Lata de Gas Refrigerante R600a de 160gr</b><br><br>Gas refrigerante ecológico R600a en presentación de lata desechable de 160 gramos por unidad.`,
        costoCompra: 3.32307692,
        images: ["productos/GAS008.webp"],
        specs: { "Tipo": "Gas Refrigerante", "Gas": "R600A", "Presentación": "Lata de 160G" }
    },
    {
        id: "GAS012",
        name: "Recarga de Gas Refrigerante R407 (Por Kilo)",
        category: "Refrigeración",
        model: "R407",
        desc: `<b>Recarga de Gas R407 Industrial</b><br><br>Servicio de recarga de gas refrigerante R407 kileado para sistemas de aire acondicionado y refrigeración industrial. El precio indicado es por Kilo.`,
        costoCompra: 19.89230769,
        images: ["productos/GAS012.webp"],
        specs: { "Tipo": "Gas Refrigerante", "Gas": "R407", "Presentación": "Recarga (Por Kilo)" }
    },
    {
        id: "GAS013",
        name: "Lata de Gas Refrigerante R134a de 340gr",
        category: "Refrigeración",
        model: "R134A 340G",
        desc: `<b>Lata de Gas Refrigerante R134a 340gr</b><br><br>Gas refrigerante R134A en lata de 340 gramos con válvula de rosca fina.`,
        costoCompra: 7.99230769,
        images: ["productos/GAS013.webp"],
        specs: { "Tipo": "Gas Refrigerante", "Gas": "R134A", "Presentación": "Lata de 340G (Rosca Fina)" }
    },
    {
        id: "GAS018",
        name: "Recarga de Gas Refrigerante R32 (Por Kilo)",
        category: "Refrigeración",
        model: "R32",
        desc: `<b>Recarga de Gas Refrigerante R32 para Aires Acondicionados</b><br><br>Gas refrigerante R32 de nueva generación para aires acondicionados modernos. El precio indicado es por Kilo.`,
        costoCompra: 16.57692308,
        images: ["productos/GAS018.webp"],
        specs: { "Tipo": "Gas Refrigerante", "Gas": "R32", "Presentación": "Recarga (Por Kilo)" }
    },
    {
        id: "GAS019",
        name: "Recarga de Gas Refrigerante R422D (Por Kilo)",
        category: "Refrigeración",
        model: "R422D",
        desc: `<b>Recarga de Gas Refrigerante R422D para Aires Acondicionados</b><br><br>Gas refrigerante R422D especial para equipos de aire acondicionado nuevos. El precio indicado es por Kilo.`,
        costoCompra: 16.57692308,
        images: ["productos/GAS019.webp"],
        specs: { "Tipo": "Gas Refrigerante", "Gas": "R422D", "Presentación": "Recarga (Por Kilo)" }
    },
    {
        id: "GAS022",
        name: "Recarga de Gas Refrigerante R134a DuPont Original (Por Kilo)",
        category: "Refrigeración",
        model: "R134A DuPont",
        desc: `<b>Recarga de Gas Refrigerante R134a DuPont Original</b><br><br>Servicio de recarga de gas refrigerante premium R134A marca DuPont / Chemours. El precio indicado es por Kilo.`,
        costoCompra: 22.00000000,
        images: ["productos/GAS022.webp"],
        specs: { "Marca": "DuPont", "Gas": "R134A", "Presentación": "Recarga (Por Kilo)" }
    },
    {
        id: "GAS023",
        name: "Lata de Gas Propano Bernzomatic Botella de 400gr",
        category: "Herramientas",
        model: "Bernzomatic 400G",
        desc: `<b>Lata de Gas Propano Bernzomatic Botella 400gr</b><br><br>Cilindro de propano original marca Bernzomatic para sopletes y soldadura. Presentación por unidad de 400 gramos.`,
        costoCompra: 7.50000000,
        images: ["productos/GAS023.webp"],
        specs: { "Marca": "Bernzomatic", "Tipo": "Gas Propano", "Presentación": "Lata de 400G" }
    },
    {
        id: "GAS024",
        name: "Recarga de Gas Refrigerante R290a (Por Kilo)",
        category: "Refrigeración",
        model: "R290a",
        desc: `<b>Recarga de Gas Refrigerante R290a</b><br><br>Gas refrigerante ecológico de alta pureza R290a. El precio indicado es por Kilo.`,
        costoCompra: 9.94615385,
        images: ["productos/GAS024.webp"],
        specs: { "Tipo": "Gas Refrigerante", "Gas": "R290a", "Presentación": "Recarga (Por Kilo)" }
    },
    {
        id: "GAS025",
        name: "Recarga de Gas Refrigerante R507A (Por Kilo)",
        category: "Refrigeración",
        model: "R507A",
        desc: `<b>Recarga de Gas Refrigerante R507A</b><br><br>Mezcla de gas refrigerante R507A para bajas y medias temperaturas. El precio indicado es por Kilo.`,
        costoCompra: 13.26153846,
        images: ["productos/GAS025.webp"],
        specs: { "Tipo": "Gas Refrigerante", "Gas": "R507A", "Presentación": "Recarga (Por Kilo)" }
    },
    {
        id: "GAS029",
        name: "Lata de Gas Refrigerante R600a de 340gr Cowplandt",
        category: "Refrigeración",
        model: "R600A 340G",
        desc: `<b>Lata de Gas Refrigerante R600a de 340gr Cowplandt</b><br><br>Gas refrigerante ecológico R600a marca Cowplandt. Presentación de lata de 340 gramos.`,
        costoCompra: 4.63076923,
        images: ["productos/GAS029.webp"],
        specs: { "Marca": "Cowplandt", "Gas": "R600A", "Presentación": "Lata de 340G" }
    },
    {
        id: "GAS031",
        name: "Recarga de Gas Refrigerante R417a (Por Kilo)",
        category: "Refrigeración",
        model: "R417A",
        desc: `<b>Recarga de Gas Refrigerante R417A</b><br><br>Sustituto ecológico para R22 en equipos de aire acondicionado. El precio indicado es por Kilo.`,
        costoCompra: 16.57692308,
        images: ["productos/GAS031.webp"],
        specs: { "Tipo": "Gas Refrigerante", "Gas": "R417A", "Presentación": "Recarga (Por Kilo)" }
    },
    {
        id: "GAS032",
        name: "Lata de Gas Refrigerante R290 de 300gr",
        category: "Refrigeración",
        model: "R290 300G",
        desc: `<b>Lata de Gas Refrigerante R290 de 300gr</b><br><br>Gas refrigerante ecológico R290 de alta pureza. Presentación en lata de 300 gramos por unidad.`,
        costoCompra: 6.63076923,
        images: ["productos/GAS032.webp"],
        specs: { "Tipo": "Gas Refrigerante", "Gas": "R290", "Presentación": "Lata de 300G" }
    },
    {
        id: "GAS034",
        name: "Lata de Gas Refrigerante R134a de 750gr Cowplandt",
        category: "Refrigeración",
        model: "R134A 750G",
        desc: `<b>Lata de Gas Refrigerante R134a de 750gr Cowplandt</b><br><br>Cilindro desechable de gas refrigerante R134A marca Cowplandt. Presentación de 750 gramos.`,
        costoCompra: 13.26153846,
        images: ["productos/GAS034.webp"],
        specs: { "Marca": "Cowplandt", "Gas": "R134A", "Presentación": "Lata de 750G" }
    },

    // ============================================================== //
    // ============================================================== //

    // DESDE AQUI CODIGOS NUEVOS

    // ============================================================== //
    // ============================================================== //


    {
        id: "MVE-VARIANTE",
        name: "Motor Ventilador Evaporador Split (Consola Interna)",
        category: "Motores",
        model: "Varias Medidas",
        desc: `<b>Motor Ventilador de Evaporador (Split)</b><br><br>Motor de repuesto para la turbina de la unidad interna (consola) de aires acondicionados tipo Split a 220V. Disponibles en distintas capacidades (W) y longitudes de eje. Verifique el largo del eje de su motor dañado antes de elegir.`,
        costoCompra: 13.26153846, // Costo base (MVE006)
        images: ["productos/MVE.webp"],
        specs: { "Tipo": "Motor Evaporador", "Voltaje": "220V", "Uso": "Consola Interna (Split)" },
        variants: [
            // Ejes Cortos (aprox 3.3cm - 3.5cm)
            { id: "MVE016", name: "16W 220V (Eje 3.3 CM)", costoCompra: 16.41538462 },
            { id: "MVE019", name: "19W 220V (Eje 3.3 CM)", costoCompra: 13.30769231 },
            { id: "MVE024", name: "20W 220V (Eje 3.5 CM)", costoCompra: 13.26153846 },
            { id: "MVE023", name: "23W 220V (Eje 3.3 CM)", costoCompra: 18.37692308 },
            { id: "MVE006", name: "30W 220V (Eje 3.3 CM)", costoCompra: 13.26153846 },
            { id: "MVE007", name: "33W 220V (Eje 3.3 CM)", costoCompra: 14.58461538 },

            // Ejes Largos (7.5cm - 7.8cm y Especiales)
            { id: "MVE001", name: "12W 220V (Eje 7.5 CM)", costoCompra: 18.62307692 },
            { id: "MVE003", name: "22W 220V (Eje 7.5 CM)", costoCompra: 18.30000000 },
            { id: "MVC031", name: "25W 220V (Eje 7.5 CM)", costoCompra: 17.89230769 },
            { id: "MVE005", name: "26W 220V (Eje 7.5 CM)", costoCompra: 24.33076923 },
            { id: "MVE027", name: "26W 220V (Eje 7.8 CM)", costoCompra: 19.89230769 },
            { id: "MVE025", name: "27W 220V (Eje Largo)", costoCompra: 23.21538462 },

            // Modelos Específicos / Marcas
            { id: "MVE022", name: "22W 220V (Haier B 18kBTU)", costoCompra: 23.20769231 },
            { id: "MVE026", name: "26W 220V (KSFD-20A)", costoCompra: 13.26153846 },
            { id: "MVE008", name: "35W 220V (Landsfoss)", costoCompra: 14.58461538 },
            { id: "MVE009", name: "40W 220V (Landsfoss)", costoCompra: 19.26923077 }
        ]
    },
    {
        id: "MVC-VARIANTE",
        name: "Motor Ventilador Condensador Split (Unidad Externa)",
        category: "Motores",
        model: "Varias Medidas",
        desc: `<b>Motor Ventilador de Condensador (Split)</b><br><br>Motor de repuesto para la aspa de la unidad externa (condensadora) de aires acondicionados tipo Split a 220V. Resistente a la intemperie y altas temperaturas. Verifique el grosor del eje (5/16 o 1/2) antes de realizar su pedido.`,
        costoCompra: 17.89230769, // Costo base (MVC029)
        images: ["productos/MCV.webp"],
        specs: { "Tipo": "Motor Condensador", "Voltaje": "220V", "Uso": "Unidad Externa (Split)" },
        variants: [
            // Eje 5/16
            { id: "MVC029", name: "25W 220V (Eje 5/16)", costoCompra: 17.89230769 },
            { id: "MVC030", name: "30W 220V (Eje 5/16)", costoCompra: 17.89230769 },
            { id: "MVC035", name: "35W 220V (Eje 5/16)", costoCompra: 17.90000000 },
            { id: "MVC100", name: "40W 220V (Eje 5/16 YDK40)", costoCompra: 19.89230769 },
            { id: "MVC051", name: "50W 220V (Eje 5/16)", costoCompra: 29.38461538 },

            // Eje 1/2
            { id: "MVC050", name: "50W 220V (Eje 1/2)", costoCompra: 23.20769231 },

            // Modelos Específicos / Marcas
            { id: "MVC110", name: "33W 220V (Haier 12/18kBTU)", costoCompra: 16.56923077 },
            { id: "MVC032", name: "36W 220V (CY 18kBTU)", costoCompra: 26.52307692 }
        ]
    },
    {
        id: "CLC001",
        name: "Cuchilla Oster de 4 Aletas P/Hielo Original",
        category: "Licuadoras",
        model: "4 Aletas Original",
        desc: `<b>Cuchilla Picahielo Oster Original de 4 Aletas</b><br><br>Repuesto original Oster diseñado con 4 aspas de acero inoxidable de alta resistencia. Ideal para triturar hielo y procesar alimentos duros sin perder el filo.`,
        costoCompra: 3.64615385,
        images: ["productos/CUCHILLA_4_ASPAS_OSTER.webp"],
        specs: { "Material": "Acero Inoxidable", "Aletas": "4", "Compatibilidad": "Rosca Estándar Oster" }
    },
    {
        id: "CLC032",
        name: "Cuchilla Oster de 6 Aletas P/Hielo Original",
        category: "Licuadoras",
        model: "4980 (6 Aletas)",
        desc: `<b>Cuchilla Oster de 6 Aletas Procesadora Original</b><br><br>Repuesto de alto rendimiento (Modelo 4980) con diseño de 6 aspas en múltiples niveles para un procesado rápido y uniforme. Máxima potencia para batidos y trituración de hielo.`,
        costoCompra: 6.69230769,
        images: ["productos/CLC032.webp"],
        specs: { "Material": "Acero Inoxidable", "Aletas": "6", "Modelo OEM": "4980" }
    },
    {
        id: "JLC001",
        name: "Juego Cuadrante Oster Rosca Gruesa Original",
        category: "Licuadoras",
        model: "BLSTAC-KIT",
        desc: `<b>Conjunto de Acople Cuadrante Oster Original</b><br><br>Kit de acoplamiento de rosca gruesa original para licuadoras Oster. Acople metálico diseñado para transmitir toda la potencia del motor con máxima durabilidad y desempeño.`,
        costoCompra: 1.65384615,
        images: ["productos/JLC001.webp"],
        specs: { "Marca": "Oster", "Tipo": "Cuadrante / Acople", "Rosca": "Gruesa", "Material": "Metálico" }
    },
    {
        id: "FIL-SUCCION-VAR",
        name: "Filtro Secador de Succión Soldable (Serie SFX)",
        category: "Refrigeración",
        model: "Serie SFX",
        desc: `<b>Filtro Secador de Succión Soldable</b><br><br>Filtro secador diseñado específicamente para instalarse en la línea de succión de sistemas comerciales e industriales. Ayuda a retener contaminantes, ácidos y humedad antes de que ingresen y dañen el compresor.`,
        costoCompra: 10.58461538, // Costo base (3/8")
        images: [
            "productos/FIL150.webp",
            "productos/FIL108.webp",
            "productos/FIL109.webp",
            "productos/FIL104.webp"
        ],
        specs: { "Tipo": "Línea de Succión", "Conexión": "Soldable (ODF)", "Uso": "Protección de Compresor" },
        variants: [
            { id: "FIL150", name: "Medida: 3/8\" Soldable (SFX-283T)", costoCompra: 10.58461538 },
            { id: "FIL108", name: "Medida: 1/2\" Soldable (SFX-284T)", costoCompra: 10.75384615 },
            { id: "FIL109", name: "Medida: 5/8\" Soldable (SFX-285T)", costoCompra: 11.01538462 },
            { id: "FIL104", name: "Medida: 7/8\" Soldable (SFX-287T)", costoCompra: 15.00000000 }
        ]
    },
    {
        id: "FIL-ROSCADO-ALTA",
        name: "Filtro Secador de Rosca Alta Capacidad (Serie S)",
        category: "Refrigeración",
        model: "Series S-300 / S-400",
        desc: `<b>Filtro Secador de Rosca de Alta Capacidad</b><br><br>Filtros desecantes de núcleo sólido de gran volumen (Series 300 y 400) para la línea de líquido. Ideales para equipos de refrigeración central y aire acondicionado comercial de gran tonelaje.`,
        costoCompra: 6.43076923, // Costo base (303 ISY)
        images: [
            "productos/FIL135.webp",
            "productos/FIL151.webp",
            "productos/FIL169.webp",
            "productos/FIL129.webp",
            "productos/FIL132.webp",
            "productos/FIL113.webp",
            "productos/FIL118.webp"
        ],
        specs: { "Tipo": "Alta Capacidad (Núcleo Sólido)", "Conexión": "Rosca (Flare)", "Uso": "Equipos de Gran Tonelaje" },
        variants: [
            { id: "FIL135", name: "3/8\" 303 ISYN (5 a 7.5 Toneladas)", costoCompra: 6.43076923 },
            { id: "FIL151", name: "3/8\" S-303 (5 a 7.5 Toneladas)", costoCompra: 7.94615385 },
            { id: "FIL169", name: "1/2\" S-304 (10 Toneladas)", costoCompra: 8.75384615 },
            { id: "FIL129", name: "5/8\" S-305 (5 a 10 Toneladas)", costoCompra: 9.94615385 },
            { id: "FIL132", name: "7/8\" S-307 (10 Toneladas)", costoCompra: 9.27692308 },
            { id: "FIL113", name: "5/8\" S-415 (15 Toneladas)", costoCompra: 13.26153846 },
            { id: "FIL118", name: "1/2\" S-414 (10 a 15 Toneladas)", costoCompra: 16.45384615 }
        ]
    },
    {
        id: "FIL-LINEA-ROSCADO",
        name: "Filtro Secador de Rosca (Línea de Líquido)",
        category: "Refrigeración",
        model: "Varias Medidas",
        desc: `<b>Filtro Secador de Rosca (Flare)</b><br><br>Filtro desecante de núcleo sólido para la línea de líquido en sistemas de aire acondicionado y refrigeración comercial. Conexión roscada (Flare) para fácil instalación y mantenimiento. Seleccione la capacidad y medida.`,
        costoCompra: 3.97692308, // Costo base (FIL100)
        images: [
            "productos/FIL100.webp",
            "productos/FIL112.webp",
            "productos/FIL130.webp",
            "productos/FIL131.webp",
            "productos/FIL146.webp",
            "productos/FIL152.webp",
            "productos/FIL154.webp",
            "productos/FIL158.webp",
            "productos/FIL160.webp",
            "productos/FIL161.webp",
            "productos/FIL170.webp",
            "productos/FIL171.webp"
        ],
        specs: { "Tipo": "Línea de Líquido (Núcleo Sólido)", "Conexión": "Rosca (Flare)", "Uso": "A/A y Refrigeración" },
        variants: [
            { id: "FIL171", name: "1/4 SEK-032 Landsfoss (3 TON)", costoCompra: 2.43076923 },
            { id: "FIL170", name: "1/4 032 MEK-032 Maxwell", costoCompra: 2.59230769 },
            { id: "FIL160", name: "1/4 Núcleo Sólido Maxwell", costoCompra: 3.04615385 },
            { id: "FIL112", name: "1/4 SEK-052 (1-2 TON)", costoCompra: 3.20000000 },
            { id: "FIL154", name: "1/4 FD032S Degar", costoCompra: 3.96923077 },
            { id: "FIL130", name: "1/4 SD-162 ISYN (1-3 TON)", costoCompra: 4.96923077 },
            { id: "FIL100", name: "3/8 SEK-163F Económico (3-5 TON)", costoCompra: 3.97692308 },
            { id: "FIL131", name: "3/8 SEK-163 Landsfoss (3-5 TON)", costoCompra: 5.96923077 },
            { id: "FIL152", name: "1/2 SEK-164 Landsfoss (3-5 TON)", costoCompra: 5.29230769 },
            { id: "FIL161", name: "5/8 Núcleo Sólido Maxwell", costoCompra: 4.63076923 },
            { id: "FIL146", name: "5/8 FD-165 Núcleo Sólido", costoCompra: 8.62307692 },
            { id: "FIL158", name: "7/8 FD417S Degar (5-10 TON)", costoCompra: 19.89230769 }
        ]
    },
    {
        id: "FIL-LINEA-SOLDABLE",
        name: "Filtro Secador Soldable (Línea de Líquido)",
        category: "Refrigeración",
        model: "Varias Medidas",
        desc: `<b>Filtro Secador Soldable (ODF)</b><br><br>Filtro de bloque sólido desecante diseñado para conexiones soldables permanentes, previniendo fugas en sistemas de refrigeración de alta exigencia.`,
        costoCompra: 5.29230769, // Costo base (FIL149)
        images: [
            "productos/FIL149.webp",
            "productos/FIL153.webp",
            "productos/FIL157.webp",
            "productos/FIL158.webp"
        ],
        specs: { "Tipo": "Línea de Líquido (Núcleo Sólido)", "Conexión": "Soldable (ODF)", "Uso": "Refrigeración Comercial" },
        variants: [
            { id: "FIL149", name: "1/4 SG-162S Soldable ISYN", costoCompra: 5.29230769 },
            { id: "FIL153", name: "1/2 FD164S Soldable Degar", costoCompra: 7.95384615 },
            { id: "FIL157", name: "5/8 FD305S Soldable Degar", costoCompra: 17.30000000 },
            { id: "FIL158", name: "7/8 FD417S Degar (5-10 TON)", costoCompra: 19.89230769 }
        ]
    },
    {
        id: "FIL-VISOR-VARIANTE",
        name: "Filtro Secador de Línea con Visor de Líquido",
        category: "Refrigeración",
        model: "163 / 163S",
        desc: `<b>Filtro Secador de Línea con Visor Integrado</b><br><br>Filtro de núcleo sólido de alta capacidad con un práctico visor (mirilla) integrado que permite monitorear el flujo de refrigerante y detectar humedad en el sistema.`,
        costoCompra: 9.95384615,
        images: ["productos/FIL122-172.webp"],
        specs: { "Característica": "Visor Integrado (Mirilla)", "Medida": "3/8", "Uso": "Monitoreo y Filtrado" },
        variants: [
            { id: "FIL122", name: "3/8 163 Núcleo S. con Visor (Rosca)", costoCompra: 9.95384615 },
            { id: "FIL172", name: "3/8 163S Núcleo S. con Visor (Soldable)", costoCompra: 9.95384615 }
        ]
    },
    {
        id: "MTU-GENERICO-VAR",
        name: "Motor W (Vatiaje) para Nevera / Cava (Genérico)",
        category: "Motores",
        model: "Varias Capacidades",
        desc: `<b>Motor Ventilador Multiuso (Vatiaje)</b><br><br>Motor de extracción y ventilación ideal para difusores y condensadores de cavas cuarto y neveras comerciales. Disponibles en versiones con base y aspa, o reforzados con rolineras. Seleccione la potencia y voltaje requeridos.`,
        costoCompra: 7.00000000, // Costo base (10W 110V C/Base)
        images: ["productos/MTU-MOTOR_W.webp"],
        specs: { "Tipo": "Motor de Vatiaje (W)", "Uso": "Cavas / Neveras", "Conexión": "Universal" },
        variants: [
            { id: "MTU001", name: "10W 110V (C/ Base y Aspa Aluminio)", costoCompra: 7.00000000 },
            { id: "MTU002", name: "10W 110V (Con Rolinera)", costoCompra: 12.37692308 },
            { id: "MTU015", name: "10W 220V (C/ Base y Aspa)", costoCompra: 14.00000000 },
            { id: "MTU014", name: "10/15W 110-220V (Plástico 1300RPM)", costoCompra: 11.93076923 },
            { id: "MTU009", name: "16W 110V (C/ Base y Aspa)", costoCompra: 13.26153846 },
            { id: "MTU003", name: "18W 110V (C/ Base y Aspa)", costoCompra: 14.59230769 },
            { id: "MTU008", name: "18W 110V (Con Rolinera)", costoCompra: 17.23846154 },
            { id: "MTU004", name: "25W 110V (C/ Base y Aspa)", costoCompra: 16.57692308 },
            { id: "MTU012", name: "25W 110V (Con Rolinera)", costoCompra: 18.56153846 },
            { id: "MTU005", name: "34W 220V (C/ Base y Aspa)", costoCompra: 22.40000000 },
            { id: "MTU006", name: "34W 110V (C/ Base y Aspa)", costoCompra: 18.56153846 },
            { id: "MTU010", name: "34W 110V (Con Rolinera)", costoCompra: 22.40000000 },
            { id: "MTU016", name: "50W 220V (C/ Base y Aspa)", costoCompra: 28.39230769 }
        ]
    },
    {
        id: "MTU-MARCAS-VAR",
        name: "Motor W (Vatiaje) Landsfoss / Cowplandt",
        category: "Motores",
        model: "Landsfoss / Cowplandt",
        desc: `<b>Motor Ventilador de Vatiaje (Marcas Importadas)</b><br><br>Motores de ventilación de alta calidad y rendimiento comprobado de las marcas Landsfoss y Cowplandt, para aplicaciones comerciales en cavas y exhibidores.`,
        costoCompra: 14.00000000,
        images: ["productos/MTU-MOTOR_W.webp"],
        specs: { "Tipo": "Motor de Vatiaje (W)", "Uso": "Cavas / Neveras Comerciales", "Calidad": "Importada" },
        variants: [
            { id: "MTU013", name: "10W 220V 1550RPM (Landsfoss)", costoCompra: 14.00000000 },
            { id: "MTU109", name: "18W 220V 1550RPM (Landsfoss)", costoCompra: 15.06923077 },
            { id: "MTU007", name: "50W 220V 1550RPM (Landsfoss)", costoCompra: 28.39230769 },
            { id: "MTU011", name: "50W 220V 1550RPM (Cowplandt)", costoCompra: 23.18461538 }
        ]
    },
    {
        id: "MTU-MOTORVENCA-VAR",
        name: "Motor W (Vatiaje) Motorvenca Original",
        category: "Motores",
        model: "Motorvenca",
        desc: `<b>Motor Ventilador Motorvenca (Original)</b><br><br>La legendaria durabilidad de Motorvenca en motores de vatiaje. Diseñados para resistir el trabajo pesado y continuo en cavas cuarto y sistemas de congelación industrial.`,
        costoCompra: 20.00000000, // Costo base (5W)
        images: ["productos/MTU-MOTOR_W_MOTORVENCA.webp"],
        specs: { "Marca": "Motorvenca", "Tipo": "Motor de Vatiaje (W)", "Origen": "Nacional (Alta Durabilidad)" },
        variants: [
            { id: "MTU108", name: "5W 110V 1550RPM", costoCompra: 20.00000000 },
            { id: "MTU100", name: "10W 110V 1550RPM", costoCompra: 23.53846154 },
            { id: "MTU101", name: "10W 220V 1550RPM", costoCompra: 23.20769231 },
            { id: "MTU102", name: "18W 110V 1550RPM", costoCompra: 25.19230769 },
            { id: "MTU106", name: "18W 220V 1550RPM", costoCompra: 24.56923077 },
            { id: "MTU103", name: "34W 110V 1550RPM", costoCompra: 34.83846154 },
            { id: "MTU104", name: "34W 220V 1550RPM", costoCompra: 39.77692308 },
            { id: "MTU107", name: "50W 110V 1625RPM", costoCompra: 46.41538462 },
            { id: "MTU105", name: "50W 220V 1625RPM", costoCompra: 53.03846154 }
        ]
    },
    {
        id: "CAR-SPP-VARIANTE",
        name: "Start Kit / Súper Arranque 220V (Serie SPP)",
        category: "Capacitores",
        model: "Serie SPP",
        desc: `<b>Start Kit de Arranque (Súper Arranque) 220V</b><br><br>Kit de arranque de estado sólido diseñado para proporcionar un torque adicional a compresores de aire acondicionado que están atascados o tienen dificultades para arrancar. Seleccione la capacidad requerida.`,
        costoCompra: 2.96153846, // Costo base (SPP5)
        images: ["productos/CAR001.webp", "productos/CAR002.webp", "productos/CAR004.webp"],
        specs: { "Tipo": "Start Kit (Estado Sólido)", "Voltaje": "220V", "Uso": "Aires Acondicionados" },
        variants: [
            { id: "CAR001", name: "Modelo: SPP5 (Pequeño 300%)", costoCompra: 2.96153846 },
            { id: "CAR002", name: "Modelo: SPP6 (Mediano 500%)", costoCompra: 4.44615385 },
            { id: "CAR004", name: "Modelo: SPP7 (Grande 600%)", costoCompra: 8.48461538 }
        ]
    },
    {
        id: "CAR003",
        name: "Start Kit de Arranque 3 en 1 para Nevera",
        category: "Protectores",
        model: "3 en 1",
        desc: `<b>Start Kit de Arranque 3 en 1 para Nevera</b><br><br>Kit de reemplazo integral (3 en 1) que sustituye simultáneamente el relé, el protector térmico y el capacitor de arranque en compresores de neveras domésticas y comerciales ligeras.`,
        costoCompra: 5.29230769,
        images: ["productos/CAR003.webp"],
        specs: { "Tipo": "Kit 3 en 1", "Uso": "Neveras y Enfriadores", "Función": "Arranque y Protección" }
    },
    {
        id: "CAR300",
        name: "Start Kit de Arranque Relay/Potencial (4 a 5 Toneladas)",
        category: "Capacitores",
        model: "4-5 TON",
        desc: `<b>Start Kit de Arranque con Relay Potencial (4 a 5 Toneladas)</b><br><br>Kit de arranque pesado (Hard Start) equipado con relay potencial. Indispensable para vencer la inercia en compresores centrales y equipos de gran capacidad de 4 a 5 toneladas.`,
        costoCompra: 13.83076923,
        images: ["productos/CAR300.webp"],
        specs: { "Tipo": "Hard Start con Relay", "Capacidad": "4 a 5 Toneladas", "Uso": "Aires Centrales" }
    },
    {
        id: "TIM-NEVERA-VARIANTE",
        name: "Relojes (Timers) Defrost para Neveras",
        category: "Neveras / Cavas",
        model: "Varios Modelos",
        desc: `<b>Relojes Temporizadores de Descongelamiento</b><br><br>Repuestos de temporizadores de ciclo (Timers) para control de descongelamiento en neveras. Disponibles en configuración Asiatic, Koreano, Metálico y Ajustable.`,
        costoCompra: 3.35384615,
        images: [
            "productos/TIM010.webp",
            "productos/TIM011.webp",
            "productos/TIM016.webp",
            "productos/TIM028.webp",
            "productos/TIM028-2.webp",
            "productos/TIM-AJUSTABLE.webp",
            "productos/TIM-ASIATIC.webp",
            "productos/TIM-KOREANO.webp",
            "productos/TIM-METALICO.webp",
            "productos/TIM-RECARGABLE.webp"
        ],
        specs: { "Tipo": "Timer Defrost", "Aplicación": "Refrigeración Doméstica" },
        variants: [
            // --- TIPO ASIATIC ---
            { id: "TIM019", name: "Asiatic 10H-21M TMDGY35RB9", costoCompra: 7.95384615 },
            { id: "TIM011", name: "Asiatic 10H-21M TMDJX21RB9", costoCompra: 5.33076923 },
            { id: "TIM012", name: "Asiatic 10H-35M TMDJX35RB9", costoCompra: 9.94615385 },
            { id: "TIM013", name: "Asiatic 8H-21M Sankyo Negro", costoCompra: 5.30000000 },
            { id: "TIM027", name: "Asiatic 7H-30M TMDE625TA1", costoCompra: 3.10000000 },
            { id: "TIM016", name: "Asiatic 6H-21M TMDJ621ZN9", costoCompra: 3.82307692 },
            { id: "TIM023", name: "Asiatic 6H-25M TMDJ625ZQ9", costoCompra: 5.29230769 },
            { id: "TIM003", name: "Asiatic 3x1 8H-21M TMDE807TD", costoCompra: 3.96923077 },
            { id: "TIM007", name: "Asiatic 3x1 6H-25M DS-005", costoCompra: 3.96923077 },
            { id: "TIM025", name: "Asiatic 3x1 6H-35M DS005-35", costoCompra: 3.35384615 },

            // --- TIPO METÁLICO ---
            { id: "TIM004", name: "Metálico 6H-21M DS-002 M830", costoCompra: 4.06153846 },
            { id: "TIM005", name: "Metálico 8H-21M DTB-820MAX", costoCompra: 7.50000000 },
            { id: "TIM026", name: "Metálico 8H-21M Degar", costoCompra: 9.94615385 },

            // --- TIPO KOREANO ---
            { id: "TIM008", name: "Koreano 6H-30M DS-006", costoCompra: 3.60000000 },
            { id: "TIM024", name: "Koreano 12H-8M TD-20LVM SA", costoCompra: 3.96923077 },

            // --- TIPO AJUSTABLE ---
            { id: "TIM021", name: "Ajustable 4-6-8-10-12H Mabe", costoCompra: 5.35384615 },
            { id: "TIM020", name: "Ajustable 6-8-12H ISYN 220V", costoCompra: 5.96153846 },

            // --- MARCAS ESPECÍFICAS (MABE / HAIER) ---
            { id: "TIM010", name: "Peq Mabe/Haier 4321 DBYC100", costoCompra: 3.35384615 },
            { id: "TIM028", name: "Haier Negro 8H-21MIN", costoCompra: 4.00000000 }
        ]
    },
    {
        id: "RTK-GE-VARIANTE",
        name: "Kit de Relay y Capacitor para Nevera G.E.",
        category: "Protectores",
        model: "Varios Modelos",
        desc: `<b>Kit de Relay y Capacitor Original G.E.</b><br><br>Conjunto de relé de arranque y capacitor de trabajo, diseñado para reemplazo directo en compresores de neveras General Electric.`,
        costoCompra: 3.43846154,
        images: ["productos/RTK003.webp", "productos/RTK011.webp"],
        specs: { "Marca": "General Electric", "Tipo": "Kit de Arranque", "Uso": "Neveras G.E." },
        variants: [
            { id: "RTK003", name: "Modelo: WR07X10131", costoCompra: 3.43846154 },
            { id: "RTK011", name: "Modelo: WR09X10107", costoCompra: 3.63076923 }
        ]
    },
    {
        id: "SAS007",
        name: "Sensor para Nevera Samsung DA32-00006W",
        category: "Protectores",
        model: "DA32-00006W",
        desc: `<b>Sensor para Nevera Samsung DA32-00006W (Cable Amarillo)</b><br><br>Termistor original de reemplazo para el control de temperatura en refrigeradores Samsung.`,
        costoCompra: 1.65384615,
        images: ["productos/SAS007.png"],
        specs: { "Marca": "Samsung", "Tipo": "Sensor Termistor", "Color de Cable": "Amarillo" }
    },
    {
        id: "SAS016",
        name: "Sensor para Nevera Frigidaire / Electrolux",
        category: "Protectores",
        model: "Frigidaire/Electrolux",
        desc: `<b>Sensor Termistor para Nevera Frigidaire y Electrolux</b><br><br>Sensor de temperatura de alta precisión, compatible con diversos modelos de neveras Frigidaire y Electrolux.`,
        costoCompra: 2.14615385,
        images: ["productos/SAS016.png"],
        specs: { "Marca": "Frigidaire / Electrolux", "Tipo": "Sensor Termistor" }
    },
    {
        id: "TRM-NEVERA-VARIANTE",
        name: "Termostatos para Neveras y Congeladores",
        category: "Neveras / Cavas",
        model: "Varios Modelos",
        desc: `<b>Termostatos de Repuesto para Neveras y Congeladores</b><br><br>Controles de temperatura mecánicos con capilar para diferentes aplicaciones (neveras de 1 o 2 puertas, vitrinas, congeladores horizontales). Seleccione el modelo específico.`,
        costoCompra: 4.63846154,
        images: [
            "productos/TRM013.png",
            "productos/TRM014.png",
            "productos/TRM018-019.png",
            "productos/TRM020.png",
            "productos/TRM021.png",
            "productos/TRM022.png",
            "productos/TRM023.png"
        ],
        specs: { "Tipo": "Termostato Mecánico", "Aplicación": "Refrigeración Doméstica / Comercial" },
        variants: [
            { id: "TRM013", name: "Degar P1126 (Nevera/Vitrina)", costoCompra: 4.63846154 },
            { id: "TRM014", name: "Degar P1127 (Nevera/Vitrina)", costoCompra: 4.63846154 },
            { id: "TRM018", name: "K50P-1127-001 (+1.5C° a +5C°)", costoCompra: 6.06923077 },
            { id: "TRM019", name: "K50P-1126-001 (-24.5C° a -18C°)", costoCompra: 6.03846154 },
            { id: "TRM020", name: "RC-12473-8 (Puerta Sin Escarcha)", costoCompra: 5.90000000 },
            { id: "TRM021", name: "WPF27-7AL 125/250V (Congelador)", costoCompra: 2.79230769 },
            { id: "TRM022", name: "TSV0001-48 Robertshaw", costoCompra: 8.03846154 },
            { id: "TRM023", name: "RFR-4000-4K (Cong. Horizontal)", costoCompra: 4.37692308 },
            { id: "TRM001", name: "P1125 (Nev/Vitri/Exh)", costoCompra: 3.31538462 },
            { id: "TRM002", name: "P1126 (Cong/Freezer)", costoCompra: 3.30769231 },
            { id: "TRM003", name: "P1127 (Nev/Filtro Agua)", costoCompra: 3.30769231 },
            { id: "TRM008", name: "P1133 (Nevera 1 Puerta)", costoCompra: 2.65384615 },
        ]
    },
    {
        id: "TIM-UNIVERSAL-VARIANTE",
        name: "Reloj de Descongelación Universal para Nevera",
        category: "Neveras / Cavas",
        model: "Universal",
        desc: `<b>Reloj Temporizador Universal (Timer)</b><br><br>Reloj de descongelación electromecánico para refrigeradores. Disponible en ciclos de trabajo de 6 o 8 horas, con 21 minutos de deshielo.`,
        costoCompra: 3.15384615,
        images: ["productos/TIM001-002.webp"],
        specs: { "Tipo": "Temporizador de Deshielo", "Uso": "Universal", "Deshielo": "21 Minutos" },
        variants: [
            { id: "TIM002", name: "Ciclo: 8 Horas (Económico)", costoCompra: 3.15384615 },
            { id: "TIM001", name: "Ciclo: 6 Horas (DS-004)", costoCompra: 3.20000000 }
        ]
    },
    {
        id: "MCP001",
        name: "Medidor Capilar Americano de Precisión",
        category: "Herramientas",
        model: "Americano",
        desc: `<b>Regla Medidora de Tubo Capilar (Americana)</b><br><br>Herramienta de medición de alta precisión para determinar el diámetro interno de tubos capilares en sistemas de refrigeración. Indispensable para técnicos profesionales.`,
        costoCompra: 72.93846154,
        images: ["productos/MCP001.webp"],
        specs: { "Tipo": "Medidor de Diámetro Interno", "Origen": "Americano", "Uso": "Tubo Capilar" }
    },
    {
        id: "REM-VARIANTE",
        name: "Resistencia de Metal para Nevera",
        category: "Neveras / Cavas",
        model: "Varias Medidas",
        desc: `<b>Resistencia de Metal de Descongelación</b><br><br>Resistencia calefactora tubular metálica de repuesto, encargada de derretir la escarcha en el evaporador de las neveras No Frost. Seleccione la longitud adecuada para su equipo.`,
        costoCompra: 3.31538462, // Costo base (33 CM)
        images: ["productos/RESISTENCIAS_METALICAS.webp"],
        specs: { "Tipo": "Tubular Metálica", "Uso": "Sistema de Deshielo", "Compatibilidad": "Neveras No Frost" },
        variants: [
            { id: "REM010", name: "Medida: 33 CM", costoCompra: 3.31538462 },
            { id: "REM004", name: "Medida: 35 CM", costoCompra: 1.97692308 },
            { id: "REM012", name: "Medida: 36 CM", costoCompra: 2.88461538 },
            { id: "REM005", name: "Medida: 38 CM", costoCompra: 3.97692308 },
            { id: "REM007", name: "Medida: 41 CM", costoCompra: 3.30769231 },
            { id: "REM015", name: "Medida: 43 CM", costoCompra: 3.18461538 },
            { id: "REM008", name: "Medida: 45 CM", costoCompra: 3.23076923 },
            { id: "REM011", name: "Medida: 46 CM", costoCompra: 3.46153846 },
            { id: "REM001", name: "Medida: 47 CM", costoCompra: 3.25384615 },
            { id: "REM009", name: "Medida: 52 CM", costoCompra: 4.46153846 },
            { id: "REM014", name: "Medida: 53 CM", costoCompra: 4.49230769 },
            { id: "REM006", name: "Medida: 56 CM", costoCompra: 3.90000000 },
            { id: "REM003", name: "Medida: 65 CM", costoCompra: 6.50000000 },
            { id: "REM013", name: "Medida: 66 CM", costoCompra: 5.00000000 },
            { id: "REM100", name: "Medida: 87x7x87 CM (Doble)", costoCompra: 46.42307692 }
        ]
    },
    {
        id: "RES-VIDRIO-VARIANTE",
        name: "Resistencia de Vidrio para Nevera",
        category: "Neveras / Cavas",
        model: "Varias Medidas",
        desc: `<b>Resistencia de Vidrio de Descongelación</b><br><br>Resistencia de cuarzo/vidrio para sistemas de descongelación de refrigeradores. Alta transferencia térmica. Seleccione la longitud en pulgadas o centímetros según el modelo de su nevera.`,
        costoCompra: 1.65384615, // Costo base (10")
        images: ["productos/RESISTENCIAS_DE_VIDRIO.webp"],
        specs: { "Tipo": "Tubo de Vidrio/Cuarzo", "Uso": "Sistema de Deshielo", "Compatibilidad": "Neveras No Frost" },
        variants: [
            { id: "RES001", name: "Medida: 8\" (20.32 CM)", costoCompra: 3.51538462 },
            { id: "RES002", name: "Medida: 9\" (22.86 CM)", costoCompra: 1.65384615 },
            { id: "RES003", name: "Medida: 10\" (26 CM)", costoCompra: 1.65384615 },
            { id: "RES013", name: "Medida: 10-5/8\" (276)", costoCompra: 3.56153846 },
            { id: "RES014", name: "Medida: 11\" (27.94 CM)", costoCompra: 2.16153846 },
            { id: "RES004", name: "Medida: 12\" (30 CM)", costoCompra: 2.31538462 },
            { id: "RES005", name: "Medida: 14\" (36 CM)", costoCompra: 1.86153846 },
            { id: "RES006", name: "Medida: 16\" (40.6 CM)", costoCompra: 3.07692308 },
            { id: "RES007", name: "Medida: 18\" (46 CM)", costoCompra: 2.31538462 },
            { id: "RES009", name: "Medida: 21-3/16\" (55 CM)", costoCompra: 3.97692308 },
            { id: "RES010", name: "Medida: 21-5/8\" (263)", costoCompra: 4.45384615 },
            { id: "RES012", name: "Medida: 22-13/16\" (60 CM)", costoCompra: 3.49230769 }
        ]
    },
    {
        id: "BIM-UNIVERSAL-VAR",
        name: "Bimetal para Nevera Universal (Serie L)",
        category: "Protectores",
        model: "Serie L (L45 a L70)",
        desc: `<b>Bimetal Universal para Descongelación</b><br><br>Termostato bimetálico de reemplazo universal para sistemas de deshielo en neveras No Frost. Protege el evaporador controlando el encendido de la resistencia. Seleccione la medida.`,
        costoCompra: 1.32307692, // Costo base (L45)
        images: ["productos/BIMETALES_L.webp"],
        specs: { "Tipo": "Universal (Serie L)", "Uso": "Sistema de Deshielo", "Cables": "2 Cables" },
        variants: [
            { id: "BIM002", name: "Modelo L45 (20F)", costoCompra: 1.32307692 },
            { id: "BIM003", name: "Modelo L50 (20F)", costoCompra: 1.32307692 },
            { id: "BIM004", name: "Modelo L55 (20F/35F)", costoCompra: 1.32307692 },
            { id: "BIM005", name: "Modelo L60", costoCompra: 1.32307692 },
            { id: "BIM006", name: "Modelo L70 (40F)", costoCompra: 1.31538462 }
        ]
    },
    {
        id: "BIM-SAMSUNG-VAR",
        name: "Bimetal / Termofusible para Nevera Samsung",
        category: "Protectores",
        model: "Serie N",
        desc: `<b>Bimetal y Termofusible para Nevera Samsung</b><br><br>Repuestos específicos para sistemas de descongelación de refrigeradores Samsung. Disponibles en variantes de 2 o 3 cables con conectores originales.`,
        costoCompra: 1.97692308,
        images: [
            "productos/BIM009.webp",
            "productos/BIM010.webp",
            "productos/BIM012.webp",
            "productos/BIM013.webp",
            "productos/BIM029.webp",
            "productos/BIM034.webp"
        ],
        specs: { "Marca": "Samsung", "Tipo": "Bimetal de Deshielo", "Conexión": "Conectores Específicos" },
        variants: [
            { id: "BIM013", name: "Samsung N13-4 (TH-B2-004)", costoCompra: 0.79230769 },
            { id: "BIM012", name: "Samsung N8 (2 Cables) Conector 6192", costoCompra: 0.93076923 },
            { id: "BIM034", name: "Samsung N13 (3 Cables) C/Sensor", costoCompra: 1.26153846 },
            { id: "BIM010", name: "Samsung N9 (2 Cables) Conector 3003", costoCompra: 1.97692308 },
            { id: "BIM029", name: "Samsung N13-4 (2 Cables Naranja)", costoCompra: 1.97692308 },
            { id: "BIM009", name: "Samsung N13 (2 Cables)", costoCompra: 2.84615385 }
        ]
    },
    {
        id: "BIM-LG-VAR",
        name: "Bimetal / Termofusible para Nevera LG",
        category: "Protectores",
        model: "Varios Modelos",
        desc: `<b>Bimetal y Termofusible para Nevera LG</b><br><br>Sensores bimetálicos y fusibles térmicos diseñados para encajar en el cableado original de neveras LG.`,
        costoCompra: 1.97692308,
        images: [
            "productos/BIM008.webp",
            "productos/BIM016.webp",
            "productos/BIM017.webp",
            "productos/BIM020.webp"
        ],
        specs: { "Marca": "LG", "Tipo": "Bimetal / Fusible", "Uso": "Deshielo Evaporador" },
        variants: [
            { id: "BIM016", name: "Fusible Térmico LG (2 Cables Roj/Ama)", costoCompra: 0.46923077 },
            { id: "BIM008", name: "Bimetal LG N8 (3 Cables 3002)", costoCompra: 1.97692308 },
            { id: "BIM017", name: "Bimetal LG (4 Cables C/Fusible/Sensor)", costoCompra: 2.33846154 },
            { id: "BIM020", name: "Bimetal LG N13-4 (4 Cables Azul)", costoCompra: 3.31538462 }
        ]
    },
    {
        id: "BIM-MABE-VAR",
        name: "Bimetal de Repuesto para Nevera Mabe / G.E.",
        category: "Protectores",
        model: "Varios Modelos",
        desc: `<b>Bimetal de Repuesto para Nevera Mabe</b><br><br>Componente de seguridad térmica para sistemas No Frost en neveras Mabe y General Electric.`,
        costoCompra: 1.98461538,
        images: [
            "productos/BIM024.webp",
            "productos/BIM025.webp",
            "productos/BIM037.webp"
        ],
        specs: { "Marca": "Mabe / G.E.", "Tipo": "Bimetal de Deshielo" },
        variants: [
            { id: "BIM037", name: "Mabe Marrón KSD301B L15", costoCompra: 1.22307692 },
            { id: "BIM024", name: "Mabe Negro 238C2208P002 (Open 18C)", costoCompra: 1.98461538 },
            { id: "BIM025", name: "Mabe Negro KDS 8003 L55", costoCompra: 1.98461538 }
        ]
    },
    {
        id: "BIM-OTROS-VAR",
        name: "Bimetales y Fusibles Especiales (Whirlpool, Haier, Asiática)",
        category: "Protectores",
        model: "Especiales",
        desc: `<b>Bimetales y Termofusibles Específicos</b><br><br>Gama de bimetales de deshielo y termofusibles para neveras Whirlpool, Haier, y marcas de fabricación asiática. Seleccione el repuesto que corresponda a su unidad.`,
        costoCompra: 1.79230769,
        images: [
            "productos/BIM015.webp",
            "productos/BIM030.webp",
            "productos/BIM031.webp",
            "productos/BIM032.webp",
            "productos/BIM033.webp"
        ],
        specs: { "Uso": "Sistema de Deshielo", "Compatibilidad": "Multimarca Específica" },
        variants: [
            { id: "BIM030", name: "Fusible C/Conector (2 Cables Rojos)", costoCompra: 0.60769231 },
            { id: "BIM015", name: "Bimetal N12-5 (3 Cables Doble Conector)", costoCompra: 1.36153846 },
            { id: "BIM031", name: "Whirlpool B-261N 20T80K K-1", costoCompra: 1.79230769 },
            { id: "BIM032", name: "Fusible Haier HRF6 (0060401909C)", costoCompra: 2.31538462 },
            { id: "BIM033", name: "Bimetal C/Termofusible Asiática (Forma H)", costoCompra: 3.19230769 }
        ]
    },
    {
        id: "CRU-MABE-VAR",
        name: "Tarjeta de Control para Nevera Mabe",
        category: "Neveras / Cavas",
        model: "Serie 225D7291",
        desc: `<b>Tarjeta de Control Principal Nevera Mabe</b><br><br>Placa electrónica PCB de repuesto para controlar los ciclos de enfriamiento y descongelación en neveras digitales Mabe.`,
        costoCompra: 12.43076923,
        images: ["productos/CRU100-102.webp"],
        specs: { "Marca": "Mabe", "Tipo": "Tarjeta de Control PCB", "Voltaje": "115V" },
        variants: [
            { id: "CRU100", name: "Mabe 225D7291G003", costoCompra: 12.43076923 },
            { id: "CRU101", name: "Mabe 225D7291G004", costoCompra: 12.43076923 },
            { id: "CRU102", name: "Mabe 225D7291G005", costoCompra: 12.43076923 }
        ]
    },
    {
        id: "SAS012",
        name: "Sensor para Nevera Cable Azul Largo Samsung",
        category: "Protectores",
        model: "Samsung Cable Largo",
        desc: `<b>Sensor para Nevera Samsung Cable Azul Largo</b><br><br>Sensor de temperatura tipo termistor con cable extendido azul, diseñado específicamente para la lectura precisa del frío en neveras Samsung.`,
        costoCompra: 1.65384615,
        images: ["productos/SAS012.webp"],
        specs: { "Marca": "Samsung", "Tipo": "Sensor Termistor", "Cable": "Azul (Largo)" }
    },
    {
        id: "REL-NEGRO-VAR",
        name: "Relay Negro Universal para Nevera 115V",
        category: "Protectores",
        model: "Varias Medidas",
        desc: `<b>Relay Negro Universal para Nevera 115V</b><br><br>Relé de arranque universal de bobina (cobre) para compresores de neveras y refrigeradores a 115V. Diseñado para un reemplazo rápido y duradero.`,
        costoCompra: 1.32307692, // Costo base (1/6 HP)
        images: [
            "productos/REL-RELAY_NEGRO(1).webp",
            "productos/REL-RELAY_NEGRO(2).webp",
            "productos/REL-RELAY_NEGRO(3).webp",
            "productos/REL-RELAY_NEGRO(4).webp"
        ],
        specs: { "Tipo": "Relay de Bobina (Negro)", "Voltaje": "115V", "Uso": "Neveras" },
        variants: [
            { id: "REL004", name: "Capacidad: 1/6 HP", costoCompra: 1.32307692 },
            { id: "REL003", name: "Capacidad: 1/4 HP", costoCompra: 1.73846154 },
            { id: "REL002", name: "Capacidad: 1/3 HP", costoCompra: 0.95384615 }
        ]
    },
    {
        id: "REL-BLANCO-EMB-VAR",
        name: "Relay Blanco Embraco para Nevera 115V",
        category: "Protectores",
        model: "Tipo Embraco",
        desc: `<b>Relay Blanco Tipo Embraco 115V</b><br><br>Relé de arranque de alta calidad tipo Embraco (Blanco). Ofrece excelente compatibilidad y protección para compresores domésticos y comerciales ligeros.`,
        costoCompra: 1.32307692, // Costo base (1/4 HP)
        images: [
            "productos/RELAY_BLANCO_EMBRACO(1).webp",
            "productos/RELAY_BLANCO_EMBRACO(2).webp",
            "productos/RELAY_BLANCO_EMBRACO(3).webp",
            "productos/RELAY_BLANCO_EMBRACO(4).webp"
        ],
        specs: { "Marca": "Embraco (Genérico)", "Tipo": "Relay Blanco", "Voltaje": "115V" },
        variants: [
            { id: "REL010", name: "Capacidad: 1/4 HP", costoCompra: 1.32307692 },
            { id: "REL011", name: "Capacidad: 1/3 HP", costoCompra: 1.32307692 },
            { id: "REL012", name: "Capacidad: 1/2 HP", costoCompra: 1.43076923 },
            { id: "REL013", name: "Capacidad: 3/4 HP", costoCompra: 1.43076923 }
        ]
    },
    {
        id: "REL-PTC-PINES-VAR",
        name: "Relay PTC Americold / Landsfoss (Pines)",
        category: "Protectores",
        model: "PTC 1 a 3 Pines",
        desc: `<b>Relay PTC de Estado Sólido (Pines)</b><br><br>Pastilla de arranque PTC de alta eficiencia para compresores de 1/12 a 1/2 HP. Disponible en configuraciones de 1, 2 o 3 pines para adaptarse a distintos sistemas.`,
        costoCompra: 0.86923077, // Costo base (1 Pin)
        images: [
            "productos/REL015-018-RELAYS_PTC_PINES(1).webp",
            "productos/REL015-018-RELAYS_PTC_PINES(2).webp",
            "productos/REL015-018-RELAYS_PTC_PINES(3).webp",
            "productos/REL015-018-RELAYS_PTC_PINES(4).webp"
        ],
        specs: { "Tipo": "PTC (Estado Sólido)", "Rango": "1/12 a 1/2 HP", "Color": "Negro" },
        variants: [
            { id: "REL015", name: "Americold PTC 1 Pin (115V)", costoCompra: 0.86923077 },
            { id: "REL016", name: "Americold PTC 2 Pines (115V)", costoCompra: 0.71538462 },
            { id: "REL017", name: "Americold PTC 3 Pines (115V)", costoCompra: 0.91538462 },
            { id: "REL018", name: "Landsfoss PTC 3 Pines IC-5 (220V)", costoCompra: 1.32307692 }
        ]
    },
    {
        id: "REL-TARJETA-VAR",
        name: "Relay para Tarjeta Electrónica de Aire Acondicionado",
        category: "Aires Acondicionados",
        model: "MPQ Serie",
        desc: `<b>Relay para Tarjeta de Aire Acondicionado</b><br><br>Relé de potencia para soldar en placa (PCB) de tarjetas electrónicas de aire acondicionado. Garantiza la conmutación segura del compresor.`,
        costoCompra: 1.99230769,
        images: [
            "productos/RELAY_PARA_TARJETA_DE_AIRE(1).webp",
            "productos/RELAY_PARA_TARJETA_DE_AIRE(2).webp",
            "productos/RELAY_PARA_TARJETA_DE_AIRE(3).webp"
        ],
        specs: { "Tipo": "Relé de Placa (PCB)", "Uso": "Tarjetas de A/A", "Voltaje": "DC/AC" },
        variants: [
            { id: "REL402", name: "Modelo: MPQ1-S-112D-A", costoCompra: 1.99230769 },
            { id: "REL403", name: "Modelo: MPQ4-S-112D-A", costoCompra: 1.99230769 }
        ]
    },
    {
        id: "REL-EMBRACO-VAR",
        name: "Relay Embraco Largo",
        category: "Protectores",
        model: "Varias Medidas",
        desc: `<b>Relay de Arranque Embraco Largo</b><br><br>Relé electromagnético de repuesto para compresores de neveras y cavas. Diseñado para ofrecer un arranque seguro y prolongar la vida útil del motor.`,
        costoCompra: 1.97692308, // Costo base (1/4 HP)
        images: [
            "productos/REL-EMBRACO_LARGO.webp",
            "productos/REL-EMPRACO_LARGO2.webp",
            "productos/REL-EMBRACO_LARGO3.webp",
            "productos/REL-EMBRACO_LARGO4.webp"
        ],
        specs: { "Tipo": "Relay Largo", "Uso": "Compresores", "Marca": "Danfoss / Degar" },
        variants: [
            { id: "REL103", name: "Capacidad: 1/6 HP (Danfoss)", costoCompra: 1.97692308 },
            { id: "REL102", name: "Capacidad: 1/4 HP (Danfoss)", costoCompra: 1.97692308 },
            { id: "REL104", name: "Capacidad: 1/3 HP (Danfoss)", costoCompra: 1.49230769 },
            { id: "REL105", name: "Capacidad: 1/3 HP (Degar)", costoCompra: 2.07692308 }
        ]
    },
    {
        id: "TER-NEVERA-VAR",
        name: "Protector Térmico para Nevera 115V",
        category: "Protectores",
        model: "Varios Caballajes",
        desc: `<b>Protector Térmico (Overload) para Nevera 115V</b><br><br>Dispositivo térmico de seguridad tipo botón/redondo. Protege el compresor de su refrigerador contra sobrecalentamientos y excesos de corriente.`,
        costoCompra: 0.99230769,
        images: [
            "productos/TER-PROTECTOR_TERMICO(1).webp",
            "productos/TER-PROTECTOR_TERMICO(2).webp",
            "productos/TER-PROTECTOR_TERMICO(3).webp"
        ],
        specs: { "Tipo": "Protector Térmico", "Voltaje": "115V", "Uso": "Neveras y Enfriadores" },
        variants: [
            { id: "TER004", name: "Capacidad: 1/6 HP", costoCompra: 0.99230769 },
            { id: "TER003", name: "Capacidad: 1/4 HP", costoCompra: 0.99230769 },
            { id: "TER002", name: "Capacidad: 1/3 HP", costoCompra: 0.99230769 },
            { id: "TER001", name: "Capacidad: 1/2 HP", costoCompra: 0.99230769 }
        ]
    },
    {
        id: "TER-ELEC-VAR",
        name: "Protector Térmico Electrónico Americold",
        category: "Protectores",
        model: "Varios Caballajes",
        desc: `<b>Protector Térmico Electrónico Americold</b><br><br>Protector térmico de estado sólido (electrónico) para compresores. Mayor precisión de corte térmico frente a picos de voltaje.`,
        costoCompra: 0.66153846, // Costo base (1/5 HP)
        images: ["productos/TER-TERMICO_ELECTRONICO.webp"],
        specs: { "Marca": "Americold", "Tipo": "Electrónico", "Uso": "Compresores" },
        variants: [
            { id: "TER103", name: "Capacidad: 1/6 HP (OL3)", costoCompra: 0.48461538 },
            { id: "TER005", name: "Capacidad: 1/5 HP", costoCompra: 0.66153846 },
            { id: "TER102", name: "Capacidad: 1/4 HP (OL1)", costoCompra: 0.66153846 },
            { id: "TER101", name: "Capacidad: 1/3 HP (OL2)", costoCompra: 0.60769231 }
        ]
    },
    {
        id: "REL001",
        name: "Relay Marrón Americold PTC 4 Pines",
        category: "Protectores",
        model: "PTC 4 Pines",
        desc: `<b>Relay Marrón Americold PTC 4 Pines</b><br><br>Relé de arranque PTC original Americold. Dispositivo eléctrico de alta calidad y precisión para arrancar compresores de refrigeración.`,
        costoCompra: 0.45384615,
        images: ["productos/REL001.webp"],
        specs: { "Marca": "Americold", "Tipo": "PTC", "Pines": "4 Pines" }
    },
    {
        id: "SWU-VARIANTE",
        name: "Switch Universal para Nevera (1 Botón)",
        category: "Eléctrico",
        model: "LTK-2",
        desc: `<b>Switch de Puerta Universal para Nevera</b><br><br>Interruptor pulsador de repuesto para encender o apagar la luz interior y controlar los ventiladores al abrir la puerta de la nevera.`,
        costoCompra: 4.97692308,
        images: [
            "productos/SWU-SWITCH.webp",
            "productos/SWU-SWITCH(2).webp"
        ],
        specs: { "Tipo": "Interruptor de Puerta", "Modelo": "1 Botón", "Uso": "Neveras" },
        variants: [
            { id: "SWU304", name: "Conexión: 2 Pines", costoCompra: 4.97692308 },
            { id: "SWU303", name: "Conexión: 3 Pines", costoCompra: 4.97692308 }
        ]
    },
    {
        id: "MDN-CERAMICO-VAR",
        name: "Micro Motor Cerámico para Nevera",
        category: "Motores",
        model: "Varios Modelos",
        desc: `<b>Micro Motor Cerámico DC para Nevera</b><br><br>Motores evaporadores de alta eficiencia con tecnología cerámica, diseñados para equipos modernos. Verifique el voltaje, vatiaje y las revoluciones (RPM) que requiere su nevera.`,
        costoCompra: 13.25384615, // Costo base medio
        images: [
            "productos/MICRO_MOTOR_CERAMICO(1).webp",
            "productos/MICRO_MOTOR_CERAMICO(2).webp",
            "productos/MICRO_MOTOR_CERAMICO(3).webp"
        ],
        specs: { "Tipo": "Cerámico", "Uso": "Evaporadores de Nevera" },
        variants: [
            { id: "MDN011", name: "9.75V DC - 3.25W (Con Sensor)", costoCompra: 14.58461538 },
            { id: "MDN004", name: "9.75V DC - 3.25W (Sin Sensor)", costoCompra: 13.25384615 },
            { id: "MDN022", name: "12V - 2.1W - 2950 RPM", costoCompra: 7.95384615 },
            { id: "MDN019", name: "12V - 2150 RPM (Hyundai)", costoCompra: 10.07692308 },
            { id: "MDN007", name: "12V - 3.21W - 2520 RPM", costoCompra: 11.26153846 },
            { id: "MDN003", name: "12V - 3.48W - 2770 RPM", costoCompra: 13.25384615 },
            { id: "MDN012", name: "13V - 3.3W - 1120 RPM", costoCompra: 16.57692308 },
            { id: "MDN014", name: "Haier 1.5W / 1130 RPM", costoCompra: 16.57692308 },
            { id: "MDN013", name: "Haier 2.0W / 1160 RPM", costoCompra: 13.26153846 },
            { id: "MDN015", name: "Haier 2.5W / 1650 RPM", costoCompra: 18.56153846 }
        ]
    },
    {
        id: "MDN001",
        name: "Micro Motor para Nevera 670 (Eje Grueso)",
        category: "Motores",
        model: "670 Eje Grueso",
        desc: `<b>Micro Motor para Nevera 670 (Eje Grueso)</b><br><br>Motor ventilador interno de repuesto para neveras y refrigeradores. Diseño robusto con eje grueso para mayor durabilidad.`,
        costoCompra: 6.17692308,
        images: ["productos/MDN001.webp"],
        specs: { "Tipo": "Micro Motor", "Uso": "Neveras", "Eje": "Grueso" }
    },
    {
        id: "MDN002",
        name: "Micro Motor para Nevera Universal 999 (Eje Fino)",
        category: "Motores",
        model: "999 Eje Fino",
        desc: `<b>Micro Motor para Nevera Universal 999 (Eje Fino)</b><br><br>Motor ventilador universal para evaporadores de nevera. Modelo 999 equipado con eje fino, adaptable a múltiples marcas.`,
        costoCompra: 5.63846154,
        images: ["productos/MDN002.webp"],
        specs: { "Tipo": "Micro Motor Universal", "Uso": "Neveras", "Eje": "Fino" }
    },
    {
        id: "JMG351",
        name: "Protector de Goma para Reloj de Manómetro",
        category: "Herramientas",
        model: "Protector de Goma",
        desc: `<b>Protector de Goma para Reloj de Manómetro</b><br><br>Funda de goma diseñada para absorber impactos y proteger los relojes de tu manifold contra caídas en el área de trabajo.`,
        costoCompra: 0.65384615,
        images: ["productos/JMG351.webp"],
        specs: { "Accesorio": "Funda Protectora", "Material": "Goma Antiresbalante", "Uso": "Manómetros" }
    },
    {
        id: "REL202",
        name: "Reloj Manómetro Alta Presión (Rojo) R22/R134",
        category: "Herramientas",
        model: "RG-500",
        desc: `<b>Reloj Manómetro Alta Presión (Rojo) R22/R134</b><br><br>Reloj de repuesto para manifold de alta presión. Escalas de lectura nítidas y calibradas específicamente para gases R22 y R134a.`,
        costoCompra: 2.64615385,
        images: ["productos/REL202.webp", "productos/REL202-2.webp"],
        specs: { "Tipo": "Alta Presión (Rojo)", "Gases Compatibles": "R22 / R134a", "Repuesto": "Reloj Manifold" }
    },
    {
        id: "REL204",
        name: "Reloj Manómetro Alta Presión (Rojo) R410",
        category: "Herramientas",
        model: "RG-R410-7",
        desc: `<b>Reloj Manómetro Alta Presión (Rojo) R410</b><br><br>Reloj de repuesto diseñado para soportar y medir con precisión las altas presiones del gas refrigerante R410.`,
        costoCompra: 3.30769231,
        images: ["productos/REL204.webp", "productos/REL204-2.webp"],
        specs: { "Tipo": "Alta Presión (Rojo)", "Gases Compatibles": "R410", "Repuesto": "Reloj Manifold" }
    },
    {
        id: "REL203",
        name: "Reloj Manómetro Baja Presión (Azul) R410",
        category: "Herramientas",
        model: "RG-R410",
        desc: `<b>Reloj Manómetro Baja Presión (Azul) R410</b><br><br>Reloj de repuesto para manifold de baja presión (azul), con escalas precisas para la carga y monitoreo de gas R410.`,
        costoCompra: 3.30769231,
        images: ["productos/REL203.webp", "productos/REL203-2.webp"],
        specs: { "Tipo": "Baja Presión (Azul)", "Gases Compatibles": "R410", "Repuesto": "Reloj Manifold" }
    },
    {
        id: "VLB-BOLA-VARIANTE",
        name: "Válvula de Bola Landsfoss para Refrigeración",
        category: "Refrigeración",
        model: "Varias Medidas",
        desc: `<b>Válvula de Bola Landsfoss</b><br><br>Válvula de aislamiento de flujo completo, ideal para mantenimientos y cortes en líneas de refrigeración comercial e industrial. Garantiza un sellado hermético. Seleccione la medida.`,
        costoCompra: 12.60000000, // Costo base (3/8")
        images: ["productos/VLB-BOLA.webp"],
        specs: { "Marca": "Landsfoss", "Tipo": "Válvula de Bola", "Uso": "Refrigeración / HVAC" },
        variants: [
            { id: "VLB104", name: "Medida: 3/8\"", costoCompra: 12.60000000 },
            { id: "VLB102", name: "Medida: 1/2\"", costoCompra: 14.22307692 },
            { id: "VLB103", name: "Medida: 5/8\"", costoCompra: 13.26153846 },
            { id: "VLB100", name: "Medida: 3/4\"", costoCompra: 18.20000000 },
            { id: "VLB101", name: "Medida: 7/8\"", costoCompra: 20.70000000 }
        ]
    },
    {
        id: "TER-ARTICCO-VAR",
        name: "Protector Térmico Articco (Overload)",
        category: "Protectores",
        model: "Varios BTU/Voltajes",
        desc: `<b>Protector Térmico Articco para Compresor</b><br><br>Dispositivo de seguridad (Overload) diseñado para desconectar el compresor en caso de sobrecalentamiento o picos de corriente. Seleccione la capacidad y el voltaje de su equipo.`,
        costoCompra: 1.32307692,
        images: ["productos/TER200-208.webp"],
        specs: { "Marca": "Articco", "Tipo": "Protector Térmico", "Uso": "Compresores de A/A" },
        variants: [
            { id: "TER206", name: "Capacidad: 5.000 BTU - 110V", costoCompra: 1.32307692 },
            { id: "TER207", name: "Capacidad: 8.000 BTU - 110V", costoCompra: 1.32307692 },
            { id: "TER208", name: "Capacidad: 10.000 BTU - 110V", costoCompra: 1.32307692 },
            { id: "TER201", name: "Capacidad: 12.000 BTU - 110V", costoCompra: 1.32307692 },
            { id: "TER202", name: "Capacidad: 12.000 BTU - 220V", costoCompra: 1.32307692 },
            { id: "TER205", name: "Capacidad: 15.000 BTU - 220V", costoCompra: 1.32307692 },
            { id: "TER203", name: "Capacidad: 18.000 BTU - 220V", costoCompra: 1.06153846 },
            { id: "TER204", name: "Capacidad: 24.000 BTU - 220V", costoCompra: 1.32307692 }
        ]
    },
    {
        id: "AIR099",
        name: "Aire Acondicionado Ventana 12.000 BTU 220V Khaled",
        category: "Aires Acondicionados",
        model: "12K BTU 220V",
        desc: `<b>Aire Acondicionado de Ventana 12.000 BTU 220V Khaled (Nuevo en Caja)</b><br><br>Equipo de ventana marca Khaled, totalmente nuevo y sellado en su caja. Excelente capacidad de enfriamiento de 12.000 BTU.`,
        costoCompra: 145.89230769,
        images: ["productos/AIR099.webp"],
        specs: { "Marca": "Khaled", "Tipo": "Ventana", "Capacidad": "12.000 BTU", "Estado": "Nuevo en Caja" }
    },
    {
        id: "AIP002",
        name: "Aire Acondicionado Portátil 12.000 BTU",
        category: "Aires Acondicionados",
        model: "Portátil 12K",
        desc: `<b>Aire Acondicionado Portátil 12.000 BTU</b><br><br>Unidad portátil de 12.000 BTU, ideal para mover entre habitaciones. Fácil instalación sin necesidad de romper paredes.`,
        costoCompra: 152.52307692,
        images: ["productos/AIP002.webp"],
        specs: { "Tipo": "Portátil", "Capacidad": "12.000 BTU", "Instalación": "Móvil con Ruedas" }
    },
    {
        id: "AIR126",
        name: "Aire Acondicionado Mini-Split 12.000 BTU 220V Khaled",
        category: "Aires Acondicionados",
        model: "12K BTU 220V",
        desc: `<b>Aire Acondicionado Mini-Split 12.000 BTU 220V Khaled</b><br><br>Equipo Mini-Split eficiente y silencioso de 12.000 BTU. Ideal para habitaciones y oficinas modernas.`,
        costoCompra: 172.41538462,
        images: ["productos/AIR126.webp"],
        specs: { "Marca": "Khaled", "Tipo": "Mini-Split", "Capacidad": "12.000 BTU", "Voltaje": "220V", "Estado": "Nuevo en Caja" }
    },
    {
        id: "AIR025",
        name: "Aire Acondicionado Split 24.000 BTU 220V Khaled (R410)",
        category: "Aires Acondicionados",
        model: "24K BTU 220V",
        desc: `<b>Aire Acondicionado Split 24.000 BTU 220V Khaled</b><br><br>Unidad Split de alta capacidad (24.000 BTU) operando con gas ecológico R410. Excelente rendimiento para espacios amplios.`,
        costoCompra: 331.56923077,
        images: ["productos/AIR025.webp"],
        specs: { "Marca": "Khaled", "Tipo": "Split", "Capacidad": "24.000 BTU", "Voltaje": "220V", "Estado": "Nuevo en Caja" }
    },
    {
        id: "AIR012",
        name: "Aire Acondicionado Ventana 8.000 BTU 110V Danby",
        category: "Aires Acondicionados",
        model: "8K BTU 110V",
        desc: `<b>Aire Acondicionado de Ventana 8.000 BTU 110V Danby</b><br><br>Climatización compacta y confiable para espacios reducidos. Este equipo destaca por su bajo consumo y panel frontal con display digital intuitivo para el ajuste de temperatura.<br><br><b>Nota:</b> Equipo nuevo con detalles estéticos por manejo de importación. No incluye control remoto.`,
        costoCompra: 106.10000000,
        images: ["productos/AIR012.webp"],
        specs: { "Marca": "Danby", "Tipo": "Ventana", "Capacidad": "8.000 BTU", "Voltaje": "110V", "Condición": "Nuevo (Detalles Importación)", "Control": "Display Digital (Sin Remoto)" }
    },
    {
        id: "AIR016",
        name: "Aire Acondicionado Ventana 12.000 BTU 110V Friedrich",
        category: "Aires Acondicionados",
        model: "12K BTU 110V",
        desc: `<b>Aire Acondicionado de Ventana 12.000 BTU 110V Friedrich</b><br><br>Unidad premium de alto rendimiento diseñada para enfriar tus espacios rápidamente. Incorpora un display digital frontal que facilita la visualización y ajuste del clima ideal.<br><br><b>Nota:</b> Equipo nuevo con leves detalles por importación. No incluye control remoto.`,
        costoCompra: 132.62307692,
        images: ["productos/FRIEDRICH-CHILL.webp", "productos/FRIEDRICH-UNIFIT.webp"],
        specs: { "Marca": "Friedrich", "Tipo": "Ventana", "Capacidad": "12.000 BTU", "Voltaje": "110V", "Condición": "Nuevo (Detalles Importación)", "Control": "Display Digital (Sin Remoto)" }
    },
    {
        id: "AIR021",
        name: "Aire Acondicionado Ventana 12.000 BTU 220V Friedrich",
        category: "Aires Acondicionados",
        model: "12K BTU 220V",
        desc: `<b>Aire Acondicionado de Ventana 12.000 BTU 220V Friedrich</b><br><br>Potencia y eficiencia premium en 220V. Su diseño robusto garantiza una larga vida útil, complementado con un display digital de fácil lectura en el panel frontal.<br><br><b>Nota:</b> Equipo nuevo con leves detalles por importación. No incluye control remoto.`,
        costoCompra: 145.89230769,
        images: ["productos/FRIEDRICH-CHILL.webp", "productos/FRIEDRICH-UNIFIT.webp"],
        specs: { "Marca": "Friedrich", "Tipo": "Ventana", "Capacidad": "12.000 BTU", "Voltaje": "220V", "Condición": "Nuevo (Detalles Importación)", "Control": "Display Digital (Sin Remoto)" }
    },
    {
        id: "AIR008",
        name: "Aire Acondicionado Ventana 14.000 BTU 220V Friedrich",
        category: "Aires Acondicionados",
        model: "14K BTU 220V",
        desc: `<b>Aire Acondicionado de Ventana 14.000 BTU 220V Friedrich</b><br><br>Excelente capacidad térmica para habitaciones grandes o salas de estar. Operación confiable a 220V con panel de control y display digital integrado para una configuración precisa.<br><br><b>Nota:</b> Equipo nuevo con leves detalles por importación. No incluye control remoto.`,
        costoCompra: 179.04615385,
        images: ["productos/FRIEDRICH-CHILL.webp", "productos/FRIEDRICH-UNIFIT.webp"],
        specs: { "Marca": "Friedrich", "Tipo": "Ventana", "Capacidad": "14.000 BTU", "Voltaje": "220V", "Condición": "Nuevo (Detalles Importación)", "Control": "Display Digital (Sin Remoto)" }
    },
    {
        id: "AIR006",
        name: "Aire Acondicionado Ventana 15.000 BTU 110V Friedrich",
        category: "Aires Acondicionados",
        model: "15K BTU 110V",
        desc: `<b>Aire Acondicionado de Ventana 15.000 BTU 110V Friedrich</b><br><br>Alta capacidad de enfriamiento sin requerir instalación a 220V. Diseño moderno que maximiza el flujo de aire, equipado con panel de botones y display digital frontal.<br><br><b>Nota:</b> Equipo nuevo con leves detalles por importación. No incluye control remoto.`,
        costoCompra: 185.67692308,
        images: ["productos/FRIEDRICH-CHILL.webp", "productos/FRIEDRICH-UNIFIT.webp"],
        specs: { "Marca": "Friedrich", "Tipo": "Ventana", "Capacidad": "15.000 BTU", "Voltaje": "110V", "Condición": "Nuevo (Detalles Importación)", "Control": "Display Digital (Sin Remoto)" }
    },
    {
        id: "AIR022",
        name: "Aire Acondicionado Ventana 18.000 BTU 220V Friedrich",
        category: "Aires Acondicionados",
        model: "18K BTU 220V",
        desc: `<b>Aire Acondicionado de Ventana 18.000 BTU 220V Friedrich</b><br><br>Equipo de gran capacidad (Tonelada y media), ideal para mantener climatizados espacios residenciales amplios o locales comerciales. Incluye display digital para monitoreo de temperatura.<br><br><b>Nota:</b> Equipo nuevo con leves detalles por importación. No incluye control remoto.`,
        costoCompra: 218.83076923,
        images: ["productos/FRIEDRICH-CHILL.webp", "productos/FRIEDRICH-UNIFIT.webp"],
        specs: { "Marca": "Friedrich", "Tipo": "Ventana", "Capacidad": "18.000 BTU", "Voltaje": "220V", "Condición": "Nuevo (Detalles Importación)", "Control": "Display Digital (Sin Remoto)" }
    },
    {
        id: "AIR020",
        name: "Aire Acondicionado Ventana 20.000 BTU 220V Friedrich",
        category: "Aires Acondicionados",
        model: "20K BTU 220V",
        desc: `<b>Aire Acondicionado de Ventana 20.000 BTU 220V Friedrich</b><br><br>Potencia superior para las mayores exigencias térmicas. Sistema de enfriamiento acelerado, controlable y configurable fácilmente mediante su panel con display digital frontal.<br><br><b>Nota:</b> Equipo nuevo con leves detalles por importación. No incluye control remoto.`,
        costoCompra: 232.09230769,
        images: ["productos/FRIEDRICH-CHILL.webp", "productos/FRIEDRICH-UNIFIT.webp"],
        specs: { "Marca": "Friedrich", "Tipo": "Ventana", "Capacidad": "20.000 BTU", "Voltaje": "220V", "Condición": "Nuevo (Detalles Importación)", "Control": "Display Digital (Sin Remoto)" }
    },
    {
        id: "AIR003",
        name: "Aire Acondicionado Ventana 24.000 BTU 220V Friedrich",
        category: "Aires Acondicionados",
        model: "24K BTU 220V",
        desc: `<b>Aire Acondicionado de Ventana 24.000 BTU 220V Friedrich</b><br><br>Unidad pesada e industrial de 2 toneladas en formato de ventana. Rendimiento inigualable para grandes áreas, gestionado de manera amigable a través de su nítido display digital.<br><br><b>Nota:</b> Equipo nuevo con leves detalles por importación. No incluye control remoto.`,
        costoCompra: 265.25384615,
        images: ["productos/FRIEDRICH-CHILL.webp", "productos/FRIEDRICH-UNIFIT.webp"],
        specs: { "Marca": "Friedrich", "Tipo": "Ventana", "Capacidad": "24.000 BTU", "Voltaje": "220V", "Condición": "Nuevo (Detalles Importación)", "Control": "Display Digital (Sin Remoto)" }
    },
    {
        id: "AIR005",
        name: "Aire Acondicionado Ventana 28.000 BTU 220V Friedrich",
        category: "Aires Acondicionados",
        model: "28K BTU 220V",
        desc: `<b>Aire Acondicionado de Ventana 28.000 BTU 220V Friedrich</b><br><br>Climatización de ultra alto tonelaje para mangas de pared o ventanas amplias. Su panel de control con display digital permite un manejo preciso del potente flujo de aire.<br><br><b>Nota:</b> Equipo nuevo con leves detalles por importación. No incluye control remoto.`,
        costoCompra: 331.56153846,
        images: ["productos/FRIEDRICH-CHILL.webp", "productos/FRIEDRICH-UNIFIT.webp"],
        specs: { "Marca": "Friedrich", "Tipo": "Ventana", "Capacidad": "28.000 BTU", "Voltaje": "220V", "Condición": "Nuevo (Detalles Importación)", "Control": "Display Digital (Sin Remoto)" }
    },
    {
        id: "AIR118",
        name: "Aire Acondicionado Ventana 36.000 BTU 220V Friedrich",
        category: "Aires Acondicionados",
        model: "36K BTU 220V",
        desc: `<b>Aire Acondicionado de Ventana 36.000 BTU 220V Friedrich</b><br><br>La máxima capacidad en equipos de ventana (3 toneladas). Ideal para usos comerciales e industriales extremos. Configuración sencilla gracias a su display digital integrado.<br><br><b>Nota:</b> Equipo nuevo con leves detalles por importación. No incluye control remoto.`,
        costoCompra: 364.72307692,
        images: ["productos/FRIEDRICH-CHILL.webp", "productos/FRIEDRICH-UNIFIT.webp"],
        specs: { "Marca": "Friedrich", "Tipo": "Ventana", "Capacidad": "36.000 BTU", "Voltaje": "220V", "Condición": "Nuevo (Detalles Importación)", "Control": "Display Digital (Sin Remoto)" }
    },
    {
        id: "AIR028",
        name: "Aire Acondicionado Ventana 8.000 BTU 110V Friedrich",
        category: "Aires Acondicionados",
        model: "8K BTU 110V",
        desc: `<b>Aire Acondicionado de Ventana 8.000 BTU 110V Friedrich</b><br><br>Eficiencia y calidad superior en un chasis compacto. Perfecto para el confort en habitaciones y oficinas, controlable fácilmente desde su panel frontal con display digital.<br><br><b>Nota:</b> Equipo nuevo con leves detalles por importación. No incluye control remoto.`,
        costoCompra: 106.10000000,
        images: ["productos/FRIEDRICH-CHILL.webp", "productos/FRIEDRICH-UNIFIT.webp"],
        specs: { "Marca": "Friedrich", "Tipo": "Ventana", "Capacidad": "8.000 BTU", "Voltaje": "110V", "Condición": "Nuevo (Detalles Importación)", "Control": "Display Digital (Sin Remoto)" }
    },
    {
        id: "AIR014",
        name: "Aire Acondicionado Ventana 12.000 BTU 110V Frigidaire",
        category: "Aires Acondicionados",
        model: "12K BTU 110V",
        desc: `<b>Aire Acondicionado de Ventana 12.000 BTU 110V Frigidaire</b><br><br>Climatización confiable y constante de la mano de Frigidaire. Su diseño incluye un práctico display digital que permite establecer la temperatura con total precisión.<br><br><b>Nota:</b> Equipo nuevo con detalles estéticos por importación. No incluye control remoto.`,
        costoCompra: 132.62307692,
        images: ["productos/FRIGIDAIRE.webp", "productos/FRIGIDAIRE-FHTC.webp"],
        specs: { "Marca": "Frigidaire", "Tipo": "Ventana", "Capacidad": "12.000 BTU", "Voltaje": "110V", "Condición": "Nuevo (Detalles Importación)", "Control": "Display Digital (Sin Remoto)" }
    },
    {
        id: "AIR102",
        name: "Aire Acondicionado Ventana 14.000 BTU 110V Frigidaire",
        category: "Aires Acondicionados",
        model: "14K BTU 110V",
        desc: `<b>Aire Acondicionado de Ventana 14.000 BTU 110V Frigidaire</b><br><br>Potencia excepcional de 14.000 BTU en corriente de 110V, brindando frío intenso sin alterar el cableado. Incorpora panel frontal con display digital de temperatura.<br><br><b>Nota:</b> Equipo nuevo con detalles estéticos por importación. No incluye control remoto.`,
        costoCompra: 165.78461538,
        images: ["productos/FRIGIDAIRE.webp", "productos/FRIGIDAIRE-FHTC.webp"],
        specs: { "Marca": "Frigidaire", "Tipo": "Ventana", "Capacidad": "14.000 BTU", "Voltaje": "110V", "Condición": "Nuevo (Detalles Importación)", "Control": "Display Digital (Sin Remoto)" }
    },
    {
        id: "AIR019",
        name: "Aire Acondicionado Ventana 14.000 BTU 220V Frigidaire",
        category: "Aires Acondicionados",
        model: "14K BTU 220V",
        desc: `<b>Aire Acondicionado de Ventana 14.000 BTU 220V Frigidaire</b><br><br>Unidad optimizada para 220V que ofrece un enfriamiento rápido y sostenido. Cuenta con panel de mando y display digital para una experiencia de uso sumamente amigable.<br><br><b>Nota:</b> Equipo nuevo con detalles estéticos por importación. No incluye control remoto.`,
        costoCompra: 179.04615385,
        images: ["productos/FRIGIDAIRE.webp", "productos/FRIGIDAIRE-FHTC.webp"],
        specs: { "Marca": "Frigidaire", "Tipo": "Ventana", "Capacidad": "14.000 BTU", "Voltaje": "220V", "Condición": "Nuevo (Detalles Importación)", "Control": "Display Digital (Sin Remoto)" }
    },
    {
        id: "AIR009",
        name: "Aire Acondicionado Ventana 8.000 BTU 110V Frigidaire",
        category: "Aires Acondicionados",
        model: "8K BTU 110V",
        desc: `<b>Aire Acondicionado de Ventana 8.000 BTU 110V Frigidaire</b><br><br>El tamaño perfecto para cuartos de estudio y habitaciones pequeñas. Operación silenciosa y un panel frontal con display digital que facilita su ajuste diario.<br><br><b>Nota:</b> Equipo nuevo con detalles estéticos por importación. No incluye control remoto.`,
        costoCompra: 106.10000000,
        images: ["productos/FRIGIDAIRE.webp", "productos/FRIGIDAIRE-FHTC.webp"],
        specs: { "Marca": "Frigidaire", "Tipo": "Ventana", "Capacidad": "8.000 BTU", "Voltaje": "110V", "Condición": "Nuevo (Detalles Importación)", "Control": "Display Digital (Sin Remoto)" }
    },
    {
        id: "AIR034",
        name: "Aire Acondicionado Ventana 14.000 BTU 110V G.E.",
        category: "Aires Acondicionados",
        model: "14K BTU 110V",
        desc: `<b>Aire Acondicionado de Ventana 14.000 BTU 110V General Electric</b><br><br>Robusto y eficiente equipo de General Electric que garantiza un flujo de aire frío ininterrumpido. Dispone de display digital frontal para verificar la temperatura configurada.<br><br><b>Nota:</b> Equipo nuevo con detalles estéticos por importación. No incluye control remoto.`,
        costoCompra: 165.78461538,
        images: ["productos/AIR034.webp"],
        specs: { "Marca": "General Electric", "Tipo": "Ventana", "Capacidad": "14.000 BTU", "Voltaje": "110V", "Condición": "Nuevo (Detalles Importación)", "Control": "Display Digital (Sin Remoto)" }
    },
    {
        id: "AIR013",
        name: "Aire Acondicionado Ventana 12.000 BTU 110V Hisense",
        category: "Aires Acondicionados",
        model: "12K BTU 110V",
        desc: `<b>Aire Acondicionado de Ventana 12.000 BTU 110V Hisense</b><br><br>Climatización moderna y eficiente que refresca tus espacios en minutos. Incorpora un display digital claro y fácil de usar en el panel principal.<br><br><b>Nota:</b> Equipo nuevo con detalles estéticos por importación. No incluye control remoto.`,
        costoCompra: 165.77692308,
        images: ["productos/HISENSE.webp", "productos/HISENSE-INVERTER.webp"],
        specs: { "Marca": "Hisense", "Tipo": "Ventana", "Capacidad": "12.000 BTU", "Voltaje": "110V", "Condición": "Nuevo (Detalles Importación)", "Control": "Display Digital (Sin Remoto)" }
    },
    {
        id: "AIR049",
        name: "Aire Acondicionado Ventana 12.000 BTU 220V Hisense",
        category: "Aires Acondicionados",
        model: "12K BTU 220V",
        desc: `<b>Aire Acondicionado de Ventana 12.000 BTU 220V Hisense</b><br><br>Funcionamiento suave y silencioso diseñado para la red de 220V. Su panel cuenta con display digital para un control absoluto del confort en tu habitación.<br><br><b>Nota:</b> Equipo nuevo con detalles estéticos por importación. No incluye control remoto.`,
        costoCompra: 165.80769231,
        images: ["productos/HISENSE.webp", "productos/HISENSE-INVERTER.webp"],
        specs: { "Marca": "Hisense", "Tipo": "Ventana", "Capacidad": "12.000 BTU", "Voltaje": "220V", "Condición": "Nuevo (Detalles Importación)", "Control": "Display Digital (Sin Remoto)" }
    },
    {
        id: "AIR080",
        name: "Aire Acondicionado Ventana 14.000 BTU 110V Hisense",
        category: "Aires Acondicionados",
        model: "14K BTU 110V",
        desc: `<b>Aire Acondicionado de Ventana 14.000 BTU 110V Hisense</b><br><br>Mayor cobertura térmica manteniendo la practicidad de la instalación a 110V. Interfaz de usuario directa mediante su pantalla y display digital integrado.<br><br><b>Nota:</b> Equipo nuevo con detalles estéticos por importación. No incluye control remoto.`,
        costoCompra: 165.78461538,
        images: ["productos/HISENSE.webp", "productos/HISENSE-INVERTER.webp"],
        specs: { "Marca": "Hisense", "Tipo": "Ventana", "Capacidad": "14.000 BTU", "Voltaje": "110V", "Condición": "Nuevo (Detalles Importación)", "Control": "Display Digital (Sin Remoto)" }
    },
    {
        id: "AIR180",
        name: "Aire Acondicionado Ventana 18.000 BTU 220V Hisense",
        category: "Aires Acondicionados",
        model: "18K BTU 220V",
        desc: `<b>Aire Acondicionado de Ventana 18.000 BTU 220V Hisense</b><br><br>Alta potencia para climatizar salones o espacios de trabajo de manera rápida y uniforme. Permite visualizar la configuración actual a través de su display digital frontal.<br><br><b>Nota:</b> Equipo nuevo con detalles estéticos por importación. No incluye control remoto.`,
        costoCompra: 218.83076923,
        images: ["productos/HISENSE.webp", "productos/HISENSE-INVERTER.webp"],
        specs: { "Marca": "Hisense", "Tipo": "Ventana", "Capacidad": "18.000 BTU", "Voltaje": "220V", "Condición": "Nuevo (Detalles Importación)", "Control": "Display Digital (Sin Remoto)" }
    },
    {
        id: "AIR026",
        name: "Aire Acondicionado Ventana 8.000 BTU 110V Hisense",
        category: "Aires Acondicionados",
        model: "8K BTU 110V",
        desc: `<b>Aire Acondicionado de Ventana 8.000 BTU 110V Hisense</b><br><br>Modelo compacto y ahorrativo, excelente para lograr el clima ideal en espacios pequeños. Incluye panel de control principal con display digital.<br><br><b>Nota:</b> Equipo nuevo con detalles estéticos por importación. No incluye control remoto.`,
        costoCompra: 106.10000000,
        images: ["productos/HISENSE.webp", "productos/HISENSE-INVERTER.webp"],
        specs: { "Marca": "Hisense", "Tipo": "Ventana", "Capacidad": "8.000 BTU", "Voltaje": "110V", "Condición": "Nuevo (Detalles Importación)", "Control": "Display Digital (Sin Remoto)" }
    },
    {
        id: "AIR018",
        name: "Aire Acondicionado Ventana 18.000 BTU 220V Hisense (Sin Rejilla)",
        category: "Aires Acondicionados",
        model: "18K BTU 220V S/R",
        desc: `<b>Aire Acondicionado de Ventana 18.000 BTU 220V Hisense</b><br><br>Equipo de gran capacidad térmica con diseño optimizado (Sin Rejilla lateral). Pantalla display digital en el frente para conocer y ajustar la temperatura al instante.<br><br><b>Nota:</b> Equipo nuevo con detalles estéticos por importación. No incluye control remoto.`,
        costoCompra: 198.93846154,
        images: ["productos/HISENSE.webp", "productos/HISENSE-INVERTER.webp"],
        specs: { "Marca": "Hisense", "Tipo": "Ventana", "Capacidad": "18.000 BTU", "Voltaje": "220V", "Condición": "Nuevo (Detalles Importación)", "Control": "Display Digital (Sin Remoto)" }
    },
    {
        id: "AIR047",
        name: "Aire Acondicionado Ventana 14.000 BTU 110V LG",
        category: "Aires Acondicionados",
        model: "14K BTU 110V",
        desc: `<b>Aire Acondicionado de Ventana 14.000 BTU 110V LG</b><br><br>Toda la tecnología y durabilidad de LG en una unidad sumamente potente. Diseño elegante que resalta su display digital frontal para una configuración precisa.<br><br><b>Nota:</b> Equipo nuevo con detalles estéticos por importación. No incluye control remoto.`,
        costoCompra: 165.78461538,
        images: ["productos/LG.webp"],
        specs: { "Marca": "LG", "Tipo": "Ventana", "Capacidad": "14.000 BTU", "Voltaje": "110V", "Condición": "Nuevo (Detalles Importación)", "Control": "Display Digital (Sin Remoto)" }
    },
    {
        id: "AIR108",
        name: "Aire Acondicionado Ventana 8.000 BTU 110V LG",
        category: "Aires Acondicionados",
        model: "8K BTU 110V",
        desc: `<b>Aire Acondicionado de Ventana 8.000 BTU 110V LG</b><br><br>Enfriamiento constante y silencioso con el indiscutible respaldo de calidad LG. Sistema de control accesible con botones y display digital numérico.<br><br><b>Nota:</b> Equipo nuevo con detalles estéticos por importación. No incluye control remoto.`,
        costoCompra: 106.10000000,
        images: ["productos/LG.webp"],
        specs: { "Marca": "LG", "Tipo": "Ventana", "Capacidad": "8.000 BTU", "Voltaje": "110V", "Condición": "Nuevo (Detalles Importación)", "Control": "Display Digital (Sin Remoto)" }
    },
    {
        id: "AIR032",
        name: "Aire Acondicionado Ventana 15.000 BTU 110V TCL",
        category: "Aires Acondicionados",
        model: "15K BTU 110V",
        desc: `<b>Aire Acondicionado de Ventana 15.000 BTU 110V TCL</b><br><br>Increíble potencia de 15.000 BTU operativa con corriente de 110V estándar. Gran desempeño térmico y facilidad de ajuste gracias a su panel con display digital.<br><br><b>Nota:</b> Equipo nuevo con detalles estéticos por importación. No incluye control remoto.`,
        costoCompra: 185.67692308,
        images: ["productos/AIRE-8K.webp"],
        specs: { "Marca": "TCL", "Tipo": "Ventana", "Capacidad": "15.000 BTU", "Voltaje": "110V", "Condición": "Nuevo (Detalles Importación)", "Control": "Display Digital (Sin Remoto)" }
    },
    {
        id: "ANT-VARIANTE",
        name: "Antivibrador Flexible de Cobre",
        category: "Refrigeración",
        model: "Varias Medidas",
        desc: `<b>Antivibrador Flexible de Cobre</b><br><br>Diseñado para absorber la vibración del compresor y evitar fisuras en las tuberías de sistemas de refrigeración y aire acondicionado comercial. Seleccione la medida.`,
        costoCompra: 7.29230769,
        images: ["productos/ANT-ANTIVIBRADOR.webp"],
        specs: { "Tipo": "Flexible Antivibración", "Material": "Cobre y Acero Inox", "Uso": "Refrigeración" },
        variants: [
            { id: "ANT038", name: "Medida: 3/8\"", costoCompra: 6.64615385 },
            { id: "ANT012", name: "Medida: 1/2\"", costoCompra: 7.29230769 },
            { id: "ANT058", name: "Medida: 5/8\"", costoCompra: 7.96923077 },
            { id: "ANT079", name: "Medida: 3/4\"", costoCompra: 9.94615385 },
            { id: "ANT078", name: "Medida: 7/8\"", costoCompra: 12.26923077 },
            { id: "ANT080", name: "Medida: 1-1/8\"", costoCompra: 13.32307692 },
            { id: "ANT081", name: "Medida: 1-5/8\"", costoCompra: 26.51538462 }
        ]
    },
    {
        id: "VLC-VARIANTE",
        name: "Válvula Check Landsfoss HVAC",
        category: "Refrigeración",
        model: "Varias Medidas",
        desc: `<b>Válvula Check / Retención Landsfoss</b><br><br>Válvula unidireccional de alta calidad que permite el flujo de refrigerante en una sola dirección. Ideal para sistemas comerciales.`,
        costoCompra: 10.90000000,
        images: ["productos/VLB-VALVULA_CHECK.webp"],
        specs: { "Marca": "Landsfoss HVAC", "Tipo": "Check (Retención)" },
        variants: [
            { id: "VLC502", name: "Medida: 1/2\"", costoCompra: 10.90000000 },
            { id: "VLC500", name: "Medida: 3/4\"", costoCompra: 16.59230769 },
            { id: "VLC501", name: "Medida: 7/8\"", costoCompra: 17.90000000 }
        ]
    },
    {
        id: "VLS-VARIANTE",
        name: "Válvula Solenoide (Flare y Soldable)",
        category: "Refrigeración",
        model: "Series EVR",
        desc: `<b>Válvula Solenoide para Refrigeración</b><br><br>Válvula electromagnética para el control automático del flujo de líquido o gas refrigerante. Disponible en conexiones Flare y Soldables (ODF).`,
        costoCompra: 23.85384615,
        images: ["productos/VLS-VALVULA_SOLENOIDE.webp"],
        specs: { "Tipo": "Solenoide", "Control": "Electromagnético" },
        variants: [
            { id: "VLS101", name: "3/8\" Flare EVR3-38", costoCompra: 23.85384615 },
            { id: "VLS102", name: "1/2\" Flare EVR15", costoCompra: 30.70769231 },
            { id: "VLS200", name: "5/8\" Soldable EVR15-58", costoCompra: 36.12732095 },
            { id: "VLS201", name: "7/8\" Soldable EVR15-78", costoCompra: 37.06896552 }
        ]
    },
    {
        id: "VFV-VARIANTE",
        name: "Válvula Tipo Block Aire Central ODF",
        category: "Refrigeración",
        model: "Tipo Block",
        desc: `<b>Válvula de Servicio Tipo Block ODF</b><br><br>Válvula de cierre compacta tipo block para equipos de aire acondicionado central. Conexiones soldables de alta seguridad.`,
        costoCompra: 8.61538462,
        images: ["productos/VFV-VALVULA_TIPO_BLOCK.webp"],
        specs: { "Tipo": "Block / Cierre", "Uso": "Aire Central", "Conexión": "ODF" },
        variants: [
            { id: "VFV-001", name: "Medida: 3/8\"", costoCompra: 8.61538462 },
            { id: "VFV-002", name: "Medida: 1/2\"", costoCompra: 11.15384615 },
            { id: "VFV-005", name: "Medida: 5/8\"", costoCompra: 16.67692308 },
            { id: "VFV-003", name: "Medida: 3/4\"", costoCompra: 18.66923077 },
            { id: "VFV-004", name: "Medida: 7/8\"", costoCompra: 22.03846154 }
        ]
    },
    {
        id: "VLB-ROT-VARIANTE",
        name: "Válvula Rotalock para Compresor Maneurop",
        category: "Refrigeración",
        model: "Rotalock",
        desc: `<b>Válvula Rotalock para Compresores Maneurop</b><br><br>Válvulas de servicio Rotalock diseñadas para facilitar el mantenimiento y aislamiento en compresores comerciales tipo Maneurop.`,
        costoCompra: 6.06923077,
        images: ["productos/VLB-VALVULA_ROTALOCK.webp"],
        specs: { "Tipo": "Rotalock", "Compatibilidad": "Compresores Maneurop" },
        variants: [
            { id: "VLB500", name: "Conexión: 3/8\"", costoCompra: 6.06923077 },
            { id: "VLB504", name: "Conexión: 1/2\"", costoCompra: 6.63076923 },
            { id: "VLB502", name: "Conexión: 5/8\"", costoCompra: 6.62307692 },
            { id: "VLB501", name: "Conexión: 3/4\"", costoCompra: 10.61538462 },
            { id: "VLB503", name: "Conexión: 7/8\"", costoCompra: 11.93846154 },
            { id: "VLB508", name: "Adaptador: 3/8\" x 1-1/2\"", costoCompra: 7.50769231 },
            { id: "VLB507", name: "Adaptador: 5/8\" x 1-1/4\"", costoCompra: 6.45384615 },
            { id: "VLB506", name: "Adaptador: 7/8\" x 1-3/4\"", costoCompra: 11.93076923 },
            { id: "VLB505", name: "Adaptador: 1-1/8\" x 1-3/4\"", costoCompra: 11.93076923 }
        ]
    },
    {
        id: "UNR-VARIANTE",
        name: "Unión de Bronce Flare (Niples)",
        category: "Refrigeración",
        model: "Varias Medidas",
        desc: `<b>Unión de Bronce Flare</b><br><br>Niples de bronce macizo para empalmar tuberías de cobre con abocardado (Flare). Garantizan un sellado resistente a altas presiones.`,
        costoCompra: 0.99230769,
        images: ["productos/UNR-UNION_BRONCE_FLARE.webp"],
        specs: { "Material": "Bronce", "Tipo": "Unión Flare" },
        variants: [
            { id: "UNR101", name: "Medida: 1/4\"", costoCompra: 1.97692308 },
            { id: "UNR112", name: "Medida: 5/16\"", costoCompra: 0.99230769 },
            { id: "UNR100", name: "Medida: 3/8\"", costoCompra: 1.31538462 },
            { id: "UNR102", name: "Medida: 1/2\"", costoCompra: 1.97692308 },
            { id: "UNR104", name: "Medida: 5/8\"", costoCompra: 1.75384615 },
            { id: "UNR103", name: "Medida: 3/4\"", costoCompra: 1.75384615 },
            { id: "UNR113", name: "Medida: 7/8\"", costoCompra: 2.98461538 }
        ]
    },
    {
        id: "SAS-VARIANTE",
        name: "Sensor de Temperatura para Aire Acondicionado",
        category: "Aires Acondicionados",
        model: "Varios Tipos",
        desc: `<b>Sensor de Temperatura (Termistor) para A/A</b><br><br>Sensores de repuesto (sencillos y dobles) de pozo y ambiente para tarjetas electrónicas de aires acondicionados Split.`,
        costoCompra: 1.32307692,
        images: ["productos/SAS-SENSOR_K.webp", "productos/SAS017.webp"],
        specs: { "Tipo": "Termistor (NTC)", "Uso": "Tarjetas de Split" },
        variants: [
            { id: "SAS004", name: "Doble Universal 5K (Negro/Rojo)", costoCompra: 0.99230769 },
            { id: "SAS002", name: "Sencillo 5K Azul (Haier / GPlus)", costoCompra: 1.31538462 },
            { id: "SAS003", name: "Gris 5K/10K (LG Artcool)", costoCompra: 1.32307692 },
            { id: "SAS001", name: "Doble Universal 10K (Negro/Rojo)", costoCompra: 1.32307692 },
            { id: "SAS017", name: "Doble 10K (Haier 12-18KBTU)", costoCompra: 1.52307692 },
            { id: "SAS005", name: "Doble Universal 15K (Negro/Rojo)", costoCompra: 1.32307692 },
            { id: "SAS006", name: "Doble Universal 20K (Negro/Rojo)", costoCompra: 1.32307692 }
        ]
    },
    {
        id: "TRM-AA-VARIANTE",
        name: "Termostato de Aire Acondicionado Ventana",
        category: "Aires Acondicionados",
        model: "Mecánico",
        desc: `<b>Termostato para Aire Acondicionado de Ventana</b><br><br>Control de temperatura analógico con bulbo capilar para unidades de ventana.`,
        costoCompra: 3.30769231,
        images: ["productos/TRM004-005.webp"],
        specs: { "Tipo": "Mecánico (Bulbo)", "Uso": "A/A Ventana" },
        variants: [
            { id: "TRM004", name: "Capacidad: 12.000 a 18.000 BTU", costoCompra: 3.30769231 },
            { id: "TRM005", name: "Capacidad: 18.000 a 24.000 BTU", costoCompra: 3.30769231 }
        ]
    },
    {
        id: "FIL-NEV-VARIANTE",
        name: "Filtro Secador para Nevera (Cobre)",
        category: "Refrigeración",
        model: "Varias Medidas",
        desc: `<b>Filtro Secador de Cobre para Neveras</b><br><br>Filtros deshidratadores con sílica interior para atrapar la humedad en sistemas de refrigeración doméstica. Disponibles con o sin válvula de servicio.`,
        costoCompra: 1.49230769,
        images: ["productos/FIL-FILTRO_CON_VALVULA.webp", "productos/FIL010.webp", "productos/FIL303.webp"],
        specs: { "Material": "Cobre", "Uso": "Refrigeración Doméstica" },
        variants: [
            { id: "FIL007", name: "Pequeño Gigante Topflo", costoCompra: 1.49230769 },
            { id: "FIL301", name: "Mediano 20/25G", costoCompra: 1.55384615 },
            { id: "FIL008", name: "Mediano Kodiak Topflo", costoCompra: 1.65384615 },
            { id: "FIL304", name: "Mediano Soldable Original", costoCompra: 1.65384615 },
            { id: "FIL022", name: "Pequeño 10/15G (Con Válvula)", costoCompra: 1.77692308 },
            { id: "FIL300", name: "Grande 30/35G", costoCompra: 1.84615385 },
            { id: "FIL303", name: "Extra-Grande 50G", costoCompra: 2.35384615 },
            { id: "FIL009", name: "Grande Hercules Topflo", costoCompra: 2.39230769 },
            { id: "FIL020", name: "Grande (Con Válvula de Servicio)", costoCompra: 2.64615385 },
            { id: "FIL010", name: "Filtro 1/4 con Rosca", costoCompra: 3.31538462 },
            { id: "FIL021", name: "Pequeño Topflo 10G (Con Válvula)", costoCompra: 3.83846154 },
            { id: "FIL012", name: "Grande Topflo 30G (Con Válvula)", costoCompra: 4.12307692 }
        ]
    },
    {
        id: "FIL-AGUA-VAR",
        name: "Filtro de Agua Interno para Nevera",
        category: "Neveras / Cavas",
        model: "Samsung / Whirlpool",
        desc: `<b>Filtro Purificador de Agua para Neveras</b><br><br>Cartucho filtrante de repuesto para dispensadores de agua y fabricadores de hielo en neveras tipo Side-by-Side.`,
        costoCompra: 5.63076923,
        images: ["productos/FIL350.webp", "productos/FIL351.webp"],
        specs: { "Uso": "Purificación de Agua", "Instalación": "Interna" },
        variants: [
            { id: "FIL350", name: "Para Samsung DA29-00020", costoCompra: 5.63076923 },
            { id: "FIL351", name: "Para Whirlpool 4396841/WF-31", costoCompra: 6.62307692 }
        ]
    },
    {
        id: "TMH-VARIANTE",
        name: "Terminales Eléctricos y Conectores",
        category: "Eléctrico",
        model: "Varios Tipos",
        desc: `<b>Terminales y Conectores Eléctricos</b><br><br>Accesorios de conexión para cableado seguro. Disponibles en formato de ojal, tipo U, desconectables y regletas para cables múltiples.`,
        costoCompra: 0.03846154,
        images: ["productos/TMH-TERMINALES.webp"],
        specs: { "Tipo": "Terminal de Cobre/Aleación", "Uso": "Conexiones Eléctricas" },
        variants: [
            { id: "TMH205", name: "Tipo U 10-12 (SVS5.5-6)", costoCompra: 0.03846154 },
            { id: "TMH200", name: "Metal Amarillo Sencillo", costoCompra: 0.06153846 },
            { id: "TMH201", name: "Forro Amarillo Hembra", costoCompra: 0.06153846 },
            { id: "TMH204", name: "Desconectables Macho-Hembra", costoCompra: 0.06153846 },
            { id: "TMH206", name: "Tipo Ojo 1/4 (RNB8-6S)", costoCompra: 0.10769231 },
            { id: "TMH207", name: "Tipo Ojo 5/16 (RNB8-8)", costoCompra: 0.13076923 },
            { id: "TMH202", name: "Regleta Cable 15A 12MM (12 Polos)", costoCompra: 0.66153846 },
            { id: "TMH203", name: "Regleta Doble Fila 1012P", costoCompra: 0.79230769 }
        ]
    },
    {
        id: "TRA001",
        name: "Transformador 24V/40/240 ECNMC",
        category: "Eléctrico",
        model: "24V 40VA",
        desc: `<b>Transformador de Control 24V</b><br><br>Transformador reductor para suministrar voltaje de control de 24VAC a contactores, termostatos y tarjetas electrónicas.`,
        costoCompra: 7.28461538,
        images: ["productos/TRA001.webp"],
        specs: { "Salida": "24VAC", "Capacidad": "40VA", "Uso": "Control HVAC" }
    },
    {
        id: "REL301",
        name: "Relay Potencial 064 220V",
        category: "Protectores",
        model: "064 - 220V",
        desc: `<b>Relé de Potencial 064 (220V)</b><br><br>Relé electromecánico para desconectar el capacitor de arranque una vez que el compresor alcanza su velocidad operativa.`,
        costoCompra: 5.30000000,
        images: ["productos/REL301.webp"],
        specs: { "Tipo": "Potencial", "Voltaje": "220V", "Modelo": "064" }
    },
    {
        id: "REL401",
        name: "Relay Potencial 063 110V",
        category: "Protectores",
        model: "063 - 110V",
        desc: `<b>Relé de Potencial 063 (110V)</b><br><br>Relé electromecánico diseñado para sistemas de 110V, gestiona el corte del capacitor de arranque del compresor.`,
        costoCompra: 5.30000000,
        images: ["productos/REL401.webp"],
        specs: { "Tipo": "Potencial", "Voltaje": "110V", "Modelo": "063" }
    },
    {
        id: "REL302",
        name: "Relay Fan 360 de 24V",
        category: "Protectores",
        model: "360 - 24V",
        desc: `<b>Relé para Motor Ventilador (Fan) 360 de 24V</b><br><br>Relé de control accionado por 24V para encender motores de ventilación y sopladores en unidades centrales.`,
        costoCompra: 3.08461538,
        images: ["productos/REL302.webp"],
        specs: { "Uso": "Motor Ventilador (Fan)", "Bobina": "24V" }
    },
    {
        id: "REL304",
        name: "Relay Fan 364 208/240V",
        category: "Protectores",
        model: "364 - 240V",
        desc: `<b>Relé para Motor Ventilador (Fan) 364</b><br><br>Relé de conmutación de alto rendimiento para motores de ventilador operados con voltaje de 208/240V.`,
        costoCompra: 3.77692308,
        images: ["productos/REL304.webp"],
        specs: { "Uso": "Motor Ventilador (Fan)", "Bobina": "208/240V" }
    },
    {
        id: "REL305",
        name: "Relay de Potencia G7L-2A-TUB 240VAC",
        category: "Protectores",
        model: "G7L-2A-TUB",
        desc: `<b>Relé de Potencia G7L-2A-TUB 240VAC</b><br><br>Relé de propósito general y alta capacidad de carga, ideal para circuitos de potencia y calentadores.`,
        costoCompra: 3.29230769,
        images: ["productos/REL305.webp"],
        specs: { "Tipo": "Propósito General", "Voltaje": "240VAC", "Contactos": "Doble Polo" }
    },
    {
        id: "PDV014",
        name: "Protector Landsfoss 220V de 60AMP ",
        category: "Protectores",
        model: "60AMP 220V",
        desc: `<b>Protector de Voltaje 220V 60AMP Principal Landsfoss</b><br><br>Protector de voltaje integral para el suministro principal o equipos de alta capacidad. Soporta hasta 60 Amperios a 220V, protegiendo contra alzas, bajas y picos de tensión.`,
        costoCompra: 33.38461538,
        images: ["productos/PDV014.webp"],
        specs: { "Marca": "Landsfoss", "Voltaje": "220V", "Capacidad": "60 AMP" }
    },
    {
        id: "CNT301",
        name: "Controlador Digital Full Gauge MT-512E 110-220V",
        category: "Refrigeración",
        model: "MT-512E",
        desc: `<b>Controlador Digital Full Gauge MT-512E (110-220V)</b><br><br>Controlador e indicador de temperatura con deshielo natural por parada de compresor. Salida de relé potente. Bivolt (110V/220V).`,
        costoCompra: 26.51538462,
        images: ["productos/CNT301.webp", "productos/CNT301-2.webp"],
        specs: { "Marca": "Full Gauge", "Modelo": "MT-512E", "Voltaje": "110V-220V" }
    },
    {
        id: "CNT324",
        name: "Controlador de Temperatura STC-1000 110V",
        category: "Refrigeración",
        model: "STC-1000",
        desc: `<b>Controlador de Temperatura Digital STC-1000 (110V)</b><br><br>Termostato digital multiuso con doble relé (frío/calor). Ideal para cavas, incubadoras y acuarios. Alimentación a 110V.`,
        costoCompra: 13.25384615,
        images: ["productos/CNT324.webp"],
        specs: { "Modelo": "STC-1000", "Voltaje": "110V", "Función": "Frío y Calor" }
    },
    {
        id: "CNT350",
        name: "Sensor NTC para Controlador Full Gauge SB70",
        category: "Refrigeración",
        model: "SB70 (NTC)",
        desc: `<b>Sensor de Temperatura NTC Full Gauge SB70</b><br><br>Sensor de repuesto original Full Gauge tipo NTC, compatible con la mayoría de sus controladores de temperatura.`,
        costoCompra: 7.95384615,
        images: ["productos/CNT350.webp"],
        specs: { "Marca": "Full Gauge", "Tipo": "Sensor NTC", "Modelo": "SB70" }
    },
    {
        id: "TRM000",
        name: "Termostato Ambiental Analógico",
        category: "Refrigeración",
        model: "Analógico",
        desc: `<b>Termostato Ambiental Analógico SQ</b><br><br>Termostato de control ambiental básico y resistente. Ideal para sistemas de aire acondicionado y ventilación comercial.`,
        costoCompra: 4.63846154,
        images: ["productos/TRM000.webp"],
        specs: { "Tipo": "Analógico", "Uso": "Ambiental", "Modelo": "SQ" }
    },
    {
        id: "TRM006",
        name: "Termostato Ambiental de Perilla",
        category: "Refrigeración",
        model: "Perilla Multi Fan",
        desc: `<b>Termostato Ambiental Analógico (Perilla) Multi Fan</b><br><br>Termostato de control ambiental clásico con perilla de ajuste. Fácil instalación y manejo para sistemas de ventilación y aire acondicionado.`,
        costoCompra: 6.63076923,
        images: ["productos/TRM006.webp"],
        specs: { "Tipo": "Analógico (Perilla)", "Uso": "Ambiental", "Aplicación": "Multi Fan" }
    },
    {
        id: "TRM050",
        name: "Termostato Lechero Económico (+30°C a -30°C) 220V",
        category: "Refrigeración",
        model: "Lechero Económico",
        desc: `<b>Termostato Lechero Económico 220V</b><br><br>Termostato de bulbo capilar con rango de temperatura de +30°C a -30°C. Excelente relación calidad-precio para tanques de enfriamiento y cavas.`,
        costoCompra: 6.06153846,
        images: ["productos/TRM050.webp"],
        specs: { "Tipo": "Bulbo Capilar", "Rango": "+30°C a -30°C", "Voltaje": "220V" }
    },
    {
        id: "TRM052",
        name: "Termostato Lechero 220V",
        category: "Refrigeración",
        model: "Lechero HVAC",
        desc: `<b>Termostato Mecánico 220V "Lechero"</b><br><br>Termostato de bulbo capilar de alta precisión, diseñado especialmente para enfriadores de leche, tanques de agua y aplicaciones HVAC exigentes.`,
        costoCompra: 19.89230769,
        images: ["productos/TRM052.webp"],
        specs: { "Marca": "Landsfoss, Maxwell y Everwell", "Tipo": "Bulbo Capilar", "Voltaje": "220V" }
    },
    {
        id: "TRM102",
        name: "Termostato Digital Inalámbrico Confort Start",
        category: "Aires Acondicionados",
        model: "Confort Sart",
        desc: `<b>Termostato Digital Inalámbrico Confort S</b><br><br>Moderno termostato digital con conectividad inalámbrica para controlar unidades de aire acondicionado a distancia. Pantalla LCD de fácil lectura.`,
        costoCompra: 19.88461538,
        images: ["productos/TRM102.webp", "productos/TRM102-2.webp", "productos/TRM102-3.webp"],
        specs: { "Tipo": "Digital Inalámbrico", "Pantalla": "LCD", "Uso": "Aires Acondicionados" }
    },
    {
        id: "TRM107",
        name: "Termostato Digital Inteligente Programable Degar",
        category: "Aires Acondicionados",
        model: "Degar",
        desc: `<b>Termostato Digital Programable Degar</b><br><br>Termostato avanzado para empotrar en pared, permite programar ciclos de temperatura para maximizar el confort y el ahorro energético.`,
        costoCompra: 38.80769231,
        images: ["productos/TRM107.webp"],
        specs: { "Marca": "Degar", "Tipo": "Digital Programable", "Uso": "Pared (A/A)" }
    },

    {
        id: "TRM-CAJAS-VARIANTE",
        name: "Caja Protectora Acrílica para Termostatos",
        category: "Aires Acondicionados",
        model: "Varias Medidas",
        desc: `<b>Caja Protectora de Acrílico con Llave</b><br><br>Caja de seguridad transparente para proteger termostatos ambientales contra manipulaciones no autorizadas en oficinas, comercios o áreas públicas. Incluye cerradura con llave.`,
        costoCompra: 5.30769231, // Costo base (Pequeña)
        images: ["productos/TRM106-109.webp"],
        specs: { "Material": "Acrílico Transparente", "Seguridad": "Cerradura con llave", "Uso": "Termostatos de pared" },
        variants: [
            { id: "TRM108", name: "Tamaño: Pequeña", costoCompra: 5.30769231 },
            { id: "TRM106", name: "Tamaño: Mediana", costoCompra: 5.96153846 },
            { id: "TRM109", name: "Tamaño: Grande", costoCompra: 6.63846154 }
        ]
    },
    {
        id: "JMG-SET-VARIANTE",
        name: "Juego de Mangueras para Manifold (Estándar)",
        category: "Herramientas",
        model: "Varias Medidas",
        desc: `<b>Juego de Mangueras para Manifold (Estándar)</b><br><br>Set de 3 mangueras (roja, amarilla y azul) para manómetros de refrigeración. Disponibles en diferentes longitudes y capacidades de presión. Seleccione la medida en las opciones.`,
        costoCompra: 4.96923077, // Costo base (36")
        images: ["productos/JMG001-004.webp"],
        specs: { "Tipo": "Juego de 3 Mangueras", "Uso": "Manómetros", "Conexión": "Estándar" },
        variants: [
            { id: "JMG001", name: "Juego Corto 36\" (R22/R134)", costoCompra: 4.96923077 },
            { id: "JMG002", name: "Juego Mediano 60\" (R22/R134)", costoCompra: 6.63076923 },
            { id: "JMG003", name: "Juego Largo 72\" (R134/R410)", costoCompra: 7.62307692 },
            { id: "JMG004", name: "Juego Extra Largo 96\" (R22)", costoCompra: 9.28461538 }
        ]
    },
    {
        id: "JMG-IND-VARIANTE",
        name: "Manguera Individual para Manómetro",
        category: "Herramientas",
        model: "Varias Medidas",
        desc: `<b>Manguera Individual para Manómetro</b><br><br>Manguera de repuesto vendida por unidad para manómetros de refrigeración. Ideal para reemplazar una manguera dañada sin necesidad de comprar el set completo.`,
        costoCompra: 1.66153846, // Costo base (36")
        images: ["productos/JMG006-009.webp"],
        specs: { "Tipo": "Individual (1 pieza)", "Uso": "Repuesto", "Conexión": "Estándar" },
        variants: [
            { id: "JMG006", name: "Manguera Corta 36\"", costoCompra: 1.66153846 },
            { id: "JMG007", name: "Manguera Mediana 60\"", costoCompra: 2.24615385 },
            { id: "JMG009", name: "Manguera Extra Larga 96\"", costoCompra: 2.76153846 }
        ]
    },
    {
        id: "JMG-PREM-VARIANTE",
        name: "Juego de Mangueras Alta Calidad (Landsfoss)",
        category: "Herramientas",
        model: "Alta Calidad",
        desc: `<b>Juego de Mangueras de Alta Calidad (Landsfoss)</b><br><br>Set de 3 mangueras premium diseñadas para técnicos exigentes. Ofrecen mayor resistencia a la presión, flexibilidad y un sellado superior en las conexiones.`,
        costoCompra: 9.34615385, // Costo base (36")
        images: ["productos/JMG200-300.webp"],
        specs: { "Marca": "Landsfoss", "Calidad": "Premium", "Tipo": "Juego de 3 Mangueras" },
        variants: [
            { id: "JMG200", name: "Juego Alta Calidad Corto 36\"", costoCompra: 9.34615385 },
            { id: "JMG300", name: "Juego Alta Calidad Mediano 60\"", costoCompra: 12.03076923 }
        ]
    },
    {
        id: "CTP005",
        name: "Contactor 3 Polos 60 AMP 220V",
        category: "Protectores",
        model: "3 Polos 60A",
        desc: `<b>Contactor Eléctrico 3 Polos 60 AMP (Bobina 220V)</b><br><br>Contactor de alta capacidad para cargas eléctricas pesadas. 3 Polos, 60 Amperios y accionamiento de bobina a 220V.`,
        costoCompra: 18.56153846,
        images: ["productos/CTP005.webp"],
        specs: { "Polos": "3 Polos", "Amperaje": "60 AMP", "Voltaje de Bobina": "220V" }
    },
    {
        id: "CTP010",
        name: "Contactor de Potencia SC6511 65A 220V",
        category: "Protectores",
        model: "SC6511",
        desc: `<b>Contactor de Potencia SC6511 65A 220V</b><br><br>Contactor de potencia serie SC para aplicaciones industriales exigentes. Maneja hasta 65 Amperios con bobina de 220V.`,
        costoCompra: 33.15384615,
        images: ["productos/CTP010.webp"],
        specs: { "Modelo": "SC6511", "Amperaje": "65 AMP", "Voltaje de Bobina": "220V" }
    },
    {
        id: "CTP011",
        name: "Contactor de Potencia SC4011 40A 220V",
        category: "Protectores",
        model: "SC4011",
        desc: `<b>Contactor de Potencia SC4011 40A 220V</b><br><br>Contactor industrial serie SC diseñado para controlar motores y sistemas de hasta 40 Amperios. Bobina de 220V.`,
        costoCompra: 23.86153846,
        images: ["productos/CTP011.webp"],
        specs: { "Modelo": "SC4011", "Amperaje": "40 AMP", "Voltaje de Bobina": "220V" }
    },
    {
        id: "CTP012",
        name: "Contactor 3 Polos 50 AMP 24V",
        category: "Protectores",
        model: "3 Polos 50A",
        desc: `<b>Contactor Eléctrico 3 Polos 50 AMP (Bobina 24V)</b><br><br>Contactor trifásico de 50 Amperios, diseñado para sistemas de control de baja tensión con bobina de 24V.`,
        costoCompra: 17.90000000,
        images: ["productos/CTP012.webp"],
        specs: { "Polos": "3 Polos", "Amperaje": "50 AMP", "Voltaje de Bobina": "24V" }
    },
    {
        id: "CTP015",
        name: "Contactor 3 Polos 60 AMP 220V Chint",
        category: "Protectores",
        model: "Chint 60A",
        desc: `<b>Contactor 3 Polos 60 AMP 220V Chint</b><br><br>Contactor industrial marca Chint. Alta capacidad de corte para sistemas pesados de 60 Amperios con control a 220V.`,
        costoCompra: 18.47692308,
        images: ["productos/CTP015.webp"],
        specs: { "Marca": "Chint", "Polos": "3 Polos", "Amperaje": "60 AMP", "Voltaje de Bobina": "220V" }
    },
    {
        id: "ACT401",
        name: "Aceite 68 Mineral de Galón Suniso 4GS",
        category: "Químicos",
        model: "4GS ISO 68",
        desc: `<b>Aceite 68 Mineral de Galón Suniso 4GS ISO P</b><br><br>Aceite mineral de alta calidad marca Suniso. Presentación en galón, ideal para la lubricación de compresores de refrigeración comercial e industrial.`,
        costoCompra: 35.14615385,
        images: ["productos/ACT401.webp"],
        specs: { "Marca": "Suniso", "Tipo": "Mineral (4GS)", "Presentación": "Galón" }
    },
    {
        id: "CTP001",
        name: "Contactor 2 Polos 40 AMP 24V",
        category: "Protectores",
        model: "2 Polos 40A",
        desc: `<b>Contactor Eléctrico 2 Polos 40 AMP (Bobina 24V)</b><br><br>Contactor de propósito definido de 2 polos para control de cargas eléctricas en sistemas de aire acondicionado y refrigeración. Bobina de 24V.`,
        costoCompra: 6.63076923,
        images: ["productos/CTP001.webp", "productos/CTP001-2.webp"],
        specs: { "Polos": "2 Polos", "Amperaje": "40 AMP", "Voltaje de Bobina": "24V" }
    },
    {
        id: "CTP009",
        name: "Contactor 2 Polos 40 AMP 110V",
        category: "Protectores",
        model: "2 Polos 40A",
        desc: `<b>Contactor Eléctrico 2 Polos 40 AMP (Bobina 110V)</b><br><br>Contactor de propósito definido de 2 polos, ideal para el arranque seguro de equipos con voltaje de control de 110V.`,
        costoCompra: 5.30000000,
        images: ["productos/CTP009.webp", "productos/CTP009-2.webp"],
        specs: { "Polos": "2 Polos", "Amperaje": "40 AMP", "Voltaje de Bobina": "110V" }
    },
    {
        id: "CTP002",
        name: "Contactor 2 Polos 40 AMP 220V",
        category: "Protectores",
        model: "2 Polos 40A",
        desc: `<b>Contactor Eléctrico 2 Polos 40 AMP (Bobina 220V)</b><br><br>Contactor de potencia de 2 polos, diseñado para sistemas que requieren un voltaje de bobina de 220V. Excelente conductividad y resistencia.`,
        costoCompra: 6.63076923,
        images: ["productos/CTP002.webp", "productos/CTP002-2.webp"],
        specs: { "Polos": "2 Polos", "Amperaje": "40 AMP", "Voltaje de Bobina": "220V" }
    },
    {
        id: "CTP003",
        name: "Contactor 3 Polos 40 AMP 24V",
        category: "Protectores",
        model: "3 Polos 40A",
        desc: `<b>Contactor Eléctrico 3 Polos 40 AMP (Bobina 24V)</b><br><br>Contactor trifásico / 3 polos de alto rendimiento para el control de motores y compresores. Voltaje de accionamiento de la bobina: 24V.`,
        costoCompra: 8.29230769,
        images: ["productos/CTP003.webp", "productos/CTP003-2.webp"],
        specs: { "Polos": "3 Polos", "Amperaje": "40 AMP", "Voltaje de Bobina": "24V" }
    },
    {
        id: "CTP004",
        name: "Contactor 3 Polos 40 AMP 220V",
        category: "Protectores",
        model: "3 Polos 40A",
        desc: `<b>Contactor Eléctrico 3 Polos 40 AMP (Bobina 220V)</b><br><br>Contactor de 3 polos de uso pesado para sistemas de climatización comercial e industrial. Bobina de 220V.`,
        costoCompra: 7.94615385,
        images: ["productos/CTP004.webp", "productos/CTP004-2.webp"],
        specs: { "Polos": "3 Polos", "Amperaje": "40 AMP", "Voltaje de Bobina": "220V" }
    },
    {
        id: "CTP006",
        name: "Contactor 3 Polos 50 AMP 220V",
        category: "Protectores",
        model: "3 Polos 50A",
        desc: `<b>Contactor Eléctrico 3 Polos 50 AMP (Bobina 220V)</b><br><br>Contactor de gran capacidad (50 Amperios) y 3 polos. Ideal para cargas industriales de alta demanda con control a 220V.`,
        costoCompra: 14.62307692,
        images: ["productos/CTP006.webp", "productos/CTP006-2.webp"],
        specs: { "Polos": "3 Polos", "Amperaje": "50 AMP", "Voltaje de Bobina": "220V" }
    },
    {
        id: "CTP007",
        name: "Contactor 3 Polos 90 AMP 220V",
        category: "Protectores",
        model: "3 Polos 90A",
        desc: `<b>Contactor Eléctrico 3 Polos 90 AMP (Bobina 220V)</b><br><br>Contactor industrial de máxima capacidad (90 Amperios) diseñado para el control seguro de maquinaria pesada y grandes compresores. Bobina 220V.`,
        costoCompra: 62.99230769,
        images: ["productos/CTP007.webp", "productos/CTP007-2.webp"],
        specs: { "Polos": "3 Polos", "Amperaje": "90 AMP", "Voltaje de Bobina": "220V" }
    },
    {
        id: "CTP008",
        name: "Contactor 3 Polos 30 AMP 110V",
        category: "Protectores",
        model: "3 Polos 30A",
        desc: `<b>Contactor Eléctrico 3 Polos 30 AMP (Bobina 110V)</b><br><br>Dispositivo de conmutación de 3 polos con soporte de 30 Amperios y accionamiento mediante bobina de 110V.`,
        costoCompra: 9.94615385,
        images: ["productos/CTP008.webp", "productos/CTP008-2.webp"],
        specs: { "Polos": "3 Polos", "Amperaje": "30 AMP", "Voltaje de Bobina": "110V" }
    },
    {
        id: "CTP013",
        name: "Contactor 3 Polos 40 AMP 220V",
        category: "Protectores",
        model: "Pickens LC1",
        desc: `<b>Contactor 3 Polos 40 AMP 220V Pickens LC1</b><br><br>Contactor de grado industrial marca Pickens serie LC1. Garantiza durabilidad y resistencia en el manejo de cargas de 40 Amperios a 220V.`,
        costoCompra: 49.73076923,
        images: ["productos/CTP013.webp"],
        specs: { "Marca": "Pickens", "Polos": "3 Polos", "Amperaje": "40 AMP", "Voltaje de Bobina": "220V" }
    },
    {
        id: "CTP014",
        name: "Contactor 3 Polos 32 AMP 110V",
        category: "Protectores",
        model: "Chint 32A",
        desc: `<b>Contactor 3 Polos 32 AMP 110V Chint</b><br><br>Contactor de alta fiabilidad de la reconocida marca Chint. Configuración de 3 polos, 32 Amperios y bobina de accionamiento a 110V.`,
        costoCompra: 7.19230769,
        images: ["productos/CTP014.webp", "productos/CTP014-2.webp"],
        specs: { "Marca": "Chint", "Polos": "3 Polos", "Amperaje": "32 AMP", "Voltaje de Bobina": "110V" }
    },
    {
        id: "CTP016",
        name: "Contactor 3 Polos 30 AMP 220V",
        category: "Protectores",
        model: "3 Polos 30A",
        desc: `<b>Contactor Eléctrico 3 Polos 30 AMP (Bobina 220V)</b><br><br>Contactor trifásico estándar para el manejo eficiente de circuitos y motores. Capacidad de 30 Amperios con bobina 220V.`,
        costoCompra: 6.63076923,
        images: ["productos/CTP016.webp", "productos/CTP016-2.webp"],
        specs: { "Polos": "3 Polos", "Amperaje": "30 AMP", "Voltaje de Bobina": "220V" }
    },
    {
        id: "CTP017",
        name: "Contactor 3 Polos 30 AMP 24V",
        category: "Protectores",
        model: "3 Polos 30A",
        desc: `<b>Contactor Eléctrico 3 Polos 30 AMP (Bobina 24V)</b><br><br>Contactor de 3 polos diseñado para sistemas de control de baja tensión con bobina de 24V. Soporta hasta 30 Amperios.`,
        costoCompra: 7.29230769,
        images: ["productos/CTP017.webp", "productos/CTP017-2.webp"],
        specs: { "Polos": "3 Polos", "Amperaje": "30 AMP", "Voltaje de Bobina": "24V" }
    },
    {
        id: "CNT012",
        name: "Contactor 3 Polos 40 AMP 110V",
        category: "Protectores",
        model: "Chint 40A",
        desc: `<b>Contactor 3 Polos 40 AMP 110V</b><br><br>Contactor industrial marca Chint. Alta capacidad de corte y conducción eléctrica segura para sistemas de 40 Amperios con control de 110V.`,
        costoCompra: 9.94615385,
        images: ["productos/CNT012.webp", "productos/CNT012-2.webp"],
        specs: { "Marca": "Chint", "Polos": "3 Polos", "Amperaje": "40 AMP", "Voltaje de Bobina": "110V" }
    },
    {
        id: "TUB-CAP-VARIANTE",
        name: "Tubo Capilar de Cobre (Varias Medidas) (Por Metro)",
        category: "Refrigeración",
        model: "Varias Medidas",
        desc: `<b>Tubo Capilar de Cobre</b><br><br>Tubería capilar de cobre de alta precisión, esencial para la expansión y control de flujo de gas en sistemas de refrigeración. Seleccione la medida requerida en las opciones.`,
        costoCompra: 0.43846154, // Costo base (0.26)
        images: ["productos/TUB001-TUB011.webp"],
        specs: { "Material": "Cobre", "Tipo": "Capilar", "Uso": "Refrigeración" },
        variants: [
            { id: "TUB001", name: "Medida: 0.26", costoCompra: 0.43846154 },
            { id: "TUB002", name: "Medida: 0.31", costoCompra: 0.56923077 },
            { id: "TUB003", name: "Medida: 0.36", costoCompra: 0.59230769 },
            { id: "TUB004", name: "Medida: 0.42", costoCompra: 0.66153846 },
            { id: "TUB005", name: "Medida: 0.49", costoCompra: 0.72307692 },
            { id: "TUB006", name: "Medida: 0.54", costoCompra: 0.80769231 },
            { id: "TUB007", name: "Medida: 0.59", costoCompra: 0.99230769 },
            { id: "TUB008", name: "Medida: 0.64", costoCompra: 1.12307692 },
            { id: "TUB009", name: "Medida: 0.70", costoCompra: 1.16153846 },
            { id: "TUB010", name: "Medida: 0.75", costoCompra: 1.65384615 },
            { id: "TUB011", name: "Medida: 0.80", costoCompra: 1.96923077 }
        ]
    },
    {
        id: "TUB-FLEX-VARIANTE",
        name: "Tubería Flexible de Cobre (Varias Medidas) (Por Metro)",
        category: "Refrigeración",
        model: "Rollo Flexible",
        desc: `<b>Tubería Flexible de Cobre (Pancake)</b><br><br>Rollo de tubería de cobre flexible, ideal para la instalación de aires acondicionados y sistemas de refrigeración. Resistente a altas presiones. Seleccione la medida.`,
        costoCompra: 2.16923077, // Costo base (1/4")
        images: ["productos/TUB100-107.webp"],
        specs: { "Material": "Cobre", "Tipo": "Flexible (Rollo)", "Uso": "Instalación" },
        variants: [
            { id: "TUB107", name: "Medida: 3/16\"", costoCompra: 1.25384615 },
            { id: "TUB100", name: "Medida: 1/4\"", costoCompra: 2.16923077 },
            { id: "TUB106", name: "Medida: 5/16\"", costoCompra: 2.65384615 },
            { id: "TUB101", name: "Medida: 3/8\"", costoCompra: 3.97692308 },
            { id: "TUB102", name: "Medida: 1/2\"", costoCompra: 5.63846154 },
            { id: "TUB103", name: "Medida: 5/8\"", costoCompra: 8.29230769 },
            { id: "TUB104", name: "Medida: 3/4\"", costoCompra: 9.10769231 },
            { id: "TUB105", name: "Medida: 7/8\"", costoCompra: 13.26153846 }
        ]
    },
    {
        id: "CRU002",
        name: "Tarjeta Universal Con Control Remoto Para Aires Acondicionados 220V",
        category: "Aires Acondicionados",
        model: "QD-U02B",
        desc: `<b>Tarjeta Universal Con Control Remoto Para Aires Acondicionados 220V</b><br><br>Placa de control universal para reparación y actualización de aires acondicionados a 220V. Incluye control remoto y terminales de conexión.`,
        costoCompra: 10.77692308,
        images: ["productos/CRU002.webp"],
        specs: { "Tipo": "Tarjeta Electrónica", "Voltaje": "220V", "Incluye": "Control Remoto" }
    },
    {
        id: "CRU003",
        name: "Tarjeta Universal Con Display Inteligente y Control Remoto para Aires Acondicionados 220v",
        category: "Aires Acondicionados",
        model: "QD-U11A",
        desc: `<b>Tarjeta Universal Con Display Inteligente y Control Remoto para Aires Acondicionados 220v</b><br><br>Placa de control universal para aires acondicionados. Incluye display digital de temperatura y control remoto para una visualización y manejo cómodos.`,
        costoCompra: 16.57692308,
        images: ["productos/CRU003.webp", "productos/CRU003 (2).webp"],
        specs: { "Tipo": "Tarjeta Electrónica", "Compatibilidad": "Universal", "Incluye": "Display y Control Remoto" }
    },
    {
        id: "CRU005",
        name: "Tarjeta Universal Con Control Remoto para Aires Acondicionados 110V",
        category: "Aires Acondicionados",
        model: "QD-U02B (SW)",
        desc: `<b>Tarjeta Universal Con Control Remoto para Aires Acondicionados 110V</b><br><br>Placa de control universal específica para la reparación y modernización de aires acondicionados con alimentación a 110V. Incluye control remoto.`,
        costoCompra: 10.78461538,
        images: ["productos/CRU005.webp"],
        specs: { "Tipo": "Tarjeta Electrónica", "Voltaje": "110V", "Incluye": "Control Remoto" }
    },
    {
        id: "CRU010",
        name: "Tarjeta Universal con Control para Aires Acondicionados 220v para Motores PG",
        category: "Aires Acondicionados",
        model: "QD-U05PGC+",
        desc: `<b>Tarjeta Universal con Control para Aires Acondicionados 220v para Motores PG</b><br><br>Sistema de control universal avanzado para aires acondicionados, modelo QD-U05PGC+ con soporte para motores PG (ventiladores con sensor de velocidad). Incluye display y control remoto.`,
        costoCompra: 11.83846154,
        images: ["productos/CRU010.webp"],
        specs: { "Tipo": "Tarjeta Electrónica", "Modelo": "QD-U05PGC+", "Motor compatible": "Motores PG" }
    },
    {
        id: "CRU011",
        name: "Tarjeta Universal Degar Con Control Remoto para Aires Acondicionados 220V",
        category: "Aires Acondicionados",
        model: "EL-QD-U02B",
        desc: `<b>Tarjeta Universal Degar Con Control Remoto para Aires Acondicionados 220V</b><br><br>Placa de control electrónico de alta calidad de la marca Degar para aires acondicionados de 220V. Garantía de durabilidad. Incluye control remoto.`,
        costoCompra: 13.66153846,
        images: ["productos/CRU011.webp"],
        specs: { "Marca": "Degar", "Voltaje": "220V", "Incluye": "Control Remoto" }
    },
    {
        id: "CAP-NEGRO-VAR",
        name: "Capacitor Cuadrado Negro (Varias Medidas)",
        category: "Capacitores",
        model: "Varias Medidas",
        desc: `<b>Capacitor Cuadrado Negro 450V</b><br><br>Capacitor de marcha de resina plástica negra. Ideal para motores de ventilador de consolas y equipos de aire acondicionado. Por favor, seleccione la capacitancia (MFD) que necesita.`,
        costoCompra: 0.39787798, // Costo base (1 MFD)
        images: ["productos/CAP NEGRO.webp"],
        specs: { "Tipo": "Plástico Negro", "Voltaje": "450V / 250V", "Uso": "Motores Fan" },
        variants: [
            { id: "CAP001", name: "1 MFD 450V", costoCompra: 0.39787798 },
            { id: "CAP002", name: "1.2 MFD 450V", costoCompra: 0.43103448 },
            { id: "CAP003", name: "1.5 MFD 450V", costoCompra: 0.46419098 },
            { id: "CAP004", name: "2 MFD 450V", costoCompra: 0.49734748 },
            { id: "CAP005", name: "2.5 MFD 450V", costoCompra: 0.53050398 },
            { id: "CAP006", name: "3 MFD 450V", costoCompra: 0.56366048 },
            { id: "CAP007", name: "3.5 MFD 450V", costoCompra: 0.59681698 },
            { id: "CAP008", name: "4 MFD 450V", costoCompra: 0.62997347 },
            { id: "CAP009", name: "4.5 MFD 450V", costoCompra: 0.66312997 },
            { id: "CAP010", name: "5 MFD 450V", costoCompra: 0.69628647 },
            { id: "CAP011", name: "6 MFD 450V", costoCompra: 0.72944297 },
            { id: "CAP012", name: "7.5 MFD 450V", costoCompra: 0.76259947 },
            { id: "CAP013", name: "8 MFD 450V", costoCompra: 0.79575597 },
            { id: "CAP014", name: "10 MFD 450V", costoCompra: 0.82891247 },
            { id: "CAP066", name: "12 MFD 450V", costoCompra: 0.73846154 },
            { id: "CAP015", name: "12.5 MFD 450V", costoCompra: 0.86206897 },
            { id: "CAP057", name: "13 MFD 450V", costoCompra: 1.25384615 },
            { id: "CAP016", name: "15 MFD 450V", costoCompra: 0.89522546 },
            { id: "CAP068", name: "15 MFD 450V Original", costoCompra: 3.09230769 },
            { id: "CAP161", name: "15 MFD 250V (Eq. Pequeños)", costoCompra: 1.19230769 }
        ]
    },
    {
        id: "CAP-METAL-VAR",
        name: "Capacitor Metálico de Marcha (Varias Medidas)",
        category: "Capacitores",
        model: "Varias Medidas",
        desc: `<b>Capacitor de Marcha Metálico (Sencillo y Dual)</b><br><br>Capacitor cilíndrico de aluminio para el arranque y marcha continua de compresores y ventiladores de aire acondicionado. Resistente y duradero.`,
        costoCompra: 1.06100796, // Costo base (4 MFD)
        images: ["productos/CAP METALICO.webp"],
        specs: { "Tipo": "Metálico Cilíndrico", "Voltaje": "370V / 440V", "Uso": "Compresores" },
        variants: [
            // Sencillos Actualizados
            { id: "CAP081", name: "4 MFD 370/440V", costoCompra: 1.06100796 },
            { id: "CAP020", name: "5 MFD 370/440V", costoCompra: 1.12732095 },
            { id: "CAP082", name: "6 MFD 370/440V", costoCompra: 1.19363395 },
            { id: "CAP-S75", name: "7.5 MFD 370/440V", costoCompra: 1.25994695 },
            { id: "CAP085", name: "8 MFD 370/440V", costoCompra: 1.32625995 },
            { id: "CAP022", name: "10 MFD 370/440V", costoCompra: 1.32625995 },
            { id: "CAP023", name: "12.5 MFD 370/440V", costoCompra: 1.32625995 },
            { id: "CAP024", name: "15 MFD 370/450V", costoCompra: 1.49204244 },
            { id: "CAP025", name: "20 MFD 370/450V", costoCompra: 1.65782493 },
            { id: "CAP026", name: "25 MFD 370/450V", costoCompra: 1.82360743 },
            { id: "CAP027", name: "30 MFD 370/450V", costoCompra: 1.98938992 },
            { id: "CAP028", name: "35 MFD 370/450V", costoCompra: 2.15517241 },
            { id: "CAP029", name: "40 MFD 370/450V", costoCompra: 2.32095491 },
            { id: "CAP030", name: "45 MFD 370/450V", costoCompra: 2.48673740 },
            { id: "CAP031", name: "50 MFD 370/450V", costoCompra: 2.65251989 },
            { id: "CAP032", name: "55 MFD 370/450V", costoCompra: 2.81830239 },
            { id: "CAP033", name: "60 MFD 370/450V", costoCompra: 2.98408488 },
            { id: "CAP034", name: "65 MFD 370/450V", costoCompra: 3.14986737 },
            { id: "CAP035", name: "70 MFD 370/450V", costoCompra: 3.31564987 },
            { id: "CAP038", name: "75 MFD 370/450V", costoCompra: 3.48143236 },
            { id: "CAP036", name: "80 MFD 370/450V", costoCompra: 3.64721485 },
            { id: "CAP037", name: "85 MFD 370/450V", costoCompra: 3.81299735 },
            { id: "CAP039", name: "100 MFD 370/450V", costoCompra: 5.96816976 },

            // Dobles (Dual) Mantenidos
            { id: "CAP042", name: "20+5 MFD 440V", costoCompra: 2.50000000 },
            { id: "CAP040", name: "25+5 MFD 440V", costoCompra: 2.50000000 },
            { id: "CAP069", name: "30+4 MFD 440V", costoCompra: 2.43846154 },
            { id: "CAP043", name: "30+5 MFD 440V", costoCompra: 2.32307692 },
            { id: "CAP058", name: "30+6 MFD 440V", costoCompra: 2.58461538 },
            { id: "CAP083", name: "35+4 MFD 440V", costoCompra: 2.72307692 },
            { id: "CAP046", name: "35+5 MFD 440V", costoCompra: 2.67692308 },
            { id: "CAP041", name: "35+6 MFD 440V", costoCompra: 2.56923077 },
            { id: "CAP044", name: "40+5 MFD 440V", costoCompra: 3.25384615 },
            { id: "CAP062", name: "40+6 MFD 440V", costoCompra: 2.80000000 },
            { id: "CAP064", name: "45+3 MFD 440V", costoCompra: 2.98461538 },
            { id: "CAP045", name: "45+5 MFD 440V", costoCompra: 2.98461538 },
            { id: "CAP065", name: "45+6 MFD 440V", costoCompra: 2.98461538 },
            { id: "CAP047", name: "50+5 MFD 440V", costoCompra: 3.31538462 },
            { id: "CAP059", name: "50+6 MFD 440V", costoCompra: 3.15384615 },
            { id: "CAP060", name: "55+5 MFD 440V", costoCompra: 3.15384615 },
            { id: "CAP067", name: "55+6 MFD 440V", costoCompra: 3.31538462 },
            { id: "CAP084", name: "60+5 MFD 440V", costoCompra: 3.33846154 },
            { id: "CAP061", name: "60+6 MFD 440V", costoCompra: 3.60000000 }
        ]
    },
    {
        id: "CAP-BOMBA-VAR",
        name: "Capacitor para Bomba de Agua (Varias Medidas)",
        category: "Capacitores",
        model: "Varias Medidas",
        desc: `<b>Capacitor para Bomba de Agua</b><br><br>Capacitor cilíndrico recubierto, ideal para el arranque y funcionamiento de bombas de agua periféricas y centrífugas. Por favor seleccione la capacidad.`,
        costoCompra: 0.90000000, // Costo base (20 MFD)
        images: ["productos/CAP BOMBA DE AGUA.webp"],
        specs: { "Tipo": "Cilíndrico Blanco", "Voltaje": "250V / 450V", "Uso": "Bombas de Agua" },
        variants: [
            { id: "CAP080", name: "12 MFD 250V (Plástico Orig. Nevera)", costoCompra: 1.92307692 },
            { id: "CAP048", name: "12 MFD 250V", costoCompra: 1.25384615 },
            { id: "CAP049", name: "14 MFD 250V", costoCompra: 1.25384615 },
            { id: "CAP050", name: "16 MFD 250V", costoCompra: 1.13846154 },
            { id: "CAP063", name: "18 MFD 250V", costoCompra: 1.73076923 },
            { id: "CAP051", name: "20 MFD 250V", costoCompra: 0.90000000 },
            { id: "CAP052", name: "22 MFD 250V", costoCompra: 1.32307692 },
            { id: "CAP053", name: "25 MFD 250V", costoCompra: 1.43076923 },
            { id: "CAP075", name: "30 MFD 250V", costoCompra: 1.55384615 },
            { id: "CAP078", name: "31.5 MFD 250V", costoCompra: 2.35384615 },
            { id: "CAP074", name: "35 MFD 250V", costoCompra: 1.72307692 },
            { id: "CAP072", name: "40 MFD 250V", costoCompra: 2.03846154 },
            { id: "CAP054", name: "45 MFD 250V", costoCompra: 2.64615385 },
            { id: "CAP079", name: "50 MFD 250V", costoCompra: 2.90769231 },
            { id: "CAP077", name: "55 MFD 250V", costoCompra: 2.91538462 },
            { id: "CAP055", name: "60 MFD 250V", costoCompra: 3.07692308 },
            { id: "CAP056", name: "65 MFD 250V", costoCompra: 2.09230769 },
            { id: "CAP073", name: "80 MFD 450V", costoCompra: 5.86153846 },
            { id: "CAP070", name: "100 MFD 250V", costoCompra: 5.98461538 },
            { id: "CAP071", name: "120 MFD 250V", costoCompra: 7.10769231 },
            { id: "CAP086", name: "150 MFD 250V", costoCompra: 9.13846154 }
        ]
    },
    {
        id: "CAP-ARRANQUE-VAR",
        name: "Capacitor de Arranque (Varias Medidas)",
        category: "Capacitores",
        model: "Varias Medidas",
        desc: `<b>Capacitor de Arranque (Start Capacitor)</b><br><br>Capacitor electrolítico diseñado para proporcionar el torque inicial necesario para arrancar compresores pesados. Alta fiabilidad comercial e industrial.`,
        costoCompra: 1.54615385, // Costo base (88-106 uF)
        images: ["productos/CAP ARRANQUE.webp"],
        specs: { "Tipo": "Cilíndrico Plástico", "Función": "Arranque (Start)", "Uso": "Compresores" },
        variants: [
            // Rango 110/125V
            { id: "CAP126", name: "88-106 µF 110/125V", costoCompra: 1.54615385 },
            { id: "CAP148", name: "88-108 µF 110/125V", costoCompra: 1.96153846 },
            { id: "CAP101", name: "108-130 µF 110/125V", costoCompra: 1.96153846 },
            { id: "CAP103", name: "124-149 µF 110/125V", costoCompra: 1.45384615 },
            { id: "CAP139", name: "128-154 µF 110/125V", costoCompra: 1.65384615 },
            { id: "CAP149", name: "130-156 µF 110/125V", costoCompra: 1.74615385 },
            { id: "CAP104", name: "145-175 µF 110/125V", costoCompra: 1.55384615 },
            { id: "CAP106", name: "161-193 µF 110/125V", costoCompra: 2.37692308 },
            { id: "CAP108", name: "189-227 µF 110/125V", costoCompra: 1.68461538 },
            { id: "CAP152", name: "200-240 µF 110/125V", costoCompra: 1.86153846 },
            { id: "CAP110", name: "216-259 µF 110/125V", costoCompra: 1.77692308 },
            { id: "CAP112", name: "243-292 µF 110/125V", costoCompra: 2.63846154 },
            { id: "CAP114", name: "270-324 µF 110/125V", costoCompra: 2.86153846 },
            { id: "CAP153", name: "300-360 µF 110/125V", costoCompra: 2.31538462 },
            { id: "CAP117", name: "324-389 µF 110/125V", costoCompra: 2.24615385 },
            { id: "CAP118", name: "340-408 µF 110/125V", costoCompra: 2.71538462 },
            { id: "CAP119", name: "378-454 µF 110/125V", costoCompra: 3.42307692 },
            { id: "CAP155", name: "400-480 µF 110/125V", costoCompra: 2.95384615 },
            { id: "CAP121", name: "430-516 µF 110/125V", costoCompra: 2.45384615 },
            { id: "CAP122", name: "460-552 µF 110/125V", costoCompra: 2.62307692 },
            { id: "CAP146", name: "485-533 µF 110/125V", costoCompra: 4.53076923 },
            { id: "CAP123", name: "540-648 µF 110/125V", costoCompra: 3.30769231 },
            { id: "CAP124", name: "590-708 µF 110/125V", costoCompra: 4.83846154 },
            { id: "CAP125", name: "645-774 µF 110/125V", costoCompra: 5.08461538 },
            { id: "CAP158", name: "650-780 µF 110/125V", costoCompra: 3.64615385 },
            { id: "CAP154", name: "708-850 µF 110/125V", costoCompra: 3.80769231 },
            { id: "CAP145", name: "720-864 µF 110/125V", costoCompra: 4.58461538 },
            { id: "CAP160", name: "829-995 µF 110/125V", costoCompra: 3.77692308 },

            // Rango 220/250V
            { id: "CAP127", name: "88-106 µF 220/250V", costoCompra: 2.43076923 },
            { id: "CAP150", name: "88-108 µF 220/250V", costoCompra: 2.43076923 },
            { id: "CAP102", name: "108-130 µF 220/250V", costoCompra: 1.63076923 },
            { id: "CAP138", name: "124-149 µF 220/250V", costoCompra: 2.08461538 },
            { id: "CAP151", name: "130-156 µF 220/250V", costoCompra: 2.64615385 },
            { id: "CAP163", name: "145-174 µF 220/250V", costoCompra: 3.03846154 },
            { id: "CAP105", name: "145-175 µF 220/250V", costoCompra: 3.09230769 },
            { id: "CAP135", name: "161-193 µF 220/250V", costoCompra: 3.49230769 },
            { id: "CAP107", name: "189-227 µF 220/250V", costoCompra: 3.53076923 },
            { id: "CAP144", name: "216-259 µF 220/250V", costoCompra: 3.87692308 },
            { id: "CAP147", name: "233-280 µF 220/250V", costoCompra: 3.73076923 },
            { id: "CAP113", name: "243-292 µF 220/250V", costoCompra: 2.50769231 },
            { id: "CAP116", name: "270-324 µF 220/250V", costoCompra: 4.24615385 },
            { id: "CAP133", name: "324-389 µF 220/250V", costoCompra: 4.12307692 },
            { id: "CAP134", name: "340-408 µF 220/250V", costoCompra: 2.95384615 },
            { id: "CAP130", name: "378-464 µF 220/250V", costoCompra: 3.06153846 },
            { id: "CAP162", name: "378-454 µF 220/250V", costoCompra: 4.10000000 },
            { id: "CAP120", name: "400-480 µF 220/250V", costoCompra: 2.86923077 },
            { id: "CAP131", name: "430-516 µF 220/250V", costoCompra: 3.22307692 },
            { id: "CAP128", name: "460-552 µF 220/250V", costoCompra: 3.11538462 },
            { id: "CAP132", name: "540-648 µF 220/250V", costoCompra: 3.75384615 },
            { id: "CAP137", name: "570-608 µF 220/250V", costoCompra: 4.08461538 },
            { id: "CAP136", name: "590-708 µF 220/250V", costoCompra: 4.50000000 },
            { id: "CAP129", name: "708-850 µF 220/250V", costoCompra: 4.03076923 },

            // Rango 330V
            { id: "CAP157", name: "88-106 µF 330V", costoCompra: 1.30000000 },
            { id: "CAP165", name: "108-130 µF 330V", costoCompra: 1.39230769 },
            { id: "CAP156", name: "130-156 µF 330V", costoCompra: 3.02307692 },
            { id: "CAP166", name: "130-156 µF 330V (Descarga)", costoCompra: 1.56153846 },
            { id: "CAP167", name: "161-193 µF 330V", costoCompra: 1.72307692 },
            { id: "CAP109", name: "189-227 µF 330V", costoCompra: 1.82307692 },
            { id: "CAP159", name: "233-280 µF 330V", costoCompra: 4.04615385 },
            { id: "CAP164", name: "250 µF 330V", costoCompra: 7.16153846 },
            { id: "CAP115", name: "270-324 µF 330V", costoCompra: 5.34615385 }
        ]
    },
    {
        id: "ANC-VARIANTE",
        name: "Anillo de Cobre Soldable (Varias Medidas)",
        category: "Refrigeración",
        model: "Varias Medidas",
        desc: `<b>Anillo de Cobre Soldable</b><br><br>Cople o anillo de cobre de alta pureza diseñado para unir tuberías de refrigeración y aire acondicionado mediante soldadura. Seleccione la medida requerida.`,
        costoCompra: 0.14615385, // Costo base (1/4")
        images: ["productos/ANC001-008.webp"],
        specs: { "Material": "Cobre", "Tipo": "Unión / Anillo", "Uso": "Soldable" },
        variants: [
            { id: "ANC001", name: "Medida: 1/4\"", costoCompra: 0.14615385 },
            { id: "ANC002", name: "Medida: 3/8\"", costoCompra: 0.11538462 },
            { id: "ANC003", name: "Medida: 1/2\"", costoCompra: 0.16153846 },
            { id: "ANC004", name: "Medida: 5/8\"", costoCompra: 0.30000000 },
            { id: "ANC005", name: "Medida: 3/4\"", costoCompra: 0.43076923 },
            { id: "ANC006", name: "Medida: 7/8\"", costoCompra: 0.69230769 },
            { id: "ANC007", name: "Medida: 1-1/8\"", costoCompra: 1.13846154 },
            { id: "ANC008", name: "Medida: 1-3/8\"", costoCompra: 1.76923077 }
        ]
    },
    {
        id: "VRA-VARIANTE",
        name: "Válvula Restrictora (Varios Tamaños)",
        category: "Refrigeración",
        model: "Varios Modelos",
        desc: `<b>Válvula Restrictora para Aire Acondicionado</b><br><br>Válvula restrictora (pistón) de precisión para controlar el flujo de refrigerante en sistemas de aire acondicionado. Modelos disponibles por capacidad (BTU o HP).`,
        costoCompra: 1.74615385, // Costo base (12k BTU)
        images: ["productos/VRA100-VRA602.webp"],
        specs: { "Tipo": "Restrictora", "Aplicación": "Expansión de Gas", "Uso": "Aires Acondicionados" },
        variants: [
            { id: "VRA100", name: "Capacidad: 12.000 BTU", costoCompra: 1.74615385 },
            { id: "VRA200", name: "Capacidad: 18.000 BTU", costoCompra: 1.56153846 },
            { id: "VRA300", name: "Capacidad: 24.000 BTU", costoCompra: 1.95384615 },
            { id: "VRA350", name: "Capacidad: 30.000 BTU", costoCompra: 1.66153846 },
            { id: "VRA400", name: "Capacidad: 36.000 BTU", costoCompra: 1.65384615 },
            { id: "VRA450", name: "Capacidad: 48.000 BTU", costoCompra: 1.98461538 },
            { id: "VRA500", name: "Capacidad: 60.000 BTU", costoCompra: 1.98461538 },
            { id: "VRA600", name: "Capacidad: 2 HP (R410A Degar)", costoCompra: 2.64615385 },
            { id: "VRA601", name: "Capacidad: 3 HP (R410A Degar)", costoCompra: 2.64615385 },
            { id: "VRA602", name: "Capacidad: 5 HP (R410A Degar)", costoCompra: 2.64615385 }
        ]
    },
    {
        id: "VRS-VARIANTE",
        name: "Válvula de Servicio para Split (Varias Medidas)",
        category: "Refrigeración",
        model: "Varias Medidas",
        desc: `<b>Válvula de Servicio para Aires Acondicionados Split</b><br><br>Válvula de servicio de latón de alta calidad para condensadoras de equipos Split. Permite retener y liberar el paso de gas refrigerante de forma segura. Seleccione la medida requerida.`,
        costoCompra: 2.10769231, // Costo base (1/4)
        images: ["productos/VRS12-VRA078.webp"],
        specs: { "Tipo": "Válvula de Servicio", "Uso": "Equipos Split", "Material": "Latón Forjado" },
        variants: [
            { id: "VRS014", name: "Medida: 1/4\"", costoCompra: 2.10769231 },
            { id: "VRS038", name: "Medida: 3/8\"", costoCompra: 3.30769231 },
            { id: "VRS012", name: "Medida: 1/2\"", costoCompra: 4.99230769 },
            { id: "VRS058", name: "Medida: 5/8\"", costoCompra: 6.62307692 },
            { id: "VRS034", name: "Medida: 3/4\"", costoCompra: 7.95384615 },
            { id: "VRS078", name: "Medida: 7/8\"", costoCompra: 18.56153846 }
        ]
    },
    {
        id: "VAL-PINCHAR-VARIANTE",
        name: "Válvula de Pinchar (Varios Tamaños)",
        category: "Herramientas",
        model: "Válvula Perforadora",
        desc: `<b>Válvula de Pinchar / Perforadora para Tuberías</b><br><br>Válvula para perforar tuberías de refrigeración selladas sin necesidad de soldar, permitiendo la toma de presión o carga de gas rápida.`,
        costoCompra: 1.75384615,
        images: ["productos/VAL002-003.webp"],
        specs: { "Tipo": "De Pinchar (Perforadora)", "Uso": "Acceso a líneas selladas", "Material": "Aleación metálica" },
        variants: [
            { id: "VAL002", name: "Medidas: 1/4\", 3/8\", 5/16\"", costoCompra: 1.75384615 },
            { id: "VAL003", name: "Medida: 1/2\" (Grande)", costoCompra: 2.31538462 }
        ]
    },
    {
        id: "VAL001",
        name: "Válvula de Servicio Soldable con Gusanillo 1/4\"",
        category: "Refrigeración",
        model: "1/4 Pulgada",
        desc: `<b>Válvula de Servicio Soldable 1/4\" con Gusanillo</b><br><br>Válvula de acceso de cobre soldable (tipo gusanillo) de 1/4 de pulgada. Incluye tapa y núcleo (obús) para la carga y descarga de gas en sistemas de refrigeración.`,
        costoCompra: 0.33076923,
        images: ["productos/VAL001.webp"],
        specs: { "Medida": "1/4\"", "Tipo": "Soldable con Gusanillo", "Incluye": "Núcleo y Tapa" }
    },
    {
        id: "TEE-VARIANTE",
        name: "Conexion en T de Cobre (Varias Medidas)",
        category: "Refrigeración",
        model: "Varias Medidas",
        desc: `<b>Tee de Cobre para Soldar</b><br><br>Conexión en T de cobre de alta calidad, indispensable para derivaciones en sistemas de tuberías de aire acondicionado y refrigeración. Seleccione la medida requerida.`,
        costoCompra: 0.40000000, // Costo base (Tee 1/2)
        images: ["productos/TEE102---TEE708.webp"],
        specs: { "Material": "Cobre", "Tipo": "Conexión en T", "Uso": "Soldable" },
        variants: [
            { id: "TEE104", name: "Medida: 1/4", costoCompra: 0.33076923 },
            { id: "TEE308", name: "Medida: 3/8", costoCompra: 0.33076923 },
            { id: "TEE102", name: "Medida: 1/2", costoCompra: 0.40000000 },
            { id: "TEE508", name: "Medida: 5/8", costoCompra: 0.66153846 },
            { id: "TEE304", name: "Medida: 3/4", costoCompra: 1.65384615 },
            { id: "TEE708", name: "Medida: 7/8", costoCompra: 1.65384615 },
            { id: "TEE158", name: "Medida: 1-5/8", costoCompra: 4.75384615 }
        ]
    },
    {
        id: "COC-VARIANTE",
        name: "Codo de Cobre Soldable (Varias Medidas)",
        category: "Refrigeración",
        model: "Varias Medidas",
        desc: `<b>Codo de Cobre Soldable</b><br><br>Codo de cobre duradero para realizar giros y conexiones precisas en las líneas de refrigeración. Máxima resistencia a la presión. Seleccione la medida.`,
        costoCompra: 0.48461538, // Costo base
        images: ["productos/COC001---010.webp"],
        specs: { "Material": "Cobre", "Tipo": "Codo", "Uso": "Soldable" },
        variants: [
            { id: "COC001", name: "Medida: 1/4\"", costoCompra: 0.55384615 },
            { id: "COC002", name: "Medida: 3/8\"", costoCompra: 0.48461538 },
            { id: "COC003", name: "Medida: 1/2\"", costoCompra: 0.48461538 },
            { id: "COC004", name: "Medida: 5/8\"", costoCompra: 0.46923077 },
            { id: "COC005", name: "Medida: 3/4\"", costoCompra: 0.66153846 },
            { id: "COC006", name: "Medida: 7/8\"", costoCompra: 0.96153846 },
            { id: "COC007", name: "Medida: 1-1/8\" (Grande)", costoCompra: 2.74615385 },
            { id: "COC010", name: "Medida: 1-1/4\" (Grande)", costoCompra: 2.65384615 },
            { id: "COC008", name: "Medida: 1-3/8\" (Grande)", costoCompra: 3.06923077 },
            { id: "COC009", name: "Medida: 2-1/8\" (Grande)", costoCompra: 6.63076923 }
        ]
    },
    {
        id: "ADU-VARIANTE",
        name: "Adaptadores de Bronce (R22 a R410 y R410 a R22)",
        category: "Refrigeración",
        model: "Varios Tipos",
        desc: `<b>Adaptadores de Conexión R22 / R410</b><br><br>Adaptador metálico indispensable para las mangueras de los manómetros al trabajar con equipos de nueva generación R410A o R22 tradicional.`,
        costoCompra: 1.32307692,
        images: ["productos/ADU300-350.webp"],
        specs: { "Tipo": "Adaptador de Rosca", "Material": "Bronce" },
        variants: [
            { id: "ADU300", name: "Adaptador R22 a R410 (1/4 a 5/16)", costoCompra: 1.32307692 },
            { id: "ADU350", name: "Adaptador R410 a R22 (5/16 a 1/4)", costoCompra: 1.32307692 }
        ]
    },
    {
        id: "TUR-VARIANTE",
        name: "Tuerca Reforzada de Bronce",
        category: "Refrigeración",
        model: "Varias Medidas",
        desc: `<b>Tuerca Reforzada para Conexiones Flare</b><br><br>Tuerca de bronce macizo forjado y reforzado. Asegura un sellado impecable y duradero en conexiones abocinadas (flare).`,
        costoCompra: 0.86153846,
        images: ["productos/TUR001---007.webp"],
        specs: { "Material": "Bronce", "Tipo": "Reforzada", "Uso": "Sistemas Flare" },
        variants: [
            { id: "TUR001", name: "Medida: 1/4", costoCompra: 0.33076923 },
            { id: "TUR007", name: "Medida: 5/16", costoCompra: 0.36153846 },
            { id: "TUR002", name: "Medida: 3/8", costoCompra: 0.56923077 },
            { id: "TUR003", name: "Medida: 1/2", costoCompra: 0.86153846 },
            { id: "TUR004", name: "Medida: 5/8", costoCompra: 1.05384615 },
            { id: "TUR006", name: "Medida: 3/4", costoCompra: 1.05384615 },
            { id: "TUR005", name: "Medida: 7/8", costoCompra: 1.63076923 }
        ]
    },
    {
        id: "MCP003",
        name: "Medidor de Tubo Capilar Maxwell",
        category: "Herramientas",
        model: "Regla Medidora",
        desc: `<b>Medidor Capilar Maxwell</b><br><br>Plantilla de medición de precisión para tubos capilares. Incluye aguja limpiadora. Una herramienta obligatoria para garantizar la expansión correcta del gas.`,
        costoCompra: 9.66153846,
        images: ["productos/MCP003.webp"],
        specs: { "Marca": "Maxwell", "Herramienta": "Medidor de Capilar", "Incluye": "Aguja Limpiadora" }
    },
    {
        id: "ROL-VARIANTE",
        name: "Rolineras y Rodamientos (Varias Medidas)",
        category: "Motores",
        model: "Varias Medidas",
        desc: `<b>Rodamientos y Rolineras para Motores</b><br><br>Rolineras de alta calidad con sello de goma (RS/2RS) o metálico (ZZ), garantizando un rodamiento suave, silencioso y resistente al polvo. Seleccione el modelo específico.`,
        costoCompra: 0.86153846, // Costo base visual
        images: ["productos/ROL001---502.webp"],
        specs: { "Componente": "Rodamiento", "Aplicación": "Motores Eléctricos y Lavadoras" },
        variants: [
            // Series 6000
            { id: "ROL006", name: "Modelo: 6000 2RS", costoCompra: 0.66153846 },
            { id: "ROL012", name: "Modelo: 6001 2RS", costoCompra: 0.93076923 },
            { id: "ROL205", name: "Modelo: 6002 2RS S/Naranja Industrial", costoCompra: 0.96923077 },
            { id: "ROL206", name: "Modelo: 6003 RS Asia", costoCompra: 0.99230769 },
            // Series 6200
            { id: "ROL007", name: "Modelo: 6200 2RS", costoCompra: 0.79230769 },
            { id: "ROL024", name: "Modelo: 6200 ZZ Metal", costoCompra: 0.66153846 },
            { id: "ROL010", name: "Modelo: 62000 2RS Isyn", costoCompra: 0.72307692 },
            { id: "ROL002", name: "Modelo: 6201 2RS", costoCompra: 0.86153846 },
            { id: "ROL003", name: "Modelo: 6201 x 1/2", costoCompra: 0.80000000 },
            { id: "ROL200", name: "Modelo: 6201 ZZ Metal", costoCompra: 0.71538462 },
            { id: "ROL201", name: "Modelo: 6201 NSK", costoCompra: 0.99230769 },
            { id: "ROL008", name: "Modelo: 6202 1/2", costoCompra: 0.66923077 },
            { id: "ROL004", name: "Modelo: 6202 2RS S/Naranja Industrial", costoCompra: 1.02307692 },
            { id: "ROL202", name: "Modelo: 6202 NSK Alta Calidad", costoCompra: 1.31538462 },
            { id: "ROL204", name: "Modelo: 6202 5/8 RS Asia", costoCompra: 0.99230769 },
            { id: "ROL005", name: "Modelo: 6203 2RS", costoCompra: 0.99230769 },
            { id: "ROL203", name: "Modelo: 6203 5/8 2RS", costoCompra: 1.05384615 },
            { id: "ROL014", name: "Modelo: 6204 2RS", costoCompra: 1.32307692 },
            { id: "ROL013", name: "Modelo: 6205 2RS Alta Calidad", costoCompra: 1.32307692 },
            { id: "ROL500", name: "Modelo: 6205 - 1\" 2RS Lavadora Mabe C3", costoCompra: 1.14058355 },
            { id: "ROL501", name: "Modelo: 6205 Con Ratchet 134 (Frigidaire)", costoCompra: 5.96153846 },
            { id: "ROL021", name: "Modelo: 626 2RS Maxwell", costoCompra: 0.53076923 },
            { id: "ROL009", name: "Modelo: 627 2RS", costoCompra: 0.66153846 },
            // Otras Medidas
            { id: "ROL011", name: "Modelo: 6303 2RS", costoCompra: 1.16153846 },
            { id: "ROL022", name: "Modelo: 607 2RS Asia", costoCompra: 0.54615385 },
            { id: "ROL001", name: "Modelo: 608 2RS S/Naranja Industrial", costoCompra: 0.60769231 },
            { id: "ROL020", name: "Modelo: 608 2RS S/Azul Alta Calidad", costoCompra: 0.33076923 },
            { id: "ROL100", name: "Modelo: 608 ZZ Sello Metálico", costoCompra: 0.46153846 },
            { id: "ROL023", name: "Modelo: 6900 2RS Asia", costoCompra: 0.56153846 },
            { id: "ROL502", name: "Modelo: Axial Mabe/G.E Híbrida 7410469", costoCompra: 3.31538462 }
        ]
    },
    {
        id: "ACT037",
        name: "Aceite Sintético EmkarOil (RBV) POE 32H de 1Lts",
        category: "Químicos",
        model: "RL32H",
        desc: `<b>Aceite Sintético EmkarOil (RBV) POE 32H de 1Lts</b><br><br>Lubricante sintético premium EmkarOil (RBV) POE 32H. Formulado específicamente para un rendimiento óptimo en sistemas de refrigeración modernos.`,
        costoCompra: 9.94694960,
        images: ["productos/ACT037.webp"],
        specs: { "Marca": "RBV", "Tipo": "Sintético POE", "Presentación": "1 Litro" }
    },
    {
        id: "ACT030",
        name: "Aceite Sintético POE 68H de 1Lts para R410/R134",
        category: "Químicos",
        model: "POE 68H",
        desc: `<b>Aceite Sintético POE 68H 1 Litro</b><br><br>Aceite lubricante sintético de alta calidad para compresores de refrigeración. Especialmente formulado para trabajar con gases refrigerantes R410 y R134.`,
        costoCompra: 9.93846154,
        images: ["productos/ACT030.webp"],
        specs: { "Tipo": "Sintético POE", "Viscosidad": "68H", "Presentación": "1 Litro" }
    },
    {
        id: "ACT032",
        name: "Aceite Sintético POE 32H de 1Lts para R410/R134",
        category: "Químicos",
        model: "POE 32H",
        desc: `<b>Aceite Sintético POE 32H 1 Litro</b><br><br>Aceite lubricante sintético de alto rendimiento formulado para compresores que operan con gases refrigerantes R410 y R134.`,
        costoCompra: 8.61538462,
        images: ["productos/ACT032.webp"],
        specs: { "Tipo": "Sintético POE", "Viscosidad": "32H", "Presentación": "1 Litro" }
    },
    {
        id: "ACT011",
        name: "Aceite 68 Mineral de 1Lts 4GS Landsfoss",
        category: "Químicos",
        model: "4GS 68 Mineral",
        desc: `<b>Aceite 68 Mineral 1 Litro 4GS Landsfoss</b><br><br>Aceite mineral 4GS de grado premium marca Landsfoss. Ideal para sistemas de aire acondicionado y refrigeración comercial.`,
        costoCompra: 4.36153846,
        images: ["productos/ACT011.webp"],
        specs: { "Marca": "Landsfoss", "Tipo": "Mineral", "Presentación": "1 Litro" }
    },
    {
        id: "ACT403",
        name: "Aceite Sintético RL 68H Emkarate de Lata",
        category: "Químicos",
        model: "POE 68H",
        desc: `<b>Aceite Sintético Emkarate RL 68H de Lata (1Lts)</b><br><br>Aceite sintético original Emkarate RL 68H en presentación de lata de 1 Litro. Máxima protección y lubricación para compresores.`,
        costoCompra: 35.75384615,
        images: ["productos/ACT403.webp"],
        specs: { "Marca": "Emkarate", "Tipo": "Sintético POE", "Presentación": "Lata de 1 Litro" }
    },
    {
        id: "ACT036",
        name: "Aceite Sintético RL 32H Emkarate de Lata",
        category: "Químicos",
        model: "RL32H",
        desc: `<b>Aceite Sintético Emkarate RL 32H de Lata (1Lts)</b><br><br>Lubricante sintético premium Emkarate RL32. Formulado específicamente para un rendimiento óptimo en sistemas de refrigeración modernos.`,
        costoCompra: 35.75384615,
        images: ["productos/ACT036.webp"],
        specs: { "Marca": "Emkarate", "Tipo": "Sintético POE", "Presentación": "Lata de 1 Litro" }
    },
    {
        id: "ACT043",
        name: "Aceite Para Bomba de Vacío de 1Lts Maslex",
        category: "Químicos",
        model: "Bomba de Vacío 1L",
        desc: `<b>Aceite Para Bomba de Vacío 1 Litro Maslex</b><br><br>Aceite especializado de alta pureza para bombas de vacío. Garantiza la máxima eficiencia y prolonga la vida útil de su equipo.`,
        costoCompra: 6.43846154,
        images: ["productos/ACT043.webp"],
        specs: { "Marca": "Maslex", "Tipo": "Aceite para Bomba", "Presentación": "1 Litro" }
    },
    {
        id: "ACT040",
        name: "Aceite Para Bomba de Vacío de 8 Oz Landsfoss",
        category: "Químicos",
        model: "Bomba de Vacío 8Oz",
        desc: `<b>Aceite Para Bomba de Vacío 8 Onzas Landsfoss</b><br><br>Aceite premium para mantenimiento y óptimo funcionamiento de bombas de vacío. Presentación práctica de 8 onzas.`,
        costoCompra: 2.64615385,
        images: ["productos/ACT040.webp"],
        specs: { "Marca": "Landsfoss", "Tipo": "Aceite para Bomba", "Presentación": "8 Onzas" }
    },
    {
        id: "ACT045",
        name: "Aceite POE 32 de 1Lts 100% Puro Maslex",
        category: "Químicos",
        model: "POE-32",
        desc: `<b>Aceite POE 32 1 Litro 100% Puro Maslex</b><br><br>Aceite sintético POE-32 de máxima pureza. Excelente estabilidad térmica para sistemas de refrigeración y aires acondicionados.`,
        costoCompra: 25.20769231,
        images: ["productos/ACT045.webp"],
        specs: { "Marca": "Maslex", "Tipo": "Sintético POE", "Presentación": "1 Litro" }
    },
    {
        id: "ACT044",
        name: "Aceite POE 68 de 1Lts 100% Puro Maslex",
        category: "Químicos",
        model: "POE-68",
        desc: `<b>Aceite POE 68 1 Litro 100% Puro Maslex</b><br><br>Aceite sintético POE-68 100% puro. Proporciona una lubricación superior y mayor vida útil para los compresores.`,
        costoCompra: 26.52307692,
        images: ["productos/ACT044.webp"],
        specs: { "Marca": "Maslex", "Tipo": "Sintético POE", "Presentación": "1 Litro" }
    },
    {
        id: "ACT025",
        name: "Aceite Éster Sintético Para Sistemas R134",
        category: "Automotriz",
        model: "Éster Sintético",
        desc: `<b>Aceite Éster Sintético Para Sistemas R134</b><br><br>Lubricante éster sintético universal formulado para sistemas de aire acondicionado y refrigeración que utilizan gas R134.`,
        costoCompra: 5.40000000,
        images: ["productos/ACT025.webp"],
        specs: { "Tipo": "Éster Sintético", "Compatibilidad": "R134", "Presentación": "1 Litro" }
    },
    {
        id: "ACT035",
        name: "Aceite 32 Mineral Capell-Oil TX-ISO-32",
        category: "Químicos",
        model: "TX-ISO-32",
        desc: `<b>Aceite 32 Mineral Capell-Oil TX-ISO-32</b><br><br>Aceite lubricante mineral grado ISO 32 marca Capell-Oil. Formulado para compresores de refrigeración.`,
        costoCompra: 8.61538462,
        images: ["productos/ACT035.webp"],
        specs: { "Marca": "Capell-Oil", "Tipo": "Mineral", "Grado": "ISO 32" }
    },
    {
        id: "ACT016",
        name: "Aceite para Compresor de Nevera R134 de 8 Oz",
        category: "Químicos",
        model: "R134 8 Oz",
        desc: `<b>Aceite Compresor Nevera R134 8 Onzas</b><br><br>Aceite lubricante de alta calidad envasado específicamente para compresores de neveras que emplean gas R134.`,
        costoCompra: 2.50000000,
        images: ["productos/ACT016.webp"],
        specs: { "Uso": "Compresores de Nevera", "Compatibilidad": "R134", "Presentación": "8 Onzas" }
    },
    {
        id: "ACT005",
        name: "Aceite PAG 46 c/UV R134 Johnsen's Org.",
        category: "Automotriz",
        model: "PAG 46 UV",
        desc: `<b>Aceite PAG 46 c/UV R134 Johnsen's Original</b><br><br>Aceite sintético PAG 46 formulado con tinte UV para una rápida detección de fugas en sistemas automotrices R134a.`,
        costoCompra: 5.83076923,
        images: ["productos/ACT005.webp"],
        specs: { "Marca": "Johnsen's", "Tipo": "PAG 46 con UV", "Uso": "Automotriz" }
    },
    {
        id: "ACT004",
        name: "Aceite PAG 100 c/UV R134 Johnsen's Org.",
        category: "Automotriz",
        model: "PAG 100 UV",
        desc: `<b>Aceite PAG 100 c/UV R134 Johnsen's Original</b><br><br>Aceite sintético PAG 100 de alta viscosidad con tinte UV rastreador para sistemas de aire acondicionado automotriz R134a.`,
        costoCompra: 5.83846154,
        images: ["productos/ACT004.webp"],
        specs: { "Marca": "Johnsen's", "Tipo": "PAG 100 con UV", "Uso": "Automotriz" }
    },
    {
        id: "ACT003",
        name: "Aceite PAG 150 c/UV R134 Johnsen's Org.",
        category: "Automotriz",
        model: "PAG 150 UV",
        desc: `<b>Aceite PAG 150 c/UV R134 Johnsen's Original</b><br><br>Aceite sintético PAG 150 de máxima viscosidad, con detector de fugas UV, diseñado para compresores automotrices pesados R134a.`,
        costoCompra: 5.66153846,
        images: ["productos/ACT003.webp"],
        specs: { "Marca": "Johnsen's", "Tipo": "PAG 150 con UV", "Uso": "Automotriz" }
    },
    {
        id: "QMC018",
        name: "Limpiador Alcalino Albrite 880ML",
        category: "Químicos",
        model: "880 ML",
        desc: `<b>Limpiador Alcalino Albrite 880ML</b><br><br>Limpiador desincrustante alcalino de alta eficiencia para serpentines y paneles de aluminio.`,
        costoCompra: 1.65384615,
        images: ["productos/QMC018.webp"],
        specs: { "Tipo": "Limpiador Alcalino", "Presentación": "880 ML", "Uso": "Mantenimiento" }
    },
    {
        id: "QMC008",
        name: "Ácido Evar22 Limpiador de 1Lts",
        category: "Químicos",
        model: "1 Litro",
        desc: `<b>Ácido Evar 22 Limpiador 1 Litro</b><br><br>Fórmula ácida concentrada para la limpieza profunda y remoción de óxido en sistemas de refrigeración.`,
        costoCompra: 4.63846154,
        images: ["productos/QMC008.webp"],
        specs: { "Marca": "Evar 22", "Tipo": "Ácido Limpiador", "Presentación": "1 Litro" }
    },
    {
        id: "QMC023",
        name: "Ácido Evar22 Limpiador Mediano de 480ML",
        category: "Químicos",
        model: "480 ML",
        desc: `<b>Ácido Evar 22 Limpiador Mediano 480ML</b><br><br>Limpiador ácido concentrado en presentación mediana, ideal para mantenimientos rápidos de equipos de refrigeración.`,
        costoCompra: 2.45384615,
        images: ["productos/QMC023.webp"],
        specs: { "Marca": "Evar 22", "Tipo": "Ácido Limpiador", "Presentación": "480 ML" }
    },
    {
        id: "QMC021",
        name: "Limpiador Alcalino de Aluminio Alcalin de 1Lts",
        category: "Químicos",
        model: "1 Litro",
        desc: `<b>Limpiador Alcalino de Aluminio Alcalin 1L</b><br><br>Solución alcalina formulada para abrillantar y limpiar paneles de aluminio sin dañar el metal.`,
        costoCompra: 1.38461538,
        images: ["productos/QMC021.webp"],
        specs: { "Marca": "RQ5", "Tipo": "Limpiador Alcalino", "Presentación": "1 Litro" }
    },
    {
        id: "QMC002",
        name: "Limpiador Ácido de Aluminio Hidroflush de 1Lts",
        category: "Químicos",
        model: "1 Litro",
        desc: `<b>Limpiador Ácido de Aluminio Hidroflush 1L</b><br><br>Limpiador ácido de acción rápida para eliminar incrustaciones severas en sistemas de aire acondicionado.`,
        costoCompra: 1.86923077,
        images: ["productos/QMC002.webp"],
        specs: { "Marca": "RQ5", "Tipo": "Ácido Limpiador", "Presentación": "1 Litro" }
    },
    {
        id: "QMC027",
        name: "Desplazador de Humedad Metil de 1Lts",
        category: "Químicos",
        model: "1 Litro",
        desc: `<b>Desplazador de Humedad Metil 1 Litro</b><br><br>Líquido químico diseñado para eliminar los rastros de humedad dentro del sistema de refrigeración y prevenir congelamientos.`,
        costoCompra: 1.86923077,
        images: ["productos/QMC027.webp"],
        specs: { "Marca": "RQ5", "Función": "Desplazador de Humedad", "Presentación": "1 Litro" }
    },
    {
        id: "QMC025",
        name: "Dieléctrico Desengrasante RQ5 de 1Lts",
        category: "Químicos",
        model: "1 Litro",
        desc: `<b>Dieléctrico Desengrasante RQ5 1 Litro</b><br><br>Solvente dieléctrico de alta pureza para la limpieza segura de tableros, tarjetas y componentes eléctricos.`,
        costoCompra: 2.37692308,
        images: ["productos/QMC025.webp"],
        specs: { "Marca": "RQ5", "Tipo": "Solvente Dieléctrico", "Presentación": "1 Litro" }
    },
    {
        id: "QMC026",
        name: "Dieléctrico Desengrasante RQ5 de 500ML",
        category: "Químicos",
        model: "1/2 Litro",
        desc: `<b>Dieléctrico Desengrasante RQ5 1/2 Litro</b><br><br>Solvente dieléctrico desengrasante en presentación práctica de medio litro para limpiezas de precisión.`,
        costoCompra: 1.43846154,
        images: ["productos/QMC026.webp"],
        specs: { "Marca": "RQ5", "Tipo": "Solvente Dieléctrico", "Presentación": "1/2 Litro" }
    },
    {
        id: "QMC022",
        name: "Dieléctrico Desengrasante de Lata RBV de 5KG",
        category: "Químicos",
        model: "5 Kilos",
        desc: `<b>Dieléctrico Desengrasante Lata RBV 5KG</b><br><br>Solvente dieléctrico en presentación industrial de 5 kilos, ideal para limpiezas a gran escala y talleres de mantenimiento.`,
        costoCompra: 21.06153846,
        images: ["productos/QMC022.webp"],
        specs: { "Tipo": "Solvente Dieléctrico", "Presentación": "Lata 5 KG", "Uso": "Industrial" }
    },
    {
        id: "QMC013-RBV",
        name: "Limpiador Dieléctrico RVB de Lata de 500Gr",
        category: "Químicos",
        model: "1/2 Litro",
        desc: `<b>Limpiador Dielectrico RVB de Lata de 1/2kg</b><br><br>Solvente para la limpieza de componentes eléctricos sin riesgo de cortocircuitos. Presentación de 500ml.`,
        costoCompra: 1.65384615,
        images: ["productos/QMC013-RBV.webp"],
        specs: { "Marca": "RBV Compresors Oil", "Presentación": "Lata de 1/2L", "Uso": "Solvente Dieléctrico" }
    },
    {
        id: "QMC006-RBV",
        name: "Limpiador Dielectrico RBV de Lata de 1kg",
        category: "Químicos",
        model: "1 Kilo",
        desc: `<b>Limpiador Dielectrico RBV de 1kg<br>Fórmula dieléctrica de máxima pureza y rápida evaporación. Presentación en lata de 1 Kilo para uso profesional.`,
        costoCompra: 4.63846154,
        images: ["productos/QMC006-RBV.webp"],
        specs: { "Marca": "RBV Compresors Oil", "Presentación": "Lata 1 Kilo", "Uso": "Dieléctrico Premium" }
    },
    {
        id: "QMC019",
        name: "Limpiador Químico AirClean Ultra de 1Lts",
        category: "Químicos",
        model: "1 Litro",
        desc: `<b>Limpiador Químico Multiuso Ultra Clean 1L</b><br><br>Limpiador multipropósito formulado para aflojar y remover suciedad pesada en componentes de refrigeración.`,
        costoCompra: 1.32307692,
        images: ["productos/QMC019.webp"],
        specs: { "Tipo": "Limpiador Multiuso", "Presentación": "1 Litro", "Aplicación": "General" }
    },
    {
        id: "QMC007",
        name: "Panel Cool 66 (Alcohol Metilico) de 500ml",
        category: "Químicos",
        model: "0.5 Litros",
        desc: `<b>Alcohol Metílico 0.5 Litros</b><br><br>Alcohol metílico de alta pureza diseñado para absorber la humedad residual en tuberías y prevenir congelamiento.`,
        costoCompra: 1.32307692,
        images: ["productos/QMC007.webp"],
        specs: { "Función": "Absorbedor de Humedad", "Presentación": "0.5 Litros", "Uso": "Interno" }
    },
    {
        id: "QMC024",
        name: "Panel Clean 66 Limpiador de Galón de 3.75Lts",
        category: "Químicos",
        model: "1 Galón (3.75L)",
        desc: `<b>Limpiador Panel Clean 66 Galón 3.750LTS</b><br><br>Limpiador profundo de aluminio para serpentines en presentación industrial de 1 Galón. Alto rendimiento.`,
        costoCompra: 5.30000000,
        images: ["productos/QMC024.webp"],
        specs: { "Marca": "Productos 66", "Presentación": "1 Galón (3.75L)", "Uso": "Limpiador de Aluminio" }
    },
    {
        id: "QMC011",
        name: "Ácido Limpiador Evar22 Galón 3.78Lts",
        category: "Químicos",
        model: "1 Galón (3.78L)",
        desc: `<b>Ácido Evar 22 Limpiador Galón 3.78 LTS</b><br><br>Ácido limpiador concentrado en tamaño industrial de 1 galón. Máxima potencia para limpiezas mayores.`,
        costoCompra: 16.36153846,
        images: ["productos/QMC011.webp"],
        specs: { "Marca": "Evar 22", "Tipo": "Ácido Limpiador", "Presentación": "1 Galón (3.78L)" }
    },

    {
        id: "PUN-MEDIDA",
        name: "Evaporador de Placa para Nevera con Capilar",
        category: "Refrigeración",
        model: "Varias Medidas",
        desc: `<b>Evaporador de Placa para Nevera con Capilar</b><br><br>Evaporador de aluminio tipo placa de alta eficiencia térmica. Incluye tubo capilar soldado. Excelente para reemplazos de sistemas congeladores. Por favor, seleccione la medida que necesita.`,
        costoCompra: 14.59230769, // Costo base para la visualización inicial (equivale a Bs 20.904,94)
        images: ["productos/PUN104-105-106-107-108.webp"],
        specs: { "Tipo": "Placa", "Incluye": "Capilar", "Material": "Aluminio" },
        // VARIANTES DE MEDIDAS
        variants: [
            { id: "PUN104", name: "Medida: 80x40cm", costoCompra: 14.59230769 },
            { id: "PUN107", name: "Medida: 84x45cm", costoCompra: 19.89230769 },
            { id: "PUN108", name: "Medida: 94x45cm", costoCompra: 23.20769231 },
            { id: "PUN105", name: "Medida: 105x45cm", costoCompra: 26.52307692 },
            { id: "PUN106", name: "Medida: 150x50cm", costoCompra: 29.84615385 }
        ]
    },
    {
        id: "NEV100",
        name: "Nevera Hotpoint de 2 Puertas Importada",
        category: "Neveras / Cavas",
        model: "Hotpoint",
        desc: `<b>Nevera Kenmore 2 Puertas Importada</b><br><br>Refrigerador de alta capacidad, diseño clásico de 2 puertas. Componentes de calidad garantizada para máxima durabilidad.`,
        costoCompra: 437.66923077,
        images: ["productos/NEV100.webp"],
        specs: { "Marca": "HotPonit", "Tipo": "2 Puertas", "Categoría": "Importada" }
    },
    {
        id: "NEV104",
        name: "Nevera GE de 2 Puertas Importada",
        category: "Neveras / Cavas",
        model: "General Electric",
        desc: `<b>Nevera GE de 2 Puertas Importada</b><br><br>Nevera refrigeradora de la marca General Electric. Diseño compacto y eficiente, ideal para espacios modernos.`,
        costoCompra: 497.34615385,
        images: ["productos/NEV104.webp"],
        specs: { "Marca": "General Electric", "Categoría": "Importada" }
    },
    {
        id: "NEV107",
        name: "Nevera GE Side by Side Vertical de 2 Puertas",
        category: "Neveras / Cavas",
        model: "General Electric",
        desc: `<b>Nevera Hotpoint GE 20.5 Pies Cúbicos Blanca</b><br><br>Nevera General Electric Hotpoint de gran capacidad (20.5 pies cúbicos), diseño de 2 puertas. Sistema de enfriamiento superior.`,
        costoCompra: 464.19230769,
        images: ["productos/NEV107.webp"],
        specs: { "Marca": "General Electric", "Capacidad": "760 Litros", "Color": "Blanca" }
    },
    {
        id: "RES008",
        name: "Resistencia de Nevera Samsung DA47-00038B",
        category: "Neveras / Cavas",
        model: "DA47-00038B",
        desc: `<b>Resistencia Nevera Samsung DA47-00038B</b><br><br>Resistencia de descongelación original para neveras Samsung. Componente esencial para el sistema No Frost.`,
        costoCompra: 32.92307692,
        images: ["productos/RES008.webp"],
        specs: { "Marca": "Samsung", "Repuesto": "Resistencia de Deshielo", "Modelo": "DA47-00038B" }
    },
    {
        id: "RES047",
        name: "Resistencia de Nevera Samsung DA81-01691B",
        category: "Neveras / Cavas",
        model: "DA81-01691B",
        desc: `<b>Resistencia H. Nevera Samsung DA81-01691B</b><br><br>Resistencia calefactora tipo H para sistemas de refrigeración Samsung. Reemplazo directo y garantizado.`,
        costoCompra: 21.93846154,
        images: ["productos/RES047.webp"],
        specs: { "Marca": "Samsung", "Tipo": "Forma en H", "Modelo": "DA81-01691B" }
    },
    {
        id: "RES044",
        name: "Resistencia de Nevera Samsung DA81-01691A",
        category: "Neveras / Cavas",
        model: "DA81-01691A",
        desc: `<b>Resistencia H. Nevera Samsung DA81-01691A</b><br><br>Resistencia calefactora tipo H para sistemas de refrigeración Samsung. Reemplazo directo y garantizado.`,
        costoCompra: 10.96923077,
        images: ["productos/RES044.webp"],
        specs: { "Marca": "Samsung", "Tipo": "Forma en H", "Modelo": "DA81-01691A" }
    },
    {
        id: "RES045",
        name: "Resistencia Nevera Samsung G001A081SMB",
        category: "Neveras / Cavas",
        model: "G001A081SMB",
        desc: `<b>Resistencia H. Nevera Samsung G001A081SMB</b><br><br>Resistencia calefactora tipo H para sistemas de refrigeración Samsung. Reemplazo directo y garantizado.`,
        costoCompra: 13.72307692,
        images: ["productos/RES045.webp"],
        specs: { "Marca": "Samsung", "Tipo": "Forma en H", "Modelo": "G001A081SMB" }
    },
    {
        id: "CNV300",
        name: "Condensador Tipo Parrilla de 3 Vueltas Para Cava 1/3",
        category: "Refrigeración",
        model: "1/3 HP",
        desc: `<b>Condensador Tipo Parrilla de 3 Vueltas Para Cava 1/3</b><br><br>Parrilla condensadora estática de alta transferencia de calor diseñada para unidades de 1/3 HP. Ideal para cavas y exhibidores.`,
        costoCompra: 10.25384615,
        images: ["productos/CNV300.webp"],
        specs: { "Tipo": "Parrilla Estática", "Capacidad": "1/3 HP", "Uso": "Cavas" }
    },
    {
        id: "CNV301",
        name: "Condensador Tipo Parrilla de 2 Vueltas Para Cava 1/5",
        category: "Refrigeración",
        model: "1/3 HP",
        desc: `<b>Condensador Tipo Parrilla de 2 Vueltas Para Cava 1/5</b><br><br>Parrilla condensadora estática de alta transferencia de calor diseñada para unidades de 1/5 HP. Ideal para cavas y exhibidores.`,
        costoCompra: 7.3692307692,
        images: ["productos/CNV300.webp"],
        specs: { "Tipo": "Parrilla Estática", "Capacidad": "1/5 HP", "Uso": "Cavas" }
    },
    {
        id: "TIM500", name: "Reloj de Descongelación Mecánico Paragon 220V", category: "Neveras / Cavas", model: "8145-00",
        desc: `<b>Reloj de Descongelación Mecánico Paragon 8145-00 (Serie 8000)</b><br><br>Temporizador electromecánico para refrigeración comercial e industrial.`,
        costoCompra: 79.6, images: ["productos/RELOJ-PARAGON.webp"],
        specs: { "Marca": "Paragon", "Voltaje": "220v - 60Hz", "Tipo": "Mecánico" }
    },
    {
        id: "TIM400", name: "Reloj de Descongelación Mecánico Paragon 110V", category: "Neveras / Cavas", model: "D8145-00EX",
        desc: `<b>Reloj de Descongelación Mecánico Paragon (Serie 8000)</b><br><br>Temporizador electromecánico para refrigeración comercial e industrial.`,
        costoCompra: 66.319, images: ["productos/RELOJ-PARAGON.webp"],
        specs: { "Marca": "Paragon", "Voltaje": "110v - 60Hz", "Tipo": "Mecánico" }
    },
    {
        id: "CLC002", name: "Cuchilla Oster de 4 Aspas con Anillo de Goma", category: "Licuadoras", model: "BLSTAA4961",
        desc: `<b>Cuchilla Picahielo Oster con Anillo de Goma</b><br><br>Repuesto original Oster de cuchilla trituradora de hielo de 4 aspas con anillo de goma incluido.`,
        costoCompra: 2.73, images: ["productos/CUCHILLA_4_ASPAS_OSTER.webp"],
        specs: { "Material": "Acero Inoxidable", "Aspas": "4", "Compatibilidad": "Rosca Estándar" }
    },
    {
        id: "CLC003", name: "Cuchilla Oster de 6 Aspas con Anillo de Goma", category: "Licuadoras", model: "BLSTAA4961-000",
        desc: `<b>Cuchilla Oster de 6 Aspas Procesadora</b><br><br>Repuesto de alto rendimiento con diseño de 6 aspas en múltiples niveles para un procesado rápido.`,
        costoCompra: 3.1, images: ["productos/CUCHILLA_6_ASPAS_OSTER.webp"],
        specs: { "Material": "Acero Inoxidable", "Aspas": "6", "Compatibilidad": "Rosca Estándar" }
    },
    {
        id: "PDV020", name: "Protector de Voltaje 120V Enchufable Exceline para Nevera", category: "Protectores", model: "GSM-N120",
        desc: `<b>Protector de Voltaje 120V Enchufable Exceline para Nevera (GSM-N120)</b><br><br>Protección integral para refrigeradores, neveras y congeladores.`,
        costoCompra: 6.9, images: ["productos/PDV020.webp"],
        specs: { "Voltaje": "120V", "Tipo": "Enchufable", "Uso": "Neveras" }
    },
    {
        id: "PDV023", name: "Protector de Voltaje Enchufable Exceline para Aires Acondicionados 120V", category: "Protectores", model: "GSM-RE120",
        desc: `<b>Protector de Voltaje Enchufable Exceline para Aires Acondicionados 120V</b><br><br>Diseñado específicamente para acondicionadores de aire de ventana o split de 120V.`,
        costoCompra: 12.23, images: ["productos/PDV023.webp"],
        specs: { "Voltaje": "120V", "Tipo": "Enchufable", "Uso": "Aires Acondicionados" }
    },
    {
        id: "PDV021", name: "Protector de Voltaje Enchufable Exceline para Aires Acondicionados 220V", category: "Protectores", model: "GSM-RE220",
        desc: `<b>Protector de Voltaje Enchufable Exceline para Aires Acondicionados 220V</b><br><br>Protección especializada para equipos de aire acondicionado con alimentación a 220V.`,
        costoCompra: 12.71, images: ["productos/PDV021.webp"],
        specs: { "Voltaje": "220V", "Tipo": "Enchufable", "Uso": "Aires Acondicionados" }
    },
    {
        id: "PDV022", name: "Protector de Voltaje Enchufable Exceline para Aires 220V Tipo Chino", category: "Protectores", model: "GSM-RE220CS",
        desc: `<b>Protector de Voltaje Enchufable Exceline 220V Tipo Chino</b><br><br>Diseñado para equipos de aire acondicionado de 220V con enchufe tipo chino.`,
        costoCompra: 12.23, images: ["productos/PDV022.webp"],
        specs: { "Voltaje": "220V", "Tipo": "Enchufable Tipo Chino", "Uso": "Aires Acondicionados" }
    },
    {
        id: "PDV031", name: "Protector de Voltaje Exceline Cable a Cable 120V Alta Carga", category: "Protectores", model: "GSM-R120B",
        desc: `<b>Protector de Voltaje Exceline Cable a Cable 120V Alta Carga</b><br><br>Protector industrial/comercial para conexión directa por bornera para cargas pesadas en 120V.`,
        costoCompra: 12.40, images: ["productos/PDV031.webp"],
        specs: { "Voltaje": "120V", "Tipo": "Cable a Cable", "Uso": "Alta Carga" }
    },
    {
        id: "PDV030", name: "Protector de Voltaje Exceline Cable a Cable 220V Alta Carga", category: "Protectores", model: "GSM-R220B",
        desc: `<b>Protector de Voltaje Exceline Cable a Cable 220V Alta Carga</b><br><br>Protector de alta capacidad para aires acondicionados de gran tonelaje y sistemas de refrigeración de 220V.`,
        costoCompra: 12.40, images: ["productos/PDV030.webp"],
        specs: { "Voltaje": "220V", "Tipo": "Cable a Cable", "Uso": "Alta Carga" }
    },
    {
        id: "PDV029", name: "Protector de Voltaje Exceline para Compresores Monofásicos 120V", category: "Protectores", model: "GSM-RF120",
        desc: `<b>Protector de Voltaje Exceline para Compresores Monofásicos 120V</b><br><br>Dispositivo especializado en proteger motocompresores de refrigeración monofásicos de 120V.`,
        costoCompra: 10.73, images: ["productos/PDV029.webp"],
        specs: { "Voltaje": "120V", "Tipo": "Bornera", "Uso": "Compresores Monofásicos" }
    },
    {
        id: "PDV051", name: "Protector de Voltaje Exceline para Motores Monofásicos 120V", category: "Protectores", model: "GSM-M120B",
        desc: `<b>Protector de Voltaje Exceline para Motores Monofásicos 120V</b><br><br>Módulo de protección para motores eléctricos monofásicos industriales y comerciales en 120V.`,
        costoCompra: 12.40, images: ["productos/PDV051.webp"],
        specs: { "Voltaje": "120V", "Tipo": "Bornera", "Uso": "Motores Monofásicos" }
    },
    {
        id: "FIL001", name: "Filtro de 1 Salida Soldable", category: "Refrigeración", model: "",
        desc: `<b>Filtro Secador de 1 Salida Soldable</b><br><br>Filtro deshidratador de cobre para sistemas de refrigeración comercial y doméstica.`,
        costoCompra: 0.61, images: ["productos/FIL001.webp"],
        specs: { "Tipo": "Soldable", "Salidas": "1" }
    },
    {
        id: "FIL002", name: "Filtro de 2 Salidas Soldable", category: "Refrigeración", model: "",
        desc: `<b>Filtro Secador de 2 Salidas Soldable</b><br><br>Filtro deshidratador de cobre de 2 salidas para aplicaciones de refrigeración con tubos capilares o derivaciones.`,
        costoCompra: 0.67, images: ["productos/FIL002.webp"],
        specs: { "Tipo": "Soldable", "Salidas": "2" }
    },
    {
        id: "FIL003", name: "Filtro de 3 Salidas Soldable", category: "Refrigeración", model: "",
        desc: `<b>Filtro Secador de 3 Salidas Soldable</b><br><br>Filtro deshidratador de cobre diseñado para circuitos que requieren 3 conexiones o salidas para capilares.`,
        costoCompra: 0.68, images: ["productos/FIL003.webp"],
        specs: { "Tipo": "Soldable", "Salidas": "3" }
    },
    {
        id: "FIL004", name: "Filtro de 4 Salidas Soldable", category: "Refrigeración", model: "",
        desc: `<b>Filtro Secador de 4 Salidas Soldable</b><br><br>Filtro de cobre de 4 salidas especializado para equipos de refrigeración con múltiples circuitos de expansión.`,
        costoCompra: 0.73, images: ["productos/FIL004.webp"],
        specs: { "Tipo": "Soldable", "Salidas": "4" }
    },
    {
        id: "FIL005", name: "Filtro de 5 Salidas Soldable", category: "Refrigeración", model: "",
        desc: `<b>Filtro Secador de 5 Salidas Soldable</b><br><br>Filtro deshidratador de cobre con 5 salidas para instalaciones avanzadas de refrigeración.`,
        costoCompra: 0.78, images: ["productos/FIL005.webp"],
        specs: { "Tipo": "Soldable", "Salidas": "5" }
    },
    {
        id: "FIL011", name: "Filtro de 6 Salidas Soldable", category: "Refrigeración", model: "",
        desc: `<b>Filtro Secador de 6 Salidas Soldable</b><br><br>Filtro de cobre de 6 salidas para la máxima distribución de refrigerante en sistemas frigoríficos pesados.`,
        costoCompra: 0.84, images: ["productos/FIL011.webp"],
        specs: { "Tipo": "Soldable", "Salidas": "6" }
    },
    {
        id: "LVT113", name: "Lavadora Doble Tina de 7kg AKARI", category: "Lavadoras", model: "AKARI 7KG",
        desc: `<b>Lavadora Doble Tina de 7kg AKARI</b><br><br>Semiautomática de doble tina para lavado y centrifugado eficiente, ideal para el hogar.`,
        costoCompra: 113, images: ["productos/LVT113.webp"],
        specs: { "Capacidad": "7 kg", "Tipo": "Doble Tina", "Voltaje": "110V" }

    },
    {
        id: "TIM053", name: "Reloj de Nevera de 6H 21M Paragon", category: "Neveras / Cavas", model: "6H 21M",
        desc: `<b>Reloj de Nevera de 6H 21M Paragon</b><br><br> Temporizador de descongelación automático para neveras y refrigeradores no-frost con ciclo de congelación de 6 horas y descongelación de 21 minutos.`,
        costoCompra: 6.82, images: ["productos/TIM053.webp"],
        specs: { "Tiempo Trabajo": "6 Horas", "Tiempo Deshielo": "21 Minutos", "Marca": "Paragon" }
    },
    {
        id: "TIM018", name: "Reloj de Nevera de 8H 20M Paragon", category: "Neveras / Cavas", model: "8H 20M",
        desc: `<b>Reloj de Nevera de 8H 20M Paragon</b><br><br> Temporizador de deshielo para refrigeradores no-frost con intervalo de congelación de 8 horas y descongelación de 20 minutos.`,
        costoCompra: 6.8, images: ["productos/TIM018.webp"],
        specs: { "Tiempo Trabajo": "8 Horas", "Tiempo Deshielo": "20 Minutos", "Marca": "Paragon" }
    },
    {
        id: "TIM052", name: "Reloj de Nevera de 10H 25M Paragon", category: "Neveras / Cavas", model: "10H 25M",
        desc: `<b>Reloj de Nevera de 10H 25M Paragon</b><br><br> Temporizador de deshielo para neveras de ciclo largo con congelación de 10 horas y descongelación de 25 minutos.`,
        costoCompra: 8.53, images: ["productos/TIM052.webp"],
        specs: { "Tiempo Trabajo": "10 Horas", "Tiempo Deshielo": "25 Minutos", "Marca": "Paragon" }
    },
    {
        id: "SWL102", name: "Switch de Licuadora Oster Original de 3 Velocidades", category: "Licuadoras", model: "3 Velocidades",
        desc: `<b>Switch de Licuadora Oster Original de 3 Velocidades con Perilla</b><br><br> Repuesto original de interruptor giratorio de 3 velocidades para licuadoras Oster.`,
        costoCompra: 2.42, images: ["productos/SWL102.webp"],
        specs: { "Velocidades": "3", "Incluye": "Perilla", "Marca": "Oster" }
    },
    {
        id: "VLC005", name: "Vaso de Licuadora Oster Original con Tapa", category: "Licuadoras", model: "Estándar",
        desc: `<b>Vaso de Licuadora Oster Original con Tapa</b><br><br> Vaso original para licuadoras Oster fabricado en vidrio refractario resistente a cambios de temperatura, completo con su tapa y copa medidora.`,
        costoCompra: 7.8, images: ["productos/VLC005.webp"],
        specs: { "Material": "Vidrio Refractario", "Incluye": "Tapa y Copa", "Marca": "Oster" }
    },
    {
        id: "QMC004", name: "Panel Clean 66 Limpiador de Aluminio", category: "Químicos", model: "1 Litro",
        desc: `<b>Panel Clean 66 Limpiador de Aluminio</b><br><br>Fórmula especializada para la limpieza profunda de serpentines y paneles de aluminio en aires acondicionados.`,
        costoCompra: 1.423077, images: ["productos/PANEL-CLEAN.webp"],
        specs: { "Marca": "Productos 66", "Presentación": "1 Litro", "Uso": "Limpiador de Aluminio" }
    },
    {
        id: "QMC016", name: "Panel Clean 66 Plus+ Alta Concentración", category: "Químicos", model: "1 Litro",
        desc: `<b>Panel Clean 66 Plus+ Limpiador de Aluminio</b><br><br>Limpiador de aluminio de alta concentración. Remueve el sucio más pesado y la oxidación con máxima eficiencia.`,
        costoCompra: 2.315385, images: ["productos/PANEL-CLEAN+.webp"],
        specs: { "Marca": "Productos 66", "Presentación": "1 Litro", "Tipo": "Alta Concentración" }
    },
    {
        id: "QMC003", name: "Panel Cool 66 Alcohol Metílico", category: "Químicos", model: "1 Litro",
        desc: `<b>Panel Cool 66 Alcohol Metílico</b><br><br>Eliminador de humedad ideal para sistemas de refrigeración. Evita la congelación en válvulas y capilares.`,
        costoCompra: 1.984615, images: ["productos/PANEL-COOL.webp"],
        specs: { "Marca": "Productos 66", "Presentación": "1 Litro", "Función": "Eliminador de Humedad" }
    },
    {
        id: "QMC020", name: "Panel Shine 66 Abrillantador", category: "Químicos", model: "1 Litro",
        desc: `<b>Panel Shine 66 Abrillantador de Aluminio</b><br><br>Restaura el brillo original de los serpentines y componentes de aluminio, dejándolos como nuevos.`,
        costoCompra: 1.984615, images: ["productos/PANEL-SHINE.webp"],
        specs: { "Marca": "Productos 66", "Presentación": "1 Litro", "Uso": "Abrillantador" }
    },
    {
        id: "QMC001", name: "Paneltron 66 Dieléctrico", category: "Químicos", model: "1 Litro",
        desc: `<b>Paneltron 66 Dieléctrico Plástico de 1 Litro</b><br><br>Solvente dieléctrico para limpieza de motores, tableros y componentes eléctricos sin riesgo de cortocircuitos.`,
        costoCompra: 2.646153, images: ["productos/PANELTRON.webp"],
        specs: { "Marca": "Productos 66", "Presentación": "Envase Plástico 1L", "Uso": "Solvente Dieléctrico" }
    },
    {
        id: "QMC006", name: "Paneltron 66 Plus+ Dieléctrico Lata", category: "Químicos", model: "1 Kilo",
        desc: `<b>Paneltron 66 Plus/RBV Dieléctrico (Lata)</b><br><br>Fórmula dieléctrica premium en presentación de lata de 1 Kilo. Máxima pureza y rápida evaporación.`,
        costoCompra: 4.638462, images: ["productos/PANELTRON+.webp"],
        specs: { "Marca": "Productos 66", "Presentación": "Lata 1 Kilo", "Uso": "Dieléctrico Premium" }
    },
    {
        id: "CAP320", name: "Capacitor Maxwell Gold de 20 MFD", category: "Capacitores", model: "20 MFD",
        desc: `<b>Capacitor Maxwell Línea Gold de 20 MFD</b><br><br>Capacitor de marcha metálico premium. Rango de voltaje dual 370/440V. Alta durabilidad con 5 años de garantía.`,
        costoCompra: 5.838462, images: ["productos/20UF-GOLD.webp"],
        specs: { "Marca": "Maxwell", "Capacitancia": "20 MFD", "Voltaje": "370/440V", "Garantía": "5 Años" }
    },
    {
        id: "CAP325", name: "Capacitor Maxwell Gold de 25 MFD", category: "Capacitores", model: "25 MFD",
        desc: `<b>Capacitor Maxwell Línea Gold de 25 MFD</b><br><br>Capacitor de marcha metálico premium. Rango de voltaje dual 370/440V. Alta durabilidad con 5 años de garantía.`,
        costoCompra: 6.507692, images: ["productos/25UF-GOLD.webp"],
        specs: { "Marca": "Maxwell", "Capacitancia": "25 MFD", "Voltaje": "370/440V", "Garantía": "5 Años" }
    },
    {
        id: "CAP330", name: "Capacitor Maxwell Gold de 30 MFD", category: "Capacitores", model: "30 MFD",
        desc: `<b>Capacitor Maxwell Línea Gold de 30 MFD</b><br><br>Capacitor de marcha metálico premium. Rango de voltaje dual 370/440V. Alta durabilidad con 5 años de garantía.`,
        costoCompra: 7.076923, images: ["productos/30UF-GOLD.webp"],
        specs: { "Marca": "Maxwell", "Capacitancia": "30 MFD", "Voltaje": "370/440V", "Garantía": "5 Años" }
    },
    {
        id: "CAP335", name: "Capacitor Maxwell Gold de 35 MFD", category: "Capacitores", model: "35 MFD",
        desc: `<b>Capacitor Maxwell Línea Gold de 35 MFD</b><br><br>Capacitor de marcha metálico premium. Rango de voltaje dual 370/440V. Alta durabilidad con 5 años de garantía.`,
        costoCompra: 7.592308, images: ["productos/35UF-GOLD.webp"],
        specs: { "Marca": "Maxwell", "Capacitancia": "35 MFD", "Voltaje": "370/440V", "Garantía": "5 Años" }
    },
    {
        id: "CAP340", name: "Capacitor Maxwell Gold de 40 MFD", category: "Capacitores", model: "40 MFD",
        desc: `<b>Capacitor Maxwell Línea Gold de 40 MFD</b><br><br>Capacitor de marcha metálico premium. Rango de voltaje dual 370/440V. Alta durabilidad con 5 años de garantía.`,
        costoCompra: 7.923077, images: ["productos/40UF-GOLD.webp"],
        specs: { "Marca": "Maxwell", "Capacitancia": "40 MFD", "Voltaje": "370/440V", "Garantía": "5 Años" }
    },
    {
        id: "CAP345", name: "Capacitor Maxwell Gold de 45 MFD", category: "Capacitores", model: "45 MFD",
        desc: `<b>Capacitor Maxwell Línea Gold de 45 MFD</b><br><br>Capacitor de marcha metálico premium. Rango de voltaje dual 370/440V. Alta durabilidad con 5 años de garantía.`,
        costoCompra: 8.923077, images: ["productos/45UF-GOLD.webp"],
        specs: { "Marca": "Maxwell", "Capacitancia": "45 MFD", "Voltaje": "370/440V", "Garantía": "5 Años" }
    },
    {
        id: "CAP350", name: "Capacitor Maxwell Gold de 50 MFD", category: "Capacitores", model: "50 MFD",
        desc: `<b>Capacitor Maxwell Línea Gold de 50 MFD</b><br><br>Capacitor de marcha metálico premium. Rango de voltaje dual 370/440V. Alta durabilidad con 5 años de garantía.`,
        costoCompra: 9.607692, images: ["productos/50UF-GOLD.webp"],
        specs: { "Marca": "Maxwell", "Capacitancia": "50 MFD", "Voltaje": "370/440V", "Garantía": "5 Años" }
    },
    {
        id: "CAP360", name: "Capacitor Maxwell Gold de 60 MFD", category: "Capacitores", model: "60 MFD",
        desc: `<b>Capacitor Maxwell Línea Gold de 60 MFD</b><br><br>Capacitor de marcha metálico premium. Rango de voltaje dual 370/440V. Alta durabilidad con 5 años de garantía.`,
        costoCompra: 10.953846, images: ["productos/60UF-GOLD.webp"],
        specs: { "Marca": "Maxwell", "Capacitancia": "60 MFD", "Voltaje": "370/440V", "Garantía": "5 Años" }
    },
    {
        id: "CAP370", name: "Capacitor Maxwell Gold de 70 MFD", category: "Capacitores", model: "70 MFD",
        desc: `<b>Capacitor Maxwell Línea Gold de 70 MFD</b><br><br>Capacitor de marcha metálico premium. Rango de voltaje dual 370/440V. Alta durabilidad con 5 años de garantía.`,
        costoCompra: 12.823077, images: ["productos/70UF-GOLD.webp"],
        specs: { "Marca": "Maxwell", "Capacitancia": "70 MFD", "Voltaje": "370/440V", "Garantía": "5 Años" }
    },
    {
        id: "CAP371", name: "Capacitor Maxwell Gold de 75 MFD", category: "Capacitores", model: "75 MFD",
        desc: `<b>Capacitor Maxwell Línea Gold de 75 MFD</b><br><br>Capacitor de marcha metálico premium para equipos de alta demanda. Rango dual 370/440V con 5 años de garantía.`,
        costoCompra: 13.261538, images: ["productos/75UF-GOLD.webp"],
        specs: { "Marca": "Maxwell", "Capacitancia": "75 MFD", "Voltaje": "370/440V", "Garantía": "5 Años" }
    },
    {
        id: "HID012", name: "Hidrojet de Alta Presión 1600W INGCO", category: "Herramientas", model: "1600W",
        desc: `<b>Hidrojet de Alta Presión 1600W INGCO</b><br><br>Hidrolavadora de alta presión. Ideal para limpieza profunda industrial y comercial.`,
        costoCompra: 86.207692, images: ["productos/HID012.webp"],
        specs: { "Marca": "INGCO", "Potencia": "1600W", "Tipo": "Alta Presión" }
    },
    {
        id: "ASP105", name: "Aspiradora de Seco y Húmedo 1000W 10L INGCO", category: "Herramientas", model: "10 Litros",
        desc: `<b>Aspiradora 1000W Seco/Húmedo 10L INGCO</b><br><br>Aspiradora de grado industrial capaz de aspirar tanto polvo como líquidos con tanque de 10 litros.`,
        costoCompra: 41.899999, images: ["productos/ASP105.webp"],
        specs: { "Marca": "INGCO", "Potencia": "1000W", "Capacidad": "10 Litros" }
    },
    {
        id: "BMB098", name: "Bomba de Agua 1HP 110V INGCO", category: "Herramientas", model: "1 HP",
        desc: `<b>Bomba de Agua 1HP 110V INGCO (Bobina de Cobre)</b><br><br>Bomba periférica de alto rendimiento con embobinado de cobre para mayor durabilidad y potencia.`,
        costoCompra: 72.353846, images: ["productos/BMB098-2.webp", "productos/BMB098.webp"],
        specs: { "Marca": "INGCO", "Caballaje": "1 HP", "Voltaje": "110V", "Bobina": "Cobre" }
    },
    {
        id: "BMB100", name: "Bomba de Agua 1/2HP 110V INGCO", category: "Herramientas", model: "1/2 HP",
        desc: `<b>Bomba de Agua 1/2HP 110V INGCO (Bobina de Cobre)</b><br><br>Bomba periférica eficiente y resistente para uso residencial o comercial ligero.`,
        costoCompra: 40.338461, images: ["productos/BMB100-2.webp", "productos/BMB100.webp"],
        specs: { "Marca": "INGCO", "Caballaje": "1/2 HP", "Voltaje": "110V", "Bobina": "Cobre" }
    },
    {
        id: "ESR100", name: "Esmeriladora Angular 4-1/2 750W INGCO", category: "Herramientas", model: "4 1/2 Pulgadas",
        desc: `<b>Esmeriladora Angular 4 1/2 750W INGCO</b><br><br>Esmeril de alto rendimiento ideal para corte y desbaste de metales y mampostería.`,
        costoCompra: 26.523077, images: ["productos/ESR100.webp"],
        specs: { "Marca": "INGCO", "Potencia": "750W", "Disco": "4-1/2 Pulgadas" }
    },
    {
        id: "VAM110", name: "Kit Multímetro, Pinza y Detector INGCO", category: "Herramientas", model: "Profesional",
        desc: `<b>Kit Multímetro, Pinza y Detector de Voltaje INGCO</b><br><br>El combo eléctrico definitivo para técnicos de refrigeración y electricistas.`,
        costoCompra: 56.353846, images: ["productos/VAM110.webp"],
        specs: { "Marca": "INGCO", "Incluye": "Multímetro, Pinza Amperimétrica, Detector con sus pilas" }
    },
    {
        id: "PST101", name: "Control de Presión Automático 110V INGCO", category: "Herramientas", model: "Automático",
        desc: `<b>Control de Presión Automático INGCO 110V</b><br><br>Automatiza el encendido y apagado de bombas de agua manteniendo una presión constante.`,
        costoCompra: 26.515385, images: ["productos/PST101.webp"],
        specs: { "Marca": "INGCO", "Voltaje": "110V", "Uso": "Bombas de agua" }
    },
    {
        id: "PST104", name: "Regulador Presscontrol Electrónico 110V INGCO", category: "Herramientas", model: "Electrónico",
        desc: `<b>Regulador Presscontrol Electrónico 110V</b><br><br>Módulo electrónico de control de flujo y presión para sistemas de bombeo hidroneumáticos.`,
        costoCompra: 25.423077, images: ["productos/PST104.webp"],
        specs: { "Marca": "INGCO", "Voltaje": "110V", "Tipo": "Electrónico" }
    },
    {
        id: "CAJ001", name: "Caja de Herramientas de 17\" INGCO", category: "Herramientas", model: "17 Pulgadas",
        desc: `<b>Caja de Herramientas de 17\" INGCO</b><br><br>Organizador portátil de plástico de alta resistencia con compartimientos superiores.`,
        costoCompra: 9.600000, images: ["productos/CAJ001.webp"],
        specs: { "Marca": "INGCO", "Tamaño": "17 Pulgadas", "Material": "Polímero de Alto Impacto" }
    },
    {
        id: "FUM001", name: "Fumigadora Asperjadora 5L INGCO", category: "Herramientas", model: "5 Litros",
        desc: `<b>Fumigadora Asperjadora 5L 2.5BAR INGCO</b><br><br>Bomba rociadora manual a presión ideal para aplicar químicos limpiadores a serpentines y aires acondicionados.`,
        costoCompra: 13.261538, images: ["productos/FUM001.webp"],
        specs: { "Marca": "INGCO", "Capacidad": "5 Litros", "Presión": "2.5 BAR" }
    },
    {
        id: "HID107", name: "Pistola Pulverizadora para Hidrojet INGCO", category: "Herramientas", model: "Pistola",
        desc: `<b>Pistola Pulverizadora INGCO</b><br><br>Repuesto de pistola de alta presión compatible con hidrojets INGCO.`,
        costoCompra: 15.915384, images: ["productos/HID107.webp"],
        specs: { "Marca": "INGCO", "Uso": "Hidrojet", "Tipo": "Pulverizadora" }
    },
    {
        id: "HID106", name: "Manguera para Hidrojet de 5mts INGCO", category: "Herramientas", model: "5 Metros",
        desc: `<b>Manguera para Hidrojet de 5mts INGCO</b><br><br>Manguera de alta presión reforzada, longitud de 5 metros.`,
        costoCompra: 9.976923, images: ["productos/HID106.webp"],
        specs: { "Marca": "INGCO", "Longitud": "5 Metros", "Uso": "Hidrojet" }
    },
    {
        id: "DES112", name: "Juego de Destornilladores Precisión con 37Pcs INGCO", category: "Herramientas", model: "37 Piezas",
        desc: `<b>Juego de Destornilladores Precisión con 37Pcs INGCO</b><br><br>Set completo de micropuntas magnéticas para trabajos delicados de electrónica y tarjetas de control.`,
        costoCompra: 7.092307, images: ["productos/DES112.webp"],
        specs: { "Marca": "INGCO", "Piezas": "37", "Tipo": "Precisión" }
    },
    {
        id: "DES114", name: "Juego de Destornilladores Impacto con 6Pcs INGCO", category: "Herramientas", model: "6 Piezas",
        desc: `<b>Juego de Destornilladores Impacto con 6Pcs INGCO</b><br><br>Destornilladores robustos para trabajo pesado, diseñados para resistir golpes en la empuñadura.`,
        costoCompra: 6.038461, images: ["productos/DES114.webp"],
        specs: { "Marca": "INGCO", "Piezas": "6", "Tipo": "Impacto" }
    },
    {
        id: "DES113", name: "Juego de Destornillador Tuerca Plegable 6Pcs INGCO", category: "Herramientas", model: "6 Piezas",
        desc: `<b>Juego de Destornillador Tuerca Plegable 6Pcs INGCO</b><br><br>Llaves de copa tipo destornillador en formato plegable tipo navaja suiza.`,
        costoCompra: 7.092307, images: ["productos/DES113.webp"],
        specs: { "Marca": "INGCO", "Piezas": "6", "Tipo": "Tuerca Plegable" }
    },
    {
        id: "RAC701", name: "Llave Ajustable 10\" INGCO", category: "Herramientas", model: "10 Pulgadas",
        desc: `<b>Llave Ajustable 10\" 24CM Francesa INGCO</b><br><br>Llave inglesa de acero forjado con mango ergonómico antideslizante.`,
        costoCompra: 4.638461, images: ["productos/RAC701.webp"],
        specs: { "Marca": "INGCO", "Tamaño": "10 Pulgadas (24cm)", "Tipo": "Ajustable" }
    },
    {
        id: "RAC802", name: "Juego Llave Torx de Bolsillo T9 a T40 INGCO", category: "Herramientas", model: "Plegable",
        desc: `<b>Juego Llave Torx de Bolsillo T9 a T40 INGCO</b><br><br>Set de llaves Torx en formato navaja compacta para llevar a cualquier lado.`,
        costoCompra: 5.338461, images: ["productos/RAC802.webp"],
        specs: { "Marca": "INGCO", "Tipo": "Torx", "Medidas": "T9 a T40" }
    },
    {
        id: "ALT104", name: "Alicate Corta Cable 8\" INGCO", category: "Herramientas", model: "8 Pulgadas",
        desc: `<b>Alicate Corta Cable 8\" INGCO</b><br><br>Pinza especializada de alto apalancamiento para cortes limpios de cables eléctricos gruesos.`,
        costoCompra: 4.392308, images: ["productos/ALT104.webp"],
        specs: { "Marca": "INGCO", "Tamaño": "8 Pulgadas", "Función": "Corta Cable" }
    },
    {
        id: "ALT105", name: "Alicate Corta Cable 6\" INGCO", category: "Herramientas", model: "6 Pulgadas",
        desc: `<b>Alicate Corta Cable 6\" INGCO</b><br><br>Pinza compacta corta cable con mangos aislados antideslizantes.`,
        costoCompra: 3.323077, images: ["productos/ALT106.webp"],
        specs: { "Marca": "INGCO", "Tamaño": "6 Pulgadas", "Función": "Corta Cable" }
    },
    {
        id: "MCW001", name: "Mecha Copa de Widia 65mm INGCO", category: "Herramientas", model: "65mm",
        desc: `<b>Mecha Copa de Widia 65mm Vástago 110mm INGCO</b><br><br>Ideal para perforar paredes y concreto al instalar tuberías de aire acondicionado.`,
        costoCompra: 9.623077, images: ["productos/MCW001.webp"],
        specs: { "Marca": "INGCO", "Diámetro": "65mm", "Tipo": "Widia" }
    },
    {
        id: "MCW002", name: "Mecha Copa de Widia 80mm INGCO", category: "Herramientas", model: "80mm",
        desc: `<b>Mecha Copa de Widia 80mm Vástago 3-1/8 INGCO</b><br><br>Broca copa perforadora para mampostería de diámetro ancho.`,
        costoCompra: 11.753846, images: ["productos/MCW002.webp"],
        specs: { "Marca": "INGCO", "Diámetro": "80mm", "Tipo": "Widia" }
    },
    {
        id: "CAU009", name: "Set de Puntas de Cautín 5Pcs INGCO", category: "Herramientas", model: "5 Piezas",
        desc: `<b>Set de Puntas de Cautín 5Pcs 90W/120W INGCO</b><br><br>Puntas de repuesto de alta conductividad térmica para soldadura electrónica.`,
        costoCompra: 5.307692, images: ["productos/CAU009.webp"],
        specs: { "Marca": "INGCO", "Piezas": "5", "Potencia soportada": "90W / 120W" }
    },
    {
        id: "WAL103", name: "Bolso Porta Herramientas INGCO", category: "Herramientas", model: "Cinturón",
        desc: `<b>Bolso Porta Herramienta INGCO</b><br><br>Práctico organizador de cinturón para llevar las herramientas más importantes siempre a la mano.`,
        costoCompra: 2.976923, images: ["productos/WAL103.webp"],
        specs: { "Marca": "INGCO", "Tipo": "Cinturón / Bolso", "Material": "Lona Reforzada" }
    },
    {
        id: "BRO202", name: "Juego de Brocas Hierro HSS 8Pcs INGCO", category: "Herramientas", model: "8 Piezas",
        desc: `<b>Juego de Brocas Hierro HSS 8Pcs INGCO</b><br><br>Set de brocas de acero de alta velocidad (HSS) para perforar metal de forma precisa.`,
        costoCompra: 1.638461, images: ["productos/BRO202.webp"],
        specs: { "Marca": "INGCO", "Material": "HSS (High Speed Steel)", "Piezas": "8" }
    },
    {
        id: "TRR007", name: "Bolsa de Tirrap Negro de 100Pcs INGCO", category: "Herramientas", model: "2.5mm x 10cm",
        desc: `<b>Bolsa de Tirrap Negro 2.5MMx10CM 100Pcs INGCO</b><br><br>Sujetadores plásticos de alta resistencia para organizar cables y aislamientos.`,
        costoCompra: 0.661538, images: ["productos/TRR007.webp"],
        specs: { "Marca": "INGCO", "Cantidad": "100 Piezas", "Dimensiones": "2.5mm x 10cm" }
    },
    {
        id: "CTB014", name: "Corta Tubo Grande 1/8 a 1-1/4 Steinmann", category: "Herramientas", model: "1/8 x 1-1/4",
        desc: `<b>Corta Tubo Grande Steinmann 1/8 x 1-1/4</b><br><br>Herramienta de corte de precisión para tuberías de cobre y aluminio, ideal para refrigeración.`,
        costoCompra: 21.407692, images: ["productos/CTB014.webp"],
        specs: { "Marca": "Steinmann", "Capacidad": "1/8 a 1-1/4 Pulgadas", "Uso": "Cobre y Aluminio" }
    },
    {
        id: "CTB011", name: "Corta Tubo Mediano 3/16 a 7/8 Steinmann", category: "Herramientas", model: "3/16 - 7/8",
        desc: `<b>Corta Tubo Mediano Steinmann 3/16 a 7/8</b><br><br>Cortador de tubos compacto, excelente para trabajos en espacios reducidos.`,
        costoCompra: 11.530769, images: ["productos/CTB011.webp"],
        specs: { "Marca": "Steinmann", "Capacidad": "3/16 a 7/8 Pulgadas", "Uso": "Refrigeración" }
    },
    {
        id: "MVA362", name: "Motor Ventilador Succión 10\" Axial 220V Steinmann", category: "Motores", model: "10 Pulgadas",
        desc: `<b>Motor Ventilador de Succión 10" Axial 220V Steinmann</b><br><br>Motor axial de alta eficiencia para condensadores y evaporadores comerciales.`,
        costoCompra: 43.100000, images: ["productos/MVA362.webp"],
        specs: { "Marca": "Steinmann", "Tipo": "Axial Succión", "Tamaño": "10 Pulgadas", "Voltaje": "220V" }
    },
    {
        id: "MVA363", name: "Motor Ventilador Succión 12\" Axial 220V Steinmann", category: "Motores", model: "12 Pulgadas",
        desc: `<b>Motor Ventilador de Succión 12" Axial 220V Steinmann</b><br><br>Motor extractor axial para refrigeración industrial, diseño robusto y aspas balanceadas.`,
        costoCompra: 49.738461, images: ["productos/MVA363.webp"],
        specs: { "Marca": "Steinmann", "Tipo": "Axial Succión", "Tamaño": "12 Pulgadas", "Voltaje": "220V" }
    },
    {
        id: "MVA364", name: "Motor Ventilador Succión 18\" Axial 220V Steinmann", category: "Motores", model: "18 Pulgadas",
        desc: `<b>Motor Ventilador de Succión 18" Axial 220V Steinmann</b><br><br>Motor de succión de gran caudal para cavas cuarto y condensadores de alto tonelaje.`,
        costoCompra: 76.261538, images: ["productos/MVA364.webp"],
        specs: { "Marca": "Steinmann", "Tipo": "Axial Succión", "Tamaño": "18 Pulgadas", "Voltaje": "220V" }
    },
    {
        id: "BMB109", name: "Bomba de Vacío 1/4 HP 3CFM Steinmann", category: "Herramientas", model: "1/4 HP - 3 CFM",
        desc: `<b>Bomba de Vacío 1/4 HP 3CFM Steinmann</b><br><br>Bomba de vacío de una etapa, compacta y potente. Garantiza la extracción total de humedad en sistemas de refrigeración.`,
        costoCompra: 112.732095, images: ["productos/BMB109.webp"],
        specs: { "Marca": "Steinmann", "Potencia": "1/4 HP", "Caudal": "3 CFM", "Aplicación": "Refrigeración" }
    },
    {
        id: "BMB110", name: "Bomba de Vacío Inalámbrica 18V Steinmann", category: "Herramientas", model: "18V Inalámbrica",
        desc: `<b>Bomba de Vacío Inalámbrica Steinmann 18V</b><br><br>La máxima portabilidad para técnicos exigentes. Bomba a batería de 18V para trabajar en techos o lugares sin electricidad.`,
        costoCompra: 122.679045, images: ["productos/BMB110.webp", "productos/BMB110-BATERIA.webp", "productos/BMB110-CARGADOR.webp"],
        specs: { "Marca": "Steinmann", "Alimentación": "Batería 18V", "Tipo": "Inalámbrica", "Incluye": "Batería y Cargador" }
    },
    {
        id: "MOI019", name: "Motor Ventilador 1/4HP 220V 1075RPM Steinmann", category: "Motores", model: "1/4 HP",
        desc: `<b>Motor Ventilador Steinmann 1/4HP 220V 1075RPM</b><br><br>Motor para condensador de aire acondicionado. Alto rendimiento térmico y rodamientos sellados.`,
        costoCompra: 69.623076, images: ["productos/MOI019.webp"],
        specs: { "Marca": "Steinmann", "Potencia": "1/4 HP", "RPM": "1075", "Voltaje": "220V" }
    },
    {
        id: "MOI020", name: "Motor Ventilador 1/3HP 220V 1075RPM Steinmann", category: "Motores", model: "1/3 HP",
        desc: `<b>Motor Ventilador Steinmann 1/3HP 220V 1075RPM</b><br><br>Motor potente para equipos de refrigeración y aires acondicionados centrales de gran capacidad.`,
        costoCompra: 76.253846, images: ["productos/MOI020.webp"],
        specs: { "Marca": "Steinmann", "Potencia": "1/3 HP", "RPM": "1075", "Voltaje": "220V" }
    },
    {
        id: "KIT105", name: "Kit Vacío Veloz Lite 2 Mangueras 1/2 Steinmann", category: "Herramientas", model: "Lite 1/2",
        desc: `<b>Kit Vacío Veloz Lite 2 Mangueras 1/2 Steinmann</b><br><br>Herramienta especializada para realizar vacíos profundos en tiempo récord con adaptadores de alto flujo.`,
        costoCompra: 69.623076, images: ["productos/KIT105.webp", "productos/ADAPTADOR-KIT105.webp"],
        specs: { "Marca": "Steinmann", "Conexiones": "1/2", "Incluye": "2 Mangueras y 2 Adaptadores" }
    },
    {
        id: "ANT006", name: "Extensión de Manguera para Picos de Soldar", category: "Herramientas", model: "Extensión",
        desc: `<b>Extensión Manguera para Picos de Soldar Steinmann</b><br><br>Manguera de extensión flexible y resistente al calor para equipos de soldadura de refrigeración.`,
        costoCompra: 29.830769, images: ["productos/ANT006.webp"],
        specs: { "Marca": "Steinmann", "Uso": "Soldadura Autógena", "Accesorio": "Extensión" }
    },
    {
        id: "CTB009", name: "Dobla Tubo Múltiple 1/2, 3/8, 1/4 Steinmann", category: "Herramientas", model: "Múltiple",
        desc: `<b>Dobla Tubo Múltiple Steinmann 1/2, 3/8, 1/4</b><br><br>Doblador de tuberías 3 en 1. Permite curvar tuberías de cobre sin estrangularlas ni partirlas.`,
        costoCompra: 22.200000, images: ["productos/CTB009.webp"],
        specs: { "Marca": "Steinmann", "Medidas": "1/2, 3/8, 1/4", "Material": "Aleación Metálica" }
    },
    {
        id: "CTB010", name: "Dobla Tubo Múltiple 1/4, 5/16, 3/8 Steinmann", category: "Herramientas", model: "Múltiple Pequeño",
        desc: `<b>Dobla Tubo Múltiple Steinmann 1/4, 5/16, 3/8</b><br><br>Doblador tipo palanca para medidas más pequeñas, ideal para refrigeración doméstica.`,
        costoCompra: 10.423077, images: ["productos/CTB010.webp"],
        specs: { "Marca": "Steinmann", "Medidas": "1/4, 5/16, 3/8", "Uso": "Tubería de Cobre" }
    },
    {
        id: "JMG010", name: "Juego de Mangueras Heavy Duty Steinmann", category: "Herramientas", model: "1/4 x 1/4",
        desc: `<b>Juego Manguera Steinmann Heavy Duty 1/4 x 1/4</b><br><br>Set de mangueras para manifold de refrigeración de alta presión, revestimiento reforzado (Heavy Duty).`,
        costoCompra: 17.907692, images: ["productos/JMG010.webp"],
        specs: { "Marca": "Steinmann", "Conexión": "1/4 x 1/4", "Tipo": "Heavy Duty" }
    },
    {
        id: "JMG359", name: "Manguera de Carga Steinmann 1/4 x 5/16 152cm", category: "Herramientas", model: "152 CM",
        desc: `<b>Manguera de Carga Steinmann 1/4 x 5/16 152CM</b><br><br>Juego de mangueras especializadas para sistemas R410A con conexión 5/16.`,
        costoCompra: 49.238461, images: ["productos/JMG359.webp"],
        specs: { "Marca": "Steinmann", "Conexión": "1/4 x 5/16", "Longitud": "152 cm (60\")" }
    },
    {
        id: "WAL105", name: "Bolso para Herramienta Multiuso Steinmann", category: "Herramientas", model: "Multiuso",
        desc: `<b>Bolso para Herramienta Steinmann Multiuso</b><br><br>Morral técnico tipo mochila con múltiples compartimientos para organizar y transportar herramientas profesionales.`,
        costoCompra: 79.569230, images: ["productos/WAL105.webp"],
        specs: { "Marca": "Steinmann", "Tipo": "Mochila / Bolso", "Uso": "Transporte de Herramientas" }
    },
    {
        id: "FIL142", name: "Filtro Secador de Rosca con Nucleo Solido 1/2 S-084 3-5 Ton", category: "Refrigeración", model: "S-084",
        desc: `<b>Filtro Secador 1/2 S-084 Rosca 3-5 Ton Steinmann</b><br><br>Filtro de bloque desecante para líneas de líquido en sistemas de 3 a 5 toneladas.`,
        costoCompra: 6.700000, images: ["productos/FIL042.webp", "productos/TABLA_FIL042-164-041.webp"],
        specs: { "Marca": "Steinmann", "Conexión": "1/2 Rosca", "Capacidad": "3 a 5 Toneladas" }
    },
    {
        id: "FIL144", name: "Filtro Secador de Rosca con Nucleo Solido 1/2 S-164 4-6 Ton", category: "Refrigeración", model: "S-164",
        desc: `<b>Filtro Secador 1/2 S-164 Rosca 4-6 Ton Steinmann</b><br><br>Filtro desecante antiácido para protección de sistemas de aire acondicionado comercial.`,
        costoCompra: 8.200000, images: ["productos/FIL144.webp", "productos/TABLA_FIL144-145-165-143.webp"],
        specs: { "Marca": "Steinmann", "Conexión": "1/2 Rosca", "Capacidad": "4 a 6 Toneladas" }
    },
    {
        id: "FIL145", name: "Filtro Secador de Rosca con Nucleo Solido 5/8 S-165 5-8 Ton", category: "Refrigeración", model: "S-165",
        desc: `<b>Filtro Secador 5/8 S-165 Rosca 5-8 Ton Steinmann</b><br><br>Filtro de línea de líquido para equipos de 5 a 8 toneladas con conexión 5/8 Flare.`,
        costoCompra: 8.376923, images: ["productos/FIL145.webp", "productos/TABLA_FIL144-145-165-143.webp"],
        specs: { "Marca": "Steinmann", "Conexión": "5/8 Rosca", "Capacidad": "5 a 8 Toneladas" }
    },
    {
        id: "FIL164", name: "Filtro Secador de Rosca con Nuecleo Solido 3/8 S-083 Rosca 2.5-4 Ton", category: "Refrigeración", model: "S-083",
        desc: `<b>Filtro Secador 3/8 S-083 Rosca 2.5-4 Ton Steinmann</b><br><br>Filtro desecante de 8 pulgadas cúbicas para líneas de líquido 3/8.`,
        costoCompra: 6.600000, images: ["productos/FIL164.webp", "productos/TABLA_FIL042-164-041.webp"],
        specs: { "Marca": "Steinmann", "Conexión": "3/8 Rosca", "Capacidad": "2.5 a 4 Toneladas" }
    },
    {
        id: "FIL166", name: "Filtro Secador de Rosca con Nucleo Solido 3/8 S-303 3-6 Ton", category: "Refrigeración", model: "S-303",
        desc: `<b>Filtro Secador 3/8 S-303 Rosca 3-6 Ton Steinmann</b><br><br>Filtro desecante de alto volumen (30 pulgadas cúbicas) para retención máxima de humedad y ácidos.`,
        costoCompra: 10.969230, images: ["productos/FIL166.webp", "productos/TABLA_FIL166-167-168.webp"],
        specs: { "Marca": "Steinmann", "Conexión": "3/8 Rosca", "Volumen": "30 Cu. In.", "Capacidad": "3 a 6 Toneladas" }
    },
    {
        id: "FIL168", name: "Filtro Secador de Rosca con Nucleo Solido 5/8 S-305 8-10 Ton", category: "Refrigeración", model: "S-305",
        desc: `<b>Filtro Secador 5/8 S-305 Rosca 8-10 Ton Steinmann</b><br><br>Filtro industrial para equipos de gran tonelaje, conexión 5/8 Flare.`,
        costoCompra: 11.238461, images: ["productos/FIL168.webp", "productos/TABLA_FIL166-167-168.webp"],
        specs: { "Marca": "Steinmann", "Conexión": "5/8 Rosca", "Capacidad": "8 a 10 Toneladas" }
    },
    {
        id: "FIL167", name: "Filtro Secador de Rosca con Nucleo Solido 1/2 S-304 6-8 Ton", category: "Refrigeración", model: "S-304",
        desc: `<b>Filtro Secador 1/2 S-304 Rosca 6-8 Ton Steinmann</b><br><br>Filtro desecante de línea de líquido de alta capacidad para conexiones de 1/2.`,
        costoCompra: 10.969230, images: ["productos/FIL167.webp", "productos/TABLA_FIL166-167-168.webp"],
        specs: { "Marca": "Steinmann", "Conexión": "1/2 Rosca", "Capacidad": "6 a 8 Toneladas" }
    },
    {
        id: "FIL165", name: "Filtro Secador de Rosca con Nucleo Solido 3/8 S-163 3-4 Ton", category: "Refrigeración", model: "S-163",
        desc: `<b>Filtro Secador 3/8 S-163 Rosca 3-4 Ton Steinmann</b><br><br>Filtro antiácido de 16 pulgadas cúbicas para sistemas de refrigeración de tamaño medio.`,
        costoCompra: 8.092307, images: ["productos/FIL165.webp", "productos/TABLA_FIL144-145-165-143.webp"],
        specs: { "Marca": "Steinmann", "Conexión": "3/8 Rosca", "Volumen": "16 Cu. In." }
    },
    {
        id: "FIL162", name: "Filtro Secador de Rosca con Nucleo Solido 3/8 S-053 2-3 Ton", category: "Refrigeración", model: "S-053",
        desc: `<b>Filtro Secador 3/8 S-053 Rosca 2-3 Ton Steinmann</b><br><br>Filtro secador compacto para líneas de 3/8 en aires acondicionados estándar.`,
        costoCompra: 5.369230, images: ["productos/FIL162.webp", "productos/TABLA_FIL040-162.webp"],
        specs: { "Marca": "Steinmann", "Conexión": "3/8 Rosca", "Capacidad": "2 a 3 Toneladas" }
    },
    {
        id: "FIL163", name: "Filtro Secador de Rosca con Nucleo Solido 3/8 S-033 3/4-1 Ton", category: "Refrigeración", model: "S-033",
        desc: `<b>Filtro Secador 3/8 S-033 Rosca 3/4-1 Ton Steinmann</b><br><br>Filtro pequeño para cavas y neveras comerciales con línea de 3/8.`,
        costoCompra: 5.069230, images: ["productos/FIL163.webp", "productos/TABLA_163.webp"],
        specs: { "Marca": "Steinmann", "Conexión": "3/8 Rosca", "Capacidad": "3/4 a 1 Tonelada" }
    },
    {
        id: "FIL143", name: "Filtro Secador de Rosca con Nucleo Solido 1/4 S-162 3-4 Ton", category: "Refrigeración", model: "S-162",
        desc: `<b>Filtro Secador 1/4 S-162 Rosca 3-4 Ton Steinmann</b><br><br>Filtro desecante de 16 Cu. In. con rosca de 1/4.`,
        costoCompra: 7.900000, images: ["productos/FIL143.webp", "productos/TABLA_FIL144-145-165-143.webp"],
        specs: { "Marca": "Steinmann", "Conexión": "1/4 Rosca", "Capacidad": "3 a 4 Toneladas" }
    },
    {
        id: "FIL141", name: "Filtro Secador de Rosca con Nucleo Solido 1/4 S-082 2-3 Ton", category: "Refrigeración", model: "S-082",
        desc: `<b>Filtro Secador 1/4 S-082 Rosca 2-3 Ton Steinmann</b><br><br>Filtro desecante de 8 Cu. In. con conexión flare de 1/4 para refrigeración.`,
        costoCompra: 5.900000, images: ["productos/FIL041.webp", "productos/TABLA_FIL042-164-041.webp"],
        specs: { "Marca": "Steinmann", "Conexión": "1/4 Rosca", "Capacidad": "2 a 3 Toneladas" }
    },
    {
        id: "FIL140", name: "Filtro Secador de Rosca con Nucleo Solido 1/4 S-052 1-2 Ton", category: "Refrigeración", model: "S-052",
        desc: `<b>Filtro Secador 1/4 S-052 Rosca 1-2 Ton Steinmann</b><br><br>Filtro secador compacto para equipos de 1 a 2 toneladas.`,
        costoCompra: 5.238461, images: ["productos/FIL140.webp", "productos/TABLA_FIL040-162.webp"],
        specs: { "Marca": "Steinmann", "Conexión": "1/4 Rosca", "Capacidad": "1 a 2 Toneladas" }
    },
    {
        id: "PGT100", name: "Pegamento Instantáneo 2G INCGO", category: "Químicos", model: "2 Gramos",
        desc: `<b>Pegamento Instantáneo 2G INGCO</b><br><br>Adhesivo de cianoacrilato de secado ultra rápido para reparaciones múltiples.`,
        costoCompra: 0.523076, images: ["productos/PGT100.webp"],
        specs: { "Marca": "INGCO", "Cantidad": "2 Gramos", "Tipo": "Instantáneo" }
    }
];

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
    btnElement.classList.add('active');
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

    if (currentViewedProduct.desc.length > 130) {
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

        // Al cambiar de medida en el select, actualizamos precios y código
        variantSelect.onchange = function () {
            currentVariantIndex = parseInt(this.value);
            updateQuickViewPrices();
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

    // Imagen Principal
    const mainImg = document.getElementById('qvMainImg');
    const imgSrc = (currentViewedProduct.images && currentViewedProduct.images.length > 0) ? currentViewedProduct.images[0] : 'productos/NO_PHOTO.webp';
    mainImg.src = imgSrc;
    mainImg.onerror = function () { this.src = 'productos/NO_PHOTO.webp'; };

    // Miniaturas
    const thumbContainer = document.getElementById('qvThumbnails');
    thumbContainer.innerHTML = '';
    currentViewedProduct.images.forEach((imgUrl) => {
        thumbContainer.innerHTML += `<img src="${imgUrl}" class="qv-thumb" onclick="changeMainImage(this.src)" onerror="this.style.display='none'">`;
    });

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
    if (!event || event.target.id === 'zoomOverlay' || event.target.classList.contains('close-zoom')) {
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

function changeMainImage(url) {
    document.getElementById('qvMainImg').src = url;
}

function closeQuickView(event) {
    if (!event || event.target.id === 'quickViewModal' || event.target.classList.contains('close-qv')) {
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

        const imgSource = item.images && item.images.length > 0 ? item.images[0] : 'https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';

        htmlContent += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <img src="${imgSource}" alt="${item.name}" class="cart-item-img">
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
                    <button class="del-btn" onclick="removeFromCart(${index})">
                        🗑️ Eliminar
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

function sendWhatsApp() {
    if (cart.length === 0) {
        alert("Agrega al menos un repuesto para consultar la disponibilidad.");
        return;
    }
    const clientName = document.getElementById('customerName').value.trim();
    const clientPhone = document.getElementById('customerPhone').value.trim();

    if (clientName === "" || clientPhone === "") {
        alert("Por favor, ingresa tu Nombre y tu número de WhatsApp para registrar el pedido.");
        document.getElementById('customerName').focus();
        return;
    }

    let message = `Hola equipo de *NOVA RefriMotors*. Mi nombre es *${clientName}* y quisiera consultar la disponibilidad de los siguientes repuestos de su web:%0A%0A`;

    cart.forEach(item => {
        message += `• Código: *${item.id}* - (Cantidad: ${item.quantity})%0A`;
    });

    const whatsappURL = `https://wa.me/${NUMERO_WHATSAPP}?text=${message}`;
    window.open(whatsappURL, '_blank');
}

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

    // Restaurar filtro de letra
    const letter = params.get('letter');
    if (letter) {
        currentLetterFilter = letter;
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

