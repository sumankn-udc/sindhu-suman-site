export type Lang = 'en' | 'kn'

export const couple = {
  bride: { en: 'Sindhu', kn: 'ಸಿಂಧು' },
  groom: { en: 'Suman', kn: 'ಸುಮನ್' },
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
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Sri+Kanaka+Convention+Hall+Ganagalu+Road+Hoskote+Bengaluru+562114',
}

/** Update this number before sharing (country code + number, no + or spaces). */
export const rsvpWhatsApp = '919999999999'

export const copy = {
  tagline: {
    en: 'With the blessings of elders, we invite you to celebrate our wedding',
    kn: 'ಹಿರಿಯರ ಆಶೀರ್ವಾದದೊಂದಿಗೆ, ನಮ್ಮ ವಿವಾಹೋತ್ಸವಕ್ಕೆ ನಿಮ್ಮನ್ನು ಆಮಂತ್ರಿಸುತ್ತೇವೆ',
  },
  invitation: {
    en: 'You are cordially invited',
    kn: 'ನಿಮ್ಮನ್ನು ಆತ್ಮೀಯವಾಗಿ ಆಮಂತ್ರಿಸಲಾಗಿದೆ',
  },
  weds: { en: '&', kn: 'ಮತ್ತು' },
  scroll: { en: 'Scroll to open', kn: 'ತೆರೆಯಲು ಸ್ಕ್ರಾಲ್ ಮಾಡಿ' },
  eventsTitle: { en: 'Celebrations', kn: 'ಸಂಭ್ರಮಗಳು' },
  eventsSub: {
    en: 'Two days of colour, ritual, and togetherness in Hoskote',
    kn: 'ಹೊಸಕೋಟೆಯಲ್ಲಿ ಬಣ್ಣ, ಸಂಪ್ರದಾಯ ಮತ್ತು ಒಡನಾಟದ ಎರಡು ದಿನಗಳು',
  },
  vowsTitle: { en: 'The Seven Steps', kn: 'ಸಪ್ತಪದಿ' },
  vowsSub: {
    en: 'Promises we take with each footprint around the sacred fire',
    kn: 'ಪವಿತ್ರ ಅಗ್ನಿಯ ಸುತ್ತಲೂ ಪ್ರತಿ ಹೆಜ್ಜೆಯೊಂದಿಗೆ ನಾವು ಕೊಡುವ ಭರವಸೆಗಳು',
  },
  ritualsTitle: { en: 'Sacred Rituals', kn: 'ಪವಿತ್ರ ವಿಧಿಗಳು' },
  ritualsSub: {
    en: 'Moments that make a South Indian Hindu wedding',
    kn: 'ದಕ್ಷಿಣ ಭಾರತೀಯ ಹಿಂದೂ ವಿವಾಹವನ್ನು ರೂಪಿಸುವ ಕ್ಷಣಗಳು',
  },
  venueTitle: { en: 'Venue', kn: 'ಸ್ಥಳ' },
  venueSub: {
    en: 'Join us under one roof for every celebration',
    kn: 'ಎಲ್ಲಾ ಸಂಭ್ರಮಗಳಿಗೂ ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ಸೇರಿ',
  },
  directions: { en: 'Open in Google Maps', kn: 'Google Maps ನಲ್ಲಿ ತೆರೆಯಿರಿ' },
  rsvpTitle: { en: 'Will you join us?', kn: 'ನೀವು ಬರುತ್ತೀರಾ?' },
  rsvpSub: {
    en: 'A quick note helps us welcome you with open arms',
    kn: 'ನಿಮ್ಮ ಉತ್ತರ ನಮಗೆ ನಿಮ್ಮನ್ನು ಸ್ವಾಗತಿಸಲು ಸಹಾಯವಾಗುತ್ತದೆ',
  },
  rsvpCta: { en: 'RSVP on WhatsApp', kn: 'WhatsApp ನಲ್ಲಿ RSVP' },
  countdownLabel: { en: 'Until Muhurtham', kn: 'ಮುಹೂರ್ತದವರೆಗೆ' },
  days: { en: 'Days', kn: 'ದಿನ' },
  hours: { en: 'Hours', kn: 'ಗಂಟೆ' },
  minutes: { en: 'Mins', kn: 'ನಿಮಿಷ' },
  seconds: { en: 'Secs', kn: 'ಸೆಕೆಂಡ್' },
  footerBlessing: {
    en: 'Come share in our joy',
    kn: 'ನಮ್ಮ ಸಂತೋಷದಲ್ಲಿ ಪಾಲುಗೊಳ್ಳಿ',
  },
  from: { en: 'With love', kn: 'ಪ್ರೀತಿಯಿಂದ' },
  families: {
    en: 'The families of Sindhu & Suman',
    kn: 'ಸಿಂಧು ಮತ್ತು ಸುಮನ್ ಕುಟುಂಬಗಳು',
  },
}

export const events = [
  {
    id: 'haldi',
    date: { en: 'Friday, 17 October 2026', kn: 'ಶುಕ್ರವಾರ, ೧೭ ಅಕ್ಟೋಬರ್ ೨೦೨೬' },
    time: { en: '10:00 AM', kn: 'ಬೆಳಿಗ್ಗೆ ೧೦:೦೦' },
    title: { en: 'Haldi', kn: 'ಹಳದಿ' },
    desc: {
      en: 'Turmeric blessings to glow into the wedding weekend',
      kn: 'ವಿವಾಹ ವಾರಾಂತ್ಯಕ್ಕೆ ಅರಿಶಿನದ ಆಶೀರ್ವಾದ',
    },
  },
  {
    id: 'reception',
    date: { en: 'Friday, 17 October 2026', kn: 'ಶುಕ್ರವಾರ, ೧೭ ಅಕ್ಟೋಬರ್ ೨೦೨೬' },
    time: { en: '6:30 PM', kn: 'ಸಂಜೆ ೬:೩೦' },
    title: { en: 'Reception', kn: 'ಸ್ವಾಗತ ಸಮಾರಂಭ' },
    desc: {
      en: 'An evening of music, dinner, and warm welcomes',
      kn: 'ಸಂಗೀತ, ಊಟ ಮತ್ತು ಆತ್ಮೀಯ ಸ್ವಾಗತದ ಸಂಜೆ',
    },
  },
  {
    id: 'muhurtham',
    date: { en: 'Saturday, 18 October 2026', kn: 'ಶನಿವಾರ, ೧೮ ಅಕ್ಟೋಬರ್ ೨೦೨೬' },
    time: { en: '6:40 AM – 7:40 AM', kn: 'ಬೆಳಿಗ್ಗೆ ೬:೪೦ – ೭:೪೦' },
    title: { en: 'Muhurtham', kn: 'ಮುಹೂರ್ತ' },
    desc: {
      en: 'The auspicious hour of our wedding rites',
      kn: 'ನಮ್ಮ ವಿವಾಹ ವಿಧಿಗಳ ಪವಿತ್ರ ಘಳಿಗೆ',
    },
  },
] as const

export const vows = [
  {
    en: 'To be together forever',
    kn: 'ಯಾವಾಗಲೂ ಒಟ್ಟಿಗೆ ಇರಲು',
  },
  {
    en: 'To nourish each other',
    kn: 'ಪರಸ್ಪರ ಪೋಷಿಸಲು',
  },
  {
    en: 'To remain friends lifelong',
    kn: 'ಜೀವನಪರ್ಯಂತ ಸ್ನೇಹಿತರಾಗಿರಲು',
  },
  {
    en: 'To grow together in strength',
    kn: 'ಒಟ್ಟಿಗೆ ಬಲಗೊಳ್ಳಲು',
  },
  {
    en: 'To preserve our wealth',
    kn: 'ನಮ್ಮ ಸಂಪತ್ತನ್ನು ಕಾಪಾಡಲು',
  },
  {
    en: 'To share our joys & sorrows',
    kn: 'ಸಂತೋಷ-ದುಃಖಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಲು',
  },
  {
    en: 'To care for our children',
    kn: 'ನಮ್ಮ ಮಕ್ಕಳನ್ನು ಪೋಷಿಸಲು',
  },
] as const

export const rituals = [
  { en: 'Gauri Puja', kn: 'ಗೌರಿ ಪೂಜೆ' },
  { en: 'Jeelakarra Bellam', kn: 'ಜೀಲಕರ್ರ ಬೆಲ್ಲಂ' },
  { en: 'Mangalyadharanam', kn: 'ಮಾಂಗಲ್ಯಧಾರಣ' },
  { en: 'Saptapadi', kn: 'ಸಪ್ತಪದಿ' },
  { en: 'Talambralu', kn: 'ತಲಂಬ್ರಾಲು' },
  { en: 'Kanyadanam', kn: 'ಕನ್ಯಾದಾನ' },
] as const

/** Muhurtham start — used for countdown */
export const muhurthamAt = new Date('2026-10-18T06:40:00+05:30')
