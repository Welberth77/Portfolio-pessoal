// --- SOBRE MIM ---
const About = () => {
  return (
    <section id="sobre" className="section">
      <div className="container section-inner about">
        <div className="about-head">
          <p className="kicker">01 — Sobre</p>
          <h2 className="section-title">Quem está por trás do código</h2>
          <div className="facts">
            <div className="fact"><span className="fact-dot" aria-hidden="true"></span> Ciência da Computação · 8º período</div>
            <div className="fact"><span className="fact-dot" aria-hidden="true"></span> Front-end com base full stack</div>
            <div className="fact"><span className="fact-dot" aria-hidden="true"></span> Projetos web, APIs e jogos</div>
          </div>
        </div>

        <div className="about-body">
          <p>
            Entrei na tecnologia porque sempre gostei de transformar pensamentos e ideias em algo real.
            Acho fascinante criar software que facilite a vida das pessoas, resolva um problema ou
            simplesmente torne o dia de alguém mais prático.
          </p>
          <p>
            Durante a jornada, descobri que programar vai muito além do código. Gosto de aprender coisas
            novas e me desafiar: cada projeto, mesmo pequeno, me ensina algo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
