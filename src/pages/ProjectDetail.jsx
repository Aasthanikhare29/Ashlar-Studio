import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Icon from '../components/ui/Icon';
import ImageLightbox from '../components/ui/ImageLightbox';
import CTA from '../components/ui/CTA';
import './ProjectDetail.css';

function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function CountUp({ end, duration = 2000 }) {
  const [val, setVal] = useState(0);
  const [ref, visible] = useScrollReveal(0.5);
  useEffect(() => {
    if (!visible) return;
    const start = performance.now();
    const animate = (now) => {
      const t = Math.min((now - start) / duration, 1);
      setVal(Math.floor(t * end));
      if (t < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [visible, end, duration]);
  return <span ref={ref}>{val}</span>;
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [activeImg, setActiveImg] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [sticky, setSticky] = useState(false);

  const openLightbox = (i) => { setLightboxIndex(i); setLightboxOpen(true); };

  const prev = useCallback(() => {
    setActiveImg((i) => (i === 0 ? project.images.length - 1 : i - 1));
  }, [project]);

  const next = useCallback(() => {
    setActiveImg((i) => (i === project.images.length - 1 ? 0 : i + 1));
  }, [project]);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > window.innerHeight - 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (lightboxOpen) return;
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [prev, next, lightboxOpen]);

  if (!project) {
    return (
      <div className="pd-not-found">
        <h1>Project Not Found</h1>
        <Link to="/projects">Back to Projects</Link>
      </div>
    );
  }

  const features = project.features || [];

  return (
    <div className="pd">
      <nav className="pd-nav">
        <Link to="/projects" className="pd-nav-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          All Projects
        </Link>
      </nav>

      <div className={`pd-sticky ${sticky ? 'pd-sticky--visible' : ''}`}>
        <div className="pd-sticky-inner">
          <div className="pd-sticky-info">
            <span className="pd-sticky-title">{project.title}</span>
            <span className="pd-sticky-cat">{project.category}</span>
          </div>
          <button className="pd-sticky-cta" onClick={() => document.getElementById('pd-contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Inquire Now
          </button>
        </div>
      </div>

      {/* ── Fullscreen Slider ── */}
      <section className="pd-slider-hero">
        <div className="pd-slider-main">
          <div className="pd-slider-viewport" onClick={() => openLightbox(activeImg)}>
            <div className="pd-slider-track" style={{ transform: `translateX(-${activeImg * 100}%)` }}>
              {project.images.map((img, i) => (
                <div key={i} className="pd-slider-slide">
                  <img src={img} alt={`${project.title} design render ${i + 1}`} />
                </div>
              ))}
            </div>
            <div className="pd-slider-overlay">
              <span className="pd-view-all-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                View all photos
              </span>
            </div>
          </div>
          <button className="pd-slider-arrow left" onClick={prev} aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button className="pd-slider-arrow right" onClick={next} aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
          <div className="pd-slider-strip">
            {project.images.map((img, i) => (
              <button key={i} className={`pd-slider-strip-item ${i === activeImg ? 'active' : ''}`} onClick={() => setActiveImg(i)}>
                <img src={img} alt={`${project.title} thumbnail ${i + 1}`} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── WeCos-style Layout ── */}
      <section className="pd-wecos">
        <div className="pd-wecos-grid">
          <div className="pd-wecos-main">
            <div className="pd-wecos-head">
              <h1 className="pd-wecos-title">{project.title}</h1>
            </div>
            <div className="pd-wecos-tags">
              <span>{project.category}</span>
              <span>{project.type}</span>
              <span>{project.status}</span>
            </div>

            <div className="pd-wecos-about">
              <h2>About {project.title}</h2>
              <p>{project.description}</p>
              <p>{project.details}</p>
            </div>

            {project.video && (
              <div className="pd-wecos-about">
                <h2>3D Walkthrough</h2>
                <video src={project.video} poster={project.image} controls preload="none" playsInline muted
                  style={{ width: "100%", borderRadius: 12 }} aria-label={`${project.title} 3D walkthrough`} />
              </div>
            )}

            <div className="pd-wecos-meta">
              <div className="pd-wecos-meta-row">
                {project.location && <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg><span>{project.location}</span></>}
                <span className="pd-wecos-meta-status">{project.status}</span>
              </div>
              {project.year && (
                <div className="pd-wecos-meta-row">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  <span>{project.year}</span>
                </div>
              )}
              {project.award && (
                <div className="pd-wecos-meta-row">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <span>{project.award}</span>
                </div>
              )}
              {project.area && (
                <div className="pd-wecos-meta-row">
                  <span>Built-up area: {project.area}</span>
                </div>
              )}
              {project.client && (
                <div className="pd-wecos-meta-row">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  <span>{project.client}</span>
                </div>
              )}
            </div>

          </div>

          <aside className="pd-wecos-sidebar">

            {features.length > 0 && (
              <div className="pd-wecos-card">
                <span className="pd-wecos-card-label">Features</span>
                <div className="pd-wecos-features">
                  {features.map((f, i) => (
                    <span key={i} className="pd-wecos-feat-pill">{f}</span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* ── Testimonial with Video ── */}
      {project.testimonial && (
        <section className="pd-praise">
          <div className="pd-praise-inner">
            <div className="pd-praise-content">
              <span className="pd-praise-label">Kind Words</span>
              <blockquote className="pd-praise-quote">
                <span className="pd-praise-mark">&ldquo;</span>
                {project.testimonial.quote}
              </blockquote>
              <cite className="pd-praise-author">— {project.testimonial.author}</cite>
            </div>
            <div className="pd-praise-video">
              <div className="pd-praise-video-inner">
                <img src={project.images[0]} alt="" />
                <div className="pd-praise-video-overlay">
                  <div className="pd-praise-play">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section id="pd-contact" className="pd-outro">
        <div className="pd-container">
          <CTA />
        </div>
      </section>

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
