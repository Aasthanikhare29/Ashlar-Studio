import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import Icon from '../components/ui/Icon';
import ImageLightbox from '../components/ui/ImageLightbox';
import CTA from '../components/ui/CTA';
import './CaseStudyDetail.css';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const cs = caseStudies.find((c) => c.slug === slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!cs) {
    return (
      <div className="page-wrapper">
        <div className="container" style={{ textAlign: 'center', padding: '6rem 0' }}>
          <h1>Case Study Not Found</h1>
          <Link to="/case-studies" className="btn btn-primary btn-lg" style={{ marginTop: '1rem' }}>Back to Case Studies</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <section className="casestudy-hero">
        <div className="container">
          <Link to="/case-studies" className="casestudy-back"><Icon name="chevron-left" size={14} /> Back to Case Studies</Link>
          <span className="casestudy-category">{cs.category}</span>
          <h1 className="casestudy-title">{cs.title}</h1>
          <p className="casestudy-excerpt">{cs.excerpt}</p>
          <div className="casestudy-stats">
            <div><span>Client</span>{cs.client}</div>
            <div><span>Location</span>{cs.location}</div>
            <div><span>Year</span>{cs.year}</div>
            <div><span>Size</span>{cs.size}</div>
            <div><span>Duration</span>{cs.duration}</div>
          </div>
        </div>
      </section>

      {cs.images?.length > 0 && (
        <section className="casestudy-gallery-wrap">
          <div className="container">
            <div className="casestudy-gallery" style={{ columnCount: Math.min(4, cs.images.length) }}>
              {cs.images.map((img, i) => (
                <button key={img} type="button" className="casestudy-image" onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }} aria-label={`Open image ${i + 1} of ${cs.images.length}`}>
                  <img src={img} alt={`${cs.title}, view ${i + 1}`} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className={`casestudy-grid ${cs.testimonial ? '' : 'casestudy-grid--full'}`}>
            <div className="casestudy-main">
              <div className="casestudy-section">
                <h2>The Challenge</h2>
                <p>{cs.challenge}</p>
              </div>
              <div className="casestudy-section">
                <h2>Our Solution</h2>
                <p>{cs.solution}</p>
              </div>
              <div className="casestudy-section">
                <h2>The Result</h2>
                <p>{cs.result}</p>
              </div>
            </div>

            {cs.testimonial && (
              <aside className="casestudy-sidebar">
                <div className="casestudy-testimonial">
                  <Icon name="quote" size={24} />
                  <p>"{cs.testimonial.quote}"</p>
                  <span>— {cs.testimonial.author}</span>
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>

      <div className="container">
        <CTA />
      </div>

      {lightboxOpen && (
        <ImageLightbox
          images={cs.images}
          current={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setLightboxIndex((i) => (i === 0 ? cs.images.length - 1 : i - 1))}
          onNext={() => setLightboxIndex((i) => (i === cs.images.length - 1 ? 0 : i + 1))}
        />
      )}
    </div>
  );
}
