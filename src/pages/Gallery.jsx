import { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ImageLightbox from '../components/ui/ImageLightbox';
import CTA from '../components/ui/CTA';
import { projects } from '../data/projects';
import './Gallery.css';

const allImages = projects.flatMap((p) =>
  p.images.map((src, i) => ({ src, category: p.category, alt: `${p.title}${p.location ? `, ${p.location}` : ''} – view ${i + 1}` })),
);

const categories = ['All', ...new Set(projects.map((p) => p.category))];

export default function Gallery() {
  const [activeCat, setActiveCat] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryImages = allImages.filter((img) => activeCat === 'All' || img.category === activeCat);
  const lightboxImages = galleryImages.map((img) => img.src);

  const openLightbox = (i) => { setLightboxIndex(i); setLightboxOpen(true); };

  return (
    <div className="page-wrapper">
      <section className="gallery-hero">
        <div className="container">
          <SectionTitle
          title={<span style={{color:"#fff"}}>Project Gallery</span>}
          description={<span style={{color:"#fffff0"}}>Design renders and walkthrough stills from our residential and hospitality projects in Nagpur.</span>}
           />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {categories.map((cat) => (
              <button key={cat} className={`gallery-filter ${activeCat === cat ? 'active' : ''}`} onClick={() => { setActiveCat(cat); setLightboxOpen(false); }}>
                {cat}
              </button>
            ))}
          </div>
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div key={i} className="gallery-item" onClick={() => openLightbox(i)}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <CTA />
      </div>

      {lightboxOpen && (
        <ImageLightbox
          images={lightboxImages}
          current={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setLightboxIndex((i) => (i === 0 ? galleryImages.length - 1 : i - 1))}
          onNext={() => setLightboxIndex((i) => (i === galleryImages.length - 1 ? 0 : i + 1))}
        />
      )}
    </div>
  );
}
