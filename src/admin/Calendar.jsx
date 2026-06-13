import { useMemo } from "react";
import Icon from "../components/Icon";

const WEEK_LABELS = ["L", "M", "M", "J", "V", "S", "D"];
const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const STATUS_DOT = {
  pendiente: "bg-amber-400",
  confirmada: "bg-olive-500",
  cancelada: "bg-terra-400",
};

function toISO(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/**
 * Calendario mensual auto-construido (sin librerías).
 * - lunes a domingo
 * - selectedDate: "YYYY-MM-DD"
 * - byDate: { "YYYY-MM-DD": Appointment[] }
 */
export default function Calendar({
  cursor,
  setCursor,
  selectedDate,
  onSelectDate,
  byDate,
}) {
  const todayISO = toISO(new Date());

  const grid = useMemo(() => {
    const year = cursor.getFullYear();
    const month = cursor.getMonth();
    const first = new Date(year, month, 1);
    // 0 = lunes ... 6 = domingo
    const firstWeekday = (first.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < firstWeekday; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push(new Date(year, month, d));
    }
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  }, [cursor]);

  const prev = () =>
    setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1));
  const next = () =>
    setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1));
  const goToday = () => {
    const t = new Date();
    setCursor(new Date(t.getFullYear(), t.getMonth(), 1));
    onSelectDate(toISO(t));
  };

  return (
    <div className="bg-white rounded-3xl border border-cream-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-cream-200 bg-cream-50/50">
        <button
          type="button"
          onClick={prev}
          className="w-9 h-9 grid place-items-center rounded-full bg-white hover:bg-cream-100 border border-cream-200"
          aria-label="Mes anterior"
        >
          <Icon
            name="arrow"
            className="w-4 h-4 rotate-180 text-slate-blue-800"
            strokeWidth={2.2}
          />
        </button>
        <div className="text-center">
          <p className="font-display font-bold text-slate-blue-900 text-sm sm:text-base">
            {MONTHS[cursor.getMonth()]} {cursor.getFullYear()}
          </p>
          <button
            type="button"
            onClick={goToday}
            className="text-[11px] font-semibold text-olive-700 hover:text-olive-800"
          >
            Ir a hoy
          </button>
        </div>
        <button
          type="button"
          onClick={next}
          className="w-9 h-9 grid place-items-center rounded-full bg-white hover:bg-cream-100 border border-cream-200"
          aria-label="Mes siguiente"
        >
          <Icon
            name="arrow"
            className="w-4 h-4 text-slate-blue-800"
            strokeWidth={2.2}
          />
        </button>
      </div>

      {/* Días de la semana */}
      <div className="grid grid-cols-7 px-2 sm:px-3 pt-3 text-center text-[11px] sm:text-xs font-semibold text-slate-blue-500 uppercase tracking-wider">
        {WEEK_LABELS.map((l, i) => (
          <div key={i} className="py-1">
            {l}
          </div>
        ))}
      </div>

      {/* Grid de días */}
      <div className="grid grid-cols-7 gap-1 sm:gap-1.5 p-2 sm:p-3">
        {grid.map((d, i) => {
          if (!d) return <div key={i} className="aspect-square" />;
          const iso = toISO(d);
          const events = byDate[iso] || [];
          const isSelected = iso === selectedDate;
          const isToday = iso === todayISO;
          return (
            <button
              key={i}
              type="button"
              onClick={() => onSelectDate(iso)}
              className={`aspect-square rounded-xl p-1 sm:p-1.5 flex flex-col items-center justify-start transition relative text-xs sm:text-sm font-semibold ${
                isSelected
                  ? "bg-olive-600 text-cream-50 shadow-md"
                  : isToday
                  ? "bg-olive-50 text-olive-800 border border-olive-200"
                  : "bg-cream-50 hover:bg-cream-100 text-slate-blue-800 border border-transparent"
              }`}
            >
              <span>{d.getDate()}</span>
              {events.length > 0 && (
                <span className="flex gap-0.5 mt-auto pb-0.5">
                  {events.slice(0, 3).map((ev, k) => (
                    <span
                      key={k}
                      className={`w-1.5 h-1.5 rounded-full ${
                        isSelected
                          ? "bg-cream-50/90"
                          : STATUS_DOT[ev.status] || "bg-slate-blue-300"
                      }`}
                    />
                  ))}
                  {events.length > 3 && (
                    <span
                      className={`text-[9px] leading-none font-bold ${
                        isSelected ? "text-cream-50" : "text-slate-blue-600"
                      }`}
                    >
                      +{events.length - 3}
                    </span>
                  )}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { toISO };
