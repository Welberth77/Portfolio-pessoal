import React from 'react';

// --- COMPONENTE "SOBRE MIM" ---
const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Sobre Mim
        </h2>
        <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-xl shadow-2xl">
          <p className="text-lg text-gray-300 leading-relaxed">
            Sou Welberth Oliveira, estudante de Ciência da Computação com foco em desenvolvimento web e automação de processos. Tenho experiência em Python, Java, JavaScript, HTML e CSS, e estou sempre em busca de novos desafios para criar soluções práticas e inovadoras
            <br/><br/>
            Áreas de interesse: Desenvolvimento web, jogos e mobile; inteligência artificial; automação de processos; UI/UX e prototipagem de interfaces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;