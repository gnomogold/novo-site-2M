import React, { useState } from 'react';
import { Send, Clock, Shield, Trophy } from 'lucide-react';

export const ImmediateForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    instagram: '',
    sector: 'Food Service',
    revenue: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // For phone field, only allow numbers, spaces, parentheses, and hyphens
    if (name === 'phone') {
      const cleanedValue = value.replace(/[^0-9\s()-]/g, '');
      setFormData(prev => ({ ...prev, [name]: cleanedValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send form data to email
      const emailData = {
        to: 'sac2media@gmail.com',
        subject: 'Novo Diagnóstico Agendado',
        body: `
          Nome e Sobrenome: ${formData.fullName}
          E-mail: ${formData.email}
          DDD + WhatsApp: ${formData.phone}
          Instagram: ${formData.instagram}
          Setor: ${formData.sector}
          Faturamento Mensal: ${formData.revenue}
        `
      };
      
      // In a real implementation, you would send this to your backend
      console.log('Form data to be sent:', emailData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Redirect to thank you page
      window.location.href = 'https://assessoria2media.com/obrigado-1/';
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <Trophy className="w-20 h-20 mx-auto mb-6 text-red-500" />
            <h2 className="text-4xl font-bold mb-6">Diagnóstico Agendado!</h2>
            <p className="text-xl mb-8 text-gray-300">
              Em breve nossa equipe entrará em contato para agendar sua Sessão de Diagnóstico Estratégico.
            </p>
            <div className="bg-red-600/20 p-6 rounded-lg backdrop-blur-sm border border-red-600/30">
              <p className="text-lg">
                Prepare-se para descobrir exatamente onde sua operação está perdendo dinheiro 
                e como transformar isso em lucro real.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Pronto para virar o jogo? Comece com um diagnóstico gratuito.
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Preencha o formulário abaixo para agendar sua <strong className="text-red-600">Sessão de Diagnóstico Estratégico</strong>. 
              Um de nossos especialistas vai analisar sua operação e desenhar um plano de ação para reverter o quadro de baixo lucro.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-red-600">Diagnóstico Completo</h3>
                  <p className="text-gray-700 text-lg">
                    60 minutos analisando sua operação com um especialista que já ajudou 
                    centenas de deliveries a aumentarem o lucro.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-red-600">100% Gratuito</h3>
                  <p className="text-gray-700 text-lg">
                    Sem compromisso. Mesmo que você não feche conosco, 
                    sairá da sessão com insights valiosos para implementar.
                  </p>
                </div>
              </div>
              
              <div className="bg-red-600/10 border border-red-600/30 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-red-600 mb-3">⚡ Vagas Limitadas</h4>
                <p className="text-gray-800">
                  Para garantir a qualidade do atendimento, aceitamos apenas 
                  <strong className="text-red-600"> 15 diagnósticos por semana</strong>.
                </p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-black to-gray-900 p-8 rounded-2xl shadow-2xl border border-red-600/30">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Agende Seu Diagnóstico
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-300 mb-2">
                    Nome e Sobrenome
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                    placeholder="Digite seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                    placeholder="Seu melhor e-mail"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                    DDD + WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                
                <div>
                  <label htmlFor="instagram" className="block text-sm font-semibold text-gray-300 mb-2">
                    Instagram
                  </label>
                  <input
                    type="text"
                    id="instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                    placeholder="@ do seu delivery"
                  />
                </div>
                
                <div>
                  <label htmlFor="revenue" className="block text-sm font-semibold text-gray-300 mb-2">
                    Faturamento Mensal
                  </label>
                  <select
                    id="revenue"
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="ate-30k">Até R$30 mil</option>
                    <option value="31k-60k">De R$31 mil à R$60 mil</option>
                    <option value="61k-100k">De R$61 mil à R$100 mil</option>
                    <option value="101k-200k">De R$101 mil à R$200 mil</option>
                    <option value="201k-400k">De R$201 mil à R$400 mil</option>
                    <option value="401k-1mi">De R$401 mil à R$1 milhão</option>
                    <option value="1mi-5mi">De R$1 milhão à R$5 milhões</option>
                    <option value="acima-5mi">Mais de R$5 milhões</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white text-lg font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <div className="animate-spin w-6 h-6 border-2 border-white/30 border-t-white rounded-full"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>AGENDAR MEU DIAGNÓSTICO GRATUITO</span>
                    </>
                  )}
                </button>
              </div>
              
              <p className="text-sm text-gray-400 text-center mt-4">
                Seus dados estão protegidos. Não enviamos spam.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};