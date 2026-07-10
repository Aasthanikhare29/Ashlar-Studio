import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './BlogCard.css';

export default function BlogCard({ post, index = 0 }) {
  const [ref, visible] = useScrollAnimation();

  return (
    <article className={`blog-card ${visible ? 'animate' : ''}`} ref={ref} style={{ transitionDelay: `${index * 0.08}s` }}>
      <Link to={`/blog/${post.slug}`} className="blog-card-image">
        <img src={post.image} alt={post.title} loading="lazy" />
        <span className="blog-card-category">{post.category}</span>
      </Link>
      <div className="blog-card-content">
        <div className="blog-card-meta">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="blog-card-title">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <div className="blog-card-footer">
          <span className="blog-card-author">By {post.author}</span>
          <Link to={`/blog/${post.slug}`} className="blog-card-read">Read More</Link>
        </div>
      </div>
    </article>
  );
}
