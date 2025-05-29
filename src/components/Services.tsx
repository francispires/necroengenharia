import React from 'react';
import {
  HardHat,
  BookOpenCheck,
  AreaChart,
  BookUser,
  LucideNotebookPen, LucideBlocks, LucideCandlestickChart
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-navy-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 border border-navy-700">
      <div className="text-gold-500 mb-4">{icon}</div>
      <h3 className="text-xl font-serif font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const engineeringServices = [
    {
      icon: <LucideNotebookPen className="w-12 h-12" strokeWidth={1.5} />,
      title: "Diagnóstico Completo",
      description: "Avaliação detalhada das operações e infraestrutura."
    },
    {
      icon: <HardHat className="w-12 h-12" strokeWidth={1.5} />,
      title: "Desenvolvimento de Soluções",
      description: "Criação de processos eficazes adaptados à realidade local."
    },
    {
      icon: <BookUser className="w-12 h-12" strokeWidth={1.5} />,
      title: "Implementação e Treinamento",
      description: "Capacitação da equipe para garantir sustentabilidade."
    },
    {
      icon: <AreaChart className="w-12 h-12" strokeWidth={1.5} />,
      title: "Monitoramento Contínuo",
      description: "Ajustes e melhorias para máxima eficiência e qualidade."
    }
  ];

  const funeralServices = [
    {
      icon: <LucideBlocks className="w-12 h-12" strokeWidth={1.5} />,
      title: "Projetos Personalizados",
      description: "Planejamento detalhado para cemitérios, crematórios e espaços de luto."
    },
    {
      icon: <BookOpenCheck className="w-12 h-12" strokeWidth={1.5} />,
      title: "Consultoria Técnica",
      description: "Implantação e otimização de processos operacionais e estratégicos."
    },
    {
      icon: <LucideCandlestickChart className="w-12 h-12" strokeWidth={1.5} />,
      title: "Gestão Operacional",
      description: "Otimização de rotinas, garantia de segurança e atendimento humanizado."
    }
  ];

  return (
    <section id="services" className="py-24 bg-navy-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Nossos <span className="text-gold-500">Serviços</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Combinamos expertise em engenharia com sensibilidade nos serviços funerários, 
            oferecendo soluções integradas com excelência e respeito.
          </p>
        </div>
        
        <div className="mb-20">
          <h3 className="font-serif text-2xl font-bold text-white mb-8 text-center">
            Como <span className="text-gold-500">Atuamos</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engineeringServices.map((service, index) => (
              <ServiceCard
                key={`eng-${index}`}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-serif text-2xl font-bold text-white mb-8 text-center">
            Nossos <span className="text-gold-500">Serviços</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {funeralServices.map((service, index) => (
              <ServiceCard
                key={`fun-${index}`}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;