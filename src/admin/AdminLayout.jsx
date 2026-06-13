import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Icon from "../components/Icon";
import { SITE, CONTACT } from "../data/site";
import { storage } from "./storage";

const NAV = [
  { to: "/admin", label: "Dashboard", icon: "home", end: true },
  { to: "/admin/calendario", label: "Calendario", icon: "document" },
  {
    to: "/admin/disponibilidad",
    label: "Disponibilidad",
    icon: "bed",
  },
];

export default function AdminLayout() {
  const [open, setOpen] = useState(false);

  const logout = () => {
    storage.setAuthed(false);
    window.location.href = "/admin";
  };

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Topbar mobile */}
      <header className="lg:hidden sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-cream-200 px-4 h-14 flex items-center justify-between">
        <Link to="/admin" className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-xl bg-olive-500 text-cream-50 grid place-items-center">
            <Icon name="shield" className="w-4 h-4" />
          </span>
          <span className="font-display font-bold text-slate-blue-900">
            Admin
          </span>
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-10 h-10 grid place-items-center rounded-xl bg-cream-100 text-slate-blue-800"
          aria-label="Menú"
        >
          <Icon name={open ? "close" : "menu"} className="w-5 h-5" />
        </button>
      </header>

      <div className="lg:flex">
        {/* Sidebar desktop */}
        <aside className="hidden lg:flex flex-col w-64 shrink-0 h-screen sticky top-0 bg-white border-r border-cream-200 p-5">
          <Link to="/admin" className="flex items-center gap-3 mb-8">
            <span className="w-10 h-10 rounded-2xl bg-olive-500 text-cream-50 grid place-items-center">
              <Icon name="shield" className="w-5 h-5" />
            </span>
            <div className="leading-tight">
              <p className="font-display font-bold text-slate-blue-900">
                {SITE.name}
              </p>
              <p className="text-[11px] text-olive-700">Panel admin</p>
            </div>
          </Link>

          <nav className="flex flex-col gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                    isActive
                      ? "bg-olive-100 text-olive-800"
                      : "text-slate-blue-700 hover:bg-cream-100"
                  }`
                }
              >
                <Icon name={n.icon} className="w-4 h-4" />
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto pt-5 border-t border-cream-200">
            <p className="text-[11px] uppercase tracking-wider text-olive-700 font-semibold">
              Sesión
            </p>
            <p className="text-sm font-semibold text-slate-blue-900 mt-1">
              {CONTACT.name}
            </p>
            <button
              onClick={logout}
              className="mt-3 w-full text-xs px-3 py-2 rounded-full bg-cream-100 hover:bg-cream-200 text-slate-blue-800 font-semibold transition"
            >
              Cerrar sesión
            </button>
            <Link
              to="/"
              className="mt-2 block text-center text-xs text-olive-700 hover:text-olive-800 font-semibold py-2"
            >
              ← Volver al sitio
            </Link>
          </div>
        </aside>

        {/* Drawer mobile */}
        {open && (
          <div
            className="lg:hidden fixed inset-0 z-40 bg-slate-blue-900/40"
            onClick={() => setOpen(false)}
          >
            <nav
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 h-full w-72 max-w-[85vw] bg-white p-5 shadow-xl flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-2xl bg-olive-500 text-cream-50 grid place-items-center">
                  <Icon name="shield" className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-display font-bold text-slate-blue-900">
                    {SITE.name}
                  </p>
                  <p className="text-[11px] text-olive-700">{CONTACT.name}</p>
                </div>
              </div>
              {NAV.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-semibold ${
                      isActive
                        ? "bg-olive-100 text-olive-800"
                        : "text-slate-blue-700 hover:bg-cream-100"
                    }`
                  }
                >
                  <Icon name={n.icon} className="w-4 h-4" />
                  {n.label}
                </NavLink>
              ))}
              <button
                onClick={logout}
                className="mt-auto px-3 py-2.5 rounded-full bg-cream-100 hover:bg-cream-200 text-slate-blue-800 text-sm font-semibold"
              >
                Cerrar sesión
              </button>
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="mt-2 text-center text-xs text-olive-700 font-semibold py-2"
              >
                ← Volver al sitio
              </Link>
            </nav>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-10 py-6 lg:py-10">
          <div className="mb-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 px-4 py-3 text-xs sm:text-sm flex items-start gap-3">
            <Icon
              name="shield"
              className="w-4 h-4 mt-0.5 shrink-0 text-amber-700"
            />
            <p>
              Las citas se agregan <strong>manualmente</strong> después de
              confirmar por WhatsApp. Esta versión no lee mensajes de WhatsApp
              automáticamente.
            </p>
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
