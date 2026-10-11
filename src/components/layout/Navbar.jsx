import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../data/navigation';
import Icon from '../ui/Icon';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [megaOpen, setMegaOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const closeTimer = useRef(null);
  const isDesktop = () => window.matchMedia('(min-width: 1025px)').matches;
  // Small delay so the pointer can cross the gap between a nav item and its menu
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => { setMegaOpen(false); setDropdownOpen(null); }, 200);
  };
  const cancelClose = () => clearTimeout(closeTimer.current);
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setDropdownOpen(null); setMegaOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const getNavClass = () => {
    if (scrolled || !isHome) return 'navbar scrolled';
    return 'navbar transparent';
  };

  return (
    <nav className={getNavClass()} ref={navRef} aria-label="Main navigation">
      <div className="navbar-inner container-wide">
          <Link to="/" className="navbar-logo" aria-label="Ashlar Studio Home">
            <img src="/ashlar.png" alt="Ashlar Studio" className="logo-mark" />
          </Link>

        <div className={`navbar-menu ${mobileOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li
  key={link.name}
  className="nav-item"
  onMouseLeave={() => { if (isDesktop()) scheduleClose(); }}
  onMouseEnter={() => {
    if (!isDesktop()) return;
    cancelClose();
    if (link.megaMenu) setDropdownOpen(null);
    if (link.dropdown) setMegaOpen(false);
    if (link.megaMenu) setMegaOpen(true);
    if (link.dropdown) setDropdownOpen(link.name);
  }}
>
                {link.megaMenu ? (
                  <>
                    <button className="nav-link" aria-haspopup="true" aria-expanded={megaOpen} onClick={() => setMegaOpen((o) => !o)}>
                      {link.name} <Icon name="chevron-down" size={12} className="nav-arrow" />
                    </button>
                      <div
  className={`mega-menu ${megaOpen ? 'open' : ''}`}
  onMouseEnter={cancelClose}
  onMouseLeave={() => { if (isDesktop()) scheduleClose(); }}
>
                      <div className="mega-menu-inner container-wide">
                        {link.megaMenu.map((col) => (
                          <div className="mega-col" key={col.title}>
                            <h4 className="mega-title">{col.title}</h4>
                            <ul>
                              {col.items.map((item) => (
                                <li key={item.name}><Link to={item.path} className="mega-link">{item.name}</Link></li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <div className="mega-cta">
                          <h4>Need a Consultation?</h4>
                          <p>Let's discuss your project over a coffee.</p>
                          <Link to="/book-consultation" className="btn btn-primary btn-sm">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                ) : link.dropdown ? (
                  <>
                    <button className="nav-link" aria-haspopup="true" aria-expanded={dropdownOpen === link.name} onClick={() => setDropdownOpen((o) => (o === link.name ? null : link.name))}>
                      {link.name} <Icon name="chevron-down" size={12} className="nav-arrow" />
                    </button>
                    <ul
  className={`dropdown-menu ${dropdownOpen === link.name ? 'open' : ''}`}
  onMouseEnter={cancelClose}
  onMouseLeave={() => { if (isDesktop()) scheduleClose(); }}
>
                      {link.dropdown.map((item) => (
                        <li key={item.name}><Link to={item.path} className="dropdown-link">{item.name}</Link></li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link to={link.path} className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}>
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <Link to="/book-consultation" className="btn btn-primary btn-sm nav-consult-btn">
              Book Consultation
            </Link>
          </div>
        </div>

        <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen}>
          <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`} />
        </button>
      </div>

      {mobileOpen && <div className="nav-overlay" onClick={() => setMobileOpen(false)} />}
    </nav>
  );
}
