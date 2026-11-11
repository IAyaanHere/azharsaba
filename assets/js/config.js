/**
 * CLIENT CONFIGURATION
 * --------------------
 * Change client-specific content here. Keep quotation marks and commas intact.
 * File paths are relative so this template works inside /khwahish/ or any folder.
 */

window.INVITATION_CONFIG = {
  site: {
    title: "Azhar & Saba — Reception Invitation",
    description:
      "Mrs. & Mr. Sheikh Sadik (Almari Wale) request the honour of your presence & blessings on the very auspicious occasion of the Reception Ceremony of their Son Azhar Sheikh with Saba Parveen on Wednesday, 25th November 2026 at Madhavanandan Celebration Lawn, Kharbi, Nagpur.",
  },

  couple: {
    groomInitial: "A",
    brideInitial: "S",
    groom: {
      name: "Azhar Sheikh",
      shortName: "Azhar",
      relation: "S/o. Sheikh Sadik (Almari Wale)",
      parents: "Auliya Nagar, Bada Tajbag, Nagpur.",
    },
    bride: {
      name: "Saba Parveen",
      shortName: "Saba",
      relation: "D/o. Haji Firoz Khan (JK Cooler)",
      parents: "Bada Tajbag, Nagpur.",
    },
  },

  copy: {
    bismillah: "﷽",
    bismillahTranslation: "",
    hosts: "Mrs. & Mr. Sheikh Sadik (Almari Wale)",
    welcomeLine:
      "Request the honour of your presence & blessings\non the very auspicious occasion of the\nReception Ceremony of their Son",
    coupleConnector: "WITH",
    invitation: "Insha Allah On Wednesday, 25th November 2026",
    heroClosing: "After Namaz-e-Maghrib (at 7.00 p.m.)",
    welcomeTitle: "Reception Ceremony",
    welcomeBody:
      "Mrs. & Mr. Sheikh Sadik (Almari Wale)\nRequest the honour of your presence & blessings\non the very auspicious occasion of the\nReception Ceremony of their Son\n\nAzhar Sheikh with Saba Parveen",
    gifts:
      "Your love, blessings, and presence are the greatest gifts we could ever ask for.",
    closing: "We can’t wait to celebrate with you.",
    dua: "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    duaTranslation:
      "May Allah bless you both, shower His blessings upon you, and join you together in goodness.",
  },

  wedding: {
    // Use a valid ISO date with the local UTC offset for an accurate countdown.
    isoDate: "2026-11-25T19:00:00+05:30",
    date: "25th November 2026",
    day: "Wednesday",
    time: "07:00 PM",
    timezone: "IST",
  },

  media: {
    // Replace these two files inside the /media folder.
    introVideo: "./media/intro-placeholder.mp4",
    introPoster: "./media/intro-placeholder.webp",
    music: "./bismillah.mp3",

    // Replace gallery URLs with your own hosted files or image URLs.
    gallery: [
      {
        src: "./media/gallery/01.webp",
        alt: "A softly lit wedding detail",
        caption: "",
      },
      {
        src: "./media/gallery/02.webp",
        alt: "A joyful wedding celebration",
        caption: "",
      },
      {
        src: "./media/gallery/03.webp",
        alt: "Elegant wedding florals and table setting",
        caption: "",
      },
    ],
  },

  program: [
    {
      time: "7:00 PM",
      title: "Reception Ceremony",
      note: "Insha Allah On Wednesday, 25th November 2026 · After Namaz-e-Maghrib (at 7.00 p.m.)",
    },
    {
      time: "Onwards",
      title: "Blessings & Dinner",
      note: "With Best Compliments From : Abdul Azhar, Sheikh Sahid, Sheikh Family, Relatives & Friends",
    },
  ],

  venue: {
    name: "Madhavanandan Celebration Lawn",
    address:
      "Kharbi Main Road, Behind Chamat Hall,\nOpp. Satnam Coolers, Kharbi, Nagpur.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Madhavanandan+Celebration+Lawn+Kharbi+Main+Road+Nagpur",
  },

  dressCode: {
    title: "Festive Formal",
    description:
      "Traditional or formal attire is encouraged. Sarees, lehengas, anarkalis, sherwanis, kurtas, suits, and formal dresses are all welcome. We kindly ask guests to avoid overly casual attire and white or ivory.",
    swatches: ["#7A1F2B", "#234638", "#C49A56", "#7A4968", "#31506B"],
  },

  compliments: {
    heading: "With Best Compliments From :",
    lines: [
      "Abdul Azhar, Sheikh Sahid,",
      "Sheikh Family",
      "Relatives & Friends",
    ],
  },

  theme: {
    ivory: "#F7EFE2",       /* warm bridal ivory */
    plum: "#5A4035",        /* deep warm cocoa */
    lavender: "#D8B7A6",    /* muted blush nude */
    mauve: "#B97D6D",       /* dusty rose */
    lilac: "#A8A28A",       /* soft sage taupe */
    champagne: "#B88A45",   /* antique gold */
  },
};
