// ============================================================
// Configuración general del sitio (editable)
// ============================================================

export const SITE = {
  name: "Habitaciones GDL",
  tagline: "Renta para estudiantes en Guadalajara y Zapopan",
  description:
    "Habitaciones amuebladas en casas compartidas para estudiantes universitarios en Guadalajara y Zapopan. Servicios incluidos y ubicaciones cerca de universidades y transporte público.",
};

// Número de WhatsApp en formato internacional, sin "+", sin espacios.
// 52 (México) + 33 (Guadalajara) + 10855447
export const WHATSAPP_NUMBER = "523310855447";

// Mensaje predeterminado cuando alguien pulsa el botón de WhatsApp
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola, me interesa una habitación en renta. ¿Podría darme más información y agendar una visita?";

// Datos de contacto
export const CONTACT = {
  name: "Oneida Lobo",
  role: "Encargada de las propiedades",
  phone: "33 1085 5447",
  hours: "Lunes a sábado, 9:00 a 19:00",
  email: "",
};

// Universidades y centros de transporte cercanos a las zonas en general
export const NEARBY_PLACES = [
  {
    name: "CUCSH",
    type: "Universidad",
    description: "Centro Universitario de Ciencias Sociales y Humanidades",
  },
  {
    name: "CUCEI",
    type: "Universidad",
    description: "Centro Universitario de Ciencias Exactas e Ingenierías",
  },
  {
    name: "CUAAD",
    type: "Universidad",
    description: "Centro Universitario de Arte, Arquitectura y Diseño",
  },
  {
    name: "Universidad de Guadalajara",
    type: "Universidad",
    description: "Sede central y centros universitarios de la red",
  },
  {
    name: "Línea 3 del Tren Ligero",
    type: "Transporte",
    description: "Conexión directa con varios puntos de la ciudad",
  },
  {
    name: "Macrobús",
    type: "Transporte",
    description: "Servicio de transporte rápido por Calzada Independencia",
  },
];

// PIN simple para acceder a /admin (cambiar en producción a un auth real)
export const ADMIN_PIN = "1234";
