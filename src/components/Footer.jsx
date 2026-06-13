import { Link } from "react-router-dom";
import Icon from "./Icon";
import { SITE } from "../data/site";
import { properties } from "../data/properties";
import { whatsappUrl } from "../utils/links";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-blue-900 text-cream-100/90 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2 max-w-md">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-10 h-10 rounded-2xl bg-olive-500 text-cream-50 grid place-items-center">
                <Icon name="home" className="w-5 h-5" strokeWidth={2.2} />
              </span>
              <div className="leading-tight">
                <p className="font-display font-bold text-cream-50 text-lg">
                  {SITE.name}
                </p>
                <p className="text-[11px] text-olive-200">{SITE.tagline}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-cream-100/70">
              Habitaciones amuebladas en casas compartidas para estudiantes
              universitarios en Guadalajara. Renta cómoda, servicios incluidos y
              buena ubicación.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold text-sm transition"
            >
              <Icon name="whatsapp" className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Zonas */}
          <div>
            <p className="font-display font-bold text-cream-50 mb-3">
              Zonas disponibles
            </p>
            <ul className="space-y-2 text-sm">
              {properties.map((p) => (
                <li key={p.id}>
                  <a
                    href="#casas"
                    className="hover:text-olive-200 transition flex items-center gap-2"
                  >
                    <Icon
                      name="pin"
                      className="w-3.5 h-3.5 text-terra-300"
                    />
                    {p.zone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <p className="font-display font-bold text-cream-50 mb-3">
              Navegación
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#casas" className="hover:text-olive-200 transition">
                  Casas disponibles
                </a>
              </li>
              <li>
                <a href="#incluye" className="hover:text-olive-200 transition">
                  Qué incluye
                </a>
              </li>
              <li>
                <a
                  href="#requisitos"
                  className="hover:text-olive-200 transition"
                >
                  Requisitos
                </a>
              </li>
              <li>
                <a
                  href="#ubicacion"
                  className="hover:text-olive-200 transition"
                >
                  Ubicación
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-olive-200 transition"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream-50/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-cream-100/60">
          <p>
            © {year} {SITE.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="italic">Habitaciones sujetas a disponibilidad.</span>
            <Link
              to="/admin"
              className="text-cream-100/40 hover:text-cream-100/80 transition"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
