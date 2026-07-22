import { Link, useParams } from 'react-router-dom';
import { services } from '../data/services';
import Icon from '../components/ui/Icon';
import './ComingSoon.css';

export default function ComingSoon() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  return (
    <div className="cs-page">
      <div className="cs-card">
        {service && (
          <>
            <div className="cs-icon">
              <Icon name={service.icon} size={48} />
            </div>
            <h1 className="cs-title">{service.title}</h1>
          </>
        )}
        <p className="cs-text">We're crafting something exceptional. This page is coming soon!</p>
        <Link to="/services" className="cs-btn">Back to Services</Link>
      </div>
    </div>
  );
}
