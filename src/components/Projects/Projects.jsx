// Projects.jsx
import { useInView } from '../../hooks/useInView';
import './Projects.css';

function ProjectCard({ project, index }) {
  return (
    <div className="project-card">
      {/* Project number */}
      <span className="project-card__number">Project {String(index + 1).padStart(2, '0')}</span>

      {/* Title — always visible */}
      <h3 className="project-card__title">{project.title}</h3>

      {/* Short summary — always visible */}
      <p className="project-card__summary">{project.summary}</p>

      {/* Tags — always visible */}
      <div className="project-card__tags">
        {project.tags.map((tag, i) => (
          <span key={i} className="project-card__tag">{tag}</span>
        ))}
      </div>

      {/* Thin divider that appears on hover before the expanded content */}
      <div className="project-card__divider" />

      {/* Bullet points + GitHub link — revealed on hover via max-height animation */}
      <div className="project-card__extra">
        <ul className="project-card__points">
          {project.points.map((point, i) => (
            <li key={i} className="project-card__point">{point}</li>
          ))}
        </ul>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__github-link"
          >
            View on GitHub →
          </a>
        )}
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
