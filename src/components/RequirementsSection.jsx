import Icon from "./Icon";
import { whatsappUrl } from "../utils/links";

const REQUIREMENTS = [
  "Copia de credencial de estudiante",
  "Copia del INE",
  "Depósito",
  "Primer mes de renta",
  "Firma de contrato",
];

const STEPS = [
  {
    n: "1",
    title: "Agenda una visita",
    text: "Escríbenos por WhatsApp para coordinar día y hora.",
  },
  {
    n: "2",
    title: "Conoce la habitación",
    text: "Recorre la casa y resuelve todas tus dudas en persona.",
  },
  {
    n: "3",
    title: "Revisa el contrato",
    text: "Términos claros, sin letras chiquitas ni sorpresas.",
  },
  {
    n: "4",
    title: "Aparta con depósito",
    text: "Firma el contrato y mudate cuando estés listo.",
  },
];

export default function RequirementsSection() {
  return (
    <section id="requisitos" className="py-16 sm:py-24 bg-cream-100/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Checklist */}
          <div>
            <p className="text-sm font-semibold text-olive-700 uppercase tracking-wider mb-3">
              Requisitos
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-blue-900">
              Lo que necesitas para apartar
            </h2>
            <p className="mt-4 text-slate-blue-700">
              El proceso es sencillo: agenda una visita, conoce la habitación,
              revisa el contrato y aparta tu lugar con depósito.
            </p>

            <ul className="mt-8 space-y-3">
              {REQUIREMENTS.map((r, i) => (
                <li
                  key={r}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-cream-200 shadow-sm hover:border-olive-200 transition"
                >
                  <span className="w-10 h-10 grid place-items-center rounded-xl bg-olive-100 text-olive-700 font-display font-bold">
                    {i + 1}
                  </span>
                  <span className="font-semibold text-slate-blue-900">
                    {r}
                  </span>
                  <Icon
                    name="check"
                    className="ml-auto w-5 h-5 text-olive-600"
                    strokeWidth={2.5}
                  />
                </li>
              ))}
            </ul>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-olive-600 hover:bg-olive-700 text-cream-50 font-semibold shadow-md hover:shadow-lg transition"
            >
              <Icon name="whatsapp" className="w-4 h-4" />
              Agenda tu visita
            </a>
          </div>

          {/* Proceso */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-blue-800 text-cream-50 shadow-lg">
            <h3 className="font-display text-2xl font-bold mb-6">
              ¿Cómo es el proceso?
            </h3>
            <ol className="space-y-5">
              {STEPS.map((s) => (
                <li key={s.n} className="flex gap-4">
                  <span className="shrink-0 w-10 h-10 grid place-items-center rounded-full bg-olive-500 text-cream-50 font-display font-bold">
                    {s.n}
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold">{s.title}</p>
                    <p className="text-sm text-cream-200/90 mt-1">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-7 pt-6 border-t border-cream-50/15 flex items-start gap-3">
              <Icon
                name="shield"
                className="w-5 h-5 text-olive-300 mt-0.5"
              />
              <p className="text-sm text-cream-100/85 leading-relaxed">
                Buscamos crear ambientes tranquilos y seguros. Por eso pedimos
                identificación oficial y credencial de estudiante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
