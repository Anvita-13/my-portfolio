// Hero.jsx
import './Hero.css';

export default function Hero({ personal }) {
  const nameParts = personal.name.split(' ');
  // Colour the last word (last name) with the accent gradient
  const firstName = nameParts.slice(0, -1).join(' ');
  const lastName  = nameParts[nameParts.length - 1];

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__inner">
          {/* Status badge */}
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Open to opportunities
          </div>

          {/* Name */}
          <h1 className="hero__name">
            {firstName} <span>{lastName}</span>
          </h1>

          {/* Title */}
          <p className="hero__title">{personal.title}</p>

          {/* Tagline */}
          <p className="hero__tagline">{personal.tagline}</p>

          {/* CTA buttons */}
          <div className="hero__cta">
            <button
              className="btn btn-primary"
              onClick={() => scrollTo('projects')}
            >
              View Projects
            </button>
            <button
              className="btn btn-outline"
              onClick={() => scrollTo('contact')}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-hint">
        <span>Scroll</span>
        <span className="hero__scroll-arrow" />
      </div>
    </section>
  );
}
