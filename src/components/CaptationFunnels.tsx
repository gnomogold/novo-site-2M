import React from 'react';
import { Target, Users, Share2, Gift, MessageSquare, TrendingUp, Zap } from 'lucide-react';

interface CaptationFunnelsProps {
  onCtaClick: () => void;
}

export const CaptationFunnels: React.FC<CaptationFunnelsProps> = ({ onCtaClick }) => {
  const funnels = [
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Funil de Aquisição",
      description: "Atração de novos clientes através de múltiplos canais"
    },
    {
      icon: <Gift className="w-8 h-8 text-white" />,
      title: "Funil de Oferta",
      description: "Combos irresistíveis que aumentam o ticket médio"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      title: "Funil de Social Selling",
      description: "Vendas através de relacionamento nas redes sociais"
    },
    {
      icon: <Share2 className="w-8 h-8 text-white" />,
      title: "Funil de Indicação",
      description: "Sistema de recompensas para clientes que indicam"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Funil de Reativação",
      description: "Reconquista de clientes inativos com ofertas especiais"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Funil de Upsell",
      description: "Aumento do valor do pedido com sugestões inteligentes"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Inovação que gera pedidos: Múltiplos funis para nunca mais depender de uma única fonte de clientes.
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Enquanto o mercado se limita ao básico, nós construímos um ecossistema de captação robusto para o seu negócio. 
            Implementamos funis de marketing e comerciais que trabalham juntos para atrair, converter e fidelizar clientes 
            de forma contínua, garantindo mais pedidos e maior lucratividade.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Ecossistema de Funis - Representação Visual */}
          <div className="relative mb-16">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-12">
              {funnels.map((funnel, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-xl shadow-xl border border-red-500/30 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      {funnel.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {funnel.title}
                    </h3>
                  </div>
                  <p className="text-red-100 leading-relaxed">
                    {funnel.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-2xl border-4 border-red-600 z-10 hidden lg:block">
              <Zap className="w-12 h-12 text-red-600" />
            </div>
            
            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ zIndex: 1 }}>
              <defs>
                <radialGradient id="connectionGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0.1" />
                </radialGradient>
              </defs>
              <circle cx="50%" cy="50%" r="200" fill="url(#connectionGradient)" />
            </svg>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
            <div className="grid lg:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-red-500 mb-2">6+</div>
                <div className="text-lg text-gray-300">Funis Diferentes</div>
                <div className="text-sm text-gray-400">Trabalhando simultaneamente</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-500 mb-2">300%</div>
                <div className="text-lg text-gray-300">Mais Leads</div>
                <div className="text-sm text-gray-400">Comparado a estratégias únicas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-500 mb-2">24/7</div>
                <div className="text-lg text-gray-300">Captação Ativa</div>
                <div className="text-sm text-gray-400">Mesmo quando você dorme</div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={onCtaClick}
              className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              QUERO INOVAR NA MINHA CAPTAÇÃO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};