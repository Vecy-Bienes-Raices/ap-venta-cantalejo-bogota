/**
 * 🌍 CONFIGURACIÓN UNIVERSAL VECY - PLANTILLA MAESTRA (LIMPIA)
 * 
 * INSTRUCCIONES:
 * No editar esta plantilla directamente si desea crear un nuevo inmueble.
 * Use el script 'generator_vecy.py' para generar una nueva ficha.
 */

const propertyConfig = {
  // 1. SEO (Para Google y compartir en redes)
  seo: {
    title: "INMUEBLE_TITULO_SEO",
    description: "INMUEBLE_DESCRIPCION_SEO",
    keywords: "Venta, Apartamento, Casa, Lujo, Inmobiliaria",
    ogUrl: "",
    ogImage: "assets/1.png",
    author: "Vecy Bienes Raíces",
    copyright: "2026"
  },
  
  // 2. Encabezado Principal
  infoPrincipal: {
    headerBadge: "PROPIEDAD_ESTADO", // Ej: "❤️ ¡Match Venta! 💖"
    tituloHtml: "TITULO_PRINCIPAL_INMUEBLE",
    precioVenta: "$0",
    valorAdmin: "$0",
    labelExtra: "💵 Administración"
  },

  // 3. Rejilla de Detalles (Iconos y Datos Clave)
  detalles: [
    { label: "Área Const.", value: "0 m²", icon: "📐" },
    { label: "Habitaciones", value: "0", icon: "🛏️" },
    { label: "Baños", value: "0", icon: "🚿" },
    { label: "Parqueaderos", value: "0", icon: "🚗" },
    { label: "Antigüedad", value: "Años", icon: "🏗️" },
    { label: "Estrato", value: "0", icon: "✨" },
    { label: "Piso", value: "0", icon: "🏢" },
    { label: "Ubicación", value: "BARRIO_NOMBRE", icon: "📍" }
  ],

  // 4. Características Internas (Lista izquierda)
  caracteristicasInternas: [
    { name: "CARACTERISTICA_1", emoji: "✨" }
  ],
  destacadoInterno: "DESCRIPCION_DESTACADA_INTERNA",

  // 5. Características Externas (Lista derecha)
  caracteristicasExternas: [
    { name: "CARACTERISTICA_EXT_1", emoji: "🏢" }
  ],
  destacadoUbicacion: "DESCRIPCION_ENTORNO_UBICACION",

  // 6. Mapa (Google Maps Embed)
  mapa: {
    urlEmbed: "https://maps.google.com/maps?q=Bogota&t=&z=15&ie=UTF8&iwloc=&output=embed", 
    titulo: "Ubicación del Inmueble"
  },

  // 7. Descripción Final / Análisis de Inversión
  descripcionFinal: {
    titulo: "💖 Tu Nuevo Estilo de Vida",
    texto: `
    <div class="roi-item">
      <p>ESCRIBA_AQUI_LA_DESCRIPCION_DETALLADA</p>
    </div>`
  },

  // 8. Multimedia (Fotos y Video)
  multimedia: {
    videoUrl: "assets/video.mp4",
    videoThumbnail: "assets/1.png",
    imagesCount: 0,
    imagePrefix: "assets/",
    imageExtension: ".jpg",
    imagesList: []
  },

  // 9. Botón Compartir (Texto de WhatsApp)
  share: {
    whatsappText: `🏡 *¡HOLA! MIRA ESTE INMUEBLE:*
    
💰 *Precio:* $0
📍 *Ubicación:* BARRIO_CIUDAD
✨ *Lo mejor:* ...

🔗 *Ver Fotos y Detalles:*
[LINK_DE_TU_PAGINA_WEB]`
  }
};
