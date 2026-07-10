import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import Icon from "./Icon";
import "./ServiceCard.css";

export default function ServiceCard({ service, index = 0 }) {
  const [ref, visible] = useScrollAnimation();

  return (
    <article
      className={`service-card ${visible ? "animate" : ""}`}
      ref={ref}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="service-card-image">
        <img src={service.image} alt={service.title} loading="lazy" />

        <span className="service-card-badge">
          {service.title}
        </span>
      </div>

      <div className="service-card-content">

        <h3 className="service-card-title">
          {service.title}
        </h3>

        <p className="service-card-desc">
          {service.description}
        </p>

        {service.features && (
          <div className="service-card-features">
            {service.features.slice(0, 3).map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
        )}

        <Link
          to={`/services#${service.id}`}
          className="service-card-link"
        >
          Learn More <Icon name="arrow-right" size={14} />
        </Link>
      </div>
    </article>
  );
}