import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-brand-blue text-white text-xs py-2.5 hidden md:block font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 hover:text-brand-gold transition-colors">
            <Phone size={14} className="text-brand-gold" />
            <a href="https://wa.me/5491140841177" className="font-medium">11 4084-1177</a>
          </div>
          <div className="flex items-center gap-2 hover:text-brand-gold transition-colors">
            <Mail size={14} className="text-brand-gold" />
            <a href="mailto:contacto@transportesmanfredi.com.ar" className="font-medium">contacto@transportesmanfredi.com.ar</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-2">
             <Clock size={14} className="text-brand-gold" />
             <span className="font-medium">Atención todos los días</span>
           </div>
           <div className="flex items-center gap-2">
             <MapPin size={14} className="text-brand-gold" />
             <span className="font-medium">CABA y AMBA</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;