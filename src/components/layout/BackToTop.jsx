import { useState, useEffect, useRef } from 'react';
import './BackToTop.css';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);

    const footer = document.querySelector('footer');
    if (footer) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => setFooterVisible(entry.isIntersecting),
        { threshold: 0 }
      );
      observerRef.current.observe(footer);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`back-to-top ${visible && !footerVisible ? 'back-to-top--visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
};

export default BackToTop;
