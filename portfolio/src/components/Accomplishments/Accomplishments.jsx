// Accomplishments.jsx
import { useInView } from '../../hooks/useInView';
import './Accomplishments.css';

function AccomplishmentCard({ item }) {
  return (
    <div className="accomplishment-card">
      <div className="accomplishment-card__icon">🏆</div>
      <div className="accomplishment-card__content">
        <h3 className="accomplishment-card__title">{item.title}</h3>
        <p className="accomplishment-card__body">{item.body}</p>
      </div>
    </div>
  );
}

export default function Accomplishments({ accomplishments }) {
  const ref = useInView();

  return (
    <section id="accomplishments" className="section">
      <div className="container">
        <p className="section-label">Recognition</p>
        <h2 className="section-title">Other Accomplishments</h2>

        <div ref={ref} className="accomplishments__list fade-in">
          {accomplishments.map((item, i) => (
            <AccomplishmentCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
