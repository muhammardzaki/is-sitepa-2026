/**
 * IS-SITEPA 2026 Conference Global Site Configuration
 * Centralized settings for organizers, links, countdown, and contacts.
 */

export const siteConfig = {
  shortName: "IS-SITEPA 2026",
  fullName: "International Symposium on Sustainability in Infrastructure, Transportation, Environment, Planning, and Architecture 2026",
  theme: "Sustainability in Infrastructure, Transportation, Environment, Planning, and Architecture",
  format: "Hybrid Format (Offline & Online)",
  
  organizers: {
    lead: "Faculty of Engineering, Universitas Hasanuddin (FT UNHAS)",
    partner: "Faculty of Civil Engineering (FKA) & Faculty of Built Environment and Surveying (FABU), Universiti Teknologi Malaysia (UTM)",
    shortAffiliation: "FT UNHAS × FKA & FABU UTM"
  },

  schedule: {
    dates: "Friday, 27 November 2026",
    targetDateISO: "2026-11-27T08:30:00+08:00",
    timeZone: "GMT+8 (MYT / WITA)",
    locationName: "Universiti Teknologi Malaysia (UTM), Johor Bahru, Malaysia",
    city: "Johor Bahru, Malaysia"
  },

  indexing: [
    "International Journal Indexed by Scopus (Selected Paper)",
    "Book Chapter"
  ],

  metrics: {
    expectedParticipants: "500+",
    participatingCountries: "25+",
    scientificTracks: "5 Key Tracks",
    peerReviewedRate: "100%",
    keynoteCount: "Global Keynote Leaders"
  },

  // Centralized URLs for CTA buttons and assets
  links: {
    submitAbstract: "#dates",
    registerNow: "#registration",
    downloadCFP: "#",
    downloadTemplate: "#",
    venueGoogleMaps: "https://maps.google.com/?q=Universiti+Teknologi+Malaysia+Skudai+Johor+Bahru",
    secretariatUNHASEmail: "is-sitepa@unhas.ac.id",
    secretariatUTMEmail: "sitepa@utm.my",
    whatsappHotline: "+62811444992",
    whatsappHotlineDisplay: "+62 811-4449-92",
    websiteOfficial: "www.is-sitepa.unhas.ac.id"
  },

  venueDetails: {
    name: "Universiti Teknologi Malaysia (UTM)",
    address: "Universiti Teknologi Malaysia, 81310 Skudai, Johor Bahru, Johor, Malaysia",
    city: "Johor Bahru, Malaysia",
    format: "Hybrid Format (Offline & Online)",
    coordinates: "1.5594° N, 103.6378° E",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15953.078028711417!2d103.6293425!3d1.5594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da70d6a0f62d1d%3A0x6b306db7c6c4495e!2sUniversiti%20Teknologi%20Malaysia!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy",
    airportDistance: "Accessible via Senai International Airport (JHB) & Singapore Changi Airport (SIN)",
    visaNote: "Malaysia provides visa-free access or eVisa for international attendees. Official invitation letters will be issued upon abstract acceptance."
  },

  secretariat: {
    unhas: {
      institution: "UNHAS Secretariat",
      office: "Faculty of Engineering, Gowa Campus, Universitas Hasanuddin",
      address: "Jl. Poros Malino Km. 6, Borongloe, Bontomarannu, Gowa, South Sulawesi 92171, Indonesia",
      email: "is-sitepa@unhas.ac.id"
    },
    utm: {
      institution: "UTM Secretariat",
      office: "Faculty of Civil Engineering (FKA) & Faculty of Built Environment and Surveying (FABU)",
      address: "Universiti Teknologi Malaysia, 81310 Skudai, Johor Bahru, Johor, Malaysia",
      email: "sitepa@utm.my"
    }
  }
};
