import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './AwardCard.css';

export default function AwardCard({ award, index = 0 }) {
  const [ref, visible] = useScrollAnimation();

  return (
    <div className={`award-card ${visible ? 'animate' : ''}`} ref={ref} style={{ transitionDelay: `${index * 0.08}s` }}>
      <div className="award-card-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#E86A33"/>
        </svg>
      </div>
      <h3 className="award-card-title">{award.title}</h3>
      <p className="award-card-org">{award.organization}</p>
      <span className="award-card-year">{award.year}</span>
    </div>
  );
}
