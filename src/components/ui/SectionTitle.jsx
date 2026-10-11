import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './SectionTitle.css';

export default function SectionTitle({ title, description, align = 'center', light = false }) {
  const [ref, visible] = useScrollAnimation();

  return (
    <div className={`section-title section-title--${align} ${light ? 'section-title--light' : ''} ${visible ? 'animate' : ''}`} ref={ref}>
      {title && <h2 className="section-title-text">{title}</h2>}
      {description && <p className="section-title-desc">{description}</p>}
    </div>
  );
}
