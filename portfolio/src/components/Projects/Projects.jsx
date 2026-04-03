// Projects.jsx
import { useInView } from '../../hooks/useInView';
import './Projects.css';

function ProjectCard({ project, index }) {
  return (
    <div className="project-card">
      <span className="project-card__number">Project {String(index + 1).padStart(2, '0')}</span>
      <h3 className="project-card__title">{project.title}</h3>
      {project.subtitle && (
        <p className="project-card__subtitle">{project.subtitle}</p>
      )}
      <p className="project-card__desc">{project.description}</p>
      <div className="project-card__tags">
        {project.tags.map((tag, i) => (
          <span key={i} className="project-card__tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects({ projects }) {
  const ref = useInView();

  return (
    <section id="projects" className="section" style={{ background: '#f1f5fb' }}>
      <div className="container">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">Projects</h2>

        <div ref={ref} className="projects__grid fade-in">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
