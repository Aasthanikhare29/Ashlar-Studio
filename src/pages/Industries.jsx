import { industries } from '../data/industries';
import CTA from '../components/ui/CTA';

const IndustriesPage = () => (
  <main>
    <section className="page-hero" style={{ minHeight: '50vh' }}>
      <div className="page-hero__bg">
        <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600" alt="Industries" className="page-hero__image" />
        <div className="page-hero__overlay"></div>
      </div>
      <div className="page-hero__content container">
        <span className="page-hero__label">Expertise</span>
        <h1 className="page-hero__title">Industries We Serve</h1>
        <p className="page-hero__subtitle">Deep domain expertise across a diverse range of sectors.</p>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="grid-auto">
          {industries.map((ind) => (
            <div key={ind.id} id={ind.slug} className="industry-full-card">
              <div className="industry-full-card__image-wrap">
                <img src={ind.image} alt={ind.title} loading="lazy" />
              </div>
              <div className="industry-full-card__content">
                <h2>{ind.title}</h2>
                <p>{ind.description}</p>
                <span className="industry-full-card__count">{ind.projects}+ Projects</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title" style={{ marginBottom: 'var(--spacing-lg)' }}>Don't See Your Industry?</h2>
        <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-light)', maxWidth: 500, margin: '0 auto var(--spacing-xl)' }}>
          We thrive on new challenges. Contact us to discuss how we can help.
        </p>
        <a href="/contact" className="btn btn-primary btn-lg">Get in Touch</a>
      </div>
    </section>
    <CTA />
  </main>
);

export default IndustriesPage;
