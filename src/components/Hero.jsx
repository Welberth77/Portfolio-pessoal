import { Github, Linkedin, Mail } from 'lucide-react'; // <-- LINHA ADICIONADA
import fotoPerfil from '../assets/foto-perfil.jpg';

// --- COMPONENTE DO HERO (INÍCIO) ---
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 md:pt-0">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Coluna de Texto e Links */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-extrabold text-white mb-4">
              Olá, eu sou <span className="text-cyan-400">Welberth Oliveira</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
              Desenvolvedor Full Stack
            </p>
            
            {/* Links Sociais */}
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://github.com/welberth77" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-transform duration-300 hover:text-cyan-400 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={40} />
              </a>
              <a
                href="https://linkedin.com/in/welberth-oliveira" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-transform duration-300 hover:text-cyan-400 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={40} />
              </a>
              <a
                href="mailto:welbertholiveira250@gmail.com" 
                className="text-gray-400 transition-transform duration-300 hover:text-cyan-400 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={40} />
              </a>
            </div>
          </div>

          {/* Coluna da Imagem */}
          <div className="flex justify-center md:justify-end order-first md:order-last">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <img
                src={fotoPerfil} 
                alt="Foto de Welberth Oliveira"
                className="rounded-full w-full h-full object-cover border-4 border-cyan-400 shadow-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero; // <-- Provavelmente você também adicionou isso