import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-top container-wide">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/ashlar.png" alt="Ashlar Studio" className="logo-mark" />
            </Link>
            <p className="footer-desc">
              A premier architecture and interior design studio crafting extraordinary spaces that inspire, endure, and elevate the human experience.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="var(--bg)"/></svg></a>
              <a href="#" aria-label="LinkedIn"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg></a>
              <a href="#" aria-label="Twitter/X"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
              <a href="#" aria-label="Facebook"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services#architecture">Architecture</Link></li>
              <li><Link to="/services#interior">Interior Design</Link></li>
              <li><Link to="/services#landscape">BIM</Link></li>
              <li><Link to="/services#urban">Urban Planning</Link></li>
              <li><Link to="/services#visualization">3D Visualization</Link></li>
              <li><Link to="/services#sustainable">Sustainable Design</Link></li>
              <li><Link to="/services#renovation">Renovation</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Projects</h4>
            <ul className="footer-links">
              <li><Link to="/projects?category=Residential">Residential</Link></li>
              <li><Link to="/projects?category=Commercial">Commercial</Link></li>
              <li><Link to="/projects?category=Hospitality">Hospitality</Link></li>
              <li><Link to="/projects?category=Interior+Design">Interior</Link></li>
              <li><Link to="/projects?category=Urban+Planning">Urban Planning</Link></li>
              <li><Link to="/projects?category=Master+Planning">Master Planning</Link></li>
            </ul>
          </div>

          <div className="footer-col footer-newsletter-col">
            <h4 className="footer-heading">Newsletter</h4>
            <p className="footer-newsletter-text">Subscribe to receive our latest projects, design insights, and studio news.</p>
            <form className="footer-newsletter" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" aria-label="Email for newsletter" required />
              <button type="submit" className="btn btn-primary btn-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom container-wide">
        <div className="footer-bottom-inner">
          <p>&copy; {currentYear} Ashlar Studio. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
