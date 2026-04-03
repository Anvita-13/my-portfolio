// Education.jsx
import { useInView } from '../../hooks/useInView';
import './Education.css';

function EducationCard({ item }) {
  return (
    <div className="education__item">
      <div className="education__card">
        <div className="education__card-top">
          <span className="education__institution">{item.institution}</span>
          <span
            className={`education__status ${
              item.status === 'Pursuing'
                ? 'education__status--pursuing'
                : 'education__status--completed'
            }`}
          >
            {item.status}
          </span>
        </div>

        <p className="education__location">📍 {item.location}</p>
        <p className="education__degree">{item.degree}</p>

        <div className="education__meta">
          {item.detail && (
            <span className="education__detail">{item.detail}</span>
          )}
          {item.period && (
            <span className="education__period">🗓 {item.period}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Education({ education }) {
  const ref = useInView();

  return (
    <section id="education" className="section" style={{ background: '#f1f5fb' }}>
      <div className="container">
        <p className="section-label">Academic Background</p>
        <h2 className="section-title">Education</h2>

        <div ref={ref} className="education__timeline fade-in">
          {education.map((item, i) => (
            <EducationCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
