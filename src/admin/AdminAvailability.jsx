import Icon from "../components/Icon";
import { properties } from "../data/properties";
import { useAvailability } from "./useAvailability";

export default function AdminAvailability() {
  const { availability, setRooms, increment, totalAvailable } =
    useAvailability();

  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-wider text-olive-700 font-semibold">
          Disponibilidad
        </p>
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-blue-900 mt-1">
          Habitaciones disponibles
        </h1>
        <p className="text-slate-blue-700 mt-1 text-sm">
          Ajusta cuántas habitaciones están disponibles por casa.{" "}
          <span className="font-semibold">
            Total: {totalAvailable} habitación{totalAvailable === 1 ? "" : "es"}
          </span>
          .
        </p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {properties.map((p) => {
          const n = availability[p.id] ?? 0;
          return (
            <div
              key={p.id}
              className="p-5 sm:p-6 rounded-3xl bg-white border border-cream-200 shadow-sm"
            >
              <div className="flex items-start gap-3">
                {p.images?.[0] ? (
                  <img
                    src={p.images[0]}
                    alt=""
                    className="w-16 h-16 rounded-2xl object-cover shrink-0"
                  />
                ) : (
                  <div
                    className={`w-16 h-16 rounded-2xl ${p.placeholderStyle} shrink-0`}
                  />
                )}
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-wider text-olive-700 font-semibold truncate">
                    {p.zone}
                  </p>
                  <h2 className="font-display font-bold text-slate-blue-900 leading-tight">
                    {p.name}
                  </h2>
                  <p className="text-xs text-slate-blue-500 mt-1 line-clamp-1">
                    {p.shortAddress}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => increment(p.id, -1)}
                  disabled={n <= 0}
                  className="w-11 h-11 grid place-items-center rounded-full bg-cream-100 hover:bg-cream-200 disabled:opacity-50 disabled:cursor-not-allowed text-slate-blue-800 font-bold text-lg"
                  aria-label="Disminuir"
                >
                  −
                </button>

                <div className="flex flex-col items-center">
                  <input
                    type="number"
                    min="0"
                    max="99"
                    value={n}
                    onChange={(e) => setRooms(p.id, e.target.value)}
                    className="w-20 text-center px-2 py-2 rounded-xl border border-cream-300 bg-cream-50 focus:bg-white focus:border-olive-500 focus:outline-none focus:ring-2 focus:ring-olive-200 font-display text-2xl font-bold text-slate-blue-900"
                  />
                  <span className="text-[11px] text-slate-blue-500 mt-1">
                    disponibles
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => increment(p.id, 1)}
                  className="w-11 h-11 grid place-items-center rounded-full bg-olive-600 hover:bg-olive-700 text-cream-50 font-bold text-lg"
                  aria-label="Aumentar"
                >
                  +
                </button>
              </div>

              <div
                className={`mt-4 px-3 py-2 rounded-xl text-xs font-semibold text-center ${
                  n > 0
                    ? "bg-olive-50 text-olive-800"
                    : "bg-terra-50 text-terra-800"
                }`}
              >
                {n > 0 ? "Disponible para mostrar" : "Sin habitaciones libres"}
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4 rounded-2xl bg-cream-100 border border-cream-200 text-xs sm:text-sm text-slate-blue-700 flex items-start gap-3">
        <Icon
          name="sparkle"
          className="w-4 h-4 mt-0.5 text-olive-700 shrink-0"
        />
        <p>
          Los cambios se guardan automáticamente en este navegador. Cuando
          conectes un backend, solo hay que reemplazar las funciones en{" "}
          <code className="font-mono text-olive-700">admin/storage.js</code>.
        </p>
      </div>
    </div>
  );
}
