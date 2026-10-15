import * as React from 'react'

import { useInView } from '@/hooks/use-in-view'
import { cn } from '@/lib/utils'

type RevealProps = React.ComponentProps<'div'> & {
  /** Stagger delay in ms. */
  delay?: number
}

/** Fades + lifts its children in once when scrolled into view. */
export function Reveal({ delay = 0, className, style, ...props }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      data-in={inView}
      className={cn('reveal', className)}
      style={{ ...style, '--reveal-delay': `${delay}ms` } as React.CSSProperties}
      {...props}
    />
  )
}
