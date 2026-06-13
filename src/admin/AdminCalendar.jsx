import { useState } from "react";
import Icon from "../components/Icon";
import { useAppointments } from "./useAppointments";
import Calendar, { toISO } from "./Calendar";
import AppointmentForm from "./AppointmentForm";
import { getPropertyById } from "../data/properties";
import { whatsappForProperty } from "../utils/links";

const STATUS_STYLE = {
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
    year: "numeric",
  });
}

export default function AdminCalendar() {
  const { appointments, byDate, add, update, remove, setStatus } =
    useAppointments();

  const [cursor, setCursor] = useState(() => {
    const t = new Date();
    return new Date(t.getFullYear(), t.getMonth(), 1);
  });
  const [selectedDate, setSelectedDate] = useState(toISO(new Date()));
  const [editing, setEditing] = useState(null);
  const [creating, setCreating] = useState(false);

  const eventsOfDay = byDate[selectedDate] || [];

  const onSave = (data) => {
    if (editing?.id) update(editing.id, data);
    else add(data);
    setEditing(null);
    setCreating(false);
  };

  const onDelete = (id) => {
    if (confirm("¿Eliminar esta cita?")) {
      remove(id);
      setEditing(null);
    }
  };

  return (
    <div className="space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wider text-olive-700 font-semibold">
            Calendario
          </p>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-blue-900 mt-1">
            Agenda de citas
          </h1>
          <p className="text-slate-blue-700 mt-1 text-sm">
            {appointments.length} cita{appointments.length === 1 ? "" : "s"}{" "}
            registrada{appointments.length === 1 ? "" : "s"} en total.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setCreating(true)}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-olive-600 hover:bg-olive-700 text-cream-50 font-semibold shadow-sm hover:shadow"
        >
          <Icon name="sparkle" className="w-4 h-4" />
          Nueva cita
        </button>
      </header>

      <div className="grid lg:grid-cols-5 gap-5">
        <div className="lg:col-span-3">
          <Calendar
            cursor={cursor}
            setCursor={setCursor}
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
            byDate={byDate}
          />

          {/* Leyenda */}
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-blue-600">
            <Legend color="bg-amber-400" label="Pendiente" />
            <Legend color="bg-olive-500" label="Confirmada" />
            <Legend color="bg-terra-400" label="Cancelada" />
          </div>
        </div>

        {/* Detalle del día */}
        <div className="lg:col-span-2 p-5 sm:p-6 rounded-3xl bg-white border border-cream-200 shadow-sm">
          <header className="flex items-start justify-between gap-3 mb-4">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-olive-700 font-semibold">
                Día seleccionado
              </p>
              <h2 className="font-display text-lg font-bold text-slate-blue-900 capitalize">
                {formatLongDate(selectedDate)}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setCreating(true)}
              className="shrink-0 px-3 py-2 rounded-full bg-cream-100 hover:bg-olive-100 text-slate-blue-800 hover:text-olive-800 text-xs font-semibold transition"
            >
              + Agregar
            </button>
          </header>

          {eventsOfDay.length === 0 ? (
            <div className="text-center py-10 px-4 rounded-2xl bg-cream-50 border border-dashed border-cream-300">
              <p className="text-sm text-slate-blue-600">
                No hay citas para este día.
              </p>
            </div>
          ) : (
            <ul className="space-y-3">
              {eventsOfDay.map((a) => (
                <AppointmentCard
                  key={a.id}
                  a={a}
                  onEdit={() => setEditing(a)}
                  onStatus={(s) => setStatus(a.id, s)}
                />
              ))}
            </ul>
          )}
        </div>
      </div>

      {(creating || editing) && (
        <AppointmentForm
          initial={editing}
          defaultDate={selectedDate}
          onClose={() => {
            setCreating(false);
            setEditing(null);
          }}
          onSave={onSave}
          onDelete={onDelete}
        />
      )}
    </div>
  );
}

function Legend({ color, label }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
      {label}
    </span>
  );
}

function AppointmentCard({ a, onEdit, onStatus }) {
  const property = getPropertyById(a.propertyId);
  return (
    <li className="p-4 rounded-2xl bg-cream-50 border border-cream-200">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-display font-bold text-slate-blue-900 truncate">
            {a.name}
          </p>
          <p className="text-xs text-slate-blue-600 truncate">
            {property?.name || a.propertyId}
          </p>
        </div>
        <span
          className={`shrink-0 px-2.5 py-1 rounded-full text-[11px] font-bold border ${
            STATUS_STYLE[a.status]
          }`}
        >
          {a.status}
        </span>
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-blue-700">
        <span className="inline-flex items-center gap-1 font-semibold">
          <Icon name="sparkle" className="w-3.5 h-3.5 text-olive-600" />
          {a.time}
        </span>
        {a.phone && (
          <a
            href={`tel:${a.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-1 hover:text-olive-700 font-semibold"
          >
            <Icon name="bus" className="w-3.5 h-3.5" />
            {a.phone}
          </a>
        )}
        <span className="text-slate-blue-500">· {a.source}</span>
      </div>

      {a.notes && (
        <p className="mt-2 text-xs text-slate-blue-600 italic line-clamp-2">
          “{a.notes}”
        </p>
      )}

      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onEdit}
          className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white hover:bg-cream-100 text-slate-blue-800 border border-cream-200"
        >
          Editar
        </button>
        {a.status !== "confirmada" && (
          <button
            type="button"
            onClick={() => onStatus("confirmada")}
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-olive-600 hover:bg-olive-700 text-cream-50"
          >
            Confirmar
          </button>
        )}
        {a.status !== "cancelada" && (
          <button
            type="button"
            onClick={() => onStatus("cancelada")}
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-terra-50 hover:bg-terra-100 text-terra-800 border border-terra-200"
          >
            Cancelar
          </button>
        )}
        {property && (
          <a
            href={whatsappForProperty(property)}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white inline-flex items-center gap-1.5"
          >
            <Icon name="whatsapp" className="w-3.5 h-3.5" />
            WhatsApp
          </a>
        )}
      </div>
    </li>
  );
}
