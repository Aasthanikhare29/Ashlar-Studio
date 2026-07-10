import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Icon from './Icon';
import './ProjectCard.css';

export default function ProjectCard({ project, index = 0 }) {
  const [ref, visible] = useScrollAnimation();

  return (
    <div className={`project-card ${visible ? 'animate' : ''}`} ref={ref} style={{ transitionDelay: `${index * 0.08}s` }}>
      <Link to={`/projects/${project.slug}`} className="project-card-image">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="project-card-overlay">
          <span className="project-card-view">View Project</span>
        </div>
      </Link>
      <div className="project-card-content">
        <div className="project-card-meta">
          <span className="project-card-category">{project.category}</span>
          <span className="project-card-location">
            <Icon name="location" size={12} /> {project.location}
          </span>
        </div>
        <h3 className="project-card-title">
          <Link to={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="project-card-desc">{project.description}</p>
        <div className="project-card-tags">
          <span className="project-card-tag">{project.type}</span>
          <span className="project-card-tag">{project.year}</span>
        </div>
      </div>
    </div>
  );
}
