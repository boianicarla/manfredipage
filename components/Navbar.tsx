import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, PhoneCall } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'} border-b border-brand-fawn/20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
             <img src="/mnt/data/logo.jpeg" alt="Manfredi Logo" className="h-12 w-auto object-contain transition-transform group-hover:scale-105" />
             <div className="hidden sm:flex flex-col">
                <span className="text-2xl font-heading font-extrabold text-brand-blue tracking-tighter leading-none">
                  MANFREDI
                </span>
                <span className="text-[10px] font-bold text-brand-gold tracking-[0.3em] uppercase">
                  Transportes
                </span>
             </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-brand-dark hover:text-brand-blue font-heading font-semibold text-sm uppercase tracking-wide transition-colors">Inicio</a>
            <a href="#servicios" className="text-brand-dark hover:text-brand-blue font-heading font-semibold text-sm uppercase tracking-wide transition-colors">Servicios</a>
            <a href="#nosotros" className="text-brand-dark hover:text-brand-blue font-heading font-semibold text-sm uppercase tracking-wide transition-colors">Nosotros</a>
            <a href="#faq" className="text-brand-dark hover:text-brand-blue font-heading font-semibold text-sm uppercase tracking-wide transition-colors">Preguntas</a>
            <a href="#contacto" className="text-brand-dark hover:text-brand-blue font-heading font-semibold text-sm uppercase tracking-wide transition-colors">Contacto</a>
            
            <a 
              href="https://wa.me/5491140841177" 
              className="bg-brand-gold hover:bg-[#e2a632] text-white px-6 py-2.5 rounded-full font-heading font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <MessageCircle size={18} fill="white" className="text-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark hover:text-brand-blue p-2 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-brand-fawn/20 absolute w-full left-0 shadow-xl z-50 font-heading">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <a href="#inicio" className="block px-4 py-3 text-brand-dark hover:bg-brand-blue/5 rounded-lg font-bold" onClick={() => setIsOpen(false)}>Inicio</a>
            <a href="#servicios" className="block px-4 py-3 text-brand-dark hover:bg-brand-blue/5 rounded-lg font-bold" onClick={() => setIsOpen(false)}>Servicios</a>
            <a href="#nosotros" className="block px-4 py-3 text-brand-dark hover:bg-brand-blue/5 rounded-lg font-bold" onClick={() => setIsOpen(false)}>Nosotros</a>
            <a href="#faq" className="block px-4 py-3 text-brand-dark hover:bg-brand-blue/5 rounded-lg font-bold" onClick={() => setIsOpen(false)}>Preguntas Frecuentes</a>
            <a href="https://wa.me/5491140841177" className="flex items-center gap-2 px-4 py-3 bg-brand-whatsapp text-white font-bold hover:bg-brand-whatsappDark rounded-lg mt-4" onClick={() => setIsOpen(false)}>
              <MessageCircle size={20} />
              Solicitar Presupuesto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;