import SectionTitle from '../components/ui/SectionTitle';
import Icon from '../components/ui/Icon';
import { BOOKING_URL } from '../data/site';
import './BookConsultation.css';

const consultationTypes = [
  { id: 'initial', title: 'Initial Consultation', desc: 'A 1-hour meeting to discuss your project scope, vision, and budget.', price: 'Free' },
  { id: 'site', title: 'Site Visit', desc: 'On-site assessment and feasibility study for your project location.', price: '[Empty Value]' },
  { id: 'concept', title: 'Concept Design Review', desc: 'Detailed review of existing concept designs with professional feedback.', price: '[Empty Value]' },
  { id: 'comprehensive', title: 'Comprehensive Consultation', desc: 'Full-day consultation including site visit, design review, and strategic planning.', price: '[Empty Value]' },
];

export default function BookConsultation() {
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
              <h2>Consultation Options</h2>
              <div className="consult-options">
                {consultationTypes.map((ct) => (
                  <div key={ct.id} className="consult-option">
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
              <h2>Pick a Time</h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                Choose a slot that suits you on Pranav Kadoo's booking calendar. You'll get an instant confirmation, and we'll call to understand your project before the meeting.
              </p>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                Open Booking Calendar
              </a>
              <p style={{ color: 'var(--text-light)', marginTop: '1.5rem', fontSize: '0.9rem' }}>
                Prefer to talk first? Call <a href="tel:+917757841518">+91 77578 41518</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
