import { BarChart3, Heart, MessageCircle } from 'lucide-react'

import { Reveal } from '@/components/shared/reveal'
import { SmartImage } from '@/components/shared/smart-image'
import { Button } from '@/components/ui/button'
import { images } from '@/data/content'
import { cn } from '@/lib/utils'

/** Tilted card that settles flat on hover. */
function Floating({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'absolute z-20 shadow-float transition-all duration-300 ease-out-soft hover:z-30 hover:-translate-y-1 hover:rotate-0',
        className,
      )}
      {...props}
    />
  )
}

export function Hero() {
  return (
    <section id="top" className="hero-glow relative overflow-hidden border-b border-neutral-100 pb-24 pt-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <Reveal>
          <h1 className="font-editorial mx-auto mb-6 max-w-4xl text-5xl leading-[1.05] tracking-tight text-neutral-900 sm:text-6xl md:text-7xl">
            AI-Powered Conversion Boost Product 4x
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mb-9 max-w-xl text-base text-neutral-500 sm:text-lg">
            From concept to conversion — manage thousands of successful influencers ads seamlessly.
          </p>
        </Reveal>
        <Reveal delay={180} className="mb-16 flex flex-wrap items-center justify-center gap-3.5">
          <Button asChild size="lg">
            <a href="#download">Download Free App</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-medium">
            <a href="#demo">Get Started Free</a>
          </Button>
        </Reveal>

        {/* Product showcase */}
        <Reveal delay={260} className="relative mx-auto max-w-3xl">
          <div className="relative flex min-h-[480px] items-center justify-center">
            <div aria-hidden className="pointer-events-none absolute hidden size-[470px] rounded-full border border-neutral-200/70 sm:block" />
            <div aria-hidden className="pointer-events-none absolute hidden size-[640px] rounded-full border border-neutral-100 sm:block" />

            {/* Phone */}
            <div className="relative z-10 w-64 rounded-[38px] border-[3px] border-neutral-700/60 bg-neutral-900 p-2.5 shadow-2xl transition-transform duration-500 ease-out-soft hover:scale-[1.015] sm:w-72">
              <div className="relative aspect-[9/16] overflow-hidden rounded-[30px] bg-neutral-800">
                <SmartImage
                  src={images.creator}
                  alt="Creator hosting a live shopping stream"
                  fallbackClassName="bg-gradient-to-b from-orange-300 via-orange-400 to-sky-500"
                />
                <div className="absolute inset-x-3 top-3 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 backdrop-blur-md">
                    <span className="size-2 rounded-full bg-emerald-400" />
                    <span className="text-[11px] font-medium">Frankie Warner</span>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold">
                    <span className="size-1.5 animate-live-pulse rounded-full bg-white" /> LIVE
                  </div>
                </div>
                <div className="absolute inset-x-3 bottom-3 text-left text-white">
                  <div className="mb-2 rounded-xl bg-black/40 p-2 backdrop-blur-md">
                    <p className="text-[10px] font-semibold text-neutral-200">@sarah.style</p>
                    <p className="text-[11px]">Loving the glow! Just grabbed one ❤️</p>
                  </div>
                  <div className="flex items-center justify-between px-1 text-[11px]">
                    <span className="text-neutral-300">2.4k watching</span>
                    <span className="flex gap-1.5 text-base">🔥✨😍</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skincare rating card */}
            <Floating className="left-4 top-2 hidden w-32 -rotate-1 flex-col gap-2 rounded-2xl border border-neutral-100 bg-white/95 p-2.5 backdrop-blur-md sm:flex">
              <div className="relative flex h-24 items-center justify-center overflow-hidden rounded-xl bg-sky-50">
                <div className="flex h-16 w-10 flex-col items-center justify-center rounded-b-md rounded-t-lg bg-blue-300/80 shadow-inner">
                  <div className="mb-1 h-3 w-4 rounded-[2px] bg-white/70" />
                  <div className="rotate-90 text-[7px] font-bold uppercase tracking-widest text-blue-900">Hydra</div>
                </div>
                <span className="absolute left-2 top-1.5 rounded-full bg-black/60 px-1.5 py-0.5 text-[9px] font-medium text-white backdrop-blur-sm">2:01</span>
              </div>
              <div className="px-1 text-xs tracking-wider text-amber-400">★★★★★</div>
            </Floating>

            {/* Engagement */}
            <Floating className="bottom-10 left-0 flex -rotate-2 items-center gap-3 rounded-2xl bg-brand-amber p-3 sm:left-8">
              <div className="flex size-8 items-center justify-center rounded-xl bg-black/10">
                <BarChart3 className="size-5 text-neutral-900" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-black/70">Engagement</span>
                <span className="text-xl font-bold leading-tight">40%</span>
              </div>
              <span className="ml-1 size-2.5 rounded-full bg-black/80" />
            </Floating>

            {/* Items sold */}
            <Floating className="right-0 top-6 w-44 rotate-2 rounded-2xl bg-brand-lime-bright p-3.5 text-left text-neutral-950 max-sm:w-40 sm:right-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-2xl font-black leading-none tracking-tight">
                    8 <span className="text-xs font-semibold">items</span>
                  </div>
                  <p className="mt-0.5 text-[11px] font-medium text-neutral-800">Sold this week</p>
                </div>
                <div className="flex h-11 w-9 items-center justify-center rounded-lg bg-black/10 text-xs">🧴</div>
              </div>
              <div className="mt-2.5 flex items-center justify-between border-t border-black/10 pt-2">
                <span className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-bold">$12</span>
                <span className="text-[10px] font-semibold tracking-wide">Live Cart</span>
              </div>
            </Floating>

            {/* Co-host preview */}
            <Floating className="bottom-14 right-2 hidden rotate-1 items-center gap-2 rounded-2xl border border-neutral-100 bg-white/90 p-2 backdrop-blur-md sm:flex">
              <div className="relative h-14 w-12 overflow-hidden rounded-xl">
                <SmartImage src={images.coHost} alt="Co-host thumbnail" fallbackClassName="bg-gradient-to-br from-emerald-300 to-emerald-600" />
                <span className="absolute bottom-0.5 left-1 rounded bg-black/60 px-1 text-[8px] text-white">1.5k</span>
              </div>
              <div className="flex flex-col pr-1 text-left">
                <span className="text-[11px] font-bold text-neutral-900">Co-Host Session</span>
                <span className="text-[10px] text-neutral-500">24 items linked</span>
                <div className="mt-1 flex items-center gap-2 text-[11px] text-neutral-700">
                  <span className="flex items-center gap-0.5"><Heart className="size-3 fill-red-500 text-red-500" /> 482</span>
                  <span className="flex items-center gap-0.5"><MessageCircle className="size-3" /> 67</span>
                </div>
              </div>
            </Floating>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
