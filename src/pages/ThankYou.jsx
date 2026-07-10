import { Link } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import './ThankYou.css';

export default function ThankYou() {
  return (
    <div className="page-wrapper thankyou-page">
      <div className="container">
        <Icon name="check" size={48} />
        <h1>Thank You!</h1>
        <p>Your message has been received successfully. Our team will get back to you within 24 hours.</p>
        <Link to="/" className="btn btn-primary btn-lg">Back to Home</Link>
      </div>
    </div>
  );
}
