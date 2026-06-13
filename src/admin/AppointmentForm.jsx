import { useEffect, useState } from "react";
import Icon from "../components/Icon";
import { properties } from "../data/properties";
import {
  APPOINTMENT_STATUSES,
  APPOINTMENT_SOURCES,
} from "./useAppointments";

const EMPTY = {
  name: "",
  phone: "",
  propertyId: properties[0]?.id || "",
  date: new Date().toISOString().slice(0, 10),
  time: "12:00",
  status: "pendiente",
  notes: "",
  source: "WhatsApp",
};

export default function AppointmentForm({
  initial,
  defaultDate,
  onSave,
  onDelete,
  onClose,
}) {
  const [form, setForm] = useState(EMPTY);
  const isEdit = Boolean(initial?.id);

  useEffect(() => {
    if (initial) setForm({ ...EMPTY, ...initial });
    else setForm({ ...EMPTY, date: defaultDate || EMPTY.date });
  }, [initial, defaultDate]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = original;
    };
  }, [onClose]);

  const set = (k) => (e) =>
    setForm((f) => ({
      ...f,
      [k]: e.target ? e.target.value : e,
    }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    onSave(form);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={isEdit ? "Editar cita" : "Agregar cita"}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
    >
      <div
        className="absolute inset-0 bg-slate-blue-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <form
        onSubmit={submit}
        className="relative bg-cream-50 w-full sm:max-w-xl max-h-[92vh] rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col"
      >
        <header className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-cream-200 bg-white">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-olive-700 font-semibold">
              {isEdit ? "Editar cita" : "Nueva cita"}
            </p>
            <h3 className="font-display text-lg font-bold text-slate-blue-900">
              {isEdit ? form.name || "Cita" : "Agendar nueva cita"}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 grid place-items-center rounded-full bg-cream-100 hover:bg-cream-200 text-slate-blue-800"
            aria-label="Cerrar"
          >
            <Icon name="close" className="w-5 h-5" />
          </button>
        </header>

        <div className="overflow-y-auto px-5 sm:px-7 py-5 space-y-4">
          <Field label="Nombre del interesado" required>
            <input
              value={form.name}
              onChange={set("name")}
              required
              placeholder="Ej. María Fernanda"
              className={inputClass}
            />
          </Field>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Teléfono">
              <input
                value={form.phone}
                onChange={set("phone")}
                placeholder="33 1234 5678"
                inputMode="tel"
                className={inputClass}
              />
            </Field>
            <Field label="Origen">
              <select
                value={form.source}
                onChange={set("source")}
                className={inputClass}
              >
                {APPOINTMENT_SOURCES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Propiedad de interés" required>
            <select
              value={form.propertyId}
              onChange={set("propertyId")}
              required
              className={inputClass}
            >
              {properties.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </Field>

          <div className="grid sm:grid-cols-3 gap-4">
            <Field label="Fecha" required>
              <input
                type="date"
                value={form.date}
                onChange={set("date")}
                required
                className={inputClass}
              />
            </Field>
            <Field label="Hora" required>
              <input
                type="time"
                value={form.time}
                onChange={set("time")}
                required
                className={inputClass}
              />
            </Field>
            <Field label="Estado">
              <select
                value={form.status}
                onChange={set("status")}
                className={inputClass}
              >
                {APPOINTMENT_STATUSES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Notas">
            <textarea
              value={form.notes}
              onChange={set("notes")}
              rows={3}
              placeholder="Detalles, dudas, requisitos especiales..."
              className={`${inputClass} resize-none`}
            />
          </Field>
        </div>

        <footer className="px-5 sm:px-7 py-4 border-t border-cream-200 bg-white flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 sticky bottom-0">
          {isEdit ? (
            <button
              type="button"
              onClick={() => onDelete(initial.id)}
              className="text-sm font-semibold text-terra-700 hover:text-terra-800 px-3 py-2"
            >
              Eliminar cita
            </button>
          ) : (
            <span className="text-xs text-slate-blue-500">
              Se guarda solo en este navegador (localStorage).
            </span>
          )}

          <div className="flex gap-2 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-full bg-cream-100 hover:bg-cream-200 text-slate-blue-800 font-semibold text-sm"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-full bg-olive-600 hover:bg-olive-700 text-cream-50 font-semibold text-sm shadow-sm"
            >
              {isEdit ? "Guardar cambios" : "Agregar cita"}
            </button>
          </div>
        </footer>
      </form>
    </div>
  );
}

const inputClass =
  "w-full px-4 py-2.5 rounded-xl border border-cream-300 bg-white focus:border-olive-500 focus:outline-none focus:ring-2 focus:ring-olive-200 text-slate-blue-900";

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-olive-700 uppercase tracking-wider mb-1.5 block">
        {label} {required && <span className="text-terra-600">*</span>}
      </span>
      {children}
    </label>
  );
}
