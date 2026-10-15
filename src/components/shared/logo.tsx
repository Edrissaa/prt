import { cn } from '@/lib/utils'

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'flex size-8 items-center justify-center rounded-full border border-black/15 transition-transform duration-500 ease-out-soft group-hover:rotate-45',
        className,
      )}
    >
      <svg viewBox="0 0 24 24" className="size-4 text-black" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
        <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05 5.636 5.636" />
      </svg>
    </span>
  )
}
