export function Toran({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="leafGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2f6b3a" />
          <stop offset="100%" stopColor="#1a4a24" />
        </linearGradient>
        <radialGradient id="marigoldGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ffd56a" />
          <stop offset="55%" stopColor="#f0a020" />
          <stop offset="100%" stopColor="#c45c12" />
        </radialGradient>
      </defs>
      <line
        x1="0"
        y1="14"
        x2="1200"
        y2="14"
        stroke="#8b5a1a"
        strokeWidth="3"
      />
      {Array.from({ length: 24 }).map((_, i) => {
        const x = 25 + i * 49
        return (
          <g key={i}>
            <path
              d={`M${x} 16 Q${x - 14} 42 ${x - 6} 62 Q${x} 48 ${x + 6} 62 Q${x + 14} 42 ${x} 16`}
              fill="url(#leafGrad)"
            />
            {i % 2 === 0 && (
              <g transform={`translate(${x}, 28)`}>
                <circle r="11" fill="url(#marigoldGrad)" />
                <circle r="4" fill="#7a3b0a" opacity="0.45" />
              </g>
            )}
          </g>
        )
      })}
    </svg>
  )
}

export function HangingDiyas({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 160"
      aria-hidden="true"
    >
      {[40, 110, 180].map((x, i) => (
        <g key={x} className={`diya-swing diya-swing-${i}`}>
          <line
            x1={x}
            y1="0"
            x2={x}
            y2={48 + i * 6}
            stroke="#2f6b3a"
            strokeWidth="1.5"
            strokeDasharray="2 3"
          />
          <circle cx={x - 8} cy={22} r="3.5" fill="#e88a9a" />
          <circle cx={x + 8} cy={30} r="3" fill="#c77dff" />
          <ellipse
            cx={x}
            cy={68 + i * 6}
            rx="16"
            ry="7"
            fill="#c9a227"
            stroke="#8b6914"
            strokeWidth="1"
          />
          <path
            d={`M${x - 12} ${68 + i * 6} Q${x} ${88 + i * 6} ${x + 12} ${68 + i * 6}`}
            fill="#a67c1a"
          />
          <ellipse
            className="flame"
            cx={x}
            cy={58 + i * 6}
            rx="4"
            ry="8"
            fill="#ffb347"
          />
          <ellipse
            className="flame-core"
            cx={x}
            cy={60 + i * 6}
            rx="2"
            ry="4"
            fill="#fff6d0"
          />
        </g>
      ))}
    </svg>
  )
}

export function Kolam({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <g fill="none" stroke="#8b1e1e" strokeWidth="1.4">
        <circle cx="32" cy="32" r="6" />
        <circle cx="32" cy="32" r="14" />
        <path d="M32 8 L36 20 L32 18 L28 20 Z" />
        <path d="M32 56 L36 44 L32 46 L28 44 Z" />
        <path d="M8 32 L20 36 L18 32 L20 28 Z" />
        <path d="M56 32 L44 36 L46 32 L44 28 Z" />
        <path d="M14 14 L24 22 L20 20 L22 24 Z" />
        <path d="M50 50 L40 42 L44 44 L42 40 Z" />
        <path d="M50 14 L40 22 L44 20 L42 24 Z" />
        <path d="M14 50 L24 42 L20 44 L22 40 Z" />
      </g>
    </svg>
  )
}

export function Footprints({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 28" aria-hidden="true">
      <ellipse cx="14" cy="16" rx="7" ry="10" fill="#8b1e1e" opacity="0.85" />
      <circle cx="10" cy="5" r="2.2" fill="#8b1e1e" opacity="0.85" />
      <circle cx="14.5" cy="3.5" r="2.2" fill="#8b1e1e" opacity="0.85" />
      <circle cx="19" cy="5" r="2" fill="#8b1e1e" opacity="0.85" />
      <ellipse cx="34" cy="16" rx="7" ry="10" fill="#8b1e1e" opacity="0.85" />
      <circle cx="30" cy="5" r="2.2" fill="#8b1e1e" opacity="0.85" />
      <circle cx="34.5" cy="3.5" r="2.2" fill="#8b1e1e" opacity="0.85" />
      <circle cx="39" cy="5" r="2" fill="#8b1e1e" opacity="0.85" />
    </svg>
  )
}

export function GaneshaMark({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" aria-hidden="true">
      <circle cx="40" cy="40" r="36" fill="#8b1e1e" opacity="0.12" />
      <circle cx="40" cy="40" r="30" fill="none" stroke="#c9a227" strokeWidth="1.5" />
      <path
        d="M40 16c-10 0-18 7-18 18 0 6 3 11 7 14v8c0 4 3 8 8 8h6c5 0 8-4 8-8v-8c4-3 7-8 7-14 0-11-8-18-18-18z"
        fill="#8b1e1e"
      />
      <ellipse cx="40" cy="30" rx="12" ry="10" fill="#f7efe0" />
      <circle cx="35" cy="29" r="1.8" fill="#8b1e1e" />
      <circle cx="45" cy="29" r="1.8" fill="#8b1e1e" />
      <path
        d="M40 34c2 4 6 8 10 9-6 2-12 1-16-2 2-2 4-5 6-7z"
        fill="#c9a227"
      />
      <path
        d="M28 22c-4-2-8 0-10 4 4-1 8 0 10-4zM52 22c4-2 8 0 10 4-4-1-8 0-10-4z"
        fill="#c9a227"
      />
    </svg>
  )
}

export function BananaLeafAccent({
  side = 'left',
  className = '',
}: {
  side?: 'left' | 'right'
  className?: string
}) {
  const flip = side === 'right' ? 'scale(-1,1) translate(-180,0)' : undefined
  return (
    <svg
      className={className}
      viewBox="0 0 180 420"
      aria-hidden="true"
    >
      <g transform={flip}>
        <path
          d="M20 40 C90 80 150 160 155 250 C158 310 120 370 70 400 C110 320 100 220 70 140 C50 90 30 60 20 40Z"
          fill="#2f6b3a"
          opacity="0.9"
        />
        <path
          d="M35 70 C95 110 130 180 132 250 C90 200 70 140 50 95Z"
          fill="#3f8a4c"
          opacity="0.55"
        />
        <path
          d="M28 55 C70 100 100 170 105 240"
          fill="none"
          stroke="#1a4a24"
          strokeWidth="2"
        />
        <ellipse cx="95" cy="330" rx="28" ry="40" fill="#6b2d6b" opacity="0.85" />
        <ellipse cx="95" cy="330" rx="14" ry="22" fill="#f0c040" opacity="0.7" />
      </g>
    </svg>
  )
}
