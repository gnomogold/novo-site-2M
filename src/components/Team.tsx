import React from 'react';
import { UserPlus, GraduationCap, Users, CheckCircle } from 'lucide-react';

interface TeamProps {
  onCtaClick: () => void;
}

export const Team: React.FC<TeamProps> = ({ onCtaClick }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Construindo uma equipe que joga junto e te liberta da operação.
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserPlus className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Recrutamento</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Sistema de atração e seleção das pessoas certas para sua equipe.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Treinamento</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Programas estruturados que transformam funcionários em parceiros.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Cultura</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Ambiente onde todos se sentem donos e trabalham pelos resultados.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-black to-gray-900 p-8 rounded-2xl text-white mb-16 border border-red-600/30">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-red-500">O Resultado</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <div className="text-lg">Equipe que resolve problemas, não cria</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <div className="text-lg">Processos que funcionam sem você</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <div className="text-lg">Tempo livre para focar no que importa</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="text-6xl font-bold text-red-500 mb-2">70%</div>
                <div className="text-xl">Menos tempo na operação</div>
                <div className="text-sm text-gray-400 mt-2">Média dos nossos clientes</div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={onCtaClick}
              className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              QUERO UMA EQUIPE QUE FUNCIONE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};