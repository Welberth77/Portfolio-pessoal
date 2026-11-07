import { useState } from 'react';
import { Menu, X } from 'lucide-react';

// --- CABEÇALHO (NAVBAR) ---
const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#skills', label: 'Skills' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="logo">
          <span className="logo-dot" aria-hidden="true"></span>
          welberth<span className="muted">.dev</span>
        </a>

        {/* Links desktop */}
        <nav className="nav-links">
          {navLinks.slice(0, 3).map((link) => (
            <a key={link.label} href={link.href} onClick={(e) => handleScroll(e, link.href)} className="nav-link">
              {link.label}
            </a>
          ))}
          <a href="#contato" onClick={(e) => handleScroll(e, '#contato')} className="nav-cta">Contato</a>
        </nav>

        {/* Botão mobile */}
        <button className="nav-burger" onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menu" aria-expanded={isOpen}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menu mobile */}
      <div className={`mobile-menu${isOpen ? ' open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} onClick={(e) => handleScroll(e, link.href)}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
