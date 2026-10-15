import { Eye, Package, Plus } from 'lucide-react'

import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { SmartImage } from '@/components/shared/smart-image'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { images } from '@/data/content'
import { cn } from '@/lib/utils'

type FeatureRowProps = {
  step: string
  stepClassName: string
  title: string
  body: string
  reverse?: boolean
  children: React.ReactNode
}

/** Two-column feature card: product mockup panel + step copy. */
function FeatureRow({ step, stepClassName, title, body, reverse, children }: FeatureRowProps) {
  return (
    <Reveal>
      <Card interactive>
        <CardContent className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div
            className={cn(
              'rounded-2xl border border-neutral-200/60 bg-brand-panel p-3 sm:p-8 lg:col-span-7',
              reverse && 'lg:order-2',
            )}
          >
            <div className="mx-auto max-w-md rounded-2xl border border-neutral-100 bg-white p-4 shadow-sm sm:p-6">{children}</div>
          </div>
          <div className={cn('text-left lg:col-span-5', reverse && 'lg:order-1')}>
            <Badge variant="step" size="sm" className={cn('mb-4', stepClassName)}>
              {step}
            </Badge>
            <h3 className="font-editorial mb-4 text-4xl leading-tight text-neutral-900 sm:text-5xl">{title}</h3>
            <p className="text-base leading-relaxed text-neutral-500">{body}</p>
          </div>
        </CardContent>
      </Card>
    </Reveal>
  )
}

const channels = [
  { name: 'YouTube', glyph: '▶', glyphClass: 'text-red-600', hover: 'hover:border-red-400' },
  { name: 'TikTok', glyph: '♫', glyphClass: 'text-black', hover: 'hover:border-neutral-900' },
  { name: 'Instagram', glyph: '◎', glyphClass: 'text-pink-600', hover: 'hover:border-pink-400' },
]

export function Features() {
  return (
    <section id="features" className="bg-brand-sand py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Sell like a pro" title="Take your live shopping events to the level" className="mb-20 max-w-2xl" />
        </Reveal>

        <div className="space-y-12">
          <FeatureRow
            step="Step 1"
            stepClassName="bg-orange-100 text-orange-700"
            title="Invite multiple hosts"
            body="Go live with multiple hosts from around the world. Allow influencers, product specialists, and brand ambassadors to broadcast synchronously with seamless checkout controls."
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wide text-neutral-800">Hosts</span>
                <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-600">4 active</span>
              </div>
              <button className="flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-white transition-all hover:bg-neutral-800 active:scale-95">
                <Plus className="size-3" /> Add host
              </button>
            </div>
            <div className="mb-6 flex items-center gap-2 py-1">
              {images.hosts.map((src, i) => (
                <div
                  key={src}
                  className={cn(
                    'size-12 shrink-0 overflow-hidden rounded-full ring-2 transition-all duration-200 hover:-translate-y-0.5',
                    i === 0 ? 'ring-brand-lime-bright' : 'ring-transparent hover:ring-neutral-300',
                  )}
                >
                  <SmartImage src={src} alt={`Host ${i + 1}`} fallbackClassName={['bg-rose-300', 'bg-violet-300', 'bg-amber-300'][i]} />
                </div>
              ))}
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-dashed border-neutral-300 bg-neutral-100 text-xs font-bold text-neutral-500">
                +4
              </div>
            </div>
            <div className="mb-6 flex items-center justify-between rounded-xl border border-neutral-100 bg-neutral-50 p-3">
              <div className="flex items-center gap-3">
                <div className="size-12 shrink-0 overflow-hidden rounded-lg">
                  <SmartImage src={images.shoe} alt="Nike Flex Experience shoe" fallbackClassName="bg-gradient-to-br from-sky-200 to-sky-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Nike Flex Experience</h4>
                  <div className="flex items-center gap-1 text-[10px] text-amber-500">
                    ★★★★★ <span className="font-medium text-neutral-400">(65)</span>
                  </div>
                  <p className="mt-0.5 text-xs font-bold text-neutral-900">Rs. 4,995.00</p>
                </div>
              </div>
              <span className="rounded-full bg-black px-2.5 py-1 text-[11px] font-medium text-white">Pin Item</span>
            </div>
            <div className="grid grid-cols-2 gap-4 border-t border-neutral-100 pt-4">
              <div>
                <span className="text-lg font-extrabold text-neutral-900">1.5 Million</span>
                <p className="flex items-center gap-1 text-[11px] font-medium text-neutral-500"><Package className="size-3" /> Orders placed</p>
              </div>
              <div>
                <span className="text-lg font-extrabold text-neutral-900">137 Million</span>
                <p className="flex items-center gap-1 text-[11px] font-medium text-neutral-500"><Eye className="size-3" /> Video views</p>
              </div>
            </div>
          </FeatureRow>

          <FeatureRow
            reverse
            step="Step 2"
            stepClassName="bg-emerald-100 text-emerald-800"
            title="Go live everywhere at once"
            body="Loaded with an array of captivating widgets designed to showcase interactive shopping videos on your store, including video carousels, Instagram-style stories, pop-ups, video grids, and more."
          >
            <div className="mb-4 flex items-center justify-between border-b border-neutral-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="flex size-6 items-center justify-center rounded bg-neutral-900 text-xs font-bold text-white">R</span>
                <span className="text-xs font-bold text-neutral-900">ReelUp Live</span>
                <span className="rounded bg-neutral-100 px-1.5 py-0.5 text-[9px] font-bold text-neutral-600">APP</span>
              </div>
              <span className="font-mono text-xs text-neutral-400">5:41 PM</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-neutral-50 p-3">
                <div>
                  <p className="text-xs font-bold text-neutral-800">Nike Runner series ⚡</p>
                  <p className="text-[11px] text-neutral-500">$118.95 USD</p>
                </div>
                <span className="rounded bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-600">218 in cart</span>
              </div>
              <div className="pt-3">
                <p className="mb-3 flex items-center gap-1.5 text-xs font-semibold text-neutral-600">
                  <span className="size-2 animate-live-pulse rounded-full bg-red-500" /> Going Live on
                </p>
                <div className="flex flex-wrap items-center gap-2.5">
                  {channels.map((c) => (
                    <div
                      key={c.name}
                      className={cn(
                        'flex cursor-default items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm',
                        c.hover,
                      )}
                    >
                      <span className={cn('font-bold', c.glyphClass)}>{c.glyph}</span> {c.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FeatureRow>
        </div>
      </div>
    </section>
  )
}
