import { useEffect, useState } from "react";
import Icon from "./Icon";
import {
  mapsSearchUrl,
  mapsDirectionsUrl,
  whatsappForProperty,
  nearbySearchUrl,
} from "../utils/links";

const PLACEHOLDER_STYLES = [
  "placeholder-room",
  "placeholder-kitchen",
  "placeholder-living",
];

export default function PropertyDetail({ property, onClose }) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => setActiveImage(0), [property]);

  // Lock scroll + atajos de teclado (Esc, flechas izq/der)
  useEffect(() => {
    if (!property) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const total = property.images?.length || PLACEHOLDER_STYLES.length;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight")
        setActiveImage((i) => (i + 1) % total);
      if (e.key === "ArrowLeft")
        setActiveImage((i) => (i - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [property, onClose]);

  if (!property) return null;

  const hasImages = property.images && property.images.length > 0;
  const slots = hasImages ? property.images : PLACEHOLDER_STYLES;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Detalles de ${property.name}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-blue-900/60 backdrop-blur-sm animate-fade-in-up"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative bg-cream-50 w-full sm:max-w-4xl max-h-[92vh] sm:max-h-[88vh] rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-cream-200 bg-white/80 backdrop-blur sticky top-0 z-10">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold text-olive-700 uppercase tracking-wider">
              {property.zone}
            </p>
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-blue-900 truncate">
              {property.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 grid place-items-center rounded-full bg-cream-100 hover:bg-cream-200 text-slate-blue-800 transition"
            aria-label="Cerrar"
          >
            <Icon name="close" className="w-5 h-5" />
          </button>
        </div>

        {/* Body scrollable */}
        <div className="overflow-y-auto px-5 sm:px-7 py-6 space-y-7">
          {/* Galería */}
          <div>
            <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-cream-200 shadow-sm bg-cream-100 group">
              {hasImages ? (
                <img
                  src={slots[activeImage]}
                  alt={`${property.name} - foto ${activeImage + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className={`w-full h-full ${slots[activeImage]} flex items-center justify-center`}
                >
                  <Icon
                    name="home"
                    className="w-20 h-20 text-white/70"
                    strokeWidth={1.3}
                  />
                </div>
              )}

              {slots.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImage(
                        (activeImage - 1 + slots.length) % slots.length
                      )
                    }
                    aria-label="Foto anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 grid place-items-center rounded-full bg-white/90 hover:bg-white text-slate-blue-800 shadow-md transition opacity-0 group-hover:opacity-100 focus:opacity-100"
                  >
                    <Icon
                      name="arrow"
                      className="w-4 h-4 rotate-180"
                      strokeWidth={2.2}
                    />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImage((activeImage + 1) % slots.length)
                    }
                    aria-label="Foto siguiente"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 grid place-items-center rounded-full bg-white/90 hover:bg-white text-slate-blue-800 shadow-md transition opacity-0 group-hover:opacity-100 focus:opacity-100"
                  >
                    <Icon name="arrow" className="w-4 h-4" strokeWidth={2.2} />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-slate-blue-900/70 backdrop-blur text-cream-50 text-xs font-semibold px-3 py-1 rounded-full">
                    {activeImage + 1} / {slots.length}
                  </div>
                </>
              )}
            </div>

            {slots.length > 1 && (
              <div className="mt-3 grid grid-cols-4 sm:grid-cols-6 gap-2">
                {slots.map((slot, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    aria-label={`Ver foto ${i + 1}`}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition ${
                      activeImage === i
                        ? "border-olive-500 ring-2 ring-olive-200"
                        : "border-cream-200 hover:border-olive-300 opacity-80 hover:opacity-100"
                    }`}
                  >
                    {hasImages ? (
                      <img
                        src={slot}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className={`w-full h-full ${slot}`} />
                    )}
                  </button>
                ))}
              </div>
            )}

            {!hasImages && (
              <p className="mt-3 text-xs text-slate-blue-500 italic">
                Las fotos reales se agregarán pronto. Mientras tanto, puedes
                agendar una visita para conocer la habitación.
              </p>
            )}
          </div>

          {/* Precio + dirección */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-cream-200">
            <div>
              <p className="text-xs uppercase tracking-wider text-olive-700 font-semibold">
                Renta mensual
              </p>
              <p className="font-display text-2xl sm:text-3xl font-bold text-slate-blue-900">
                {property.price}{" "}
                <span className="text-base text-slate-blue-500 font-medium">
                  + depósito
                </span>
              </p>
            </div>
            <p className="flex items-start gap-2 text-sm text-slate-blue-700 max-w-sm">
              <Icon
                name="pin"
                className="w-5 h-5 text-terra-500 mt-0.5 shrink-0"
              />
              {property.address}
            </p>
          </div>

          {/* Descripción */}
          <div>
            <h4 className="font-display text-lg font-bold text-slate-blue-900 mb-2">
              Sobre esta casa
            </h4>
            <p className="text-slate-blue-700 leading-relaxed">
              {property.longDescription || property.description}
            </p>
          </div>

          {/* Grids: room / common / services */}
          <div className="grid sm:grid-cols-2 gap-5">
            <DetailBox
              icon="bed"
              color="olive"
              title="Tu habitación incluye"
              items={property.roomIncludes}
            />
            <DetailBox
              icon="sofa"
              color="terra"
              title="Áreas comunes"
              items={property.commonAreas}
            />
            <DetailBox
              icon="drop"
              color="slate-blue"
              title="Servicios incluidos"
              items={property.services}
            />
            <DetailBox
              icon="shield"
              color="olive"
              title="Reglas importantes"
              items={property.rules}
            />
          </div>

          {/* Requisitos */}
          <div className="p-5 rounded-2xl bg-olive-50 border border-olive-100">
            <h4 className="font-display text-lg font-bold text-slate-blue-900 mb-3 flex items-center gap-2">
              <Icon
                name="document"
                className="w-5 h-5 text-olive-700"
              />
              Requisitos para rentar
            </h4>
            <ul className="grid sm:grid-cols-2 gap-2">
              {property.requirements.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-2 text-sm text-slate-blue-800"
                >
                  <Icon
                    name="check"
                    className="w-4 h-4 text-olive-600 mt-0.5 shrink-0"
                    strokeWidth={2.4}
                  />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Mapa + acciones de ruta */}
          <div>
            <h4 className="font-display text-lg font-bold text-slate-blue-900 mb-3">
              Ubicación y cómo llegar
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              <MapButton
                icon="pin"
                label="Ver ubicación"
                href={mapsSearchUrl(property.mapsQuery)}
              />
              <MapButton
                icon="bus"
                label="Transporte público"
                href={mapsDirectionsUrl(property.mapsQuery, "transit")}
              />
              <MapButton
                icon="bike"
                label="En bicicleta"
                href={mapsDirectionsUrl(property.mapsQuery, "bicycling")}
              />
              <MapButton
                icon="walk"
                label="Caminando"
                href={mapsDirectionsUrl(property.mapsQuery, "walking")}
              />
            </div>
          </div>

          {/* Servicios cercanos */}
          <div>
            <h4 className="font-display text-lg font-bold text-slate-blue-900 mb-3">
              Servicios cercanos
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              <MapButton
                icon="shield"
                label="Hospitales"
                href={nearbySearchUrl("hospitales", property.mapsQuery)}
              />
              <MapButton
                icon="drop"
                label="Farmacias"
                href={nearbySearchUrl("farmacias", property.mapsQuery)}
              />
              <MapButton
                icon="utensils"
                label="Supermercados"
                href={nearbySearchUrl("supermercados", property.mapsQuery)}
              />
              <MapButton
                icon="bus"
                label="Transporte"
                href={nearbySearchUrl(
                  "transporte público",
                  property.mapsQuery
                )}
              />
            </div>
            <p className="mt-2 text-xs text-slate-blue-500 italic">
              Cada botón abre Google Maps con resultados cercanos a la
              dirección de la casa.
            </p>
          </div>
        </div>

        {/* Footer sticky con CTA */}
        <div className="px-5 sm:px-7 py-4 border-t border-cream-200 bg-white/95 backdrop-blur sticky bottom-0">
          <a
            href={whatsappForProperty(property)}
            target="_blank"
            rel="noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold shadow-md hover:shadow-lg transition-all"
          >
            <Icon name="whatsapp" className="w-5 h-5" />
            Agendar visita por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

const COLOR_MAP = {
  olive: "bg-olive-100 text-olive-700",
  "slate-blue": "bg-slate-blue-100 text-slate-blue-700",
  terra: "bg-terra-100 text-terra-700",
};

function DetailBox({ icon, color, title, items }) {
  return (
    <div className="p-5 rounded-2xl bg-white border border-cream-200">
      <div className="flex items-center gap-2 mb-3">
        <span
          className={`w-9 h-9 grid place-items-center rounded-xl ${COLOR_MAP[color]}`}
        >
          <Icon name={icon} className="w-5 h-5" />
        </span>
        <h5 className="font-display font-bold text-slate-blue-900">{title}</h5>
      </div>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm text-slate-blue-700"
          >
            <Icon
              name="check"
              className="w-4 h-4 text-olive-600 mt-0.5 shrink-0"
              strokeWidth={2.4}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MapButton({ icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full bg-cream-100 hover:bg-cream-200 text-slate-blue-800 font-semibold text-xs sm:text-sm border border-cream-200 transition text-center"
    >
      <Icon name={icon} className="w-4 h-4 shrink-0" />
      <span className="truncate">{label}</span>
    </a>
  );
}
