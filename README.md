# Mom's Birthday Celebration - Online Invitation 🌸

A luxury, interactive, mobile-optimized online birthday invitation web application featuring a realistic 3D unfolding envelope, live countdown timer, memory lane photo carousel, ambient music, and 1-tap Google Maps directions.

---

## ✨ Features

- 💌 **3D Interactive Envelope**: Realistic wax seal ("M"), flap unfolding animation, rising invitation card, and celebration confetti burst.
- 📱 **Mobile-First & Ultra-Smooth**: Designed specifically for smartphone screens with fluid touch gestures, fast animations, and responsive centering on desktop.
- ⏰ **Live Countdown Timer**: Real-time ticker counting down to Wednesday, November 11, 2026 at 12:00 PM.
- 📍 **Exact Venue & 1-Tap Directions**: Pre-configured for **Lipa Grill - Padre Garcia** (San Felipe, Padre Garcia) with direct Google Maps navigation.
- 🖼️ **Mom's Portrait & Memory Lane**: Arched portrait frame featuring Mom (`asset/mader.jpeg`), with a touch-swipeable photo carousel and full-screen lightbox zoom.
- 🎵 **Ambient Background Music**: Built-in serene harp/chime music synthesizer via the Web Audio API (100% offline, zero external audio loading needed) with an animated sound wave toggle button.
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
- `momName`: Mom's name
- `milestone`: e.g. `"50th Birthday"`
- `eventDateTime`: e.g. `"2026-11-11T12:00:00"`
- `venueName`: `"Lipa Grill - Padre Garcia"`
- `venueAddress`: `"San Felipe, Padre Garcia"`
- `googleMapsUrl`: Direct link to Google Maps
- `heroPhoto`: Path to Mom's photo (defaults to `asset/mader.jpeg`)
- `memories`: List of photos and captions for the Memory Lane carousel

---

## 🌐 Free 1-Click Hosting / Sharing

You can host this invitation for free so your family and guests can open it on their phones:
- **GitHub Pages**: Go to repo *Settings* > *Pages* > Source: `main` branch `/ (root)`. Your link will be live in seconds!
- **Vercel / Netlify**: Drag-and-drop the project folder to deploy instantly.

