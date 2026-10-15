import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  className?: string
  align?: 'center' | 'left'
}

export function SectionHeading({ eyebrow, title, className, align = 'center' }: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' ? 'mx-auto text-center' : 'text-left', className)}>
      {eyebrow && (
        <Badge variant="outline" className="mb-5">
          {eyebrow}
        </Badge>
      )}
      <h2 className="font-editorial text-4xl leading-[1.12] tracking-tight text-neutral-900 sm:text-5xl">
        {title}
      </h2>
    </div>
  )
}
