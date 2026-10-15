import { Plus } from 'lucide-react'

import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { SmartImage } from '@/components/shared/smart-image'
import { images, posts } from '@/data/content'

export function Blog() {
  return (
    <section id="resources" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Our Blog" title="The latest from our blog" className="mb-16 max-w-xl" />
        </Reveal>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 90}>
              <article className="group flex h-full cursor-pointer flex-col justify-between">
                <a href="#" className="flex h-full flex-col justify-between">
                  <div>
                    <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-100 transition-all duration-300 ease-out-soft group-hover:-translate-y-1 group-hover:shadow-lift">
                      <SmartImage
                        src={images.blog[i]}
                        alt={post.alt}
                        className="transition-transform duration-500 ease-out-soft group-hover:scale-105"
                        fallbackClassName={['bg-gradient-to-br from-fuchsia-200 to-orange-300', 'bg-gradient-to-br from-emerald-200 to-lime-400', 'bg-gradient-to-br from-pink-200 to-violet-400'][i]}
                      />
                    </div>
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      {post.date} // {post.read}
                    </p>
                    <h3 className="font-editorial mb-3 text-2xl leading-snug text-neutral-900 transition-colors group-hover:text-neutral-600">
                      {post.title}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between border-t border-neutral-100 pt-4 text-xs font-bold text-neutral-900">
                    <span>Read Story</span>
                    <Plus className="size-4 transition-transform duration-300 group-hover:rotate-90" />
                  </div>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
