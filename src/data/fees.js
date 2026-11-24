/**
 * IS-SITEPA 2026 Registration Fees & Academic Tiers
 * Pricing set to TBA (To Be Announced) as requested.
 */

export const registrationFees = [
  {
    id: "intl-presenter",
    category: "International Presenter (Offline / Onsite)",
    subtitle: "Foreign participants & presenters",
    earlyBird: "TBA",
    regular: "TBA",
    inclusions: "1 Paper, Proceeding, Kit, Gala Dinner, Coffee Breaks",
    actionLabel: "Opening Soon",
    highlight: false,
    partnerBadge: null
  },
  {
    id: "local-presenter",
    category: "Local / Indonesian Presenter (Offline)",
    subtitle: "Non-UNHAS Indonesian Universities & Institutes",
    earlyBird: "TBA",
    regular: "TBA",
    inclusions: "1 Paper, Proceeding, Kit, Gala Dinner, Coffee Breaks",
    actionLabel: "Opening Soon",
    highlight: false,
    partnerBadge: null
  },
  {
    id: "partner-presenter",
    category: "FT UNHAS & UTM Affiliated Presenter",
    subtitle: "Special co-host faculty member concession",
    earlyBird: "TBA",
    regular: "TBA",
    inclusions: "1 Paper, Proceeding, All Sessions, Partner Dinner",
    actionLabel: "Opening Soon",
    highlight: true,
    partnerBadge: "Partner Subsidy"
  },
  {
    id: "student-presenter",
    category: "Student Presenter (Undergraduate / Postgrad)",
    subtitle: "Must submit valid student ID upon registration",
    earlyBird: "TBA",
    regular: "TBA",
    inclusions: "1 Paper, Digital Proceeding, Certificate, Meals",
    actionLabel: "Opening Soon",
    highlight: false,
    partnerBadge: null
  },
  {
    id: "virtual-presenter",
    category: "Virtual / Online Presenter (Global)",
    subtitle: "Live Zoom presentation and interactive Q&A",
    earlyBird: "TBA",
    regular: "TBA",
    inclusions: "1 Paper, Scopus Proceeding, E-Certificate, Recording",
    actionLabel: "Opening Soon",
    highlight: false,
    partnerBadge: null
  },
  {
    id: "non-presenter",
    category: "Non-Presenter Participant / Observer",
    subtitle: "General attendee without paper submission",
    earlyBird: "TBA",
    regular: "TBA",
    inclusions: "Access to all keynotes, seminars & certificate",
    actionLabel: "Opening Soon",
    highlight: false,
    partnerBadge: null
  }
];

export const feeNotes = [
  "Official registration fee tiers and early bird deadlines will be announced following review by the Treasury Committee.",
  "Each accepted paper registration covers 1 presentation and 1 publication slot in the indexed proceeding.",
  "Payments will be supported via International Wire Transfer (SWIFT), Virtual Account (IDR), and Credit Card via payment gateway.",
  "Official receipt and Certificate of Presentation/Participation are issued upon payment verification."
];

export const SAMPLE_FEES = [
  { category: "International Presenter", earlyBird: "USD 350", regular: "USD 400" },
  { category: "Local / Indonesian Presenter", earlyBird: "IDR 3.500.000", regular: "IDR 4.000.000" },
  { category: "FT UNHAS & UTM Affiliated", earlyBird: "IDR 2.750.000 / MYR 850", regular: "IDR 3.250.000 / MYR 1,000" },
  { category: "Student Presenter", earlyBird: "USD 200 / IDR 2.200.000", regular: "USD 250 / IDR 2.700.000" },
  { category: "Virtual / Online Presenter", earlyBird: "USD 220 / IDR 2.500.000", regular: "USD 270 / IDR 3.000.000" },
  { category: "Non-Presenter Participant", earlyBird: "USD 100 / IDR 1.000.000", regular: "USD 120 / IDR 1.250.000" }
];
