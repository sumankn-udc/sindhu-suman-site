/**
 * Cover/couple keep the original artwork; albums power the post-wedding gallery.
 */
export type PhotoMotion = 'float' | 'kenburns' | 'pulse' | 'pan-left'

export type AlbumPhoto = {
  src: string
  motion: PhotoMotion
  alt: string
  caption: { en: string; kn: string }
}

export type Album = {
  id: string
  title: { en: string; kn: string }
  note: { en: string; kn: string }
  photos: AlbumPhoto[]
}

/** Event-day albums — swap in studio day-of shots when they arrive. */
export const albums: Album[] = [
  {
    id: 'haldi',
    title: { en: 'Haldi', kn: 'ಹಳದಿ' },
    note: {
      en: 'Golden morning · 17 October',
      kn: 'ಚಿನ್ನದ ಬೆಳಗು · ೧೭ ಅಕ್ಟೋಬರ್',
    },
    photos: [
      {
        src: '/photos/real/fort-dance.jpg',
        motion: 'kenburns',
        alt: 'Sindhu and Suman celebrating near the fort',
        caption: { en: 'Festive joy', kn: 'ಸಂಭ್ರಮ' },
      },
      {
        src: '/photos/real/quarry-walk.jpg',
        motion: 'float',
        alt: 'Sindhu and Suman walking together',
        caption: { en: 'Together', kn: 'ಒಟ್ಟಿಗೆ' },
      },
    ],
  },
  {
    id: 'reception',
    title: { en: 'Reception', kn: 'ಸ್ವಾಗತ ಸಮಾರಂಭ' },
    note: {
      en: 'Evening blessings · 17 October',
      kn: 'ಸಂಜೆಯ ಆಶೀರ್ವಾದ · ೧೭ ಅಕ್ಟೋಬರ್',
    },
    photos: [
      {
        src: '/photos/real/wedding-garden-walk.jpg',
        motion: 'kenburns',
        alt: 'Sindhu and Suman on the wedding garden path',
        caption: { en: 'Garden walk', kn: 'ಉದ್ಯಾನ ನಡಿಗೆ' },
      },
      {
        src: '/photos/real/bike-dusk.jpg',
        motion: 'pulse',
        alt: 'Sindhu and Suman at dusk with their bike',
        caption: { en: 'Twilight', kn: 'ಸಂಜೆ' },
      },
    ],
  },
  {
    id: 'muhurtham',
    title: { en: 'Muhurtham', kn: 'ವಿವಾಹ ಮುಹೂರ್ತ' },
    note: {
      en: 'We said I do · 18 October',
      kn: 'ನಾವು ಹೌದು ಎಂದೆವು · ೧೮ ಅಕ್ಟೋಬರ್',
    },
    photos: [
      {
        src: '/photos/real/ceremony-namaste.jpg',
        motion: 'float',
        alt: 'Sindhu and Suman in a blessing moment',
        caption: { en: 'Blessings', kn: 'ಆಶೀರ್ವಾದ' },
      },
      {
        src: '/photos/real/wedding-ss.jpg',
        motion: 'kenburns',
        alt: 'Sindhu and Suman on their wedding day',
        caption: { en: 'Married', kn: 'ಮದುವೆಯಾದರು' },
      },
    ],
  },
  {
    id: 'anime',
    title: { en: 'Anime chapter', kn: 'ಅನಿಮೆ ಅಧ್ಯಾಯ' },
    note: {
      en: 'A playful retelling of our story',
      kn: 'ನಮ್ಮ ಕಥೆಯ ಮುದ್ದಾದ ಪುನರ್‌ಕಥನ',
    },
    photos: [
      {
        src: '/photos/anime/wedding-ss.jpg',
        motion: 'kenburns',
        alt: 'Anime Sindhu and Suman on their wedding garden path',
        caption: { en: 'Wedding day', kn: 'ವಿವಾಹದ ದಿನ' },
      },
      {
        src: '/photos/anime/fort-dance.jpg',
        motion: 'pan-left',
        alt: 'Anime Sindhu and Suman dancing near the fort',
        caption: { en: 'Dance', kn: 'ನೃತ್ಯ' },
      },
      {
        src: '/photos/anime/quarry-walk.jpg',
        motion: 'float',
        alt: 'Anime Sindhu and Suman walking together',
        caption: { en: 'Walk', kn: 'ನಡಿಗೆ' },
      },
      {
        src: '/photos/anime/ceremony-namaste.jpg',
        motion: 'pulse',
        alt: 'Anime Sindhu and Suman in a blessing moment',
        caption: { en: 'Namaste', kn: 'ನಮಸ್ಕಾರ' },
      },
    ],
  },
]

/** Flat list for prefetch / legacy callers */
export const galleryPhotos: AlbumPhoto[] = albums.flatMap((a) => a.photos)

/**
 * Paste your Google Drive / Dropbox shared album URL here when ready.
 * Leave empty to hide the external album button.
 */
export const photoAlbum = {
  url: '',
  label: {
    en: 'Open full wedding album',
    kn: 'ಪೂರ್ಣ ವಿವಾಹ ಆಲ್ಬಂ ತೆರೆಯಿರಿ',
  },
  hint: {
    en: 'Official photos from Haldi, Reception & Muhurtham',
    kn: 'ಹಳದಿ, ಸ್ವಾಗತ ಮತ್ತು ಮುಹೂರ್ತದ ಅಧಿಕೃತ ಫೋಟೋಗಳು',
  },
}

export const placeholders = {
  cover: '/photos/placeholders/cover.jpg',
  couple: '/photos/placeholders/couple.jpg',
  bride: '/photos/placeholders/bride.jpg',
  groom: '/photos/placeholders/groom.jpg',
  caricature: '/photos/caricature.jpg',
  weddingPhotos: ['/photos/anime/wedding-ss.jpg'] as const,
  gallery: galleryPhotos,
} as const

/** Photo packs kept for archived /future experiment (not routed) */
export type PhotoSetId = 'photos' | 'art' | 'studio'

export const photoSets: Record<
  PhotoSetId,
  {
    label: { en: string; kn: string }
    hint: { en: string; kn: string }
    cover: string
    couple: string
    bride: string
    groom: string
    gallery: { src: string; alt: string }[]
  }
> = {
  photos: {
    label: { en: 'Photos', kn: 'ಫೋಟೋ' },
    hint: { en: 'Real moments', kn: 'ನಿಜವಾದ ಕ್ಷಣಗಳು' },
    cover: '/photos/couple-cover.jpg',
    couple: '/photos/couple.jpg',
    bride: '/photos/couple-square.jpg',
    groom: '/photos/couple.jpg',
    gallery: [
      { src: '/photos/real/fort-dance.jpg', alt: 'Dancing near the fort' },
      { src: '/photos/real/ceremony-namaste.jpg', alt: 'Blessing moment' },
      { src: '/photos/real/quarry-walk.jpg', alt: 'Walking together' },
      { src: '/photos/real/bike-dusk.jpg', alt: 'Twilight ride' },
    ],
  },
  art: {
    label: { en: 'Art', kn: 'ಆರ್ಟ್' },
    hint: { en: 'Illustrated set', kn: 'ಚಿತ್ರಿತ ಸೆಟ್' },
    cover: placeholders.cover,
    couple: placeholders.couple,
    bride: placeholders.bride,
    groom: placeholders.groom,
    gallery: galleryPhotos.map((g) => ({ src: g.src, alt: g.alt })),
  },
  studio: {
    label: { en: 'Studio', kn: 'ಸ್ಟುಡಿಯೋ' },
    hint: { en: 'Generated portraits', kn: 'ಸ್ಟುಡಿಯೋ ಭಾವಚಿತ್ರಗಳು' },
    cover: '/photos/generated/slot-cover.png',
    couple: '/photos/generated/slot-couple.png',
    bride: '/photos/generated/slot-bride.png',
    groom: '/photos/generated/slot-groom.png',
    gallery: [
      { src: '/photos/generated/slot-gallery-1.png', alt: 'Studio gallery 1' },
      { src: '/photos/generated/slot-gallery-2.png', alt: 'Studio gallery 2' },
      { src: '/photos/generated/slot-gallery-3.png', alt: 'Studio gallery 3' },
      { src: '/photos/generated/slot-gallery-4.png', alt: 'Studio gallery 4' },
    ],
  },
}

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
  eyebrow: { en: 'SHARE OUR STORY', kn: 'ನಮ್ಮ ಕಥೆ ಹಂಚಿ' },
  title: {
    en: 'Share a thank-you with guests',
    kn: 'ಅತಿಥಿಗಳಿಗೆ ಧನ್ಯವಾದ ಹಂಚಿ',
  },
  sub: {
    en: 'Send our wedding story on WhatsApp — friends see our photo, thank-you, and memories.',
    kn: 'WhatsApp ನಲ್ಲಿ ನಮ್ಮ ವಿವಾಹ ಕಥೆ ಕಳುಹಿಸಿ — ಸ್ನೇಹಿತರಿಗೆ ಫೋಟೋ, ಧನ್ಯವಾದ ಮತ್ತು ನೆನಪುಗಳು ಕಾಣುತ್ತವೆ.',
  },
  shareBtn: { en: 'Share thank-you', kn: 'ಧನ್ಯವಾದ ಹಂಚಿ' },
  /** Prefill for WhatsApp share message (not the OG link-preview title). */
  headline: {
    en: 'Hi, this is Suman 👋',
    kn: 'ನಮಸ್ಕಾರ, ನಾನು ಸುಮನ್ 👋',
  },
  body: {
    en: 'Sindhu and I are married ✨💍\n\nThank you for celebrating with us — tap below for our wedding story, albums, and memories from 17 – 18 October 2026. 👇',
    kn: 'ಸಿಂಧು ಮತ್ತು ನಾನು ಮದುವೆಯಾಗಿದ್ದೇವೆ ✨💍\n\nನಮ್ಮೊಂದಿಗೆ ಆಚರಿಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು — ೧೭ – ೧೮ ಅಕ್ಟೋಬರ್ ೨೦೨೬ ರ ಕಥೆ, ಆಲ್ಬಂಗಳು ಮತ್ತು ನೆನಪುಗಳಿಗೆ ಕೆಳಗಿನ ಲಿಂಕ್ ನೋಡಿ. 👇',
  },
  ogTitle: {
    en: 'Sindhu & Suman are Married ✨💍',
    kn: 'ಸಿಂಧು ಮತ್ತು ಸುಮನ್ ಮದುವೆಯಾಗಿದ್ದಾರೆ ✨💍',
  },
  ogDescription: {
    en: 'Thank you for celebrating with us on 17 – 18 October 2026. Open for our wedding story and albums.',
    kn: '೧೭ – ೧೮ ಅಕ್ಟೋಬರ್ ೨೦೨೬ ರಂದು ನಮ್ಮೊಂದಿಗೆ ಆಚರಿಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು. ನಮ್ಮ ವಿವಾಹ ಕಥೆ ಮತ್ತು ಆಲ್ಬಂಗಳಿಗೆ ತೆರೆಯಿರಿ.',
  },
}

/** Hrudayavu Kelade — plays via official YouTube embed */
export const weddingMusic = {
  youtubeId: 'bres6Q38rOg',
  title: {
    en: 'Hrudayavu Kelade',
    kn: 'ಹೃದಯವು ಕೇಳದೆ',
  },
  listenUrl: 'https://www.youtube.com/watch?v=bres6Q38rOg',
}

export const muhurthamAt = new Date('2026-10-18T06:40:00+05:30')

export const copy = {
  together: {
    en: 'Together with their families — the wedding story of',
    kn: 'ತಮ್ಮ ಕುಟುಂಬಗಳೊಂದಿಗೆ — ಇವರ ವಿವಾಹ ಕಥೆ',
  },
  and: { en: 'AND', kn: 'ಮತ್ತು' },
  weddingDate: {
    en: '17 – 18 OCTOBER 2026',
    kn: '೧೭ – ೧೮ ಅಕ್ಟೋಬರ್ ೨೦೨೬',
  },
  theCouple: { en: 'THE COUPLE', kn: 'ದಂಪತಿಗಳು' },
  celebrateWith: {
    en: 'THANK YOU FOR CELEBRATING WITH',
    kn: 'ನಮ್ಮೊಂದಿಗೆ ಆಚರಿಸಿದ್ದಕ್ಕಾಗಿ',
  },
  us: { en: 'US', kn: 'ಧನ್ಯವಾದಗಳು' },
  ourGallery: { en: 'OUR WEDDING ALBUMS', kn: 'ನಮ್ಮ ವಿವಾಹ ಆಲ್ಬಂಗಳು' },
  galleryTitle: {
    en: 'Haldi · Reception · Muhurtham',
    kn: 'ಹಳದಿ · ಸ್ವಾಗತ · ಮುಹೂರ್ತ',
  },
  galleryNote: {
    en: 'Scroll each chapter — and send us your photos from the day',
    kn: 'ಪ್ರತಿ ಅಧ್ಯಾಯ ನೋಡಿ — ಮತ್ತು ಆ ದಿನದ ನಿಮ್ಮ ಫೋಟೋಗಳನ್ನು ಕಳುಹಿಸಿ',
  },
  marriedEyebrow: {
    en: 'WE SAID I DO',
    kn: 'ನಾವು ಹೌದು ಎಂದೆವು',
  },
  marriedBadge: {
    en: 'Married · 17 – 18 October 2026',
    kn: 'ಮದುವೆಯಾಗಿದ್ದೇವೆ · ೧೭ – ೧೮ ಅಕ್ಟೋಬರ್ ೨೦೨೬',
  },
  marriedSub: {
    en: 'Two families, one beautiful beginning.',
    kn: 'ಎರಡು ಕುಟುಂಬಗಳು, ಒಂದು ಸುಂದರ ಆರಂಭ.',
  },
  thanksEyebrow: { en: 'WITH GRATITUDE', kn: 'ಕೃತಜ್ಞತೆಯಿಂದ' },
  thanksTitle: {
    en: 'Thank you',
    kn: 'ಧನ್ಯವಾದಗಳು',
  },
  thanksBody: {
    en: 'Your presence, blessings, and love made our wedding days complete. We are so glad you were part of our beginning.',
    kn: 'ನಿಮ್ಮ ಉಪಸ್ಥಿತಿ, ಆಶೀರ್ವಾದ ಮತ್ತು ಪ್ರೀತಿ ನಮ್ಮ ವಿವಾಹ ದಿನಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದವು. ನಮ್ಮ ಆರಂಭದ ಭಾಗವಾಗಿದ್ದಕ್ಕಾಗಿ ನಾವು ಸಂತೋಷಪಡುತ್ತೇವೆ.',
  },
  shareMemory: {
    en: 'Share a memory on WhatsApp',
    kn: 'WhatsApp ನಲ್ಲಿ ನೆನಪು ಹಂಚಿ',
  },
  shareMemoryHint: {
    en: 'Send a photo, blessing, or note — we would love to hear from you.',
    kn: 'ಫೋಟೋ, ಆಶೀರ್ವಾದ ಅಥವಾ ಸಂದೇಶ ಕಳುಹಿಸಿ — ನಿಮ್ಮಿಂದ ಕೇಳಲು ಇಷ್ಟಪಡುತ್ತೇವೆ.',
  },
  browseMoments: {
    en: 'Browse our moments',
    kn: 'ನಮ್ಮ ಕ್ಷಣಗಳನ್ನು ನೋಡಿ',
  },
  eventsRemembered: {
    en: 'Remembered',
    kn: 'ನೆನಪಿನಲ್ಲಿ',
  },
  countdownTitle: {
    en: 'THE COUNTDOWN BEGINS',
    kn: 'ಕೌಂಟ್‌ಡೌನ್ ಪ್ರಾರಂಭ',
  },
  days: { en: 'DAYS', kn: 'ದಿನ' },
  hours: { en: 'HOURS', kn: 'ಗಂಟೆ' },
  minutes: { en: 'MINS', kn: 'ನಿಮಿಷ' },
  seconds: { en: 'SECS', kn: 'ಸೆಕೆಂಡ್' },
  events: { en: 'HOW WE CELEBRATED', kn: 'ನಾವು ಹೇಗೆ ಆಚರಿಸಿದೆವು' },
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
    en: 'Here is to forever — with love from Sindhu & Suman.',
    kn: 'ಎಂದೆಂದಿಗೂ — ಸಿಂಧು ಮತ್ತು ಸುಮನ್ ಅವರ ಪ್ರೀತಿಯಿಂದ.',
  },
  openInvite: { en: 'Open Our Story', kn: 'ನಮ್ಮ ಕಥೆ ತೆರೆಯಿರಿ' },
  music: { en: 'Music', kn: 'ಸಂಗೀತ' },
  location: { en: 'Location', kn: 'ಸ್ಥಳ' },
  selectLocation: { en: 'Select Location', kn: 'ಸ್ಥಳವನ್ನು ಆಯ್ಕೆಮಾಡಿ' },
  close: { en: 'Close', kn: 'ಮುಚ್ಚಿ' },
  openMaps: { en: 'Open in Maps', kn: 'ನಕ್ಷೆಯಲ್ಲಿ ತೆರೆಯಿರಿ' },
  weddingLabel: { en: 'MARRIED', kn: 'ಮದುವೆಯಾಗಿದ್ದಾರೆ' },
  loadingInvitation: {
    en: 'LOADING OUR STORY',
    kn: 'ನಮ್ಮ ಕಥೆ ಲೋಡ್ ಆಗುತ್ತಿದೆ',
  },
  amp: { en: '&', kn: '&' },
  copyLink: { en: 'Copy link', kn: 'ಲಿಂಕ್ ನಕಲಿಸಿ' },
  copyInvite: { en: 'Copy invite', kn: 'ಆಮಂತ್ರಣ ನಕಲಿಸಿ' },
  copied: { en: 'Copied!', kn: 'ನಕಲಿಸಲಾಗಿದೆ!' },
}

/** Retrospective celebration timeline */
export const events = [
  {
    id: 'haldi',
    title: { en: 'Haldi', kn: 'ಹಳದಿ' },
    when: {
      en: 'Celebrated 17 October 2026 · morning',
      kn: 'ಆಚರಿಸಲಾಯಿತು ೧೭ ಅಕ್ಟೋಬರ್ ೨೦೨೬ · ಬೆಳಿಗ್ಗೆ',
    },
    start: '20261017T100000',
    end: '20261017T120000',
  },
  {
    id: 'reception',
    title: { en: 'Reception', kn: 'ಸ್ವಾಗತ ಸಮಾರಂಭ' },
    when: {
      en: 'Celebrated 17 October 2026 · evening',
      kn: 'ಆಚರಿಸಲಾಯಿತು ೧೭ ಅಕ್ಟೋಬರ್ ೨೦೨೬ · ಸಂಜೆ',
    },
    start: '20261017T183000',
    end: '20261017T220000',
  },
  {
    id: 'muhurtham',
    title: { en: 'Wedding Ceremony (Muhurtham)', kn: 'ವಿವಾಹ ಮುಹೂರ್ತ' },
    when: {
      en: 'Celebrated 18 October 2026 · dawn',
      kn: 'ಆಚರಿಸಲಾಯಿತು ೧೮ ಅಕ್ಟೋಬರ್ ೨೦೨೬ · ಮುಂಜಾನೆ',
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
    label: { en: 'Accommodation option', kn: 'ತಂಗುವಿಕೆ ಆಯ್ಕೆ' },
    body: {
      en: 'If you would like help arranging a stay near the venue, message us on WhatsApp — we are happy to assist. No need to book anything first; just opt in and we will guide you.',
      kn: 'ವೇದಿಕೆಯ ಹತ್ತಿರ ತಂಗುವಿಕೆಗೆ ಸಹಾಯ ಬೇಕಾದರೆ WhatsApp ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಿ — ನಾವು ಸಂತೋಷದಿಂದ ಸಹಾಯ ಮಾಡುತ್ತೇವೆ. ಮೊದಲು ಬುಕಿಂಗ್ ಮಾಡುವ ಅಗತ್ಯವಿಲ್ಲ; ಆಯ್ಕೆ ಮಾಡಿ ನಮಗೆ ತಿಳಿಸಿ.',
    },
    cta: {
      en: 'Request stay help on WhatsApp',
      kn: 'WhatsApp ನಲ್ಲಿ ತಂಗುವಿಕೆ ಸಹಾಯ ಕೇಳಿ',
    },
    message: {
      en: "Hi — I'd like help arranging accommodation for Sindhu & Suman's wedding.",
      kn: 'ನಮಸ್ಕಾರ — ಸಿಂಧು ಮತ್ತು ಸುಮನ್ ಅವರ ವಿವಾಹಕ್ಕೆ ತಂಗುವಿಕೆ ಸಹಾಯ ಬೇಕು.',
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
