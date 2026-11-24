/**
 * IS-SITEPA 2026 Keynote Speakers Data
 * 
 * Configured with default avatars, placeholder names, titles, and affiliations.
 * Panitia dapat memperbarui nama, foto, afiliasi, dan biografi langsung di file ini.
 */

export const DEFAULT_SPEAKER_TEMPLATE = {
  name: "Keynote Speaker (To Be Announced)",
  role: "Distinguished Professor & Scholar",
  institution: "Host / Partner Institution",
  country: "International",
  trackCategory: "Plenary Keynote",
  badgeColorClass: "bg-crimson/10 text-crimson",
  photo: "/assets/images/speakers/default-avatar.svg",
  shortBio: "Biographical profile and plenary presentation details will be announced upon committee confirmation.",
  fullBio: "The IS-SITEPA 2026 organizing committee is currently finalizing the official keynote plenary invitations. The complete academic profile, institutional credentials, and lecture abstract will be published here upon formal acceptance.",
  keynoteTitle: "Plenary Keynote Lecture: Topic to be Announced",
  abstract: "The full presentation abstract and lecture materials will be available after final review by the Scientific Committee."
};

export const speakers = [
  {
    id: "speaker-1",
    name: "Keynote Speaker I (To Be Announced)",
    role: "Professor of Sustainable & Coastal Infrastructure",
    institution: "Faculty of Engineering, Universitas Hasanuddin (UNHAS)",
    country: "Indonesia",
    trackCategory: "Structural Resilience",
    badgeColorClass: "bg-crimson/10 text-crimson",
    photo: "/assets/images/speakers/default-avatar.svg",
    shortBio: "Leading authority on maritime structural resilience, seismic durability, and coastal protection in equatorial zones.",
    fullBio: "The plenary speaker representing Universitas Hasanuddin (UNHAS) will address seismic design innovations, structural longevity for maritime facilities, and sustainable coastal development across equatorial island networks. Full CV and lecture abstract will be announced soon.",
    keynoteTitle: "Seismic Vulnerability & Durability Innovations for Maritime Infrastructure in Equatorial Island Archipelagos",
    abstract: "Equatorial island nations face compounded threats from tectonic seismicity and climate-intensified marine erosion. This lecture outlines new design paradigms combining fiber-reinforced geopolymer composites with non-linear dampers to preserve bridge piers and harbor revetments under extreme cyclical loading."
  },
  {
    id: "speaker-2",
    name: "Keynote Speaker II (To Be Announced)",
    role: "Professor of Green Materials & Circular Construction",
    institution: "Faculty of Civil Engineering (FKA), Universiti Teknologi Malaysia (UTM)",
    country: "Malaysia",
    trackCategory: "Low-Carbon Materials",
    badgeColorClass: "bg-crimson/10 text-crimson",
    photo: "/assets/images/speakers/default-avatar.svg",
    shortBio: "Pioneering green geopolymer concrete formulations and circular industrial binder systems.",
    fullBio: "The plenary speaker from Universiti Teknologi Malaysia (UTM) will present groundbreaking advancements in low-carbon cement replacements, alkali-activated binders, and industrial symbiosis for sustainable civil construction.",
    keynoteTitle: "Zero-Clinker Concrete Formulations: Transitioning Industrial By-Products into Resilient Structural Binders",
    abstract: "Portland cement synthesis accounts for approximately 8% of global anthropogenic CO2 emissions. This keynote presents breakthrough chemical activation pathways utilizing agro-industrial ashes and blast furnace slag to manufacture high-durability precast structural members without Portland clinker."
  },
  {
    id: "speaker-3",
    name: "Keynote Speaker III (To Be Announced)",
    role: "Professor of Intelligent Transit & Urban Mobility",
    institution: "International Partner University",
    country: "Asia-Pacific",
    trackCategory: "Intelligent Mobility",
    badgeColorClass: "bg-ecogreen/15 text-ecogreen-dark",
    photo: "/assets/images/speakers/default-avatar.svg",
    shortBio: "Specialist in Autonomous Transit networks, TOD spatial integration, and electric public mobility fleets.",
    fullBio: "Representing leading urban engineering institutions in the Asia-Pacific region, this keynote covers AI-augmented Transit-Oriented Development (TOD), multimodal route optimization, and electric bus corridor integration in high-density metropolitan areas.",
    keynoteTitle: "AI-Augmented Transit-Oriented Development (TOD) and Fleet Electrification in Mega-Urban Corridors",
    abstract: "The rapid decentralization of Asian urban centers requires real-time predictive transit scheduling that integrates renewable micro-grids with electric public transport fleets. This presentation demonstrates how dynamic multi-agent simulation models enable zero-emission multi-modal transit networks."
  }
];

/**
 * Arsip data referensi pembicara dari draf Google Stitch (jika diperlukan kembali oleh panitia):
 */
export const SAMPLE_STITCH_SPEAKERS = [
  {
    name: "Prof. Ir. M. Arsyad, Ph.D.",
    role: "Dean & Professor of Civil Engineering",
    institution: "Universitas Hasanuddin (UNHAS)",
    photo: "/assets/images/speakers/arsyad.jpg"
  },
  {
    name: "Prof. Dr. Roslan Zainal",
    role: "Professor, Faculty of Civil Engineering (FKA)",
    institution: "Universiti Teknologi Malaysia (UTM)",
    photo: "/assets/images/speakers/roslan.jpg"
  },
  {
    name: "Prof. Kenji Takahashi",
    role: "Professor, Department of Urban Engineering",
    institution: "The University of Tokyo",
    photo: "/assets/images/speakers/kenji.jpg"
  },
  {
    name: "Dr. Elena Van Der Meer",
    role: "Director of Resilient Built Environments",
    institution: "Delft University of Technology (TU Delft)",
    photo: "/assets/images/speakers/elena.jpg"
  }
];
