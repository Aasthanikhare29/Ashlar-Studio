import SectionTitle from '../components/ui/SectionTitle';
import FAQAccordion from '../components/ui/FAQAccordion';
import CTA from '../components/ui/CTA';
import './Careers.css';

const openPositions = [
  { title: 'Senior Architect', type: 'Full-time', location: 'Mumbai', department: 'Architecture' },
  { title: 'Interior Designer', type: 'Full-time', location: 'Mumbai', department: 'Interior Design' },
  { title: 'Landscape Architect', type: 'Full-time', location: 'Mumbai', department: 'Landscape' },
  { title: '3D Visualizer', type: 'Full-time', location: 'Mumbai', department: 'Visualization' },
  { title: 'Project Manager', type: 'Full-time', location: 'Mumbai', department: 'Management' },
  { title: 'Junior Architect', type: 'Full-time', location: 'Mumbai', department: 'Architecture' },
];

const faqItems = [
  { question: 'What is the application process?', answer: 'Submit your application through our careers page. If shortlisted, we\'ll schedule a portfolio review followed by interviews with the team.' },
  { question: 'Do you offer internships?', answer: 'Yes, we offer paid internships for architecture and design students. Applications are accepted on a rolling basis.' },
  { question: 'What should I include in my portfolio?', answer: 'Please include 8-12 projects that showcase your design process, technical skills, and creative thinking.' },
  { question: 'What is the work culture like?', answer: 'We foster a collaborative, creative environment where every team member\'s voice is valued. Work-life balance is important to us.' },
];

export default function Careers() {
  return (
    <div className="page-wrapper">
      <section className="careers-hero">
        <div className="container">
          <SectionTitle subtitle="Join Us" title="Build Your Career at Ashlar Studio" description="We're looking for passionate individuals who share our commitment to design excellence and innovation." />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="careers-section-title">Open Positions</h2>
          <div className="careers-list">
            {openPositions.map((pos, i) => (
              <div key={i} className="career-card">
                <div className="career-card-info">
                  <h3>{pos.title}</h3>
                  <div className="career-card-tags">
                    <span>{pos.department}</span>
                    <span>{pos.type}</span>
                    <span>{pos.location}</span>
                  </div>
                </div>
                <button className="btn btn-primary btn-sm">Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle subtitle="FAQ" title="Frequently Asked Questions" description="Have questions about working at Ashlar Studio? Find answers below." />
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <div className="container">
        <CTA title="Don't See the Right Role?" description="We're always open to connecting with talented individuals. Send us your CV." buttonText="Send Your CV" />
      </div>
    </div>
  );
}
