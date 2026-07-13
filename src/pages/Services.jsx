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
import { services, industries } from "../data/services";
import "./Services.css";

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We begin by understanding your vision, needs, site conditions, and project requirements through in-depth consultation.",
    icon: Search,
  },
  {
    step: "02",
    title: "Concept Design",
    description:
      "Our team develops initial design concepts, mood boards, and schematic layouts that capture the essence of your vision.",
    icon: PencilRuler,
  },
  {
    step: "03",
    title: "Design Development",
    description:
      "We refine the chosen concept into detailed designs, including material selection, technical drawings, and 3D visualizations.",
    icon: Blocks,
  },
  {
    step: "04",
    title: "Documentation",
    description:
      "Comprehensive construction documents, specifications, and permit drawings are prepared for regulatory approvals.",
    icon: FileText,
  },
  {
    step: "05",
    title: "Construction",
    description:
      "We oversee construction to ensure the design intent is faithfully executed, managing quality, timeline, and budget.",
    icon: HardHat,
  },
  {
    step: "06",
    title: "Delivery",
    description:
      "The project is handed over with all systems tested, documentation complete, and your satisfaction guaranteed.",
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

      <div className="container">
        <CTA />
      </div>
    </div>
  );
}