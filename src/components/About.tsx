import React from 'react';
import {ShieldCheck, Users, Clock, FlaskConical} from 'lucide-react';

interface ValuePropProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueProp: React.FC<ValuePropProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-4">
        <div className="p-3 bg-gold-500/10 rounded-full text-gold-500">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const values = [
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: "Consultoria Especializada",
      description: "Serviços dedicados a cemitérios e crematórios."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Equipes Multidisciplinares",
      description: "Com vasta experiência setorial."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Compromisso Sólido",
      description: "Com eficiência, excelência e responsabilidade ambiental.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Ética",
      description: "Projetos personalizados em conformidade com normas e regulamentos vigentes.",
    }
  ];

  return (
    <section id="about" className="py-24 bg-navy-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="NecroEngenharia building" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gold-500/10 rounded-full z-0"></div>
            <div className="absolute -top-4 -left-4 w-40 h-40 bg-gold-500/10 rounded-full z-0"></div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Sobre a <span className="text-gold-500">NecroEngenharia</span>
            </h2>
            
            <p className="text-gray-300 mb-6 text-lg">
              Fundada sobre a ideia de que a excelência técnica pode coexistir com o respeito à dignidade humana, 
              a NecroEngenharia oferece uma abordagem única que combina consultoria de engenharia de alta qualidade 
              com serviços funerários compassivos.
            </p>
            
            <p className="text-gray-300 mb-8 text-lg">
              Nossa equipe multidisciplinar de engenheiros e especialistas em serviços funerários 
              trabalha em harmonia, criando soluções integradas que honram tanto os aspectos técnicos 
              quanto os emocionais envolvidos em nossos projetos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <ValueProp
                  key={index}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;