// ============================================================
// Capa de persistencia local (localStorage)
// ------------------------------------------------------------
// Diseñada como adaptador para que mañana sea trivial cambiarla
// por una API REST / Supabase / Firebase. Toda la app consume
// estos métodos a través de los hooks `useAppointments` y
// `useAvailability`, no toca `localStorage` directamente.
// ============================================================

const KEYS = {
  appointments: "habgdl.appointments.v1",
  availability: "habgdl.availability.v1",
  authPin: "habgdl.admin.authed",
};

function read(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (e) {
    console.warn("storage.read failed for", key, e);
    return fallback;
  }
}

function write(key, value) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn("storage.write failed for", key, e);
  }
}

export const storage = {
  // ----- Appointments ---------------------------------------
  getAppointments: () => read(KEYS.appointments, []),
  saveAppointments: (list) => write(KEYS.appointments, list),

  // ----- Availability (mapa { [propertyId]: number }) -------
  getAvailability: () => read(KEYS.availability, {}),
  saveAvailability: (map) => write(KEYS.availability, map),

  // ----- Auth (PIN simple en sessionStorage) ----------------
  isAuthed: () => {
    if (typeof window === "undefined") return false;
    return window.sessionStorage.getItem(KEYS.authPin) === "1";
  },
  setAuthed: (val) => {
    if (typeof window === "undefined") return;
    if (val) window.sessionStorage.setItem(KEYS.authPin, "1");
    else window.sessionStorage.removeItem(KEYS.authPin);
  },
};

// Genera un id corto único
export function newId() {
  return (
    Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
  ).toUpperCase();
}
