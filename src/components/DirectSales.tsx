import React from 'react';
import { Smartphone, Heart, Target, MessageCircle, Users, TrendingUp, Zap } from 'lucide-react';

interface DirectSalesProps {
  onCtaClick: () => void;
}

export const DirectSales: React.FC<DirectSalesProps> = ({ onCtaClick }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Pare de "alugar" clientes. É hora de construir sua própria audiência.
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <MessageCircle className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-3">
                    Ecossistema de Vendas Diretas
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Criamos seu canal de vendas próprio com Cardápio Digital e atendimento inteligente no WhatsApp. Retome o controle dos marketplaces.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-black to-gray-900 p-6 rounded-2xl text-white">
                <div className="text-center mb-6">
                  <Smartphone className="w-12 h-12 mx-auto mb-3 text-red-500" />
                  <h3 className="text-xl font-bold text-red-500">Vendas Diretas</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                    <div className="text-sm">Cardápio Digital Próprio</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                    <div className="text-sm">WhatsApp Business Otimizado</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                    <div className="text-sm">Sistema de Pedidos Integrado</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Ecossistema Circular */}
              <div className="relative w-96 h-80 mx-auto">
                {/* Círculo Central */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-red-600 rounded-full flex items-center justify-center z-10">
                  <Target className="w-8 h-8 text-white" />
                </div>
                
                {/* Elementos do Ecossistema */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg border-2 border-red-200">
                  <Users className="w-6 h-6 text-red-600 mx-auto mb-1" />
                  <div className="text-xs font-semibold text-center text-gray-800">Funis Marketing + Comercial</div>
                </div>
                
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 bg-white p-3 rounded-lg shadow-lg border-2 border-red-200">
                  <TrendingUp className="w-6 h-6 text-red-600 mx-auto mb-1" />
                  <div className="text-xs font-semibold text-center text-gray-800">Produtos & Ofertas</div>
                </div>
                
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg border-2 border-red-200">
                  <Heart className="w-6 h-6 text-red-600 mx-auto mb-1" />
                  <div className="text-xs font-semibold text-center text-gray-800">Fidelização</div>
                </div>
                
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-lg shadow-lg border-2 border-red-200">
                  <Zap className="w-6 h-6 text-red-600 mx-auto mb-1" />
                  <div className="text-xs font-semibold text-center text-gray-800">Automação</div>
                </div>
                
                {/* Linhas conectoras */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }} viewBox="0 0 384 320">
                  <circle cx="192" cy="160" r="100" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                </svg>
              </div>
              
              <div className="text-center mt-8">
                <h3 className="text-2xl font-bold text-black mb-3">
                  Sistema de Fidelização e Recorrência
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Implementamos estratégias para transformar compradores de uma única vez em fãs leais que pedem de novo e de novo, aumentando drasticamente o valor de cada cliente (LTV).
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={onCtaClick}
              className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              QUERO FIDELIZAR MEUS CLIENTES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};