import { useScrollReveal } from '../hooks/useScrollReveal';
import { awards, awardsTimeline } from '../data/awards';
import SectionTitle from '../components/ui/SectionTitle';
import CTA from '../components/ui/CTA';
import './Awards.css';

const AwardsPage = () => {
  const ref = useScrollReveal();
  return (
    <main>
      <section className="page-hero" style={{ minHeight: '50vh' }}>
        <div className="page-hero__bg">
          <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1600" alt="Awards" className="page-hero__image" />
          <div className="page-hero__overlay"></div>
        </div>
        <div className="page-hero__content container">
          <span className="page-hero__label">Recognition</span>
          <h1 className="page-hero__title">Awards & Accolades</h1>
          <p className="page-hero__subtitle">Our commitment to design excellence has been recognized globally.</p>
        </div>
      </section>

      <section className="section" ref={ref}>
        <div className="container">
          <SectionTitle label="Timeline" title="Awards Timeline" subtitle="Our journey of recognition." align="center" />
          <div className="awards-timeline reveal">
            {awardsTimeline.map((t, i) => (
              <div key={i} className="awards-timeline__item">
                <span className="awards-timeline__year">{t.year}</span>
                <div className="awards-timeline__bar" style={{ width: `${(t.count / 6) * 100}%` }}>
                  <span>{t.count} {t.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg)' }} ref={ref}>
        <div className="container">
          <SectionTitle label="Awards" title="All Awards" subtitle="Every recognition that celebrates our work." align="center" />
          <div className="awards-list-full reveal">
            {awards.map((a) => (
              <div key={a.id} className="award-full-card">
                <div className="award-full-card__image-wrap">
                  <img src={a.image} alt={a.title} loading="lazy" />
                </div>
                <div className="award-full-card__content">
                  <span className="award-full-card__year">{a.year}</span>
                  <h3>{a.title}</h3>
                  <p className="award-full-card__org">{a.organization}</p>
                  <p>{a.description}</p>
                  {a.project && <span className="award-full-card__project">Project: {a.project}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
};

export default AwardsPage;
