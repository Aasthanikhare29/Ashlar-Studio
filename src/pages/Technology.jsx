import CTA from '../components/ui/CTA';

const techItems = [
  { title: 'Building Information Modeling (BIM)', desc: 'Advanced BIM workflows for seamless coordination across all disciplines, reducing conflicts and improving delivery efficiency.', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600' },
  { title: '3D Rendering & Visualization', desc: 'Photorealistic renderings and immersive virtual tours that bring designs to life before construction begins.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600' },
  { title: 'Virtual Reality Walkthroughs', desc: 'Immersive VR experiences that allow clients to experience and interact with their spaces before they are built.', image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600' },
  { title: 'Computational Design', desc: 'Parametric and algorithmic design tools that enable complex geometries and optimized building performance.', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600' },
  { title: 'Sustainable Technology', desc: 'Advanced energy modeling, passive design analysis, and renewable energy integration for high-performance buildings.', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600' },
  { title: 'Smart Building Systems', desc: 'Integrated building automation, IoT sensors, and intelligent systems for optimized comfort, efficiency, and operations.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600' },
];

const Technology = () => (
  <main>
    <section className="page-hero" style={{ minHeight: '50vh' }}>
      <div className="page-hero__bg">
        <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1600" alt="Technology" className="page-hero__image" />
        <div className="page-hero__overlay"></div>
      </div>
      <div className="page-hero__content container">
        <span className="page-hero__label">Technology</span>
        <h1 className="page-hero__title">Design Technology & Innovation</h1>
        <p className="page-hero__subtitle">Leveraging cutting-edge technology to deliver design excellence.</p>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="grid-auto">
          {techItems.map((t, i) => (
            <div key={i} className="service-card">
              <div className="service-card__image-wrap" style={{ aspectRatio: '16 / 10' }}>
                <img src={t.image} alt={t.title} className="service-card__image" loading="lazy" />
              </div>
              <div className="service-card__content">
                <h3 className="service-card__title">{t.title}</h3>
                <p className="service-card__desc">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <CTA />
  </main>
);

export default Technology;
