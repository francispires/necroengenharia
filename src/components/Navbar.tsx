import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-700 shadow-lg backdrop-blur-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="NecroEngenharia Logo"
              className="h-8 w-auto mr-2"
            />
            <span className="font-serif text-xl font-bold text-white">
              Necro<span className="text-gold-500">Engenharia</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-gold-500 transition-colors">
              Início
            </a>
            <a href="#services" className="text-white hover:text-gold-500 transition-colors">
              Serviços
            </a>
            <a href="#about" className="text-white hover:text-gold-500 transition-colors">
              Sobre
            </a>
            <a href="#team" className="text-white hover:text-gold-500 transition-colors">
              Equipe
            </a>
            <a 
              href="#contact" 
              className="flex items-center px-4 py-2 rounded bg-gold-500 hover:bg-gold-600 text-gray-900 font-medium transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              Contato
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 py-4">
            <a
              href="#home"
              className="text-white hover:text-gold-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </a>
            <a
              href="#services"
              className="text-white hover:text-gold-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="#about"
              className="text-white hover:text-gold-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#team"
              className="text-white hover:text-gold-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Equipe
            </a>
            <a
              href="#contact"
              className="flex items-center px-4 py-2 w-fit rounded bg-gold-500 hover:bg-gold-600 text-gray-900 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="h-4 w-4 mr-2" />
              Contato
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;