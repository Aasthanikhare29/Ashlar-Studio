
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blog";
import CTA from "../components/ui/CTA";
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

                <span>{post.date}</span>
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
                  <strong>{post.author}</strong>
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
                {post.authorRole} at Ashlar Studio, specialising in sustainable
                architecture, thoughtful spatial planning and timeless design.
              </p>
            </div>
          </section>

          <div className="blog-detail-body">
            <p>{post.content}</p>

            <p>
              Sustainable architecture is becoming an essential part of modern
              design. It focuses on creating spaces that reduce environmental
              impact while improving comfort, functionality and long-term
              performance.
            </p>

            <p>
              Architects today are exploring better construction techniques,
              renewable materials and intelligent energy systems to create
              buildings that respond thoughtfully to people and their
              surroundings.
            </p>

            {/* First article image */}
            <figure className="blog-detail-article-image">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
              />

              <figcaption>
                Thoughtful design connects architecture with its surrounding
                environment.
              </figcaption>
            </figure>

            <p>
              Material selection plays an important role in sustainable
              construction. Architects must consider durability, maintenance,
              availability and the environmental impact of each material.
            </p>

            <p>
              Sustainable architecture brings environmental responsibility,
              functionality and long-term value together. Each decision should
              support both the people using the building and the environment
              surrounding it.
            </p>

            <p>
              Architects can achieve this through thoughtful planning, passive
              design techniques, durable materials and efficient building
              systems.
            </p>

            {/* Table */}
            <div className="blog-detail-table-wrapper">
              <table className="blog-detail-table">
                <thead>
                  <tr>
                    <th>Material</th>
                    <th>Durability</th>
                    <th>Maintenance</th>
                    <th>Sustainability</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Bamboo</td>
                    <td>High</td>
                    <td>Low</td>
                    <td>Excellent</td>
                  </tr>

                  <tr>
                    <td>Recycled Steel</td>
                    <td>Very High</td>
                    <td>Low</td>
                    <td>Very Good</td>
                  </tr>

                  <tr>
                    <td>Engineered Wood</td>
                    <td>Medium</td>
                    <td>Medium</td>
                    <td>Very Good</td>
                  </tr>

                  <tr>
                    <td>Natural Stone</td>
                    <td>Excellent</td>
                    <td>Low</td>
                    <td>Good</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Sustainable materials can reduce waste, lower energy consumption
              and increase the useful life of a building. The best choice
              depends on the climate, project requirements and local
              availability.
            </p>

            <p>
              Local materials can also reduce transportation emissions while
              helping the building feel more connected to its location and
              cultural context.
            </p>

            <p>
              The most successful sustainable buildings balance environmental
              performance with comfort, beauty and practical everyday use.
            </p>

            {/* Standalone quote */}
            <blockquote className="blog-detail-quote">
              <p>
                Architecture is the thoughtful making of space. Every project
                should inspire, connect people and stand the test of time.
              </p>

              <cite>— {post.author}</cite>
            </blockquote>

            <p>
              A sustainable building should not only perform efficiently but
              should also create a meaningful experience for the people using
              it. Natural light, ventilation and thoughtful spatial planning
              all contribute to healthier and more comfortable environments.
            </p>

            <p>
              The future of architecture lies in balancing environmental
              responsibility with beauty, durability and human-centred design.
              This approach allows buildings to remain valuable and relevant
              for generations.
            </p>

            {/* Second article image */}
            <figure className="blog-detail-article-image">
              <img
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&q=85"
                alt="Contemporary sustainable building exterior"
                loading="lazy"
              />

              <figcaption>
                Sustainable architecture combines performance, beauty and
                long-term value.
              </figcaption>
            </figure>
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
                {post.authorRole} at Ashlar Studio, specialising in sustainable
                architecture, thoughtful spatial planning and timeless design.
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