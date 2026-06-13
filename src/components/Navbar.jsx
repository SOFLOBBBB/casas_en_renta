import { useEffect, useState } from "react";
import Icon from "./Icon";
import { SITE } from "../data/site";
import { whatsappUrl } from "../utils/links";

const LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#casas", label: "Casas" },
  { href: "#incluye", label: "Qué incluye" },
  { href: "#requisitos", label: "Requisitos" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-cream-50/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2.5 group">
          <span className="w-10 h-10 rounded-2xl bg-olive-500 text-cream-50 grid place-items-center shadow-sm group-hover:scale-105 transition-transform">
            <Icon name="home" className="w-5 h-5" strokeWidth={2.2} />
          </span>
          <div className="leading-tight">
            <p className="font-display font-bold text-slate-blue-800 text-base sm:text-lg">
              {SITE.name}
            </p>
            <p className="hidden sm:block text-[11px] text-olive-700 -mt-0.5">
              {SITE.tagline}
            </p>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3.5 py-2 rounded-full text-sm font-medium text-slate-blue-700 hover:text-olive-700 hover:bg-olive-50 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + mobile menu */}
        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all"
          >
            <Icon name="whatsapp" className="w-4 h-4" />
            Agendar visita
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-11 h-11 grid place-items-center rounded-full bg-cream-100 text-slate-blue-800 hover:bg-cream-200 transition"
            aria-label="Abrir menú"
          >
            <Icon name={open ? "close" : "menu"} className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-cream-50 border-t border-cream-200 shadow-md">
          <ul className="px-5 py-3 flex flex-col">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 rounded-xl text-slate-blue-800 hover:bg-olive-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold"
                onClick={() => setOpen(false)}
              >
                <Icon name="whatsapp" className="w-4 h-4" />
                Agendar visita por WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
