const SITE = {
  title: 'Ziad Beranger / Editor, Director & Photographer, Sydney',
  description: 'Sydney-based video editor, director and photographer creating broadcast, branded, social and narrative work.'
};

const GROUPS = [
  {
    id: 'commercial-digital',
    label: '01 / Commercial & Digital',
    title: 'Content designed to hold attention and build a brand.'
  },
  {
    id: 'film-broadcast',
    label: '02 / Film & Broadcast',
    title: 'Narrative structure, performance and editorial rhythm.'
  },
  {
    id: 'photography',
    label: '03 / Photography',
    title: 'Commercial clarity with a personal photographic eye.'
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
    group: 'commercial-digital',
    title: 'Lox in a Box',
    category: 'Branded Content / Commercial',
    year: '2026',
    role: 'Creative Direction / Photography / Cinematography / Editing',
    intro: 'A photography and short-form film campaign created for Sydney deli brand Lox in a Box.',
    context: 'Lox in a Box is a Sydney institution celebrating Polish bagels, family recipes and deli culture across Bondi, Coogee, Paddington and Marrickville. The commission brought that unmistakable personality into a campaign of photography and short-form film.',
    contribution: 'I developed the visual direction, photographed and filmed the campaign, then edited the work into a coherent set of brand assets with one pace, tone and point of view.',
    deliverables: 'Campaign photography / Brand film / Social cutdowns',
    outcome: 'A flexible library of premium visual assets designed for the brand’s website, social channels and future campaigns.',
    facts: [
      ['Client', 'Lox in a Box'],
      ['Location', 'Sydney, Australia'],
      ['Format', 'Photography / Short-form film']
    ],
    video: 'assets/projects/lox-in-a-box/lox-brand-loop.mp4',
    featuredVideo: null,
    cover: 'assets/projects/lox-in-a-box/lox-cover.webp',
    coverPosition: '50% 50%',
    gallery: [
      'assets/projects/lox-in-a-box/lox-storefront.webp',
      'assets/projects/lox-in-a-box/lox-product-hero.webp',
      'assets/projects/lox-in-a-box/lox-team-service.webp',
      'assets/projects/lox-in-a-box/lox-bag-street.webp',
      'assets/projects/lox-in-a-box/lox-food-detail.webp',
      'assets/projects/lox-in-a-box/lox-interior-wide.webp'
    ]
  },
  {
    slug: 'dont-call-me-back',
    group: 'film-broadcast',
    title: 'Don’t Call Me Back',
    category: 'Narrative Film',
    year: '2026',
    role: 'Writer / Director / Editor',
    intro: 'An independent Australian road movie written, directed and edited by Ziad Beranger in collaboration with filmmaker Didier Poiraud.',
    context: 'Mike Ferrari crosses an increasingly strange Australian landscape as the line between escape and self-destruction begins to blur. The short film is currently in post-production.',
    contribution: 'I wrote, directed and edited the film, shaping its performances, cinematography and final rhythm across production and post.',
    deliverables: 'Short film / Trailer / Key stills',
    outcome: 'A complete independent film that demonstrates authorship across writing, direction and post-production.',
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
      'assets/projects/dont-call-me-back/dcmb-beach-wide.webp',
      'assets/projects/dont-call-me-back/dcmb-forest-portrait.webp',
      'assets/projects/dont-call-me-back/dcmb-hand-detail.webp',
      'assets/projects/dont-call-me-back/dcmb-car-sunglasses.webp'
    ]
  },
  {
    slug: 'follow-your-passion',
    group: 'commercial-digital',
    title: 'Follow Your Passion Media',
    category: 'Creative Content / Digital',
    year: '2025 / 2026',
    role: 'Creative Content Lead / Direction / Editing',
    intro: 'Creative content produced across founder campaigns, podcasts and short-form formats for a Gold Coast agency.',
    context: 'Follow Your Passion Media is a Gold Coast sales and marketing agency working with entrepreneurs, coaches and founder-led businesses. The content moves across personal brands, podcasts, campaigns and social platforms.',
    contribution: 'As Creative Content Lead, I developed concepts from client briefs, directed and shot content, edited final assets and coordinated delivery with a distributed team.',
    deliverables: 'Founder content / Podcast video / Social campaigns / Short-form edits',
    outcome: 'A repeatable production workflow capable of turning one shoot into multiple platform-ready assets.',
    facts: [
      ['Studio', 'Follow Your Passion Media'],
      ['Location', 'Gold Coast / Remote'],
      ['Role', 'Creative Content Lead']
    ],
    video: 'assets/projects/follow-your-passion/fyp-content-loop.mp4',
    featuredVideo: null,
    cover: 'assets/projects/follow-your-passion/fyp-cover.webp',
    coverPosition: '50% 50%',
    gallery: [
      'assets/projects/follow-your-passion/fyp-camera-bts.webp',
      'assets/projects/follow-your-passion/fyp-studio-bts.webp',
      'assets/projects/follow-your-passion/fyp-podcast-set.webp',
      'assets/projects/follow-your-passion/fyp-way-to-scale.webp',
      'assets/projects/follow-your-passion/fyp-monetise-passion.webp',
      'assets/projects/follow-your-passion/fyp-content-house.webp',
      'assets/projects/follow-your-passion/fyp-founder-portrait.webp',
      'assets/projects/follow-your-passion/fyp-female-portrait.webp'
    ]
  },
  {
    slug: 'lost-in-wasteland',
    group: 'photography',
    title: 'Lost in Wasteland',
    category: 'Photography / Film / Writing',
    year: 'Ongoing',
    role: 'Creative Direction / Photography / Film',
    intro: 'An evolving photographic world built from fragmented memories, fleeting encounters and places suspended between reality and fiction.',
    context: 'Lost in Wasteland is a personal archive and developing book where photography, moving image and short texts gradually form one incomplete mythology.',
    contribution: 'I photograph, film, write and sequence the project across France and Australia, using it as a long-term laboratory for atmosphere, character and visual storytelling.',
    deliverables: 'Photography series / Moving image / Writing / Book development',
    outcome: 'An evolving visual language that informs my commissioned work while remaining a distinct personal world.',
    facts: [
      ['Format', 'Photography / Book / Film'],
      ['Location', 'France / Australia'],
      ['Status', 'Ongoing']
    ],
    video: 'assets/projects/lost-in-wasteland/wasteland-atmosphere-loop.mp4',
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
    group: 'film-broadcast',
    title: 'En quête d’appart',
    category: 'Property Television / Broadcast',
    year: '2017 / 2018',
    role: 'Video Editor / B&O Productions',
    intro: 'Video editor on En quête d’appart, a weekly 52-minute French property television programme produced by B&O Productions for BFM Business.',
    context: 'En quête d’appart followed property searches through apartment visits, interviews and presenter-led sequences, combining practical information with an accessible television format.',
    contribution: 'As part of the editing team during the programme’s final season, I cut one 52-minute programme per week, shaping visits, interviews and location footage into a clear, broadcast-ready episode.',
    deliverables: 'Weekly 52-minute broadcast episodes',
    outcome: 'Consistent, deadline-driven delivery of clear long-form television storytelling in a professional production environment.',
    facts: [
      ['Production', 'B&O Productions'],
      ['Broadcaster', 'BFM Business / France'],
      ['Format', 'Weekly property television / 52 minutes']
    ],
    video: 'assets/projects/en-quete-dappart/enquete-editing-loop.mp4',
    featuredVideo: null,
    cover: 'assets/projects/en-quete-dappart/enquete-cover.webp',
    coverPosition: '50% 50%',
    gallery: [
      'assets/projects/en-quete-dappart/enquete-presenter.webp',
      'assets/projects/en-quete-dappart/enquete-apartment-visit.webp',
      'assets/projects/en-quete-dappart/enquete-interview.webp',
      'assets/projects/en-quete-dappart/enquete-broadcast-frame.webp'
    ]
  },
  {
    slug: 'jump-n-stay',
    group: 'film-broadcast',
    title: 'Jump & Stay',
    category: 'Independent Film / Collaboration',
    year: '2017 / 2024',
    role: 'Editor / Additional Editor',
    intro: 'A recurring editing collaboration with director Didier Poiraud and filmmaker Astrid Serafini across fiction, music and experimental film.',
    context: 'Founded in Nantes by Didier Poiraud and Astrid Serafini, Jump & Stay develops and produces independent audiovisual projects across cinema, music and visual art.',
    contribution: 'Credited as editor on Moonbeach, I led the edit on selected episodes and supported the edit on others. The wider collaboration also includes Les Crampets and Blackhouse Sessions.',
    deliverables: 'Narrative edits / Music films / Experimental shorts',
    outcome: 'A long-running creative collaboration spanning different formats, tones and post-production responsibilities.',
    facts: [
      ['Collaborators', 'Didier Poiraud / Astrid Serafini'],
      ['Moonbeach', 'Lead editing / Additional editing'],
      ['Other projects', 'Les Crampets / Blackhouse Sessions']
    ],
    video: 'assets/projects/jump-n-stay/jump-n-stay-loop.mp4',
    featuredVideo: null,
    cover: 'assets/projects/jump-n-stay/jump-n-stay-cover.webp',
    coverPosition: '50% 50%',
    gallery: [
      'assets/projects/jump-n-stay/jns-guitar.webp',
      'assets/projects/jump-n-stay/jns-beach.webp',
      'assets/projects/jump-n-stay/jns-character.webp',
      'assets/projects/jump-n-stay/jns-silhouettes.webp',
      'assets/projects/jump-n-stay/jns-live-stage.webp',
      'assets/projects/jump-n-stay/jns-portrait.webp'
    ]
  }
];

projects.splice(1, 0, {
  slug: 'deca',
  group: 'commercial-digital',
  title: 'DECA',
  category: 'YouTube / Podcast / Digital Content',
  year: '2025',
  role: 'Video Editing / Visual Storytelling',
  intro: 'A series of interview-led films translating conversations about technology and digital culture into clear, engaging online content.',
  context: 'Created for DECA, the work combines podcast and interview material with a visual structure designed for online audiences. The subjects range from digital transformation to artificial intelligence.',
  contribution: 'I shaped the conversations in the edit, refined pacing and structure, and used supporting visuals, graphics and sound to turn complex ideas into accessible stories.',
  deliverables: 'Three digital films / YouTube masters / Social cutdowns',
  outcome: 'A strong example of long-form and mid-form editorial work built around clarity, retention and speaker authenticity.',
  facts: [
    ['Client', 'DECA'],
    ['Format', 'Interview / Podcast / YouTube'],
    ['Focus', 'Technology / Digital culture']
  ],
  video: 'assets/projects/deca/deca-editing-loop.mp4',
  featuredVideo: {
    src: 'assets/projects/deca/deca-the-house-is-digital.mp4',
    poster: 'assets/projects/deca/deca-the-house-is-digital-poster.webp',
    label: 'Watch selected film',
    duration: '01:55'
  },
  cover: 'assets/projects/deca/deca-cover.webp',
  coverPosition: '50% 50%',
  gallery: [
    'assets/projects/deca/deca-speaker-wide.webp',
    'assets/projects/deca/deca-podcast-two-shot.webp',
    'assets/projects/deca/deca-ai-revolution-frame.webp',
    'assets/projects/deca/deca-house-is-digital-frame.webp',
    'assets/projects/deca/deca-edit-timeline.webp',
    'assets/projects/deca/deca-detail-frame.webp'
  ]
});

projects.splice(projects.findIndex(item => item.slug === 'lost-in-wasteland'), 0, {
  slug: 'commercial-photography',
  group: 'photography',
  title: 'Commercial Photography',
  category: 'Editorial / Portrait / Brand',
  year: 'Selected work',
  role: 'Photographer / Creative Direction',
  intro: 'Commissioned and self-initiated photographs bringing character, atmosphere and editorial polish to people, places and brands.',
  context: 'This selection brings together portraits, lifestyle imagery, events and commercial details outside the Lost in Wasteland universe.',
  contribution: 'I develop the visual approach, direct subjects and shape light, movement and colour to create photographs that feel distinctive while remaining useful to the client.',
  deliverables: 'Campaign selects / Portraits / Editorial series / Event imagery',
  outcome: 'A focused commercial portfolio showing range without losing a recognisable photographic signature.',
  facts: [
    ['Formats', 'Campaign / Editorial / Portrait'],
    ['Location', 'Sydney / Australia'],
    ['Availability', 'Commissioned work']
  ],
  video: null,
  featuredVideo: null,
  cover: 'assets/projects/commercial-photography/photo-cover.webp',
  coverPosition: '50% 50%',
  gallery: [
    'assets/projects/commercial-photography/photo-portrait-editorial.webp',
    'assets/projects/commercial-photography/photo-brand-lifestyle.webp',
    'assets/projects/commercial-photography/photo-event-atmosphere.webp',
    'assets/projects/commercial-photography/photo-product-detail.webp',
    'assets/projects/commercial-photography/photo-people-motion.webp',
    'assets/projects/commercial-photography/photo-location-wide.webp',
    'assets/projects/commercial-photography/photo-night-flash.webp',
    'assets/projects/commercial-photography/photo-final-signature.webp'
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
  groupProjects.forEach(project => {
    const index = projects.findIndex(item => item.slug === project.slug);
    groupList.append(createProjectCard(project, index));
  });
  list.append(section);
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
    ratio: item.ratio || ''
  };
}

function renderFeaturedVideo(project) {
  const feature = project.featuredVideo;
  if (!feature?.src) return '';
  return `
    <section class="project-feature" aria-label="${escapeAttribute(feature.label || `Watch ${project.title}`)}">
      <div class="project-feature-head">
        <p class="eyebrow">${feature.label || 'Watch film'}</p>
        ${feature.duration ? `<p class="project-feature-duration">${feature.duration}</p>` : ''}
      </div>
      <video controls playsinline preload="metadata" ${feature.poster ? `poster="${escapeAttribute(asset(feature.poster))}"` : ''}>
        <source src="${escapeAttribute(asset(feature.src))}" type="video/mp4">
      </video>
    </section>
  `;
}

function renderFacts(project) {
  return project.facts
    .map(([label, value]) => `
      <div class="project-fact">
        <dt>${label}</dt>
        <dd>${value}</dd>
      </div>
    `)
    .join('');
}

function showProject(project) {
  const projectIndex = projects.findIndex(item => item.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  currentProject = project;
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
        <div class="project-story-meta">
          <p>${project.role}</p>
          <p>${project.year}</p>
        </div>
        <p class="project-story-description">${project.intro}</p>
      </div>
    </section>

    <section class="project-details" aria-label="Case study">
      <p class="eyebrow">Case study</p>
      <div class="project-detail">
        <p class="project-detail-label">The brief</p>
        <p>${project.context}</p>
      </div>
      <div class="project-detail">
        <p class="project-detail-label">My approach</p>
        <p>${project.contribution}</p>
      </div>
      <div class="project-detail project-detail--deliverables">
        <p class="project-detail-label">Deliverables</p>
        <p>${project.deliverables || 'Final campaign assets'}</p>
      </div>
      <div class="project-detail project-detail--outcome">
        <p class="project-detail-label">Value</p>
        <p>${project.outcome || 'A clear, coherent body of work designed for its audience and platform.'}</p>
      </div>
      <dl class="project-facts">${renderFacts(project)}</dl>
    </section>

    ${renderFeaturedVideo(project)}

    <section class="filmstrip filmstrip--${project.slug}" aria-label="${escapeAttribute(project.title)} gallery">
      ${project.gallery
        .map((item, index) => {
          const media = galleryItemData(item, project, index);
          const isPriority = index < 2;
          return `
            <img
              class="gallery-image"
              src="${escapeAttribute(asset(media.src))}"
              alt="${escapeAttribute(media.alt)}"
              ${media.ratio ? `data-ratio="${escapeAttribute(media.ratio)}"` : ''}
              loading="${isPriority ? 'eager' : 'lazy'}"
              fetchpriority="${isPriority ? 'high' : 'low'}"
              decoding="async">
          `;
        })
        .join('')}
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

  prepareAdaptiveGallery();

  content.querySelector('[data-next-project]')?.addEventListener('click', () => {
    history.replaceState({ project: nextProject.slug }, '', `#work/${nextProject.slug}`);
    showProject(nextProject);
  });

  requestAnimationFrame(() => closeButton?.focus());
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
    cell.style.setProperty('--gallery-bg', `url("${item.img.currentSrc || item.img.src}")`);
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
    row.style.gridTemplateColumns = `${first.ratio}fr ${second.ratio}fr`;
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
      img.addEventListener('load', buildGallery, { once: true });
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
  else if (currentProject) {
    closeProject({ fromHistory: true });
  }
});

const initialProject = projectFromHash();
if (initialProject) {
  openedFromIndex = false;
  showProject(initialProject);
}
