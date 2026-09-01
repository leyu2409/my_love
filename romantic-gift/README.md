# Your Romantic Gift Website 💌

Everything is ready to go — open `index.html` in any browser and it works, no setup required. The page currently shows soft placeholder icons where photos and music go, so you can personalize it before sending it.

## 1. Add your photos
Drop your images into `assets/photos/` and name them to match `script.js`, or just point `script.js` at whatever filenames you use:

```js
photos: [
  { src: "assets/photos/photo1.jpg", caption: "A beautiful memory ❤️" },
  { src: "assets/photos/photo2.jpg", caption: "One of my favorite moments with you 🥰" },
  // add as many as you like — the gallery and slideshow both read from this list
],
```

If a file is missing or misnamed, that spot just shows a soft placeholder instead of breaking the page — so it's safe to add photos gradually.

## 2. Add music (optional)
Put an MP3 at `assets/music/romantic-song.mp3`. If you skip this, the music player quietly hides itself instead of showing a broken button.

## 3. Personalize the text
Open `script.js` — everything you'd want to change lives in the `loveConfig` object at the top:
- `girlfriendName` / `yourName`
- `welcomeMessage`, `letter`, `finalMessage`
- `timeline`, `reasons`, `emojis` — arrays you can add to, remove from, or reword freely
- `anniversaryDate` and `showLoveCounter` — set a real date to show a running "time together" counter, or set `showLoveCounter: false` to hide it
- `occasion` — `"romantic"`, `"birthday"`, or `"anniversary"` swaps a couple of headline phrases automatically

## 4. Send it
Zip the whole `romantic-gift` folder and send it, or host it for free on a static host (Netlify, Vercel, GitHub Pages) and just share the link — either way, no backend or install step is needed.

## Notes
- Respects `prefers-reduced-motion` for anyone who has that turned on.
- Autoplay music only starts after the "Open Your Gift" click, per browser rules.
- Click the small heart in the top-left corner 5 times for a hidden message.
