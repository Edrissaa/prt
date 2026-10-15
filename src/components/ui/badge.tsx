import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full font-semibold whitespace-nowrap',
  {
    variants: {
      variant: {
        default: 'bg-neutral-100 text-neutral-700 border border-neutral-200',
        outline: 'bg-white text-neutral-600 border border-neutral-200 shadow-subtle',
        dark: 'bg-primary text-primary-foreground',
        step: 'rounded-md uppercase tracking-wider',
      },
      size: {
        xs: 'px-2 py-0.5 text-[10px]',
        sm: 'px-3 py-1 text-[11px] tracking-widest uppercase',
        md: 'px-3.5 py-1.5 text-xs',
      },
    },
    defaultVariants: { variant: 'default', size: 'sm' },
  },
)

function Badge({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
}

export { Badge, badgeVariants }
