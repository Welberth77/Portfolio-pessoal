import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import fotoPerfil from '../images/foto-perfil.jpg';

// --- HERO (INÍCIO) ---
const Hero = () => {
  const handleScroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="container hero">
      {/* Texto */}
      <div className="hero-text">
        <p className="kicker">
          <span className="kicker-line" aria-hidden="true"></span>
          Desenvolvedor Full Stack
        </p>
        <h1 className="headline">Welberth<br />Oliveira</h1>
        <p className="lead">
          Estudante de Ciência da Computação e desenvolvedor focado em transformar ideias
          em software real, do conceito à interface, com atenção à <strong>experiência de uso</strong>.
        </p>

        <div className="hero-actions">
          <a href="#projetos" onClick={(e) => handleScroll(e, '#projetos')} className="btn btn-primary">
            Ver projetos <ArrowRight size={17} />
          </a>
          <a href="#contato" onClick={(e) => handleScroll(e, '#contato')} className="btn btn-ghost">
            Fale comigo
          </a>
        </div>

        <div className="socials">
          <a className="social" href="https://github.com/welberth77" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a className="social" href="https://linkedin.com/in/welberth-oliveira" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a className="social" href="mailto:welbertholiveira250@gmail.com" aria-label="E-mail">
            <Mail size={24} />
          </a>
        </div>
      </div>

      {/* Foto */}
      <div className="hero-media">
        <div className="avatar">
          <div className="avatar-frame">
            <img src={fotoPerfil} alt="Foto de Welberth Oliveira" />
          </div>
          <span className="avatar-badge">8º período · CC</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
