export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  {
    name: 'Projects',
    path: '/projects',
    megaMenu: [
      {
        title: 'By Category',
        items: [
          { name: 'Residential', path: '/projects?category=Residential' },
          { name: 'Commercial', path: '/projects?category=Commercial' },
          { name: 'Hospitality', path: '/projects?category=Hospitality' },
          { name: 'Interior Design', path: '/projects?category=Interior+Design' },
          { name: 'Urban Planning', path: '/projects?category=Urban+Design' },
          { name: 'Master Planning', path: '/projects?category=Master+Planning' },
        ],
      },
      {
        title: 'Featured',
        items: [
          { name: 'Award Winners', path: '/projects?filter=award-winning' },
          { name: 'Recent Projects', path: '/projects?filter=recent' },
          { name: 'Case Studies', path: '/case-studies' },
          { name: 'Project Gallery', path: '/gallery' },
        ],
      },
    ],
  },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
  {
    name: 'More',
    dropdown: [
      { name: 'Careers', path: '/careers' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Case Studies', path: '/case-studies' },
    ],
  },
];
