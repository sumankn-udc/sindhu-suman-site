import { couple, venue } from '../content'

type CalendarEvent = {
  id: string
  title: { en: string; kn: string }
  start: string
  end: string
}

function icsStamp() {
  const d = new Date()
  const p = (n: number) => String(n).padStart(2, '0')
  return (
    `${d.getUTCFullYear()}${p(d.getUTCMonth() + 1)}${p(d.getUTCDate())}` +
    `T${p(d.getUTCHours())}${p(d.getUTCMinutes())}${p(d.getUTCSeconds())}Z`
  )
}

function escapeIcs(text: string) {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n')
}

/** Build a single VEVENT ICS blob (local India time via TZID). */
export function buildEventIcs(event: CalendarEvent, lang: 'en' | 'kn' = 'en') {
  const title = event.title[lang]
  const location = `${venue.name.en}, ${venue.address.en}`
  const description = `${couple.bride.en} & ${couple.groom.en} — ${title}`
  const uid = `${event.id}-${event.start}@thesianchronicles.blog`

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Sindhu Suman Wedding//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${icsStamp()}`,
    `DTSTART;TZID=Asia/Kolkata:${event.start}`,
    `DTEND;TZID=Asia/Kolkata:${event.end}`,
    `SUMMARY:${escapeIcs(title)}`,
    `DESCRIPTION:${escapeIcs(description)}`,
    `LOCATION:${escapeIcs(location)}`,
    `URL:${venue.mapsUrl}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
}

export function downloadEventIcs(event: CalendarEvent, lang: 'en' | 'kn' = 'en') {
  const ics = buildEventIcs(event, lang)
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `sindhu-suman-${event.id}.ics`
  a.rel = 'noopener'
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}
