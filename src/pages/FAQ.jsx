import FAQAccordion from '../components/ui/FAQAccordion';
import { faqs } from '../data/faqs';
import CTA from '../components/ui/CTA';

const FAQPage = () => (
  <main>
    <section className="page-hero" style={{ minHeight: '40vh' }}>
      <div className="page-hero__bg">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600" alt="FAQ" className="page-hero__image" />
        <div className="page-hero__overlay"></div>
      </div>
      <div className="page-hero__content container">
        <span className="page-hero__label">Support</span>
        <h1 className="page-hero__title">Frequently Asked Questions</h1>
        <p className="page-hero__subtitle">Find answers to common questions about our services and process.</p>
      </div>
    </section>
    <section className="section">
      <div className="container-narrow">
        <FAQAccordion faqs={faqs} />
      </div>
    </section>
    <section className="section" style={{ background: 'var(--color-accent)', textAlign: 'center' }}>
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: 'var(--spacing-lg)' }}>Still Have Questions?</h2>
        <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-light)', marginBottom: 'var(--spacing-xl)' }}>We are here to help. Get in touch with our team.</p>
        <a href="/contact" className="btn btn-primary btn-lg">Contact Us</a>
      </div>
    </section>
    <CTA />
  </main>
);

export default FAQPage;
