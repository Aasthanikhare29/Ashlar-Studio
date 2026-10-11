import { blogPosts } from './data/blog';
import { projects } from './data/projects';
import { caseStudies } from './data/caseStudies';
import { teamMembers } from './data/team';
import { services } from './data/services';
import { faqs } from './data/faqs';
import { serviceDetails } from './data/serviceDetails';

// ponytail: change when the custom domain goes live
export const SITE_URL = 'https://ashlar-studio.vercel.app';
const NAME = 'Ashlar Studio';
const ORG_ID = `${SITE_URL}/#organization`;
const EMPTY = '[Empty Value]';
const has = (v) => v && v !== EMPTY;

export const organization = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': ORG_ID,
  name: NAME,
  alternateName: ['Ashlar Studio Nagpur', 'SPK Buildwell'],
  url: SITE_URL,
  logo: `${SITE_URL}/ashlar.png`,
  image: `${SITE_URL}/ashlar.png`,
  description: 'Ashlar Studio is an architecture, interior design and urban planning studio based in Nagpur, Maharashtra, India (formerly SPK Buildwell), founded by architect and urban planner Pranav Kadoo.',
  founder: { '@id': `${SITE_URL}/team/pranav-kadoo#person` },
  email: 'hello@ashlarstudio.com',
  telephone: '+91-77578-41518',
  address: {
    '@type': 'PostalAddress',
    // ponytail: add streetAddress + postalCode once the client confirms them
    addressLocality: 'Nagpur',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  areaServed: { '@type': 'Country', name: 'India' },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '16:00' },
  ],
  knowsAbout: services.map((s) => s.title),
  // ponytail: add LinkedIn/Instagram/Houzz/Google Business URLs here once profiles exist
  sameAs: [],
};

const crumbs = (...items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [['Home', '/'], ...items].map(([name, path], i) => ({
    '@type': 'ListItem', position: i + 1, name, item: SITE_URL + path,
  })),
});

const person = (m) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/team/${m.slug}#person`,
  name: m.name,
  jobTitle: m.role,
  description: m.bio,
  url: `${SITE_URL}/team/${m.slug}`,
  worksFor: { '@id': ORG_ID },
  knowsAbout: m.expertise,
  hasCredential: m.education,
  sameAs: Object.values(m.social || {}).filter((u) => u && u !== '#'),
});

const faqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question', name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const STATIC = {
  '/': {
    title: 'Ashlar Studio | Architects & Interior Designers in Nagpur',
    description: 'Ashlar Studio is a Nagpur architecture and interior design studio offering architecture, interiors, BIM, 3D visualization, urban planning, turnkey and valuation services across India.',
  },
  '/about': {
    title: 'About Ashlar Studio | Architects & Urban Planners, Nagpur',
    description: 'Meet Ashlar Studio (formerly SPK Buildwell), a Nagpur practice led by architect and urban planner Pranav Kadoo, designing homes, restaurants and urban spaces across Nagpur.',
  },
  '/services': {
    title: 'Architecture & Interior Design Services | Ashlar Studio',
    description: 'Architecture, interior design, BIM, 3D visualization, urban planning, sustainable design, renovation, turnkey and land & building valuation services from Ashlar Studio, Nagpur.',
  },
  '/projects': {
    title: 'Projects | Residential, Commercial & Hospitality | Ashlar Studio',
    description: 'Residential bungalows and a garden restaurant designed by Ashlar Studio in Nagpur, including Chinchbhawan, Shankarpur and Jafar Nagar.',
  },
  '/blog': {
    title: 'Architecture & Interior Design Insights | Ashlar Studio Blog',
    description: 'Practical articles on sustainable architecture, interior design, lighting, small spaces, heritage restoration and urban planning from the Ashlar Studio team.',
  },
  '/contact': {
    title: 'Contact Ashlar Studio | Architects in Nagpur',
    description: 'Contact Ashlar Studio, architects and interior designers in Nagpur. Call +91 77578 41518 or email hello@ashlarstudio.com.',
  },
  '/careers': {
    title: 'Careers at Ashlar Studio | Architecture Jobs in Nagpur',
    description: 'Open architecture, interior design, 3D visualization and project management roles at Ashlar Studio, Nagpur. Paid internships available.',
  },
  '/book-consultation': {
    title: 'Book a Design Consultation | Ashlar Studio',
    description: 'Book a free initial consultation with Ashlar Studio to discuss your architecture or interior design project.',
  },
  '/gallery': {
    title: 'Gallery | Ashlar Studio',
    description: 'Images of architecture and interior design work by Ashlar Studio, Nagpur.',
  },
  '/case-studies': {
    title: 'Case Studies | Ashlar Studio',
    description: 'How Ashlar Studio approached the brief, constraints and outcomes on selected architecture projects in India.',
  },
  '/privacy': { title: 'Privacy Policy | Ashlar Studio', description: 'Privacy policy for the Ashlar Studio website.' },
  '/terms': { title: 'Terms of Service | Ashlar Studio', description: 'Terms of service for the Ashlar Studio website.' },
  '/cookie-policy': { title: 'Cookie Policy | Ashlar Studio', description: 'Cookie policy for the Ashlar Studio website.' },
};

const crumbLabel = { '/about': 'About', '/services': 'Services', '/projects': 'Projects', '/blog': 'Blog', '/contact': 'Contact', '/careers': 'Careers', '/gallery': 'Gallery', '/case-studies': 'Case Studies' };

export function getSeo(path) {
  path = path.replace(/\/+$/, '') || '/';
  const [, section, slug] = path.split('/');
  let seo = STATIC[path];
  const jsonLd = [organization];

  if (seo) {
    if (crumbLabel[path]) jsonLd.push(crumbs([crumbLabel[path], path]));
    if (path === '/services') jsonLd.push(faqPage);
    if (path === '/services') {
      services.forEach((s) => jsonLd.push({
        '@context': 'https://schema.org', '@type': 'Service', name: s.title, description: s.description.trim(),
        serviceType: s.title, provider: { '@id': ORG_ID }, areaServed: 'India',
      }));
    }
    if (path === '/about') teamMembers.forEach((m) => jsonLd.push(person(m)));
  } else if (section === 'services' && serviceDetails[slug]) {
    const d = serviceDetails[slug];
    const svc = services.find((x) => x.id === slug);
    seo = { title: d.metaTitle, description: d.metaDescription, image: SITE_URL + d.heroImage };
    const a = teamMembers.find((m) => m.slug === d.author);
    jsonLd.push({
      '@context': 'https://schema.org', '@type': 'WebPage', url: SITE_URL + path, name: d.h1, dateModified: d.updated,
      ...(a && { author: { '@id': `${SITE_URL}/team/${a.slug}#person`, name: a.name } }),
      about: { '@type': 'Service', name: `${svc.title} in Nagpur` }, publisher: { '@id': ORG_ID },
    });
    jsonLd.push(crumbs(['Services', '/services'], [svc.title, path]), {
      '@context': 'https://schema.org', '@type': 'Service', name: `${svc.title} in Nagpur`, serviceType: svc.title,
      description: d.answer, provider: { '@id': ORG_ID }, image: SITE_URL + d.heroImage,
      areaServed: { '@type': 'City', name: 'Nagpur' },
      hasOfferCatalog: { '@type': 'OfferCatalog', name: `${svc.title} services`, itemListElement: d.included.map((i) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: i.title, description: i.text } })) },
    }, {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      // FAQs still waiting on client data stay out of schema
      mainEntity: d.faqs.filter((f) => !f.answer.includes(EMPTY)).map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    });
  } else if (section === 'blog' && slug) {
    const p = blogPosts.find((x) => x.slug === slug);
    if (p) {
      const author = teamMembers.find((m) => m.name === p.author);
      seo = { title: `${p.title} | Ashlar Studio`, description: p.excerpt, image: p.image, type: 'article' };
      jsonLd.push(crumbs(['Blog', '/blog'], [p.title, path]), {
        '@context': 'https://schema.org', '@type': 'BlogPosting', headline: p.title, description: p.excerpt,
        image: p.image, datePublished: p.date, dateModified: p.updated || p.date, keywords: p.tags.join(', '),
        author: author ? { '@id': `${SITE_URL}/team/${author.slug}#person`, name: author.name, url: `${SITE_URL}/team/${author.slug}` } : { '@type': 'Person', name: p.author },
        publisher: { '@id': ORG_ID }, mainEntityOfPage: SITE_URL + path,
      });
    }
  } else if (section === 'projects' && slug) {
    const p = projects.find((x) => x.slug === slug);
    if (p) {
      seo = { title: `${p.title}${p.location ? `, ${p.location}` : ''} | ${p.category} Project | Ashlar Studio`, description: `${p.description} ${p.details || ''}`.trim().slice(0, 160), image: SITE_URL + p.image };
      jsonLd.push(crumbs(['Projects', '/projects'], [p.title, path]), {
        '@context': 'https://schema.org', '@type': 'CreativeWork', name: p.title, about: `${p.category} ${p.type}`,
        description: `${p.description} ${p.details || ''}`.trim(), image: (p.images || [p.image]).map((i) => SITE_URL + i), creator: { '@id': ORG_ID },
        ...(has(p.year) && { dateCreated: String(p.year) }),
        ...(has(p.location) && { locationCreated: { '@type': 'Place', name: p.location } }),
        ...(p.video && { video: { '@type': 'VideoObject', name: `${p.title} 3D walkthrough`, description: p.description, contentUrl: SITE_URL + p.video, thumbnailUrl: SITE_URL + p.image, uploadDate: '2026-10-11' } }),
      });
    }
  } else if (section === 'case-studies' && slug) {
    const c = caseStudies.find((x) => x.slug === slug);
    if (c) {
      seo = { title: `${c.title} | Case Study | Ashlar Studio`, description: c.excerpt, image: c.image, type: 'article' };
      jsonLd.push(crumbs(['Case Studies', '/case-studies'], [c.title, path]), {
        '@context': 'https://schema.org', '@type': 'Article', headline: c.title, description: c.excerpt, image: c.image,
        author: { '@id': ORG_ID }, publisher: { '@id': ORG_ID }, mainEntityOfPage: SITE_URL + path,
      });
    }
  } else if (section === 'team' && slug) {
    const m = teamMembers.find((x) => x.slug === slug);
    if (m) {
      seo = { title: `${m.name}, ${m.role} | Ashlar Studio`, description: m.bio, image: m.image, type: 'profile' };
      jsonLd.push(crumbs(['About', '/about'], [m.name, path]), person(m));
    }
  }

  seo ||= { title: `Page not found | ${NAME}`, description: STATIC['/'].description, noindex: true };
  return { image: `${SITE_URL}/ashlar.png`, type: 'website', ...seo, url: SITE_URL + (path === '/' ? '/' : path), jsonLd };
}

// Every indexable URL â€” used by the prerender script for HTML + sitemap.xml
export const routes = [
  ...Object.keys(STATIC),
  ...Object.keys(serviceDetails).map((id) => `/services/${id}`),
  ...blogPosts.map((p) => `/blog/${p.slug}`),
  ...projects.map((p) => `/projects/${p.slug}`),
  ...caseStudies.map((c) => `/case-studies/${c.slug}`),
  ...teamMembers.map((m) => `/team/${m.slug}`),
];
