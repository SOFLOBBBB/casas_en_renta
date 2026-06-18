import Icon from "./Icon";
import { properties } from "../data/properties";
import { nearbySearchUrl } from "../utils/links";

// Orden enfocado en vida estudiantil: comodidad primero, emergencias al final.
const SERVICES = [
  {
    key: "cafeterias",
    label: "Cafeterías cercanas",
    query: "cafeterías",
    icon: "coffee",
    color: "olive",
    helper: "Espacios para estudiar",
  },
  {
    key: "supermercados",
    label: "Supermercados cercanos",
    query: "supermercados",
    icon: "cart",
    color: "olive",
    helper: "Despensa y comida",
  },
  {
    key: "farmacias",
    label: "Farmacias cercanas",
    query: "farmacias",
    icon: "pill",
    color: "slate-blue",
    helper: "Medicamentos cerca",
  },
  {
    key: "hospitales",
    label: "Hospitales cercanos",
    query: "hospitales",
    icon: "shield",
    color: "terra",
    helper: "Para emergencias",
  },
  {
    key: "transporte",
    label: "Transporte público cercano",
    query: "transporte público",
    icon: "bus",
    color: "slate-blue",
    helper: "Paradas y rutas",
  },
];

const COLOR_MAP = {
  olive: "bg-olive-100 text-olive-700 group-hover:bg-olive-200",
  "slate-blue":
    "bg-slate-blue-100 text-slate-blue-700 group-hover:bg-slate-blue-200",
  terra: "bg-terra-100 text-terra-700 group-hover:bg-terra-200",
};

export default function NearbyServicesSection() {
  return (
    <section id="servicios-cercanos" className="py-16 sm:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-semibold text-olive-700 uppercase tracking-wider mb-3">
            Servicios cercanos
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-blue-900">
            Lo que necesitas, a la mano
          </h2>
          <p className="mt-4 text-slate-blue-700 leading-relaxed">
            Cafeterías, supermercados, farmacias, transporte y hospitales muy
            cerca de cada propiedad. Cada botón abre una búsqueda en Google
            Maps a partir de la dirección real de la casa.
          </p>
        </div>

        <div className="space-y-6">
          {properties.map((p) => (
            <PropertyServicesBlock key={p.id} property={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PropertyServicesBlock({ property }) {
  return (
    <div className="rounded-3xl bg-white border border-cream-200 shadow-sm p-5 sm:p-7">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
        <div>
          <p className="text-[11px] font-semibold text-olive-700 uppercase tracking-wider">
            {property.zone}
          </p>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-blue-900">
            {property.name}
          </h3>
          <p className="text-sm text-slate-blue-600 flex items-start gap-1.5 mt-1">
            <Icon
              name="pin"
              className="w-4 h-4 text-terra-500 mt-0.5 shrink-0"
            />
            <span>{property.shortAddress}</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {SERVICES.map((s) => (
          <a
            key={s.key}
            href={nearbySearchUrl(s.query, property.mapsQuery)}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-start gap-2 p-3.5 rounded-2xl bg-cream-50 hover:bg-white border border-cream-200 hover:border-olive-200 transition shadow-sm"
            aria-label={`Buscar ${s.query} cerca de ${property.shortAddress} en Google Maps`}
          >
            <span
              className={`w-10 h-10 grid place-items-center rounded-xl transition ${
                COLOR_MAP[s.color]
              }`}
            >
              <Icon name={s.icon} className="w-5 h-5" />
            </span>
            <div className="min-w-0">
              <p className="font-semibold text-slate-blue-900 text-sm leading-tight">
                {s.label}
              </p>
              <p className="text-[11px] text-slate-blue-500 mt-0.5">
                {s.helper}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
