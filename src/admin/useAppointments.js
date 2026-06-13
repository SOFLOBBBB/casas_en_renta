import { useCallback, useEffect, useMemo, useState } from "react";
import { storage, newId } from "./storage";

export const APPOINTMENT_STATUSES = [
  { id: "pendiente", label: "Pendiente", color: "amber" },
  { id: "confirmada", label: "Confirmada", color: "olive" },
  { id: "cancelada", label: "Cancelada", color: "terra" },
];

export const APPOINTMENT_SOURCES = [
  { id: "WhatsApp", label: "WhatsApp" },
  { id: "Llamada", label: "Llamada" },
  { id: "Presencial", label: "Presencial" },
  { id: "Otro", label: "Otro" },
];

/**
 * Forma de una cita:
 * {
 *   id, name, phone, propertyId, date (YYYY-MM-DD),
 *   time (HH:MM), status, notes, source, createdAt
 * }
 */
export function useAppointments() {
  const [appointments, setAppointments] = useState([]);

  // Cargar desde storage al montar
  useEffect(() => {
    setAppointments(storage.getAppointments());
  }, []);

  // Persistir cuando cambia
  const persist = useCallback((next) => {
    setAppointments(next);
    storage.saveAppointments(next);
  }, []);

  const add = useCallback(
    (data) => {
      const item = {
        id: newId(),
        createdAt: new Date().toISOString(),
        status: "pendiente",
        source: "WhatsApp",
        notes: "",
        ...data,
      };
      persist([...storage.getAppointments(), item]);
      return item;
    },
    [persist]
  );

  const update = useCallback(
    (id, patch) => {
      const next = storage
        .getAppointments()
        .map((a) => (a.id === id ? { ...a, ...patch } : a));
      persist(next);
    },
    [persist]
  );

  const remove = useCallback(
    (id) => {
      const next = storage.getAppointments().filter((a) => a.id !== id);
      persist(next);
    },
    [persist]
  );

  const setStatus = useCallback(
    (id, status) => update(id, { status }),
    [update]
  );

  // ------- Selectors útiles para vistas ---------------------
  const sorted = useMemo(
    () =>
      [...appointments].sort((a, b) => {
        const ad = `${a.date}T${a.time || "00:00"}`;
        const bd = `${b.date}T${b.time || "00:00"}`;
        return ad.localeCompare(bd);
      }),
    [appointments]
  );

  const byDate = useMemo(() => {
    const map = {};
    for (const a of appointments) {
      if (!a.date) continue;
      if (!map[a.date]) map[a.date] = [];
      map[a.date].push(a);
    }
    for (const k of Object.keys(map)) {
      map[k].sort((a, b) => (a.time || "").localeCompare(b.time || ""));
    }
    return map;
  }, [appointments]);

  const todayISO = new Date().toISOString().slice(0, 10);
  const today = useMemo(
    () => sorted.filter((a) => a.date === todayISO),
    [sorted, todayISO]
  );
  const upcoming = useMemo(
    () =>
      sorted.filter(
        (a) => a.date >= todayISO && a.status !== "cancelada"
      ),
    [sorted, todayISO]
  );

  return {
    appointments: sorted,
    byDate,
    today,
    upcoming,
    add,
    update,
    remove,
    setStatus,
  };
}
