/* =========================================================
   ROMANTIC GIFT WEBSITE — SCRIPT
   Everything you'll want to personalize lives in loveConfig
   below. Replace names, photos, captions, and messages there.
   ========================================================= */

const loveConfig = {
  girlfriendName: "My Love",
  yourName: "Me",

  // Shown mid-way through the typing animation on the welcome screen
  welcomeMessage:
    "This little website is just for you.\n\nBecause sometimes...\nwords aren't enough to explain\nhow special someone is. 💕",

  // Used for the optional "love counter" — set to your real start date (YYYY-MM-DDTHH:mm:ss)
  anniversaryDate: "2026-01-01T00:00:00",
  showLoveCounter: true,

  // "romantic" | "birthday" | "anniversary" — changes a couple of headline strings
  occasion: "romantic",

  finalMessage: "I Love You",

  // The love letter — edit freely, use \n for line breaks
  letter:
    "My Love,\n\n" +
    "I don't always know how to put my feelings into words, but I want you to know something.\n\n" +
    "You are one of the most beautiful parts of my life.\n\n" +
    "Your smile makes ordinary moments special. Your presence makes difficult days easier. And every memory with you means more to me than I can explain.\n\n" +
    "Thank you for being you.\n\n" +
    "No matter how many photos we take, how many memories we create, or how many words I write, I will always have more to say about how special you are to me.\n\n" +
    "Always yours,\n" +
    "Me",

  // Photos used across the gallery, slideshow, and final photo.
  // Replace src with your own files in assets/photos/. Missing files fall back
  // to a soft placeholder automatically, so nothing breaks if one is missing.
  photos: [
    { src: "assets/photos/photo1.jpg", caption: "A beautiful memory ❤️" },
    { src: "assets/photos/photo2.jpg", caption: "One of my favorite moments with you 🥰" },
    { src: "assets/photos/photo3.jpg", caption: "This smile is everything. 😊❤️" },
    { src: "assets/photos/photo4.jpg", caption: "I could look at this all day." },
    { src: "assets/photos/photo5.jpg", caption: "Us, just being us." },
  ],

  // Which photo (0-indexed, from the array above) to use as the final circular photo
  finalPhotoIndex: 0,

  timeline: [
    { icon: "✨", title: "The Beginning", text: "The moment everything started..." },
    { icon: "❤️", title: "Our First Special Memory", text: "A moment I'll never forget." },
    { icon: "🥰", title: "The Beautiful Moments", text: "Every moment with you became a memory." },
    { icon: "🌹", title: "Today", text: "And I'm still grateful to have you in my life." },
  ],

  reasons: [
    { icon: "😊", title: "Your Smile", text: "Because it can instantly make my day better." },
    { icon: "🥰", title: "Your Personality", text: "You have something about you that is impossible to replace." },
    { icon: "❤️", title: "Your Heart", text: "You care deeply, and that's beautiful." },
    { icon: "✨", title: "Your Presence", text: "Everything feels a little better when you're around." },
    { icon: "🌹", title: "Simply You", text: "I don't need a reason. I just love you." },
  ],

  emojis: [
    { symbol: "❤️", message: "You have my heart." },
    { symbol: "🥰", message: "You make me smile." },
    { symbol: "😘", message: "Sending you a kiss." },
    { symbol: "💕", message: "Every day, a little more." },
    { symbol: "🌹", message: "You are beautiful." },
    { symbol: "✨", message: "You make my life brighter." },
    { symbol: "🫶", message: "Always here for you." },
    { symbol: "😊", message: "You're my favorite reason to smile." },
    { symbol: "💖", message: "Endlessly grateful for you." },
    { symbol: "🌸", message: "Gentle, like you." },
    { symbol: "💋", message: "One for you." },
  ],
};

// Occasion tweaks (birthday / anniversary), applied non-destructively
if (loveConfig.occasion === "birthday") {
  loveConfig.finalMessage = `Happy Birthday, ${loveConfig.girlfriendName} 🎂❤️`;
} else if (loveConfig.occasion === "anniversary") {
  loveConfig.finalMessage = "Happy Anniversary ❤️";
}

/* ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  applyNames();
  setupHeartField(prefersReducedMotion);
  setupNav();
  setupScrollProgress();
  setupGiftOpening(prefersReducedMotion);
  setupWelcomeTyping();
  setupTimeline();
  setupGallery();
  setupLightbox();
  setupSlideshow();
  setupLetter();
  setupReasons();
  setupEmojiField();
  setupHeartTap(prefersReducedMotion);
  setupLoveCounter();
  setupSurprise(prefersReducedMotion);
  setupFinalPhoto();
  setupSecretMessage();
  setupMusicPlayer();
  setupCursorEffects(prefersReducedMotion);
});

/* ---------- helpers ---------- */

function applyNames() {
  document.querySelectorAll("#herNameWelcome, #herNameFinal").forEach((el) => {
    el.textContent = loveConfig.girlfriendName;
  });
  document.title = `For ${loveConfig.girlfriendName} ❤️`;
}

// Central place to build an <img> that gracefully falls back if the file
// is missing, so a missing photo never breaks the page.
function buildImageOrFallback(src, alt) {
  const img = document.createElement("img");
  img.alt = alt || "";
  img.loading = "lazy";
  img.src = src;
  img.addEventListener("error", () => {
    const fallback = document.createElement("div");
    fallback.className = "photo-fallback";
    fallback.textContent = "📷";
    img.replaceWith(fallback);
  });
  return img;
}

/* ---------- ambient floating hearts (site-wide, capped for performance) ---------- */

function setupHeartField(reduced) {
  const field = document.getElementById("heart-field");
  const symbols = ["❤", "💕", "💖", "💗", "💓", "🥰", "✨"];
  const MAX_PARTICLES = reduced ? 0 : window.innerWidth < 600 ? 10 : 20;
  if (MAX_PARTICLES === 0) return;

  function spawn() {
    if (field.childElementCount >= MAX_PARTICLES) return;
    const span = document.createElement("span");
    span.className = "floaty";
    span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    const size = 12 + Math.random() * 20;
    const duration = 8 + Math.random() * 10;
    const left = Math.random() * 100;
    const drift = (Math.random() - 0.5) * 120 + "px";
    span.style.left = left + "vw";
    span.style.fontSize = size + "px";
    span.style.animationDuration = duration + "s";
    span.style.setProperty("--drift", drift);
    field.appendChild(span);
    setTimeout(() => span.remove(), duration * 1000 + 200);
  }

  setInterval(spawn, 1200);
  for (let i = 0; i < 5; i++) setTimeout(spawn, i * 300);
}

/* ---------- navigation ---------- */

function setupNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => links.classList.remove("is-open"));
  });

  const sections = [...links.querySelectorAll("a")]
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = "#" + entry.target.id;
          links.querySelectorAll("a").forEach((a) => {
            a.classList.toggle("is-active", a.getAttribute("href") === id);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px" }
  );
  sections.forEach((s) => observer.observe(s));
}

function setupScrollProgress() {
  const fill = document.getElementById("progressFill");
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    fill.style.width = height > 0 ? `${(scrollTop / height) * 100}%` : "0%";
  });
}

/* ---------- gift opening ---------- */

function setupGiftOpening(reduced) {
  const openingScreen = document.getElementById("opening");
  const welcomeScreen = document.getElementById("welcome");
  const giftBox = document.getElementById("giftBox");
  const openBtn = document.getElementById("openGiftBtn");
  const audio = document.getElementById("bgAudio");

  function openGift() {
    if (giftBox.classList.contains("is-open")) return;
    giftBox.classList.add("is-open");

    if (!reduced) burstParticles(giftBox);

    // Try to start music softly now that we have a user gesture.
    audio.volume = 0.6;
    audio.play().catch(() => {
      /* file may be missing or browser blocked it — that's fine, controls remain manual */
    });
    updateMusicPlayingState(true);

    setTimeout(() => {
      openingScreen.hidden = true;
      welcomeScreen.hidden = false;
      welcomeScreen.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
      startTypewriter();
    }, reduced ? 150 : 900);
  }

  giftBox.addEventListener("click", openGift);
  openBtn.addEventListener("click", openGift);
}

function burstParticles(originEl) {
  const rect = originEl.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;
  const symbols = ["❤", "💕", "✨", "💖"];

  for (let i = 0; i < 24; i++) {
    const p = document.createElement("span");
    p.className = "burst-particle";
    p.textContent = symbols[i % symbols.length];
    p.style.left = originX + "px";
    p.style.top = originY + "px";
    p.style.fontSize = 14 + Math.random() * 18 + "px";
    document.body.appendChild(p);

    const angle = (Math.PI * 2 * i) / 24 + Math.random() * 0.3;
    const distance = 120 + Math.random() * 160;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    p.animate(
      [
        { transform: "translate(0,0) scale(0.6)", opacity: 1 },
        { transform: `translate(${dx}px, ${dy}px) scale(1)`, opacity: 0 },
      ],
      { duration: 900 + Math.random() * 400, easing: "cubic-bezier(.22,.9,.35,1)" }
    ).onfinish = () => p.remove();
  }
}

/* ---------- welcome typing animation ---------- */

function startTypewriter() {
  const el = document.getElementById("typewriter");
  if (el.dataset.started) return;
  el.dataset.started = "true";

  const text = loveConfig.welcomeMessage;
  const cursor = document.createElement("span");
  cursor.className = "cursor";
  let i = 0;

  function tick() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      el.appendChild(cursor);
      i++;
      setTimeout(tick, 28);
    }
  }
  tick();
}

function setupWelcomeTyping() {
  document.getElementById("continueBtn").addEventListener("click", () => {
    document.getElementById("story").scrollIntoView({ behavior: "smooth" });
  });
}

/* ---------- timeline ---------- */

function setupTimeline() {
  const container = document.getElementById("timeline");
  loveConfig.timeline.forEach((item) => {
    const el = document.createElement("div");
    el.className = "timeline__item";
    el.innerHTML = `
      <div class="timeline__card">
        <h3>${item.icon} ${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.text)}</p>
      </div>`;
    container.appendChild(el);
  });

  const items = container.querySelectorAll(".timeline__item");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );
  items.forEach((el) => observer.observe(el));
}

/* ---------- gallery ---------- */

function setupGallery() {
  const grid = document.getElementById("masonryGallery");
  loveConfig.photos.forEach((photo, index) => {
    const card = document.createElement("button");
    const isPolaroid = index % 3 === 0;
    card.className = "photo-card" + (isPolaroid ? " photo-card--polaroid" : "");
    card.style.setProperty("--tilt", (Math.random() * 4 - 2).toFixed(1) + "deg");
    card.setAttribute("aria-label", `Open photo ${index + 1}: ${photo.caption}`);
    card.dataset.index = String(index);

    card.appendChild(buildImageOrFallback(photo.src, photo.caption));

    const caption = document.createElement("span");
    caption.className = "photo-card__caption";
    caption.textContent = photo.caption;
    card.appendChild(caption);

    card.addEventListener("click", () => openLightbox(index));

    let lastTap = 0;
    card.addEventListener("click", (e) => {
      const now = Date.now();
      if (now - lastTap < 350) spawnDoubleTapHearts(e.clientX, e.clientY);
      lastTap = now;
    });

    grid.appendChild(card);
  });
}

function spawnDoubleTapHearts(x, y) {
  for (let i = 0; i < 6; i++) {
    const h = document.createElement("span");
    h.className = "double-tap-heart";
    h.textContent = "❤";
    h.style.left = x + (Math.random() * 40 - 20) + "px";
    h.style.top = y + (Math.random() * 20 - 10) + "px";
    h.style.fontSize = 18 + Math.random() * 16 + "px";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 950);
  }
}

/* ---------- lightbox ---------- */

let currentLightboxIndex = 0;

function openLightbox(index) {
  currentLightboxIndex = index;
  renderLightbox();
  const lightbox = document.getElementById("lightbox");
  lightbox.hidden = false;
  document.getElementById("lightboxClose").focus();
  document.body.style.overflow = "hidden";
}

function renderLightbox() {
  const photo = loveConfig.photos[currentLightboxIndex];
  const img = document.getElementById("lightboxImg");
  img.src = photo.src;
  img.alt = photo.caption;
  img.onerror = () => {
    img.style.display = "none";
  };
  img.onload = () => {
    img.style.display = "block";
  };
  document.getElementById("lightboxCaption").textContent = photo.caption;
  document.getElementById("lightboxCounter").textContent = `${currentLightboxIndex + 1} / ${loveConfig.photos.length}`;
}

function closeLightbox() {
  document.getElementById("lightbox").hidden = true;
  document.body.style.overflow = "";
}

function setupLightbox() {
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", () => {
    currentLightboxIndex = (currentLightboxIndex - 1 + loveConfig.photos.length) % loveConfig.photos.length;
    renderLightbox();
  });
  document.getElementById("lightboxNext").addEventListener("click", () => {
    currentLightboxIndex = (currentLightboxIndex + 1) % loveConfig.photos.length;
    renderLightbox();
  });
  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    const lightbox = document.getElementById("lightbox");
    if (lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") document.getElementById("lightboxPrev").click();
    if (e.key === "ArrowRight") document.getElementById("lightboxNext").click();
  });
}

/* ---------- slideshow ---------- */

function setupSlideshow() {
  const track = document.getElementById("slideshowTrack");
  const dotsWrap = document.getElementById("slideDots");
  let current = 0;
  let timer = null;

  loveConfig.photos.forEach((photo, i) => {
    const slide = document.createElement("div");
    slide.className = "slide" + (i === 0 ? " is-active" : "");
    slide.appendChild(buildImageOrFallback(photo.src, photo.caption));
    const cap = document.createElement("div");
    cap.className = "slide__caption";
    cap.textContent = `Memory ${String(i + 1).padStart(2, "0")} — ${photo.caption}`;
    slide.appendChild(cap);
    track.appendChild(slide);

    const dot = document.createElement("button");
    dot.setAttribute("aria-label", `Go to memory ${i + 1}`);
    if (i === 0) dot.classList.add("is-active");
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  const slides = track.querySelectorAll(".slide");
  const dots = dotsWrap.querySelectorAll("button");

  function goTo(index) {
    slides[current].classList.remove("is-active");
    dots[current].classList.remove("is-active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("is-active");
    dots[current].classList.add("is-active");
    restart();
  }

  function restart() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 4500);
  }

  document.getElementById("slidePrev").addEventListener("click", () => goTo(current - 1));
  document.getElementById("slideNext").addEventListener("click", () => goTo(current + 1));

  if (slides.length > 1) restart();
}

/* ---------- love letter ---------- */

function setupLetter() {
  document.getElementById("letterText").textContent = loveConfig.letter;
  const envelope = document.getElementById("envelope");
  const btn = document.getElementById("openLetterBtn");

  btn.addEventListener("click", () => {
    const opening = !envelope.classList.contains("is-open");
    envelope.classList.toggle("is-open");
    btn.textContent = opening ? "Close Letter" : "Open My Letter";
  });
}

/* ---------- reasons ---------- */

function setupReasons() {
  const grid = document.getElementById("reasonsGrid");
  loveConfig.reasons.forEach((reason) => {
    const card = document.createElement("button");
    card.className = "reason-card";
    card.innerHTML = `
      <span class="reason-card__icon" aria-hidden="true">${reason.icon}</span>
      <h3>${escapeHTML(reason.title)}</h3>
      <p>${escapeHTML(reason.text)}</p>`;
    card.addEventListener("click", () => {
      card.classList.toggle("is-tapped");
    });
    grid.appendChild(card);
  });
}

/* ---------- emoji field ---------- */

function setupEmojiField() {
  const field = document.getElementById("emojiField");
  const message = document.getElementById("emojiMessage");

  loveConfig.emojis.forEach((item) => {
    const btn = document.createElement("button");
    btn.className = "emoji-btn";
    btn.textContent = item.symbol;
    btn.setAttribute("aria-label", item.symbol);
    btn.addEventListener("click", (e) => {
      btn.classList.remove("is-tapped");
      void btn.offsetWidth; // restart animation
      btn.classList.add("is-tapped");
      message.textContent = `${item.symbol} ${item.message}`;
      spawnDoubleTapHearts(e.clientX, e.clientY);
    });
    field.appendChild(btn);
  });
}

/* ---------- heart tap ---------- */

function setupHeartTap(reduced) {
  const heart = document.getElementById("heartTap");
  const countEl = document.getElementById("heartCount");
  const msgEl = document.getElementById("heartMsg");
  let count = 0;

  const milestones = [
    [1, "❤️ My heart chooses you."],
    [5, "You keep coming back for more. 🥰"],
    [15, "Okay... I think you've stolen my heart completely. 😂❤️"],
    [30, "At this point it's officially, legally yours. 💍😆"],
  ];

  heart.addEventListener("click", (e) => {
    count++;
    countEl.textContent = String(count);
    heart.classList.remove("is-beating");
    void heart.offsetWidth;
    heart.classList.add("is-beating");

    const rect = heart.getBoundingClientRect();
    if (!reduced) {
      for (let i = 0; i < 3; i++) {
        const fh = document.createElement("span");
        fh.className = "flying-heart";
        fh.textContent = "❤";
        fh.style.left = rect.left + rect.width / 2 + (Math.random() * 30 - 15) + "px";
        fh.style.top = rect.top + "px";
        fh.style.fontSize = 16 + Math.random() * 14 + "px";
        document.body.appendChild(fh);
        setTimeout(() => fh.remove(), 1450);
      }
    }

    const match = [...milestones].reverse().find(([n]) => count >= n);
    if (match) msgEl.textContent = match[1];
  });
}

/* ---------- love counter ---------- */

function setupLoveCounter() {
  if (!loveConfig.showLoveCounter) return;
  const section = document.getElementById("loveCounter");
  const start = new Date(loveConfig.anniversaryDate);
  if (isNaN(start.getTime())) return;

  section.hidden = false;
  const els = {
    d: document.getElementById("cDays"),
    h: document.getElementById("cHours"),
    m: document.getElementById("cMinutes"),
    s: document.getElementById("cSeconds"),
  };

  function tick() {
    const diff = Math.max(0, Date.now() - start.getTime());
    const totalSeconds = Math.floor(diff / 1000);
    els.d.textContent = String(Math.floor(totalSeconds / 86400));
    els.h.textContent = String(Math.floor((totalSeconds % 86400) / 3600));
    els.m.textContent = String(Math.floor((totalSeconds % 3600) / 60));
    els.s.textContent = String(totalSeconds % 60);
  }
  tick();
  setInterval(tick, 1000);
}

/* ---------- surprise reveal ---------- */

function setupSurprise(reduced) {
  document.getElementById("herNameFinal").textContent = loveConfig.girlfriendName;
  const revealBtn = document.getElementById("revealBtn");
  const pre = document.getElementById("surprisePre");
  const reveal = document.getElementById("surpriseReveal");

  const finalTitle = reveal.querySelector(".surprise__final");
  if (loveConfig.occasion !== "romantic") {
    finalTitle.innerHTML = escapeHTML(loveConfig.finalMessage);
  }

  revealBtn.addEventListener("click", () => {
    pre.hidden = true;
    reveal.hidden = false;
    reveal.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
    if (!reduced) {
      launchConfetti();
      burstParticles(revealBtn);
    }
  });
}

function launchConfetti() {
  const colors = ["#c2185b", "#d4af37", "#f7c6d9", "#ffffff"];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.width = piece.style.height = 6 + Math.random() * 6 + "px";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    piece.style.animationDuration = 2.5 + Math.random() * 2 + "s";
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 5000);
  }
}

/* ---------- final photo ---------- */

function setupFinalPhoto() {
  const wrap = document.getElementById("finalPhoto");
  const photo = loveConfig.photos[loveConfig.finalPhotoIndex] || loveConfig.photos[0];
  if (!photo) return;
  const img = document.getElementById("finalPhotoImg");
  img.src = photo.src;
  img.alt = photo.caption;
  img.addEventListener("error", () => {
    wrap.innerHTML = '<div class="photo-fallback" style="border-radius:50%;height:100%;">📷</div>';
  });
}

/* ---------- secret easter egg ---------- */

function setupSecretMessage() {
  const logo = document.getElementById("secretLogo");
  const modal = document.getElementById("secretModal");
  const closeBtn = document.getElementById("secretClose");
  let taps = 0;

  logo.addEventListener("click", () => {
    taps++;
    if (taps >= 5) {
      modal.hidden = false;
      taps = 0;
    }
  });

  closeBtn.addEventListener("click", () => (modal.hidden = true));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.hidden = true;
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) modal.hidden = true;
  });
}

/* ---------- music player ---------- */

function updateMusicPlayingState(isPlaying) {
  document.getElementById("musicToggle").classList.toggle("is-playing", isPlaying);
  document.getElementById("musicToggle").setAttribute("aria-pressed", String(isPlaying));
  document.getElementById("musicPlay").textContent = isPlaying ? "❚❚" : "▶";
}

function setupMusicPlayer() {
  const toggleBtn = document.getElementById("musicToggle");
  const panel = document.getElementById("musicPanel");
  const playBtn = document.getElementById("musicPlay");
  const volume = document.getElementById("musicVolume");
  const audio = document.getElementById("bgAudio");

  audio.addEventListener("error", () => {
    // No music file provided — hide the player rather than show a broken control.
    document.getElementById("musicPlayer").style.display = "none";
  });

  toggleBtn.addEventListener("click", () => {
    panel.classList.toggle("is-open");
  });

  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().catch(() => {});
      updateMusicPlayingState(true);
    } else {
      audio.pause();
      updateMusicPlayingState(false);
    }
  });

  volume.addEventListener("input", () => {
    audio.volume = Number(volume.value);
  });
  audio.volume = Number(volume.value);
}

/* ---------- cursor sparkle/heart trail (desktop only) ---------- */

function setupCursorEffects(reduced) {
  const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  if (reduced || isTouch) return;

  let lastSpawn = 0;
  document.addEventListener("mousemove", (e) => {
    const now = Date.now();
    if (now - lastSpawn < 60) return;
    lastSpawn = now;
    const dot = document.createElement("span");
    dot.textContent = Math.random() > 0.5 ? "✨" : "❤";
    dot.style.position = "fixed";
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";
    dot.style.pointerEvents = "none";
    dot.style.zIndex = "999";
    dot.style.fontSize = "12px";
    dot.style.color = "rgba(247,198,217,0.8)";
    dot.style.transform = "translate(-50%,-50%)";
    document.body.appendChild(dot);
    dot.animate(
      [
        { opacity: 0.8, transform: "translate(-50%,-50%) scale(1)" },
        { opacity: 0, transform: "translate(-50%,-50%) scale(0.4) translateY(-10px)" },
      ],
      { duration: 500 }
    ).onfinish = () => dot.remove();
  });

  document.addEventListener("click", (e) => {
    const ripple = document.createElement("span");
    ripple.style.position = "fixed";
    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";
    ripple.style.width = ripple.style.height = "10px";
    ripple.style.border = "1px solid rgba(194,24,91,0.6)";
    ripple.style.borderRadius = "50%";
    ripple.style.pointerEvents = "none";
    ripple.style.zIndex = "999";
    ripple.style.transform = "translate(-50%,-50%)";
    document.body.appendChild(ripple);
    ripple.animate(
      [
        { opacity: 1, width: "10px", height: "10px" },
        { opacity: 0, width: "50px", height: "50px" },
      ],
      { duration: 500 }
    ).onfinish = () => ripple.remove();
  });
}

/* ---------- utils ---------- */

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
