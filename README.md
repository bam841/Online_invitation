# Neddie Zapiico's 50th Birthday Celebration - Online Invitation 🌸

A luxury, interactive, mobile-optimized online birthday invitation web application featuring a realistic 3D unfolding envelope, live countdown timer, memory lane photo carousel, ambient music, and 1-tap Google Maps directions.

---

## ✨ Features

- 💌 **3D Interactive Envelope**: Realistic wax seal ("N"), flap unfolding animation, rising invitation card, and celebration confetti burst.
- 📱 **Mobile-First & Ultra-Smooth**: Designed specifically for smartphone screens with fluid touch gestures, fast animations, and responsive centering on desktop.
- 🔄 **Rotating "Happy Birthday to You" Word Carousel**: An infinite celebratory marquee ribbon streaming gold sparkles, warm rose-gold gradients, and continuous birthday greetings.
- ⬇️ **Automatic Smooth Scroll-Down Tour**: Guides guests smoothly down through the hero, word carousel, memory lane, and celebration details (with instant user-touch cancellation).
- ⏰ **Live Countdown Timer**: Real-time ticker counting down to Wednesday, November 11, 2026 at 12:00 PM.
- 📍 **Exact Venue & 1-Tap Directions**: Pre-configured for **Lipa Grill - Padre Garcia** (San Felipe, Padre Garcia) with direct Google Maps navigation.
- 🖼️ **Portrait & Memory Lane**: Arched portrait frame featuring Neddie Zapiico (`asset/mader.jpeg`), with an auto-scrolling photo carousel and full-screen lightbox zoom.
- 🎵 **"Happy Birthday" Music Synthesizer**: Built-in music box synthesizer via the Web Audio API (100% offline, zero external audio loading needed) with an animated sound wave toggle button.
- 📅 **Add to Calendar**:
  - Generates and downloads a `.ics` calendar event (Apple Calendar, Google Calendar, Outlook) for November 11, 2026 from 12:00 PM to 1:00 PM.
- ⚙️ **Centralized Configuration (`js/config.js`)**: All names, dates, venues, maps links, and photos can be edited in one single file.

---

## 🚀 Quick Start / How to View

### 1. View Locally
Simply double-click `index.html` in your file explorer to open it in any browser, or run a local lightweight server:

```bash
# Python 3
python3 -m http.server 8000

# Open in browser: http://localhost:8000
```

### 2. How to Customize
Open [js/config.js](file:///home/bamz/Documents/vs_code/online-invitation/js/config.js) in your text editor and update:
- `momName`: `"Neddie Zapiico"`
- `milestone`: `"50th Birthday"`
- `eventDateTime`: `"2026-11-11T12:00:00"`
- `venueName`: `"Lipa Grill - Padre Garcia"`
- `venueAddress`: `"San Felipe, Padre Garcia"`
- `googleMapsUrl`: Direct link to Google Maps
- `heroPhoto`: Path to portrait photo (`asset/mader.jpeg`)
- `memories`: List of photos and captions for the Memory Lane carousel

---

## 🌐 Free 1-Click Hosting / Sharing

You can host this invitation for free so your family and guests can open it on their phones:
- **GitHub Pages**: Go to repo *Settings* > *Pages* > Source: `main` branch `/ (root)`. Your link will be live in seconds!
- **Vercel / Netlify**: Drag-and-drop the project folder to deploy instantly.

