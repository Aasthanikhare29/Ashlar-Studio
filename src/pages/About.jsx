import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionTitle from '../components/ui/SectionTitle';
import TeamCard from '../components/ui/TeamCard';
import AwardCard from '../components/ui/AwardCard';
import CTA from '../components/ui/CTA';
import { teamMembers } from '../data/team';
import './About.css';

const awards = [
  { title: 'Best Residential Architecture', organization: 'Architecture Excellence Awards', year: 2024 },
  { title: 'Sustainable Project of the Year', organization: 'Green Building Council', year: 2024 },
  { title: 'Best Hospitality Design', organization: 'Design Innovation Awards', year: 2023 },
  { title: 'Firm of the Year', organization: 'National Architecture Association', year: 2023 },
  { title: 'Interior Design Excellence', organization: 'Design Today Magazine', year: 2022 },
  { title: 'Urban Design Award', organization: 'City Planning Institute', year: 2022 },
  { title: 'Best Commercial Project', organization: 'Real Estate Awards', year: 2021 },
  { title: 'Innovation in Architecture', organization: 'Tech in Design Forum', year: 2021 },
];

export default function About() {
  const [ref, visible] = useScrollAnimation();

  return (
    <div className="page-wrapper">
      <section className="about-hero">
        <div className="container">
          <SectionTitle subtitle="About Us" title="Crafting Extraordinary Spaces Since 2010" description="We are a collective of architects, designers, and thinkers dedicated to creating spaces that inspire, endure, and elevate the human experience." />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-story" ref={ref}>
            <div className={`about-story-content ${visible ? 'animate' : ''}`}>
              <h2>Our Story</h2>
              <p>Founded in 2010, Ashlar Studio began with a simple belief: great design has the power to transform lives. What started as a small practice with a handful of passionate architects has grown into a multi-disciplinary studio with a portfolio spanning residential, commercial, hospitality, and urban design projects across India.</p>
              <p>Our name, Ashlar, refers to finely finished stonework — a testament to our commitment to precision, quality, and timeless craftsmanship in every project we undertake. We approach each commission as a unique opportunity to create something meaningful and enduring.</p>
              <p>Today, our team of 50+ architects, interior designers, landscape architects, and support staff work collaboratively across disciplines to deliver holistic design solutions that are innovative, sustainable, and deeply human.</p>
            </div>
            <div className={`about-story-image ${visible ? 'animate' : ''}`}>
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" alt="Ashlar Studio office" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle subtitle="Our Values" title="What We Stand For" />
          <div className="values-grid">
            {[
              { title: 'Excellence', desc: 'We pursue the highest standards in every aspect of our work, from design to delivery.' },
              { title: 'Innovation', desc: 'We embrace new technologies and approaches to push the boundaries of what\'s possible.' },
              { title: 'Sustainability', desc: 'We are committed to environmentally responsible design that reduces our carbon footprint.' },
              { title: 'Collaboration', desc: 'We believe the best results come from close partnership with our clients and stakeholders.' },
              { title: 'Integrity', desc: 'We operate with transparency, honesty, and ethical responsibility in all we do.' },
              { title: 'Human-Centered', desc: 'We design spaces that prioritize human experience, well-being, and connection.' },
            ].map((v, i) => (
              <div key={i} className="value-card">
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle subtitle="Our Team" title="Meet the People Behind the Studio" description="Our diverse team of creative professionals brings together expertise from across the design spectrum." />
          <div className="section-grid">
            {teamMembers.map((m, i) => (
              <TeamCard key={m.id} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionTitle subtitle="Recognition" title="Awards & Accolades" description="Our work has been recognized by leading institutions and publications in the design industry." light />
          <div className="awards-grid">
            {awards.map((a, i) => (
              <AwardCard key={i} award={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <CTA title="Want to Work With Us?" description="We're always looking for talented individuals to join our team." buttonText="View Careers" buttonLink="/careers" />
      </div>
    </div>
  );
}
