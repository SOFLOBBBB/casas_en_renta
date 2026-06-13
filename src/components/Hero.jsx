import Icon from "./Icon";
import { whatsappUrl } from "../utils/links";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-olive-200/50 blur-3xl" />
        <div className="absolute top-40 -right-24 w-96 h-96 rounded-full bg-terra-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-slate-blue-200/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Texto */}
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-olive-100 text-olive-800 text-xs sm:text-sm font-semibold mb-5">
            <Icon name="sparkle" className="w-4 h-4" />
            Renta desde $3,500 MXN
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-blue-900 leading-[1.05]">
            Habitaciones amuebladas para{" "}
            <span className="text-olive-600">estudiantes</span> en{" "}
            <span className="text-terra-600">Guadalajara</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-blue-700 max-w-xl leading-relaxed">
            Casas compartidas, servicios incluidos y ubicaciones conectadas con
            universidades, tren ligero y transporte público. Encuentra un
            espacio cómodo, seguro y bien ubicado para enfocarte en lo
            importante: estudiar.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#casas"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-olive-600 hover:bg-olive-700 text-cream-50 font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Ver casas disponibles
              <Icon name="arrow" className="w-4 h-4" />
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-cream-100 text-slate-blue-800 font-semibold border border-cream-300 shadow-sm hover:shadow-md transition-all"
            >
              <Icon name="whatsapp" className="w-5 h-5 text-[#25D366]" />
              Agendar visita por WhatsApp
            </a>
          </div>

          {/* Stats / quick info */}
          <dl className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-md">
            <div>
              <dt className="text-xs uppercase tracking-wider text-olive-700">
                Renta
              </dt>
              <dd className="mt-1 font-display text-2xl font-bold text-slate-blue-900">
                $3,500
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-olive-700">
                Servicios
              </dt>
              <dd className="mt-1 font-display text-2xl font-bold text-slate-blue-900">
                Incluidos
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-olive-700">
                Habitaciones
              </dt>
              <dd className="mt-1 font-display text-2xl font-bold text-slate-blue-900">
                Amuebladas
              </dd>
            </div>
          </dl>
        </div>

        {/* Collage visual */}
        <div className="relative h-[420px] sm:h-[480px] lg:h-[560px]">
          {/* Tarjeta principal: recámara amueblada */}
          <div className="absolute top-0 right-0 w-[78%] h-[64%] rounded-3xl shadow-xl overflow-hidden bg-cream-200 border border-white/60">
            <img
              src="/images/alcalde_barranquitas/foto-04.jpg"
              alt="Habitación amueblada"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-slate-blue-900/60 to-transparent flex items-end">
              <div className="bg-white/90 backdrop-blur rounded-2xl px-4 py-3 shadow-sm">
                <p className="text-[11px] font-semibold text-olive-700 uppercase tracking-wider">
                  Habitación amueblada
                </p>
                <p className="font-display font-bold text-slate-blue-900">
                  Lista para mudarte
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta secundaria: cocina */}
          <div className="absolute bottom-0 left-0 w-[60%] h-[52%] rounded-3xl shadow-xl overflow-hidden bg-cream-200 border border-white/60 animate-float">
            <img
              src="/images/ignacio_ramirez/foto-04.jpg"
              alt="Cocina equipada"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-blue-900/60 to-transparent flex items-end">
              <div className="bg-white/90 backdrop-blur rounded-xl px-3 py-2 shadow-sm">
                <p className="text-[11px] font-semibold text-slate-blue-700 uppercase tracking-wider">
                  Áreas comunes
                </p>
                <p className="font-display font-bold text-slate-blue-900 text-sm">
                  Cocina equipada
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta flotante - chip */}
          <div className="absolute top-[58%] right-[6%] bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-cream-200">
            <span className="w-10 h-10 rounded-xl bg-terra-100 text-terra-700 grid place-items-center">
              <Icon name="bus" className="w-5 h-5" />
            </span>
            <div>
              <p className="text-[11px] text-olive-700 uppercase font-semibold tracking-wider">
                Transporte
              </p>
              <p className="text-sm font-semibold text-slate-blue-900">
                Tren ligero y Macrobús
              </p>
            </div>
          </div>

          <div className="absolute top-4 left-2 sm:left-6 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-cream-200">
            <span className="w-10 h-10 rounded-xl bg-olive-100 text-olive-700 grid place-items-center">
              <Icon name="graduation" className="w-5 h-5" />
            </span>
            <div>
              <p className="text-[11px] text-olive-700 uppercase font-semibold tracking-wider">
                Estudiantes
              </p>
              <p className="text-sm font-semibold text-slate-blue-900">
                Ambiente seguro
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
