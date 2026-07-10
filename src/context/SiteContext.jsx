import { createContext, useContext, useState, useCallback } from 'react';

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [cookieAccepted, setCookieAccepted] = useState(
    () => localStorage.getItem('cookieAccepted') === 'true'
  );
  const [consultationOpen, setConsultationOpen] = useState(false);

  const toggleMenu = useCallback(() => setMenuOpen((p) => !p), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const toggleSearch = useCallback(() => setSearchOpen((p) => !p), []);

  const openLightbox = useCallback((data) => {
    setLightboxData(data);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setLightboxData(null);
    document.body.style.overflow = '';
  }, []);

  const openModal = useCallback((content) => {
    setModalContent(content);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setModalContent(null);
    document.body.style.overflow = '';
  }, []);

  const acceptCookies = useCallback(() => {
    setCookieAccepted(true);
    localStorage.setItem('cookieAccepted', 'true');
  }, []);

  const openConsultation = useCallback(() => setConsultationOpen(true), []);
  const closeConsultation = useCallback(() => setConsultationOpen(false), []);

  return (
    <SiteContext.Provider
      value={{
        menuOpen,
        toggleMenu,
        closeMenu,
        searchOpen,
        toggleSearch,
        lightboxOpen,
        lightboxData,
        openLightbox,
        closeLightbox,
        modalOpen,
        modalContent,
        openModal,
        closeModal,
        cookieAccepted,
        acceptCookies,
        consultationOpen,
        openConsultation,
        closeConsultation,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) throw new Error('useSite must be used within SiteProvider');
  return context;
};
