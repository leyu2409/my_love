# For You ❤️ — A Personalized Love Story Website

A single-page, animated, bilingual romantic gift website built with pure HTML, CSS, and JavaScript — no frameworks, no build step, no backend. Fill in a config object with your own story, photos, and words, and share a personal, interactive experience with someone special.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)
![No Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen)
![Responsive](https://img.shields.io/badge/design-responsive-blueviolet)

---

## Overview

**For You ❤️** is a scroll-driven, single-page experience that tells a love story in stages: an animated gift box that opens to reveal a welcome message, a memory timeline, a photo gallery with a lightbox and slideshow, a love letter, a grid of "reasons why," playful emoji and heart-tap interactions, a live "time together" counter, and a final surprise reveal with confetti.

All content — names, dates, the letter, photo captions, timeline entries, and reasons — is centralized in a single configuration object (`loveConfig`) inside `script.js`, so the entire site can be personalized without touching the layout or animation logic. The interface is fully bilingual (English / Amharic) with instant client-side language switching.

## Key Features

- 🎁 **Animated gift-opening intro** — a clickable gift box with particle-burst animation that transitions into a typewriter-style welcome message
- 🌍 **Bilingual UI (English / Amharic)** — a language switcher translates all static and dynamically generated content, with the preference saved to `localStorage`
- 📜 **Memory timeline** — a scroll-triggered, fade-in timeline of key moments (via `IntersectionObserver`)
- 🖼️ **Photo gallery** — a responsive masonry grid with polaroid-style cards, a keyboard-navigable lightbox, and double-tap-to-like heart bursts
- 🎞️ **Auto-advancing slideshow** with Ken Burns pan/zoom effect and dot navigation
- 💌 **Love letter** — an envelope-opening animation plus a full-text modal view
- 💖 **"Reasons why" grid** — tappable cards, each with an icon, title, and message
- 🥰 **Emoji reaction wall** — tap any emoji to reveal a personalized message
- ❤️ **Interactive heart counter** — tap-to-count heart with milestone messages and flying-heart animation
- ⏱️ **Live "time together" counter** — real-time days/hours/minutes/seconds counter from a configurable anniversary date
- 🎉 **Final surprise reveal** — confetti animation and closing message
- 🤫 **Hidden easter egg** — tap the nav logo 5 times to unlock a secret message
- 📱 **Fully responsive navigation** — fixed pill nav on desktop, animated hamburger/off-canvas menu on mobile, with scroll-spy active-link highlighting
- ♿ **Accessibility-conscious** — skip-to-content link, ARIA labels, `aria-live` regions, keyboard navigation, and full `prefers-reduced-motion` support
- 🖱️ **Ambient touches** — floating background hearts, cursor trail effects (desktop only), and a scroll-progress bar

## Screenshots / Demo

_No screenshots are currently included in the repository. Add your own screenshots or a short screen recording here once you've personalized and deployed the site (e.g. `docs/screenshot-opening.png`, `docs/screenshot-gallery.png`)._

## Technologies Used

| Category         | Details                                                                 |
|-------------------|--------------------------------------------------------------------------|
| Markup            | HTML5 (semantic elements, ARIA attributes)                              |
| Styling           | CSS3 — custom properties, Flexbox, CSS Grid, CSS columns (masonry), keyframe animations, media queries |
| Scripting         | Vanilla JavaScript (ES6+) — no frameworks or libraries                  |
| Browser APIs      | `IntersectionObserver`, Web Animations API (`element.animate`), `localStorage`, `matchMedia` |
| Fonts             | [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) & [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans) via Google Fonts |
| Tooling / Build   | None required — static files served as-is                               |

## Project Structure

```
.
├── index.html      # Page markup and section structure
├── style.css       # All styling: layout, theming, responsive rules, animations
├── script.js       # Configuration (loveConfig), translations, and all interactive logic
└── assets/
    └── photos/      # Photo files referenced by loveConfig.photos (add your own)
```

> **Note:** The `assets/photos/` directory and image files are not included in this repository — they must be added by you. If an image fails to load, the gallery, slideshow, and final-photo sections automatically display a 📷 placeholder instead of breaking.

## Installation & Setup

This is a static website with **no dependencies and no build process**.

```bash
# 1. Clone the repository
git clone <your-repository-url>
cd <project-folder>

# 2. Add your photos
#    Place image files inside assets/photos/ matching the filenames
#    referenced in the `photos` array in script.js (e.g. photo1.jpg, photo2.jpg, ...)
```

## How to Run the Project

Because the site uses `fetch`-free, same-origin assets, you can open `index.html` directly in a browser, or serve it locally for the best experience:

```bash
# Option 1 — Python
python3 -m http.server 8000

# Option 2 — Node.js
npx serve .

# Then open:
http://localhost:8000
```

Alternatively, simply double-click `index.html` to open it directly in your browser.

## Configuration

All personalization happens inside the `loveConfig` object at the top of `script.js` — no other files need to be edited.

| Key                | Type              | Description                                                        |
|---------------------|-------------------|----------------------------------------------------------------------|
| `girlfriendName`     | `string`          | Name displayed in the welcome and final sections and the page title |
| `yourName`           | `string`          | Signature name used in the letter                                   |
| `welcomeMessage`     | `{ en, am }`      | Typewriter-animated message on the welcome screen                   |
| `anniversaryDate`    | ISO date string   | Start date used to calculate the live "time together" counter       |
| `showLoveCounter`    | `boolean`         | Toggles visibility of the love counter section                      |
| `occasion`           | `string`          | `"romantic"`, `"birthday"`, or `"anniversary"` — adjusts the final message automatically |
| `letter`             | `{ en, am }`      | Full text of the love letter (supports `\n` line breaks)            |
| `photos`             | `array`           | List of `{ src, caption }` objects powering the gallery, slideshow, and final photo |
| `finalPhotoIndex`    | `number`          | Index into `photos` used for the closing photo section              |
| `timeline`           | `{ en, am }`      | Arrays of `{ icon, title, text }` memory entries                    |
| `reasons`            | `{ en, am }`      | Arrays of `{ icon, title, text }` cards for the "reasons why" grid   |
| `emojis`             | `{ en, am }`      | Arrays of `{ symbol, message }` for the emoji reaction wall          |
| `finalMessage`       | `{ en, am }`      | Closing headline shown in the final surprise reveal                 |

No environment variables, API keys, or server-side configuration are required — everything runs client-side.

## Usage Guide

1. **Opening** — the visitor taps the gift box or the "Open Your Gift" button to trigger the reveal animation.
2. **Welcome** — a typewriter effect displays the welcome message, followed by a "Continue Our Story" button that scrolls to the timeline.
3. **Memories & Gallery** — visitors scroll through the timeline and browse the photo gallery; tapping a photo opens the lightbox (with keyboard arrow/Escape support), and double-tapping spawns a heart burst.
4. **Slideshow** — an auto-advancing carousel cycles through the same photo set with captions.
5. **Letter** — clicking the envelope or "Open My Letter" opens a modal with the full letter text.
6. **Reasons & Emojis** — visitors tap cards and emojis to reveal personalized messages.
7. **Heart Tap & Counter** — tapping the heart increments a counter with milestone messages; the love counter (if enabled) ticks live in days/hours/minutes/seconds.
8. **Surprise** — clicking "Reveal It" triggers a confetti animation and the final message.
9. **Language** — the EN / AM toggle in the top-right corner instantly re-renders all text, including dynamically generated content.
10. **Easter egg** — tapping the heart logo in the nav bar 5 times opens a hidden secret message modal.

## Important Notes / Limitations

- This project is intended for **personal, non-commercial use** as a custom digital gift and does not include any authentication, data storage, or backend — all state (aside from the language preference) resets on page reload.
- Photo assets are **not bundled** with the project and must be supplied manually in `assets/photos/`.
- The header comment in `script.js` notes the script is built with **no security layer**, which is expected for a static personal page but means it should not be used to handle sensitive data.
- Ambient effects (floating hearts, cursor trails, confetti) automatically respect the visitor's OS-level `prefers-reduced-motion` setting.

## Future Improvements

- Externalize `loveConfig` into a separate JSON file for easier editing without touching JavaScript
- Add build tooling (e.g. minification/bundling) for production deployments
- Support additional languages beyond English and Amharic
- Add automated accessibility and cross-browser testing

## Contributing

This is a personal project template, but contributions, suggestions, and forks are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Open a pull request describing the change

## License

No license file is currently included in this repository. If you intend to share or open-source this project, consider adding a license (e.g. [MIT](https://choosealicense.com/licenses/mit/)) to clarify usage rights.

## Author / Developer Information

Built as a custom, personalized gift website. Update this section with your name and contact details (e.g. GitHub profile, email, portfolio) before publishing.

## Live Demo / Repository

No live demo or public repository link is currently associated with this project. Add links here once the site is deployed (e.g. via GitHub Pages, Netlify, or Vercel) and the repository is published.#   m y _ l o v e  
 