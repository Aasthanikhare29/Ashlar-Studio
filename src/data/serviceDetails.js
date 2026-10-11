// Long-form content for service detail pages, keyed by service id in services.js.
// '[Empty Value]' = awaiting client data (never emitted in schema).
export const serviceDetails = {
  architecture: {
    slug: 'architecture',
    metaTitle: 'Architects in Nagpur | Residential & Commercial Architecture | Ashlar Studio',
    metaDescription: 'Architects in Nagpur designing bungalows, G+2 homes and commercial buildings, from concept and NMC/NMRDA approval drawings to site supervision.',
    author: 'pranav-kadoo',
    updated: '2026-10-11',
    h1: 'Architects in Nagpur for Homes, Bungalows & Commercial Buildings',
    answer: 'Ashlar Studio is an architecture practice in Nagpur that designs independent bungalows, G+2 and G+3 family homes and commercial buildings. We handle the full process: site study, concept design, 3D facade visualisation, approval drawings for NMC or NMRDA, working drawings and site supervision until handover.',
    heroImage: '/projects/wankhede-residence/1.webp',
    heroAlt: 'Wankhede Residence, Chinchbhawan, Nagpur: three-storey home with jaali facade designed by Ashlar Studio',
    facts: [
      { label: 'Based in', value: 'Nagpur, Maharashtra' },
      { label: 'Recent work', value: 'Chinchbhawan, Shankarpur, Jafar Nagar' },
      { label: 'Typical design timeline', value: '[Empty Value]' },
      { label: 'Fee basis', value: '% of construction cost or fixed fee' },
    ],
    included: [
      { title: 'Site & brief study', text: 'Plot survey review, setbacks and FSI check under UDCPR, orientation and sun path, and a written brief of your rooms, budget and priorities.' },
      { title: 'Concept & space planning', text: 'Two or three layout options for each floor, with parking, staircase position, natural light and cross-ventilation worked out early.' },
      { title: '3D facade design', text: 'Photorealistic elevation renders so you can see materials, lighting and the street view before anything is built.' },
      { title: 'Approval drawings', text: 'Submission drawings prepared for building permission from the Nagpur Municipal Corporation (NMC) or NMRDA, depending on where the plot is.' },
      { title: 'Working drawings', text: 'Detailed plans, sections, door and window schedules, and coordination with structural, plumbing and electrical consultants.' },
      { title: 'Site supervision', text: 'Scheduled site visits at key stages to check that construction follows the drawings, and to resolve on-site questions quickly.' },
    ],
    climateTitle: "How do we design for Nagpur's climate?",
    climateIntro: 'Nagpur summers regularly cross 45°C, so a good home here is planned around heat first and looks second. Every design decision below is about keeping rooms cooler without relying only on air conditioning.',
    climate: [
      'Keep the west and south walls as solid as possible, and place stairs, toilets and storage on them as a heat buffer.',
      'Use deep balcony slabs, projecting frames and canopies to shade glass, rather than leaving windows flush with the wall.',
      'Use perforated jaali screens to filter harsh light while keeping airflow and privacy, as in the Wankhede and Dhoke residences.',
      'Plan stair cores and double-height spaces to work as stack ventilation, pulling hot air up and out.',
      'Insulate and finish terraces with light, reflective surfaces, since the roof gains the most heat in a G+2 house.',
      'Allow for rooftop rainwater harvesting from the start, so the pipes are designed in rather than added later.',
    ],
    process: [
      { step: '01', title: 'Consultation & site visit', text: 'We meet, visit the plot and agree the brief, budget range and scope.', deliverable: 'Written brief and fee proposal' },
      { step: '02', title: 'Concept design', text: 'Layout options and massing studies for every floor.', deliverable: 'Floor plan options' },
      { step: '03', title: 'Design development', text: 'The chosen plan is refined, with facade design and materials.', deliverable: '3D elevation renders' },
      { step: '04', title: 'Approvals & documentation', text: 'Submission set for NMC/NMRDA, then full working drawings.', deliverable: 'Approval and working drawings' },
      { step: '05', title: 'Construction support', text: 'Site visits, contractor queries and quality checks until handover.', deliverable: 'Site visit reports' },
    ],
    projectSlugs: ['wankhede-residence', 'thakre-residence', 'yogesh-dekate-residence'],
    faqs: [
      { question: 'How much does an architect charge in Nagpur?', answer: 'Architects in Nagpur usually charge either a percentage of the construction cost or a fixed fee for a defined scope. Our fee depends on the plot size, number of floors and how much site supervision you need. Our current range is [Empty Value]; we confirm it in a written proposal after the first consultation.' },
      { question: 'How long does it take to design a house in Nagpur?', answer: 'Design and drawings for a typical G+2 house take [Empty Value], before construction starts. Building permission time depends on NMC or NMRDA processing, and construction itself usually takes longer than the design stage.' },
      { question: 'Do you prepare drawings for NMC building permission?', answer: 'Yes. We prepare the submission drawings needed for building permission from the Nagpur Municipal Corporation or NMRDA, and check setbacks, FSI and parking against UDCPR before submission so the design does not need reworking later.' },
      { question: 'Can you design only the front elevation of my house?', answer: 'Yes. Many clients come to us for facade or elevation design only, with 3D renders of the exterior. We can also take on the full architecture once the elevation is finalised.' },
      { question: 'Do you also handle construction?', answer: 'We offer design-only services and full turnkey delivery. With turnkey, we manage design, procurement and construction as a single point of responsibility.' },
    ],
    related: [
      { label: '3D Visualization', to: '/services/visualization' },
      { label: 'Interior Design', to: '/services/interior' },
      { label: 'Turnkey Solutions', to: '/services/turnkey' },
    ],
  },
};
