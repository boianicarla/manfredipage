import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
        name: "Martín G.",
        text: "Increíble la rapidez. Los contacté por WhatsApp y a la hora ya estaba el camión en la puerta. Súper recomendables.",
        stars: 5
    },
    {
        name: "Laura S.",
        text: "Mudé mi departamento de 2 ambientes con ellos. Los chicos muy cuidadosos con los muebles y muy buena onda.",
        stars: 5
    },
    {
        name: "Empresa Logística S.A.",
        text: "Trabajamos con Manfredi hace un año para nuestros repartos en AMBA. Cumplen siempre y la mercadería llega perfecta.",
        stars: 5
    }
  ];

  return (
    <div className="py-20 bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold mb-4">Lo que dicen nuestros clientes</h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
                <div key={i} className="bg-white/5 p-8 rounded-xl border border-white/10 relative hover:bg-white/10 transition-colors">
                    <div className="flex gap-1 mb-4 text-brand-gold">
                        {[...Array(review.stars)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                    </div>
                    <p className="text-white/80 font-body mb-6 italic">"{review.text}"</p>
                    <div className="font-heading font-bold text-white">{review.name}</div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;