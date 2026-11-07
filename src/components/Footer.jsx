// --- RODAPÉ ---
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-copy">© {new Date().getFullYear()} Welberth Oliveira</span>
        <div className="footer-links">
          <a href="https://github.com/welberth77" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/welberth-oliveira" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:welbertholiveira250@gmail.com">E-mail</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
