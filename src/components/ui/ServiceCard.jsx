import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./ServiceCard.css";

export default function ServiceCard({ service, index = 0 }) {
  const [ref, visible] = useScrollAnimation();

  return (
    <article
      className={`service-card ${visible ? "animate" : ""}`}
      ref={ref}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <Link to={`/services/${service.id}`} className="service-card-link">
        <div className="service-card-image">
          <img src={service.image} alt={service.title} loading="lazy" />
          <span className="service-card-badge">{service.title}</span>
        </div>
        <div className="service-card-content">
          <h3 className="service-card-title">{service.title}</h3>
          <p className="service-card-desc">{service.description}</p>
          {service.features && (
            <div className="service-card-features">
              {service.features.slice(0, 3).map((feature) => (
                <span key={feature}>{feature}</span>
              ))}
            </div>
          )}
          <span className="service-card-learn">Learn More</span>
        </div>
      </Link>
    </article>
  );
}
