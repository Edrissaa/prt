import * as React from 'react'

import { cn } from '@/lib/utils'

type CardProps = React.ComponentProps<'div'> & {
  /** Adds a subtle lift + shadow on hover. */
  interactive?: boolean
}

function Card({ className, interactive, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-neutral-200/80 bg-card text-card-foreground shadow-subtle',
        interactive &&
          'transition-all duration-300 ease-out-soft hover:-translate-y-1 hover:shadow-lift',
        className,
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('p-5 sm:p-12', className)} {...props} />
}

export { Card, CardContent }
