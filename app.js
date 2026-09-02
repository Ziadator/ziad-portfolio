const projects = [
  {
    slug: 'lox-in-a-box',
    title: 'Lox in a Box',
    category: 'Branded Content / Commercial',
    year: '2026',
    role: 'Creative Direction · Photography · Cinematography · Editing',
    intro: 'A visual content package developed for Lox in a Box to elevate the brand’s digital presence while preserving its bold, fast and unmistakably Sydney personality.',
    video: 'assets/videos/lox-loop.mp4',
    storyPoster: 'https://framerusercontent.com/images/2ieT7KSAQcg3IK8rNt9ryWjR4.jpg?width=2400',
    cover: 'https://framerusercontent.com/images/2ieT7KSAQcg3IK8rNt9ryWjR4.jpg?width=2400',
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
    category: 'Short Film',
    year: '2026',
    role: 'Writer · Director · Editor',
    intro: 'A darkly comic road movie following Mike Ferrari through an increasingly strange Australian landscape. Currently in post-production.',
    video: 'assets/videos/dont-call-me-back-loop.mp4',
    storyPoster: 'assets/dont-call-me-back/cover.png',
    cover: 'assets/dont-call-me-back/cover.png',
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
    category: 'Branded Content / Digital',
    year: '2025—2026',
    role: 'Creative Lead · Direction · Editing · Art Direction',
    intro: 'Creative production for founders, entrepreneurs and client brands—combining team leadership, visual direction, photo and video production, editing and digital delivery.',
    video: 'assets/videos/fyp-loop.mp4',
    storyPoster: 'assets/follow-your-passion/conversation.jpg',
    cover: 'assets/follow-your-passion/conversation.jpg',
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
    category: 'Book / Photography / Film',
    year: 'Ongoing',
    role: 'Creative Direction · Photography · Film',
    intro: 'An ongoing photographic book combining images and poetry: fragmented memories, fleeting encounters and places suspended somewhere between reality and fiction.',
    video: 'assets/videos/lost-in-wasteland-loop.mp4',
    storyPoster: 'https://framerusercontent.com/images/Q4P391qnOAcOlQkontq86LUc6E.jpg?width=2400',
    cover: 'https://framerusercontent.com/images/Q4P391qnOAcOlQkontq86LUc6E.jpg?width=2400',
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
    year: '2020',
    role: 'Video Editor · BO Production / BFM Business',
    intro: 'Video editor on a weekly 52-minute television programme, shaping structure, pacing and narrative clarity within a fast-turnaround broadcast workflow.',
    video: 'assets/videos/en-quete-dappart-loop.mp4',
    storyPoster: 'https://framerusercontent.com/images/Z8zHCo5bMkV9QykHgPylnjwcow.png?width=2400',
    cover: 'https://framerusercontent.com/images/Z8zHCo5bMkV9QykHgPylnjwcow.png?width=2400',
    gallery: [
      'Ap5jD2f7hBcC4a8BYVwFvThmdRk.png'
    ]
  },

  {
    slug: 'jump-n-stay',
    title: 'Jump N Stay',
    category: 'Film / Creative Collaboration',
    year: '2018—2024',
    role: 'Freelance Video Editor',
    intro: 'A long-term collaboration across fiction, music and independent audiovisual projects, including Moonbeach, Les Crampets and Blackhouse Sessions.',
    video: 'assets/videos/jump-n-stay-loop.mp4',
    storyPoster: 'assets/jump-n-stay/car-scene.png',
    cover: 'assets/jump-n-stay/car-scene.png',
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


const asset = name =>
  name.includes('/')
    ? name
    : `https://framerusercontent.com/images/${name}?width=1800`;


const list = document.querySelector('#project-list');
const dialog = document.querySelector('#project-dialog');
const content = document.querySelector('#project-content');

const wordmark = document.querySelector('.wordmark');
const closeButton = document.querySelector('.dialog-close');

if (wordmark) {
  wordmark.textContent = 'Home';
  wordmark.setAttribute('aria-label', 'Home');
}

if (closeButton) {
  closeButton.innerHTML = '<span class="dialog-close-icon" aria-hidden="true">←</span><span>Index</span>';
  closeButton.setAttribute('aria-label', 'Back to project index');
}


projects.forEach(project => {

  const article = document.createElement('article');

  article.className = 'project';
  article.tabIndex = 0;
  article.setAttribute('role', 'button');
  article.setAttribute('aria-label', `Open ${project.title}`);

  article.innerHTML = `
    <div
      class="project-media"
      style="background-image:url('${project.cover}')">
    </div>

    <div class="project-copy">
      <h3>${project.title}</h3>
      <p>${project.category}</p>
      <p>${project.year}</p>
    </div>
  `;

  const open = () => openProject(project);

  article.addEventListener('click', open);

  article.addEventListener('keydown', event => {

    if (event.key === 'Enter' || event.key === ' ') {

      event.preventDefault();
      open();

    }

  });

  list.append(article);

});


function openProject(project) {

  content.innerHTML = `

    <header
      class="project-hero"
      style="background-image:url('${project.cover}')">

      <div>

        <p class="eyebrow">
          ${project.category} · ${project.year}
        </p>

        <h2>${project.title}</h2>

      </div>

    </header>


    <section class="project-story">

      <div class="project-story-media">

        ${
          project.video
            ? `
              <video
                autoplay
                muted
                loop
                playsinline
                preload="auto">

                <source
                  src="${project.video}"
                  type="video/mp4">

              </video>
            `
            : `
              <div
                class="project-story-still"
                style="background-image:url('${project.storyPoster || project.cover}')">
              </div>
            `
        }

        <div class="project-story-overlay"></div>

      </div>


      <div class="project-story-copy">

        <div class="project-story-meta">

          <p>${project.role}</p>
          <p>${project.year}</p>

        </div>


        <p class="project-story-description">
          ${project.intro}
        </p>

      </div>

    </section>


    <section
      class="filmstrip filmstrip--${project.slug}"
      aria-label="${project.title} gallery">

      ${project.gallery
        .map(
          (image, i) => `
            <img
              class="gallery-image"
              src="${asset(image)}"
              alt="${project.title} — selected image ${i + 1}"
              loading="eager"
              decoding="async">
          `
        )
        .join('')}

    </section>

  `;


  dialog.showModal();
  dialog.scrollTop = 0;

  prepareAdaptiveGallery();

}


function prepareAdaptiveGallery() {

  const gallery = content.querySelector('.filmstrip');

  if (!gallery) return;

  const images = [
    ...gallery.querySelectorAll('.gallery-image')
  ];

  if (!images.length) return;

  let remaining = images.length;


  const getInfo = img => {

    const width = img.naturalWidth || 1;
    const height = img.naturalHeight || 1;
    const ratio = width / height;

    let type = 'square';

    if (ratio >= 1.18) {
      type = 'landscape';
    }
    else if (ratio <= 0.82) {
      type = 'portrait';
    }

    return {
      img,
      type,
      ratio
    };

  };


  const makeCell = item => {

    const cell = document.createElement('div');

    cell.className = `gallery-cell gallery-cell--${item.type}`;
    cell.style.setProperty(
      '--gallery-bg',
      `url("${item.img.currentSrc || item.img.src}")`
    );

    cell.append(item.img);

    return cell;

  };


  const makeSoloRow = item => {

    const row = document.createElement('div');

    row.className =
      `gallery-row gallery-row--solo gallery-row--solo-${item.type}`;

    row.append(makeCell(item));

    return row;

  };


  const makePairRow = (first, second) => {

    const row = document.createElement('div');

    row.className = 'gallery-row gallery-row--pair';

    /*
      Key rule: column widths follow the real image ratios.
      At one shared row height, both images therefore fit completely,
      touch each other and fill 100% of the viewport with no crop/no grey.
    */
    row.style.gridTemplateColumns =
      `${first.ratio}fr ${second.ratio}fr`;

    row.append(
      makeCell(first),
      makeCell(second)
    );

    return row;

  };


  const buildGallery = () => {

    const items = images
      .filter(img => img.naturalWidth > 0)
      .map(getInfo);

    gallery.innerHTML = '';

    let i = 0;

    while (i < items.length) {

      const current = items[i];
      const next = items[i + 1];

      if (!next) {
        gallery.append(makeSoloRow(current));
        i += 1;
        continue;
      }

      /*
        Two landscapes in sequence read better as two large cinematic frames.
        Any other combination becomes one ratio-balanced two-image row.
      */
      const bothLandscape =
        current.type === 'landscape' &&
        next.type === 'landscape';

      const currentIsUltraWide =
        current.type === 'landscape' &&
        current.ratio >= 2.1;

      if (bothLandscape || currentIsUltraWide) {
        gallery.append(makeSoloRow(current));
        i += 1;
        continue;
      }

      gallery.append(
        makePairRow(current, next)
      );

      i += 2;

    }

  };


  const settled = () => {

    remaining -= 1;

    if (remaining === 0) {
      buildGallery();
    }

  };


  images.forEach(img => {

    if (img.complete) {
      settled();
    }
    else {
      img.addEventListener('load', settled, { once: true });
      img.addEventListener('error', settled, { once: true });
    }

  });

}

if (closeButton) {
  closeButton.addEventListener(
    'click',
    () => dialog.close()
  );
}



document.addEventListener('keydown', event => {

  if (event.key === 'Escape' && dialog.open) {
    dialog.close();
  }

});

dialog.addEventListener('click', event => {

  if (event.target === dialog) {

    dialog.close();

  }

});