import { ArrowRight } from 'lucide-react'

import { ProgressRing } from '@/components/shared/progress-ring'
import { Reveal } from '@/components/shared/reveal'
import { Card, CardContent } from '@/components/ui/card'

const rings = [
  { value: 89, label: 'Instagram' },
  { value: 72, label: 'TikTok' },
  { value: 79, label: 'Facebook' },
]

export function SocialMetrics() {
  return (
    <section className="border-y border-neutral-100 bg-brand-sand py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Card interactive>
            <CardContent className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-neutral-400">Social Traffic</span>
                <h3 className="mb-3 text-2xl font-bold text-neutral-900">Ranked #1 social media</h3>
                <p className="mb-5 text-sm leading-relaxed text-neutral-500">
                  Loaded with an array of captivating widgets designed to showcase interactive shopping experiences directly in feeds.
                </p>
                <a href="#learn-more" className="group inline-flex items-center gap-1.5 text-sm font-bold text-neutral-900">
                  Learn More
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
              <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:col-span-8">
                {rings.map((r) => (
                  <ProgressRing key={r.label} {...r} />
                ))}
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
