import { useEffect, useCallback } from 'react';
import { useSite } from '../../context/SiteContext';
import './Lightbox.css';

const Lightbox = () => {
  const { lightboxOpen, lightboxData, closeLightbox } = useSite();

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') closeLightbox();
  }, [closeLightbox]);

  useEffect(() => {
    if (lightboxOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [lightboxOpen, handleKeyDown]);

  if (!lightboxOpen || !lightboxData) return null;

  return (
    <div className="lightbox" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Image lightbox">
      <button className="lightbox__close" onClick={closeLightbox} aria-label="Close lightbox">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      <img
        src={lightboxData}
        className="lightbox__image"
        alt="Lightbox"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default Lightbox;
