import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-serif text-xl font-bold mb-4">
              Necro<span className="text-gold-500">Engenharia</span>
            </h4>
            <p className="text-gray-400 mb-6">
              Gestão Avançada para Cemitérios e Crematórios
            </p>
            <div className="flex space-x-4">
              <a target="_blank" href="https://www.instagram.com/necroengenharia" className="p-2 bg-navy-800 rounded-full text-white hover:text-gold-500 transition-colors">
                <Facebook size={18} />
              </a>
              <a target="_blank" href="https://www.instagram.com/necroengenharia" className="p-2 bg-navy-800 rounded-full text-white hover:text-gold-500 transition-colors">
                <Instagram size={18} />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/aline-rodrigues-silva" className="p-2 bg-navy-800 rounded-full text-white hover:text-gold-500 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Navegação Rápida</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-gold-500 transition-colors">Início</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold-500 transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-gold-500 transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-gold-500 transition-colors">Equipe</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-gold-500 transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold-500 transition-colors">Projetos Personalizados</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold-500 transition-colors">Consultoria Técnica</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold-500 transition-colors">Desenvolvimento de Soluções</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold-500 transition-colors">Implementação e Treinamento</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold-500 transition-colors">Regulatório e Monitoramento</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Contate-nos</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  São Paulo, SP - Brasil
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400"><a href="tel:+55 (31) 99764-1304">+55 (31) 99764-1304</a> </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400"><a href="mailto:contato@necroengenharia.com.br">contato@necroengenharia.com.br</a></span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-navy-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NecroEngenharia. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4">
            <button 
              onClick={scrollToTop}
              className="p-2 bg-navy-800 rounded-full text-white hover:text-gold-500 transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;