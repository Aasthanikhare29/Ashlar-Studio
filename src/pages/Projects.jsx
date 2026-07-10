import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';
import CTA from '../components/ui/CTA';
import { projects, projectCategories, projectTypes } from '../data/projects';
import './Projects.css';

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || '';
  const activeType = searchParams.get('type') || '';

  const filtered = projects.filter((p) => {
    if (activeCategory && p.category !== activeCategory) return false;
    if (activeType && p.type !== activeType) return false;
    return true;
  });

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) params.set(key, value);
    else params.delete(key);
    setSearchParams(params);
  };

  return (
    <div className="page-wrapper">
      <section className="projects-hero">
        <div className="container">
          <SectionTitle subtitle="Our Portfolio" title="Featured Projects" description="Explore our portfolio of exceptional projects that showcase our expertise across diverse sectors." />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="projects-filters">
            <div className="filter-group">
              <label>Category</label>
              <div className="filter-chips">
                {projectCategories.map((cat) => (
                  <button key={cat.value} className={`filter-chip ${activeCategory === cat.value ? 'active' : ''}`}
                    onClick={() => setFilter('category', cat.value)}>
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="section-grid">
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="projects-empty">No projects found matching your filters.</p>
          )}
        </div>
      </section>

      <div className="container">
        <CTA />
      </div>
    </div>
  );
}
