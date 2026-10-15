import { Reveal } from '@/components/shared/reveal'
import { brands } from '@/data/content'
import { cn } from '@/lib/utils'

export function Brands() {
  return (
    <section id="customers" className="border-b border-neutral-100 bg-white py-14">
      <Reveal className="mx-auto max-w-7xl px-6 text-center">
        <h3 className="mb-9 font-editorial text-2xl text-neutral-900">Loved by brands</h3>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
          {brands.map((b) => (
            <li
              key={b.name}
              className={cn(
                'cursor-default text-neutral-800 opacity-60 grayscale transition-all duration-300 hover:-translate-y-0.5 hover:opacity-100',
                b.className,
              )}
            >
              {b.name}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
