import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react'
import { useInView } from '../hooks/useInView'

type Variant = 'fade-up' | 'pop' | 'fade' | 'slide-left' | 'slide-right' | 'zoom'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Motion style. Default fade-up */
  variant?: Variant
  /** Extra delay in ms before the enter transition */
  delay?: number
  as?: ElementType
  /** Forwarded to the root element (e.g. section id) */
  id?: string
}

export function Reveal({
  children,
  className = '',
  variant = 'fade-up',
  delay = 0,
  as: Tag = 'div',
  id,
}: RevealProps) {
  const { ref, inView } = useInView()
  const style = {
    '--reveal-delay': `${delay}ms`,
  } as CSSProperties

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal reveal--${variant}${inView ? ' is-inview' : ''} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  )
}

type RevealGroupProps = {
  children: ReactNode
  className?: string
  /** Stagger step between children (ms). Default 90 */
  stagger?: number
  as?: ElementType
}

/** Parent that toggles `is-inview`; children use `.reveal-item` + `--i` for stagger. */
export function RevealGroup({
  children,
  className = '',
  stagger = 90,
  as: Tag = 'div',
}: RevealGroupProps) {
  const { ref, inView } = useInView({ threshold: 0.08 })
  const style = {
    '--reveal-stagger': `${stagger}ms`,
  } as CSSProperties

  return (
    <Tag
      ref={ref}
      className={`reveal-group${inView ? ' is-inview' : ''} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  )
}

type RevealItemProps = {
  children: ReactNode
  className?: string
  /** Stagger index (0-based) */
  index?: number
  variant?: 'fade-up' | 'pop' | 'slide-left' | 'slide-right' | 'zoom'
  as?: ElementType
}

export function RevealItem({
  children,
  className = '',
  index = 0,
  variant = 'fade-up',
  as: Tag = 'div',
}: RevealItemProps) {
  const style = { '--i': index } as CSSProperties
  return (
    <Tag
      className={`reveal-item reveal-item--${variant} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  )
}
