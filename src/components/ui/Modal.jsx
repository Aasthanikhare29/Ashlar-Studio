import { useEffect, useCallback } from 'react';
import { useSite } from '../../context/SiteContext';
import './Modal.css';

const Modal = () => {
  const { modalOpen, modalContent, closeModal } = useSite();

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') closeModal();
  }, [closeModal]);

  useEffect(() => {
    if (modalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [modalOpen, handleKeyDown]);

  if (!modalOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal} aria-label="Close modal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        {modalContent}
      </div>
    </div>
  );
};

export default Modal;
