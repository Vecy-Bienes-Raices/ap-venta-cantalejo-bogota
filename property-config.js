/**
 * 🌍 CONFIGURACIÓN UNIVERSAL VECY - APARTAMENTO CANTALEJO
 * 
 * Datos actualizados: 02/02/2026
 */

const propertyConfig = {
  // 1. SEO (Para Google y compartir en redes)
  seo: {
    title: "Venta Apartamento Cantalejo Suba - 3 Habitaciones | Vecy Bienes Raíces",
    description: "Oportunidad en Cantalejo, Suba. Apartamento de 71m², 3 habitaciones, estudio y balcón. Conjunto residencial con gimnasio y BBQ. Cerca a C.C. La Colina.",
    keywords: "Apartamento en Venta, Cantalejo, Suba, Bogotá, 3 Habitaciones, Estudio, Balcón, Gimnasio, La Colina",
    ogUrl: "https://ap-cantalejo-bogota.netlify.app/",
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
    { label: "Área Privada", value: "64 m²", icon: "🏠" },
    { label: "Habitaciones", value: "3", icon: "🛏️" },
    { label: "Baños", value: "2", icon: "🚿" },
    { label: "Parqueadero", value: "1 (Cubierto)", icon: "🚗" },
    { label: "Antigüedad", value: "8 Años", icon: "🏗️" },
    { label: "Estrato", value: "3", icon: "✨" },
    { label: "Piso", value: "2", icon: "🏢" }
  ],

  // 4. Características Internas
  caracteristicasInternas: [
    { name: "Balcón Exterior", emoji: "🌅" },
    { name: "Estudio / Oficina", emoji: "�" },
    { name: "Cocina Integral Funcional", emoji: "🍳" },
    { name: "Zona Lavandería Indep.", emoji: "🧺" },
    { name: "Depósito", emoji: "📦" },
    { name: "Vista al Parque (Ppal)", emoji: "🌳" }
  ],
  destacadoInterno: "Al recorrer el pasillo, encuentras un espacio de estudio ideal para home office o lectura, conectando perfectamente hacia el área privada. La habitación principal disfruta de vista directa al parque y baño privado.",

  // 5. Características Externas
  caracteristicasExternas: [
    { name: "Gimnasio Dotado", emoji: "🏋️" },
    { name: "Terraza BBQ Panorámica", emoji: "🍖" },
    { name: "2 Ascensores", emoji: "🛗" },
    { name: "Portería / Sala Espera", emoji: "🛡️" },
    { name: "Cerca C.C. La Colina", emoji: "🛍️" },
    { name: "Parques Cercanos", emoji: "�" }
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
    </div>`
  },

  // 8. Multimedia
  multimedia: {
    videoUrl: "assets/Apartamento en venta en Cantalejo Bogotá.mp4",
    videoThumbnail: "assets/social-cover.jpeg",
    imagesCount: 24, // Se mostrarán las 24 fotos disponibles
    imagePrefix: "assets/",
    imageExtension: ".jpeg",
    imagesList: []
  },

  // 9. Botón Compartir
  share: {
    whatsappText: `🏡 *APARTAMENTO EN VENTA CANTALEJO, BOGOTÁ:*
    
💰 *Precio:* $470.000.000
📍 *Ubicación:* Cantalejo, Suba - Bogotá
✨ *Lo mejor:* 71m², Estudio, Balcón y zonas sociales completas.

🔗 *Ver más detalles:* 👇
https://ap-cantalejo-bogota.netlify.app/`
  }
};
