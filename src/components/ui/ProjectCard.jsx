import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Icon from './Icon';
import './ProjectCard.css';

export default function ProjectCard({ project, index = 0 }) {
  const [ref, visible] = useScrollAnimation();
  const [imgIndex, setImgIndex] = useState(0);
  const images = project.images || [project.image];
  const total = images.length;

  const prev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setImgIndex((i) => (i === 0 ? total - 1 : i - 1));
  };

  const next = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setImgIndex((i) => (i === total - 1 ? 0 : i + 1));
  };

  return (
    <div className={`project-card ${visible ? 'animate' : ''}`} ref={ref} style={{ transitionDelay: `${index * 0.08}s` }}>
      <Link to={`/projects/${project.slug}`} className="project-card-image">
        <img src={images[imgIndex]} alt={project.title} loading="lazy" />
        {total > 1 && (
          <>
            <button className="project-card-arrow project-card-arrow--left" onClick={prev} aria-label="Previous image">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button className="project-card-arrow project-card-arrow--right" onClick={next} aria-label="Next image">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
            <div className="project-card-dots">
              {images.map((_, i) => (
                <span key={i} className={`project-card-dot ${i === imgIndex ? 'active' : ''}`} />
              ))}
            </div>
          </>
        )}
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
