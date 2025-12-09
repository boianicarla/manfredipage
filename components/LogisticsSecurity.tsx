import React from 'react';
import { Radio, ShieldCheck, UserCheck, Zap, HardHat } from 'lucide-react';

const LogisticsSecurity: React.FC = () => {
  return (
    <div className="py-24 bg-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-fawn/5 skew-x-12 transform translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2">
                <span className="text-brand-gold font-heading font-bold tracking-widest uppercase text-sm mb-2 block">Por qué elegirnos</span>
                <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-dark mb-6 leading-tight">
                    Logística, Seguridad y <br/><span className="text-brand-blue">Eficiencia Operativa</span>
                </h2>
                <p className="text-brand-dark/70 font-body text-lg mb-10">
                    Nos diferenciamos por ofrecer un servicio profesional, donde la tecnología y el factor humano trabajan juntos para garantizar tu tranquilidad.
                </p>

                <div className="grid sm:grid-cols-2 gap-y-8 gap-x-6">
                    <div className="flex gap-4 items-start">
                        <div className="bg-brand-white p-3 rounded-lg border border-brand-fawn/30 shadow-sm">
                            <Radio className="text-brand-blue" size={24} />
                        </div>
                        <div>
                            <h4 className="text-brand-dark font-heading font-bold mb-1">Tecnología GPS</h4>
                            <p className="text-brand-dark/60 font-body text-sm">Unidades con seguimiento satelital y sistema de avisos en tiempo real.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="bg-brand-white p-3 rounded-lg border border-brand-fawn/30 shadow-sm">
                            <ShieldCheck className="text-brand-blue" size={24} />
                        </div>
                        <div>
                            <h4 className="text-brand-dark font-heading font-bold mb-1">Seguridad Total</h4>
                            <p className="text-brand-dark/60 font-body text-sm">Cobertura de seguro por accidentes y comunicación continua con móviles.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="bg-brand-white p-3 rounded-lg border border-brand-fawn/30 shadow-sm">
                            <HardHat className="text-brand-blue" size={24} />
                        </div>
                        <div>
                            <h4 className="text-brand-dark font-heading font-bold mb-1">Personal Capacitado</h4>
                            <p className="text-brand-dark/60 font-body text-sm">Transportistas con EPP completo y ropa reglamentaria.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="bg-brand-white p-3 rounded-lg border border-brand-fawn/30 shadow-sm">
                            <Zap className="text-brand-blue" size={24} />
                        </div>
                        <div>
                            <h4 className="text-brand-dark font-heading font-bold mb-1">Eficiencia</h4>
                            <p className="text-brand-dark/60 font-body text-sm">Rutas optimizadas para garantizar velocidad y mejores precios.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white">
                    <img 
                        src="images/flota.jpeg" 
                        alt="Seguridad Logística Manfredi" 
                        loading="lazy"
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-blue/20"></div>
                </div>
                
                {/* Trust Badge */}
                <div className="absolute -bottom-6 -left-6 bg-brand-gold text-brand-dark p-6 rounded-xl shadow-xl hidden md:block max-w-[200px]">
                   <div className="flex items-center gap-2 mb-2">
                      <UserCheck size={28} className="text-white" />
                   </div>
                   <p className="font-heading font-bold text-sm leading-tight">
                      Personal 100% verificado y asegurado.
                   </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsSecurity;