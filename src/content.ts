/**
 * Unique generated placeholders per slot (do not reuse the same file).
 * Replace with real photos later by changing these paths.
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
      alt: 'Close romantic moment',
    },
    {
      src: '/photos/placeholders/gallery-2.jpg',
      motion: 'float' as const,
      alt: 'Playful outdoor pose',
    },
    {
      src: '/photos/placeholders/gallery-3.jpg',
      motion: 'pan-left' as const,
      alt: 'Wedding caricature moment',
    },
    {
      src: '/photos/placeholders/gallery-4.jpg',
      motion: 'pulse' as const,
      alt: 'Evening lights together',
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

/** Hrudayavu Kelade (From "Cult") — plays via official YouTube embed */
export const weddingMusic = {
  youtubeId: 'GWqgOEFZOXA',
  title: {
    en: 'Hrudayavu Kelade (From "Cult")',
    kn: 'ಹೃದಯವು ಕೇಳದೆ (Cult)',
  },
  listenUrl: 'https://www.youtube.com/watch?v=GWqgOEFZOXA',
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
    en: 'Unique generated placeholders — replace with your photos anytime',
    kn: 'ವಿಶಿಷ್ಟ ಪ್ಲೇಸ್‌ಹೋಲ್ಡರ್ — ನಿಮ್ಮ ಫೋಟೋಗಳನ್ನು ಯಾವಾಗ ಬೇಕಾದರೂ ಸೇರಿಸಿ',
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
  },
  {
    id: 'reception',
    title: { en: 'Reception', kn: 'ಸ್ವಾಗತ ಸಮಾರಂಭ' },
    when: {
      en: '17 October 2026 · 6:30 PM',
      kn: '೧೭ ಅಕ್ಟೋಬರ್ ೨೦೨೬ · ಸಂಜೆ ೬:೩೦',
    },
  },
  {
    id: 'muhurtham',
    title: { en: 'Wedding Ceremony (Muhurtham)', kn: 'ವಿವಾಹ ಮುಹೂರ್ತ' },
    when: {
      en: '18 October 2026 · 6:40 AM – 7:40 AM',
      kn: '೧೮ ಅಕ್ಟೋಬರ್ ೨೦೨೬ · ಬೆಳಿಗ್ಗೆ ೬:೪೦ – ೭:೪೦',
    },
  },
] as const
