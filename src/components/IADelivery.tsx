import React from 'react';
import { Bot, Clock, TrendingUp, Users, CheckCircle } from 'lucide-react';

interface IADeliveryProps {
  onCtaClick: () => void;
}

export const IADelivery: React.FC<IADeliveryProps> = ({ onCtaClick }) => {
  return (
    <section id="ia-delivery" className="bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        
        {/* Coluna de Texto */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            IA que vende: atendimento 24/7 que reduz custos e aumenta pedidos
          </h2>
          <p className="text-gray-300 mb-6">
            Nossa inteligência de atendimento para deliveries (pizzarias, hamburguerias, restaurantes)
            economiza mão de obra, acelera respostas e faz upsell automático, aumentando o ticket médio.
          </p>
          <ul className="space-y-3 text-gray-200 mb-8">
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span>Economia real em mão de obra</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span>Atendimento instantâneo e sem erros</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span>Conversão maior e upsell inteligente</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span>Automação total, sem depender 100% de você</span>
            </li>
          </ul>
          
          {/* Botão que rola suavemente até o formulário */}
          <button
            onClick={onCtaClick}
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 mb-2"
          >
            Quero IA no meu delivery
          </button>
          <p className="text-xs text-gray-400">
            Integra com WhatsApp, telefone e site • Implementação rápida
          </p>
        </div>
        
        {/* Coluna com Mockup/Ilustração */}
        <div className="flex justify-center items-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl p-8 border border-gray-700 max-w-md w-full">
            <div className="flex items-center space-x-3 mb-6">
              <Bot className="w-8 h-8 text-red-500" />
              <h3 className="text-xl font-bold text-white">IA Delivery Assistant</h3>
            </div>
            
            {/* Simulação de Chat */}
            <div className="space-y-4">
              <div className="bg-gray-700 p-3 rounded-lg">
                <p className="text-sm text-gray-300">👋 Olá! Bem-vindo ao nosso delivery!</p>
              </div>
              <div className="bg-red-600 p-3 rounded-lg ml-8">
                <p className="text-sm text-white">Oi! Quero fazer um pedido</p>
              </div>
              <div className="bg-gray-700 p-3 rounded-lg">
                <p className="text-sm text-gray-300">Perfeito! Que tal nosso combo especial? 🍕</p>
                <p className="text-xs text-gray-400 mt-1">Sugestão automática baseada no perfil</p>
              </div>
            </div>
            
            {/* Métricas */}
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-600">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span className="text-lg font-bold text-green-500">24/7</span>
                </div>
                <p className="text-xs text-gray-400">Disponível</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-lg font-bold text-green-500">+35%</span>
                </div>
                <p className="text-xs text-gray-400">Ticket Médio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};