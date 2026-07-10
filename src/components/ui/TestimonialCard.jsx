import Icon from './Icon';
import './TestimonialCard.css';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card-stars">
        {Array.from({ length: testimonial.rating }, (_, i) => (
          <Icon key={i} name="star-filled" size={16} />
        ))}
      </div>
      <div className="testimonial-card-quote">
        <Icon name="quote" size={32} />
      </div>
      <p className="testimonial-card-text">"{testimonial.quote}"</p>
      <div className="testimonial-card-author">
        <img src={testimonial.image} alt={testimonial.name} />
        <div>
          <h4>{testimonial.name}</h4>
          <span>{testimonial.role}</span>
        </div>
      </div>
    </div>
  );
}
