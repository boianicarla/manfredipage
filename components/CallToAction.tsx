import React from 'react';
import { MessageCircle } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-blue via-brand-lightblue to-brand-gold"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-dark mb-6 tracking-tight">
            ¿Listo para coordinar tu flete o mudanza?
        </h2>
        <p className="text-xl text-brand-dark/70 font-body mb-10 max-w-2xl mx-auto">
            Evitá el estrés. Dejanos la logística a nosotros. Consultanos ahora y recibí tu presupuesto al instante.
        </p>
        <a 
            href="https://wa.me/5491140841177" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-whatsapp hover:bg-brand-whatsappDark text-white px-10 py-5 rounded-full text-xl font-heading font-bold transition-all shadow-xl hover:-translate-y-1 hover:shadow-green-500/40 group"
        >
            <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />
            Coordinar por WhatsApp
        </a>
      </div>
    </div>
  );
};

export default CallToAction;