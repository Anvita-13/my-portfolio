// Footer.jsx
import './Footer.css';

export default function Footer({ name }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__name">{name}</span>
        <span className="footer__copy">© {year} · All rights reserved</span>
        <button
          className="footer__back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑ Back to top
        </button>
      </div>
    </footer>
  );
}
