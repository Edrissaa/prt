import * as React from 'react'

import { cn } from '@/lib/utils'

type SmartImageProps = React.ComponentProps<'img'> & {
  /** Tailwind classes painted behind the image and shown if it fails to load. */
  fallbackClassName?: string
}

/** Image that fades in on load and degrades to a tinted block if the source is unavailable. */
export function SmartImage({
  className,
  fallbackClassName = 'bg-gradient-to-br from-neutral-100 to-neutral-200',
  alt,
  ...props
}: SmartImageProps) {
  const [state, setState] = React.useState<'loading' | 'loaded' | 'error'>('loading')
  const imgRef = React.useRef<HTMLImageElement>(null)

  // Handle images that finished loading before hydration attached onLoad.
  React.useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) setState('loaded')
  }, [])

  return (
    <span className={cn('block h-full w-full', fallbackClassName)}>
      {state !== 'error' && (
        <img
          ref={imgRef}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setState('loaded')}
          onError={() => setState('error')}
          className={cn(
            'h-full w-full object-cover transition-opacity duration-500',
            state === 'loaded' ? 'opacity-100' : 'opacity-0',
            className,
          )}
          {...props}
        />
      )}
    </span>
  )
}
