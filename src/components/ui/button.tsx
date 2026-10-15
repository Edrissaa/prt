import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-200 ease-out-soft active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-sm hover:-translate-y-px hover:bg-black hover:shadow-lift',
        outline:
          'border border-neutral-300 bg-white text-neutral-800 shadow-sm hover:-translate-y-px hover:border-neutral-400 hover:bg-neutral-50 hover:shadow-md',
        ghost: 'text-neutral-700 hover:bg-neutral-100 hover:text-black',
        lime: 'bg-brand-lime text-brand-charcoal shadow-sm hover:-translate-y-px hover:brightness-95 hover:shadow-lift',
      },
      size: {
        sm: 'h-8 px-3.5 text-xs',
        default: 'h-10 px-5 text-sm',
        lg: 'h-12 px-7 text-sm font-semibold',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
)

type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
}

export { Button, buttonVariants }
