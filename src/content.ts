/**
 * Unique anime-style illustrations per slot (do not reuse the same file).
 * Swap paths later if you add real photos.
 */
export const placeholders = {
  cover: '/photos/placeholders/cover.jpg',
  couple: '/photos/placeholders/couple.jpg',
  bride: '/photos/placeholders/bride.jpg',
  groom: '/photos/placeholders/groom.jpg',
  caricature: '/photos/caricature.png',
  gallery: [
    {
      src: '/photos/placeholders/gallery-1.jpg',
      motion: 'kenburns' as const,
      alt: 'Anime close-up of the couple',
    },
    {
      src: '/photos/placeholders/gallery-2.jpg',
      motion: 'float' as const,
      alt: 'Playful anime garden moment',
    },
    {
      src: '/photos/placeholders/gallery-3.jpg',
      motion: 'pan-left' as const,
      alt: 'Anime wedding garland portrait',
    },
    {
      src: '/photos/placeholders/gallery-4.jpg',
      motion: 'pulse' as const,
      alt: 'Anime evening lights together',
    },
  ],
} as const

export type Lang = 'en' | 'kn'

export const couple = {
  bride: { en: 'Sindhu', kn: 'ಸಿಂಧು' },
  groom: { en: 'Suman', kn: 'ಸುಮನ್' },
}

/**
 * Family details — fill these in (EN + KN).
 * Required for a complete South Indian wedding invite.
 */
export const family = {
  bride: {
    parents: {
      en: 'D/o Shivashankarappa & Sowbaghya',
      kn: 'ಶಿವಶಂಕರಪ್ಪ ಮತ್ತು ಸೌಭಾಗ್ಯ ಅವರ ಪುತ್ರಿ',
    },
  },
  groom: {
    parents: {
      en: 'S/o Nanjappa & Kamalamma',
      kn: 'ನಂಜಪ್ಪ ಮತ್ತು ಕಮಲಮ್ಮ ಅವರ ಪುತ್ರ',
    },
  },
  hosts: {
    en: 'With the blessings of both families',
    kn: 'ಎರಡೂ ಕುಟುಂಬಗಳ ಆಶೀರ್ವಾದದೊಂದಿಗೆ',
  },
}

export const venue = {
  name: {
    en: 'Sri Kanaka Convention Hall',
    kn: 'ಶ್ರೀ ಕನಕ ಕನ್ವೆನ್ಷನ್ ಹಾಲ್',
  },
  address: {
    en: 'Ganagalu Road, Hoskote, Bengaluru Rural — 562114',
    kn: 'ಗಣಗಲು ರೋಡ್, ಹೊಸಕೋಟೆ, ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ — 562114',
  },
  short: {
    en: 'Sri Kanaka Convention Hall, Hoskote, Bengaluru',
    kn: 'ಶ್ರೀ ಕನಕ ಕನ್ವೆನ್ಷನ್ ಹಾಲ್, ಹೊಸಕೋಟೆ, ಬೆಂಗಳೂರು',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Sri+Kanaka+Convention+Hall+Ganagalu+Road+Hoskote+Bengaluru+562114',
}

export const rsvpWhatsApp = '919738019508'

/** Public site URL used for WhatsApp / social link previews */
export const siteUrl = 'https://thesianchronicles.blog'

/** WhatsApp-style share text + Open Graph wording */
export const shareInvite = {
  eyebrow: { en: 'SHARE INVITE', kn: 'ಆಮಂತ್ರಣ ಹಂಚಿಕೊಳ್ಳಿ' },
  title: {
    en: 'Share this invitation',
    kn: 'ಈ ಆಮಂತ್ರಣವನ್ನು ಹಂಚಿಕೊಳ್ಳಿ',
  },
  sub: {
    en: 'Share on WhatsApp with a ready-made invite message — guests see our photo and preview.',
    kn: 'WhatsApp ನಲ್ಲಿ ಸಿದ್ಧ ಆಮಂತ್ರಣ ಸಂದೇಶದೊಂದಿಗೆ ಹಂಚಿ — ಅತಿಥಿಗಳಿಗೆ ನಮ್ಮ ಫೋಟೋ ಮತ್ತು ಪೂರ್ವವೀಕ್ಷಣೆ ಕಾಣುತ್ತದೆ.',
  },
  shareBtn: { en: 'Share Invite', kn: 'ಆಮಂತ್ರಣ ಹಂಚಿ' },
  headline: {
    en: "We're getting Married ✨💍.",
    kn: 'ನಾವು ಮದುವೆಯಾಗುತ್ತಿದ್ದೇವೆ ✨💍.',
  },
  body: {
    en: 'You are warmly invited to our wedding. Click the link below for more details. 👇',
    kn: 'ನಮ್ಮ ವಿವಾಹಕ್ಕೆ ನಿಮ್ಮನ್ನು ಆತ್ಮೀಯವಾಗಿ ಆಮಂತ್ರಿಸುತ್ತೇವೆ. ವಿವರಗಳಿಗೆ ಕೆಳಗಿನ ಲಿಂಕ್ ನೋಡಿ. 👇',
  },
  ogTitle: {
    en: "We're getting Married ✨💍",
    kn: 'ನಾವು ಮದುವೆಯಾಗುತ್ತಿದ್ದೇವೆ ✨💍',
  },
  ogDescription: {
    en: 'You are warmly invited to our wedding. Click the link for more details.',
    kn: 'ನಮ್ಮ ವಿವಾಹಕ್ಕೆ ನಿಮ್ಮನ್ನು ಆತ್ಮೀಯವಾಗಿ ಆಮಂತ್ರಿಸುತ್ತೇವೆ. ವಿವರಗಳಿಗೆ ಲಿಂಕ್ ತೆರೆಯಿರಿ.',
  },
}

/** Hrudayavu Kelade Lyrical Song (From "Cult") — plays via official YouTube embed */
export const weddingMusic = {
  youtubeId: 'vUa7dx_BbHQ',
  title: {
    en: 'Hrudayavu Kelade (From "Cult")',
    kn: 'ಹೃದಯವು ಕೇಳದೆ (Cult)',
  },
  listenUrl: 'https://www.youtube.com/watch?v=vUa7dx_BbHQ',
}

export const muhurthamAt = new Date('2026-10-18T06:40:00+05:30')

export const copy = {
  together: {
    en: 'Together with their families, we cordially invite you to attend the wedding of',
    kn: 'ತಮ್ಮ ಕುಟುಂಬಗಳೊಂದಿಗೆ, ನಾವು ನಿಮ್ಮನ್ನು ಆತ್ಮೀಯವಾಗಿ ವಿವಾಹಕ್ಕೆ ಆಮಂತ್ರಿಸುತ್ತೇವೆ',
  },
  and: { en: 'AND', kn: 'ಮತ್ತು' },
  weddingDate: {
    en: '17 – 18 OCTOBER 2026',
    kn: '೧೭ – ೧೮ ಅಕ್ಟೋಬರ್ ೨೦೨೬',
  },
  theCouple: { en: 'THE COUPLE', kn: 'ದಂಪತಿಗಳು' },
  celebrateWith: {
    en: 'CELEBRATE THIS AUSPICIOUS EVENT WITH',
    kn: 'ಈ ಶುಭ ಸಂದರ್ಭವನ್ನು ನಮ್ಮೊಂದಿಗೆ',
  },
  us: { en: 'US', kn: 'ಆಚರಿಸಿ' },
  ourGallery: { en: 'OUR GALLERY', kn: 'ನಮ್ಮ ಗ್ಯಾಲರಿ' },
  galleryTitle: {
    en: 'Capturing Our Moments',
    kn: 'ನಮ್ಮ ಕ್ಷಣಗಳು',
  },
  galleryNote: {
    en: 'Anime illustrations made for Sindhu & Suman',
    kn: 'ಸಿಂಧು ಮತ್ತು ಸುಮನ್‌ಗಾಗಿ ರಚಿಸಿದ ಅನಿಮೆ ಚಿತ್ರಗಳು',
  },
  countdownTitle: {
    en: 'THE COUNTDOWN BEGINS',
    kn: 'ಕೌಂಟ್‌ಡೌನ್ ಪ್ರಾರಂಭ',
  },
  days: { en: 'DAYS', kn: 'ದಿನ' },
  hours: { en: 'HOURS', kn: 'ಗಂಟೆ' },
  minutes: { en: 'MINS', kn: 'ನಿಮಿಷ' },
  seconds: { en: 'SECS', kn: 'ಸೆಕೆಂಡ್' },
  events: { en: 'EVENTS', kn: 'ಕಾರ್ಯಕ್ರಮಗಳು' },
  wishesTitle: {
    en: 'Send Us Your Wishes',
    kn: 'ನಿಮ್ಮ ಶುಭಾಶಯಗಳನ್ನು ಕಳುಹಿಸಿ',
  },
  wishesSub: {
    en: 'Your blessings mean the world to us.',
    kn: 'ನಿಮ್ಮ ಆಶೀರ್ವಾದ ನಮಗೆ ಅಮೂಲ್ಯ.',
  },
  yourName: { en: 'Your Name', kn: 'ನಿಮ್ಮ ಹೆಸರು' },
  yourMessage: { en: 'Your Message...', kn: 'ನಿಮ್ಮ ಸಂದೇಶ...' },
  sendWishes: { en: 'Send Wishes', kn: 'ಕಳುಹಿಸಿ' },
  withLove: { en: 'WITH LOVE', kn: 'ಪ್ರೀತಿಯಿಂದ' },
  closing: {
    en: 'Your presence and blessings are the greatest gift we could ask for. Thank you for being part of our beautiful beginning.',
    kn: 'ನಿಮ್ಮ ಉಪಸ್ಥಿತಿ ಮತ್ತು ಆಶೀರ್ವಾದವೇ ನಮಗೆ ದೊರೆತ ಅತ್ಯಂತ ದೊಡ್ಡ ಉಡುಗೊರೆ. ನಮ್ಮ ಹೊಸ ಆರಂಭದ ಭಾಗವಾಗಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು.',
  },
  openInvite: { en: 'Open Invitation', kn: 'ಆಮಂತ್ರಣ ತೆರೆಯಿರಿ' },
  music: { en: 'Music', kn: 'ಸಂಗೀತ' },
  location: { en: 'Location', kn: 'ಸ್ಥಳ' },
  selectLocation: { en: 'Select Location', kn: 'ಸ್ಥಳವನ್ನು ಆಯ್ಕೆಮಾಡಿ' },
  close: { en: 'Close', kn: 'ಮುಚ್ಚಿ' },
  openMaps: { en: 'Open in Maps', kn: 'ನಕ್ಷೆಯಲ್ಲಿ ತೆರೆಯಿರಿ' },
  weddingLabel: { en: 'WEDDING', kn: 'ವಿವಾಹ' },
  loadingInvitation: {
    en: 'LOADING INVITATION',
    kn: 'ಆಮಂತ್ರಣ ಲೋಡ್ ಆಗುತ್ತಿದೆ',
  },
  amp: { en: '&', kn: '&' },
  copyLink: { en: 'Copy link', kn: 'ಲಿಂಕ್ ನಕಲಿಸಿ' },
  copyInvite: { en: 'Copy invite', kn: 'ಆಮಂತ್ರಣ ನಕಲಿಸಿ' },
  copied: { en: 'Copied!', kn: 'ನಕಲಿಸಲಾಗಿದೆ!' },
  futureInvite: {
    en: 'Open futuristic neon invite →',
    kn: 'ಭವಿಷ್ಯದ ನಿಯಾನ್ ಆಮಂತ್ರಣ ತೆರೆಯಿರಿ →',
  },
  futureInviteHint: {
    en: 'Trending 2026 look',
    kn: '2026 ಟ್ರೆಂಡಿಂಗ್ ಲುಕ್',
  },
}

/** Chronological celebration order */
export const events = [
  {
    id: 'haldi',
    title: { en: 'Haldi', kn: 'ಹಳದಿ' },
    when: {
      en: '17 October 2026 · 10:00 AM',
      kn: '೧೭ ಅಕ್ಟೋಬರ್ ೨೦೨೬ · ಬೆಳಿಗ್ಗೆ ೧೦:೦೦',
    },
    /** ICS / calendar (Asia/Kolkata) */
    start: '20261017T100000',
    end: '20261017T120000',
  },
  {
    id: 'reception',
    title: { en: 'Reception', kn: 'ಸ್ವಾಗತ ಸಮಾರಂಭ' },
    when: {
      en: '17 October 2026 · 6:30 PM',
      kn: '೧೭ ಅಕ್ಟೋಬರ್ ೨೦೨೬ · ಸಂಜೆ ೬:೩೦',
    },
    start: '20261017T183000',
    end: '20261017T220000',
  },
  {
    id: 'muhurtham',
    title: { en: 'Wedding Ceremony (Muhurtham)', kn: 'ವಿವಾಹ ಮುಹೂರ್ತ' },
    when: {
      en: '18 October 2026 · 6:40 AM – 7:40 AM',
      kn: '೧೮ ಅಕ್ಟೋಬರ್ ೨೦೨೬ · ಬೆಳಿಗ್ಗೆ ೬:೪೦ – ೭:೪೦',
    },
    start: '20261018T064000',
    end: '20261018T074000',
  },
] as const

/** Guest practical notes */
export const guestInfo = {
  eyebrow: { en: 'FOR OUR GUESTS', kn: 'ನಮ್ಮ ಅತಿಥಿಗಳಿಗೆ' },
  title: {
    en: 'A few helpful notes',
    kn: 'ಕೆಲವು ಉಪಯುಕ್ತ ಸೂಚನೆಗಳು',
  },
  dress: {
    label: { en: 'Dress code', kn: 'ಉಡುಪು' },
    body: {
      en: 'Festive traditional or elegant ethnic wear. Soft pastels and jewel tones welcome.',
      kn: 'ಶುಭ ಸಂದರ್ಭಕ್ಕೆ ತಕ್ಕ ಸಾಂಪ್ರದಾಯಿಕ ಅಥವಾ ಎಲಿಗೆಂಟ್ ಎಥ್ನಿಕ್ ಉಡುಪು. ಮೃದು ಬಣ್ಣಗಳು ಸ್ವಾಗತ.',
    },
  },
  travel: {
    label: { en: 'How to reach', kn: 'ಹೇಗೆ ತಲುಪುವುದು' },
    body: {
      en: 'Sri Kanaka Convention Hall is on Ganagalu Road, Hoskote (Bengaluru Rural). About 45–60 min from central Bengaluru via Old Madras Road / NH75. Parking available at the venue.',
      kn: 'ಶ್ರೀ ಕನಕ ಕನ್ವೆನ್ಷನ್ ಹಾಲ್, ಗಣಗಲು ರೋಡ್, ಹೊಸಕೋಟೆ. ಬೆಂಗಳೂರು ನಗರದಿಂದ ಸುಮಾರು ೪೫–೬೦ ನಿಮಿಷ. ವೇದಿಕೆಯಲ್ಲಿ ಪಾರ್ಕಿಂಗ್ ಲಭ್ಯ.',
    },
  },
  stay: {
    label: { en: 'Stay', kn: 'ತಂಗುವಿಕೆ' },
    body: {
      en: 'Hoskote and nearby Whitefield / KR Puram have several hotels. Reach out on WhatsApp if you need stay suggestions.',
      kn: 'ಹೊಸಕೋಟೆ ಮತ್ತು ಹತ್ತಿರದ ವೈಟ್‌ಫೀಲ್ಡ್ / ಕೆಆರ್ ಪುರಂನಲ್ಲಿ ಹೋಟೆಲ್‌ಗಳಿವೆ. ತಂಗುವಿಕೆ ಸಲಹೆಗೆ WhatsApp ನಲ್ಲಿ ಸಂಪರ್ಕಿಸಿ.',
    },
  },
  gift: {
    label: { en: 'Gifts', kn: 'ಉಡುಗೊರೆ' },
    body: {
      en: 'Your presence and blessings are the greatest gift. No presents expected.',
      kn: 'ನಿಮ್ಮ ಉಪಸ್ಥಿತಿ ಮತ್ತು ಆಶೀರ್ವಾದವೇ ಅತ್ಯುತ್ತಮ ಉಡುಗೊರೆ. ಉಡುಗೊರೆಗಳ ಅಗತ್ಯವಿಲ್ಲ.',
    },
  },
}

export const rsvpCopy = {
  eyebrow: { en: 'RSVP', kn: 'RSVP' },
  title: {
    en: 'Will you join us?',
    kn: 'ನೀವು ನಮ್ಮೊಂದಿಗೆ ಸೇರುತ್ತೀರಾ?',
  },
  sub: {
    en: 'A quick reply helps us plan seating and hospitality.',
    kn: 'ತ್ವರಿತ ಪ್ರತಿಕ್ರಿಯೆ ನಮಗೆ ಆಸನ ಮತ್ತು ಆತಿಥ್ಯ ಯೋಜನೆಗೆ ಸಹಾಯ.',
  },
  attending: { en: "Yes, I'll be there", kn: 'ಹೌದು, ನಾನು ಬರುತ್ತೇನೆ' },
  notAttending: { en: "Sorry, can't make it", kn: 'ಕ್ಷಮಿಸಿ, ಬರಲಾಗುವುದಿಲ್ಲ' },
  guests: { en: 'Number of guests', kn: 'ಅತಿಥಿಗಳ ಸಂಖ್ಯೆ' },
  sendRsvp: { en: 'Send RSVP on WhatsApp', kn: 'WhatsApp ನಲ್ಲಿ RSVP ಕಳುಹಿಸಿ' },
  addCalendar: { en: 'Add to calendar', kn: 'ಕ್ಯಾಲೆಂಡರ್‌ಗೆ ಸೇರಿಸಿ' },
  getDirections: { en: 'Get directions', kn: 'ದಿಕ್ಕುಗಳನ್ನು ಪಡೆಯಿರಿ' },
  scrollTop: { en: 'Back to top', kn: 'ಮೇಲಕ್ಕೆ' },
}
