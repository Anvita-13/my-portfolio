// About.jsx
import { useInView } from '../../hooks/useInView';
import './About.css';

export default function About({ about, personal }) {
  const ref = useInView();

  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">Who I Am</p>
        <h2 className="section-title">About Me</h2>

        <div ref={ref} className="about__grid fade-in">
          {/* Bio paragraph */}
          <div className="about__text">
            <p>{about}</p>
          </div>

          {/* Quick-info card */}
          <div className="about__info-card">
            <div className="about__info-item">
              <div className="about__info-icon">📍</div>
              <div>
                <p className="about__info-label">Location</p>
                <p className="about__info-value">{personal.location}</p>
              </div>
            </div>

            <div className="about__info-item">
              <div className="about__info-icon">📧</div>
              <div>
                <p className="about__info-label">Email</p>
                <a href={`mailto:${personal.email}`} className="about__info-email-link">
                  {personal.email}
                </a>
              </div>
            </div>

            <div className="about__info-item">
              <div className="about__info-icon">📱</div>
              <div>
                <p className="about__info-label">Phone</p>
                <p className="about__info-value">{personal.phone}</p>
              </div>
            </div>

            <div className="about__info-item">
              <div className="about__info-icon">🎓</div>
              <div>
                <p className="about__info-label">Status</p>
                <p className="about__info-value">{personal.title}</p>
              </div>
            </div>

            <div className="about__info-item">
              <div className="about__info-icon">🔗</div>
              <div>
                <p className="about__info-label">GitHub</p>
                <a href={personal.github} target="_blank" rel="noopener noreferrer" className="about__info-email-link">
                  {personal.github}
                </a>
              </div>
            </div>

            <div className="about__info-item">
              <div className="about__info-icon">💼</div>
              <div>
                <p className="about__info-label">LinkedIn</p>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="about__info-email-link">
                  {personal.linkedin}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
