import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, author, role }) => {
  return (
    <div className="bg-navy-800 rounded-lg p-8 shadow-lg">
      <div className="text-gold-500 mb-4">
        <Quote className="w-10 h-10" strokeWidth={1.5} />
      </div>
      <p className="text-gray-300 text-lg mb-6 italic">"{content}"</p>
      <div>
        <h4 className="text-white font-bold font-serif">{author}</h4>
        <p className="text-gray-400">{role}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "A NecroEngenharia combinou perfeitamente a precisão técnica necessária para nosso projeto estrutural com uma abordagem respeitosa durante um momento difícil para nossa família.",
      author: "Roberto Almeida",
      role: "Cliente Corporativo"
    },
    {
      content: "O memorial que projetaram para minha mãe foi impecável, combinando beleza estética com durabilidade estrutural. Superou todas as expectativas em um momento tão delicado.",
      author: "Mariana Costa",
      role: "Cliente Particular"
    },
    {
      content: "Como parceiros em um grande projeto urbano, ficamos impressionados com a capacidade da NecroEngenharia de integrar considerações técnicas e humanas de forma tão harmoniosa.",
      author: "Carlos Mendonça",
      role: "Arquiteto Parceiro"
    },
    {
      content: "A consultoria estrutural para nosso cemitério-parque foi realizada com excelência técnica e uma compreensão profunda do significado emocional do espaço.",
      author: "Patrícia Viana",
      role: "Diretora de Memorial"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Calculate indices for displayed testimonials
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <section id="testimonials" className="py-24 bg-navy-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            O Que Nossos <span className="text-gold-500">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça as experiências de quem confiou em nossos serviços para projetos 
            importantes e momentos significativos.
          </p>
        </div>
        
        <div className="hidden lg:block relative">
          <div className="grid grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Testimonial
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
          <div className="flex justify-center mt-12 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-navy-700 hover:bg-gold-500 text-white transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-navy-700 hover:bg-gold-500 text-white transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Mobile Testimonials */}
        <div className="lg:hidden">
          <Testimonial
            content={testimonials[currentIndex].content}
            author={testimonials[currentIndex].author}
            role={testimonials[currentIndex].role}
          />
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-navy-700 hover:bg-gold-500 text-white transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-navy-700 hover:bg-gold-500 text-white transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;