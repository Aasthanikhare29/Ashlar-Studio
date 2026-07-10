import SectionTitle from '../components/ui/SectionTitle';
import BlogCard from '../components/ui/BlogCard';
import CTA from '../components/ui/CTA';
import { blogPosts } from '../data/blog';
import './Blog.css';

const categories = ['All', 'Sustainability', 'Interior Design', 'Design Tips', 'Restoration', 'Urban Design'];

export default function Blog() {
  return (
    <div className="page-wrapper">
      <section className="blog-hero">
        <div className="container">
          <SectionTitle subtitle="Our Blog" title="Design Insights & Inspiration" description="Thoughts on architecture, interior design, sustainability, and the creative process from our team." />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-categories">
            {categories.map((cat) => (
              <button key={cat} className={`blog-cat-btn ${cat === 'All' ? 'active' : ''}`}>{cat}</button>
            ))}
          </div>
          <div className="section-grid">
            {blogPosts.map((p, i) => (
              <BlogCard key={p.id} post={p} index={i} />
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
