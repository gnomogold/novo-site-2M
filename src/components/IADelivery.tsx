import React from 'react';
import { CheckCircle } from 'lucide-react';

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
          <AnimatedChatMockup />
        </div>
      </div>
    </section>
  );
};

const AnimatedChatMockup: React.FC = () => {
  const [messages, setMessages] = React.useState<Array<{sender: string, text: string}>>([]);
  
  const allMessages = [
    {sender:"bot", text:"Oi, tudo bem? Está pensando em pedir algo gostoso hoje?"},
    {sender:"client", text:"Sim! Quero fazer um pedido."},
    {sender:"bot", text:"Perfeito! Vi aqui que sua favorita é a Pizza Quatro Queijos grande, que você pediu na última sexta. Quer repetir essa delícia hoje?"},
    {sender:"client", text:"Quero sim, pode ser."},
    {sender:"bot", text:"Excelente escolha! Hoje você pode adicionar uma Pizza Broto Doce de Prestígio por apenas R$10,99 — perfeita para aproveitar com sua esposa e deixar o dia dela ainda mais feliz. Quer incluir essa Broto deliciosa?"}
  ];

  const runConversation = React.useCallback(() => {
    setMessages([]); // Clear messages before starting
    allMessages.forEach((msg, i) => {
      setTimeout(() => {
        setMessages(prev => [...prev, msg]);
      }, i * 4000); // 4 seconds between messages (slower)
    });
  }, []);

  React.useEffect(() => {
    runConversation();
    
    // Set up looping - restart after all messages + 8 seconds (longer pause)
    const loopInterval = setInterval(() => {
      runConversation();
    }, allMessages.length * 4000 + 8000);
    
    return () => clearInterval(loopInterval);
  }, [runConversation]);

  return (
    <div className="bg-gray-800 rounded-xl shadow-xl p-6 w-full max-w-sm text-white font-sans h-96">
      <h3 className="text-xl font-bold flex items-center mb-4">
        <span className="mr-2">🔴</span>
        IA Delivery Assistant
      </h3>
      <div className="space-y-3 h-48 overflow-hidden flex flex-col">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[80%] px-4 py-2 rounded-lg mb-2 animate-fadeIn ${
              msg.sender === 'bot'
                ? 'bg-gray-700 text-white'
                : 'bg-red-600 text-white ml-auto'
            }`}
            style={{
              animation: 'fadeIn 0.6s ease forwards'
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex justify-around text-center">
        <div>
          <div className="flex items-center justify-center text-green-400">
            <span className="mr-1">🔔</span><span className="text-lg font-semibold">24/7</span>
          </div>
          <span className="text-white text-sm">Disponível</span>
        </div>
        <div>
          <div className="flex items-center justify-center text-green-400">
            <span className="mr-1">📊</span><span className="text-lg font-semibold">+35%</span>
          </div>
          <span className="text-white text-sm">Ticket Médio</span>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease forwards;
        }
      `}</style>
    </div>
  );
};