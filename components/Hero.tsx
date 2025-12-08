import React from 'react';
import { ArrowRight, CheckCircle2, Package } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="inicio" className="relative min-h-[650px] lg:min-h-[750px] flex items-center overflow-hidden">
      
      {/* Background Banner Image - Fleet Photo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/mnt/data/flotaok.png" 
          alt="Flota de Transportes Manfredi" 
          className="w-full h-full object-cover object-center md:object-bottom"
        />
        {/* Modern Gradient Overlay: Darker on left for text, transparent on right for fleet visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/95 via-brand-blue/80 to-brand-blue/20 lg:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-transparent to-transparent lg:hidden"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-brand-blue/50 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
              <span className="text-white text-xs font-bold tracking-widest uppercase font-heading">Transportes Manfredi</span>
            </div>

            {/* Featured Promo Banner */}
            <div className="bg-brand-blue/40 backdrop-blur-md border border-brand-gold/40 rounded-2xl p-4 max-w-md cursor-pointer hover:bg-brand-blue/60 transition-all group shadow-lg">
                <a href="https://wa.me/5491140841177?text=Hola,%20me%20interesa%20la%20Promo%20Mudancera" className="flex items-center gap-4">
                    <div className="bg-brand-gold p-3 rounded-xl shadow-inner group-hover:scale-105 transition-transform">
                        <Package className="text-brand-dark h-6 w-6" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-0.5">
                           <h3 className="text-brand-gold font-heading font-bold text-sm uppercase tracking-wide">Promo Mudancera</h3>
                           <span className="bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded animate-pulse">ACTIVA</span>
                        </div>
                        <p className="text-white text-sm font-body leading-tight">
                            Solución integral para 1, 2 y 3 ambientes. <br/>
                            <span className="underline decoration-brand-gold/50 underline-offset-2 group-hover:text-brand-gold transition-colors">Consultar disponibilidad</span>
                        </p>
                    </div>
                </a>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-[1.1] drop-shadow-lg">
                Fletes y Mudanzas en <br/>
                <span className="text-brand-gold">CABA y AMBA</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-white/95 font-body font-light leading-relaxed drop-shadow-md max-w-lg">
                Más Rápido, Más Barato. Servicio logístico integral con seguimiento satelital.
              </h2>
            </div>

            {/* Visual Bullet Points */}
            <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="text-brand-gold w-5 h-5 flex-shrink-0 drop-shadow-sm" />
                    <span className="font-medium drop-shadow-sm text-lg">Cargas al instante y programadas</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="text-brand-gold w-5 h-5 flex-shrink-0 drop-shadow-sm" />
                    <span className="font-medium drop-shadow-sm text-lg">Atención todos los días</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="text-brand-gold w-5 h-5 flex-shrink-0 drop-shadow-sm" />
                    <span className="font-medium drop-shadow-sm text-lg">Sin recargo por lluvia</span>
                </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="https://wa.me/5491140841177?text=Hola,%20quisiera%20solicitar%20un%20presupuesto%20para%20un%20flete/mudanza."
                className="group relative px-8 py-4 bg-brand-whatsapp hover:bg-brand-whatsappDark text-white text-lg font-heading font-bold rounded-xl transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-3"
              >
                <span>Solicitar Presupuesto</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#servicios"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white text-lg font-heading font-bold rounded-xl transition-all shadow-lg flex items-center justify-center"
              >
                Ver Servicios
              </a>
            </div>
          </div>
          
          {/* Right side area: Kept clear for the fleet image to shine through, but we can add a small floating badge */}
          <div className="hidden md:flex justify-end items-end h-full">
             {/* Optional: Add a trust badge here if needed, otherwise keep clean for photo */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;