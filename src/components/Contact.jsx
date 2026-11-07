import { Mail } from 'lucide-react';

// --- CONTATO ---
const Contact = () => {
  return (
    <section id="contato" className="section">
      <div className="container section-inner">
        <div className="contact-card">
          <p className="kicker">04 — Contato</p>
          <h2>Vamos construir algo juntos?</h2>
          <p>
            Estou sempre aberto a novas oportunidades e conexões.
            Me manda um e-mail e eu respondo o quanto antes.
          </p>
          <a href="mailto:welbertholiveira250@gmail.com" className="contact-btn">
            <Mail size={19} /> welbertholiveira250@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
