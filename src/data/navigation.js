import { services } from './services';

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Services',
    path: '/services',
    dropdown: [
      { name: 'All Services', path: '/services' },
      ...services.map((s) => ({ name: s.title, path: `/services/${s.id}` })),
    ],
  },
  {
    name: 'Projects',
    path: '/projects',
    megaMenu: [
      {
        title: 'By Category',
        items: [
          { name: 'All Projects', path: '/projects' },
          { name: 'Residential', path: '/projects?category=Residential' },
          { name: 'Hospitality', path: '/projects?category=Hospitality' },
        ],
      },
      {
        title: 'Explore',
        items: [
          { name: 'Case Studies', path: '/case-studies' },
          { name: 'Project Gallery', path: '/gallery' },
        ],
      },
    ],
  },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
  { name: 'Careers', path: '/careers' },
];
