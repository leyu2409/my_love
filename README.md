# For You ❤️ — A Personalized Love Story Website

A single-page romantic gift website built with semantic HTML, CSS, and vanilla JavaScript. It presents a personalized story through memories, photographs, local videos, a letter, and small interactive moments, with English and Amharic content and no build step or application dependencies.

> The project is a static front-end experience. Personal details and photo captions are defined in `loveConfig` in `script.js`; photos are local files in `assets/photos/`.

## Overview

The site opens with an animated gift and welcome message, then presents a scrollable story with a memory timeline, photo gallery, slideshow, letter, reasons, emoji reactions, a tap counter, a relationship-duration counter, and a final reveal. A language switcher updates translated interface and personalized content in the browser.

## Features

- **Gift introduction and welcome typewriter** — opens the welcome section and types the configured message.
- **English and Amharic** — switches interface and configured content, updates the document language, and stores the selection in browser `localStorage` when available.
- **Memory timeline** — renders configured entries and reveals them as they enter the viewport.
- **Photo gallery and lightbox** — shows the configured photos, provides next/previous controls and keyboard navigation, and supports a double-click heart effect.
- **Photo slideshow** — cycles through the same photo list with manual arrow controls and navigation dots.
- **Local video gallery** — renders configured MP4 videos with native controls, optional posters, and no autoplay or eager video preloading.
- **Love letter** — displays the configured letter in the envelope area and a modal view.
- **Reasons and emoji reactions** — renders language-specific cards and emoji messages.
- **Heart tap counter** — counts taps, shows milestone messages, and animates hearts.
- **Relationship-duration counter** — shows the total completed months since `anniversaryDate`; shorter month ends are handled by clamping the monthly anniversary to the last day of that month.
- **Final surprise and easter egg** — reveals the closing message with confetti; clicking the navigation heart five times opens the secret message.
- **Responsive navigation and page details** — mobile menu, active navigation highlighting, scroll progress, floating hearts, desktop cursor effects, and back-to-top control.
- **Reduced-motion support** — CSS animations and JavaScript effects respond to `prefers-reduced-motion`.
- **Missing-photo fallback** — gallery and slideshow images show a camera placeholder when an image fails to load.

There is no music player or background music implementation in the current source. The project contains no automated test suite.

## Technology

| Area | Implementation |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3, custom properties, Flexbox, Grid, media queries, keyframe animations |
| Application code | Vanilla JavaScript (ES6+) |
| Browser APIs | Intersection Observer, Web Animations API, `localStorage`, `matchMedia`, visibility and scroll events |
| Fonts | Cormorant Garamond and Nunito Sans from Google Fonts, with local system fallbacks |
| Runtime dependencies | None |

Google Fonts are loaded from Google when the visitor is online. No framework, package manager, build tool, backend, or environment file is required.

## Project structure

```text
my_love/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── photos/
    │   ├── photo1.jpg
    │   ├── photo2.jpg
    │   ├── ...
    │   └── photo15.jpg
    └── videos/
        └── .gitkeep
```

The page structure and accessible labels are in `index.html`; visual rules, breakpoints, and motion preferences are in `style.css`; configuration, translations, rendering, and interactions are in `script.js`.

## Prerequisites

- A modern browser with JavaScript enabled.
- Python 3 or Node.js if you want to run a local static HTTP server. Neither is required to edit the files.

## Run locally

1. Download or clone the project.
2. Keep `index.html`, `style.css`, and `script.js` together.
3. Keep the image paths used in `loveConfig.photos` under `assets/photos/`.
4. Open `index.html` in a browser, or serve the folder locally.

For a local server, run this from the project root (requires Python 3):

```bash
python -m http.server 8000
```

Or, with Node.js (no package installation required):

Then visit `http://localhost:8000`. Opening the HTML file directly also works because the site does not fetch data or require a server-side route.

## Personalize the site

Edit the `loveConfig` object near the top of `script.js`. It contains:

| Setting | Purpose |
| --- | --- |
| `girlfriendName` | Name shown in the welcome and closing sections and page title |
| `yourName` | Intended letter signature; update the letter text itself if you want the displayed signature changed |
| `welcomeMessage` | Typewriter text, with `en` and `am` values |
| `anniversaryDate` | Relationship start date used by the month counter |
| `showLoveCounter` | Shows or hides the counter |
| `occasion` | Occasion setting currently present in configuration |
| `letter` | Full letter in English and Amharic |
| `photos` | Ordered list of `{ src, caption }` objects used by the gallery and slideshow |
| `videos` | List of local MP4 `{ src, title, poster? }` entries for the video gallery |
| `finalPhotoIndex` | Zero-based photo index for the final photo |
| `timeline`, `reasons`, `emojis` | Language-specific arrays for their corresponding sections |
| `finalMessage` | Closing headline in English and Amharic |

Use plain text for names, captions, and messages. The site inserts several configured text values into the page; do not put untrusted HTML into configuration values.

## Photographs

The configured photo paths are relative to the project root, for example:

```js
{ src: "assets/photos/photo1.jpg", caption: "A favorite memory. ❤️" }
```

To replace or add photographs:

1. Place image files in `assets/photos/`.
2. Add or update entries in `loveConfig.photos` in `script.js`.
3. Set `finalPhotoIndex` to a valid zero-based index if you want a different closing photo.
4. Use descriptive captions; they are also used as image alternative text and lightbox captions.

The gallery and slideshow use the same ordered list. If an image cannot load, those views show a placeholder. The final photo section also falls back to a placeholder. No image optimization pipeline is included; suitably sized JPEGs help keep page downloads manageable.

## Local video gallery

The **Little Film Of Us** section reads its entries from `loveConfig.videos` in `script.js`. To add a video:

1. Place an MP4 file in `assets/videos/`.
2. Add an entry to `loveConfig.videos`, using a project-relative path and a title in both supported languages:

   ```js
   {
     src: "assets/videos/memory-01.mp4",
     poster: "assets/photos/photo1.jpg", // Optional preview image
     title: { en: "A favorite moment ❤️", am: "ውድ ጊዜያችን ❤️" }
   }
   ```

3. Repeat for each additional video. The gallery creates one card per valid entry and sorts cards in the configured order.

Videos use native browser controls and `preload="none"`; they do not autoplay. The current project has no MP4 files, so the section displays an instruction message until entries are added. Keep video files reasonably sized because the project does not include a video transcoding or optimization pipeline.

## Background music

Background music is **not implemented**: there is no audio asset, player markup, or playback code in the current project. No music configuration is available.

## Languages

The supported languages are English (`en`) and Amharic (`am`). Interface translations are in the `translations` object in `script.js`; personalized text is stored in language-keyed objects such as `loveConfig.letter.en` and `loveConfig.letter.am`. When adding or editing text, provide both language values if the text should change with the language switcher. The selected language is saved under the `lang` key in `localStorage`; if storage is unavailable, the page uses English for that session.

## Relationship-duration counter

Set the start date and visibility in `loveConfig`:

```js
anniversaryDate: "2026-06-01T00:00:00",
showLoveCounter: true,
```

The counter reports **completed calendar months**, not a fractional month or a count of days divided by a fixed average. It updates on a timer and when the page becomes visible again. For a date such as January 31, the monthly anniversary in February is treated as the last day of February (28 or 29, depending on the year). A future start date displays zero. An invalid date prevents the counter section from being shown. The date string above has no timezone suffix, so the browser interprets it as local time; use a consistent local-time convention when configuring it.

## Responsive design

The stylesheet uses fluid type sizing, Flexbox, Grid, and viewport breakpoints for the navigation, gallery, footer, and other sections. It includes narrow-screen rules at 360px and 480px, plus responsive adjustments at 768px, 899px, and desktop widths. Check the page at your target device sizes after changing content or adding images; particularly long text and unusually tall images can affect the composition.

## Accessibility

The current markup includes a skip link, semantic page sections and navigation, button-based controls, image alternative text sourced from captions, dialog roles for the lightbox and secret message, ARIA labels and live regions, visible keyboard focus styling, keyboard controls for the lightbox, and reduced-motion CSS. The language switcher updates the document's `lang` attribute and exposes its selected state through `aria-pressed`.

Accessibility should still be checked in the target browser and assistive technology, especially focus behavior and announcement quality for dynamic content. The project does not include automated accessibility tooling.

## Performance notes

Gallery and slideshow images are created with lazy loading. Floating hearts and cursor effects are limited or disabled for reduced-motion users and, where appropriate, small or touch-first displays. Effects are implemented with CSS animations and the Web Animations API. The site has no build pipeline, image optimizer, or performance test suite.

## Testing and verification

There is no automated test command or test framework in this repository. For a manual check after editing, open the page in a browser and verify:

- Gift opening, typewriter message, and continue navigation.
- Both languages, including dynamically rendered content and the counter label.
- Timeline reveal, gallery images, lightbox mouse and keyboard controls, and slideshow arrows/dots/rotation.
- Letter modal, reason cards, emoji reactions, heart count, month counter, surprise, and five-click secret message.
- Mobile navigation, small viewport widths, missing-image fallback, and reduced-motion behavior.
- Browser console for JavaScript errors and network panel for missing local assets.

These are suggested manual checks, not a claim that a formal test suite exists.

## Deploy to GitHub Pages

This is a static site and can be published directly from a GitHub repository:

1. Commit `index.html`, `style.css`, `script.js`, `README.md`, and the required `assets/photos/` files to the repository.
2. In GitHub, open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select the branch and the repository root (`/`), then save.
4. Wait for GitHub Pages to publish and open the URL shown in the Pages settings.
5. Test the published site and confirm that image paths load. Use HTTPS and avoid committing private photographs unless you intend them to be publicly accessible.

The site has no server-side component. When hosted beneath a repository subpath, the existing relative CSS, JavaScript, and photo paths resolve from the project page as intended.

## Privacy and security

The site runs in the visitor's browser and does not include an application backend, analytics, account system, or server-side data storage. The language preference is stored locally in the browser. The photos and personal messages committed to a public repository or deployed site are publicly accessible; publish only content you have permission to share. Google Fonts requests are made to Google when fonts are fetched. Do not put credentials, sensitive personal data, or private information in the source files.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Styles or interactions do not load | Confirm `style.css` and `script.js` are beside `index.html`, with matching filenames and capitalization. |
| A photo is missing | Confirm its path exactly matches a file under `assets/photos/`; check spelling and capitalization. |
| Changes do not appear | Reload the page, then check that you edited the served copy of the project. |
| Language selection resets | Check browser storage settings; the page falls back to English when `localStorage` is unavailable. |
| Counter is absent | Confirm `showLoveCounter` is `true` and `anniversaryDate` is a valid date string. |
| Fonts look different offline | Google Fonts need a network connection; system font fallbacks are used otherwise. |
| Page does not work from a hosted subpath | Confirm the repository root contains `index.html` and that all local paths preserve the `assets/photos/` structure. |

## Future opportunities

These are not implemented features; they are potential follow-up work if the project needs them:

- Add a real automated test suite for date calculations and core interactions.
- Add an optional, accessible music player if background music becomes a requirement.
- Run a formal accessibility and cross-browser review.
- Optimize the supplied photographs for web delivery while retaining suitable quality.

## License and acknowledgments

No license file is included, so the repository's reuse and redistribution terms are currently unspecified. Add a license file before publishing the project for reuse by others. The interface uses Cormorant Garamond and Nunito Sans via Google Fonts; all other application code is plain HTML, CSS, and JavaScript.

---

Made as a personal, customizable digital gift. Replace the sample names, dates, messages, and photographs with the story you want to share.
