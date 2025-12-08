import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat: React.FC = () => {
  const phoneNumber = "5491140841177"; 
  const message = "Hola Transportes Manfredi, me gustaría hacer una consulta.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-brand-whatsapp hover:bg-brand-whatsappDark text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group border-2 border-white animate-bounce hover:animate-none"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={36} fill="white" className="text-white" />
      <span className="absolute right-full mr-4 bg-white text-brand-charcoal px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-brand-silver/20">
        ¡Respondemos Ahora!
      </span>
    </a>
  );
};

export default WhatsAppFloat;