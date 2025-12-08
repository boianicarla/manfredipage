import React from 'react';
import { CheckCircle2, MessageCircle, Truck } from 'lucide-react';

const PromoMudanza: React.FC = () => {
  return (
    <div id="promo" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-brand-blue rounded-[2.5rem] overflow-hidden shadow-2xl relative">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
             <img src="/images/mudancera.jpg" alt="Mudanza" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
             <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/90 to-brand-lightblue/80"></div>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 md:p-16 items-center">
            
            <div className="space-y-6">
              <div className="inline-block bg-brand-gold text-brand-dark font-heading font-bold px-4 py-1.5 rounded-lg text-sm tracking-wider uppercase shadow-lg transform -rotate-2">
                ¡Oportunidad del Mes!
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white leading-none">
                PROMO <span className="text-brand-gold block">MUDANZA</span>
              </h2>
              <p className="text-xl text-white/90 font-body font-light">
                Servicio exclusivo para mudanzas de 1, 2 y 3 ambientes en Capital Federal.
              </p>
              
              <ul className="space-y-3 pt-4">
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="text-brand-gold w-6 h-6" />
                  <span className="text-lg font-heading">Personal de carga y descarga incluido</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="text-brand-gold w-6 h-6" />
                  <span className="text-lg font-heading">Unidades modernas y limpias</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="text-brand-gold w-6 h-6" />
                  <span className="text-lg font-heading">Sin costos ocultos</span>
                </li>
              </ul>

              <div className="pt-6">
                <a 
                  href="https://wa.me/5491140841177?text=Quiero%20info%20sobre%20la%20PROMO%20MUDANZA" 
                  className="inline-flex items-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsappDark text-white px-8 py-4 rounded-xl font-heading font-bold text-lg transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-1"
                >
                  <MessageCircle size={24} />
                  Consultar Disponibilidad
                </a>
              </div>
            </div>

            <div className="hidden lg:block relative">
               <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center gap-4 mb-6">
                     <div className="bg-brand-gold p-3 rounded-full">
                       <Truck className="text-brand-dark w-8 h-8" />
                     </div>
                     <div>
                       <h3 className="text-white font-heading font-bold text-xl">Pack Mudanza Pro</h3>
                       <p className="text-white/70 font-body text-sm">Todo resuelto en un solo viaje</p>
                     </div>
                  </div>
                  <div className="space-y-4 text-white/90 font-body">
                     <p>Olvidate del estrés. Nosotros nos encargamos de subir, bajar y transportar tus cosas con el cuidado que merecen.</p>
                     <p className="text-sm border-t border-white/10 pt-4 mt-4 opacity-70">
                       * Disponible para CABA y alrededores. Consultar condiciones para pisos altos por escalera.
                     </p>
                  </div>
               </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default PromoMudanza;