import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import { storage } from "./storage";
import { ADMIN_PIN, SITE } from "../data/site";

/**
 * Bloqueo simple por PIN guardado en sessionStorage.
 * NO es seguridad real: solo evita que alguien entre por error.
 * Para producción, sustituir por auth real (Supabase/Firebase/JWT).
 */
export default function AdminGate({ children }) {
  const [authed, setAuthed] = useState(false);
  const [pin, setPin] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    setAuthed(storage.isAuthed());
  }, []);

  if (authed) return children;

  const onSubmit = (e) => {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      storage.setAuthed(true);
      setAuthed(true);
    } else {
      setErr("PIN incorrecto");
    }
  };

  return (
    <div className="min-h-screen bg-cream-50 grid place-items-center px-5 py-12">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-cream-200 p-7 sm:p-9">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-12 h-12 rounded-2xl bg-olive-500 text-cream-50 grid place-items-center">
            <Icon name="shield" className="w-6 h-6" strokeWidth={2} />
          </span>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-olive-700 font-semibold">
              {SITE.name} · Admin
            </p>
            <h1 className="font-display text-xl font-bold text-slate-blue-900">
              Acceso privado
            </h1>
          </div>
        </div>

        <p className="text-sm text-slate-blue-700 mb-5">
          Esta sección es solo para Oneida. Introduce el PIN para entrar.
        </p>

        <form onSubmit={onSubmit}>
          <label className="text-xs font-semibold text-olive-700 uppercase tracking-wider">
            PIN
          </label>
          <input
            type="password"
            inputMode="numeric"
            autoFocus
            value={pin}
            onChange={(e) => {
              setPin(e.target.value);
              setErr("");
            }}
            placeholder="••••"
            className="mt-1.5 w-full px-4 py-3 rounded-2xl border border-cream-300 bg-cream-50 focus:bg-white focus:border-olive-500 focus:outline-none focus:ring-2 focus:ring-olive-200 font-mono text-lg tracking-widest"
          />
          {err && (
            <p className="mt-2 text-sm text-terra-700 font-medium">{err}</p>
          )}
          <button
            type="submit"
            className="mt-5 w-full px-5 py-3 rounded-full bg-olive-600 hover:bg-olive-700 text-cream-50 font-semibold transition shadow-sm hover:shadow"
          >
            Entrar
          </button>
        </form>

        <div className="mt-6 pt-5 border-t border-cream-200 text-xs text-slate-blue-500 flex items-center justify-between">
          <span>PIN por defecto: <span className="font-mono">1234</span></span>
          <Link
            to="/"
            className="font-semibold text-olive-700 hover:text-olive-800"
          >
            ← Volver al sitio
          </Link>
        </div>
      </div>
    </div>
  );
}
