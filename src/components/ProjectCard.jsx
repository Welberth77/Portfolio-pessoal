import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';

// --- COMPONENTE DE CARD DE PROJETO ---
const ProjectCard = ({ title, description, tags, githubUrl, liveUrl, imageUrl }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col mb-6 transition-transform duration-300 hover:scale-[1.02] hover:shadow-cyan-500/30 transition-all duration-300 ease-in-out hover:shadow-2xl">
      {/* Imagem do Projeto */}
      <img 
        src={imageUrl || 'https://placehold.co/600x400/111827/4b5563?text=Meu+Projeto'} 
        alt={`Preview do projeto ${title}`}
        className="w-full h-48 object-cover"
        onError={(e) => e.currentTarget.src = 'https://placehold.co/600x400/111827/4b5563?text=Erro+na+Imagem'}
      />
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{description}</p>
        
        {/* Tags de Tecnologia */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-cyan-900 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4 mt-auto">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 transition-colors duration-300 hover:text-cyan-400"
            >
              <Github size={20} className="mr-2" />
              Código
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-cyan-400 font-semibold transition-colors duration-300 hover:text-cyan-300"
            >
              Ver Ao Vivo
              <ArrowUpRight size={20} className="ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;