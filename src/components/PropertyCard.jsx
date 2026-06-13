import Icon from "./Icon";
import { mapsDirectionsUrl, whatsappForProperty } from "../utils/links";

export default function PropertyCard({ property, onOpen }) {
  return (
    <article className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-cream-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Imagen / placeholder */}
      <div className="relative h-52 sm:h-56 overflow-hidden bg-cream-100">
        {property.images && property.images.length > 0 ? (
          <img
            src={property.images[0]}
            alt={property.name}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div
            className={`w-full h-full ${property.placeholderStyle} group-hover:scale-105 transition-transform duration-500 flex items-center justify-center`}
          >
            <Icon
              name="home"
              className="w-16 h-16 text-white/70"
              strokeWidth={1.4}
            />
          </div>
        )}

        <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-xs font-semibold text-olive-800 shadow-sm">
          {property.zone}
        </div>
        <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-olive-600 text-cream-50 text-xs font-bold shadow-sm">
          {property.price} <span className="font-normal opacity-90">/ mes</span>
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h3 className="font-display text-xl font-bold text-slate-blue-900">
          {property.name}
        </h3>
        <p className="mt-1 text-sm text-slate-blue-600 flex items-center gap-1.5">
          <Icon name="pin" className="w-4 h-4 text-terra-500 shrink-0" />
          <span className="truncate">{property.shortAddress}</span>
        </p>

        <p className="mt-3 text-sm text-slate-blue-700 leading-relaxed line-clamp-3">
          {property.description}
        </p>

        {/* Servicios chips */}
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {property.services.map((s) => (
            <li
              key={s}
              className="text-xs px-2.5 py-1 rounded-full bg-olive-50 text-olive-800 border border-olive-100"
            >
              {s}
            </li>
          ))}
        </ul>

        {/* Highlights */}
        {property.highlights && (
          <ul className="mt-4 space-y-1.5">
            {property.highlights.slice(0, 2).map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-sm text-slate-blue-700"
              >
                <Icon
                  name="check"
                  className="w-4 h-4 text-olive-600 mt-0.5 shrink-0"
                  strokeWidth={2.4}
                />
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* Acciones */}
        <div className="mt-6 pt-5 border-t border-cream-200 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onOpen(property)}
            className="col-span-2 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-slate-blue-800 hover:bg-slate-blue-900 text-cream-50 font-semibold text-sm transition"
          >
            Ver detalles
            <Icon name="arrow" className="w-4 h-4" />
          </button>

          <a
            href={mapsDirectionsUrl(property.mapsQuery, "driving")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full bg-cream-100 hover:bg-cream-200 text-slate-blue-800 font-semibold text-sm border border-cream-200 transition"
          >
            <Icon name="pin" className="w-4 h-4" />
            Cómo llegar
          </a>
          <a
            href={whatsappForProperty(property)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold text-sm transition"
          >
            <Icon name="whatsapp" className="w-4 h-4" />
            Agendar
          </a>
        </div>
      </div>
    </article>
  );
}
