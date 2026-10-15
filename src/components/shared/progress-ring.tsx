import { useInView } from '@/hooks/use-in-view'
import { cn } from '@/lib/utils'

type ProgressRingProps = {
  value: number
  label: string
  className?: string
}

const SIZE = 112
const STROKE = 5
const RADIUS = (SIZE - STROKE) / 2
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

/** SVG percentage ring that draws itself in when scrolled into view. */
export function ProgressRing({ value, label, className }: ProgressRingProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const offset = CIRCUMFERENCE * (1 - value / 100)

  return (
    <div ref={ref} className={cn('group flex flex-col items-center text-center', className)}>
      <div className="relative size-24 transition-transform duration-300 ease-out-soft group-hover:scale-105 sm:size-28">
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="size-full -rotate-90" aria-hidden>
          <circle cx={SIZE / 2} cy={SIZE / 2} r={RADIUS} fill="none" strokeWidth={STROKE} className="stroke-brand-violet/15" />
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            strokeWidth={STROKE}
            strokeLinecap="round"
            className={cn('stroke-brand-violet', inView && 'animate-ring-in')}
            style={
              {
                '--ring-circumference': CIRCUMFERENCE,
                strokeDasharray: CIRCUMFERENCE,
                strokeDashoffset: inView ? offset : CIRCUMFERENCE,
              } as React.CSSProperties
            }
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-editorial text-3xl text-neutral-900 sm:text-4xl">
          {value}%
        </span>
      </div>
      <span className="mt-3 text-xs font-semibold text-neutral-600">{label}</span>
    </div>
  )
}
