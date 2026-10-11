
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blog";
import { blogBodies } from "../data/blogBodies";
import CTA from "../components/ui/CTA";
import { teamMembers } from "../data/team";
import "./BlogDetail.css";

import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa6";

const fallbackAuthorImage =
  "https://ui-avatars.com/api/?name=Ashlar+Studio&background=1a1a2e&color=ffffff&size=200";

function AuthorImage({ post, className = "" }) {
  return (
    <img
      src={post.authorImage || fallbackAuthorImage}
      alt={post.author || "Blog author"}
      className={className}
      onError={(event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = fallbackAuthorImage;
      }}
    />
  );
}

export default function BlogDetail() {
  const { slug } = useParams();

  const post = blogPosts.find((item) => item.slug === slug);

  const handleAuthorImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallbackAuthorImage;
  };

  const handleShare = (platform) => {
    const currentUrl = encodeURIComponent(window.location.href);
    const shareTitle = encodeURIComponent(post.title);

    const shareLinks = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${currentUrl}&text=${shareTitle}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`,
      whatsapp: `https://wa.me/?text=${shareTitle}%20${currentUrl}`,
      instagram: `https://www.instagram.com/`,
    };

    window.open(
      shareLinks[platform],
      "_blank",
      "noopener,noreferrer,width=700,height=600"
    );
  };

  if (!post) {
    return (
      <div className="page-wrapper">
        <div className="container blog-detail-not-found">
          <h1>Post Not Found</h1>

          <Link to="/blog" className="btn btn-primary btn-lg">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      {/* Split-screen hero */}
      <article className="blog-detail-hero">
        <div className="blog-detail-hero-container">
          <div className="blog-detail-hero-content">
            <div className="blog-detail-hero-content-inner">
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>

                <Link to="/blog">Blog</Link>
                <span>/</span>

                <span className="active">{post.title}</span>
              </nav>

              <div className="blog-detail-meta">
                <span className="blog-detail-category">
                  {post.category}
                </span>

                <time dateTime={post.date}>{post.date}</time>
                <span>{post.readTime}</span>
              </div>

              <h1 className="blog-detail-title">{post.title}</h1>

              <p className="blog-detail-excerpt">{post.excerpt}</p>

              <div className="blog-detail-author">
                <img
                  src={post.authorImage || fallbackAuthorImage}
                  alt={post.author}
                  onError={handleAuthorImageError}
                  loading="eager"
                />

                <div>
                  <strong>
                    {teamMembers.find((m) => m.name === post.author) ? (
                      <Link to={`/team/${teamMembers.find((m) => m.name === post.author).slug}`}>{post.author}</Link>
                    ) : post.author}
                  </strong>
                  <span>{post.authorRole}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-detail-hero-image-wrapper">
            <img
              src={post.image}
              alt={post.title}
              className="blog-detail-hero-image"
              loading="eager"
            />
          </div>
        </div>
      </article>

      {/* Article content */}
      <main className="container">
        <article className="blog-detail-content">
          <section className="bas-detail-author-card">
            <img
              src={post.authorImage || fallbackAuthorImage}
              alt={post.author}
              onError={handleAuthorImageError}
              loading="lazy"
            />

            <div className="bas-detail-author-content">
              <span className="bas-detail-author-label">
                About the author
              </span>

              <h3>{post.author}</h3>

              <p>
                {post.authorRole} at Ashlar Studio.{" "}
                {teamMembers.find((m) => m.name === post.author)?.bio}
              </p>
            </div>
          </section>

          <div className="blog-detail-body">
            {(blogBodies[post.slug] || [{ type: "p", text: post.content }]).map((b, i) => {
              if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
              if (b.type === "ul") return <ul key={i}>{b.items.map((li) => <li key={li}>{li}</li>)}</ul>;
              if (b.type === "quote")
                return (
                  <blockquote key={i} className="blog-detail-quote">
                    <p>{b.text}</p>
                    <cite>— {post.author}</cite>
                  </blockquote>
                );
              return <p key={i}>{b.text}</p>;
            })}
          </div>

          {/* Author card */}
          <section className="bas-detail-author-card">
            <img
              src={post.authorImage || fallbackAuthorImage}
              alt={post.author}
              onError={handleAuthorImageError}
              loading="lazy"
            />

            <div className="bas-detail-author-content">
              <span className="bas-detail-author-label">
                About the author
              </span>

              <h3>{post.author}</h3>

              <p>
                {post.authorRole} at Ashlar Studio.{" "}
                {teamMembers.find((m) => m.name === post.author)?.bio}
              </p>
            </div>
          </section>

          <div className="blog-detail-footer">
            <div className="blog-detail-tags-section">

              <div className="blog-detail-tags">
                {post.tags?.map((tag) => (
                  <span key={tag} className="blog-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="blog-detail-share-section">

              <div className="blog-detail-socials">
                <button
                  type="button"
                  aria-label="Share on Facebook"
                  onClick={() => handleShare("facebook")}
                >
                  <FaFacebookF />
                </button>

                <button
                  type="button"
                  aria-label="Share on X"
                  onClick={() => handleShare("twitter")}
                >
                  <FaXTwitter />
                </button>

                <button
                  type="button"
                  aria-label="Share on LinkedIn"
                  onClick={() => handleShare("linkedin")}
                >
                  <FaLinkedinIn />
                </button>

                <button
                  type="button"
                  aria-label="Share on WhatsApp"
                  onClick={() => handleShare("whatsapp")}
                >
                  <FaWhatsapp />
                </button>

                <button
                  type="button"
                  aria-label="Share on Instagram"
                  onClick={() => handleShare("instagram")}
                >
                  <FaInstagram />
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>

      <div className="container blog-detail-cta">
        <CTA />
      </div>
    </div>
  );
}