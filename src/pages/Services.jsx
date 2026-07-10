import SectionTitle from '../components/ui/SectionTitle';
import ServiceCard from '../components/ui/ServiceCard';
import CTA from '../components/ui/CTA';
import { services, industries } from '../data/services';
import './Services.css';

export default function Services() {
  return (
    <div className="page-wrapper">
      <section className="services-hero">
        <div className="container">
          <SectionTitle subtitle="Our Expertise" title="Comprehensive Design Services" description="From architecture to turnkey solutions, we offer end-to-end design services tailored to your unique vision and requirements." />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-grid">
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle subtitle="Our Process" title="How We Work" description="Our proven design process ensures every project is delivered with excellence, from initial concept to final completion." />
          <div className="process-steps">
            {[
              { step: '01', title: 'Discovery', desc: 'We begin by understanding your vision, needs, site conditions, and project requirements through in-depth consultation.' },
              { step: '02', title: 'Concept Design', desc: 'Our team develops initial design concepts, mood boards, and schematic layouts that capture the essence of your vision.' },
              { step: '03', title: 'Design Development', desc: 'We refine the chosen concept into detailed designs, including material selection, technical drawings, and 3D visualizations.' },
              { step: '04', title: 'Documentation', desc: 'Comprehensive construction documents, specifications, and permit drawings are prepared for regulatory approvals.' },
              { step: '05', title: 'Construction', desc: 'We oversee construction to ensure the design intent is faithfully executed, managing quality, timeline, and budget.' },
              { step: '06', title: 'Delivery', desc: 'The project is handed over with all systems tested, documentation complete, and your satisfaction guaranteed.' },
            ].map((p, i) => (
              <div key={i} className="process-step">
                <span className="process-step-num">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle subtitle="Industries" title="Sectors We Serve" description="Our expertise spans across diverse industry sectors, delivering tailored solutions for each." />
          <div className="section-grid">
            {industries.map((ind) => (
              <div key={ind.id} className="industry-card">
                <h3>{ind.title}</h3>
                <p>{ind.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <CTA />
      </div>
    </div>
  );
}
