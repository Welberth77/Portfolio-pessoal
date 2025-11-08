import ProjectCard from './ProjectCard.jsx'; 

// Imagens
import PokeDevImage from "../images/projeto-pokedev.png";
import BlueWarriorImage from "../images/imagem-blue-warrior.png"
import CopiaSpotifyImage from '../images/copia-spotify.png'
import CuidaPetImage from '../images/CuidaPet.png'
import MeteorFallImage from '../images/MeteorFall.png'
import OnlinePizzariaImage from '../images/OnlinePizzaria.png'

// --- COMPONENTE "PROJETOS" ---
const Projects = () => {
  const projectData = [
    {
      title: 'MeteorFall',
      description: 'Projeto desenvolvido durante o hackathon NASA Space Apps: criamos um site que simula o impacto de meteoros na Terra usando dados reais da NASA. A aplicação estima danos potenciais, calcula o número de pessoas afetadas com base na densidade populacional e mostra o impacto em qualquer região do planeta.',
      tags: ['React', 'HTML5', 'CSS3'],
      githubUrl: 'https://github.com/GiorgioRafael/SpaceAppsMeteor',
      liveUrl: 'https://meteorfall.vercel.app',
      imageUrl: MeteorFallImage
    },
    {
      title: 'Pizzaria Online',
      description: 'Sistema web completo para pedidos de pizza, com integração a banco de dados e exibição do tempo estimado de preparo do pedido. Desenvolvido como projeto final do curso CS50 da Harvard University.',
      tags: ['Python', 'Flask', 'HTML5', 'CSS3', 'Bootstap', 'SQLite', 'Jinja Templates'],
      githubUrl: 'https://github.com/Welberth77/CS50',
      imageUrl: OnlinePizzariaImage
    },
    {
      title: 'CuidaPet',
      description: 'CuidaPet é um site criado com o objetivo de ajudar tutores a organizarem os cuidados com seus pets. Fiquei responsável pelo front-end, usando HTML e CSS, e colaborei no design com o Figma para criar interfaces amigáveis e funcionais.',
      tags: ['HTML5', 'CSS3', 'Figma'],
      githubUrl: 'https://github.com/Welberth77/CuidaPet',
      imageUrl: CuidaPetImage
    },
    {
      title: 'Cópia Spotify',
      description: 'Participei da Imersão Dev da Alura, onde desenvolvi uma cópia simplificada da interface do Spotify utilizando HTML, CSS e JavaScript. O projeto ajudou a reforçar conceitos de front-end e resultou em um layout funcional e responsivo.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'React'],
      githubUrl: 'https://github.com/Welberth77/Spotify-imersao-alura',
      liveUrl: 'https://welberth77.github.io/Spotify-imersao-alura',
      imageUrl: CopiaSpotifyImage
    },
    {
      title: 'Pokedev',
      description: 'Pokedev é um site interativo com temática de Pokémon, permitindo aos usuários explorar informações sobre os Pokedevs e interagir com conteúdos relacionados. Utilizando HTML, CSS e JavaScript, desenvolvi uma interface responsiva para uma navegação agradável em diferentes dispositivos',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      githubUrl: 'https://github.com/Welberth77/projeto-pokedevs',
      liveUrl: 'https://welberth77.github.io/projeto-pokedevs',
      imageUrl: PokeDevImage
    },
    {
      title: 'Blue Warrior',
      description: 'Blue Warrior é um jogo de sobrevivência desenvolvido no Godot com GDScript, onde o jogador controla um guerreiro azul enfrentando ondas de inimigos. Utilizei GDScript e assets prontos no projeto.',
      tags: ['Godot Engine', 'GD Script'],
      githubUrl: 'https://github.com/Welberth77/Godot',
      liveUrl: 'https://welberth.itch.io/bluewarrior',
      imageUrl: BlueWarriorImage
    },
  ];

  return (
    <section id="projetos" className="py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Meus Projetos
        </h2>
        
        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;