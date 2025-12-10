import React, { useState } from 'react';
import { Users, ThermometerSnowflake, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div id="nosotros" className="py-24 bg-white scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Imagen Section */}
          <div className="lg:w-1/2 relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-gold rounded-full opacity-20 blur-xl"></div>
             <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-blue rounded-full opacity-10 blur-xl"></div>
             {/* Usamos la imagen de la flota (camioneta) como referencia visual principal */}
             <img 
               src="./images/flotaok.png" 
               alt="Unidad de Transportes Manfredi" 
               loading="lazy"
               className="rounded-2xl shadow-xl relative z-10 w-full object-cover border-4 border-white aspect-[4/3]"
             />
             <div className="absolute bottom-6 right-6 z-20 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-brand-fawn/20 hidden md:block">
                <div className="flex items-center gap-3">
                    <Users className="text-brand-blue" size={24} />
                    <div>
                        <p className="text-xs text-brand-dark/60 font-bold uppercase tracking-wider">Somos una</p>
                        <p className="text-brand-dark font-heading font-bold">Red de Prestadores</p>
                    </div>
                </div>
             </div>
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2">
            <h2 className="text-brand-blue font-heading font-bold tracking-widest uppercase mb-2 text-sm">Sobre Nosotros</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6 leading-tight">
              Compromiso y <span className="text-brand-blue">Soluciones Logísticas</span>
            </h3>
            
            <div className="space-y-6 text-brand-dark/80 font-body text-lg leading-relaxed">
                <p>
                    En <span className="font-bold text-brand-dark">Transportes Manfredi</span> somos una <span className="bg-brand-gold/20 px-1 rounded font-bold text-brand-dark">Red de Prestadores</span> comprometidos con brindar soluciones logísticas ágiles, seguras y confiables.
                    Nos especializamos en el traslado de cargas y encomiendas, ofreciendo un servicio flexible que se adapta a las necesidades de cada cliente.
                </p>
                
                <p>
                    Trabajamos junto a un equipo de prestadores distribuidos estratégicamente, lo que nos permite garantizar rapidez, coordinación y cobertura en múltiples zonas.
                    Nuestro objetivo es que cada envío llegue a destino de manera eficiente, cuidando siempre la atención personalizada que nos caracteriza.
                </p>
            </div>

            {/* Sección Destacada: Refrigerados */}
            <div className="mt-8 bg-brand-blue/5 border border-brand-blue/10 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                    <ThermometerSnowflake size={100} />
                </div>
                
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-brand-blue p-2 rounded-lg">
                            <ThermometerSnowflake className="text-white" size={24} />
                        </div>
                        <h4 className="font-heading font-bold text-brand-dark text-lg">Unidades Refrigeradas</h4>
                    </div>
                    <p className="text-brand-dark/70 font-body text-sm leading-relaxed">
                        Contamos con unidades refrigeradas especialmente equipadas para mantener temperaturas controladas durante todo el traslado. 
                        Esto garantiza el cumplimiento de normas sanitarias y la conservación adecuada de alimentos y productos sensibles, asegurando que cada carga llegue a destino en perfectas condiciones.
                    </p>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;