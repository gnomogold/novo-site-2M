import React from 'react';
import { Calculator, FileText, TrendingUp } from 'lucide-react';

interface FoundationProps {
  onCtaClick: () => void;
}

export const Foundation: React.FC<FoundationProps> = ({ onCtaClick }) => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            A base de tudo: Transformando seu delivery em uma operação lucrativa e eficiente.
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-500 mb-3">
                    Ficha Técnica e Processos
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Padronizamos sua operação para garantir qualidade máxima com o mínimo de desperdício.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-500 mb-3">
                    Gestão Financeira Inteligente
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Com nossas ferramentas, você saberá o custo exato de cada prato (CMV) e precificará para ter lucro de verdade.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-red-600/30">
              <h3 className="text-3xl font-bold mb-6 text-center text-red-500">Fórmula do Sucesso</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4">
                  <div className="bg-white/10 px-4 py-2 rounded-lg text-center border border-red-600/30">
                    <div className="text-sm text-gray-400">Processos</div>
                    <div className="text-xl font-bold text-white">Padronizados</div>
                  </div>
                  <div className="text-2xl font-bold text-red-500">+</div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg text-center border border-red-600/30">
                    <div className="text-sm text-gray-400">Finanças</div>
                    <div className="text-xl font-bold text-white">Controladas</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">=</div>
                </div>
                
                <div className="bg-red-600 px-6 py-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-white">Base Sólida</div>
                  <div className="text-sm text-red-100">Para crescimento sustentável</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={onCtaClick}
              className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              QUERO TER CONTROLE DOS MEUS NÚMEROS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};