import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeaderProps {
  onCtaClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Seu delivery <span className="text-red-500">fatura</span>, mas o lucro não aparece?
            </h1>
            
            <p className="text-xl lg:text-2xl mb-10 text-gray-300 leading-relaxed">
              Descubra o sistema para transformar sua operação em um negócio previsível, 
              lucrativo e que não dependa 100% de você.
            </p>
            
            <button 
              onClick={onCtaClick}
              className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              QUERO O DIAGNÓSTICO DO MEU DELIVERY
            </button>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg mb-2 text-white">Faturamento Mensal</h3>
                <div className="text-3xl font-bold text-white">R$ 120.000</div>
              </div>
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2 text-white">Lucro Real</h3>
                <div className="text-3xl font-bold text-white">R$ 5.400</div>
                <div className="text-sm opacity-80 text-white">Apenas 4.5%</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-red-500" />
        </div>
      </div>
    </section>
  );
};