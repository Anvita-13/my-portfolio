// Experience.jsx
import { useInView } from '../../hooks/useInView';
import './Experience.css';

export default function Experience({ experience }) {
  const ref = useInView();

  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section-label">Where I've Worked</p>
        <h2 className="section-title">Experience</h2>

        <div ref={ref} className="experience__list fade-in">
          {experience.map((exp, i) => (
            <div key={i} className="experience__entry">
              {/* LEFT — subheading + bullet points */}
              <div className="experience__left">
                <div className="experience__header">
                  <h3 className="experience__role">{exp.role} – {exp.company}</h3>
                  <p className="experience__period">{exp.period}</p>
                  <p className="experience__project">{exp.project}</p>
                </div>

                <ul className="experience__points">
                  {exp.points.map((point, j) => (
                    <li key={j} className="experience__point">{point}</li>
                  ))}
                </ul>
              </div>

              {/* RIGHT — info card */}
              <div className="experience__right">
                <div className="experience__info-card">
                  {/* Tech Stack block */}
                  <div className="experience__info-item">
                    <div>
                      <p className="experience__info-label">Tech Stack</p>
                      <div className="experience__tags">
                        {exp.tags.map((tag, k) => (
                          <span key={k} className="experience__tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="experience__info-divider" />

                  {/* GitHub link block */}
                  <div className="experience__info-item">
                    <div>
                      <p className="experience__info-label">Repository</p>
                      {exp.github ? (
                        <a
                          href={exp.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="experience__github-link"
                        >
                          View on GitHub →
                        </a>
                      ) : (
                        <span className="experience__github-link experience__github-link--disabled">
                          View on GitHub → <span className="experience__github-note">(link coming soon)</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
