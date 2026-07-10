import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './TeamCard.css';

export default function TeamCard({ member, index = 0 }) {
  const [ref, visible] = useScrollAnimation();

  return (
    <div className={`team-card ${visible ? 'animate' : ''}`} ref={ref} style={{ transitionDelay: `${index * 0.08}s` }}>
      <div className="team-card-image">
        <img src={member.image} alt={member.name} loading="lazy" />
        <div className="team-card-social">
          {Object.entries(member.social).map(([key, val]) => (
            <a key={key} href={val} aria-label={`${key}`}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="12"/></svg></a>
          ))}
        </div>
      </div>
      <div className="team-card-content">
        <h3 className="team-card-name">{member.name}</h3>
        <span className="team-card-role">{member.role}</span>
        <p className="team-card-bio">{member.bio}</p>
      </div>
    </div>
  );
}
