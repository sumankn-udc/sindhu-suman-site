type Motion =
  | 'kenburns'
  | 'kenburns-out'
  | 'float'
  | 'pan-left'
  | 'pan-right'
  | 'pulse'

type AnimatedPhotoProps = {
  src: string
  alt: string
  motion?: Motion
  className?: string
  imgClassName?: string
}

export function AnimatedPhoto({
  src,
  alt,
  motion = 'kenburns',
  className = '',
  imgClassName = '',
}: AnimatedPhotoProps) {
  return (
    <div className={`anim-photo anim-${motion} ${className}`.trim()}>
      <img className={imgClassName} src={src} alt={alt} loading="lazy" />
    </div>
  )
}
