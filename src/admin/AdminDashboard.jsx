import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import { useAppointments, APPOINTMENT_STATUSES } from "./useAppointments";
import { useAvailability } from "./useAvailability";
import { properties, getPropertyById } from "../data/properties";

const STATUS_COLORS = {
  pendiente: "bg-amber-100 text-amber-800 border-amber-200",
  confirmada: "bg-olive-100 text-olive-800 border-olive-200",
  cancelada: "bg-terra-100 text-terra-800 border-terra-200",
};

function formatLongDate(iso) {
  if (!iso) return "";
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString("es-MX", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export default function AdminDashboard() {
  const { appointments, today, upcoming } = useAppointments();
  const { availability, totalAvailable } = useAvailability();

  const kpis = [
    {
      label: "Citas agendadas",
      value: appointments.length,
      icon: "document",
      color: "olive",
    },
    {
      label: "Citas hoy",
      value: today.length,
      icon: "sparkle",
      color: "terra",
    },
    {
      label: "Próximas",
      value: upcoming.length,
      icon: "arrow",
      color: "slate-blue",
    },
    {
      label: "Habitaciones disp.",
      value: totalAvailable,
      icon: "bed",
      color: "olive",
    },
    {
      label: "Propiedades activas",
      value: properties.length,
      icon: "home",
      color: "terra",
    },
  ];

  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs uppercase tracking-wider text-olive-700 font-semibold">
          Dashboard
        </p>
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-blue-900 mt-1">
          Resumen general
        </h1>
        <p className="text-slate-blue-700 mt-1 text-sm">
          Visión rápida de tus citas y habitaciones disponibles.
        </p>
      </header>

      {/* KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {kpis.map((k) => (
          <Kpi key={k.label} {...k} />
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Citas de hoy */}
        <section className="lg:col-span-2 p-5 sm:p-6 rounded-3xl bg-white border border-cream-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-lg font-bold text-slate-blue-900">
              Citas de hoy
            </h2>
            <Link
              to="/admin/calendario"
              className="text-sm font-semibold text-olive-700 hover:text-olive-800"
            >
              Ver calendario →
            </Link>
          </div>
          {today.length === 0 ? (
            <EmptyState
              text="No tienes citas hoy"
              cta="Agendar una"
              to="/admin/calendario"
            />
          ) : (
            <ul className="divide-y divide-cream-200">
              {today.map((a) => (
                <AppointmentRow key={a.id} a={a} />
              ))}
            </ul>
          )}
        </section>

        {/* Disponibilidad */}
        <section className="p-5 sm:p-6 rounded-3xl bg-white border border-cream-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-lg font-bold text-slate-blue-900">
              Disponibilidad
            </h2>
            <Link
              to="/admin/disponibilidad"
              className="text-sm font-semibold text-olive-700 hover:text-olive-800"
            >
              Editar →
            </Link>
          </div>
          <ul className="space-y-3">
            {properties.map((p) => {
              const n = availability[p.id] ?? 0;
              return (
                <li
                  key={p.id}
                  className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl bg-cream-50 border border-cream-200"
                >
                  <div className="min-w-0">
                    <p className="font-semibold text-sm text-slate-blue-900 truncate">
                      {p.name}
                    </p>
                    <p className="text-[11px] text-slate-blue-500 truncate">
                      {p.zone}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-bold ${
                      n > 0
                        ? "bg-olive-100 text-olive-800"
                        : "bg-terra-100 text-terra-800"
                    }`}
                  >
                    {n} disp.
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      </div>

      {/* Próximas */}
      <section className="p-5 sm:p-6 rounded-3xl bg-white border border-cream-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-lg font-bold text-slate-blue-900">
            Próximas citas
          </h2>
          <div className="flex gap-2 flex-wrap">
            {APPOINTMENT_STATUSES.map((s) => (
              <span
                key={s.id}
                className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${
                  STATUS_COLORS[s.id]
                }`}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>
        {upcoming.length === 0 ? (
          <EmptyState
            text="Aún no hay citas próximas"
            cta="Agregar la primera"
            to="/admin/calendario"
          />
        ) : (
          <ul className="divide-y divide-cream-200">
            {upcoming.slice(0, 8).map((a) => (
              <AppointmentRow key={a.id} a={a} showDate />
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

const COLOR_MAP = {
  olive: "bg-olive-100 text-olive-700",
  "slate-blue": "bg-slate-blue-100 text-slate-blue-700",
  terra: "bg-terra-100 text-terra-700",
};

function Kpi({ label, value, icon, color }) {
  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-cream-200 shadow-sm">
      <span
        className={`inline-grid place-items-center w-10 h-10 rounded-xl mb-3 ${
          COLOR_MAP[color] || COLOR_MAP.olive
        }`}
      >
        <Icon name={icon} className="w-5 h-5" />
      </span>
      <p className="font-display text-2xl sm:text-3xl font-bold text-slate-blue-900">
        {value}
      </p>
      <p className="text-xs text-slate-blue-600 mt-0.5">{label}</p>
    </div>
  );
}

function AppointmentRow({ a, showDate }) {
  const property = getPropertyById(a.propertyId);
  return (
    <li className="py-3 flex items-start gap-3">
      <div
        className={`shrink-0 w-12 h-12 grid place-items-center rounded-xl ${
          STATUS_COLORS[a.status]?.split(" ").slice(0, 2).join(" ") ||
          "bg-cream-100 text-slate-blue-700"
        } font-display font-bold text-sm`}
      >
        {a.time || "—"}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-slate-blue-900 truncate">{a.name}</p>
        <p className="text-xs text-slate-blue-600 truncate">
          {property?.name || a.propertyId}
          {showDate && a.date ? ` · ${formatLongDate(a.date)}` : ""}
        </p>
      </div>
      <span
        className={`shrink-0 px-2.5 py-1 rounded-full text-[11px] font-bold border ${
          STATUS_COLORS[a.status]
        }`}
      >
        {a.status}
      </span>
    </li>
  );
}

function EmptyState({ text, cta, to }) {
  return (
    <div className="text-center py-8 px-4 rounded-2xl bg-cream-50 border border-dashed border-cream-300">
      <p className="text-sm text-slate-blue-600">{text}</p>
      {cta && to && (
        <Link
          to={to}
          className="inline-block mt-3 px-4 py-2 rounded-full bg-olive-600 hover:bg-olive-700 text-cream-50 text-sm font-semibold"
        >
          {cta}
        </Link>
      )}
    </div>
  );
}
