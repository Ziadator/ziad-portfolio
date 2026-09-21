const SITE = {
  title: 'Ziad Beranger / Video Editor, Director & Photographer, Sydney',
  description: 'Sydney-based video editor, director and photographer working across broadcast television, post-production, branded content, independent film and photography.'
};

const GROUPS = [
  {
    id: 'direction-content',
    label: '01 / Commercial / Digital',
    title: 'Commercial / Digital'
  },
  {
    id: 'editing-post',
    label: '02 / Editing / Post-production',
    title: 'Film / Television'
  },
  {
    id: 'film-author',
    label: '03 / Film / Authorship',
    title: 'Independent film'
  },
  {
    id: 'photography',
    label: '04 / Photography',
    title: 'Photography'
  }
];

/*
  MEDIA WORKFLOW
  - Replace cover and gallery paths without changing the layout code.
  - coverPosition controls the crop: "50% 50%" is centred, "35% 50%" moves it left.
  - Background loops intentionally use no poster: the transition from hero to film stays clean.
  - featuredVideo is optional. Leave it as null until a full film or teaser is ready.
  - Gallery items may stay as strings, or become { src, alt, ratio } objects.
*/
const projects = [
  {
    slug: 'lox-in-a-box',
    group: 'direction-content',
    title: 'Lox in a Box',
    category: 'Branded Content / Commercial',
    year: '2026',
    role: 'Creative Direction / Camera / Photography / Editing',
    intro: 'Photography and a short-form film capturing the food, people and atmosphere of Lox in a Box, Sydney.',
    noteTitle: 'Stop rushing. Take a break.',
    note: 'A visual direction built around the pleasure of a pause: food textures, everyday gestures and the life of the deli. Natural moments and direct flash bring the photographs and film into the same warm, lively world.',
    featuredFirst: true,
    facts: [
      ['Client', 'Lox in a Box'],
      ['Location', 'Sydney, Australia'],
      ['Format', 'Photography / Short-form film']
    ],
    video: 'assets/projects/lox-in-a-box/lox-brand-loop.mp4',
    featuredVideo: {
      src: 'assets/projects/lox-in-a-box/lox-reel.mp4',
      label: 'Campaign reel',
      title: 'Stop rushing. Take a break.',
      description: '',
      poster: 'assets/projects/lox-in-a-box/lox-reel-poster.webp',
      duration: '14 seconds',
      vertical: true,
      loop: true
    },
    cover: 'assets/projects/lox-in-a-box/lox-cover.webp',
    coverPosition: '50% 50%',
    gallery: [
      {
            "src": "assets/projects/lox-in-a-box/optimized/lox-storefront-1280.webp",
            "srcset": "assets/projects/lox-in-a-box/optimized/lox-storefront-640.webp 640w, assets/projects/lox-in-a-box/optimized/lox-storefront-1280.webp 1280w, assets/projects/lox-in-a-box/optimized/lox-storefront-2400.webp 2048w",
            "sizes": "100vw",
            "width": 2048,
            "height": 1280,
            "ratio": 1.6,
            "alt": "Golden cherub suspended in the deli"
      },
      {
            "src": "assets/projects/lox-in-a-box/optimized/lox-product-hero-1280.webp",
            "srcset": "assets/projects/lox-in-a-box/optimized/lox-product-hero-640.webp 640w, assets/projects/lox-in-a-box/optimized/lox-product-hero-1280.webp 1280w, assets/projects/lox-in-a-box/optimized/lox-product-hero-2400.webp 2048w",
            "sizes": "100vw",
            "width": 2048,
            "height": 1152,
            "ratio": 1.7777777777777777,
            "alt": "Filled bagels on branded wrapping"
      },
      {
            "src": "assets/projects/lox-in-a-box/optimized/lox-team-service-1280.webp",
            "srcset": "assets/projects/lox-in-a-box/optimized/lox-team-service-640.webp 640w, assets/projects/lox-in-a-box/optimized/lox-team-service-1280.webp 1280w, assets/projects/lox-in-a-box/optimized/lox-team-service-2400.webp 2048w",
            "sizes": "100vw",
            "width": 2048,
            "height": 1268,
            "ratio": 1.615141955835962,
            "alt": "Preparing food behind the deli counter"
      },
      {
            "src": "assets/projects/lox-in-a-box/optimized/lox-bag-street-1280.webp",
            "srcset": "assets/projects/lox-in-a-box/optimized/lox-bag-street-640.webp 640w, assets/projects/lox-in-a-box/optimized/lox-bag-street-1280.webp 1152w",
            "sizes": "100vw",
            "width": 1152,
            "height": 2048,
            "ratio": 0.5625,
            "alt": "Lox in a Box bag carried in the street"
      },
      {
            "src": "assets/projects/lox-in-a-box/optimized/lox-food-detail-1280.webp",
            "srcset": "assets/projects/lox-in-a-box/optimized/lox-food-detail-640.webp 640w, assets/projects/lox-in-a-box/optimized/lox-food-detail-1280.webp 1280w, assets/projects/lox-in-a-box/optimized/lox-food-detail-2400.webp 2048w",
            "sizes": "100vw",
            "width": 2048,
            "height": 1156,
            "ratio": 1.7716262975778547,
            "alt": "Fresh bagels and ingredients on display"
      },
      {
            "src": "assets/projects/lox-in-a-box/optimized/lox-interior-wide-1280.webp",
            "srcset": "assets/projects/lox-in-a-box/optimized/lox-interior-wide-640.webp 640w, assets/projects/lox-in-a-box/optimized/lox-interior-wide-1280.webp 1206w",
            "sizes": "100vw",
            "width": 1206,
            "height": 1800,
            "ratio": 0.67,
            "alt": "Coffee and food at an outdoor table"
      },
      {
            "src": "assets/projects/lox-in-a-box/optimized/lox-photo-07-1280.webp",
            "srcset": "assets/projects/lox-in-a-box/optimized/lox-photo-07-640.webp 640w, assets/projects/lox-in-a-box/optimized/lox-photo-07-1280.webp 1280w, assets/projects/lox-in-a-box/optimized/lox-photo-07-2400.webp 2400w",
            "sizes": "100vw",
            "width": 4320,
            "height": 7680,
            "ratio": 0.5625,
            "alt": "Pouring milk into a coffee"
      },
      {
            "src": "assets/projects/lox-in-a-box/optimized/lox-photo-08-1280.webp",
            "srcset": "assets/projects/lox-in-a-box/optimized/lox-photo-08-640.webp 640w, assets/projects/lox-in-a-box/optimized/lox-photo-08-1280.webp 1280w, assets/projects/lox-in-a-box/optimized/lox-photo-08-2400.webp 2400w",
            "sizes": "100vw",
            "width": 8480,
            "height": 4768,
            "ratio": 1.778523489932886,
            "alt": "A box of freshly prepared bagels"
      },
      {
            "src": "assets/projects/lox-in-a-box/optimized/lox-photo-09-1280.webp",
            "srcset": "assets/projects/lox-in-a-box/optimized/lox-photo-09-640.webp 640w, assets/projects/lox-in-a-box/optimized/lox-photo-09-1280.webp 1280w, assets/projects/lox-in-a-box/optimized/lox-photo-09-2400.webp 2400w",
            "sizes": "100vw",
            "width": 7680,
            "height": 4320,
            "ratio": 1.7777777777777777,
            "alt": "Serving a tray of food in the deli"
      },
      {
            "src": "assets/projects/lox-in-a-box/optimized/lox-photo-10-1280.webp",
            "srcset": "assets/projects/lox-in-a-box/optimized/lox-photo-10-640.webp 640w, assets/projects/lox-in-a-box/optimized/lox-photo-10-1280.webp 1280w, assets/projects/lox-in-a-box/optimized/lox-photo-10-2400.webp 2400w",
            "sizes": "100vw",
            "width": 3840,
            "height": 2160,
            "ratio": 1.7777777777777777,
            "alt": "Customers and staff inside the deli"
      },
      {
            "src": "assets/projects/lox-in-a-box/optimized/lox-photo-11-1280.webp",
            "srcset": "assets/projects/lox-in-a-box/optimized/lox-photo-11-640.webp 640w, assets/projects/lox-in-a-box/optimized/lox-photo-11-1280.webp 1280w, assets/projects/lox-in-a-box/optimized/lox-photo-11-2400.webp 2400w",
            "sizes": "100vw",
            "width": 5664,
            "height": 8480,
            "ratio": 0.6679245283018868,
            "alt": "Lox in a Box bag in warm window light"
      }
]
  },
  {
    slug: 'dont-call-me-back',
    group: 'film-author',
    title: 'Don’t Call Me Back',
    category: 'Narrative Film',
    year: '2026',
    role: 'Writer / Director / Camera / Editor',
    intro: 'Mike Ferrari crosses an increasingly strange Australian landscape, somewhere between escape and self-destruction. An independent short film, currently in post-production.',
    facts: [
      ['Collaboration', 'Didier Poiraud'],
      ['Format', 'Short film'],
      ['Status', 'In post-production']
    ],
    video: 'assets/projects/dont-call-me-back/dcmb-atmosphere-loop.mp4',
    featuredVideo: null,
    cover: 'assets/projects/dont-call-me-back/dcmb-cover.webp',
    coverPosition: '50% 44%',
    gallery: [
      'assets/projects/dont-call-me-back/beach-body.jpg',
      'assets/projects/dont-call-me-back/forest-shirt.jpg',
      'assets/projects/dont-call-me-back/hand-rock.jpg',
    ]
  },
  {
    slug: 'follow-your-passion',
    group: 'direction-content',
    title: 'Follow Your Passion Media',
    category: 'Creative Content / Digital',
    year: '2025 / 2026',
    role: 'Creative Content Lead / Direction / Camera / Photography / Editing',
    intro: 'Films and photographs for Follow Your Passion Media and its clients, produced on the Gold Coast.',
    noteTitle: 'One agency, different voices.',
    note: 'The work moved between the agency’s own communication and projects for entrepreneurs, coaches and founder-led businesses. I developed concepts and scripts, organised shoots and directed clients on camera, while coordinating production and feedback with a remote team of editors and designers.',
    studioSequence: true,
    featuredFirst: true,
    relatedWorks: [],
    galleryLabel: 'Behind the scenes',
    galleryIntro: '',
    facts: [
      ['Studio', 'Follow Your Passion Media'],
      ['Location', 'Gold Coast / Remote'],
      ['Role', 'Creative Content Lead']
    ],
    video: 'assets/projects/follow-your-passion/fyp-content-loop.mp4',
    featuredVideo: {
      src: 'assets/projects/follow-your-passion/fyp-eve-promo.mp4',
      poster: 'assets/projects/follow-your-passion/fyp-eve-poster.webp',
      label: 'FYP / Agency promotional film',
      duration: '01:20'
    },
    cover: 'assets/projects/follow-your-passion/fyp-cover.webp',
    coverPosition: '50% 50%',
    gallery: [
      { src: 'assets/projects/follow-your-passion/fyp-camera-bts.webp', alt: 'Behind the scenes at FYP: camera operator filming a presenter in the studio' },
      { src: 'assets/projects/follow-your-passion/fyp-studio-bts.webp', alt: 'FYP studio shoot: seated presenter and coloured lighting setup' },
    ]
  },
  {
    slug: 'lost-in-wasteland',
    group: 'photography',
    title: 'Lost in Wasteland',
    hubTitle: 'Art',
    hubNumber: '02',
    hubDescription: 'A personal archive of fragments, apparitions and landscapes suspended between memory and fiction.',
    galleryMode: 'editorial',
    category: 'Photography / Film / Writing',
    year: 'Ongoing',
    role: 'Creative Direction / Photography / Film',
    intro: 'Fragments, encounters and landscapes. A personal photographic series made between France and Australia.',
    facts: [
      ['Format', 'Photography / Book / Film'],
      ['Location', 'France / Australia'],
      ['Status', 'Ongoing']
    ],
    video: 'assets/projects/lost-in-wasteland/lost-in-wasteland-loop.mp4',
    featuredVideo: null,
    cover: 'assets/projects/lost-in-wasteland/wasteland-cover.webp',
    coverPosition: '50% 50%',
    gallery: [
      'assets/projects/lost-in-wasteland/wasteland-road-01.webp',
      'assets/projects/lost-in-wasteland/wasteland-portrait-01.webp',
      'assets/projects/lost-in-wasteland/wasteland-night-01.webp',
      'assets/projects/lost-in-wasteland/wasteland-landscape-01.webp',
      'assets/projects/lost-in-wasteland/wasteland-flash-01.webp',
      'assets/projects/lost-in-wasteland/wasteland-motion-01.webp'
    ]
  },
  {
    slug: 'en-quete-dappart',
    group: 'editing-post',
    title: 'En quête d’appart',
    category: 'Property Television / Broadcast',
    year: '2017 / 2018',
    role: 'Video Editor / B&O Productions',
    intro: 'A weekly 52-minute property television programme produced by B&O Productions for BFM Business, France.',
    facts: [
      ['Production', 'B&O Productions'],
      ['Broadcaster', 'BFM Business / France'],
      ['Format', 'Weekly property television / 52 minutes']
    ],
    video: 'assets/projects/en-quete-dappart/enquete-editing-loop.mp4',
    featuredVideo: {
      embed: 'https://www.youtube-nocookie.com/embed/UjXRyQgd2HE?playsinline=1&rel=0',
      label: 'Watch the episode / BFM Business / 2017'
    },
    cover: 'assets/projects/en-quete-dappart/enquete-cover-paris.webp',
    coverPosition: '50% 50%',
    gallery: [
    ]
  },
  {
    slug: 'jump-n-stay',
    group: 'editing-post',
    title: 'Jump & Stay',
    category: 'Independent Film / Collaboration',
    year: '2017 / 2024',
    role: 'Editor / Additional Editor',
    intro: 'Film and music projects with Jump & Stay, founded in Nantes by Didier Poiraud and Astrid Serafini.',
    noteTitle: 'A continuing collaboration.',
    note: 'The collaboration spans fiction, music and experimental film, including the edit of Moonbeach and contributions to Les Crampets and Blackhouse Sessions.',
    relatedWorksLabel: 'Selected collaborations',
    relatedWorksIntro: '',
    facts: [
      ['Collaborators', 'Didier Poiraud / Astrid Serafini'],
      ['Moonbeach', 'Lead editing / Festival circulation'],
      ['Other projects', 'Les Crampets / Blackhouse Sessions']
    ],
    relatedWorks: [
      {
        title: 'Moonbeach',
        type: 'Narrative film',
        status: 'Festival circulation',
        description: 'Editing: Ziad Beranger.'
      },
      {
        title: 'Les Crampets',
        type: 'Narrative project',
        status: 'In development',
        description: ''
      },
      {
        title: 'Blackhouse Sessions',
        type: 'Music / live film',
        status: 'Selected collaboration',
        description: ''
      }
    ],
    video: 'assets/projects/jump-n-stay/jump-n-stay-loop.mp4',
    featuredVideo: null,
    cover: 'assets/projects/jump-n-stay/jump-n-stay-cover.webp',
    coverPosition: '50% 50%',
    gallery: [
      'assets/projects/jump-n-stay/jns-guitar.webp',
      'assets/projects/jump-n-stay/jns-beach.webp',
      'assets/projects/jump-n-stay/character-web.webp',
      'assets/projects/jump-n-stay/live-stage-web.webp',
    ]
  }
];

projects.splice(1, 0, {
  slug: 'deca',
  group: 'editing-post',
  title: 'DECA',
  category: 'Podcast / Launch Campaign',
  year: '2025',
  role: 'Scriptwriting / Production / Direction / Camera / Post-production',
  intro: 'Three campaign films and a podcast intro and outro for The House Is Digital, a podcast by the Digital Economy Council of Australia.',
  noteTitle: 'Introducing the podcast. Bringing people on board.',
  note: 'The commission brought together three films with distinct purposes: inviting political and industry guests, approaching potential sponsors, and introducing the podcast through a main launch film. I wrote the scripts, produced and filmed the material, and completed the post-production, including editing, graphics and sound. I also created the podcast intro and outro, giving the series a shared opening and closing identity.',
  relatedWorksLabel: 'Campaign films',
  relatedWorksIntro: '',
  facts: [
    ['Client', 'DECA'],
    ['Podcast', 'The House Is Digital'],
    ['Commission', '3 promotional films / Podcast intro & outro']
  ],
  relatedWorks: [
    {
      title: 'Guest invitation',
      type: 'Political outreach',
      status: 'Selected film',
      description: '',
      embed: 'https://www-ccv.adobe.io/v1/player/ccv/KASxyZIzZ_9/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View',
      video: 'assets/projects/deca/deca-ai-revolution.mp4'
    },
    {
      title: 'Sponsor presentation',
      type: 'Sponsorship outreach',
      status: 'Selected film',
      description: '',
      embed: 'https://www-ccv.adobe.io/v1/player/ccv/G6EkxrY4HAo/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View',
      video: 'assets/projects/deca/deca-digital-council-interview.mp4'
    }
  ],
  video: 'assets/projects/deca/deca-editing-loop.mp4',
  featuredVideo: {
    src: 'assets/projects/deca/deca-the-house-is-digital.mp4',
    embed: 'https://www-ccv.adobe.io/v1/player/ccv/PSprnMsY32H/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View',
    poster: 'assets/projects/deca/deca-the-house-is-digital-poster.webp',
    label: 'The House Is Digital / Launch film',
    duration: '01:55'
  },
  cover: 'assets/projects/deca/deca-cover-organic-v2.webp',
  coverPosition: '50% 50%',
  gallery: [
    { src: 'assets/projects/deca/deca-house-is-digital-frame.webp', alt: 'DECA The House Is Digital / selected video frame' },
  ]
});

projects.splice(projects.findIndex(item => item.slug === 'lost-in-wasteland'), 0, {
  slug: 'commercial-photography',
  group: 'photography',
  title: 'Commercial Photography',
  hubTitle: 'Commercial',
  hubNumber: '01',
  hubDescription: 'People, places and commissioned work.',
  galleryMode: 'selection',
  galleryFirst: true,
  category: 'Food / Lifestyle / Portraits',
  year: 'Selected work',
  role: 'Photographer / Creative Direction',
  intro: 'Selected photographs of people, places and everyday details.',
  facts: [],
  video: null,
  featuredVideo: null,
  cover: 'assets/projects/commercial-photography/optimized/cocktails-1200.webp',
  coverPosition: '50% 50%',
  gallery: [
    {
        "src": "assets/projects/commercial-photography/optimized/street-portrait-1200.webp",
        "srcset": "assets/projects/commercial-photography/optimized/street-portrait-640.webp 640w, assets/projects/commercial-photography/optimized/street-portrait-1200.webp 1200w, assets/projects/commercial-photography/optimized/street-portrait-1800.webp 1603w",
        "sizes": "(max-width: 720px) 100vw, 50vw",
        "width": 5664,
        "height": 8480,
        "ratio": 0.6679245283018868,
        "alt": "A woman in a patterned dress walking past a leafy terrace"
    },
    {
        "src": "assets/projects/commercial-photography/optimized/balcony-portrait-1200.webp",
        "srcset": "assets/projects/commercial-photography/optimized/balcony-portrait-640.webp 640w, assets/projects/commercial-photography/optimized/balcony-portrait-1200.webp 1200w, assets/projects/commercial-photography/optimized/balcony-portrait-1800.webp 1800w",
        "sizes": "(max-width: 720px) 100vw, 50vw",
        "width": 4240,
        "height": 2832,
        "ratio": 1.497175141242938,
        "alt": "A woman holding a cocktail beside a yellow window"
    },
    {
        "src": "assets/projects/commercial-photography/optimized/summer-detail-1200.webp",
        "srcset": "assets/projects/commercial-photography/optimized/summer-detail-640.webp 640w, assets/projects/commercial-photography/optimized/summer-detail-1200.webp 1200w, assets/projects/commercial-photography/optimized/summer-detail-1800.webp 1800w",
        "sizes": "(max-width: 720px) 100vw, 50vw",
        "width": 4240,
        "height": 2832,
        "ratio": 1.497175141242938,
        "alt": "A hand holding a cold drink in warm afternoon light"
    },
    {
        "src": "assets/projects/commercial-photography/optimized/cocktails-1200.webp",
        "srcset": "assets/projects/commercial-photography/optimized/cocktails-640.webp 640w, assets/projects/commercial-photography/optimized/cocktails-1200.webp 1200w, assets/projects/commercial-photography/optimized/cocktails-1800.webp 1800w",
        "sizes": "(max-width: 720px) 100vw, 50vw",
        "width": 4240,
        "height": 2832,
        "ratio": 1.497175141242938,
        "alt": "Two cocktails on a yellow window ledge"
    },
    {
        "src": "assets/projects/commercial-photography/optimized/deli-bag-1200.webp",
        "srcset": "assets/projects/commercial-photography/optimized/deli-bag-640.webp 640w, assets/projects/commercial-photography/optimized/deli-bag-1200.webp 1200w, assets/projects/commercial-photography/optimized/deli-bag-1800.webp 1603w",
        "sizes": "(max-width: 720px) 100vw, 50vw",
        "width": 5664,
        "height": 8480,
        "ratio": 0.6679245283018868,
        "alt": "A Lox in a Box bag in a patch of window light"
    },
    {
        "src": "assets/projects/commercial-photography/optimized/outdoor-table-1200.webp",
        "srcset": "assets/projects/commercial-photography/optimized/outdoor-table-640.webp 640w, assets/projects/commercial-photography/optimized/outdoor-table-1200.webp 1200w, assets/projects/commercial-photography/optimized/outdoor-table-1800.webp 1603w",
        "sizes": "(max-width: 720px) 100vw, 50vw",
        "width": 5664,
        "height": 8480,
        "ratio": 0.6679245283018868,
        "alt": "Coffee, food and a newspaper at an outdoor table"
    },
    {
        "src": "assets/projects/commercial-photography/optimized/coffee-pour-1200.webp",
        "srcset": "assets/projects/commercial-photography/optimized/coffee-pour-640.webp 640w, assets/projects/commercial-photography/optimized/coffee-pour-1200.webp 1200w, assets/projects/commercial-photography/optimized/coffee-pour-1800.webp 1350w",
        "sizes": "(max-width: 720px) 100vw, 50vw",
        "width": 4320,
        "height": 7680,
        "ratio": 0.5625,
        "alt": "Milk poured into a cup of coffee"
    },
    {
        "src": "assets/projects/commercial-photography/optimized/pastry-service-1200.webp",
        "srcset": "assets/projects/commercial-photography/optimized/pastry-service-640.webp 640w, assets/projects/commercial-photography/optimized/pastry-service-1200.webp 1200w, assets/projects/commercial-photography/optimized/pastry-service-1800.webp 1800w",
        "sizes": "(max-width: 720px) 100vw, 50vw",
        "width": 7680,
        "height": 4320,
        "ratio": 1.7777777777777777,
        "alt": "A person holding a tray of pastries in the deli"
    },
    {
        "src": "assets/projects/commercial-photography/optimized/onion-rings-1200.webp",
        "srcset": "assets/projects/commercial-photography/optimized/onion-rings-640.webp 640w, assets/projects/commercial-photography/optimized/onion-rings-1200.webp 1200w, assets/projects/commercial-photography/optimized/onion-rings-1800.webp 1800w",
        "sizes": "(max-width: 720px) 100vw, 50vw",
        "width": 3762,
        "height": 2405,
        "ratio": 1.5642411642411642,
        "alt": "Golden onion rings served in a metal bowl"
    },
    {
        "src": "assets/projects/commercial-photography/optimized/salad-table-1200.webp",
        "srcset": "assets/projects/commercial-photography/optimized/salad-table-640.webp 640w, assets/projects/commercial-photography/optimized/salad-table-1200.webp 1200w, assets/projects/commercial-photography/optimized/salad-table-1800.webp 1800w",
        "sizes": "(max-width: 720px) 100vw, 50vw",
        "width": 8480,
        "height": 4768,
        "ratio": 1.778523489932886,
        "alt": "A fork and knife above a fresh salad"
    },
    {
        "src": "assets/projects/commercial-photography/optimized/bagel-table-1200.webp",
        "srcset": "assets/projects/commercial-photography/optimized/bagel-table-640.webp 640w, assets/projects/commercial-photography/optimized/bagel-table-1200.webp 1200w, assets/projects/commercial-photography/optimized/bagel-table-1800.webp 1800w",
        "sizes": "(max-width: 720px) 100vw, 50vw",
        "width": 2880,
        "height": 1800,
        "ratio": 1.6,
        "alt": "Hands sharing filled bagels across a table"
    }
]
});

const asset = name => {
  if (!name) return '';
  return name;
};

const escapeAttribute = value =>
  String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');

const list = document.querySelector('#project-list');
const dialog = document.querySelector('#project-dialog');
const content = document.querySelector('#project-content');
const wordmark = document.querySelector('.wordmark');
const closeButton = document.querySelector('.dialog-close');
const photographyLink = document.querySelector('.photography-link');

let currentProject = null;
let lastProjectTrigger = null;
let openedFromIndex = false;

if (wordmark) {
  wordmark.textContent = 'Home';
  wordmark.setAttribute('aria-label', 'Home');
}

if (closeButton) {
  closeButton.innerHTML = '<span class="dialog-close-icon" aria-hidden="true">←</span><span>Index</span>';
  closeButton.setAttribute('aria-label', 'Back to project index');
}

function createProjectCard(project, index) {
  const button = document.createElement('button');
  button.className = 'project';
  button.type = 'button';
  button.setAttribute('aria-label', `Open ${project.title}`);
  button.innerHTML = `
    <span class="project-media" aria-hidden="true" style="background-image:url('${escapeAttribute(project.cover)}'); --cover-position:${escapeAttribute(project.coverPosition || '50% 50%')}"></span>
    <span class="project-index" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>
    <span class="project-copy">
      <span class="project-title">${project.title}</span>
      <span class="project-category">${project.category}</span>
      <span class="project-year">${project.year}</span>
    </span>
  `;
  button.addEventListener('click', () => {
    lastProjectTrigger = button;
    openedFromIndex = true;
    history.pushState({ project: project.slug }, '', `#work/${project.slug}`);
    showProject(project);
  });
  return button;
}

GROUPS.forEach(group => {
  const groupProjects = projects.filter(project => project.group === group.id);
  if (!groupProjects.length) return;

  const section = document.createElement('section');
  section.className = 'project-group';
  section.id = group.id === 'photography' ? 'photography' : group.id;
  section.setAttribute('aria-labelledby', `${group.id}-title`);
  section.innerHTML = `
    <header class="project-group-head">
      <p class="eyebrow">${group.label}</p>
      <h3 id="${group.id}-title">${group.title}</h3>
    </header>
    <div class="project-group-list"></div>
  `;

  const groupList = section.querySelector('.project-group-list');
  groupProjects.forEach((project, index) => {
    groupList.append(createProjectCard(project, index));
  });
  list.append(section);
});

function showPhotographyHub({ updateHistory = true } = {}) {
  delete content.dataset.project;
  const photographyProjects = projects.filter(project => project.group === 'photography');
  currentProject = null;
  document.title = `Photography / Ziad Beranger`;
  content.innerHTML = `
    <header class="photo-hub-hero">
      <p class="eyebrow">Photography / Selected work</p>
      <h2>Commercial<br>and Art</h2>
      <p>Two distinct practices connected by the same interest in atmosphere, people and visual storytelling.</p>
    </header>
    <section class="photo-hub-options" aria-label="Photography collections">
      ${photographyProjects.map(project => `
        <button class="photo-hub-card" type="button" data-photo-project="${escapeAttribute(project.slug)}">
          <span class="photo-hub-card-media" aria-hidden="true" style="background-image:url('${escapeAttribute(project.cover)}'); --cover-position:${escapeAttribute(project.coverPosition || '50% 50%')}"></span>
          <span class="photo-hub-card-shade" aria-hidden="true"></span>
          <span class="photo-hub-card-number">${project.hubNumber}</span>
          <span class="photo-hub-card-copy">
            <strong>${project.hubTitle}</strong>
            <span>${project.hubDescription}</span>
          </span>
          <span class="photo-hub-card-arrow" aria-hidden="true">↘</span>
        </button>
      `).join('')}
    </section>
  `;

  if (updateHistory) {
    openedFromIndex = true;
    history.pushState({ photography: true }, '', '#photography');
  }
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;

  content.querySelectorAll('[data-photo-project]').forEach(button => {
    button.addEventListener('click', () => {
      const project = projects.find(item => item.slug === button.dataset.photoProject);
      if (!project) return;
      lastProjectTrigger = button;
      history.pushState({ project: project.slug }, '', `#work/${project.slug}`);
      showProject(project);
    });
  });

  requestAnimationFrame(() => closeButton?.focus());
}

photographyLink?.addEventListener('click', event => {
  event.preventDefault();
  showPhotographyHub();
});

function galleryItemData(item, project, index) {
  if (typeof item === 'string') {
    return {
      src: item,
      alt: `${project.title} / Selected image ${index + 1}`,
      ratio: ''
    };
  }
  return {
    src: item.src,
    alt: item.alt || `${project.title} / Selected image ${index + 1}`,
    ...item,
    ratio: item.ratio || ''
  };
}

function renderFeaturedVideo(project) {
  const feature = project.featuredVideo;
  if (!feature?.src && !feature?.embed) return '';
  return `
    <section class="project-feature${feature.vertical ? ' project-feature--vertical' : ''}" aria-label="${escapeAttribute(feature.label || `Watch ${project.title}`)}">
      <div class="project-feature-head">
        <p class="eyebrow">${feature.label || 'Watch film'}</p>
        ${feature.duration ? `<p class="project-feature-duration">${feature.duration}</p>` : ''}
      </div>
      ${feature.vertical ? `<div class="project-feature-copy"><h3>${feature.title}</h3>${feature.description ? `<p>${feature.description}</p>` : ''}<p class="project-feature-note">Play with sound / 9:16</p></div>` : ''}
      ${feature.embed && !feature.src ? `
        <div class="project-feature-embed">
          <iframe title="${escapeAttribute(feature.label || `Watch ${project.title}`)}" src="${escapeAttribute(feature.embed)}" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
      ` : `
        <video aria-label="${escapeAttribute(feature.label || `Watch ${project.title}`)}" controls playsinline ${feature.loop ? 'loop' : ''} preload="${feature.vertical ? 'none' : 'metadata'}" ${feature.poster ? `poster="${escapeAttribute(asset(feature.poster))}"` : ''}>
          <source src="${escapeAttribute(asset(feature.src))}" type="video/mp4">
        </video>
      `}
      ${feature.caption ? `<p class="project-feature-caption">${escapeAttribute(feature.caption)}</p>` : ''}
    </section>
  `;
}

function renderFacts(project) {
  return [['Credits', project.role], ...project.facts.filter(([label]) => !['Role', 'Client', 'Studio', 'Focus', 'Other projects', 'Moonbeach'].includes(label))]
    .map(([label, value]) => `
      <div class="project-fact">
        <dt>${label}</dt>
        <dd>${value}</dd>
      </div>
    `)
    .join('');
}

function renderRelatedWorks(project) {
  if (!project.relatedWorks?.length) return '';
  return `
    <section class="related-works" aria-label="${escapeAttribute(project.relatedWorksLabel || 'Selected collaborations')}">
      <div class="related-works-head">
        <p class="eyebrow">${escapeAttribute(project.relatedWorksLabel || 'Selected collaborations')}</p>
        ${project.relatedWorksIntro ? `<p>${escapeAttribute(project.relatedWorksIntro)}</p>` : ''}
      </div>
      <div class="related-works-grid" style="--work-count:${Math.min(project.relatedWorks.length, 3)}">
        ${project.relatedWorks.map(work => `
          <article class="related-work${work.vertical ? ' related-work--vertical' : ''}">
            ${work.embed ? `<div class="related-work-embed"><iframe title="${escapeAttribute(work.title)}" src="${escapeAttribute(work.embed)}" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>` : work.video ? `<video controls playsinline preload="metadata" ${work.poster ? `poster="${escapeAttribute(work.poster)}"` : ''}><source src="${escapeAttribute(work.video)}" type="video/mp4"></video>` : ''}
            <p class="related-work-type">${escapeAttribute(work.type || 'Selected work')}</p>
            <h3>${escapeAttribute(work.title)}</h3>
            ${work.status && work.status !== 'Selected film' && work.status !== 'Selected collaboration' ? `<p class="related-work-status">${escapeAttribute(work.status)}</p>` : ''}
            ${work.description ? `<p>${escapeAttribute(work.description)}</p>` : ''}
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

function renderStudioSequence(project) {
  return `<section class="studio-sequence" aria-label="FYP: motion and studio photographs">
    <p class="eyebrow">Motion &amp; studio</p>
    <div class="studio-sequence-grid">
      <figure class="studio-sequence-reel">
        <video controls playsinline preload="none" poster="assets/projects/follow-your-passion/fyp-texture-poster.webp" aria-label="FYP Texture Message, 11 seconds">
          <source src="assets/projects/follow-your-passion/fyp-texture-message.mp4" type="video/mp4">
        </video>
        <figcaption>Texture Message / 00:11</figcaption>
      </figure>
      ${project.gallery.map(item => `<figure><img src="${escapeAttribute(asset(item.src))}" alt="${escapeAttribute(item.alt)}" loading="lazy" decoding="async"></figure>`).join('')}
    </div>
  </section>`;
}

function renderGallery(project) {
  if (!project.gallery.length) return '';
  const images = project.gallery
    .map((item, index) => {
      const media = galleryItemData(item, project, index);
      if (project.galleryMode === 'selection') {
        media.sizes = '(max-width: 720px) 88vw, 65vw';
      }
      const isPriority = index < 2 && !project.featuredFirst && !project.galleryFirst;
      return `
        <figure class="${project.galleryMode === 'editorial' ? 'editorial-gallery-item' : project.galleryMode === 'selection' ? 'selection-gallery-item' : ''}">
          <img
            class="gallery-image"
            src="${escapeAttribute(asset(media.src))}"
            alt="${escapeAttribute(media.alt)}"
            ${media.srcset ? `srcset="${escapeAttribute(media.srcset)}" sizes="${escapeAttribute(media.sizes)}" width="${media.width}" height="${media.height}"` : ''}
            ${media.ratio ? `data-ratio="${escapeAttribute(media.ratio)}"` : ''}
            loading="${isPriority ? 'eager' : 'lazy'}"
            fetchpriority="${isPriority ? 'high' : 'low'}"
            decoding="async">
        </figure>
      `;
    });

  if (project.galleryMode === 'selection') {
    const rows = [];
    for (let i = 0; i < images.length;) {
      const count = images.length - i === 3 ? 3 : Math.min(2, images.length - i);
      rows.push(`<div class="selection-gallery-row">${images.slice(i, i + count).join('')}</div>`);
      i += count;
    }
    return `<section class="selection-gallery" aria-label="${escapeAttribute(project.title)} gallery">${rows.join('')}</section>`;
  }

  if (project.galleryMode === 'editorial') {
    return `<section class="editorial-gallery editorial-gallery--${project.slug}" aria-label="${escapeAttribute(project.title)} gallery">${images.join('')}</section>`;
  }

  return `<section class="filmstrip filmstrip--${project.slug}" aria-label="${escapeAttribute(project.title)} gallery">${images.join('')}</section>`;
}

function showProject(project) {
  const projectIndex = projects.findIndex(item => item.slug === project.slug);
  const relatedProjects = projects.filter(item => item.group === project.group);
  const relatedIndex = relatedProjects.findIndex(item => item.slug === project.slug);
  const nextProject = relatedProjects.length > 1
    ? relatedProjects[(relatedIndex + 1) % relatedProjects.length]
    : projects[(projectIndex + 1) % projects.length];

  currentProject = project;
  content.dataset.project = project.slug;
  document.title = `${project.title} / Ziad Beranger`;
  content.innerHTML = `
    <header class="project-hero" style="background-image:url('${escapeAttribute(project.cover)}'); --cover-position:${escapeAttribute(project.coverPosition || '50% 50%')}">
      <div>
        <p class="eyebrow">${project.category} / ${project.year}</p>
        <h2>${project.title}</h2>
      </div>
    </header>

    <section class="project-story">
      <div class="project-story-media" aria-hidden="true">
        ${project.video ? `
          <video class="project-story-video" autoplay muted loop playsinline preload="auto">
            <source src="${escapeAttribute(project.video)}" type="video/mp4">
          </video>
        ` : ''}
        <div class="project-story-overlay"></div>
      </div>
      <div class="project-story-copy">
        <p class="project-story-description">${project.intro}</p>
      </div>
    </section>

    ${project.galleryFirst ? renderGallery(project) : ''}

    ${project.featuredFirst ? renderFeaturedVideo(project) : ''}

    ${project.note ? `<section class="project-note" aria-label="About the project"><h3>${escapeAttribute(project.noteTitle)}</h3><p>${escapeAttribute(project.note)}</p></section>` : ''}

    ${project.featuredFirst ? '' : renderFeaturedVideo(project)}

    ${renderRelatedWorks(project)}

    ${!project.galleryFirst && !project.studioSequence && project.galleryLabel ? `<div class="project-gallery-heading"><p class="eyebrow">${escapeAttribute(project.galleryLabel)}</p>${project.galleryIntro ? `<p>${escapeAttribute(project.galleryIntro)}</p>` : ''}</div>` : ''}
    ${project.studioSequence ? renderStudioSequence(project) : project.galleryFirst ? '' : renderGallery(project)}

    <section class="project-colophon" aria-label="Project information">
      <dl>${renderFacts(project)}</dl>
      ${project.productionNote ? `<p>${escapeAttribute(project.productionNote)}</p>` : ''}
    </section>

    <button class="next-project" type="button" data-next-project="${nextProject.slug}">
      <span class="eyebrow">Next project</span>
      <span class="next-project-title">${nextProject.title}</span>
      <span class="next-project-arrow" aria-hidden="true">↘</span>
    </button>
  `;

  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;

  const storyVideo = content.querySelector('.project-story-video');
  if (storyVideo) {
    const revealVideo = () => storyVideo.classList.add('is-ready');
    if (storyVideo.readyState >= 3) revealVideo();
    else storyVideo.addEventListener('canplay', revealVideo, { once: true });
  }

  const featuredPlayer = content.querySelector('.project-feature video');
  if (featuredPlayer && project.featuredVideo?.embed) {
    const showEmbedFallback = () => {
      if (!featuredPlayer.isConnected) return;
      const wrapper = document.createElement('div');
      wrapper.className = 'project-feature-embed';
      const frame = document.createElement('iframe');
      frame.title = project.featuredVideo.label || `Watch ${project.title}`;
      frame.src = project.featuredVideo.embed;
      frame.allow = 'autoplay; fullscreen; picture-in-picture';
      frame.allowFullscreen = true;
      wrapper.append(frame);
      featuredPlayer.replaceWith(wrapper);
    };
    featuredPlayer.addEventListener('error', showEmbedFallback, { once: true });
    featuredPlayer.querySelector('source')?.addEventListener('error', showEmbedFallback, { once: true });
  }

  prepareAdaptiveGallery();
  prepareEditorialGallery();

  content.querySelector('[data-next-project]')?.addEventListener('click', () => {
    history.replaceState({ project: nextProject.slug }, '', `#work/${nextProject.slug}`);
    showProject(nextProject);
  });

  requestAnimationFrame(() => closeButton?.focus());
}

function prepareEditorialGallery() {
  const gallery = content.querySelector('.editorial-gallery');
  if (!gallery) return;

  gallery.querySelectorAll('img').forEach(image => {
    if (image.complete && image.naturalWidth === 0) {
      image.closest('figure')?.remove();
      return;
    }
    image.addEventListener('error', () => image.closest('figure')?.remove(), { once: true });
  });
}

function prepareAdaptiveGallery() {
  const gallery = content.querySelector('.filmstrip');
  if (!gallery) return;

  const images = [...gallery.querySelectorAll('.gallery-image')];
  if (!images.length) return;

  const getInfo = img => {
    const storedRatio = Number(img.dataset.ratio) || 0;
    const ratio = img.naturalWidth > 0
      ? img.naturalWidth / img.naturalHeight
      : storedRatio || 1.5;
    let type = 'square';
    if (ratio >= 1.18) type = 'landscape';
    else if (ratio <= 0.82) type = 'portrait';
    return { img, type, ratio };
  };

  const makeCell = item => {
    const cell = document.createElement('div');
    cell.className = `gallery-cell gallery-cell--${item.type}`;
    if (!item.img.hasAttribute('srcset')) cell.style.setProperty('--gallery-bg', `url("${item.img.currentSrc || item.img.src}")`);
    cell.append(item.img);
    return cell;
  };

  const makeSoloRow = item => {
    const row = document.createElement('div');
    row.className = `gallery-row gallery-row--solo gallery-row--solo-${item.type}`;
    row.append(makeCell(item));
    return row;
  };

  const makePairRow = (first, second) => {
    const row = document.createElement('div');
    row.className = 'gallery-row gallery-row--pair';
    row.style.setProperty('--gallery-columns', `${first.ratio}fr ${second.ratio}fr`);
    // Match responsive downloads to the actual columns; mobile LOX images stack.
    [first, second].forEach(item => {
      if (item.img.hasAttribute('srcset')) {
        const share = (100 * item.ratio / (first.ratio + second.ratio)).toFixed(3);
        item.img.sizes = `(max-width: 720px) 100vw, ${share}vw`;
      }
    });
    row.append(makeCell(first), makeCell(second));
    return row;
  };

  const buildGallery = () => {
    const items = images
      .filter(img => img.dataset.failed !== 'true')
      .map(getInfo);
    const fragment = document.createDocumentFragment();
    let index = 0;

    while (index < items.length) {
      const current = items[index];
      const next = items[index + 1];
      if (!next) {
        fragment.append(makeSoloRow(current));
        index += 1;
        continue;
      }

      const bothLandscape = current.type === 'landscape' && next.type === 'landscape';
      const currentIsUltraWide = current.type === 'landscape' && current.ratio >= 2.1;

      if (bothLandscape || currentIsUltraWide) {
        fragment.append(makeSoloRow(current));
        index += 1;
        continue;
      }

      fragment.append(makePairRow(current, next));
      index += 2;
    }

    gallery.replaceChildren(fragment);
  };

  buildGallery();
  images.forEach(img => {
    if (!img.complete) {
      if (!img.dataset.ratio) img.addEventListener('load', buildGallery, { once: true });
      img.addEventListener('error', () => {
        img.dataset.failed = 'true';
        buildGallery();
      }, { once: true });
    }
    else if (img.naturalWidth === 0) {
      img.dataset.failed = 'true';
      buildGallery();
    }
  });
}

function projectFromHash() {
  const match = location.hash.match(/^#work\/([^/]+)$/);
  if (!match) return null;
  return projects.find(project => project.slug === decodeURIComponent(match[1])) || null;
}

function closeProject({ fromHistory = false } = {}) {
  content.querySelectorAll('video').forEach(video => video.pause());
  if (dialog.open) dialog.close();

  currentProject = null;
  document.title = SITE.title;

  if (!fromHistory) {
    if (openedFromIndex) {
      openedFromIndex = false;
      history.back();
    }
    else {
      history.replaceState({}, '', '#work');
    }
  }

  requestAnimationFrame(() => lastProjectTrigger?.focus());
}

closeButton?.addEventListener('click', () => closeProject());

dialog.addEventListener('cancel', event => {
  event.preventDefault();
  closeProject();
});

dialog.addEventListener('click', event => {
  if (event.target === dialog) closeProject();
});

window.addEventListener('popstate', () => {
  const project = projectFromHash();
  if (project) {
    openedFromIndex = false;
    showProject(project);
  }
  else if (location.hash === '#photography') {
    openedFromIndex = false;
    showPhotographyHub({ updateHistory: false });
  }
  else if (dialog.open) {
    closeProject({ fromHistory: true });
  }
});

const initialProject = projectFromHash();
if (initialProject) {
  openedFromIndex = false;
  showProject(initialProject);
}
else if (location.hash === '#photography') {
  openedFromIndex = false;
  showPhotographyHub({ updateHistory: false });
}
