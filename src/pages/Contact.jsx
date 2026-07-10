import { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Icon from '../components/ui/Icon';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      <section className="contact-hero">
        <div className="container">
          <SectionTitle subtitle="Get in Touch" title="Let's Start a Conversation" description="Have a project in mind? We'd love to hear about it. Reach out and let's discuss how we can bring your vision to life." />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>Feel free to reach out through any of the channels below. Our team typically responds within 24 hours.</p>

              <div className="contact-info-items">
                <div className="contact-info-item">
                  <div className="contact-info-icon"><Icon name="location" size={20} /></div>
                  <div>
                    <h4>Studio Address</h4>
                    <p>42 Design District, Andheri East<br />Mumbai, Maharashtra 400093<br />India</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><Icon name="phone" size={20} /></div>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 22 4567 8900<br />+91 98765 43210</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><Icon name="email" size={20} /></div>
                  <div>
                    <h4>Email</h4>
                    <p>hello@ashlarstudio.com<br />projects@ashlarstudio.com</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><Icon name="clock" size={20} /></div>
                  <div>
                    <h4>Studio Hours</h4>
                    <p>Monday – Friday: 9:00 AM – 7:00 PM<br />Saturday: 10:00 AM – 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrap">
              {submitted ? (
                <div className="contact-success">
                  <Icon name="check" size={40} />
                  <h3>Thank You!</h3>
                  <p>Your message has been received. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input type="text" id="name" required placeholder="Your full name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input type="email" id="email" required placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="+91 98765 43210" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service Interested In</label>
                    <select id="service">
                      <option value="">Select a service</option>
                      <option value="architecture">Architecture</option>
                      <option value="interior">Interior Design</option>
                      <option value="landscape">Landscape Design</option>
                      <option value="visualization">3D Visualization</option>
                      <option value="urban">Urban Design</option>
                      <option value="sustainable">Sustainable Design</option>
                      <option value="renovation">Renovation</option>
                      <option value="turnkey">Turnkey Solutions</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" rows={5} required placeholder="Tell us about your project..." />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
