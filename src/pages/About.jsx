import { Link } from "react-router-dom";
import {
  FaAward,
  FaLightbulb,
  FaLeaf,
  FaHandshake,
  FaShieldAlt,
  FaClipboardCheck,
} from "react-icons/fa";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import SectionTitle from "../components/ui/SectionTitle";
import TeamCard from "../components/ui/TeamCard";
import AwardCard from "../components/ui/AwardCard";
import CTA from "../components/ui/CTA";
import { teamMembers } from "../data/team";

import "./About.css";

const awards = [
  {
    title: "Best Residential Architecture",
    organization: "Architecture Excellence Awards",
    year: 2024,
  },
  {
    title: "Sustainable Project of the Year",
    organization: "Green Building Council",
    year: 2024,
  },
  {
    title: "Best Hospitality Design",
    organization: "Design Innovation Awards",
    year: 2023,
  },
  {
    title: "Firm of the Year",
    organization: "National Architecture Association",
    year: 2023,
  },
  {
    title: "Interior Design Excellence",
    organization: "Design Today Magazine",
    year: 2022,
  },
  {
    title: "Urban Planning Award",
    organization: "City Planning Institute",
    year: 2022,
  },
  {
    title: "Best Commercial Project",
    organization: "Real Estate Awards",
    year: 2021,
  },
  {
    title: "Innovation in Architecture",
    organization: "Tech in Design Forum",
    year: 2021,
  },
];

const values = [
  {
    title: "Excellence",
    desc: "We pursue the highest standards in every aspect of our work, from design to delivery.",
    icon: <FaAward />,
  },
  {
    title: "Innovation",
    desc: "We embrace new technologies and approaches to push the boundaries of what's possible.",
    icon: <FaLightbulb />,
  },
  {
    title: "Sustainability",
    desc: "We are committed to environmentally responsible design that reduces our carbon footprint.",
    icon: <FaLeaf />,
  },
  {
    title: "Collaboration",
    desc: "We believe the best results come from close partnership with our clients and stakeholders.",
    icon: <FaHandshake />,
  },
  {
    title: "Integrity",
    desc: "We operate with transparency, honesty, and ethical responsibility in all we do.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Accountability",
    desc: "We take ownership of every project, honoring our commitments through transparency, responsibility, and dependable execution.",
    icon: <FaClipboardCheck />,
  },
];

export default function About() {
  const [ref, visible] = useScrollAnimation();

  return (
    <div className="page-wrapper">
      <section className="about-hero">
        <div className="container">
          <SectionTitle
            subtitle={
              <span style={{color:"#fffafa"}}>
                "About Us"
              </span>
            }
            title={
              <span className="about-hero-title">
                Crafting Extraordinary Spaces Since 2010
              </span>
            }
            description={
              <span style={{color:" #fffff0"}}>
                "We are a collective of architects, designers, and thinkers dedicated to creating spaces that inspire, endure, and elevate the human experience."
              </span>
            }
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-story" ref={ref}>
            <div
              className={`about-story-content ${
                visible ? "animate" : ""
              }`}
            >
              <h2>Our Story</h2>

              <p>
                Ashlar Studio was founded with a simple belief that architecture
                should do more than occupy land. It should enrich lives, respond
                to its surroundings, and remain relevant for generations.
              </p>

              <p>
                The name Ashlar comes from finely cut stone that has been shaped
                with precision and care. Throughout history, ashlar masonry has
                been admired for its strength, craftsmanship, and timeless
                character. Those same values form the foundation of our
                practice. We believe that every project, regardless of its size,
                deserves thoughtful design, careful attention to detail, and an
                unwavering commitment to quality.
              </p>

              <p>
                At Ashlar Studio, we see architecture as a process of listening
                before designing. Every site has its own context. Every client
                has a unique vision. Every challenge presents an opportunity to
                create something meaningful. Our role is to bring these elements
                together into spaces that are functional, enduring, and deeply
                connected to the people who use them.
              </p>

              <p>
                Our work is guided by curiosity, collaboration, and a respect
                for both tradition and innovation. We embrace contemporary
                design while remaining grounded in timeless principles of
                proportion, materiality, and craftsmanship. By combining
                creativity with technical expertise, we strive to deliver
                architecture that is elegant in its simplicity and purposeful
                in every detail.
              </p>

              <p>
                Ashlar Studio is more than a design practice. It is a commitment
                to creating spaces that inspire, perform, and stand the test of
                time. Every project is an opportunity to build not just
                structures, but lasting relationships and places where memories
                are made.
              </p>
            </div>

            <div
              className={`about-story-image ${
                visible ? "animate" : ""
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
                alt="Ashlar Studio office"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle
            subtitle="Our Values"
            title="What We Stand For"
          />

          <div className="values-grid">
            {values.map((value, index) => (
              <article key={value.title} className="value-card">
                <div
                  className="value-card-icon"
                  aria-hidden="true"
                >
                  {value.icon}
                </div>

                <div className="value-card-content">
                  <h3>{value.title}</h3>

                  <div className="value-card-bottom">
                    <p>{value.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="Our Team"
            title="Meet the People Behind the Studio"
            description="Our diverse team of creative professionals brings together expertise from across the design spectrum."
          />

          <div className="section-grid">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={member.id}
                member={member}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionTitle
            subtitle="Recognition"
            title="Awards & Accolades"
            description="Our work has been recognized by leading institutions and publications in the design industry."
          />

          <div className="awards-grid">
            {awards.map((award, index) => (
              <AwardCard
                key={`${award.title}-${award.year}`}
                award={award}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <CTA
          title="Want to Work With Us?"
          description="We're always looking for talented individuals to join our team."
          buttonText="View Careers"
          buttonLink="/careers"
        />
      </div>
    </div>
  );
}