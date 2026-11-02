# For You ❤️ — A Personalized Love Story Website

A single-page romantic gift website built with plain HTML, CSS and JavaScript. It tells a personal story through a gift-opening intro, memories, photos, videos, a love letter, daily messages and small interactive moments. It supports **English and Amharic**. There is no build step, framework or backend.

## Features

- **Gift intro and welcome** — tap the gift, then a typewriter message appears.
- **English / Amharic switcher** — updates the interface and all configured content, and remembers the choice in `localStorage`.
- **Timeline** — memory cards that reveal as you scroll.
- **Love counter** — completed months, plus days, hours, minutes and seconds since `anniversaryDate`.
- **Photo gallery and lightbox** — keyboard arrows, Esc to close, double-tap hearts.
- **Photo slideshow** — auto-rotates, with arrows and dots.
- **Video gallery** — local MP4 files with native controls, no autoplay.
- **Reasons, emoji messages and heart-tap counter** — with milestone messages.
- **Love letter** — envelope plus a full-screen modal.
- **Final surprise** — confetti reveal.
- **Secret message** — click the "For You" logo 5 times.
- **Daily Love Messages** — dated notes, sorted by date, with today's note highlighted.
- **Responsive and accessible** — mobile menu, skip link, ARIA labels, focus handling, and `prefers-reduced-motion` support.
- **Missing-photo fallback** — a 📷 placeholder appears if an image can't load.

There is no background music.

## Project structure

```text
my_love/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── photos/     photo1.jpg … photo30.jpg
    └── videos/     your .mp4 files
```

## Run locally

Keep `index.html`, `style.css`, `script.js` and `assets/` together, then either open `index.html` directly or serve the folder:

```bash
# Python 3
python -m http.server 8000

# or Node.js (no install needed)
npx serve .
```

Visit `http://localhost:8000` (the `npx serve` address is printed in the terminal).

## Personalize

Everything is configured in the `loveConfig` object at the top of `script.js`.

| Setting | Purpose |
| --- | --- |
| `girlfriendName`, `yourName` | Name shown in the welcome, closing section and page title |
| `welcomeMessage` | Typewriter text (`en` / `am`) |
| `anniversaryDate` | Start date for the counter, e.g. `"2026-06-01T00:00:00"` |
| `showLoveCounter` | Show or hide the counter |
| `occasion` | `"romantic"`, `"birthday"` or `"anniversary"` (changes the closing headline) |
| `dailyMessages` | Dated notes: `date` (`YYYY-MM-DD`), `topic`, `description`, `name` |
| `letter` | Full love letter (`en` / `am`) |
| `photos` | List of `{ src, caption }`, used by the gallery, slideshow and lightbox |
| `videos` | List of `{ src, title: {en, am}, poster? }` |
| `finalPhotoIndex` | Zero-based index of the closing photo |
| `timeline`, `reasons`, `emojis` | Language-specific arrays |
| `finalMessage` | Closing headline (`en` / `am`) |

Provide both `en` and `am` values for any text that should change with the language switcher. Use plain text only; some values are inserted into the page as HTML, so don't paste untrusted markup.

### Photos

Put images in `assets/photos/` and list them in `loveConfig.photos`:

```js
{ src: "assets/photos/photo1.jpg", caption: "A favorite memory. ❤️" }
```

Captions double as image alt text and lightbox captions. Use reasonably sized JPEGs.

### Videos

Put MP4 files in `assets/videos/` and add entries to `loveConfig.videos`:

```js
{
  src: "assets/videos/memory-01.mp4",
  poster: "assets/photos/photo1.jpg", // optional
  title: { en: "A favorite moment ❤️", am: "ውድ ጊዜያችን ❤️" }
}
```

## Deploy to GitHub Pages

1. Commit `index.html`, `style.css`, `script.js`, `README.md` and `assets/` to a repository.
2. Go to **Settings → Pages**, choose **Deploy from a branch**, select your branch and `/ (root)`, then save.
3. Open the URL GitHub shows and check that photos and videos load.

Anything in a public repository is public, including photos and personal messages. Only publish what you're comfortable sharing.

## Manual test checklist

There is no automated test suite. After editing, check:

- The gift opens and the welcome message types out.
- Both languages work, including the heart-tap messages and the closing message.
- The lightbox, slideshow, letter modal, secret message, counter and reveal all work.
- The mobile menu opens and closes, and the layout holds at 320–390px.
- The browser console shows no errors and no local files return 404.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Blank or unstyled page | `style.css` and `script.js` must sit next to `index.html`, with exact filenames. |
| Photo shows 📷 | The path or filename (including capitalization) doesn't match a file in `assets/photos/`. |
| Video section says to add MP4 files | `loveConfig.videos` is empty or the file path is wrong. |
| Counter missing | `showLoveCounter` must be `true` and `anniversaryDate` a valid date. |
| Page broke after editing text | Strings that span several lines must use backticks (`` ` ``), not `"` or `'`. Run `node --check script.js` to find the line. |
| Language resets on reload | The browser blocks `localStorage`; the page falls back to English. |
| Fonts look different offline | Google Fonts need a connection; system fonts are used as fallback. |

## Tech

HTML5, CSS3 (custom properties, Flexbox, Grid), vanilla JavaScript (ES6+), the Intersection Observer and Web Animations APIs, and Google Fonts (Cormorant Garamond, Nunito Sans). There are no runtime dependencies.

## License

No license file is included, so reuse terms are unspecified. Add one before sharing the project for others to reuse.

---

Made as a personal, customizable digital gift. Replace the names, dates, messages and photos with your own story.