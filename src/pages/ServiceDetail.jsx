import { Link, useParams } from 'react-router-dom';
import { serviceDetails } from '../data/serviceDetails';
import { services } from '../data/services';
import { projects } from '../data/projects';
import ProjectCard from '../components/ui/ProjectCard';
import FAQAccordion from '../components/ui/FAQAccordion';
import CTA from '../components/ui/CTA';
import ComingSoon from './ComingSoon';
import './ServiceDetail.css';

export default function ServiceDetail() {
  const { id } = useParams();
  const s = serviceDetails[id];
  if (!s) return <ComingSoon />;
  const title = services.find((x) => x.id === id).title;

  const related = s.projectSlugs.map((slug) => projects.find((p) => p.slug === slug)).filter(Boolean);

  return (
    <div className="page-wrapper sd">
      <section className="sd-hero">
        <div className="container sd-hero-grid">
          <div className="sd-hero-text">
            <nav className="sd-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link><span>/</span>
              <Link to="/services">Services</Link><span>/</span>
              <span aria-current="page">{title}</span>
            </nav>
            <h1>{s.h1}</h1>
            <p className="sd-answer">{s.answer}</p>
            <div className="sd-hero-actions">
              <Link to="/book-consultation" className="btn btn-primary btn-lg">Book a Consultation</Link>
              <a href="#sd-work" className="sd-link">See our work ↓</a>
            </div>
          </div>
          <img className="sd-hero-img" src={s.heroImage} alt={s.heroAlt} />
        </div>
      </section>

      <section className="sd-facts container" aria-label="Key facts">
        {s.facts.map((f) => (
          <div key={f.label}>
            <span>{f.label}</span>
            <strong>{f.value}</strong>
          </div>
        ))}
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sd-h2">What's included in our architecture service?</h2>
          <div className="sd-included">
            {s.included.map((item, i) => (
              <article key={item.title}>
                <span className="sd-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sd-climate">
        <div className="container sd-climate-grid">
          <div>
            <h2 className="sd-h2">{s.climateTitle}</h2>
            <p>{s.climateIntro}</p>
          </div>
          <ul>
            {s.climate.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sd-h2">How does the design process work?</h2>
          <ol className="sd-process">
            {s.process.map((p) => (
              <li key={p.step}>
                <span className="sd-num">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <small>Deliverable: {p.deliverable}</small>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--light" id="sd-work">
          <div className="container">
            <h2 className="sd-h2">Architecture projects in Nagpur</h2>
            <div className="section-grid">
              {related.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
            </div>
            <p className="sd-more"><Link to="/projects" className="sd-link">View all projects →</Link></p>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container sd-faq">
          <h2 className="sd-h2">Architecture FAQs</h2>
          <FAQAccordion items={s.faqs} />
          <p className="sd-related">
            Related services:{' '}
            {s.related.map((r, i) => (
              <span key={r.to}>{i > 0 && ' · '}<Link to={r.to}>{r.label}</Link></span>
            ))}
          </p>
        </div>
      </section>

      <div className="container">
        <CTA title="Planning a home in Nagpur?" description="Tell us about your plot and brief. The first consultation is free." buttonText="Book a Consultation" buttonLink="/book-consultation" />
      </div>
    </div>
  );
}
