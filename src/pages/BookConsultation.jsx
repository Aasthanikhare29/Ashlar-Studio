import { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Icon from '../components/ui/Icon';
import './BookConsultation.css';

const consultationTypes = [
  { id: 'initial', title: 'Initial Consultation', desc: 'A 1-hour meeting to discuss your project scope, vision, and budget.', price: 'Free' },
  { id: 'site', title: 'Site Visit', desc: 'On-site assessment and feasibility study for your project location.', price: '₹5,000' },
  { id: 'concept', title: 'Concept Design Review', desc: 'Detailed review of existing concept designs with professional feedback.', price: '₹15,000' },
  { id: 'comprehensive', title: 'Comprehensive Consultation', desc: 'Full-day consultation including site visit, design review, and strategic planning.', price: '₹35,000' },
];

export default function BookConsultation() {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="page-wrapper">
        <div className="container" style={{ textAlign: 'center', padding: '8rem 0' }}>
          <Icon name="check" size={48} />
          <h1 style={{ margin: '1rem 0', fontSize: '2rem' }}>Consultation Booked!</h1>
          <p style={{ color: '#666' }}>We'll confirm your appointment within 24 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <section className="consult-hero">
        <div className="container">
          <SectionTitle subtitle={<span style={{color:"#fffafa"}}>"Book Now"</span>} 
          title={<span style={{color:"#fff"}}>"Schedule a Consultation" </span>}
          description={<span style={{color:"#fffff0"}}>"Let's discuss your project. Choose the consultation type that best fits your needs." </span>}/>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="consult-grid">
            <div className="consult-types">
              <h2>Choose a Consultation Type</h2>
              <div className="consult-options">
                {consultationTypes.map((ct) => (
                  <div key={ct.id} className={`consult-option ${selected === ct.id ? 'selected' : ''}`} onClick={() => setSelected(ct.id)}>
                    <div className="consult-option-radio">
                      <div className={`consult-radio-btn ${selected === ct.id ? 'checked' : ''}`} />
                    </div>
                    <div className="consult-option-info">
                      <h4>{ct.title}</h4>
                      <p>{ct.desc}</p>
                    </div>
                    <span className="consult-option-price">{ct.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="consult-form-wrap">
              <h2>Your Details</h2>
              <form className="consult-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" required placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" required placeholder="your@email.com" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input type="tel" id="phone" required placeholder="+91 98765 43210" />
                </div>
                <div className="form-group">
                  <label htmlFor="date">Preferred Date</label>
                  <input type="date" id="date" />
                </div>
                <div className="form-group">
                  <label htmlFor="notes">Project Details</label>
                  <textarea id="notes" rows={4} placeholder="Briefly describe your project..." />
                </div>
                <button type="submit" className="btn btn-primary btn-lg" disabled={!selected}>Book Consultation</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
