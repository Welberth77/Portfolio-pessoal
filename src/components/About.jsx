import React from 'react';

// --- COMPONENTE "SOBRE MIM" ---
const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-900">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Sobre Mim
        </h2>

        {/* Card de Informação com Efeito Hover */}
        <div className="bg-gray-800 p-8 md:p-10 rounded-xl shadow-2xl transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.01] border border-gray-700">
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Olá! Sou <strong className="text-cyan-400">Welberth Oliveira</strong>, Sou estudante de Ciência da Computação (6º período) e entrei na área de tecnologia porque sempre gostei da ideia de transformar pensamentos e ideias em algo real, acho fascinante criar algo que possa facilitar a vida das pessoas, resolver um problema ou simplesmente tornar o dia de alguém mais prático por meio de um software ou solução digital.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Durante minha jornada, descobri que programar vai muito além de código. Gosto de aprender coisas novas e me desafiar constantemente, cada projeto, mesmo pequeno, sempre me ensina algo.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4"> 
            Estou sempre em busca de novos desafios e aberto a conexões.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;