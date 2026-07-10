import { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ImageLightbox from '../components/ui/ImageLightbox';
import CTA from '../components/ui/CTA';
import './Gallery.css';

const galleryImages = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
  'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
  'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&q=80',
  'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=600&q=80',
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
  'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=80',
  'https://images.unsplash.com/photo-1448630360428-65456859b2e0?w=600&q=80',
  'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=600&q=80',
];

const categories = ['All', 'Architecture', 'Interior', 'Landscape', 'Urban'];

export default function Gallery() {
  const [activeCat, setActiveCat] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (i) => { setLightboxIndex(i); setLightboxOpen(true); };

  return (
    <div className="page-wrapper">
      <section className="gallery-hero">
        <div className="container">
          <SectionTitle subtitle="Gallery" title="Project Gallery" description="A visual journey through our portfolio of completed projects across sectors." />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {categories.map((cat) => (
              <button key={cat} className={`gallery-filter ${activeCat === cat ? 'active' : ''}`} onClick={() => setActiveCat(cat)}>
                {cat}
              </button>
            ))}
          </div>
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div key={i} className="gallery-item" onClick={() => openLightbox(i)}>
                <img src={img} alt={`Gallery ${i + 1}`} loading="lazy" />
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
          images={galleryImages}
          current={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setLightboxIndex((i) => (i === 0 ? galleryImages.length - 1 : i - 1))}
          onNext={() => setLightboxIndex((i) => (i === galleryImages.length - 1 ? 0 : i + 1))}
        />
      )}
    </div>
  );
}
