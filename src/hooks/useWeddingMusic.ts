import { useCallback, useEffect, useRef, useState } from 'react'
import { weddingMusic } from '../content'

type YtPlayer = {
  playVideo: () => void
  pauseVideo: () => void
  mute: () => void
  unMute: () => void
  setVolume: (n: number) => void
  destroy: () => void
}

declare global {
  interface Window {
    YT?: {
      Player: new (
        el: HTMLElement | string,
        opts: {
          videoId: string
          width?: string | number
          height?: string | number
          playerVars?: Record<string, string | number>
          events?: {
            onReady?: (e: { target: YtPlayer }) => void
            onStateChange?: (e: { data: number; target: YtPlayer }) => void
          }
        },
      ) => YtPlayer
      PlayerState: { PLAYING: number; PAUSED: number; ENDED: number }
    }
    onYouTubeIframeAPIReady?: () => void
  }
}

let apiLoadPromise: Promise<void> | null = null

function loadYouTubeApi() {
  if (typeof window === 'undefined') return Promise.resolve()
  if (window.YT?.Player) return Promise.resolve()
  if (apiLoadPromise) return apiLoadPromise

  apiLoadPromise = new Promise<void>((resolve) => {
    const prior = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      prior?.()
      resolve()
    }
    if (!document.getElementById('yt-iframe-api')) {
      const tag = document.createElement('script')
      tag.id = 'yt-iframe-api'
      tag.src = 'https://www.youtube.com/iframe_api'
      document.head.appendChild(tag)
    }
    // API may already be mid-load from a previous mount
    const poll = window.setInterval(() => {
      if (window.YT?.Player) {
        window.clearInterval(poll)
        resolve()
      }
    }, 50)
  })
  return apiLoadPromise
}

/**
 * iOS WebKit (Safari + Chrome on iPhone) only starts media inside a real
 * user-gesture call stack. Keep a YT player ready, then call play/unMute from
 * Open Invitation / Music FAB clicks — not from React effects alone.
 */
export function useWeddingMusic() {
  const hostRef = useRef<HTMLDivElement | null>(null)
  const playerRef = useRef<YtPlayer | null>(null)
  const [ready, setReady] = useState(false)
  const [playing, setPlaying] = useState(false)
  const wantPlayRef = useRef(false)
  const initStartedRef = useRef(false)

  const ensurePlayer = useCallback(async (host: HTMLDivElement) => {
    if (initStartedRef.current && playerRef.current) return
    initStartedRef.current = true
    await loadYouTubeApi()
    if (!window.YT?.Player) {
      initStartedRef.current = false
      return
    }
    if (playerRef.current) return

    playerRef.current = new window.YT.Player(host, {
      videoId: weddingMusic.youtubeId,
      width: 240,
      height: 135,
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        modestbranding: 1,
        playsinline: 1,
        rel: 0,
        loop: 1,
        playlist: weddingMusic.youtubeId,
        origin: window.location.origin,
      },
      events: {
        onReady: (e) => {
          e.target.mute()
          e.target.setVolume(100)
          setReady(true)
          // Muted preload helps some browsers; iOS still needs a gesture to unmute.
          try {
            e.target.playVideo()
          } catch {
            /* ignore */
          }
          if (wantPlayRef.current) {
            e.target.unMute()
            e.target.playVideo()
            setPlaying(true)
          }
        },
        onStateChange: (e) => {
          const playingState = window.YT?.PlayerState.PLAYING ?? 1
          const ended = window.YT?.PlayerState.ENDED ?? 0
          if (e.data === playingState) setPlaying(true)
          if (e.data === ended && wantPlayRef.current) e.target.playVideo()
        },
      },
    })
  }, [])

  // Callback ref so we init as soon as the off-screen host mounts (after loading).
  const setHostRef = useCallback(
    (node: HTMLDivElement | null) => {
      hostRef.current = node
      if (node) void ensurePlayer(node)
    },
    [ensurePlayer],
  )

  useEffect(() => {
    return () => {
      try {
        playerRef.current?.destroy()
      } catch {
        /* ignore */
      }
      playerRef.current = null
      initStartedRef.current = false
    }
  }, [])

  /** Must run from a click/touch handler for iPhone Chrome/Safari. */
  const play = useCallback(() => {
    wantPlayRef.current = true
    const p = playerRef.current
    if (!p) {
      setPlaying(true)
      return
    }
    try {
      p.unMute()
      p.setVolume(100)
      p.playVideo()
      setPlaying(true)
    } catch {
      setPlaying(false)
    }
  }, [])

  const pause = useCallback(() => {
    wantPlayRef.current = false
    try {
      playerRef.current?.pauseVideo()
    } catch {
      /* ignore */
    }
    setPlaying(false)
  }, [])

  const toggle = useCallback(() => {
    if (wantPlayRef.current && playing) pause()
    else play()
  }, [playing, play, pause])

  return { setHostRef, ready, playing, play, pause, toggle }
}
