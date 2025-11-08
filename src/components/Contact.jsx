import React from 'react';

// --- COMPONENTE "CONTATO" ---
const Contact = () => {
  return (
    <section id="contato" className="py-20 md:py-32">
      <div className="container mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Entre em Contato
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Estou sempre aberto a novas oportunidades e conexões. 
          Sinta-se à vontade para me enviar um e-mail!
        </p>
        <a
          href="mailto:welbertholiveira250@gmail.com" 
          className="inline-block bg-cyan-500 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg shadow-lg transition-all duration-300 hover:bg-cyan-400 hover:shadow-cyan-500/50 transform hover:-translate-y-1"
        >
          Mandar um E-mail
        </a>
      </div>
    </section>
  );
};

export default Contact;