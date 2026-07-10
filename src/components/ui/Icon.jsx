const P = '#E86A33';
const S = '#0F766E';
const W = '#F9F8F5';

export default function Icon({ name, size = 20, className = '' }) {
  const o = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', className, 'aria-hidden': 'true' };

  const icons = {
    'logo-mark': <svg {...o}><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill={P} /></svg>,
    star: <svg {...o}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" fill={P} /></svg>,
    'star-filled': <svg {...o}><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill={P} /></svg>,
    'arrow-right': <svg {...o} stroke={P} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>,
    'arrow-down': <svg {...o} stroke={P} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7" /></svg>,
    'chevron-left': <svg {...o} stroke={P} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>,
    'chevron-right': <svg {...o} stroke={P} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>,
    'chevron-down': <svg {...o} stroke={P} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>,
    plus: <svg {...o} stroke={P} strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>,
    minus: <svg {...o} stroke={P} strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14" /></svg>,
    close: <svg {...o} stroke={P} strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>,
    check: <svg {...o} stroke={S} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>,
    location: <svg {...o} stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" fill={S} stroke="none" />
    </svg>,
    calendar: <svg {...o} stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <path d="M16 2v4M8 2v4" />
      <path d="M3 10h18" stroke={S} strokeWidth="2" />
    </svg>,
    ruler: <svg {...o} stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h18M7 12V8M11 12V8M15 12V8M19 12V8" />
      <rect x="2" y="12" width="20" height="10" rx="1" fill={W} />
      <path d="M3 12h18" stroke={S} strokeWidth="2" />
    </svg>,
    clock: <svg {...o} stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" stroke={S} strokeWidth="2" />
    </svg>,
    phone: <svg {...o} stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      <circle cx="18" cy="6" r="1.5" fill={S} stroke="none" />
    </svg>,
    email: <svg {...o} stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" fill={W} />
      <path d="M22 6L12 13 2 6" />
      <path d="M22 6L12 13 2 6" stroke={S} strokeWidth="2" />
    </svg>,
    search: <svg {...o} stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" stroke={S} strokeWidth="2.5" />
    </svg>,
    rupee: <svg {...o} stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 21h8M6 7h11M6 11h11M6 15h6M18 4l-7 17" />
    </svg>,
    pin: <svg {...o} stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" fill={S} stroke="none" />
    </svg>,
    play: <svg {...o} stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16" fill={P} stroke="none" />
    </svg>,
    quote: (
  <svg
    {...o}
    stroke={P}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ transform: "scaleX(-1)" }}
  >
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </svg>
),
    architecture: <svg {...o} stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M3 10l9-8 9 8" />
      <path d="M5 10v11M19 10v11" />
      <path d="M10 21V14h4v7" />
      <rect x="8" y="10" width="8" height="2" fill={S} stroke="none" rx="1" />
    </svg>,
    interior: <svg {...o} stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h16" />
      <path d="M4 7v12a2 2 0 002 2h12a2 2 0 002-2V7" />
      <path d="M8 4h8a2 2 0 012 2H6a2 2 0 012-2z" />
      <circle cx="12" cy="15" r="2" fill={S} stroke="none" />
    </svg>,
    landscape: <svg {...o} stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 22l7-10 5 7 4-5 4 8" />
      <path d="M12 2v4M10 4h4" />
      <circle cx="14" cy="7" r="2" fill={S} stroke="none" />
    </svg>,
    visualization: <svg {...o} stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <path d="M8 21h8M12 17v4" />
      <circle cx="16" cy="10" r="1.5" fill={S} stroke="none" />
      <path d="M10 10l2-2 3 3" stroke={S} strokeWidth="2" />
    </svg>,
    urban: <svg {...o} stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M3 10l3-3M21 10l-3-3" />
      <path d="M6 21V7l6-5 6 5v14" />
      <path d="M9 14h2v4H9zM13 11h2v7h-2z" />
      <rect x="11" y="4" width="2" height="4" fill={S} stroke="none" rx="1" />
    </svg>,
    sustainable: <svg {...o} stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10a8 8 0 00-16 0c0 6 8 10 8 10z" />
      <path d="M12 2v20" />
      <path d="M2 12h20" />
      <circle cx="15" cy="9" r="2" fill={S} stroke="none" />
    </svg>,
    renovation: <svg {...o} stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M9 15h6M12 12v6" stroke={S} strokeWidth="2" />
    </svg>,
    turnkey: <svg {...o} stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" fill={W} />
      <path d="M7 11V7a5 5 0 0110 0v4" />
      <circle cx="12" cy="16" r="2" fill={S} stroke="none" />
      <path d="M3 11h18" stroke={S} strokeWidth="2" />
    </svg>,
    residential: <svg {...o} stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V21a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
      <polyline points="9 21 9 12 15 12 15 21" />
      <rect x="10" y="7" width="4" height="2" fill={S} stroke="none" rx="1" />
    </svg>,
    commercial: <svg {...o} stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="15" rx="2" fill={W} />
      <path d="M17 2H7l-2 5h14L17 2z" />
      <path d="M12 12v5" stroke={S} strokeWidth="2" />
      <path d="M2 7h20" stroke={S} strokeWidth="2" />
    </svg>,
    hospitality: <svg {...o} stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2" fill={W} />
      <path d="M6 8h12v3a6 6 0 01-6 6v0a6 6 0 01-6-6V8z" />
      <circle cx="12" cy="18" r="3" fill={S} stroke="none" />
      <path d="M2 2h20" stroke={S} strokeWidth="2" />
    </svg>,
    healthcare: <svg {...o} stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M12 8v8M8 12h8" stroke={S} strokeWidth="2.5" />
    </svg>,
    education: <svg {...o} stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      <path d="M10 8h6M10 12h4" stroke={S} strokeWidth="2" />
      <circle cx="9" cy="16" r="1" fill={S} stroke="none" />
    </svg>,
    retail: <svg {...o} stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <path d="M16 10a4 4 0 01-8 0" />
      <path d="M3 6h18" stroke={S} strokeWidth="2" />
      <circle cx="12" cy="12" r="1.5" fill={S} stroke="none" />
    </svg>,
    luxury: <svg {...o} stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
      <circle cx="12" cy="7" r="1.5" fill={S} stroke="none" />
    </svg>,
  };

  return icons[name] || <svg {...o}><rect x="2" y="2" width="20" height="20" rx="2" fill="none" stroke={P} strokeWidth="1.5" /></svg>;
}
