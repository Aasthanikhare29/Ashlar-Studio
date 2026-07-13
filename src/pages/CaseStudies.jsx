import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionTitle from '../components/ui/SectionTitle';
import CTA from '../components/ui/CTA';
import { caseStudies } from '../data/caseStudies';
import './CaseStudies.css';

function CaseStudyCard({ cs, index }) {
  const [ref, visible] = useScrollAnimation();
  return (
    <div className={`case-study-card ${visible ? 'animate' : ''}`} ref={ref} style={{ transitionDelay: `${index * 0.1}s` }}>
      <div className="case-study-card-image">
        <img src={cs.image} alt={cs.title} loading="lazy" />
      </div>
      <div className="case-study-card-content">
        <span className="case-study-card-cat">{cs.category}</span>
        <h2>{cs.title}</h2>
        <p>{cs.excerpt}</p>
        <div className="case-study-card-meta">
          <span>Client: {cs.client}</span>
          <span>Location: {cs.location}</span>
        </div>
        <Link to={`/case-studies/${cs.slug}`} className="btn btn-primary btn-md">Read Case Study</Link>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <div className="page-wrapper">
      <section className="case-studies-hero">
        <div className="container">
          <SectionTitle subtitle={<span style={{color:"#fffafa"}}>"Case Studies" </span>}
          title={<span style={{color:"#fff"}}>"In-Depth Project Analysis" </span>}
          description={<span style={{color:"#fffff0"}}>"Explore detailed case studies that dive into our design process, challenges, and solutions." </span>}/>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="case-studies-list">
            {caseStudies.map((cs, i) => (
              <CaseStudyCard key={cs.id} cs={cs} index={i} />
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <CTA />
      </div>
    </div>
  );
}
