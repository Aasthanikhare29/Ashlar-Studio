import { useState } from 'react';
import { testimonials } from '../data/testimonials';
import TestimonialCard from '../components/ui/TestimonialCard';
import SectionTitle from '../components/ui/SectionTitle';
import CTA from '../components/ui/CTA';
import './Testimonials.css';

const TestimonialsPage = () => {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'featured' ? testimonials.filter((t) => t.featured) : testimonials;

  return (
    <main>
      <section className="page-hero" style={{ minHeight: '50vh' }}>
        <div className="page-hero__bg">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600" alt="Testimonials" className="page-hero__image" />
          <div className="page-hero__overlay"></div>
        </div>
        <div className="page-hero__content container">
          <span className="page-hero__label">Client Stories</span>
          <h1 className="page-hero__title">What Our Clients Say</h1>
          <p className="page-hero__subtitle">Hear from those who have experienced the Ashlar difference firsthand.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle label="Testimonials" title="Trusted by Clients Worldwide" subtitle="Our reputation is built on the satisfaction of those we serve." align="center" />
          <div className="testimonial-filters">
            <button className={`chip ${filter === 'all' ? 'chip--active' : ''}`} onClick={() => setFilter('all')}>All</button>
            <button className={`chip ${filter === 'featured' ? 'chip--active' : ''}`} onClick={() => setFilter('featured')}>Featured</button>
          </div>
          <div className="testimonials-grid" style={{ marginTop: 'var(--spacing-2xl)' }}>
            {filtered.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} featured={t.featured} />
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--color-accent)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ marginBottom: 'var(--spacing-lg)' }}>Over 98% Client Satisfaction</h2>
          <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-light)', maxWidth: 600, margin: '0 auto var(--spacing-xl)' }}>
            We measure our success by the lasting relationships we build.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg">Become Our Next Success Story</a>
        </div>
      </section>
      <CTA />
    </main>
  );
};

export default TestimonialsPage;
