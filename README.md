# Ziad Beranger — portfolio

Zero-dependency static portfolio designed for a GitHub / VS Code workflow.

## Files to replace in the repository

```text
index.html
app.js
styles.css
assets/
  fonts/
    ArchivoBlack-Regular.ttf
    CourierPrime-Regular.ttf
    CourierPrime-Bold.ttf
```

Keep the rest of the existing `assets` folder. The code continues to use the same media paths wherever possible.

## Local preview

From the repository folder:

```sh
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Editing projects

All project content lives at the top of `app.js` in the `projects` array. Each project accepts:

- `cover`: homepage and project hero image;
- `coverPosition`: focal point of the crop, for example `35% 50%`;
- `storyPoster`: image shown behind the text while the loop loads;
- `video`: short muted background loop;
- `gallery`: ordered image paths;
- `featuredVideo`: optional full video with controls;
- `intro`, `context`, `contribution` and `facts`: project copy.

Projects now have shareable hash links such as:

```text
https://ziadberanger.com/#work/lox-in-a-box
https://ziadberanger.com/#work/dont-call-me-back
```

## Media structure to create

You do not need to send the media again. Create these paths in the repository and replace the placeholder filenames when your exports are ready:

```text
assets/
  hero-home.jpg
  videos/
    lox-loop.mp4
    dont-call-me-back-loop.mp4
    fyp-loop.mp4
    lost-in-wasteland-loop.mp4
    en-quete-dappart-loop.mp4
    jump-n-stay-loop.mp4
  lox-in-a-box/
    gallery-01.jpg ... gallery-06.jpg
  dont-call-me-back/
    cover.png
    beach-body.jpg
    forest-shirt.jpg
    hand-rock.jpg
    sunglasses.jpg
  follow-your-passion/
    conversation.jpg
    camera-bts.png
    studio-bts.jpeg
    podcast.png
    way-to-scale.png
    monetise-passion.png
    content-house.png
    male-portrait.png
    woman-portrait.png
    brand-card.png
  jump-n-stay/
    car-scene.png
    guitar.png
    beach.png
    character.png
    silhouettes.png
    live-stage.png
    portrait.png
    vr-scene.png
```

`Lost in Wasteland` and `En quête d’appart` still use the existing Framer-hosted images for now. They can be localised later by changing their paths in `app.js`.

## Add a clickable film or teaser

Change `featuredVideo: null` inside a project to:

```js
featuredVideo: {
  src: 'assets/videos/dont-call-me-back-teaser.mp4',
  poster: 'assets/dont-call-me-back/teaser-poster.jpg',
  label: 'Watch teaser',
  duration: '01:12'
},
```

Use this only for two or three projects with a film worth watching in full. The short `video` field remains a silent atmospheric loop.

## Recommended media exports

### Covers and gallery images

- WebP or high-quality progressive JPEG;
- 2200–2600 px on the longest edge;
- sRGB;
- target roughly 300–900 KB per image;
- use meaningful filenames rather than numbered camera exports.

The first two gallery images load immediately. The rest load progressively.

### Background loops

- MP4, H.264;
- 6–12 seconds;
- muted and designed to loop cleanly;
- 1920 × 1080 preferred for desktop backgrounds;
- target 3–7 MB;
- avoid text near the edges because the video uses `object-fit: cover`.

### Clickable videos

- MP4, H.264, 1920 × 1080;
- stereo AAC audio;
- add a dedicated poster image;
- keep large or long films on Vimeo and add an external link instead of hosting a very heavy file in GitHub.

## Gallery control

A gallery entry may be a simple path:

```js
'assets/lox-in-a-box/gallery-01.webp'
```

Or an object with better accessibility and an optional known ratio:

```js
{
  src: 'assets/lox-in-a-box/gallery-01.webp',
  alt: 'Lox in a Box bag on the counter beneath the ceiling sculpture',
  ratio: 1.5
}
```

The ratio is width divided by height. It prevents layout movement while a lazy image loads.

## Before publishing

1. Instagram is linked to `@_mikeferrari_` in `index.html`.
2. `En quête d’appart` is listed as `2017—2018`, the programme’s final publicly documented season.
3. The `Moonbeach` credit states that Ziad contributed across all cuts.
4. Replace remaining Framer-hosted images with local optimized originals.
5. Create a dedicated 1200 × 630 social preview later and replace the current `og:image` hero URL.
6. Test every project on desktop and mobile before pushing to production.
