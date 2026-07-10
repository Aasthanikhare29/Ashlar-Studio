import { useLocation } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import './Legal.css';

const content = {
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'January 1, 2024',
    sections: [
      { heading: 'Information We Collect', body: 'We collect information you provide directly, such as your name, email address, phone number, and project details when you fill out forms on our website.' },
      { heading: 'How We Use Your Information', body: 'We use the information to respond to your inquiries, provide our services, improve our website, and send relevant communications with your consent.' },
      { heading: 'Data Protection', body: 'We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.' },
      { heading: 'Third-Party Sharing', body: 'We do not sell or share your personal information with third parties except as necessary to provide our services or as required by law.' },
      { heading: 'Cookies', body: 'Our website uses cookies to enhance your browsing experience. You can control cookie preferences through your browser settings.' },
      { heading: 'Your Rights', body: 'You have the right to access, correct, or delete your personal data. Contact us to exercise these rights.' },
    ],
  },
  terms: {
    title: 'Terms of Service',
    lastUpdated: 'January 1, 2024',
    sections: [
      { heading: 'Acceptance of Terms', body: 'By accessing or using our website and services, you agree to be bound by these Terms of Service.' },
      { heading: 'Services', body: 'Ashlar Studio provides architecture, interior design, and related services as described on our website. Project-specific terms will be detailed in individual contracts.' },
      { heading: 'Intellectual Property', body: 'All content on this website, including designs, images, text, and logos, is the property of Ashlar Studio and protected by applicable intellectual property laws.' },
      { heading: 'Use of Website', body: 'You agree to use our website for lawful purposes only and not to engage in any activity that disrupts or interferes with the website\'s functionality.' },
      { heading: 'Limitation of Liability', body: 'Ashlar Studio shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services.' },
      { heading: 'Changes to Terms', body: 'We reserve the right to modify these terms at any time. Changes will be effective upon posting to our website.' },
    ],
  },
  cookie: {
    title: 'Cookie Policy',
    lastUpdated: 'January 1, 2024',
    sections: [
      { heading: 'What Are Cookies', body: 'Cookies are small text files stored on your device when you visit a website. They help us improve your browsing experience.' },
      { heading: 'How We Use Cookies', body: 'We use cookies for analytics, performance, and functionality purposes to understand how visitors interact with our website.' },
      { heading: 'Types of Cookies', body: 'We use session cookies (temporary), persistent cookies, and third-party analytics cookies from services like Google Analytics.' },
      { heading: 'Managing Cookies', body: 'You can manage or disable cookies through your browser settings. Note that some features may not function properly without cookies.' },
    ],
  },
};

export default function Legal() {
  const location = useLocation();
  const path = location.pathname.replace('/', '');
  const key = path === 'privacy' ? 'privacy' : path === 'terms' ? 'terms' : 'cookie';
  const data = content[key];

  return (
    <div className="page-wrapper">
      <section className="legal-hero">
        <div className="container">
          <SectionTitle subtitle="Legal" title={data.title} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-content">
            <p className="legal-updated">Last updated: {data.lastUpdated}</p>
            {data.sections.map((s, i) => (
              <div key={i} className="legal-section">
                <h2>{s.heading}</h2>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
