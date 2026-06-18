import Icon from "./Icon";
import { properties } from "../data/properties";
import { NEARBY_PLACES } from "../data/site";
import {
  mapsSearchUrl,
  mapsDirectionsUrl,
  nearbySearchUrl,
} from "../utils/links";

export default function LocationSection() {
  return (
    <section id="ubicacion" className="py-16 sm:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-olive-700 uppercase tracking-wider mb-3">
            Ubicación y transporte
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-blue-900">
            Bien conectadas con tu universidad
          </h2>
          <p className="mt-4 text-slate-blue-700 leading-relaxed">
            Cada propiedad tiene acceso rápido a Google Maps para que calcules
            tu ruta exacta. Consulta la opción más rápida desde tu punto de
            salida.
          </p>
        </div>

        {/* Universidades / transporte cercanos */}
        <div className="mb-12">
          <h3 className="font-display text-xl font-bold text-slate-blue-900 mb-5">
            Cerca de
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {NEARBY_PLACES.map((place) => (
              <div
                key={place.name}
                className="p-5 rounded-2xl bg-white border border-cream-200 shadow-sm flex items-start gap-3"
              >
                <span
                  className={`w-11 h-11 shrink-0 grid place-items-center rounded-xl ${
                    place.type === "Universidad"
                      ? "bg-olive-100 text-olive-700"
                      : "bg-terra-100 text-terra-700"
                  }`}
                >
                  <Icon
                    name={place.type === "Universidad" ? "graduation" : "bus"}
                    className="w-5 h-5"
                  />
                </span>
                <div className="min-w-0">
                  <p className="font-display font-bold text-slate-blue-900">
                    {place.name}
                  </p>
                  <p className="text-xs text-olive-700 uppercase tracking-wider mt-0.5">
                    {place.type}
                  </p>
                  <p className="mt-1.5 text-sm text-slate-blue-700 leading-relaxed">
                    {place.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-blue-500 italic">
            Consulta la ruta más rápida en Google Maps según tu punto de
            salida.
          </p>
        </div>

        {/* Rutas por propiedad */}
        <div>
          <h3 className="font-display text-xl font-bold text-slate-blue-900 mb-5">
            Rutas por propiedad
          </h3>
          <div className="grid lg:grid-cols-3 gap-5">
            {properties.map((p) => (
              <PropertyRouteCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PropertyRouteCard({ property: p }) {
  const universities = p.nearbyUniversities || [];
  const hasFeaturedUni = universities.length > 0;

  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-white border border-cream-200 shadow-sm flex flex-col">
      <p className="text-[11px] font-semibold text-olive-700 uppercase tracking-wider">
        {p.zone}
      </p>
      <h4 className="font-display text-lg font-bold text-slate-blue-900 mt-1">
        {p.name}
      </h4>
      <p className="text-sm text-slate-blue-600 mt-1 flex items-start gap-1.5">
        <Icon
          name="pin"
          className="w-4 h-4 text-terra-500 mt-0.5 shrink-0"
        />
        {p.shortAddress}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-2">
        <RouteBtn
          icon="pin"
          label="Ver ubicación"
          href={mapsSearchUrl(p.mapsQuery)}
        />
        <RouteBtn
          icon="bus"
          label="Transporte"
          href={mapsDirectionsUrl(p.mapsQuery, "transit")}
        />
        <RouteBtn
          icon="bike"
          label="Bicicleta"
          href={mapsDirectionsUrl(p.mapsQuery, "bicycling")}
        />
        <RouteBtn
          icon="walk"
          label="Caminando"
          href={mapsDirectionsUrl(p.mapsQuery, "walking")}
        />
      </div>

      {/* Centros universitarios cercanos */}
      <div className="mt-6 pt-5 border-t border-cream-200">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-8 grid place-items-center rounded-lg bg-olive-100 text-olive-700">
            <Icon name="graduation" className="w-4 h-4" />
          </span>
          <h5 className="font-display font-bold text-slate-blue-900 text-sm">
            Centros universitarios cercanos
          </h5>
        </div>

        {hasFeaturedUni && (
          <ul className="space-y-2 mb-3">
            {universities.map((u) => (
              <li
                key={u.short || u.name}
                className="flex items-start gap-2 text-sm text-slate-blue-700"
              >
                <Icon
                  name="check"
                  className="w-4 h-4 text-olive-600 mt-0.5 shrink-0"
                  strokeWidth={2.4}
                />
                <span>{u.name}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {universities.map((u) => (
            <RouteBtn
              key={`route-${u.short || u.name}`}
              icon="graduation"
              label={`Ruta a ${u.short || u.name}`}
              href={mapsDirectionsUrl(
                `${u.name} desde ${p.mapsQuery}`,
                "driving"
              )}
            />
          ))}
          <RouteBtn
            icon="pin"
            label="Buscar universidades cercanas"
            href={nearbySearchUrl("universidades", p.mapsQuery)}
          />
        </div>

        <p className="mt-2 text-[11px] text-slate-blue-500 italic">
          Consulta la ruta más rápida en Google Maps según tu punto de salida.
        </p>
      </div>
    </div>
  );
}

function RouteBtn({ icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-cream-100 hover:bg-olive-100 text-slate-blue-800 hover:text-olive-800 font-semibold text-xs border border-cream-200 transition text-center"
    >
      <Icon name={icon} className="w-4 h-4 shrink-0" />
      <span className="truncate">{label}</span>
    </a>
  );
}
