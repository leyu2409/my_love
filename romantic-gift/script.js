/* =========================================================
   ROMANTIC GIFT WEBSITE — SCRIPT
   Fully optimized, multilingual (EN/AM), no security
   ========================================================= */

// ========== CONFIGURATION ==========
const loveConfig = {
  girlfriendName: "My Love",
  yourName: "Me",

  welcomeMessage: {
    en: "This little website is just for you.\n\nBecause sometimes...\nwords aren't enough to explain\nhow special someone is. 💕",
    am: "ይህ ትንሽ ድርጣቢያ ለአንተ ብቻ ነው።\n\nምክንያቱም አንዳንድ ጊዜ...\nቃላት ለማብራራት አይበቁም\nአንድ ሰው ምን ያህል ልዩ እንደሆነ። 💕"
  },

  anniversaryDate: "2026-01-01T00:00:00",
  showLoveCounter: true,
  occasion: "romantic",

  letter: {
    en: "My Love,\n\nI don't always know how to put my feelings into words, but I want you to know something.\n\nYou are one of the most beautiful parts of my life.\n\nYour smile makes ordinary moments special. Your presence makes difficult days easier. And every memory with you means more to me than I can explain.\n\nThank you for being you.\n\nNo matter how many photos we take, how many memories we create, or how many words I write, I will always have more to say about how special you are to me.\n\nAlways yours,\nMe",
    am: "ውዷ ልቤ፣\n\nስሜቴን በቃላት እንዴት እንደምገልጽ ሁልጊዜ አላውቅም፣ ግን አንድ ነገር እንድታውቂ እፈልጋለሁ።\n\nአንቺ ከህይወቴ እጅግ በጣም ውብ ከሆኑት ክፍሎች አንዷ ነሽ።\n\nፈገግሻሽ ተራ ጊዜያትን ልዩ ያደርጋቸዋል። መገኘትሽ አስቸጋሪ ቀናትን ያቃልላቸዋል። እና ከአንቺ ጋር ያለኝ እያንዳንዱ ትዝታ ከምገልጸው በላይ ዋጋ አለው።\n\nአንቺ እንደሆንሽ ስለሆንሽ እናመሰግናለን።\n\nምንም ያህል ፎቶዎችን ብንወስድ፣ ምንም ያህል ትዝታዎችን ብንፈጥር፣ ወይም ምንም ያህል ቃላትን ብጽፍ፣ ለአንቺ ምን ያህል ልዩ እንደሆንሽ ለመናገር ሁልጊዜ ተጨማሪ ነገር ይኖረኛል።\n\nሁልጊዜ የአንቺ፣\nእኔ"
  },

  photos: [
  { src: "assets/photos/photo1.jpg", caption: "A beautiful memory ❤️" },
  { src: "assets/photos/photo2.jpg", caption: "One of my favorite moments with you 🥰" },
  { src: "assets/photos/photo3.jpg", caption: "This smile is everything. 😊❤️" },
  { src: "assets/photos/photo4.jpg", caption: "I could look at this all day. 💕" },
  { src: "assets/photos/photo5.jpg", caption: "Us, just being us. 🥰" },
  { src: "assets/photos/photo6.jpg", caption: "Every moment with you is special. ❤️" },
  { src: "assets/photos/photo7.jpg", caption: "A memory I will always treasure. ✨" },
  { src: "assets/photos/photo8.jpg", caption: "You make every moment brighter. 🌸❤️" },
  { src: "assets/photos/photo9.jpg", caption: "Forever grateful for this moment. 💖" },
  { src: "assets/photos/photo10.jpg", caption: "Here’s to many more memories together. 💕🥰" },
],

  finalPhotoIndex: 0,

  timeline: {
    en: [
      { icon: "✨", title: "The Beginning", text: "The moment everything started..." },
      { icon: "❤️", title: "Our First Special Memory", text: "A moment I'll never forget." },
      { icon: "🥰", title: "The Beautiful Moments", text: "Every moment with you became a memory." },
      { icon: "🌹", title: "Today", text: "And I'm still grateful to have you in my life." }
    ],
    am: [
      { icon: "✨", title: "መጀመሪያ", text: "ሁሉም ነገር የተጀመረበት ጊዜ..." },
      { icon: "❤️", title: "የመጀመሪያ ልዩ ትዝታችን", text: "ፈጽሞ የማልረሳው ጊዜ።" },
      { icon: "🥰", title: "ውብ ጊዜያት", text: "ከአንቺ ጋር ያለኝ እያንዳንዱ ጊዜ ትዝታ ሆነ።" },
      { icon: "🌹", title: "ዛሬ", text: "እና አሁንም አንቺን በህይወቴ ውስጥ በማግኘቴ ደስተኛ ነኝ።" }
    ]
  },

  reasons: {
    en: [
      { icon: "😊", title: "Your Smile", text: "Because it can instantly make my day better." },
      { icon: "🥰", title: "Your Personality", text: "You have something about you that is impossible to replace." },
      { icon: "❤️", title: "Your Heart", text: "You care deeply, and that's beautiful." },
      { icon: "✨", title: "Your Presence", text: "Everything feels a little better when you're around." },
      { icon: "🌹", title: "Simply You", text: "I don't need a reason. I just love you." }
    ],
    am: [
      { icon: "😊", title: "ፈገግሻሽ", text: "ምክንያቱም ቀኔን ወዲያውኑ ሊያሻሽል ይችላል።" },
      { icon: "🥰", title: "ባህርይሽ", text: "አንቺ ልትተካ የማትችል ነገር አለሽ።" },
      { icon: "❤️", title: "ልብሽ", text: "በጥልቅ ትጨነቂያለሽ፣ ያ ደግሞ ውብ ነው።" },
      { icon: "✨", title: "መገኘትሽ", text: "አንቺ በምትኖሪ ጊዜ ሁሉም ነገር የተሻለ ይሰማል።" },
      { icon: "🌹", title: "አንቺ ብቻሽ", text: "ምክንያት አያስፈልገኝም። እወድሻለሁ።" }
    ]
  },

  emojis: {
    en: [
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
      { symbol: "💋", message: "One for you." }
    ],
    am: [
      { symbol: "❤️", message: "ልቤ የአንቺ ነው።" },
      { symbol: "🥰", message: "ታስስቂኛለሽ።" },
      { symbol: "😘", message: "ሳምሻለሁ።" },
      { symbol: "💕", message: "በየቀኑ ትንሽ ተጨማሪ።" },
      { symbol: "🌹", message: "አንቺ ውብ ነሽ።" },
      { symbol: "✨", message: "ህይወቴን ታበሪሻለሽ።" },
      { symbol: "🫶", message: "ሁልጊዜ ለአንቺ እዚህ ነኝ።" },
      { symbol: "😊", message: "አንቺ የፈገግታ ተወዳጅ ምክንያቴ ነሽ።" },
      { symbol: "💖", message: "ለአንቺ ማለቂያ የሌለው አመስጋኝ ነኝ።" },
      { symbol: "🌸", message: "ልስላሴ፣ ልክ እንደ አንቺ።" },
      { symbol: "💋", message: "አንድ ሳም ለአንቺ።" }
    ]
  },

  finalMessage: {
    en: "I Love You",
    am: "እወድሻለሁ"
  }
};

// Occasion tweaks
if (loveConfig.occasion === "birthday") {
  loveConfig.finalMessage.en = `Happy Birthday, ${loveConfig.girlfriendName} 🎂❤️`;
  loveConfig.finalMessage.am = `መልካም ልደት፣ ${loveConfig.girlfriendName} 🎂❤️`;
} else if (loveConfig.occasion === "anniversary") {
  loveConfig.finalMessage.en = "Happy Anniversary ❤️";
  loveConfig.finalMessage.am = "መልካም አመታዊ በዓል ❤️";
}

// ========== TRANSLATIONS ==========
const translations = {
  en: {
    navHome: "Home",
    navMemories: "Memories",
    navGallery: "Gallery",
    navLetter: "Letter",
    navReasons: "Reasons",
    navSurprise: "Surprise",
    eyebrow: "✨ I made something special for you ✨",
    openingTitle: 'For the most<br>beautiful<br>person in my life <span class="heart-glyph">❤</span>',
    openGift: "Open Your Gift 🎁",
    giftHint: "(tap the box or the button)",
    welcomeHey: "Hey",
    continueStory: "Continue Our Story → ❤️",
    timelineTitle: 'Little Moments, Big Memories <span aria-hidden="true">💕</span>',
    galleryTitle: 'Our Beautiful Memories <span aria-hidden="true">📸❤️</span>',
    gallerySub: "Tap any photo to see it up close. Double-tap for a little love.",
    slideshowTitle: 'A Little Film Of Us <span aria-hidden="true">🎞️</span>',
    letterTitle: 'You Have A Letter <span aria-hidden="true">💌</span>',
    openLetter: "Open My Letter",
    reasonsTitle: "Reasons You're Special To Me ❤️",
    emojiTitle: 'A Few Things I Want To Say... <span aria-hidden="true">🥰</span>',
    emojiSub: "Tap any emoji.",
    heartTitle: 'Tap My Heart <span aria-hidden="true">❤️</span>',
    taps: "taps",
    counterTitle: "We've Been Creating Memories For",
    days: "days",
    hours: "hours",
    minutes: "minutes",
    seconds: "seconds",
    surpriseTitle: 'One Last Surprise <span aria-hidden="true">🎁</span>',
    revealBtn: "Reveal It ❤️",
    surpriseLead: "If I could give you one thing...",
    surpriseBody1: "I would give you the ability<br>to see yourself through my eyes.",
    surpriseBody2: "Then you would finally understand<br>how incredibly special you are to me. ❤️",
    finalMessage: 'I Love You <span class="heart-glyph">❤</span>',
    forever: "Forever & Always ✨",
    finalCaption: "My favorite person ❤️",
    finalThanks: "Thank you for being part of my story. 🫶",
    secretFound: "🤫 You found my secret...",
    secretMessage: "I love you more than this website could ever explain. ❤️",
    close: "Close"
  },
  am: {
    navHome: "መነሻ",
    navMemories: "ትዝታዎች",
    navGallery: "ማሳያ",
    navLetter: "ደብዳቤ",
    navReasons: "ምክንያቶች",
    navSurprise: "አስገራሚ",
    eyebrow: "✨ ልዩ ነገር ሠራሁልሽ ✨",
    openingTitle: 'ለአንቺ እጅግ<br>ውብ<br>ለሆነች ሰው <span class="heart-glyph">❤</span>',
    openGift: "ስጦታሽን ክፈቺ 🎁",
    giftHint: "(ሳጥኑን ወይም አዝራሩን ተንኩዪ)",
    welcomeHey: "ሰላም",
    continueStory: "ታሪካችንን ቀጥል → ❤️",
    timelineTitle: 'ትናንሽ ጊዜያት፣ ትላልቅ ትዝታዎች <span aria-hidden="true">💕</span>',
    galleryTitle: 'ውብ ትዝታዎቻችን <span aria-hidden="true">📸❤️</span>',
    gallerySub: "ማንኛውንም ፎቶ ለማየት ይንኩት። ለፍቅር ሁለት ጊዜ ይንኩት።",
    slideshowTitle: 'ትንሽ የእኛ ፊልም <span aria-hidden="true">🎞️</span>',
    letterTitle: 'ደብዳቤ አለሽ <span aria-hidden="true">💌</span>',
    openLetter: "ደብዳቤዬን ክፈቺ",
    reasonsTitle: "ለምን ልዩ እንደሆንሽ ምክንያቶች ❤️",
    emojiTitle: 'ማለት የምፈልጋቸው ጥቂት ነገሮች... <span aria-hidden="true">🥰</span>',
    emojiSub: "ማንኛውንም ኢሞጂ ተንኩዪ።",
    heartTitle: 'ልቤን ተንኪ <span aria-hidden="true">❤️</span>',
    taps: "መንካት",
    counterTitle: "ትዝታዎችን እየፈጠርን ያለነው",
    days: "ቀናት",
    hours: "ሰዓታት",
    minutes: "ደቂቃዎች",
    seconds: "ሰከንዶች",
    surpriseTitle: 'የመጨረሻ አስገራሚ <span aria-hidden="true">🎁</span>',
    revealBtn: "ግለጽ ❤️",
    surpriseLead: "አንድ ነገር ልሰጥሽ ብችል...",
    surpriseBody1: "በአይኔ ራስሽን<br>የምታይበትን ችሎታ እሰጥሻለሁ።",
    surpriseBody2: "ከዚያ በኋላ በመጨረሻ<br>ለእኔ ምን ያህል ልዩ እንደሆንሽ ትገነዘቢያለሽ። ❤️",
    finalMessage: 'እወድሻለሁ <span class="heart-glyph">❤</span>',
    forever: "ለዘላለም & ሁልጊዜ ✨",
    finalCaption: "የኔ ተወዳጅ ሰው ❤️",
    finalThanks: "በታሪኬ ውስጥ ስለነበርሽ እናመሰግናለን። 🫶",
    secretFound: "🤫 ሚስጥሬን አገኘሽ...",
    secretMessage: "ይህ ድርጣቢያ ሊገልጸው ከሚችለው በላይ እወድሻለሁ። ❤️",
    close: "ዝጋ"
  }
};

// ========== STATE ==========
let currentLang = localStorage.getItem('lang') || 'en';
let currentSlideIndex = 0;
let slideTimer = null;
let heartTapCount = 0;

// ========== DOM READY ==========
document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  
  applyLanguage(currentLang);
  setupLanguageSwitcher();
  applyNames();
  setupHeartField(prefersReducedMotion);
  setupNav();
  setupMobileMenu();
  setupScrollProgress();
  setupGiftOpening(prefersReducedMotion);
  setupWelcomeTyping();
  setupTimeline();
  setupGallery();
  setupLightbox();
  setupSlideshow();
  setupLetter();
  setupLetterModal();
  setupReasons();
  setupEmojiField();
  setupHeartTap(prefersReducedMotion);
  setupLoveCounter();
  setupSurprise(prefersReducedMotion);
  setupFinalPhoto();
  setupSecretMessage();
  setupCursorEffects(prefersReducedMotion);
});

// ========== LANGUAGE SYSTEM ==========
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  
  const t = translations[lang];
  if (!t) return;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });
  
  updateDynamicContent(lang);
}

function setupLanguageSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang !== currentLang) {
        applyLanguage(lang);
        // Update letter modal text if open
        const modalText = document.getElementById('letterModalText');
        if (modalText && document.getElementById('letterModal').classList.contains('is-open')) {
          modalText.textContent = loveConfig.letter[currentLang] || loveConfig.letter.en;
        }
      }
    });
  });
}

function updateDynamicContent(lang) {
  // Update timeline
  const timelineContainer = document.getElementById('timeline');
  if (timelineContainer) {
    const items = loveConfig.timeline[lang] || loveConfig.timeline.en;
    timelineContainer.innerHTML = '';
    items.forEach((item) => {
      const el = document.createElement('div');
      el.className = 'timeline__item';
      el.innerHTML = `
        <div class="timeline__card">
          <h3>${item.icon} ${escapeHTML(item.title)}</h3>
          <p>${escapeHTML(item.text)}</p>
        </div>`;
      timelineContainer.appendChild(el);
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    timelineContainer.querySelectorAll('.timeline__item').forEach(el => observer.observe(el));
  }
  
  // Update reasons
  const reasonsGrid = document.getElementById('reasonsGrid');
  if (reasonsGrid) {
    const reasons = loveConfig.reasons[lang] || loveConfig.reasons.en;
    reasonsGrid.innerHTML = '';
    reasons.forEach(reason => {
      const card = document.createElement('button');
      card.className = 'reason-card';
      card.innerHTML = `
        <span class="reason-card__icon" aria-hidden="true">${reason.icon}</span>
        <h3>${escapeHTML(reason.title)}</h3>
        <p>${escapeHTML(reason.text)}</p>`;
      card.addEventListener('click', () => card.classList.toggle('is-tapped'));
      reasonsGrid.appendChild(card);
    });
  }
  
  // Update emojis
  const emojiField = document.getElementById('emojiField');
  if (emojiField) {
    const emojis = loveConfig.emojis[lang] || loveConfig.emojis.en;
    emojiField.innerHTML = '';
    emojis.forEach(item => {
      const btn = document.createElement('button');
      btn.className = 'emoji-btn';
      btn.textContent = item.symbol;
      btn.setAttribute('aria-label', item.symbol);
      btn.addEventListener('click', (e) => {
        btn.classList.remove('is-tapped');
        void btn.offsetWidth;
        btn.classList.add('is-tapped');
        document.getElementById('emojiMessage').textContent = `${item.symbol} ${item.message}`;
        spawnDoubleTapHearts(e.clientX, e.clientY);
      });
      emojiField.appendChild(btn);
    });
  }
  
  // Update letter text in modal
  const modalText = document.getElementById('letterModalText');
  if (modalText) {
    modalText.textContent = loveConfig.letter[lang] || loveConfig.letter.en;
  }
  
  // Update envelope letter text
  const letterText = document.getElementById('letterText');
  if (letterText) {
    letterText.textContent = loveConfig.letter[lang] || loveConfig.letter.en;
  }
  
  // Update welcome message
  const typewriterEl = document.getElementById('typewriter');
  if (typewriterEl && !typewriterEl.dataset.started) {
    typewriterEl.dataset.text = loveConfig.welcomeMessage[lang] || loveConfig.welcomeMessage.en;
  }
  
  // Update final message
  const finalTitle = document.querySelector('.surprise__final');
  if (finalTitle && !document.getElementById('surpriseReveal').hidden) {
    finalTitle.innerHTML = (loveConfig.finalMessage[lang] || loveConfig.finalMessage.en) + ' <span class="heart-glyph">❤</span>';
  }
}

// ========== APPLY NAMES ==========
function applyNames() {
  document.querySelectorAll('#herNameWelcome, #herNameFinal').forEach(el => {
    el.textContent = loveConfig.girlfriendName;
  });
  document.title = `For ${loveConfig.girlfriendName} ❤️`;
}

// ========== BUILD IMAGE WITH FALLBACK ==========
function buildImageOrFallback(src, alt) {
  const img = document.createElement('img');
  img.alt = alt || '';
  img.loading = 'lazy';
  img.src = src;
  img.addEventListener('error', () => {
    const fallback = document.createElement('div');
    fallback.className = 'photo-fallback';
    fallback.textContent = '📷';
    img.replaceWith(fallback);
  });
  return img;
}

// ========== FLOATING HEARTS - OPTIMIZED ==========
function setupHeartField(reduced) {
  const field = document.getElementById('heart-field');
  if (reduced || window.innerWidth < 480) return;
  
  const symbols = ['❤', '💕', '💖', '💗', '💓'];
  const MAX_PARTICLES = window.innerWidth < 768 ? 8 : 15;
  let count = 0;

  function spawn() {
    if (count >= MAX_PARTICLES || document.hidden) return;
    const span = document.createElement('span');
    span.className = 'floaty';
    span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    const size = 10 + Math.random() * 16;
    const duration = 10 + Math.random() * 8;
    const left = Math.random() * 100;
    const drift = (Math.random() - 0.5) * 80 + 'px';
    span.style.left = left + 'vw';
    span.style.fontSize = size + 'px';
    span.style.animationDuration = duration + 's';
    span.style.setProperty('--drift', drift);
    field.appendChild(span);
    count++;
    setTimeout(() => {
      if (span.parentNode) {
        span.remove();
        count--;
      }
    }, duration * 1000);
  }

  const interval = setInterval(spawn, 2000);
  for (let i = 0; i < 3; i++) setTimeout(spawn, i * 400);
  
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(interval);
    } else {
      setInterval(spawn, 2000);
    }
  });
}

// ========== NAVIGATION ==========
function setupNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.classList.toggle('is-active');
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (links.classList.contains('is-open')) {
        links.classList.remove('is-open');
        toggle.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', 'false');
        document.getElementById('navOverlay').classList.remove('is-active');
        document.body.style.overflow = '';
      }
    });
  });

  const sections = [...links.querySelectorAll('a')]
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = '#' + entry.target.id;
          links.querySelectorAll('a').forEach(a => {
            a.classList.toggle('is-active', a.getAttribute('href') === id);
          });
        }
      });
    },
    { rootMargin: '-45% 0px -45% 0px' }
  );
  sections.forEach(s => observer.observe(s));
}

// ========== MOBILE MENU ==========
function setupMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const overlay = document.getElementById('navOverlay');

  function toggleMenu() {
    const isOpen = links.classList.toggle('is-open');
    toggle.classList.toggle('is-active');
    toggle.setAttribute('aria-expanded', String(isOpen));
    overlay.classList.toggle('is-active');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  toggle.addEventListener('click', toggleMenu);

  overlay.addEventListener('click', () => {
    if (links.classList.contains('is-open')) {
      toggleMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && links.classList.contains('is-open')) {
      toggleMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && links.classList.contains('is-open')) {
      toggleMenu();
    }
  });
}

// ========== SCROLL PROGRESS ==========
function setupScrollProgress() {
  const fill = document.getElementById('progressFill');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    fill.style.width = height > 0 ? `${(scrollTop / height) * 100}%` : '0%';
  });
}

// ========== GIFT OPENING ==========
function setupGiftOpening(reduced) {
  const openingScreen = document.getElementById('opening');
  const welcomeScreen = document.getElementById('welcome');
  const giftBox = document.getElementById('giftBox');
  const openBtn = document.getElementById('openGiftBtn');

  function openGift() {
    if (giftBox.classList.contains('is-open')) return;
    giftBox.classList.add('is-open');

    if (!reduced) burstParticles(giftBox);

    setTimeout(() => {
      openingScreen.hidden = true;
      welcomeScreen.hidden = false;
      welcomeScreen.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
      startTypewriter();
    }, reduced ? 150 : 800);
  }

  giftBox.addEventListener('click', openGift);
  openBtn.addEventListener('click', openGift);
}

// ========== BURST PARTICLES - OPTIMIZED ==========
function burstParticles(originEl) {
  const rect = originEl.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;
  const symbols = ['❤', '💕', '✨', '💖'];
  const count = Math.min(20, Math.floor(window.innerWidth / 30));

  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    p.className = 'burst-particle';
    p.textContent = symbols[i % symbols.length];
    p.style.left = originX + 'px';
    p.style.top = originY + 'px';
    p.style.fontSize = (12 + Math.random() * 14) + 'px';
    document.body.appendChild(p);

    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.3;
    const distance = 80 + Math.random() * 140;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    p.animate(
      [
        { transform: 'translate(0,0) scale(0.5)', opacity: 1 },
        { transform: `translate(${dx}px, ${dy}px) scale(1)`, opacity: 0 }
      ],
      { duration: 700 + Math.random() * 300, easing: 'cubic-bezier(.22,.9,.35,1)' }
    ).onfinish = () => p.remove();
  }
}

// ========== TYPING ANIMATION ==========
function startTypewriter() {
  const el = document.getElementById('typewriter');
  if (el.dataset.started) return;
  el.dataset.started = 'true';

  const text = el.dataset.text || loveConfig.welcomeMessage.en;
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  let i = 0;

  function tick() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      el.appendChild(cursor);
      i++;
      setTimeout(tick, 25);
    }
  }
  tick();
}

function setupWelcomeTyping() {
  document.getElementById('continueBtn').addEventListener('click', () => {
    document.getElementById('story').scrollIntoView({ behavior: 'smooth' });
  });
}

// ========== TIMELINE ==========
function setupTimeline() {
  const lang = currentLang;
  const items = loveConfig.timeline[lang] || loveConfig.timeline.en;
  const container = document.getElementById('timeline');
  
  items.forEach(item => {
    const el = document.createElement('div');
    el.className = 'timeline__item';
    el.innerHTML = `
      <div class="timeline__card">
        <h3>${item.icon} ${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.text)}</p>
      </div>`;
    container.appendChild(el);
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );
  container.querySelectorAll('.timeline__item').forEach(el => observer.observe(el));
}

// ========== GALLERY ==========
function setupGallery() {
  const grid = document.getElementById('masonryGallery');
  loveConfig.photos.forEach((photo, index) => {
    const card = document.createElement('button');
    const isPolaroid = index % 3 === 0;
    card.className = 'photo-card' + (isPolaroid ? ' photo-card--polaroid' : '');
    card.style.setProperty('--tilt', (Math.random() * 4 - 2).toFixed(1) + 'deg');
    card.setAttribute('aria-label', `Open photo ${index + 1}: ${photo.caption}`);
    card.dataset.index = String(index);

    card.appendChild(buildImageOrFallback(photo.src, photo.caption));

    const caption = document.createElement('span');
    caption.className = 'photo-card__caption';
    caption.textContent = photo.caption;
    card.appendChild(caption);

    card.addEventListener('click', () => openLightbox(index));

    let lastTap = 0;
    card.addEventListener('click', (e) => {
      const now = Date.now();
      if (now - lastTap < 350) spawnDoubleTapHearts(e.clientX, e.clientY);
      lastTap = now;
    });

    grid.appendChild(card);
  });
}

// ========== DOUBLE TAP HEARTS ==========
function spawnDoubleTapHearts(x, y) {
  const count = Math.min(6, Math.floor(window.innerWidth / 60));
  for (let i = 0; i < count; i++) {
    const h = document.createElement('span');
    h.className = 'double-tap-heart';
    h.textContent = '❤';
    h.style.left = x + (Math.random() * 30 - 15) + 'px';
    h.style.top = y + (Math.random() * 20 - 10) + 'px';
    h.style.fontSize = (14 + Math.random() * 14) + 'px';
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 800);
  }
}

// ========== LIGHTBOX ==========
let currentLightboxIndex = 0;

function openLightbox(index) {
  currentLightboxIndex = index;
  renderLightbox();
  const lightbox = document.getElementById('lightbox');
  lightbox.hidden = false;
  document.getElementById('lightboxClose').focus();
  document.body.style.overflow = 'hidden';
}

function renderLightbox() {
  const photo = loveConfig.photos[currentLightboxIndex];
  const img = document.getElementById('lightboxImg');
  img.src = photo.src;
  img.alt = photo.caption;
  img.onerror = () => { img.style.display = 'none'; };
  img.onload = () => { img.style.display = 'block'; };
  document.getElementById('lightboxCaption').textContent = photo.caption;
  document.getElementById('lightboxCounter').textContent = `${currentLightboxIndex + 1} / ${loveConfig.photos.length}`;
}

function closeLightbox() {
  document.getElementById('lightbox').hidden = true;
  document.body.style.overflow = '';
}

function setupLightbox() {
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', () => {
    currentLightboxIndex = (currentLightboxIndex - 1 + loveConfig.photos.length) % loveConfig.photos.length;
    renderLightbox();
  });
  document.getElementById('lightboxNext').addEventListener('click', () => {
    currentLightboxIndex = (currentLightboxIndex + 1) % loveConfig.photos.length;
    renderLightbox();
  });
  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') document.getElementById('lightboxPrev').click();
    if (e.key === 'ArrowRight') document.getElementById('lightboxNext').click();
  });
}

// ========== SLIDESHOW ==========
function setupSlideshow() {
  const track = document.getElementById('slideshowTrack');
  const dotsWrap = document.getElementById('slideDots');
  let current = 0;
  let timer = null;

  loveConfig.photos.forEach((photo, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide' + (i === 0 ? ' is-active' : '');
    slide.appendChild(buildImageOrFallback(photo.src, photo.caption));
    const cap = document.createElement('div');
    cap.className = 'slide__caption';
    cap.textContent = `Memory ${String(i + 1).padStart(2, '0')} — ${photo.caption}`;
    slide.appendChild(cap);
    track.appendChild(slide);

    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `Go to memory ${i + 1}`);
    if (i === 0) dot.classList.add('is-active');
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  const slides = track.querySelectorAll('.slide');
  const dots = dotsWrap.querySelectorAll('button');

  function goTo(index) {
    slides[current].classList.remove('is-active');
    dots[current].classList.remove('is-active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('is-active');
    dots[current].classList.add('is-active');
    restart();
  }

  function restart() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  document.getElementById('slidePrev').addEventListener('click', () => goTo(current - 1));
  document.getElementById('slideNext').addEventListener('click', () => goTo(current + 1));

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(timer);
    } else if (slides.length > 1) {
      restart();
    }
  });

  if (slides.length > 1) restart();
}

// ========== LOVE LETTER ==========
function setupLetter() {
  const lang = currentLang;
  document.getElementById('letterText').textContent = loveConfig.letter[lang] || loveConfig.letter.en;
}

// ========== LETTER MODAL ==========
function setupLetterModal() {
  const envelope = document.getElementById('envelope');
  const openBtn = document.getElementById('openLetterBtn');
  const modal = document.getElementById('letterModal');
  const modalText = document.getElementById('letterModalText');
  const closeBtn = document.getElementById('letterModalClose');

  function openLetterModal() {
    const lang = currentLang || 'en';
    modalText.textContent = loveConfig.letter[lang] || loveConfig.letter.en;
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => closeBtn.focus(), 100);
  }

  function closeLetterModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    if (openBtn) {
      setTimeout(() => openBtn.focus(), 100);
    }
  }

  if (envelope) {
    envelope.addEventListener('click', openLetterModal);
  }

  if (openBtn) {
    openBtn.addEventListener('click', openLetterModal);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLetterModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeLetterModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeLetterModal();
    }
  });
}

// ========== REASONS ==========
function setupReasons() {
  const lang = currentLang;
  const reasons = loveConfig.reasons[lang] || loveConfig.reasons.en;
  const grid = document.getElementById('reasonsGrid');
  
  reasons.forEach(reason => {
    const card = document.createElement('button');
    card.className = 'reason-card';
    card.innerHTML = `
      <span class="reason-card__icon" aria-hidden="true">${reason.icon}</span>
      <h3>${escapeHTML(reason.title)}</h3>
      <p>${escapeHTML(reason.text)}</p>`;
    card.addEventListener('click', () => card.classList.toggle('is-tapped'));
    grid.appendChild(card);
  });
}

// ========== EMOJI FIELD ==========
function setupEmojiField() {
  const lang = currentLang;
  const emojis = loveConfig.emojis[lang] || loveConfig.emojis.en;
  const field = document.getElementById('emojiField');
  const message = document.getElementById('emojiMessage');

  emojis.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'emoji-btn';
    btn.textContent = item.symbol;
    btn.setAttribute('aria-label', item.symbol);
    btn.addEventListener('click', (e) => {
      btn.classList.remove('is-tapped');
      void btn.offsetWidth;
      btn.classList.add('is-tapped');
      message.textContent = `${item.symbol} ${item.message}`;
      spawnDoubleTapHearts(e.clientX, e.clientY);
    });
    field.appendChild(btn);
  });
}

// ========== HEART TAP ==========
function setupHeartTap(reduced) {
  const heart = document.getElementById('heartTap');
  const countEl = document.getElementById('heartCount');
  const msgEl = document.getElementById('heartMsg');
  let count = 0;

  const milestones = [
    [1, currentLang === 'am' ? '❤️ ልቤ የአንቺ ነው።' : '❤️ My heart chooses you.'],
    [5, currentLang === 'am' ? 'ደጋግመሽ ትመጪያለሽ። 🥰' : 'You keep coming back for more. 🥰'],
    [15, currentLang === 'am' ? 'እሺ... ልቤን ሙሉ በሙሉ ሰረቅሽው ይመስለኛል። 😂❤️' : 'Okay... I think you\'ve stolen my heart completely. 😂❤️'],
    [30, currentLang === 'am' ? 'በዚህ ነጥብ ላይ በይፋ የአንቺ ነው። 💍😆' : 'At this point it\'s officially, legally yours. 💍😆']
  ];

  heart.addEventListener('click', (e) => {
    count++;
    countEl.textContent = String(count);
    heart.classList.remove('is-beating');
    void heart.offsetWidth;
    heart.classList.add('is-beating');

    if (!reduced) {
      const rect = heart.getBoundingClientRect();
      const heartCount = Math.min(3, Math.floor(window.innerWidth / 120));
      for (let i = 0; i < heartCount; i++) {
        const fh = document.createElement('span');
        fh.className = 'flying-heart';
        fh.textContent = '❤';
        fh.style.left = rect.left + rect.width / 2 + (Math.random() * 20 - 10) + 'px';
        fh.style.top = rect.top + 'px';
        fh.style.fontSize = (14 + Math.random() * 12) + 'px';
        document.body.appendChild(fh);
        setTimeout(() => fh.remove(), 1200);
      }
    }

    const match = [...milestones].reverse().find(([n]) => count >= n);
    if (match) msgEl.textContent = match[1];
  });
}

// ========== LOVE COUNTER ==========
function setupLoveCounter() {
  if (!loveConfig.showLoveCounter) return;
  const section = document.getElementById('loveCounter');
  const start = new Date(loveConfig.anniversaryDate);
  if (isNaN(start.getTime())) return;

  section.hidden = false;
  const els = {
    d: document.getElementById('cDays'),
    h: document.getElementById('cHours'),
    m: document.getElementById('cMinutes'),
    s: document.getElementById('cSeconds')
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

// ========== SURPRISE ==========
function setupSurprise(reduced) {
  document.getElementById('herNameFinal').textContent = loveConfig.girlfriendName;
  const revealBtn = document.getElementById('revealBtn');
  const pre = document.getElementById('surprisePre');
  const reveal = document.getElementById('surpriseReveal');

  const finalTitle = reveal.querySelector('.surprise__final');
  finalTitle.innerHTML = (loveConfig.finalMessage[currentLang] || loveConfig.finalMessage.en) + ' <span class="heart-glyph">❤</span>';

  revealBtn.addEventListener('click', () => {
    pre.hidden = true;
    reveal.hidden = false;
    reveal.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
    if (!reduced) {
      launchConfetti();
      burstParticles(revealBtn);
    }
  });
}

// ========== CONFETTI - OPTIMIZED ==========
function launchConfetti() {
  const colors = ['#c2185b', '#d4af37', '#f7c6d9', '#ffffff'];
  const count = Math.min(40, Math.floor(window.innerWidth / 8));
  
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.width = piece.style.height = (4 + Math.random() * 4) + 'px';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    piece.style.animationDuration = (2 + Math.random() * 2) + 's';
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 4500);
  }
}

// ========== FINAL PHOTO ==========
function setupFinalPhoto() {
  const wrap = document.getElementById('finalPhoto');
  const photo = loveConfig.photos[loveConfig.finalPhotoIndex] || loveConfig.photos[0];
  if (!photo) return;
  const img = document.getElementById('finalPhotoImg');
  img.src = photo.src;
  img.alt = photo.caption;
  img.addEventListener('error', () => {
    wrap.innerHTML = '<div class="photo-fallback" style="border-radius:50%;height:100%;">📷</div>';
  });
}

// ========== SECRET EASTER EGG ==========
function setupSecretMessage() {
  const logo = document.getElementById('secretLogo');
  const modal = document.getElementById('secretModal');
  const closeBtn = document.getElementById('secretClose');
  let taps = 0;

  logo.addEventListener('click', () => {
    taps++;
    if (taps >= 5) {
      modal.hidden = false;
      taps = 0;
    }
  });

  closeBtn.addEventListener('click', () => modal.hidden = true);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.hidden = true;
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) modal.hidden = true;
  });
}

// ========== CURSOR EFFECTS - OPTIMIZED ==========
function setupCursorEffects(reduced) {
  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  if (reduced || isTouch) return;

  let lastSpawn = 0;
  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastSpawn < 80) return;
    lastSpawn = now;
    const dot = document.createElement('span');
    dot.textContent = Math.random() > 0.6 ? '✨' : '❤';
    dot.style.position = 'fixed';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    dot.style.pointerEvents = 'none';
    dot.style.zIndex = '999';
    dot.style.fontSize = '10px';
    dot.style.color = 'rgba(247,198,217,0.6)';
    dot.style.transform = 'translate(-50%,-50%)';
    document.body.appendChild(dot);
    dot.animate(
      [
        { opacity: 0.6, transform: 'translate(-50%,-50%) scale(1)' },
        { opacity: 0, transform: 'translate(-50%,-50%) scale(0.4) translateY(-8px)' }
      ],
      { duration: 500 }
    ).onfinish = () => dot.remove();
  });

  document.addEventListener('click', (e) => {
    const ripple = document.createElement('span');
    ripple.style.position = 'fixed';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    ripple.style.width = ripple.style.height = '8px';
    ripple.style.border = '1px solid rgba(194,24,91,0.4)';
    ripple.style.borderRadius = '50%';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '999';
    ripple.style.transform = 'translate(-50%,-50%)';
    document.body.appendChild(ripple);
    ripple.animate(
      [
        { opacity: 1, width: '8px', height: '8px' },
        { opacity: 0, width: '40px', height: '40px' }
      ],
      { duration: 450 }
    ).onfinish = () => ripple.remove();
  });
}

// ========== UTILITY ==========
function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}