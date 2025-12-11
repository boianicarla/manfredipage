import React from 'react';
import { ShieldCheck, Satellite, FileCheck, Users } from 'lucide-react';

const LogisticsSecurity: React.FC = () => {
  const securityFeatures = [
    {
      icon: <Satellite className="w-8 h-8 text-brand-gold" />,
      title: "Seguimiento Satelital",
      description: "Monitoreo constante de todas las unidades para tu tranquilidad y seguridad en tiempo real."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-gold" />,
      title: "Carga Asegurada",
      description: "Tus bienes viajan protegidos. Contamos con seguro de carga para cubrir cualquier eventualidad."
    },
    {
      icon: <FileCheck className="w-8 h-8 text-brand-gold" />,
      title: "Habilitaciones al Día",
      description: "Flota con documentación completa: RUTA, VTV y habilitaciones CNRT vigentes para circular."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-gold" />,
      title: "Personal Capacitado",
      description: "Operarios con ART, experiencia en manipulación de cargas frágiles y trato cordial."
    }
  ];

  return (
    <div className="py-24 bg-brand-fawn/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-brand-blue font-heading font-bold tracking-widest uppercase text-sm mb-2">Tranquilidad Total</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
            Logística Segura y Confiable
          </h2>
          <p className="mt-4 text-brand-dark/70 font-body text-lg max-w-2xl mx-auto">
            No solo transportamos cosas, cuidamos lo que es importante para vos. Implementamos rigurosos estándares de control.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-brand-fawn/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="bg-brand-blue/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-brand-blue">
                {feature.icon}
              </div>
              <h3 className="font-heading font-bold text-brand-dark text-xl mb-3">{feature.title}</h3>
              <p className="text-brand-dark/70 font-body text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Banner inferior de refuerzo */}
        <div className="mt-16 bg-brand-blue rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-white/5 skew-x-12 transform scale-150"></div>
             <div className="relative z-10">
                 <h3 className="text-2xl font-heading font-bold mb-4">¿Tenés una empresa?</h3>
                 <p className="text-white/80 max-w-2xl mx-auto mb-8">
                     Ofrecemos soluciones logísticas a medida para comercios y PyMES. Factura A, cuentas corrientes y flota exclusiva.
                 </p>
                 <a href="https://wa.me/5491140841177?text=Hola,%20soy%20una%20empresa%20y%20necesito%20servicios%20de%20flete" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-gold text-brand-dark font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">
                     Consultar Servicio Corporativo
                 </a>
             </div>
        </div>

      </div>
    </div>
  );
};

export default LogisticsSecurity;