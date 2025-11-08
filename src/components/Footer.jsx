import React from 'react';

// --- COMPONENTE "FOOTER" (RODAPÉ) ---
const Footer = () => {
  return (
    <footer className="py-8 bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto max-w-6xl px-6 text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Welberth. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;