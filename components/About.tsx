import React from 'react';
import { Target, Shield, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-gold rounded-full opacity-20 blur-xl"></div>
             <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-blue rounded-full opacity-10 blur-xl"></div>
             <img 
               src="images/manfredi1.jpg" 
               alt="Equipo Manfredi" 
               loading="lazy"
               className="rounded-2xl shadow-xl relative z-10 w-full object-cover border-4 border-white"
             />
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-brand-blue font-heading font-bold tracking-widest uppercase mb-2 text-sm">Sobre Nosotros</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">
              Tu socio logístico en CABA
            </h3>
            
            <p className="text-brand-dark/80 font-body text-lg leading-relaxed mb-6">
              Somos especialistas en el traslado de mercaderías y mudanzas, estratégicamente ubicados en Capital Federal para brindar una respuesta inmediata.
            </p>
            <p className="text-brand-dark/70 font-body leading-relaxed mb-8">
              Entendemos que cada carga es valiosa. Por eso, basamos nuestro servicio en la puntualidad, la responsabilidad y una comunicación continua desde el origen hasta el destino. Contamos con una flota moderna y variada capaz de adaptarse a cualquier necesidad logística.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                 <div className="bg-brand-blue/10 p-3 rounded-lg text-brand-blue">
                    <Clock size={24} />
                 </div>
                 <div>
                    <h4 className="font-heading font-bold text-brand-dark">Puntualidad Garantizada</h4>
                    <p className="text-sm text-brand-dark/60 font-body">Respetamos tu tiempo y el de tus clientes.</p>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="bg-brand-blue/10 p-3 rounded-lg text-brand-blue">
                    <Shield size={24} />
                 </div>
                 <div>
                    <h4 className="font-heading font-bold text-brand-dark">Responsabilidad Total</h4>
                    <p className="text-sm text-brand-dark/60 font-body">Cuidamos tu carga como si fuera nuestra.</p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;