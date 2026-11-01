/**
 * Mom's Birthday Invitation - Interactive Logic & Audio Engine
 * Mobile-First, Smooth Animations, Happy Birthday Synth & Auto-Carousel
 */

(function () {
  'use strict';

  // Fallback config if not found
  const cfg = window.INVITATION_CONFIG || {
    momName: "Neddie Zapiico",
    milestone: "50th Birthday",
    tagline: "A Birthday Celebration",
    eventDateTime: "2026-11-11T12:00:00",
    dateDisplay: "Wednesday, November 11, 2026",
    timeDisplay: "12:00 PM – 1:00 PM",
    venueName: "Lipa Grill - Padre Garcia",
    venueAddress: "San Felipe, Padre Garcia",
    googleMapsUrl: "https://www.google.com/maps/place/Lipa+Grill+-+Padre+Garcia/@13.890363,121.197294,17z/data=!3m1!4b1!4m6!3m5!1s0x33bd15001cda605d:0xf23dfb83ab8018b2!8m2!3d13.890363!4d121.2021595!16s%2Fg%2F11x8gn_b1b?entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D",
    hostName: "With love, The Family",
    heroPhoto: "asset/mader.jpeg",
    waxSealInitial: "N"
  };

  // State
  const state = {
    isPlayingMusic: false
  };

  // DOM Elements Cache
  const elements = {};

  function initDOMElements() {
    elements.screenEnvelope = document.getElementById('screen-envelope');
    elements.envelopeBox = document.getElementById('envelope-box');
    elements.openInviteBtn = document.getElementById('open-invite-btn');
    elements.mainInvitation = document.getElementById('main-invitation');
    elements.musicToggleBtn = document.getElementById('music-toggle-btn');
    elements.confettiCanvas = document.getElementById('confetti-canvas');
    elements.lightboxModal = document.getElementById('lightbox-modal');
    elements.lightboxImg = document.getElementById('lightbox-img');
    elements.lightboxCaption = document.getElementById('lightbox-caption');
    elements.lightboxCloseBtn = document.getElementById('lightbox-close-btn');
    
    // Countdown
    elements.countDays = document.getElementById('count-days');
    elements.countHours = document.getElementById('count-hours');
    elements.countMins = document.getElementById('count-mins');
    elements.countSecs = document.getElementById('count-secs');

    // Action Buttons
    elements.btnDirections = document.getElementById('btn-get-directions');
    elements.btnCalendar = document.getElementById('btn-add-calendar');
    elements.btnScrollDown = document.getElementById('btn-scroll-down');
    elements.memoryCarousel = document.getElementById('memory-carousel');
    elements.carouselPrev = document.getElementById('carousel-prev');
    elements.carouselNext = document.getElementById('carousel-next');
  }

  /* -------------------------------------------------------------------------
     Apply Configuration to DOM Elements
     ------------------------------------------------------------------------- */
  function applyConfigToDOM() {
    if (!cfg) return;

    // Document Title
    if (cfg.momName) {
      document.title = `${cfg.momName}'s ${cfg.milestone || '50th Birthday'} Celebration | Online Invitation`;
    }

    // Wax Seal
    const waxSeal = document.getElementById('wax-seal');
    if (waxSeal && cfg.waxSealInitial) {
      waxSeal.textContent = cfg.waxSealInitial;
    }

    // Envelope Screen
    const envSub = document.querySelector('.envelope-subtitle');
    if (envSub && cfg.letterHeader) envSub.textContent = cfg.letterHeader;

    const envTitle = document.querySelector('.envelope-title');
    if (envTitle && cfg.momName) envTitle.textContent = cfg.momName;

    const letterTitle = document.querySelector('.letter-mini-title');
    if (letterTitle && cfg.tagline) letterTitle.textContent = cfg.tagline;

    const letterName = document.querySelector('.letter-mini-name');
    if (letterName && cfg.momName) letterName.textContent = `${cfg.momName}'s Birthday`;

    // Hero Section
    const heroTag = document.querySelector('.hero-tagline');
    if (heroTag && cfg.tagline) heroTag.textContent = cfg.tagline;

    const heroImg = document.querySelector('.mom-portrait-img');
    if (heroImg && cfg.heroPhoto) heroImg.src = cfg.heroPhoto;

    const heroName = document.querySelector('.hero-name');
    if (heroName && cfg.momName) heroName.textContent = cfg.momName;

    const heroMilestone = document.querySelector('.hero-milestone');
    if (heroMilestone && cfg.milestone) heroMilestone.textContent = cfg.milestone;

    // Celebration Details
    const detailCards = document.querySelectorAll('.detail-card');
    if (detailCards.length >= 3) {
      // Date card
      const dateMain = detailCards[0].querySelector('.detail-card-main');
      const dateSub = detailCards[0].querySelector('.detail-card-sub');
      if (dateMain && cfg.dateDisplay) dateMain.textContent = cfg.dateDisplay;
      if (dateSub && cfg.timeDisplay) dateSub.textContent = cfg.timeDisplay;

      // Venue card
      const venueMain = detailCards[1].querySelector('.detail-card-main');
      const venueSub = detailCards[1].querySelector('.detail-card-sub');
      if (venueMain && cfg.venueName) venueMain.textContent = cfg.venueName;
      if (venueSub && cfg.venueAddress) venueSub.textContent = cfg.venueAddress;

      // Dress code card
      const dressMain = detailCards[2].querySelector('.detail-card-main');
      const dressSub = detailCards[2].querySelector('.detail-card-sub');
      if (dressMain && cfg.dressCodeTitle) dressMain.textContent = cfg.dressCodeTitle;
      if (dressSub && cfg.dressCodeDescription) dressSub.textContent = cfg.dressCodeDescription;
    }

    // Host Signature
    const hostSig = document.querySelector('.host-signature');
    if (hostSig && cfg.hostName) {
      hostSig.textContent = cfg.hostName;
    }
  }

  /* -------------------------------------------------------------------------
     Ambient Particle Drifter (Floating Gold/Rose Sparkles)
     ------------------------------------------------------------------------- */
  function initAmbientParticles() {
    const container = document.getElementById('ambient-particles');
    if (!container) return;
    const particleCount = 14;

    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 8 + 4;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 100}%`;
      p.style.animationDuration = `${Math.random() * 12 + 10}s`;
      p.style.animationDelay = `${Math.random() * 8}s`;
      container.appendChild(p);
    }
  }

  /* -------------------------------------------------------------------------
     High-Performance Embedded Canvas Confetti Engine
     ------------------------------------------------------------------------- */
  let confettiCtx = null;
  let confettiParticles = [];
  let confettiAnimId = null;

  function initConfetti() {
    const canvas = elements.confettiCanvas;
    if (!canvas) return;
    confettiCtx = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();
  }

  function fireCelebrationConfetti(count = 100) {
    if (!confettiCtx) return;
    const canvas = elements.confettiCanvas;
    const colors = ['#B76E79', '#9A4F5B', '#E8D5B5', '#F1E0C8', '#FFFFFF', '#D9BFA0', '#C9A875', '#FFD700'];

    for (let i = 0; i < count; i++) {
      confettiParticles.push({
        x: canvas.width / 2 + (Math.random() * 140 - 70),
        y: canvas.height * 0.45 + (Math.random() * 60 - 30),
        w: Math.random() * 8 + 6,
        h: Math.random() * 12 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.8) * 18 - 4,
        rot: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 12,
        opacity: 1,
        gravity: 0.35,
        drag: 0.96
      });
    }

    if (!confettiAnimId) {
      animateConfetti();
    }
  }

  function animateConfetti() {
    if (!confettiCtx) return;
    const canvas = elements.confettiCanvas;
    confettiCtx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = confettiParticles.length - 1; i >= 0; i--) {
      const p = confettiParticles[i];
      p.vx *= p.drag;
      p.vy += p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vRot;
      p.opacity -= 0.007;

      if (p.opacity <= 0 || p.y > canvas.height + 20) {
        confettiParticles.splice(i, 1);
        continue;
      }

      confettiCtx.save();
      confettiCtx.globalAlpha = Math.max(0, p.opacity);
      confettiCtx.translate(p.x, p.y);
      confettiCtx.rotate((p.rot * Math.PI) / 180);
      confettiCtx.fillStyle = p.color;
      confettiCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      confettiCtx.restore();
    }

    if (confettiParticles.length > 0) {
      confettiAnimId = requestAnimationFrame(animateConfetti);
    } else {
      confettiAnimId = null;
      confettiCtx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  /* -------------------------------------------------------------------------
     Web Audio Synthesizer: Confetti Pop & "Happy Birthday" Music Box
     ------------------------------------------------------------------------- */
  let audioCtx = null;
  let musicTimer = null;
  let scoreIndex = 0;
  const BEAT_MS = 420; // Tempo of music box

  // Exact musical score for "Happy Birthday to You" (Key of C Major)
  const HAPPY_BIRTHDAY_SCORE = [
    // Phrase 1: "Happy Birthday to you"
    { freq: 392.00, beats: 0.75 }, // Hap- (G4)
    { freq: 392.00, beats: 0.25 }, // py (G4)
    { freq: 440.00, beats: 1.00 }, // Birth- (A4)
    { freq: 392.00, beats: 1.00 }, // day (G4)
    { freq: 523.25, beats: 1.00 }, // to (C5)
    { freq: 493.88, beats: 2.00 }, // you (B4)
    { freq: 0,      beats: 0.50 }, // pause

    // Phrase 2: "Happy Birthday to you"
    { freq: 392.00, beats: 0.75 }, // Hap- (G4)
    { freq: 392.00, beats: 0.25 }, // py (G4)
    { freq: 440.00, beats: 1.00 }, // Birth- (A4)
    { freq: 392.00, beats: 1.00 }, // day (G4)
    { freq: 587.33, beats: 1.00 }, // to (D5)
    { freq: 523.25, beats: 2.00 }, // you (C5)
    { freq: 0,      beats: 0.50 }, // pause

    // Phrase 3: "Happy Birthday dear Mom"
    { freq: 392.00, beats: 0.75 }, // Hap- (G4)
    { freq: 392.00, beats: 0.25 }, // py (G4)
    { freq: 783.99, beats: 1.00 }, // Birth- (G5)
    { freq: 659.25, beats: 1.00 }, // day (E5)
    { freq: 523.25, beats: 1.00 }, // dear (C5)
    { freq: 493.88, beats: 1.00 }, // (B4)
    { freq: 440.00, beats: 2.00 }, // Mom! (A4)
    { freq: 0,      beats: 0.50 }, // pause

    // Phrase 4: "Happy Birthday to you"
    { freq: 698.46, beats: 0.75 }, // Hap- (F5)
    { freq: 698.46, beats: 0.25 }, // py (F5)
    { freq: 659.25, beats: 1.00 }, // Birth- (E5)
    { freq: 523.25, beats: 1.00 }, // day (C5)
    { freq: 587.33, beats: 1.00 }, // to (D5)
    { freq: 523.25, beats: 2.50 }, // you! (C5)
    { freq: 0,      beats: 2.00 }  // Intermission pause before repeating
  ];

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  /**
   * Confetti Celebration Sound Effect
   * Plays a party popper 'POP' followed by sparkly celebratory chime fanfare!
   */
  function playCelebrationSound() {
    initAudio();
    if (!audioCtx) return;
    try {
      const now = audioCtx.currentTime;

      // 1. Party Popper "POP" (Frequency sweep from 420Hz down to 50Hz)
      const popOsc = audioCtx.createOscillator();
      const popGain = audioCtx.createGain();
      popOsc.type = 'sine';
      popOsc.frequency.setValueAtTime(420, now);
      popOsc.frequency.exponentialRampToValueAtTime(50, now + 0.08);

      popGain.gain.setValueAtTime(0.45, now);
      popGain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      popOsc.connect(popGain);
      popGain.connect(audioCtx.destination);
      popOsc.start(now);
      popOsc.stop(now + 0.1);

      // 2. Confetti Burst Cracker Snap (White Noise Burst)
      const bufferSize = Math.floor(audioCtx.sampleRate * 0.12);
      const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const whiteNoise = audioCtx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(2400, now);
      filter.Q.setValueAtTime(1.5, now);

      const noiseGain = audioCtx.createGain();
      noiseGain.gain.setValueAtTime(0.28, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      whiteNoise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(audioCtx.destination);
      whiteNoise.start(now);

      // 3. Twinkling Celebration Bell Cascade (C6, E6, G6, B6, C7 sparkle)
      const sparkleNotes = [1046.5, 1318.5, 1567.9, 1975.5, 2093.0];
      sparkleNotes.forEach((freq, idx) => {
        const noteTime = now + 0.05 + idx * 0.06;
        const bellOsc = audioCtx.createOscillator();
        const bellGain = audioCtx.createGain();

        bellOsc.type = 'sine';
        bellOsc.frequency.setValueAtTime(freq, noteTime);

        bellGain.gain.setValueAtTime(0.001, noteTime);
        bellGain.gain.linearRampToValueAtTime(0.12, noteTime + 0.01);
        bellGain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.8);

        bellOsc.connect(bellGain);
        bellGain.connect(audioCtx.destination);

        bellOsc.start(noteTime);
        bellOsc.stop(noteTime + 0.85);
      });
    } catch (e) {
      console.warn("Celebration sound error:", e);
    }
  }

  /**
   * Plays a single note with music box / acoustic chime harmonics
   */
  function playMusicBoxNote(freq, durationMs) {
    if (!audioCtx || freq <= 0) return;
    try {
      const now = audioCtx.currentTime;
      const osc1 = audioCtx.createOscillator();
      const osc2 = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const filter = audioCtx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2200, now);

      // Fundamental tone + gentle octave harmonic for music box sparkle
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(freq, now);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(freq * 2, now);

      const decayTime = Math.max(0.65, (durationMs / 1000) * 1.5);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.14, now + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + decayTime);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + decayTime + 0.05);
      osc2.stop(now + decayTime + 0.05);
    } catch (e) {
      console.warn("Audio note error:", e);
    }
  }

  function playNextHappyBirthdayNote() {
    if (!state.isPlayingMusic) return;
    const current = HAPPY_BIRTHDAY_SCORE[scoreIndex % HAPPY_BIRTHDAY_SCORE.length];
    const duration = current.beats * BEAT_MS;

    if (current.freq > 0) {
      playMusicBoxNote(current.freq, duration);
    }

    scoreIndex++;
    musicTimer = setTimeout(playNextHappyBirthdayNote, duration);
  }

  function startMusicLoop() {
    if (state.isPlayingMusic) return;
    initAudio();
    state.isPlayingMusic = true;
    if (elements.musicToggleBtn) {
      elements.musicToggleBtn.classList.add('playing');
      elements.musicToggleBtn.setAttribute('aria-label', 'Mute background music');
    }

    scoreIndex = 0;
    playNextHappyBirthdayNote();
  }

  function stopMusicLoop() {
    state.isPlayingMusic = false;
    if (musicTimer) clearTimeout(musicTimer);
    if (elements.musicToggleBtn) {
      elements.musicToggleBtn.classList.remove('playing');
      elements.musicToggleBtn.setAttribute('aria-label', 'Play Happy Birthday music');
    }
  }

  function toggleMusic() {
    if (state.isPlayingMusic) {
      stopMusicLoop();
    } else {
      startMusicLoop();
    }
  }

  /* -------------------------------------------------------------------------
     3D Envelope Opening Sequence
     ------------------------------------------------------------------------- */
  function openEnvelope() {
    if (elements.envelopeBox.classList.contains('is-opening')) return;

    // Trigger visual opening
    elements.envelopeBox.classList.add('is-opening');
    elements.openInviteBtn.style.pointerEvents = 'none';
    elements.openInviteBtn.style.opacity = '0.5';

    // Celebration pop sound & Happy Birthday music!
    playCelebrationSound();
    startMusicLoop();

    // Fire confetti burst
    setTimeout(() => {
      fireCelebrationConfetti(120);
    }, 400);

    // Transition from envelope to main content
    setTimeout(() => {
      elements.screenEnvelope.classList.add('is-hidden');
      elements.mainInvitation.classList.add('is-visible');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Begin gentle automatic scroll down tour after 2.6 seconds
      setTimeout(() => {
        if (!userInteractedWithScroll) {
          startAutoScrollDownTour();
        }
      }, 2600);
    }, 1100);
  }

  /* -------------------------------------------------------------------------
     Automatic Smooth Scroll Down Tour Effect
     ------------------------------------------------------------------------- */
  let autoScrollAnimId = null;
  let isAutoScrollingDown = false;
  let userInteractedWithScroll = false;

  function startAutoScrollDownTour() {
    if (userInteractedWithScroll || isAutoScrollingDown) return;
    isAutoScrollingDown = true;

    function step() {
      if (!isAutoScrollingDown || userInteractedWithScroll) {
        isAutoScrollingDown = false;
        return;
      }

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= maxScroll - 4) {
        isAutoScrollingDown = false;
        return;
      }

      // Smooth, gentle scroll rate (~1.3 pixels per frame)
      window.scrollBy(0, 1.3);
      autoScrollAnimId = requestAnimationFrame(step);
    }

    autoScrollAnimId = requestAnimationFrame(step);
  }

  function stopAutoScrollDownTour() {
    userInteractedWithScroll = true;
    isAutoScrollingDown = false;
    if (autoScrollAnimId) {
      cancelAnimationFrame(autoScrollAnimId);
      autoScrollAnimId = null;
    }
  }

  function initAutoScrollListeners() {
    // If the user scrolls, touches, drags, or presses a key, cancel auto-scroll immediately
    const cancelEvents = ['wheel', 'touchstart', 'pointerdown', 'keydown', 'mousedown'];
    cancelEvents.forEach((evt) => {
      window.addEventListener(evt, () => {
        if (isAutoScrollingDown) {
          stopAutoScrollDownTour();
        }
      }, { passive: true });
    });

    // "Scroll to Explore" button
    if (elements.btnScrollDown) {
      elements.btnScrollDown.addEventListener('click', () => {
        stopAutoScrollDownTour();
        const target = document.querySelector('.details-section');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  /* -------------------------------------------------------------------------
     Real-time Countdown Timer
     ------------------------------------------------------------------------- */
  function updateCountdown() {
    const targetDate = new Date(cfg.eventDateTime).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      if (elements.countDays) elements.countDays.textContent = "00";
      if (elements.countHours) elements.countHours.textContent = "00";
      if (elements.countMins) elements.countMins.textContent = "00";
      if (elements.countSecs) elements.countSecs.textContent = "00";
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, '0');

    if (elements.countDays) elements.countDays.textContent = pad(days);
    if (elements.countHours) elements.countHours.textContent = pad(hours);
    if (elements.countMins) elements.countMins.textContent = pad(minutes);
    if (elements.countSecs) elements.countSecs.textContent = pad(seconds);
  }

  function startCountdown() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  /* -------------------------------------------------------------------------
     Memory Lane Carousel: Auto-Scroll (Left to Right) & Lightbox
     ------------------------------------------------------------------------- */
  let autoScrollTimer = null;
  let isUserInteracting = false;

  function initCarousel() {
    // Arrow navigation
    if (elements.carouselPrev) {
      elements.carouselPrev.addEventListener('click', () => {
        elements.memoryCarousel.scrollBy({ left: -266, behavior: 'smooth' });
      });
    }
    if (elements.carouselNext) {
      elements.carouselNext.addEventListener('click', () => {
        elements.memoryCarousel.scrollBy({ left: 266, behavior: 'smooth' });
      });
    }

    // Auto-scroll loop: smoothly slides left to right every 2.8s
    startAutoScroll();

    // Pause auto-scroll on hover or touch
    if (elements.memoryCarousel) {
      elements.memoryCarousel.addEventListener('mouseenter', () => { isUserInteracting = true; });
      elements.memoryCarousel.addEventListener('mouseleave', () => { isUserInteracting = false; });
      elements.memoryCarousel.addEventListener('touchstart', () => { isUserInteracting = true; }, { passive: true });
      elements.memoryCarousel.addEventListener('touchend', () => {
        setTimeout(() => { isUserInteracting = false; }, 2000);
      }, { passive: true });
    }

    // Lightbox modal handlers
    const cards = document.querySelectorAll('.memory-card');
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        isUserInteracting = true;
        const img = card.querySelector('img');
        const caption = card.querySelector('.memory-caption-title');
        if (img && elements.lightboxImg) {
          elements.lightboxImg.src = img.src;
          elements.lightboxCaption.textContent = caption ? caption.textContent : '';
          elements.lightboxModal.classList.add('is-active');
        }
      });
    });

    if (elements.lightboxCloseBtn) {
      elements.lightboxCloseBtn.addEventListener('click', closeLightbox);
    }
    if (elements.lightboxModal) {
      elements.lightboxModal.addEventListener('click', (e) => {
        if (e.target === elements.lightboxModal) closeLightbox();
      });
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  function startAutoScroll() {
    stopAutoScroll();
    autoScrollTimer = setInterval(() => {
      if (!elements.memoryCarousel || isUserInteracting) return;
      const card = elements.memoryCarousel.querySelector('.memory-card');
      const step = card ? card.offsetWidth + 16 : 266;
      const maxScroll = elements.memoryCarousel.scrollWidth - elements.memoryCarousel.clientWidth;

      // When reaching near the end, wrap smoothly to the start
      if (elements.memoryCarousel.scrollLeft >= maxScroll - 15) {
        elements.memoryCarousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        elements.memoryCarousel.scrollBy({ left: step, behavior: 'smooth' });
      }
    }, 2800);
  }

  function stopAutoScroll() {
    if (autoScrollTimer) {
      clearInterval(autoScrollTimer);
      autoScrollTimer = null;
    }
  }

  function closeLightbox() {
    if (elements.lightboxModal) {
      elements.lightboxModal.classList.remove('is-active');
    }
    isUserInteracting = false;
  }

  /* -------------------------------------------------------------------------
     Calendar & Directions Actions
     ------------------------------------------------------------------------- */
  function initActionLinks() {
    // Get Directions Link
    if (elements.btnDirections) {
      elements.btnDirections.href = cfg.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cfg.venueAddress || cfg.venueName)}`;
    }

    // Add to Calendar
    if (elements.btnCalendar) {
      elements.btnCalendar.addEventListener('click', (e) => {
        e.preventDefault();
        downloadIcsFile();
      });
    }
  }

  function downloadIcsFile() {
    const cal = cfg.calendar || {};
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Birthday Invitation//Mom//EN',
      'BEGIN:VEVENT',
      `SUMMARY:${cal.title || `${cfg.momName}'s 50th Birthday Celebration`}`,
      `DESCRIPTION:${cal.description || `Celebrate ${cfg.momName}'s 50th Birthday at ${cfg.venueName}!`}`,
      `LOCATION:${cal.location || `${cfg.venueName}, ${cfg.venueAddress}`}`,
      `DTSTART:${cal.start || '20261111T120000'}`,
      `DTEND:${cal.end || '20261111T130000'}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${cfg.momName.replace(/\s+/g, '_')}_50th_Birthday_Invitation.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /* -------------------------------------------------------------------------
     Initialization
     ------------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    initDOMElements();
    applyConfigToDOM();
    initAmbientParticles();
    initConfetti();
    startCountdown();
    initCarousel();
    initActionLinks();
    initAutoScrollListeners();

    // Envelope open listeners
    if (elements.openInviteBtn) {
      elements.openInviteBtn.addEventListener('click', openEnvelope);
    }
    if (elements.envelopeBox) {
      elements.envelopeBox.addEventListener('click', openEnvelope);
    }

    // Music toggle listener
    if (elements.musicToggleBtn) {
      elements.musicToggleBtn.addEventListener('click', toggleMusic);
    }
  });

})();
