import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import Icon from '../components/ui/Icon';
import CTA from '../components/ui/CTA';
import './BlogDetail.css';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="page-wrapper">
        <div className="container" style={{ textAlign: 'center', padding: '6rem 0' }}>
          <h1>Post Not Found</h1>
          <Link to="/blog" className="btn btn-primary btn-lg" style={{ marginTop: '1rem' }}>Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <article className="blog-detail-hero">
        <div className="container">
          <Link to="/blog" className="blog-detail-back"><Icon name="chevron-left" size={14} /> Back to Blog</Link>
          <div className="blog-detail-meta">
            <span className="blog-detail-category">{post.category}</span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="blog-detail-title">{post.title}</h1>
          <p className="blog-detail-excerpt">{post.excerpt}</p>
          <div className="blog-detail-author">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt={post.author} />
            <div>
              <strong>{post.author}</strong>
              <span>Principal Architect</span>
            </div>
          </div>
        </div>
      </article>

      <div className="container">
        <div className="blog-detail-content">
          <img src={post.image} alt={post.title} className="blog-detail-featured" />
          <div className="blog-detail-body">
            <p>{post.content}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="blog-detail-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="blog-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <CTA />
      </div>
    </div>
  );
}
