import { BadgeInfo, Play, TrendingUp, Star } from 'lucide-react'

import { Reveal } from '@/components/shared/reveal'
import { SmartImage } from '@/components/shared/smart-image'
import { Badge } from '@/components/ui/badge'
import { images } from '@/data/content'

const stats = [
  { icon: TrendingUp, tone: 'bg-emerald-50 text-emerald-600', value: '6 million', label: 'Projected global e-commerce coverage by 2025' },
  { icon: Play, tone: 'bg-indigo-50 text-indigo-600', value: '31%', label: 'Decrease in cart abandonment rate after interactive video demo integration' },
  { icon: BadgeInfo, tone: 'bg-amber-50 text-amber-600', value: '29 million', label: 'Shoppers engaged across native mobile experiences globally' },
]

export function Benchmarks() {
  return (
    <section id="benchmarks" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12">
        <div className="space-y-10 lg:col-span-6">
          <Reveal>
            <h2 className="font-editorial mb-5 text-4xl leading-[1.12] tracking-tight text-neutral-900 sm:text-5xl">
              Achieving Superior Industry Benchmarks
            </h2>
            <Badge variant="dark" size="md" className="gap-2 font-medium">
              <Star className="size-3.5 fill-emerald-400 text-emerald-400" />
              <span>
                ReelUp ranks No.1 app on the <span className="font-semibold text-emerald-400 underline underline-offset-2">shopify</span> app store
              </span>
            </Badge>
          </Reveal>

          <ul className="space-y-7">
            {stats.map(({ icon: Icon, tone, value, label }, i) => (
              <li key={value}>
                <Reveal delay={i * 90} className="group flex items-start gap-4">
                  <span className={`mt-1.5 flex size-9 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 ease-out-soft group-hover:scale-110 ${tone}`}>
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <div className="font-editorial text-5xl leading-none tracking-tight text-neutral-900">{value}</div>
                    <p className="mt-1.5 max-w-sm text-sm text-neutral-500">{label}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <Reveal delay={120} className="lg:col-span-6">
          <figure className="group relative max-h-[580px] overflow-hidden rounded-3xl bg-neutral-900 shadow-float">
            <div className="aspect-[4/4.4] max-h-[580px] w-full">
              <SmartImage
                src={images.jewelry}
                alt="Model wearing fine jewelry in an editorial lifestyle shot"
                className="transition-transform duration-700 ease-out-soft group-hover:scale-105"
                fallbackClassName="bg-gradient-to-br from-stone-400 to-stone-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-6 bottom-6 flex items-center justify-between text-white">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-300">Merchant Highlight</p>
                <p className="font-serif text-2xl italic">Aura Fine Jewelry Co.</p>
              </div>
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-md">+420% ROI</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
