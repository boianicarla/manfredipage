import React from 'react';
import { HeartHandshake, Zap, Wallet, CalendarCheck, MessageCircle } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    { icon: <HeartHandshake size={32} />, title: "Atención Personalizada", desc: "Trato directo y cordial." },
    { icon: <Zap size={32} />, title: "Más Rápido", desc: "Rutas optimizadas y respuesta ágil." },
    { icon: <Wallet size={32} />, title: "Precios Accesibles", desc: "Tecnología eficiente y tarifas claras." },
    { icon: <CalendarCheck size={32} />, title: "Todos los Días", desc: "Disponibles lunes a domingos." },
    { icon: <MessageCircle size={32} />, title: "Respuesta Inmediata", desc: "Te contestamos al instante por WhatsApp." },
  ];

  return (
    <div className="py-20 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-brand-dark">¿Por qué elegir Manfredi?</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
            {benefits.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-brand-fawn/30 w-64 hover:-translate-y-2 transition-transform duration-300">
                    <div className="text-brand-blue mb-4">
                        {item.icon}
                    </div>
                    <h3 className="font-heading font-bold text-brand-dark text-lg mb-2">{item.title}</h3>
                    <p className="text-brand-dark/70 font-body text-sm">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;