import CTA from '../components/ui/CTA';

const newsItems = [
  { id: 1, title: 'Ashlar Studio Wins Architecture Firm of the Year', date: '2024-12-10', category: 'Awards', excerpt: 'We are honored to be named Architecture Firm of the Year at the World Architecture Festival 2024.', image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600' },
  { id: 2, title: 'Tower Meridian Officially Opens in Dubai', date: '2024-11-15', category: 'Projects', excerpt: 'Our 45-story mixed-use tower, Tower Meridian, has officially opened in the Dubai Design District.', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600' },
  { id: 3, title: 'New Studio Opening in Singapore', date: '2024-10-20', category: 'Studio', excerpt: 'Ashlar Studio expands its footprint in Asia with a new office in Singapore.', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db4d?w=600' },
  { id: 4, title: 'Cultural Arts Pavilion Shortlisted for EU Prize', date: '2024-09-05', category: 'Awards', excerpt: 'Our Cultural Arts Pavilion in Tokyo has been shortlisted for the EU Prize for Contemporary Architecture.', image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600' },
];

const News = () => (
  <main>
    <section className="page-hero" style={{ minHeight: '50vh' }}>
      <div className="page-hero__bg">
        <img src="https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=1600" alt="News" className="page-hero__image" />
        <div className="page-hero__overlay"></div>
      </div>
      <div className="page-hero__content container">
        <span className="page-hero__label">Press Room</span>
        <h1 className="page-hero__title">News & Media</h1>
        <p className="page-hero__subtitle">The latest updates, press coverage, and announcements from Ashlar Studio.</p>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="grid-2">
          {newsItems.map((item) => (
            <article key={item.id} className="news-card">
              <div className="news-card__image-wrap">
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="news-card__category">{item.category}</span>
              </div>
              <div className="news-card__content">
                <time className="news-card__date">{item.date}</time>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section className="section" style={{ background: 'var(--color-accent)', textAlign: 'center' }}>
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: 'var(--spacing-lg)' }}>Media Inquiries</h2>
        <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-light)', marginBottom: 'var(--spacing-xl)' }}>For press and media inquiries, please contact our communications team.</p>
        <a href="mailto:press@ashlarstudio.com" className="btn btn-primary btn-lg">press@ashlarstudio.com</a>
      </div>
    </section>
    <CTA />
  </main>
);

export default News;
