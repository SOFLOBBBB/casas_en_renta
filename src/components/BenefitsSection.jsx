import Icon from "./Icon";

const BENEFITS = [
  {
    icon: "money",
    title: "Renta desde $3,500 MXN",
    text: "Precio fijo mensual + depósito. Sin cargos sorpresa.",
    color: "olive",
  },
  {
    icon: "drop",
    title: "Servicios incluidos",
    text: "Agua, luz, gas e internet incluidos en tu renta.",
    color: "slate-blue",
  },
  {
    icon: "bed",
    title: "Habitaciones amuebladas",
    text: "Cama, clóset, escritorio y buró listos para mudarte.",
    color: "terra",
  },
  {
    icon: "bus",
    title: "Cerca del transporte",
    text: "Acceso a Tren Ligero, Macrobús y rutas urbanas.",
    color: "olive",
  },
  {
    icon: "graduation",
    title: "Ideal para estudiantes",
    text: "Pensado para tu vida universitaria. Ambiente tranquilo.",
    color: "slate-blue",
  },
  {
    icon: "shield",
    title: "Contrato claro",
    text: "Requisitos sencillos y proceso transparente.",
    color: "terra",
  },
];

const COLOR_MAP = {
  olive: "bg-olive-100 text-olive-700",
  "slate-blue": "bg-slate-blue-100 text-slate-blue-700",
  terra: "bg-terra-100 text-terra-700",
};

export default function BenefitsSection() {
  return (
    <section className="py-16 sm:py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold text-olive-700 uppercase tracking-wider mb-3">
            Beneficios
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-blue-900">
            Todo lo que necesitas en un solo lugar
          </h2>
          <p className="mt-4 text-slate-blue-700">
            Pensado para que solo te preocupes por estudiar y disfrutar de tu
            estancia en Guadalajara.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="group p-6 sm:p-7 rounded-3xl bg-white border border-cream-200 hover:border-olive-200 shadow-sm hover:shadow-md transition-all"
            >
              <span
                className={`inline-grid place-items-center w-12 h-12 rounded-2xl mb-4 transition-transform group-hover:scale-105 ${
                  COLOR_MAP[b.color]
                }`}
              >
                <Icon name={b.icon} className="w-6 h-6" strokeWidth={1.9} />
              </span>
              <h3 className="font-display font-bold text-lg text-slate-blue-900">
                {b.title}
              </h3>
              <p className="mt-1.5 text-sm text-slate-blue-700 leading-relaxed">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
