/**
 * Mom's Birthday Invitation - Configuration
 * Customize all event details, names, dates, and contacts here!
 */
const INVITATION_CONFIG = {
  // Celebration Details
  momName: "Neddie Zapiico",
  milestone: "50th Birthday",
  tagline: "A Birthday Celebration",
  letterHeader: "You're Invited to Celebrate",

  // Target Date & Time for Countdown & Event
  // Wednesday, November 11, 2026 from 12:00 PM to 1:00 PM
  eventDateTime: "2026-11-11T12:00:00",
  dateDisplay: "Wednesday, November 11, 2026",
  timeDisplay: "5:00 PM – 6:00 PM",
  
  // Venue & Google Maps Directions
  venueName: "Lipa Grill - Padre Garcia",
  venueAddress: "San Felipe, Padre Garcia",
  googleMapsUrl: "https://www.google.com/maps/place/Lipa+Grill+-+Padre+Garcia/@13.890363,121.197294,17z/data=!3m1!4b1!4m6!3m5!1s0x33bd15001cda605d:0xf23dfb83ab8018b2!8m2!3d13.890363!4d121.2021595!16s%2Fg%2F11x8gn_b1b?entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D",
  
  // Dress Code
  dressCodeTitle: "Semi-Formal",
  dressCodeDescription: "Rose Gold, Champagne & Cream",
  dressCodeSwatches: [
    { name: "Rose Gold", color: "#B76E79" },
    { name: "Champagne", color: "#E8D5B5" },
    { name: "Cream", color: "#FBF4EC" }
  ],

  // Signature
  hostName: "With love, The Family",

  // Media
  heroPhoto: "asset/mader.jpeg",
  waxSealInitial: "N",

  // Memory Lane Carousel Photos
  memories: [
    {
      image: "asset/3.jpeg",
      title: "Golden Moments",
      caption: "Through all the years, your laughter and wisdom guide us."
    },
    {
      image: "asset/5.jpeg",
      title: "Cherished Memories",
      caption: "Surrounded by loved ones and warm, beautiful smiles."
    },
    {
      image: "asset/cake.jpeg",
      title: "A Life Well Lived",
      caption: "Celebrating five decades of wonderful memories, love, and sweet blessings."
    }
  ],

  // Calendar Event Details
  calendar: {
    title: "Neddie Zapiico's 50th Birthday Celebration",
    description: "Join us in celebrating Neddie Zapiico's milestone 50th Birthday at Lipa Grill - Padre Garcia! Dress code: Semi-formal (Rose Gold, Champagne & Cream).",
    location: "Lipa Grill - Padre Garcia, San Felipe, Padre Garcia",
    start: "20261111T120000",
    end: "20261111T130000"
  }
};

// Export to window
if (typeof window !== "undefined") {
  window.INVITATION_CONFIG = INVITATION_CONFIG;
}
