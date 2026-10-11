import {
  Blocks,
  FileText,
  HardHat,
  KeyRound,
  PencilRuler,
  Search,
} from "lucide-react";

import SectionTitle from "../components/ui/SectionTitle";
import ServiceCard from "../components/ui/ServiceCard";
import CTA from "../components/ui/CTA";
import FAQAccordion from "../components/ui/FAQAccordion";
import { faqs } from "../data/faqs";
import { services, industries } from "../data/services";
import "./Services.css";

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:"Understanding client aspirations, site conditions, budget, and project requirements comprehensively.",
    icon: Search,
  },
  {
    step: "02",
    title: "Concept Design",
    description:
      "Transforming ideas into innovative concepts through creative planning and spatial exploration.",
    icon: PencilRuler,
  },
  {
    step: "03",
    title: "Design Development",
    description:
      "Refining layouts, materials, details, and systems for coordinated design excellence throughout.",
    icon: Blocks,
  },
  {
    step: "04",
    title: "Documentation",
    description:
      "Preparing precise technical drawings, specifications, and approvals for seamless project execution.",  
    icon: FileText,
  },
  {
    step: "05",
    title: "Construction",
    description:
      "Coordinating construction activities, ensuring quality, accuracy, and design intent during execution.",
    icon: HardHat,
  },
  {
    step: "06",
    title: "Delivery",
    description:
      "Delivering completed spaces with exceptional quality, functionality, and lasting client satisfaction always.",
    icon: KeyRound,
  },
];

export default function Services() {
  return (
    <div className="page-wrapper">
      <section className="services-hero">
        <div className="container">
          <SectionTitle
            subtitle={
              <span style={{color:"#FFFAFA"}}>
                "Our Expertise"
              </span>
            }
            title={
              <span className="services-hero-title">
                Comprehensive Design Services
              </span>
            }
            description={
              <span style={{color:"#FFFFF0 "}}>
                "From architecture to turnkey solutions, we offer end-to-end design services tailored to your unique vision and requirements."
              </span>
            }
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light process-section">
        <div className="container">
          <SectionTitle
            subtitle="Our Process"
            title="How We Work"
            description="Our proven design process ensures every project is delivered with excellence, from initial concept to final completion."
          />

          <div className="process-steps">
            {processSteps.map((process, index) => {
              const Icon = process.icon;

              return (
                <article
                  key={process.step}
                  className="process-step"
                >
                  <div className="process-step-top">
                    <span className="process-step-num">
                      {process.step}
                    </span>

                    <div
                      className="process-step-icon"
                      aria-hidden="true"
                    >
                      <div className="process-icon-layer">
                        <Icon
                          className="process-icon process-icon--orange"
                          size={30}
                          strokeWidth={1.8}
                        />

                        <Icon
                          className="process-icon process-icon--teal"
                          size={30}
                          strokeWidth={1.8}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="process-step-content">
                    <h3>{process.title}</h3>

                    <p>{process.description}</p>
                  </div>

                  {index !== processSteps.length - 1 && (
                    <span
                      className="process-connector"
                      aria-hidden="true"
                    />
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="Industries"
            title="Sectors We Serve"
            description="Our expertise spans across diverse industry sectors, delivering tailored solutions for each."
          />

          <div className="section-grid">
            {industries.map((industry) => (
              <article
                key={industry.id}
                className="industry-card"
              >
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle
            subtitle="FAQ"
            title="Questions Clients Ask Us"
            description="Straight answers on process, timelines, fees and scope before you start a project with Ashlar Studio."
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <div className="container">
        <CTA />
      </div>
    </div>
  );
}