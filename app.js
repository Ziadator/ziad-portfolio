const SITE = {
  title: 'Ziad Beranger / Video Editor & Filmmaker, Sydney',
  description: 'Sydney-based video editor and filmmaker working across branded content, commercial and narrative film.'
};

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
    title: 'Lox in a Box',
    category: 'Branded Content / Commercial',
    year: '2026',
    role: 'Creative Direction / Photography / Cinematography / Editing',
    intro: 'A photography and short-form film campaign created for Sydney deli brand Lox in a Box.',
    context: 'Lox in a Box is a Sydney institution celebrating Polish bagels, family recipes and deli culture across Bondi, Coogee, Paddington and Marrickville. The commission brought that unmistakable personality into a campaign of photography and short-form film.',
    contribution: 'I developed the visual direction, photographed and filmed the campaign, then edited the work into a coherent set of brand assets with one pace, tone and point of view.',
    facts: [
      ['Client', 'Lox in a Box'],
      ['Location', 'Sydney, Australia'],
      ['Format', 'Photography / Short-form film']
    ],
    video: 'assets/videos/lox-loop.mp4',
    featuredVideo: null,
    cover: 'https://framerusercontent.com/images/2ieT7KSAQcg3IK8rNt9ryWjR4.jpg?width=2400',
    coverPosition: '50% 50%',
    gallery: [
      'assets/lox-in-a-box/gallery-01.jpg',
      'assets/lox-in-a-box/gallery-02.jpg',
      'assets/lox-in-a-box/gallery-03.jpg',
      'assets/lox-in-a-box/gallery-04.jpg',
      'assets/lox-in-a-box/gallery-05.jpg',
      'assets/lox-in-a-box/gallery-06.jpg'
    ]
  },
  {
    slug: 'dont-call-me-back',
    title: 'Don’t Call Me Back',
    category: 'Narrative Film',
    year: '2026',
    role: 'Writer / Director / Editor',
    intro: 'An independent Australian road movie written, directed and edited by Ziad Beranger in collaboration with filmmaker Didier Poiraud.',
    context: 'Mike Ferrari crosses an increasingly strange Australian landscape as the line between escape and self-destruction begins to blur. The short film is currently in post-production.',
    contribution: 'I wrote, directed and edited the film, shaping its performances, cinematography and final rhythm across production and post.',
    facts: [
      ['Collaboration', 'Didier Poiraud'],
      ['Format', 'Short film'],
      ['Status', 'In post-production']
    ],
    video: 'assets/videos/dont-call-me-back-loop.mp4',
    featuredVideo: null,
    cover: 'assets/dont-call-me-back/cover.png',
    coverPosition: '50% 44%',
    gallery: [
      'assets/dont-call-me-back/beach-body.jpg',
      'assets/dont-call-me-back/forest-shirt.jpg',
      'assets/dont-call-me-back/hand-rock.jpg',
      'assets/dont-call-me-back/sunglasses.jpg'
    ]
  },
  {
    slug: 'follow-your-passion',
    title: 'Follow Your Passion Media',
    category: 'Creative Content / Digital',
    year: '2025 / 2026',
    role: 'Creative Content Lead / Direction / Editing',
    intro: 'Creative content produced across founder campaigns, podcasts and short-form formats for a Gold Coast agency.',
    context: 'Follow Your Passion Media is a Gold Coast sales and marketing agency working with entrepreneurs, coaches and founder-led businesses. The content moves across personal brands, podcasts, campaigns and social platforms.',
    contribution: 'As Creative Content Lead, I developed concepts from client briefs, directed and shot content, edited final assets and coordinated delivery with a distributed team.',
    facts: [
      ['Studio', 'Follow Your Passion Media'],
      ['Location', 'Gold Coast / Remote'],
      ['Role', 'Creative Content Lead']
    ],
    video: 'assets/videos/fyp-loop.mp4',
    featuredVideo: null,
    cover: 'assets/follow-your-passion/conversation.jpg',
    coverPosition: '50% 50%',
    gallery: [
      'assets/follow-your-passion/camera-bts.png',
      'assets/follow-your-passion/studio-bts.jpeg',
      'assets/follow-your-passion/podcast.png',
      'assets/follow-your-passion/way-to-scale.png',
      'assets/follow-your-passion/monetise-passion.png',
      'assets/follow-your-passion/content-house.png',
      'assets/follow-your-passion/male-portrait.png',
      'assets/follow-your-passion/woman-portrait.png',
      'assets/follow-your-passion/brand-card.png'
    ]
  },
  {
    slug: 'lost-in-wasteland',
    title: 'Lost in Wasteland',
    category: 'Photography / Film / Writing',
    year: 'Ongoing',
    role: 'Creative Direction / Photography / Film',
    intro: 'An evolving photographic world built from fragmented memories, fleeting encounters and places suspended between reality and fiction.',
    context: 'Lost in Wasteland is a personal archive and developing book where photography, moving image and short texts gradually form one incomplete mythology.',
    contribution: 'I photograph, film, write and sequence the project across France and Australia, using it as a long-term laboratory for atmosphere, character and visual storytelling.',
    facts: [
      ['Format', 'Photography / Book / Film'],
      ['Location', 'France / Australia'],
      ['Status', 'Ongoing']
    ],
    video: 'assets/videos/lost-in-wasteland-loop.mp4',
    featuredVideo: null,
    cover: 'https://framerusercontent.com/images/Q4P391qnOAcOlQkontq86LUc6E.jpg?width=2400',
    coverPosition: '50% 50%',
    gallery: [
      'xTcZCVunWNKAOLmePnJ0mLJtSdY.jpg',
      'bxyDYSIkg5Qh5xEmf1TedH8iOxU.jpg',
      'e1f2Y2r11hn6d8YUvKwN3ylL27E.jpg',
      'M2qW4a6vPViqWEJZiZAZkfecmI.jpg'
    ]
  },
  {
    slug: 'en-quete-dappart',
    title: 'En quête d’appart',
    category: 'Broadcast Television',
    year: '2017 / 2018',
    role: 'Video Editor / B&O Productions / BFM Business',
    intro: 'A year inside a weekly broadcast rhythm, turning varied rushes into clear 52-minute stories under real television deadlines.',
    context: 'A weekly 52-minute factual-entertainment format produced by B&O Productions for BFM Business, combining property stories, interviews and location-led reporting.',
    contribution: 'I edited complete episodes throughout the final season, building structure, pace and narrative clarity while delivering broadcast-ready programmes under short deadlines.',
    facts: [
      ['Production', 'B&O Productions'],
      ['Broadcaster', 'BFM Business'],
      ['Format', 'Weekly / 52 minutes']
    ],
    video: 'assets/videos/en-quete-dappart-loop.mp4',
    featuredVideo: null,
    cover: 'https://framerusercontent.com/images/Z8zHCo5bMkV9QykHgPylnjwcow.png?width=2400',
    coverPosition: '50% 50%',
    gallery: ['Ap5jD2f7hBcC4a8BYVwFvThmdRk.png']
  },
  {
    slug: 'jump-n-stay',
    title: 'Jump & Stay',
    category: 'Independent Film / Collaboration',
    year: '2017 / 2024',
    role: 'Editor / Additional Editor',
    intro: 'A recurring editing collaboration with director Didier Poiraud and filmmaker Astrid Serafini across fiction, music and experimental film.',
    context: 'Founded in Nantes by Didier Poiraud and Astrid Serafini, Jump & Stay develops and produces independent audiovisual projects across cinema, music and visual art.',
    contribution: 'Credited as editor on Moonbeach, I led the edit on selected episodes and supported the edit on others. The wider collaboration also includes Les Crampets and Blackhouse Sessions.',
    facts: [
      ['Collaborators', 'Didier Poiraud / Astrid Serafini'],
      ['Moonbeach', 'Lead editing / Additional editing'],
      ['Other projects', 'Les Crampets / Blackhouse Sessions']
    ],
    video: 'assets/videos/jump-n-stay-loop.mp4',
    featuredVideo: null,
    cover: 'assets/jump-n-stay/car-scene.png',
    coverPosition: '50% 50%',
    gallery: [
      'assets/jump-n-stay/guitar.png',
      'assets/jump-n-stay/beach.png',
      'assets/jump-n-stay/character.png',
      'assets/jump-n-stay/silhouettes.png',
      'assets/jump-n-stay/live-stage.png',
      'assets/jump-n-stay/portrait.png',
      'assets/jump-n-stay/vr-scene.png'
    ]
  }
];

const asset = name => {
  if (!name) return '';
  if (/^(https?:|data:|blob:)/.test(name) || name.includes('/')) return name;
  return `https://framerusercontent.com/images/${name}?width=1800`;
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

projects.forEach((project, index) => {
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
  list.append(button);
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

    <section class="project-details" aria-label="Project notes">
      <p class="eyebrow">Project notes</p>
      <div class="project-detail">
        <p class="project-detail-label">The project</p>
        <p>${project.context}</p>
      </div>
      <div class="project-detail">
        <p class="project-detail-label">My role</p>
        <p>${project.contribution}</p>
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
