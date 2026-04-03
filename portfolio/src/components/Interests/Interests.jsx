// Interests.jsx
import { useInView } from '../../hooks/useInView';
import './Interests.css';

function InterestCard({ item }) {
  return (
    <div className="interest-card">
      <div className="interest-card__emoji">{item.icon}</div>
      <p className="interest-card__label">{item.label}</p>
      <p className="interest-card__detail">{item.detail}</p>
    </div>
  );
}

export default function Interests({ interests }) {
  const ref = useInView();

  return (
    <section id="interests" className="section" style={{ background: '#f1f5fb' }}>
      <div className="container">
        <p className="section-label">Beyond Code</p>
        <h2 className="section-title">Additional Interests</h2>

        <div ref={ref} className="interests__grid fade-in">
          {interests.map((item, i) => (
            <InterestCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
