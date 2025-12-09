import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "¿Cuál es el precio mínimo?",
    answer: "Depende del día, tamaño del flete y si necesitas peones. Consultanos para obtener una tarifa exacta."
  },
  {
    question: "¿Hacen entregas en el día?",
    answer: "Sí, logística optimizada para máxima velocidad. Ideal para urgencias."
  },
  {
    question: "¿Hay recargo por lluvia?",
    answer: "No, nuestras tarifas son transparentes y no cobramos extras climáticos."
  },
  {
    question: "¿Horario de atención?",
    answer: "Atendemos todos los días. Estamos disponibles para coordinar cuando lo necesites."
  },
  {
    question: "¿Zonas de cobertura?",
    answer: "CABA, Gran Buenos Aires e Interior del país."
  },
  {
    question: "¿Cuánto cobra un flete por hora?",
    answer: "Depende del utilitario y distancia. Contáctanos para asesorarte mejor según tu carga."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div id="faq" className="py-20 bg-brand-fawn/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-brand-blue font-heading font-bold tracking-widest uppercase text-sm mb-2">Preguntas Frecuentes</h2>
          <h2 className="text-3xl font-heading font-bold text-brand-dark">Resolvemos tus dudas</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-brand-fawn/20 rounded-lg overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-heading font-bold ${openIndex === index ? 'text-brand-blue' : 'text-brand-dark'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-brand-blue" />
                ) : (
                  <ChevronDown className="text-brand-dark/40" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="p-5 pt-0 text-brand-dark/70 font-body text-sm leading-relaxed border-t border-dashed border-brand-fawn/20 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;