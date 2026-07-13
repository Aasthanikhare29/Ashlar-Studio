import { useParams, Link } from 'react-router-dom';
import { teamMembers } from '../data/team';
import CTA from '../components/ui/CTA';
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import './TeamDetail.css';

const socialIcons = {
  linkedin: <FaLinkedinIn />,
  instagram: <FaInstagram />,
  facebook: <FaFacebookF />,
  twitter: <FaXTwitter />,
};

export default function TeamDetail() {
  const { slug } = useParams();
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    return (
      <div className="td-not-found">
        <h1>Team Member Not Found</h1>
        <Link to="/about">Back to About</Link>
      </div>
    );
  }

  const socialLinks = Object.entries(member.social || {});

  return (
    <div className="td">
      <section className="td-hero">
        <div className="td-hero-bg">
          <div className="td-hero-pattern" />
          <div className="td-hero-glow" />
        </div>
        <div className="td-container">
          <Link to="/about" className="td-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Team
          </Link>
          <div className="td-hero-grid">
            <div className="td-hero-image-wrap">
              <div className="td-hero-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="td-hero-image-ring" />
              <div className="td-hero-image-dot" />
            </div>
            <div className="td-hero-info">
              <div className="td-hero-info-badge">
                <span className="td-dot" />
                {member.role}
              </div>
              <h1>{member.name}</h1>
              <p className="td-bio">{member.bio}</p>
              <div className="td-meta">
                {member.education && (
                  <div className="td-meta-item">
                    <div className="td-meta-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                    </div>
                    <div>
                      <span className="td-meta-label">Education</span>
                      <span className="td-meta-value">{member.education}</span>
                    </div>
                  </div>
                )}
                {member.experience && (
                  <div className="td-meta-item">
                    <div className="td-meta-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
                    </div>
                    <div>
                      <span className="td-meta-label">Experience</span>
                      <span className="td-meta-value">{member.experience}</span>
                    </div>
                  </div>
                )}
              </div>
              {socialLinks.length > 0 && (
                <div className="td-social">
                  {socialLinks.map(([key, url]) => {
                    if (!url || !socialIcons[key]) return null;
                    return (
                      <a key={key} href={url} className={`td-social-link ${key}`} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on ${key}`}>
                        {socialIcons[key]}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="td-hero-wave">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none"><path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f7f5f0"/></svg>
        </div>
      </section>

      <div className="td-container">
        <div className="td-content-layout">
          <section className="td-section">
            <span className="td-section-tag">About</span>
            <h2 className="td-section-title">{member.name.split(' ')[0]}'s Story</h2>
            {member.fullBio?.map((para, i) => (
              <p key={i} className="td-para">{para}</p>
            ))}
          </section>

          <aside className="td-sidebar">
            {member.expertise && (
              <div className="td-card">
                <div className="td-card-accent" />
                <div className="td-card-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <h3>Expertise</h3>
                <ul className="td-expertise-list">
                  {member.expertise.map((item) => (
                    <li key={item}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>

      <div className="td-container">
        <CTA />
      </div>
    </div>
  );
}
