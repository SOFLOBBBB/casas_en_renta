import PropertyCard from "./PropertyCard";
import { properties } from "../data/properties";

export default function PropertiesSection({ onOpenProperty }) {
  return (
    <section id="casas" className="py-16 sm:py-24 bg-cream-100/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-olive-700 uppercase tracking-wider mb-3">
              Casas disponibles
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-blue-900">
              Encuentra la habitación que se acomoda a ti
            </h2>
            <p className="mt-4 text-slate-blue-700">
              Todas nuestras casas son compartidas y vienen con habitaciones
              amuebladas, servicios incluidos y áreas comunes listas para usar.
            </p>
          </div>
          <div className="hidden sm:block text-sm text-slate-blue-600 bg-white px-4 py-2 rounded-full border border-cream-200 shadow-sm">
            {properties.length} propiedades activas
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} onOpen={onOpenProperty} />
          ))}
        </div>
      </div>
    </section>
  );
}
