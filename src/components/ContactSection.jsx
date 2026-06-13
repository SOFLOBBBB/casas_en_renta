import Icon from "./Icon";
import { CONTACT } from "../data/site";
import { whatsappUrl } from "../utils/links";

export default function ContactSection() {
  return (
    <section id="contacto" className="py-16 sm:py-24 bg-cream-100/60">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="rounded-3xl overflow-hidden shadow-xl border border-cream-200">
          <div className="grid lg:grid-cols-5">
            {/* Lateral con info */}
            <div className="lg:col-span-2 bg-olive-600 text-cream-50 p-8 sm:p-10 flex flex-col">
              <p className="text-xs uppercase tracking-wider text-olive-200 font-semibold">
                Contacto
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2 leading-tight">
                Agenda una visita y conoce la habitación
              </h2>
              <p className="mt-4 text-cream-100/85 leading-relaxed">
                Resolvemos tus dudas y te mostramos la casa para que decidas
                con confianza.
              </p>

              <div className="mt-8 space-y-4 text-sm">
                <InfoRow icon="graduation" label="Atención">
                  {CONTACT.name}
                  {CONTACT.role ? (
                    <span className="block text-cream-200/80 text-xs mt-0.5">
                      {CONTACT.role}
                    </span>
                  ) : null}
                </InfoRow>
                {CONTACT.phone && (
                  <InfoRow icon="bus" label="WhatsApp">
                    <a
                      href={`tel:+52${CONTACT.phone.replace(/\s+/g, "")}`}
                      className="underline underline-offset-2 hover:text-white"
                    >
                      {CONTACT.phone}
                    </a>
                  </InfoRow>
                )}
                <InfoRow icon="sparkle" label="Horario">
                  {CONTACT.hours}
                </InfoRow>
                {CONTACT.email && (
                  <InfoRow icon="document" label="Correo">
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="underline underline-offset-2 hover:text-white"
                    >
                      {CONTACT.email}
                    </a>
                  </InfoRow>
                )}
              </div>
            </div>

            {/* CTA principal */}
            <div className="lg:col-span-3 bg-white p-8 sm:p-10 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-[#25D366]/10 text-[#1a8d44] text-xs font-semibold">
                <Icon name="whatsapp" className="w-4 h-4" />
                Respuesta rápida por WhatsApp
              </span>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-blue-900 mt-4">
                Escríbenos directo y agenda tu cita
              </h3>
              <p className="mt-3 text-slate-blue-700 leading-relaxed">
                Al hacer clic se abrirá WhatsApp con un mensaje listo para
                enviar. Te contactamos a la brevedad.
              </p>

              <div className="mt-6 p-4 rounded-2xl bg-cream-50 border border-cream-200 text-sm text-slate-blue-700 italic">
                “Hola, me interesa una habitación en renta. ¿Podría darme más
                información y agendar una visita?”
              </div>

              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold shadow-md hover:shadow-xl transition-all text-base sm:text-lg"
              >
                <Icon name="whatsapp" className="w-6 h-6" />
                Agendar cita por WhatsApp
              </a>

              <p className="mt-4 text-xs text-slate-blue-500">
                Habitaciones sujetas a disponibilidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, children }) {
  return (
    <div className="flex items-start gap-3">
      <span className="w-9 h-9 shrink-0 grid place-items-center rounded-xl bg-cream-50/15 text-cream-50">
        <Icon name={icon} className="w-4 h-4" />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] uppercase tracking-wider text-olive-200 font-semibold">
          {label}
        </p>
        <div className="font-semibold text-cream-50">{children}</div>
      </div>
    </div>
  );
}
