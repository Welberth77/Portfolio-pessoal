import { Github, ArrowUpRight } from 'lucide-react';
import ProjectCard from './ProjectCard.jsx';

// Imagens
import CuidaPetImage from '../images/CuidaPet.png';
import AchadosPerdidosImage from '../images/SistemaAchadosPerdidos.png';
import MeteorFallImage from '../images/MeteorFall.png';
import OnlinePizzariaImage from '../images/OnlinePizzaria.png';
import CopiaSpotifyImage from '../images/copia-spotify.png';
import PokeDevImage from '../images/projeto-pokedev.png';
import BlueWarriorImage from '../images/imagem-blue-warrior.png';

// --- PROJETO EM DESTAQUE ---
const featured = {
  title: 'CuidaPet',
  tags: ['React', 'Tailwind CSS', 'Supabase'],
  githubUrl: 'https://github.com/Welberth77/CuidaPet',
  liveUrl: 'https://cuida-pet-olive.vercel.app',
  imageUrl: CuidaPetImage,
};

// --- DEMAIS PROJETOS ---
const projectData = [
  {
    title: 'Sistema de Achados e Perdidos',
    description: 'Aplicação web para gestão de itens achados em uma instituição — cadastro, custódia e devolução, com autenticação e papéis de acesso. Responsável pelo front-end em React, com apoio da IA Claude Design e foco em acessibilidade.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/Welberth77/Sistema-Achados-e-Perdidos',
    imageUrl: AchadosPerdidosImage,
  },
  {
    title: 'MeteorFall',
    description: 'Projeto do hackathon NASA Space Apps: um site que simula o impacto de meteoros na Terra com dados reais da NASA, estimando danos e o número de pessoas afetadas.',
    tags: ['React', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/GiorgioRafael/SpaceAppsMeteor',
    liveUrl: 'https://meteorfall.vercel.app',
    imageUrl: MeteorFallImage,
  },
  {
    title: 'Pizzaria Online',
    description: 'Sistema web completo para pedidos de pizza, com banco de dados e tempo estimado de preparo. Projeto final do curso CS50 da Harvard University.',
    tags: ['Python', 'Flask', 'SQLite'],
    githubUrl: 'https://github.com/Welberth77/CS50',
    imageUrl: OnlinePizzariaImage,
  },
  {
    title: 'Cópia Spotify',
    description: 'Imersão Dev da Alura: uma cópia simplificada da interface do Spotify, reforçando conceitos de front-end num layout funcional e responsivo.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/Welberth77/Spotify-imersao-alura',
    liveUrl: 'https://welberth77.github.io/Spotify-imersao-alura',
    imageUrl: CopiaSpotifyImage,
  },
  {
    title: 'Pokedev',
    description: 'Site interativo com temática Pokémon para explorar informações, com interface responsiva para uma navegação agradável em diferentes dispositivos.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/Welberth77/projeto-pokedevs',
    liveUrl: 'https://welberth77.github.io/projeto-pokedevs',
    imageUrl: PokeDevImage,
  },
  {
    title: 'Blue Warrior',
    description: 'Jogo de sobrevivência feito no Godot com GDScript, onde o jogador controla um guerreiro azul enfrentando ondas de inimigos.',
    tags: ['Godot Engine', 'GD Script'],
    githubUrl: 'https://github.com/Welberth77/Godot',
    liveUrl: 'https://welberth.itch.io/bluewarrior',
    imageUrl: BlueWarriorImage,
  },
];

// --- PROJETOS ---
const Projects = () => {
  return (
    <section id="projetos" className="section">
      <div className="container section-inner">
        <p className="kicker">03 — Projetos</p>
        <h2 className="section-title mb">Seleção de trabalhos</h2>

        {/* Destaque */}
        <article className="featured">
          <div className="featured-media">
            <span className="featured-flag">★ Destaque</span>
            <img src={featured.imageUrl} alt={`Preview do projeto ${featured.title}`} />
          </div>
          <div className="featured-body">
            <h3>{featured.title}</h3>
            <p>
              Meu projeto mais completo: um site para ajudar tutores a organizarem os cuidados com seus pets.
              Fui responsável pelo <strong>front-end</strong>, desenvolvido em React e Tailwind CSS, com os dados
              persistidos no <strong>Supabase</strong>, cuidando de interfaces amigáveis e funcionais.
            </p>
            <div className="tags-accent">
              {featured.tags.map((tag) => (
                <span key={tag} className="tag-accent">{tag}</span>
              ))}
            </div>
            <div className="featured-actions">
              <a href={featured.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Ver ao vivo <ArrowUpRight size={17} />
              </a>
              <a href={featured.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <Github size={17} /> Código
              </a>
            </div>
          </div>
        </article>

        {/* Grid */}
        <div className="proj-grid">
          {projectData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
