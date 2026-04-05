/**
 * 🌍 CONFIGURACIÓN UNIVERSAL VECY - APARTAMENTO CANTALEJO
 * 
 * Datos actualizados: 04/04/2026
 */

const propertyConfig = {
  // 1. SEO Mágico: Algoritmos de Búsqueda y Redes (Alto CTR)
  seo: {
    title: "Apartamento en Venta Cantalejo Suba | Oportunidad Norte de Bogotá",
    description: "Inversión en Cantalejo. Apartamento iluminado de 71m² (3 Hab + Estudio + Balcón). Zona de alta valorización cerca a C.C. La Colina y zonas comerciales.",
    keywords: "Venta Apartamento Cantalejo, Inversión Suba Bogotá, Apartamento cerca a La Colina, Vecy Bienes Raíces, Apartamento con Balcón Suba",
    ogUrl: "https://ap-cantalejo-bogota.netlify.app/",
    propertyId: "ID-BOG-CS01",
    ogImage: "assets/social-cover.jpeg",
    author: "Vecy Bienes Raíces",
    copyright: "2026"
  },
  
  // 2. Encabezado Principal
  infoPrincipal: {
    headerBadge: "❤️ ¡Oportunidad en Suba! 🏡",
    tituloHtml: "Acogedor Apartamento en Cantalejo",
    precioVenta: "$470.000.000",
    valorAdmin: "$500.000",
    labelExtra: "💵 Administración"
  },

  // 3. Rejilla de Detalles
  detalles: [
    { label: "Área Const.", value: "71 m²", icon: "📐" },
    { label: "Área Privada", value: "64.44 m²", icon: "🏠" },
    { label: "Habitaciones", value: "3", icon: "🛏️" },
    { label: "Baños", value: "2", icon: "🚿" },
    { label: "Parqueadero", value: "1 (Cubierto)", icon: "🚗" },
    { label: "Antigüedad", value: "8 Años", icon: "🏗️" },
    { label: "Estrato", value: "3", icon: "✨" },
    { label: "Piso", value: "2", icon: "🏢" }
  ],

  // 4. Características Internas
  caracteristicasInternas: [
    { name: "Balc\u00f3n en \u00e1rea social", emoji: "\ud83c\udf05" },
    { name: "Estudio / Oficina", emoji: "💻" },
    { name: "Cocina Integral Funcional", emoji: "🍳" },
    { name: "Zona Lavandería Indep.", emoji: "🧺" },
    { name: "Depósito", emoji: "📦" }
  ],
  destacadoInterno: "Al recorrer el pasillo, encuentras un espacio de estudio ideal para home office o lectura, conectando perfectamente hacia el área privada. La habitación principal disfruta de vista directa al parque y baño privado.",

  // 5. Características Externas
  caracteristicasExternas: [
    { name: "Vigilancia 24/7", emoji: "🛡️" },
    { name: "Gimnasio Dotado", emoji: "🏋️" },
    { name: "Terraza BBQ Panorámica", emoji: "🍖" },
    { name: "2 Ascensores", emoji: "🛗" },
    { name: "Portería / Sala Espera", emoji: "🏠" },
    { name: "Acceso Pavimentado", emoji: "🛣️" },
    { name: "Paradero SITP a media cuadra", emoji: "🚌" },
    { name: "Cerca C.C. La Colina", emoji: "🛍️" },
    { name: "Parques Cercanos", emoji: "🌳" }
  ],
  destacadoUbicacion: "Ubicado estratégicamente en una zona residencial y comercial privilegiada de Suba. A pasos de centros comerciales como La Colina y Santafé, rodeado de parques y con fácil acceso a comercio variado.",

  // 6. Mapa
  mapa: {
    urlEmbed: "https://maps.google.com/maps?q=Cantalejo+Suba+Bogota&t=&z=15&ie=UTF8&iwloc=&output=embed", 
    titulo: "Ubicación en Cantalejo"
  },

  // 7. Descripción Final y Análisis
  descripcionFinal: {
    titulo: "💖 Tu Nuevo Hogar te Espera",
    texto: `
    <div class="roi-item">
      <p>Este inmueble en <strong>segundo piso</strong> ofrece la combinación perfecta de comodidad y ubicación. El edificio, construido en una sola torre hace 8 años, garantiza exclusividad.</p>
      <ul class="roi-list">
        <li>💰 <strong>Precio:</strong> $470 Millones (Negociables).</li>
        <li>📝 <strong>Estado Jurídico:</strong> Crédito hipotecario vigente.</li>

        <li>🔑 <strong>Estado:</strong> Actualmente ocupado.</li>
      </ul>
      <p>Una excelente opción tanto para vivienda familiar como para inversión por su alta valorización en el sector del Norte de Bogotá.</p>
      <div style="margin-top: 30px; text-align: center;">
          <a href="analisis.html" class="btn-analisis">
           📋 VER MÁS DETALLES
          </a>
      </div>
    </div>`
  },

  // 8. Multimedia
  multimedia: {
    videoUrl: "assets/Apartamento en venta en Cantalejo Bogotá.mp4",
    videoThumbnail: "assets/social-cover.jpeg",
    imagesCount: 24, // Se mostrarán las 24 fotos disponibles
    imagePrefix: "assets/",
    imageExtension: ".jpeg",
    imagesList: [
      "assets/1.jpeg", "assets/2.jpeg", "assets/3.jpeg", "assets/4.jpeg",
      "assets/5.jpeg", "assets/6.jpeg", "assets/7.jpeg", "assets/8.jpeg",
      "assets/9.jpeg", "assets/10.jpeg", "assets/11.jpeg", "assets/12.jpeg",
      "assets/13.jpeg", "assets/14.jpeg", "assets/15.jpeg", "assets/16.jpeg",
      "assets/17.jpeg", "assets/18.jpeg", "assets/19.jpeg", "assets/20.jpeg",
      "assets/21.jpeg", "assets/22.jpeg", "assets/23.jpeg", "assets/24.jpeg"
    ]
  },

  // 9. Botón Compartir
  share: {
    whatsappText: `🏡 *APARTAMENTO EN VENTA CANTALEJO (SUBA) - BOGOTÁ:*
    
💰 *Precio: $470.000.000* (Negociables)
📍 *Ubicación:* Sector Cantalejo, Cerca a C.C. La Colina
📏 *Distribución:* 71m², 3 Habitaciones + Estudio + Balcón
✨ *Destacado:* Alta valorización. Conjunto con Gimnasio, Terraza BBQ Panorámica y vista libre.

🔗 *Mira las fotos, video y Ficha Técnica aquí:* 👇
https://ap-cantalejo-bogota.netlify.app/

#ApartamentoEnVentaBogota #CantalejoSuba #InversionInmobiliaria #ViviendaFamiliarBogota #LaColinaSuba #VecyBienesRaices`
  }
};

