import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import SectionTitle from '../components/ui/SectionTitle';
import Icon from '../components/ui/Icon';
import ImageLightbox from '../components/ui/ImageLightbox';
import CTA from '../components/ui/CTA';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!project) {
    return (
      <div className="page-wrapper">
        <div className="container" style={{ textAlign: 'center', padding: '6rem 0' }}>
          <h1>Project Not Found</h1>
          <Link to="/projects" className="btn btn-primary btn-lg" style={{ marginTop: '1rem' }}>Back to Projects</Link>
        </div>
      </div>
    );
  }

  const openLightbox = (i) => { setLightboxIndex(i); setLightboxOpen(true); };

  return (
    <div className="page-wrapper">
      <section className="project-detail-hero">
        <div className="container">
          <Link to="/projects" className="project-detail-back"><Icon name="chevron-left" size={14} /> Back to Projects</Link>
          <SectionTitle subtitle={project.category} title={project.title} description={project.description} />
          <div className="project-detail-meta">
            <div className="project-meta-item"><Icon name="location" size={16} /> {project.location}</div>
            <div className="project-meta-item"><Icon name="calendar" size={16} /> {project.year}</div>
            <div className="project-meta-item"><Icon name="check" size={16} /> {project.status}</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="project-detail-grid">
            <div className="project-detail-main">
              <div className="project-detail-gallery">
                {project.images?.map((img, i) => (
                  <div key={i} className="project-detail-image" onClick={() => openLightbox(i)}>
                    <img src={img} alt={`${project.title} ${i + 1}`} loading="lazy" />
                  </div>
                ))}
              </div>

              <div className="project-detail-description">
                <h2>Project Overview</h2>
                <p>{project.details}</p>
                {project.features && (
                  <>
                    <h3>Key Features</h3>
                    <ul className="project-features-list">
                      {project.features.map((f, i) => (
                        <li key={i}><Icon name="check" size={14} /> {f}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>

            <aside className="project-detail-sidebar">
              <div className="sidebar-card">
                <h4>Project Details</h4>
                <div className="sidebar-info">
                  <span>Client</span><span>{project.client}</span>
                </div>
                <div className="sidebar-info">
                  <span>Category</span><span>{project.category}</span>
                </div>
                <div className="sidebar-info">
                  <span>Type</span><span>{project.type}</span>
                </div>
                <div className="sidebar-info">
                  <span>Location</span><span>{project.location}</span>
                </div>
                <div className="sidebar-info">
                  <span>Year</span><span>{project.year}</span>
                </div>
                <div className="sidebar-info">
                  <span>Status</span><span>{project.status}</span>
                </div>
                {project.award && (
                  <div className="sidebar-award">
                    <Icon name="star" size={14} /> {project.award}
                  </div>
                )}
              </div>

              {project.testimonial && (
                <div className="sidebar-card sidebar-testimonial">
                  <Icon name="quote" size={20} />
                  <p>"{project.testimonial.quote}"</p>
                  <span className="sidebar-testimonial-author">— {project.testimonial.author}</span>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <div className="container">
        <CTA />
      </div>

      {lightboxOpen && (
        <ImageLightbox
          images={project.images}
          current={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setLightboxIndex((i) => (i === 0 ? project.images.length - 1 : i - 1))}
          onNext={() => setLightboxIndex((i) => (i === project.images.length - 1 ? 0 : i + 1))}
        />
      )}
    </div>
  );
}
