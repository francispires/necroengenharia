import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-navy-900 text-white"
    >
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-navy-900/95 to-navy-800/80"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/262271/pexels-photo-262271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
            mixBlendMode: 'overlay'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-24 z-10 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="text-white">Necro</span>
          <span className="text-gold-500">Engenharia</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-5 text-gray-200">
          Gestão Avançada para Cemitérios e Crematórios
        </p>
        <p className="text-md md:text-1xl font-light max-w-3xl mx-auto mb-2 text-gray-200">
          Especialistas em Gestão Técnica e Operacional para o Setor do Luto.
        </p>
        <p className="text-md md:text-1xl font-light max-w-3xl mx-auto mb-2 text-gray-200">
          Transformamos rotinas em processos eficientes e respeitosos.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#services" 
            className="px-8 py-3 rounded bg-gold-500 hover:bg-gold-600 text-gray-900 font-medium transition-colors text-lg"
          >
            Nossos Serviços
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 rounded border-2 border-white hover:border-gold-500 text-white hover:text-gold-500 font-medium transition-colors text-lg"
          >
            Fale Conosco
          </a>
        </div>
        
        <button 
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-gold-500 transition-colors"
          aria-label="Rolar para serviços"
        >
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;