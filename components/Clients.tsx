import React from 'react';
import { Building } from 'lucide-react';

const Clients: React.FC = () => {
  return (
    <div className="py-16 bg-white border-t border-brand-silver/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-brand-olive font-bold uppercase tracking-widest text-sm mb-10">Empresas y clientes que confían en nosotros</h3>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholder Logos simulating client brands */}
          <div className="flex items-center gap-2 text-2xl font-black text-brand-charcoal">
            <Building className="text-brand-honey" />
            LOGISTICA<span className="text-brand-honey">BA</span>
          </div>
          <div className="flex items-center gap-2 text-2xl font-black text-brand-charcoal">
            <span className="bg-brand-charcoal text-white px-2">MUEBLES</span>DESIGN
          </div>
          <div className="flex items-center gap-2 text-2xl font-black text-brand-charcoal">
            EVENTOS<span className="text-brand-apricot">PRO</span>
          </div>
          <div className="flex items-center gap-2 text-2xl font-black text-brand-charcoal">
            TECH<span className="font-light">STORE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;