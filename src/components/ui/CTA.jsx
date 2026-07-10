import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './CTA.css';

export default function CTA({ title, description, buttonText, buttonLink = '/contact', light = false }) {
  const [ref, visible] = useScrollAnimation();

  return (
    <section className={`cta-section ${light ? 'cta-section--light' : ''} ${visible ? 'animate' : ''}`} ref={ref}>
      <div className="container">
        <h2 className="cta-title">{title || "Let's Create Something Extraordinary Together"}</h2>
        <p className="cta-desc">{description || 'Ready to bring your vision to life? Our team is eager to collaborate with you.'}</p>
        <Link to={buttonLink} className="btn btn-primary btn-lg">{buttonText || 'Start Your Project'}</Link>
      </div>
    </section>
  );
}
