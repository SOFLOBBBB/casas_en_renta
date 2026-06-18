// ============================================================
// Catálogo de propiedades
// ------------------------------------------------------------
// Las fotos viven en public/images/<id-de-la-casa>/.
// La primera imagen del arreglo `images` es la portada
// (la que se ve en el card y como hero del modal).
// Para reordenar, cambia el orden del arreglo.
// Para agregar fotos nuevas, súbelas a la carpeta y agrégalas
// aquí con la ruta "/images/<id>/<archivo>.jpg".
// ============================================================

export const PRICE = "$3,500 MXN";
export const DEPOSIT_LABEL = "+ depósito";

export const DEFAULT_SERVICES = ["Agua", "Luz", "Gas", "WiFi"];
export const DEFAULT_ROOM_INCLUDES = [
  "Cama individual",
  "Clóset",
  "Escritorio",
  "Buró",
];
export const DEFAULT_COMMON_AREAS = [
  "Sala amueblada",
  "Comedor",
  "Cocina equipada",
  "Electrodomésticos básicos",
  "Utensilios de cocina",
  "Patio pequeño",
  "Lavadero",
  "Escoba y trapeador",
];
export const DEFAULT_RULES = [
  "No se permite instalar lavadora (por consumo de agua y luz)",
  "Áreas comunes compartidas con otros inquilinos",
  "Se firma contrato de arrendamiento",
];
export const DEFAULT_REQUIREMENTS = [
  "Copia de credencial de estudiante",
  "Copia del INE",
  "Depósito",
  "Primer mes de renta",
  "Firma de contrato",
];

export const properties = [
  {
    id: "ignacio_ramirez",
    name: "Casa Ignacio Ramírez",
    zone: "Niños Héroes, Guadalajara",
    address: "C. Ignacio Ramírez 1562, Niños Héroes, 44260 Guadalajara, Jal.",
    shortAddress: "C. Ignacio Ramírez 1562, Niños Héroes",
    city: "Guadalajara",
    defaultAvailableRooms: 2,
    price: PRICE,
    deposit: "Depósito requerido",
    description:
      "Habitación amueblada en casa compartida, ideal para estudiantes que buscan una zona conectada y tranquila.",
    longDescription:
      "Casa con muy buen ambiente, cerca de avenidas principales y con acceso fácil a transporte público. Excelente opción para estudiantes que quieren estar bien comunicados sin perder la calma del barrio.",
    highlights: [
      "Zona tranquila y bien comunicada",
      "Casa compartida con áreas comunes amplias",
      "Cerca de avenidas principales",
    ],
    services: DEFAULT_SERVICES,
    roomIncludes: DEFAULT_ROOM_INCLUDES,
    commonAreas: DEFAULT_COMMON_AREAS,
    rules: DEFAULT_RULES,
    requirements: DEFAULT_REQUIREMENTS,
    nearbyUniversities: [],
    images: [
      "/images/ignacio_ramirez/foto-04.jpg",
      "/images/ignacio_ramirez/foto-06.jpg",
      "/images/ignacio_ramirez/foto-07.jpg",
      "/images/ignacio_ramirez/foto-08.jpg",
      "/images/ignacio_ramirez/foto-05.jpg",
      "/images/ignacio_ramirez/foto-03.jpg",
      "/images/ignacio_ramirez/foto-11.jpg",
      "/images/ignacio_ramirez/foto-12.jpg",
      "/images/ignacio_ramirez/foto-02.jpg",
      "/images/ignacio_ramirez/foto-01.jpg",
      "/images/ignacio_ramirez/foto-09.jpg",
      "/images/ignacio_ramirez/foto-10.jpg",
    ],
    mapsQuery:
      "C. Ignacio Ramírez 1562, Niños Héroes, 44260 Guadalajara, Jal.",
    placeholderStyle: "placeholder-room",
  },
  {
    id: "mediero",
    name: "Casa El Mediero",
    zone: "Rinconada de La Azalea, Zapopan",
    address:
      "Mediero 516 21, Rinconada de La Azalea, Conjunto San Gilberto, 45158 Zapopan, Jal.",
    shortAddress: "Mediero 516 int. 21, Rinconada de La Azalea",
    city: "Zapopan",
    defaultAvailableRooms: 1,
    price: PRICE,
    deposit: "Depósito requerido",
    description:
      "Habitación amueblada en casa compartida con servicios incluidos y áreas comunes equipadas.",
    longDescription:
      "Espacio cómodo con habitaciones ya amuebladas, listas para mudarte. Todas las áreas comunes están equipadas para que solo te enfoques en tus estudios.",
    highlights: [
      "Casa lista para mudarte",
      "Cocina equipada y comedor",
      "Ambiente estudiantil",
    ],
    services: DEFAULT_SERVICES,
    roomIncludes: DEFAULT_ROOM_INCLUDES,
    commonAreas: DEFAULT_COMMON_AREAS,
    rules: DEFAULT_RULES,
    requirements: DEFAULT_REQUIREMENTS,
    nearbyUniversities: [],
    images: [
      "/images/mediero/foto-01.jpg",
      "/images/mediero/foto-09.jpg",
      "/images/mediero/foto-04.jpg",
      "/images/mediero/foto-07.jpg",
      "/images/mediero/foto-05.jpg",
      "/images/mediero/foto-02.jpg",
      "/images/mediero/foto-06.jpg",
      "/images/mediero/foto-08.jpg",
      "/images/mediero/foto-03.jpg",
    ],
    mapsQuery:
      "Mediero 516 21, Rinconada de La Azalea, Conjunto San Gilberto, 45158 Zapopan, Jal.",
    placeholderStyle: "placeholder-kitchen",
  },
  {
    id: "alcalde_barranquitas",
    name: "Casa Gonzalo Curiel / Alcalde Barranquitas",
    zone: "Alcalde Barranquitas, Guadalajara",
    address:
      "C. Gonzalo Curiel 357, Alcalde Barranquitas, 44270 Guadalajara, Jal.",
    shortAddress: "C. Gonzalo Curiel 357, Alcalde Barranquitas",
    city: "Guadalajara",
    defaultAvailableRooms: 1,
    price: PRICE,
    deposit: "Depósito requerido",
    description:
      "Ubicación muy práctica para estudiantes, especialmente cerca del Centro Universitario de Ciencias de la Salud (CUCS) y con buen acceso a transporte público.",
    longDescription:
      "Ubicada en Alcalde Barranquitas, una zona muy práctica para estudiantes, especialmente por su cercanía al Centro Universitario de Ciencias de la Salud, CUCS, además de tener acceso a transporte público como Macrobús y Línea 3 del Tren Ligero.",
    highlights: [
      "Muy cerca del CUCS (Ciencias de la Salud)",
      "Acceso a Macrobús y Línea 3 del Tren Ligero",
      "Zona práctica para vida estudiantil diaria",
    ],
    services: DEFAULT_SERVICES,
    roomIncludes: DEFAULT_ROOM_INCLUDES,
    commonAreas: DEFAULT_COMMON_AREAS,
    rules: DEFAULT_RULES,
    requirements: DEFAULT_REQUIREMENTS,
    nearbyUniversities: [
      {
        name: "Centro Universitario de Ciencias de la Salud, CUCS",
        short: "CUCS",
      },
    ],
    images: [
      "/images/alcalde_barranquitas/foto-04.jpg",
      "/images/alcalde_barranquitas/foto-02.jpg",
      "/images/alcalde_barranquitas/foto-07.jpg",
      "/images/alcalde_barranquitas/foto-01.jpg",
      "/images/alcalde_barranquitas/foto-05.jpg",
      "/images/alcalde_barranquitas/foto-03.jpg",
      "/images/alcalde_barranquitas/foto-06.jpg",
      "/images/alcalde_barranquitas/foto-08.jpg",
      "/images/alcalde_barranquitas/foto-09.jpg",
      "/images/alcalde_barranquitas/foto-10.jpg",
      "/images/alcalde_barranquitas/foto-11.jpg",
      "/images/alcalde_barranquitas/foto-12.jpg",
      "/images/alcalde_barranquitas/foto-13.jpg",
    ],
    mapsQuery:
      "C. Gonzalo Curiel 357, Alcalde Barranquitas, 44270 Guadalajara, Jal.",
    placeholderStyle: "placeholder-living",
  },
];

// Helper: encuentra una propiedad por id
export function getPropertyById(id) {
  return properties.find((p) => p.id === id);
}
