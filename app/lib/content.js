export const contact = {
  phoneDisplay: '+91 9611524249',
  phoneDigits: '919611524249',
  email: 'hello@studiospetia.in',
  city: 'Bangalore, India',
};

export function getWhatsappHref(page, projectSlug = null) {
  let message = '';
  if (page === 'home') {
    message = "Hello Studio Spetia. I saw your website and I have a plot in Bangalore. I would like to talk about building.";
  } else if (page === 'work' && !projectSlug) {
    message = "Hello Studio Spetia. I saw your work and I have a plot in Bangalore. I would like to talk about building.";
  } else if (page === 'work' && projectSlug) {
    message = `Hello Studio Spetia. I saw your project ${projectSlug} and I have a plot in Bangalore. I would like to talk about building.`;
  } else if (page === 'studio') {
    message = "Hello Studio Spetia. I read about Sangeetha and Sathya and I have a plot in Bangalore. I would like to talk about building.";
  } else if (page === 'approach') {
    message = "Hello Studio Spetia. I read your approach and I have a plot in Bangalore. I would like to talk about building.";
  } else {
    message = "Hello Studio Spetia. I have a plot in Bangalore and I would like to talk about building. My plot is at [location] and is approximately [size]. I am hoping to start [timeline].";
  }
  return `https://wa.me/${contact.phoneDigits}?text=${encodeURIComponent(message)}`;
}

export const navItems = [
  { label: 'Studio', href: '/studio' },
  { label: 'Work', href: '/work' },
  { label: 'Approach', href: '/approach' },
  { label: 'Contact', href: '/contact' },
];

export const projects = [
  {
    slug: 'sarjapura-house',
    name: 'Sarjapura House',
    location: 'Sarjapura',
    sqft: '4,200 sqft',
    year: '2024',
    tier: 'Atelier',
    duration: 'Eighteen months from sketch to handover',
    imageHero: '/images/work-samples/4.jpg',
    imageDetail: '/images/work-samples/5.jpg',
    imageInterior: '/images/work-samples/3.jpg',
    description: 'Designed for a family of four on a 30×40 plot in Sarjapura. The brief was a south-facing courtyard. The site had a thirty-year-old neem tree that we kept. The wall on the south elevation went up twice — once for the original structure, once after the structural engineer\'s review. The teak in the front door came from a house being demolished in Malleshwaram.',
    quote: '— Suresh, Whitefield',
  },
  {
    slug: 'indiranagar-residence',
    name: 'Indiranagar Residence',
    location: 'Indiranagar',
    sqft: '5,500 sqft',
    year: '2023',
    tier: 'Bespoke',
    duration: 'Sixteen months from sketch to handover',
    imageHero: '/images/work-samples/6.jpg',
    imageDetail: '/images/work-samples/Carnival Cakes.jpg',
    imageInterior: '/images/work-samples/GreenX_1.jpg',
    description: 'A family home with a clear front elevation, deep balcony lines, and a restrained material palette. The work was carried from planning conversations into construction coordination under one Studio Spetia team.',
    quote: '— Shankar, Indiranagar',
  },
  {
    slug: 'yelahanka-villa',
    name: 'Yelahanka Villa',
    location: 'Yelahanka',
    sqft: '7,200 sqft',
    year: '2025',
    tier: 'Estate',
    duration: 'Eighteen months from sketch to handover',
    imageHero: '/images/work-samples/3.jpg',
    imageDetail: '/images/work-samples/4.jpg',
    imageInterior: '/images/work-samples/5.jpg',
    description: 'A site-entry composition using a broad roofline, landscape, and a simple material rhythm. A full custom villa with structural engineering, custom millwork, landscape build, and lighting design.',
    quote: '— Aman and Santhiya, Yelahanka',
    tags: ['landscape'],
  },
  {
    slug: 'whitefield-courtyard',
    name: 'Whitefield Courtyard',
    location: 'Whitefield',
    sqft: '3,800 sqft',
    year: '2024',
    tier: 'Atelier',
    duration: 'Thirteen months from sketch to handover',
    imageHero: null,
    imageDetail: null,
    imageInterior: null,
    description: 'A 30×50 plot with a generous central courtyard that draws the southwest monsoon breeze through the home. The brief: cross-ventilation without air conditioning for nine months of the year. Built using exposed brick on the inner courtyard walls, IPS flooring, and Sadarahalli granite plinth.',
    quote: '— Priya, Whitefield',
  },
  {
    slug: 'koramangala-house',
    name: 'Koramangala House',
    location: 'Koramangala',
    sqft: '4,800 sqft',
    year: '2023',
    tier: 'Bespoke',
    duration: 'Fifteen months from sketch to handover',
    imageHero: null,
    imageDetail: null,
    imageInterior: null,
    description: 'An infill plot wedged between two existing homes. The challenge was light: the only available facade faced east, and the south boundary was a blind wall. We resolved it with a vertical light-well running through the centre of the home, finished in white IPS, with a mango tree planted at its base.',
    quote: '— Rohan and Asha, Koramangala',
  },
  {
    slug: 'jayanagar-residence',
    name: 'Jayanagar Residence',
    location: 'Jayanagar',
    sqft: '4,200 sqft',
    year: '2024',
    tier: 'Atelier',
    duration: 'Twelve months from sketch to handover',
    imageHero: null,
    imageDetail: null,
    imageInterior: null,
    description: 'A retired couple\'s downsize from a five-bedroom home in Mysore. The brief: a single-storey home with no stairs, an outdoor reading nook, and a kitchen large enough for the whole family at festivals. The plinth was raised eighteen inches above road level for monsoon protection.',
    quote: '— Mr. and Mrs. Krishnamurthy, Jayanagar',
  },
  {
    slug: 'hsr-layout-twin',
    name: 'HSR Layout Twin',
    location: 'HSR Layout',
    sqft: '6,400 sqft',
    year: '2025',
    tier: 'Bespoke',
    duration: 'Sixteen months from sketch to handover',
    imageHero: null,
    imageDetail: null,
    imageInterior: null,
    description: 'Two homes on adjacent plots for two siblings — one north-facing, one south-facing — designed as a pair. Shared landscape spine, mirrored material palette, individual entries. Construction was sequenced so the families could move in within two weeks of each other.',
    quote: '— The Reddy family, HSR Layout',
    tags: ['landscape'],
  }
];

export const processStages = [
  {
    number: "01",
    title: "Site.",
    description: "It starts on WhatsApp. You send your plot details — location, dimensions, an approximate budget, when you're hoping to start. Sangeetha or Sathya replies within twenty-four hours. There is no sales team. The first conversation is with the architect or the engineer who will work on your home.\n\nBefore we quote anything, Sangeetha visits your plot. She walks the boundaries. She looks at how the sun moves across the site at the time of day you're most likely to be home. She notices the trees. She talks to the neighbors. She does not quote a number until she has seen the site, because the number depends on the site. The visit takes ninety minutes. There is no charge.",
    image: "/images/work-samples/4.jpg"
  },
  {
    number: "02",
    title: "Drawing.",
    description: "If we agree to work together, we sign a small concept-design contract — typically three to six weeks of design exploration. During this phase, Sangeetha sketches by hand. We meet two or three times.\n\nBy the end, you have a concept design, a structural skeleton, a material palette, and a fixed-price construction contract. The concept-design phase is paid; if you don't want to proceed, we part ways with the concept design as yours to take to another studio.",
    image: "/images/work-samples/6.jpg"
  },
  {
    number: "03",
    title: "Approval.",
    description: "Bangalore plot approvals depend on your Khata. A-Khata under BBMP. Panchayat plots under the local authority. BDA layouts under BDA. We tell you which one applies on day one, and we file the drawings with the right office. You do not chase the approval consultant — we do.\n\nApprovals usually take six to twelve weeks depending on the office and the season. We update you weekly on progress.",
    image: null
  },
  {
    number: "04",
    title: "Build.",
    description: "Construction takes nine to fifteen months depending on the size of the home. Sangeetha walks the site every two weeks. Sathya is on site every working day, supervising the build. The site engineer reports to him.\n\nYou get weekly photo updates on WhatsApp. We invoice on milestones, not on calendar dates — payment is tied to specific stages of completion (foundation poured, structure topped out, services rough-in done, finishes complete).",
    image: "/images/work-samples/5.jpg"
  },
  {
    number: "05",
    title: "Handover and after.",
    description: "When the home is ready, we walk through it together. We hand over keys and a folder containing every drawing, every approval, every warranty card, every vendor contact.\n\nWe come back at three months and at six months to fix anything that has settled, cracked, or revealed a problem. At Estate tier, we come back at twelve months as well, and the first year of post-occupancy snagging is part of the work. After that, you have our number. The relationship doesn't end at the handover.",
    image: "/images/work-samples/3.jpg"
  }
];

export const tiers = [
  {
    name: "Atelier",
    scope: "Single-family Bangalore homes from 2,400 to 4,000 square feet. Eleven to fourteen months from agreement to keys. Architecture, structure, interiors, and construction under one Studio Spetia contract. Designed by Sangeetha. Built under her direct site supervision.",
  },
  {
    name: "Bespoke",
    scope: "Larger homes from 4,000 to 6,500 square feet. Fourteen to sixteen months. Atelier scope plus custom millwork, full landscape design, and lighting design. Sangeetha is named on the contract as design lead — every detail comes through her.",
  },
  {
    name: "Estate",
    scope: "6,500 square feet and above. Sixteen to eighteen months. The studio's full-scope offering. Full custom villa with structural engineering, custom millwork, landscape build, lighting design, and architectural photography of the finished home. Post-occupancy snagging through Year One is included.",
  }
];
