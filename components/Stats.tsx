import React from 'react';

const Stats: React.FC = () => {
  return (
    <div className="bg-brand-blue relative z-10 -mt-10 mx-4 md:mx-auto max-w-5xl rounded-2xl shadow-xl overflow-hidden font-heading">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
        <div className="p-6 md:p-8 text-center hover:bg-brand-blue/90 transition-colors">
          <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">5k+</div>
          <div className="text-brand-gold font-bold text-sm uppercase tracking-wider">Viajes Realizados</div>
        </div>
        <div className="p-6 md:p-8 text-center hover:bg-brand-blue/90 transition-colors">
          <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">24h</div>
          <div className="text-brand-gold font-bold text-sm uppercase tracking-wider">Atención Constante</div>
        </div>
        <div className="p-6 md:p-8 text-center hover:bg-brand-blue/90 transition-colors">
          <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">100%</div>
          <div className="text-brand-gold font-bold text-sm uppercase tracking-wider">Seguridad Garantizada</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;