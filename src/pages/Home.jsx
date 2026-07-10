import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { testimonials } from '../data/testimonials';
import { blogPosts } from '../data/blog';
import SectionTitle from '../components/ui/SectionTitle';
import ServiceCard from '../components/ui/ServiceCard';
import ProjectCard from '../components/ui/ProjectCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import BlogCard from '../components/ui/BlogCard';
import CTA from '../components/ui/CTA';
import './Home.css';

const heroSlides = [
  {
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800&q=85',
   },
  {
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1800&q=85',
   },
  {
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=85',
  },
];

function AnimatedCounter({ end, suffix = '', start }) {
  const [count, setCount] = useState(0);

useEffect(() => {
  if (!start) {
    setCount(0);
    return;
  }

  let current = 0;
  const duration = 1800;
  const increment = end / (duration / 16);

  const timer = setInterval(() => {
    current += increment;

    if (current >= end) {
      setCount(end);
      clearInterval(timer);
    } else {
      setCount(Math.floor(current));
    }
  }, 16);

  return () => clearInterval(timer);
}, [start, end]);

  return (
    <span className="stat-number">
      {count}
      {suffix}
    </span>
  );
}


export default function Home() {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation({threshold: 0.3,once: false,});
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === heroSlides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
  };


  return (
    <>
      <section className="hero">
        <div className="hero-slider">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${
                index === currentSlide ? 'active' : ''
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          ))}
        </div>

        <div className="hero-overlay" />

        <button
          type="button"
          className="hero-arrow hero-arrow-left"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ‹
        </button>

        <button
          type="button"
          className="hero-arrow hero-arrow-right"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ›
        </button>

        <div className="hero-content container" ref={heroRef}>
          <div className="hero-text">
            <h1 className={`hero-title ${heroVisible ? 'animate' : ''}`}>
  Designing Spaces
  <br />
  That Inspire
</h1>

<p className={`hero-desc ${heroVisible ? 'animate' : ''}`}>
  Ashlar Studio is a premier architecture and design firm crafting
  extraordinary spaces that blend innovation, sustainability and
  timeless elegance.
</p>

            <div className={`hero-actions ${heroVisible ? 'animate' : ''}`}>
<Link to="/projects" className="btn btn-primary btn-lg"> View Our Work </Link> 
<Link to="/contact" className="btn btn-secondary btn-lg"> Get in Touch </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="What We Do"
            title="Our Core Services"
            description="From concept to completion, we offer comprehensive design services tailored to your vision."
          />

          <div className="section-grid">
            {services.slice(0, 3).map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionTitle
            subtitle="Our Work"
            title="Featured Projects"
            description="Explore a selection of our finest projects that showcase our expertise and creativity."
          />

          <div className="section-grid">
            {projects.slice(0, 3).map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/projects" className="btn btn-primary btn-lg">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

<section className="section">
  <div className="container">
    <SectionTitle
      subtitle="Testimonials"
      title="What Our Clients Say"
      description="Hear from the people and organizations we've had the privilege to work with."
    />

    <div className="section-grid">
      {testimonials.slice(0, 3).map((t, i) => (
        <TestimonialCard
          key={t.id}
          testimonial={t}
          index={i}
        />
      ))}
    </div>

    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <Link to="/testimonials" className="btn btn-primary btn-lg">
        View All Testimonials
      </Link>
    </div>
  </div>
</section>

     <section className="stats-section" ref={statsRef}>
  <div className="container">
    <div className="stats-grid">
      <div className="stat-card">
        <AnimatedCounter end={200} suffix="+" start={statsVisible} />
        <p>Projects Completed</p>
      </div>

      <div className="stat-card">
        <AnimatedCounter end={15} suffix="+" start={statsVisible} />
        <p>Years Experience</p>
      </div>

      <div className="stat-card">
        <AnimatedCounter end={50} suffix="+" start={statsVisible} />
        <p>Design Awards</p>
      </div>

      <div className="stat-card">
        <AnimatedCounter end={98} suffix="%" start={statsVisible} />
        <p>Client Satisfaction</p>
      </div>
    </div>
  </div>
</section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle
            subtitle="Latest Insights"
            title="From Our Blog"
            description="Stay updated with our latest thoughts on design, architecture, and the built environment."
          />

          <div className="section-grid">
            {blogPosts.slice(0, 3).map((p, i) => (
              <BlogCard key={p.id} post={p} index={i} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/blog" className="btn btn-primary btn-lg">
              Read All Articles
            </Link>
          </div>
        </div>
      </section>

      <div className="container">
        <CTA />
      </div>
    </>
  );
}