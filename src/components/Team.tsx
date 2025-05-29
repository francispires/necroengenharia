import React from 'react';
import {Linkedin, Mail} from 'lucide-react';

interface TeamMemberProps {
    name: string,
    role: string,
    image: string,
    bio: string,
    linkedin?: string,
    formation?: string
}

const TeamMember: React.FC<TeamMemberProps> = ({name, role, image, bio, linkedin, formation}) => {
    return (
        <div
            className="bg-navy-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl group">
            <div className="relative overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-end space-x-2">
                    <button
                        className="p-2 bg-navy-800/80 rounded-full text-white hover:text-gold-500 transition-colors">
                        {linkedin ? (
                            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <Linkedin size={16}/>
                            </a>
                        ) : (
                            <Linkedin size={16}/>
                        )}
                    </button>
                    <button
                        className="p-2 bg-navy-800/80 rounded-full text-white hover:text-gold-500 transition-colors">
                        <Mail size={16}/>
                    </button>
                </div>
            </div>
            <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-1">{name}</h3>
                <p className="text-gold-500 font-medium mb-1">{role}</p>
                <p className="text-gray-300 font-bold">{formation}</p>
                <p className="text-gray-300">{bio}</p>
            </div>
        </div>
    );
};

const Team: React.FC = () => {
    const teamMembers = [
        {
            name: "Aline Silva",
            role: "Especialista em Gestão de Operações",
            image: "/Aline.jpg",
            formation: "Engenheira Química e de Materiais, Técnica em Controle Ambiental",
            bio: "Especialista em Gestão de Cemitérios e Crematórios.",
            linkedin: "https://www.linkedin.com/in/aline-rodrigues-silva",
        },
        {
            name: "Camila Almeida",
            role: "Especialista em Projetos e Regulatório",
            image: "/Camila.jpg",
            formation: "Engenheira Sanitarista, Ambiental, Segurança do Trabalho e Produção",
            bio: "Especialista em Regulatório Ambiental e KPI's Gestão de Projetos.",
            linkedin: "https://www.linkedin.com/in/camilafariaalmeida",
        },
        {
            name: "Francis Pires",
            role: "Especialista em Tecnologia e Inovação",
            image: "/Francis.jpg",
            formation: "Engenheiro da Computação, Cientista de Dados / IA",
            bio: "Especialista de Transformação Digital & Data Analytics. Desenvolvedor Sênior.",
            linkedin: "https://www.linkedin.com/in/francispires",
        }
    ];

    return (
        <section id="team" className="py-16 bg-navy-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                        Nossa <span className="text-gold-500">Equipe</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Conheça os profissionais dedicados que combinam expertise técnica e sensibilidade
                        humana para oferecer nossos serviços de excelência.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamMember
                            key={index}
                            name={member.name}
                            role={member.role}
                            image={member.image}
                            bio={member.bio}
                            linkedin={member.linkedin}
                            formation={member.formation}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;