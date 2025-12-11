import React from 'react';
import { CheckCircle2, MessageCircle, Package, Star, Crown } from 'lucide-react';

const PromoMudanza: React.FC = () => {
  const plans = [
    {
      title: "Paquete Básico",
      subtitle: "Mudate a tu medida",
      icon: <Package className="w-10 h-10 text-brand-blue" />,
      description: "¡Empezá tu mudanza sin estrés! Ideal si preferís ocuparte de los detalles pequeños.",
      features: [
        "20 cajas de cartón + 3 rollos de cinta + 1 rollo de papel burbuja (entrega previa).",
        "Vos embalás lo chico, nosotros nos encargamos de las cosas grandes.",
        "Desarme de muebles necesario.",
        "Protección de sillones, colchones y muebles delicados con stretch y mantas.",
        "Flota de vehículos y Coordinador de mudanza asignado.",
      ],
      ctaText: "Consultar Básico",
      highlight: false
    },
    {
      title: "Paquete Premium",
      subtitle: "Organización Total",
      icon: <Star className="w-10 h-10 text-brand-gold" />,
      description: "Tu mudanza totalmente organizada y sin preocupaciones. Nosotros embalamos.",
      features: [
        "Personal capacitado embala todo lo chico el día anterior.",
        "Incluye embalaje de vajilla, decoración, libros y objetos del hogar.",
        "Protección especial y desarme de muebles.",
        "Flota de vehículos y Coordinador de mudanza supervisando.",
        "Instalación de electrodomésticos (no incluye aire acondicionado).",
      ],
      ctaText: "Consultar Premium",
      highlight: true
    },
    {
      title: "Paquete Gold",
      subtitle: "Servicio All Inclusive",
      icon: <Crown className="w-10 h-10 text-brand-gold" />,
      description: "La experiencia más completa. Desembalaje, instalación y limpieza básica.",
      features: [
        "Embalaje total el día anterior (vajilla, deco, libros, etc).",
        "Protección premium y desarme de muebles.",
        "Instalación de electrodomésticos.",
        "Desinstalación e instalación de soportes de TV.",
        "Desembalaje de cosas chicas y puesta en lugar.",
        "Limpieza general básica del hogar.",
      ],
      ctaText: "Consultar Gold",
      highlight: false
    }
  ];

  return (
    <div id="promo" className="py-24 bg-brand-fawn/5 relative overflow-hidden scroll-mt-24">
      {/* Decorative Background Elements - Altura aumentada en móvil para evitar corte de texto */}
      <div className="absolute top-0 left-0 w-full h-[600px] md:h-96 bg-brand-blue/90 skew-y-3 transform -translate-y-20 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-gold text-brand-dark font-heading font-bold px-4 py-1.5 rounded-full text-sm tracking-wider uppercase shadow-lg mb-4">
            ¡Nuevos Planes!
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
            Elegí tu Plan de Mudanza
          </h2>
          <p className="text-lg sm:text-xl text-white/90 font-body max-w-2xl mx-auto">
            Desde la opción esencial hasta el servicio todo incluido. Nos adaptamos a lo que necesitás.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            // Lógica de colores del botón
            let buttonColors = 'bg-brand-blue text-white hover:bg-brand-blue/90';
            if (plan.title.includes("Gold")) {
                buttonColors = 'bg-brand-dark text-white hover:bg-neutral-800';
            } else if (plan.highlight) {
                buttonColors = 'bg-brand-gold text-brand-dark hover:bg-yellow-400';
            }

            return (
              <div 
                key={index} 
                className={`flex flex-col h-full bg-white rounded-2xl shadow-xl overflow-hidden border-2 transition-transform duration-300 hover:-translate-y-2 ${plan.highlight ? 'border-brand-gold ring-4 ring-brand-gold/20' : 'border-transparent'}`}
              >
                <div className="p-8 flex-grow">
                  <div className="flex justify-between items-start mb-6">
                     <div className={`p-3 rounded-xl bg-brand-blue/5 ${plan.title.includes("Gold") ? 'bg-brand-dark' : ''}`}>
                        {plan.icon}
                     </div>
                     {plan.highlight && (
                       <span className="bg-brand-gold text-xs font-bold px-2 py-1 rounded text-brand-dark uppercase">Recomendado</span>
                     )}
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-brand-dark mb-1">{plan.title}</h3>
                  <p className="text-sm font-bold text-brand-blue uppercase tracking-wide mb-4">{plan.subtitle}</p>
                  
                  <p className="text-brand-dark/70 text-sm mb-6 leading-relaxed min-h-[3rem]">
                    {plan.description}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-brand-dark/80">
                        <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-0 mt-auto w-full">
                  <a 
                    href={`https://wa.me/5491140841177?text=Hola,%20me%20interesa%20conocer%20mas%20sobre%20el%20${encodeURIComponent(plan.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-heading font-bold transition-all shadow-lg whitespace-nowrap ${buttonColors}`}
                  >
                    <MessageCircle size={20} className="flex-shrink-0" />
                    <span>{plan.ctaText}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
             <div className="bg-white/10 backdrop-blur-md inline-flex items-center gap-4 px-6 py-4 rounded-2xl border border-brand-dark/10 shadow-sm">
                <p className="text-brand-dark font-medium text-sm">
                  ¿Necesitás algo más específico?
                </p>
                <a href="https://wa.me/5491140841177" target="_blank" rel="noopener noreferrer" className="text-brand-blue font-bold hover:underline">
                  Consultar presupuesto a medida
                </a>
             </div>
        </div>

      </div>
    </div>
  );
};

export default PromoMudanza;