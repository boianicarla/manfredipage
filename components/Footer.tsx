import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-brand-blue text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6 bg-white/10 p-2 rounded-lg w-fit">
              <img src="/images/logo.jpeg" alt="Logo" className="h-10 w-auto rounded-md mix-blend-multiply" />
              <div className="flex flex-col">
                <span className="text-lg font-heading font-bold text-white uppercase tracking-tight">Manfredi</span>
                <span className="text-brand-gold text-[9px] uppercase tracking-widest font-bold">Transportes</span>
              </div>
            </div>
            <p className="text-sm font-body leading-relaxed text-white/80 mb-6">
              Servicio de transporte de carga y mudanzas con amplia trayectoria en el mercado. Seguridad, confianza y rapidez en CABA y AMBA.
            </p>
            <div className="flex gap-4">
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-gold hover:text-brand-dark transition-colors"><Facebook size={18} /></a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-gold hover:text-brand-dark transition-colors"><Instagram size={18} /></a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-gold hover:text-brand-dark transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-brand-gold font-heading font-bold text-sm uppercase tracking-wider mb-6 border-b border-white/10 pb-2 inline-block">Servicios</h3>
            <ul className="space-y-3 text-sm font-body text-white/80">
              <li><a href="#servicios" className="hover:text-white transition-colors">Mudanzas Particulares</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Fletes Corporativos</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Logística E-commerce</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicio de Grúa</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-brand-gold font-heading font-bold text-sm uppercase tracking-wider mb-6 border-b border-white/10 pb-2 inline-block">Contacto</h3>
            <ul className="space-y-4 text-sm font-body">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-brand-gold mt-0.5" />
                <a href="https://wa.me/5491140841177" className="hover:text-white transition-colors font-bold">11 4084-1177</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-gold" />
                <a href="mailto:contacto@transportesmanfredi.com.ar" className="hover:text-white transition-colors">contacto@transportesmanfredi.com.ar</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-gold mt-0.5" />
                <span>CABA y GBA, Argentina</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-brand-gold font-heading font-bold text-sm uppercase tracking-wider mb-6 border-b border-white/10 pb-2 inline-block">Horarios</h3>
            <p className="text-sm text-white/80 mb-2 font-body">Lunes a Domingos</p>
            <p className="text-white font-heading font-bold text-lg">Atención todos los días</p>
            <div className="mt-4 p-4 bg-white/10 rounded-lg border border-white/10">
              <p className="text-xs text-white/90 italic">Coordinamos mudanzas los fines de semana y feriados.</p>
            </div>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/50 font-body">
          <p>&copy; {new Date().getFullYear()} Transportes Manfredi. www.transportesmanfredi.com.ar</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Términos</a>
            <a href="#" className="hover:text-white">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;