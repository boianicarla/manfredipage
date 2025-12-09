import React from 'react';
import { Truck, Home, Dog, Car, Hammer, ChevronRight } from 'lucide-react';

const services = [
  {
    title: "Fletes y Minifletes",
    description: "Traslados de corta, mediana y larga distancia. Unidades adaptadas a tu carga.",
    icon: <Truck className="h-8 w-8 text-brand-blue" />,
  },
  {
    title: "Mudanzas",
    description: "Servicio para particulares y empresas. Opcional: peones y operarios de carga.",
    icon: <Home className="h-8 w-8 text-brand-blue" />,
  },
  {
    title: "Servicio de Grúa",
    description: "Traslado seguro de vehículos y maquinaria ligera en Capital y GBA.",
    icon: <Car className="h-8 w-8 text-brand-blue" />,
  },
  {
    title: "Traslado de Mascotas",
    description: "Viajes cuidados, seguros y pet-friendly para tus compañeros.",
    icon: <Dog className="h-8 w-8 text-brand-blue" />,
  },
  {
    title: "Servicios Adicionales",
    description: "Carga y descarga, subida por escalera (con soga) y embalaje profesional.",
    icon: <Hammer className="h-8 w-8 text-brand-blue" />,
  },
];

const Services: React.FC = () => {
  return (
    <div id="servicios" className="py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-brand-blue font-heading font-bold tracking-widest uppercase text-sm mb-3 block">Nuestros Servicios</span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-dark mb-4">
            Soluciones integrales de <span className="text-brand-blue">logística y transporte</span>
          </h2>
          <p className="text-brand-dark/70 font-body text-lg">
             Adaptamos nuestra flota a tus necesidades. Desde un paquete pequeño hasta una mudanza completa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_10px_25px_-5px_rgba(0,117,242,0.15)] transition-all duration-300 border border-brand-fawn/20 hover:border-brand-blue/50 relative overflow-hidden flex flex-col">
              
              <div className="w-16 h-16 rounded-2xl bg-brand-blue/5 flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8 text-brand-blue group-hover:text-white transition-colors" })}
              </div>
              
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors">{service.title}</h3>
              <p className="text-brand-dark/70 font-body text-sm leading-relaxed mb-4 flex-grow">
                {service.description}
              </p>
              
              <a href={`https://wa.me/5491140841177?text=Hola,%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(service.title)}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-brand-blue font-bold text-sm mt-auto opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 cursor-pointer">
                <span>Solicitar</span>
                <ChevronRight size={16} />
              </a>
            </div>
          ))}
          
          {/* CTA Card for Custom Quote */}
          <a href="https://wa.me/5491140841177" target="_blank" rel="noopener noreferrer" className="bg-brand-blue rounded-2xl p-8 shadow-lg flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-brand-blue/90 transition-colors">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Truck className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-2">¿Necesitas algo más?</h3>
              <p className="text-white/80 font-body text-sm mb-6">Contanos tu requerimiento especial y lo resolvemos.</p>
              <span className="bg-brand-gold text-brand-dark px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide group-hover:bg-white transition-colors">
                Contactar Ahora
              </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;