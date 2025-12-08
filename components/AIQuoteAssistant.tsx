import React, { useState } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { getLogisticsAdvice } from '../services/geminiService';

const AIQuoteAssistant: React.FC = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [cargoType, setCargoType] = useState('');
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!origin || !destination || !cargoType) return;

    setLoading(true);
    setAdvice(null);
    
    const result = await getLogisticsAdvice({ origin, destination, cargoType });
    
    setAdvice(result);
    setLoading(false);
  };

  return (
    <div id="asistente" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          <div className="lg:w-1/2 p-10 lg:p-16 text-white flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-yellow-400" />
              <span className="font-semibold text-brand-200 tracking-wider uppercase text-sm">IA Logistics Assistant</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Consulta Inteligente de Envíos</h2>
            <p className="text-brand-100 text-lg mb-8 leading-relaxed">
              ¿No estás seguro de cómo enviar tu carga? Utiliza nuestro asistente virtual impulsado por Gemini AI para recibir consejos inmediatos sobre embalaje y logística antes de solicitar tu cotización formal.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-brand-200">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span>Análisis de tipo de carga</span>
              </div>
              <div className="flex items-center gap-3 text-brand-200">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span>Recomendaciones de seguridad</span>
              </div>
              <div className="flex items-center gap-3 text-brand-200">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span>Estimación preliminar</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-slate-50 p-10 lg:p-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Origen</label>
                <input
                  type="text"
                  required
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  placeholder="Ej. Ciudad de México"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Destino</label>
                <input
                  type="text"
                  required
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Ej. Monterrey"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">¿Qué deseas transportar?</label>
                <input
                  type="text"
                  required
                  value={cargoType}
                  onChange={(e) => setCargoType(e.target.value)}
                  placeholder="Ej. Muebles de oficina, Maquinaria pesada..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Analizando con IA...
                  </>
                ) : (
                  <>
                    <Sparkles size={20} />
                    Obtener Recomendación
                  </>
                )}
              </button>
            </form>

            {advice && (
              <div className="mt-8 bg-white border border-brand-100 rounded-xl p-6 shadow-sm animate-fade-in">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Sparkles className="text-brand-500" size={18} />
                  Recomendación del Asistente:
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                  {advice}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-400">
                  Nota: Esta es una recomendación generada por IA y no constituye una cotización formal vinculante.
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default AIQuoteAssistant;
