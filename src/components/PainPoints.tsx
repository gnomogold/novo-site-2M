import React from 'react';
import { TrendingDown, Users, Zap, BarChart3 } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const symptoms = [
    {
      icon: <TrendingDown className="w-12 h-12 text-red-500" />,
      title: "Lucro Amassado",
      description: "As altas taxas dos marketplaces e os custos descontrolados consomem sua margem."
    },
    {
      icon: <Users className="w-12 h-12 text-red-500" />,
      title: "Clientes 'Alugados'",
      description: "Você paga caro por clientes que pertencem ao aplicativo e nunca mais voltam."
    },
    {
      icon: <Zap className="w-12 h-12 text-red-500" />,
      title: "Operação Caótica",
      description: "A equipe depende de você para tudo, os processos falham e a qualidade oscila."
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-red-500" />,
      title: "Vendas Instáveis",
      description: "Um dia bomba, no outro é um deserto. Zero previsibilidade."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Seu negócio sofre com algum destes sintomas?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {symptoms.map((symptom, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {symptom.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {symptom.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {symptom.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};