import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./TeamCard.css";

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const socialIcons = {
  linkedin: <FaLinkedinIn />,
  instagram: <FaInstagram />,
  facebook: <FaFacebookF />,
  twitter: <FaXTwitter />,
  x: <FaXTwitter />,
  youtube: <FaYoutube />,
};

export default function TeamCard({ member, index = 0 }) {
  const [ref, visible] = useScrollAnimation();

  const socialLinks = member?.social
    ? Object.entries(member.social)
    : [];

  return (
    <div
      ref={ref}
      className={`team-card ${visible ? "animate" : ""}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <Link to={`/team/${member.slug}`} className="team-card-link">
        <div className="team-card-image">
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
          />
          {socialLinks.length > 0 && (
            <div className="team-card-social">
              {socialLinks.map(([key, url]) => {
                const platform = key.toLowerCase();
                if (!socialIcons[platform] || !url) return null;
                return (
                  <a
                    key={platform}
                    href={url}
                    className={`social-icon ${platform}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on ${platform}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {socialIcons[platform]}
                  </a>
                );
              })}
            </div>
          )}
        </div>

        <div className="team-card-content">
          <h3 className="team-card-name">{member.name}</h3>
          <span className="team-card-role">{member.role}</span>
          <p className="team-card-bio">{member.bio}</p>
        </div>
      </Link>
    </div>
  );
}