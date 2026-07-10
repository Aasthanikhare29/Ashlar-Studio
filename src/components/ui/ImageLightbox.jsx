import { useEffect } from 'react';
import Icon from './Icon';
import './ImageLightbox.css';

export default function ImageLightbox({ images, current, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close"><Icon name="close" size={24} /></button>
      {images.length > 1 && (
        <>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous">
            <Icon name="chevron-left" size={24} />
          </button>
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next">
            <Icon name="chevron-right" size={24} />
          </button>
        </>
      )}
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={images[current]} alt={`Image ${current + 1}`} />
        <div className="lightbox-counter">{current + 1} / {images.length}</div>
      </div>
    </div>
  );
}
