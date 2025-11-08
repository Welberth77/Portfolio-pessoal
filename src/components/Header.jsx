import { useState } from 'react';
import { Menu, X } from 'lucide-react';

// --- COMPONENTE DO CABEÇALHO (NAVBAR) ---
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navegação pelo id das páginas
  const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#skills', label: 'Skills'},
    { href: '#projetos', label: 'Projetos' },
    { href: '#contato', label: 'Contato' },
  ];

  // Função para scroll suave
  const handleScroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-80 backdrop-blur-md z-50 shadow-lg">
      <div className="container mx-auto max-w-6xl px-6 py-4 flex justify-between items-center">
        {/* Logo ou Nome */}
        <a 
          href="#" 
          onClick={(e) => handleScroll(e, '#home')}
          className="text-2xl font-bold text-white transition-colors duration-300 hover:text-cyan-400"
        >
          Welberth.dev
        </a>

        {/* Links do Menu Desktop */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-gray-300 font-medium transition-colors duration-300 hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Botão do Menu Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Abrir menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 shadow-xl">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-200 text-lg font-medium text-center transition-colors duration-300 hover:bg-gray-700 p-2 rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;