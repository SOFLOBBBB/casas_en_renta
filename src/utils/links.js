import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MESSAGE } from "../data/site";

// ============================================================
// Helpers para generar links externos (Google Maps y WhatsApp)
// ============================================================

/**
 * Búsqueda de un lugar en Google Maps.
 * @param {string} query
 */
export function mapsSearchUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/**
 * Direcciones (rutas) en Google Maps.
 * @param {string} destination
 * @param {"transit"|"bicycling"|"walking"|"driving"} mode
 */
export function mapsDirectionsUrl(destination, mode = "driving") {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    destination
  )}&travelmode=${mode}`;
}

/**
 * Búsqueda de un tipo de servicio cerca de una dirección.
 * Por ejemplo: nearbySearchUrl("hospitales", "C. Ignacio Ramírez 1562 Guadalajara")
 */
export function nearbySearchUrl(query, near) {
  return mapsSearchUrl(`${query} cerca de ${near}`);
}

// ----- WhatsApp ---------------------------------------------

/**
 * Link de WhatsApp con mensaje prellenado.
 */
export function whatsappUrl(customMessage) {
  const message = customMessage || WHATSAPP_DEFAULT_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * WhatsApp con mensaje orientado a una propiedad específica.
 */
export function whatsappForProperty(property) {
  const msg = `Hola, me interesa una habitación en ${property.name} (${property.shortAddress}). ¿Podría darme más información y agendar una visita?`;
  return whatsappUrl(msg);
}
