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
