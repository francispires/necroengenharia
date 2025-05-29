import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    company: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      await emailjs.send(
        'service_80h47f4', // Service ID from EmailJS
        'template_c2t58ab', // Template ID from EmailJS
        {
          to_email: 'francis@francispires.com.br',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          company: formData.company
        },
        'BjjvaEAD3qUGSizMR' // Public Key from EmailJS
      );

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        company: ''
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-navy-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Entre em <span className="text-gold-500">Contato</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos à disposição para atender suas necessidades com excelência e respeito.
            Entre em contato para uma consulta inicial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-navy-800 p-8 rounded-lg shadow-lg">
            <h3 className="font-serif text-2xl font-bold text-white mb-6">
              Envie-nos uma <span className="text-gold-500">Mensagem</span>
            </h3>
            
            {isSubmitted ? (
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 flex items-center">
                <CheckCircle className="text-green-500 w-6 h-6 mr-3" />
                <p className="text-white">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
                    <p className="text-red-500">{error}</p>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-navy-700 border border-navy-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 text-white"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-navy-700 border border-navy-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 text-white"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-white mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-navy-700 border border-navy-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 text-white"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Empresa
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-navy-700 border border-navy-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 text-white"
                        placeholder="Empresa (opcional)"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-white mb-2">
                      Serviço de Interesse
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-navy-700 border border-navy-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 text-white"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="Consultoria">Consultoria de Engenharia</option>
                      <option value="Edital">Consultoria de Edital</option>
                      <option value="Funeral">Regulatório Funerário</option>
                      <option value="Outros">Outro</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-white mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-navy-700 border border-navy-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 text-white resize-none"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 rounded bg-gold-500 hover:bg-gold-600 text-gray-900 font-medium transition-colors flex items-center justify-center ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                        <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Mensagem
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
          
          <div>
            <div className="bg-navy-800 p-8 rounded-lg shadow-lg mb-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                Informações de <span className="text-gold-500">Contato</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-3 bg-gold-500/10 rounded-full text-gold-500">
                      <MapPin className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Localização</h4>
                    <p className="text-gray-300">São Paulo, SP - Brasil</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-3 bg-gold-500/10 rounded-full text-gold-500">
                      <Phone className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Telefone</h4>
                    <p className="text-gray-300"><a href="tel:+55 (31) 99764-1304">+55 (31) 99764-1304</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-3 bg-gold-500/10 rounded-full text-gold-500">
                      <Mail className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Email</h4>
                    <p className="text-gray-300">aline@necroengenharia.com.br</p>
                    <p className="text-gray-300">suporte@necroengenharia.com.br</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;