# Habitaciones GDL

Landing page para promocionar habitaciones amuebladas en renta para estudiantes universitarios en Guadalajara.

**Stack:** React 19 + Vite + Tailwind CSS v4.

---

## Cómo correr el proyecto

```bash
npm install
npm run dev      # Servidor de desarrollo (http://localhost:5173)
npm run build    # Build de producción
npm run preview  # Previsualiza el build
```

---

## Cómo editar el contenido

Todo el contenido importante vive en `src/data/` para que lo puedas cambiar sin tocar componentes.

### 1. Cambiar número de WhatsApp, nombre de contacto, horarios

Edita `src/data/site.js`:

```js
export const WHATSAPP_NUMBER = "523312345678"; // sin "+", sin espacios, sin guiones

export const CONTACT = {
  name: "Sra. María",
  role: "Encargada de las propiedades",
  hours: "Lunes a sábado, 9:00 a 19:00",
  email: "", // opcional
};
```

### 2. Agregar / editar casas

Edita `src/data/properties.js`. Copia un objeto del arreglo `properties` y cámbiale los datos. Cada casa tiene su `id` (debe ser único) y un `mapsQuery` (texto que se usa para buscar en Google Maps).

### 3. Agregar fotos reales

1. Crea una carpeta dentro de `public/images/`, por ejemplo `public/images/mezquitan/`.
2. Coloca ahí tus fotos (`.jpg`, `.png`, `.webp`).
3. En `src/data/properties.js`, reemplaza el arreglo vacío `images: []` con las rutas:

```js
images: [
  "/images/mezquitan/recamara1.jpg",
  "/images/mezquitan/cocina.jpg",
  "/images/mezquitan/sala.jpg",
],
```

Mientras `images` esté vacío, se muestran placeholders elegantes con gradientes.

### 4. Editar universidades cercanas

Edita el arreglo `NEARBY_PLACES` en `src/data/site.js`.

---

## Estructura del proyecto

```
src/
├── App.jsx                  # Composición de secciones
├── main.jsx
├── index.css                # Tema (colores, fuentes, animaciones)
├── data/
│   ├── site.js              # Config global, WhatsApp, contacto
│   └── properties.js        # Catálogo de casas
├── utils/
│   └── links.js             # Helpers para Google Maps y WhatsApp
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── BenefitsSection.jsx
    ├── PropertiesSection.jsx
    ├── PropertyCard.jsx
    ├── PropertyDetail.jsx   # Modal con galería y detalles
    ├── IncludedServices.jsx
    ├── RequirementsSection.jsx
    ├── LocationSection.jsx
    ├── ContactSection.jsx
    ├── WhatsAppButton.jsx   # Botón flotante
    ├── Footer.jsx
    └── Icon.jsx             # Iconos SVG inline (sin librería externa)
```

---

## Paleta de colores

Definida en `src/index.css` como variables de Tailwind v4 (`@theme`):

- `cream-*` — fondos suaves y cálidos
- `olive-*` — color primario (verde olivo)
- `terra-*` — acentos cálidos (terracota)
- `slate-blue-*` — textos y elementos secundarios

Para cambiar la paleta, edita los valores en `@theme` dentro de `src/index.css`.
