import SectionTitle from '../components/ui/SectionTitle';
import TeamCard from '../components/ui/TeamCard';
import CTA from '../components/ui/CTA';
import { teamMembers } from '../data/team';
import './Team.css';

export default function Team() {
  return (
    <div className="page-wrapper">
      <section className="team-hero">
        <div className="container">
          <SectionTitle subtitle="Our Team" title="The People Behind the Studio" description="Our diverse team of architects, designers, and thinkers collaborate to create extraordinary spaces." />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-grid">
            {teamMembers.map((m, i) => (
              <TeamCard key={m.id} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <CTA title="Join Our Team" description="We're always looking for talented individuals to join our growing team." buttonText="View Openings" buttonLink="/careers" />
      </div>
    </div>
  );
}
