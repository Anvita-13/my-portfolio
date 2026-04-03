// Skills.jsx
import { useInView } from '../../hooks/useInView';
import './Skills.css';

function SkillCategory({ category }) {
  return (
    <div className="skills__category">
      <p className="skills__category-name">{category.category}</p>
      <div className="skills__badges">
        {category.items.map((skill, i) => (
          <span key={i} className="skills__badge">{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills({ skills }) {
  const ref = useInView();

  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label">What I Know</p>
        <h2 className="section-title">Technical Skills</h2>

        <div ref={ref} className="skills__grid fade-in">
          {skills.map((cat, i) => (
            <SkillCategory key={i} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
