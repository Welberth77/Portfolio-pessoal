import React from 'react';

// --- COMPONENTE "SOBRE MIM" ---
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Sobre Mim
        </h2>

        {/* Card de Informação com Efeito Hover */}
        <div className="bg-gray-800 p-8 md:p-10 rounded-xl shadow-2xl transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-cyan-400/70 hover:scale-[1.01] border border-gray-700">
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Olá! Sou <strong className="text-cyan-400">Welberth Oliveira</strong>, um Desenvolvedor Full Stack apaixonado por transformar ideias complexas em soluções digitais elegantes e eficientes. Minha jornada na programação começou com projetos pessoais e evoluiu para uma especialização em criar pontes entre o front-end dinâmico e o back-end robusto.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            No <strong className="text-cyan-400">Front-end</strong>, sou proficiente em React e Next.js, com foco em performance e experiência do usuário (UX). No <strong className="text-cyan-400">Back-end</strong>, trabalho principalmente com Node.js (Express), construindo APIs escaláveis e gerenciando bancos de dados SQL e NoSQL.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Estou sempre em busca de novos desafios e adoro a oportunidade de aplicar o pensamento crítico para otimizar processos e entregar produtos de alto nível. Meu objetivo é simples: construir o futuro, uma linha de código por vez.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;