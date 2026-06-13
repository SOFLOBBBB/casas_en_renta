import Icon from "./Icon";

const SERVICES = [
  { icon: "drop", label: "Agua", color: "slate-blue" },
  { icon: "bolt", label: "Luz", color: "terra" },
  { icon: "flame", label: "Gas", color: "terra" },
  { icon: "wifi", label: "Internet / WiFi", color: "slate-blue" },
];

const ROOM = [
  { icon: "bed", label: "Cama individual" },
  { icon: "home", label: "Clóset" },
  { icon: "document", label: "Escritorio" },
  { icon: "sofa", label: "Buró" },
];

const COMMON = [
  { icon: "sofa", label: "Sala amueblada" },
  { icon: "utensils", label: "Comedor" },
  { icon: "utensils", label: "Cocina equipada" },
  { icon: "home", label: "Patio pequeño" },
  { icon: "drop", label: "Lavadero" },
  { icon: "sparkle", label: "Escoba y trapeador" },
];

const COLOR_MAP = {
  olive: "bg-olive-100 text-olive-700",
  "slate-blue": "bg-slate-blue-100 text-slate-blue-700",
  terra: "bg-terra-100 text-terra-700",
};

export default function IncludedServices() {
  return (
    <section id="incluye" className="py-16 sm:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-olive-700 uppercase tracking-wider mb-3">
            Qué incluye tu renta
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-blue-900">
            Mudate sin comprar nada
          </h2>
          <p className="mt-4 text-slate-blue-700 leading-relaxed">
            Tu renta mensual incluye <strong>agua, luz, gas e internet</strong>.
            La habitación ya está amueblada con cama individual, clóset,
            escritorio y buró. También puedes usar las áreas comunes como sala,
            comedor, cocina equipada, patio y lavadero.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Servicios */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-cream-200 shadow-sm">
            <h3 className="font-display text-lg font-bold text-slate-blue-900 mb-5">
              Servicios incluidos
            </h3>
            <ul className="grid grid-cols-2 gap-3">
              {SERVICES.map((s) => (
                <li
                  key={s.label}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-cream-50 border border-cream-200"
                >
                  <span
                    className={`w-9 h-9 grid place-items-center rounded-xl ${
                      COLOR_MAP[s.color] || COLOR_MAP.olive
                    }`}
                  >
                    <Icon name={s.icon} className="w-5 h-5" />
                  </span>
                  <span className="text-sm font-semibold text-slate-blue-800">
                    {s.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Habitación */}
          <div className="p-6 sm:p-7 rounded-3xl bg-olive-50 border border-olive-100">
            <h3 className="font-display text-lg font-bold text-slate-blue-900 mb-5">
              En tu habitación
            </h3>
            <ul className="space-y-3">
              {ROOM.map((r) => (
                <li
                  key={r.label}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-olive-100"
                >
                  <span className="w-9 h-9 grid place-items-center rounded-xl bg-olive-100 text-olive-700">
                    <Icon name={r.icon} className="w-5 h-5" />
                  </span>
                  <span className="text-sm font-semibold text-slate-blue-800">
                    {r.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Áreas comunes */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-cream-200 shadow-sm">
            <h3 className="font-display text-lg font-bold text-slate-blue-900 mb-5">
              Áreas comunes
            </h3>
            <ul className="space-y-2">
              {COMMON.map((c) => (
                <li
                  key={c.label}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-cream-50 transition"
                >
                  <Icon
                    name="check"
                    className="w-4 h-4 text-olive-600 shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="text-sm text-slate-blue-800">{c.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Nota lavadora */}
        <div className="mt-8 p-5 rounded-2xl bg-terra-50 border border-terra-100 flex items-start gap-3">
          <span className="w-10 h-10 shrink-0 grid place-items-center rounded-xl bg-terra-100 text-terra-700">
            <Icon name="shield" className="w-5 h-5" />
          </span>
          <p className="text-sm text-slate-blue-800 leading-relaxed">
            <strong>Nota importante:</strong> por el consumo excesivo de agua y
            luz, <strong>no se permite instalar lavadora</strong> dentro de la
            casa. Cuentas con un lavadero para tu ropa.
          </p>
        </div>
      </div>
    </section>
  );
}
