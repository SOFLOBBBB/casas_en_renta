// ============================================================
// Iconos SVG inline (sin dependencias externas)
// Uso: <Icon name="bed" className="w-6 h-6" />
// ============================================================

const PATHS = {
  bed: (
    <>
      <path d="M3 18v-7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v7" />
      <path d="M3 18h18" />
      <path d="M7 11h4" />
    </>
  ),
  wifi: (
    <>
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="20" r="1" />
    </>
  ),
  drop: <path d="M12 2.5s6 7.5 6 12a6 6 0 0 1-12 0c0-4.5 6-12 6-12z" />,
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
  flame: (
    <path d="M12 2c1 4-2 5-2 8a2 2 0 1 0 4 0c0 3 3 4 3 8a7 7 0 0 1-14 0c0-4 4-6 4-10 2 1 4 0 5-6z" />
  ),
  pin: (
    <>
      <path d="M12 22s8-7.5 8-13a8 8 0 0 0-16 0c0 5.5 8 13 8 13z" />
      <circle cx="12" cy="9" r="3" />
    </>
  ),
  graduation: (
    <>
      <path d="M2 9 12 4l10 5-10 5L2 9z" />
      <path d="M6 11v4c0 1.5 3 3 6 3s6-1.5 6-3v-4" />
      <path d="M22 9v6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2 4 5v7c0 5 4 8 8 10 4-2 8-5 8-10V5l-8-3z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  money: (
    <>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M6 12h.01M18 12h.01" />
    </>
  ),
  bus: (
    <>
      <path d="M5 17h14V7a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v10z" />
      <path d="M5 12h14" />
      <circle cx="8" cy="19" r="1.5" />
      <circle cx="16" cy="19" r="1.5" />
    </>
  ),
  check: <polyline points="20 6 9 17 4 12" />,
  chevron: <polyline points="6 9 12 15 18 9" />,
  close: (
    <>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </>
  ),
  whatsapp: (
    <path
      d="M20.52 3.48A11.91 11.91 0 0 0 12.04 0C5.46 0 .12 5.34.12 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.64a11.9 11.9 0 0 0 5.76 1.47h.01c6.58 0 11.92-5.34 11.92-11.92 0-3.18-1.24-6.18-3.44-8.43zm-8.48 18.32h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.72.98 1-3.63-.24-.37a9.86 9.86 0 0 1-1.51-5.27c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.81 9.81 0 0 1 2.9 6.99c0 5.45-4.44 9.88-9.91 9.88zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.11 3.23 5.13 4.53.72.31 1.28.5 1.71.64.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.18-1.41-.07-.12-.27-.2-.57-.35z"
      fill="currentColor"
      stroke="none"
    />
  ),
  menu: (
    <>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </>
  ),
  home: (
    <>
      <path d="M3 12 12 3l9 9" />
      <path d="M5 10v10h14V10" />
    </>
  ),
  sofa: (
    <>
      <path d="M3 18v-3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v3" />
      <path d="M3 18h18M5 18v2M19 18v2" />
      <path d="M7 12V8a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4" />
    </>
  ),
  utensils: (
    <>
      <path d="M3 2v8a3 3 0 0 0 6 0V2M6 14v8" />
      <path d="M18 2c-1.5 0-3 1.5-3 4v6h3v10" />
    </>
  ),
  bike: (
    <>
      <circle cx="6" cy="17" r="3" />
      <circle cx="18" cy="17" r="3" />
      <path d="M6 17 12 7h4l2 5" />
      <path d="M9 7h4" />
    </>
  ),
  walk: (
    <>
      <circle cx="13" cy="4" r="2" />
      <path d="M9 22l3-7-3-3 2-5 3 3 4 2" />
      <path d="m6 14 3-3" />
    </>
  ),
  car: (
    <>
      <path d="M5 17h14v-4l-2-5H7l-2 5v4z" />
      <circle cx="8" cy="17" r="1.5" />
      <circle cx="16" cy="17" r="1.5" />
    </>
  ),
  document: (
    <>
      <path d="M6 2h9l5 5v15H6z" />
      <path d="M14 2v6h6" />
      <path d="M9 14h6M9 18h4" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="m6 6 2 2M16 16l2 2M6 18l2-2M16 8l2-2" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
  coffee: (
    <>
      <path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8z" />
      <path d="M17 10h2a2.5 2.5 0 0 1 0 5h-2" />
      <path d="M7 2c0 1.5-1 1.5-1 3s1 1.5 1 3" />
      <path d="M11 2c0 1.5-1 1.5-1 3s1 1.5 1 3" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="17" cy="20" r="1.4" />
      <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.4a2 2 0 0 0 2-1.5L20.5 8H6" />
    </>
  ),
  pill: (
    <>
      <rect x="3" y="9" width="18" height="6" rx="3" />
      <path d="M12 9v6" />
    </>
  ),
};

export default function Icon({ name, className = "w-5 h-5", strokeWidth = 1.8 }) {
  const path = PATHS[name];
  if (!path) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}
