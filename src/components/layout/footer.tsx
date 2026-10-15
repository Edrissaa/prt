import { footerLinks } from '@/data/content'

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-brand-charcoal py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 border-b border-neutral-800 pb-12 text-center md:flex-row md:text-left">
          <div>
            <span className="text-xl font-bold tracking-tight">
              ReelUp<span className="text-brand-lime">.ai</span>
            </span>
            <p className="mt-1 text-xs text-neutral-400">
              Next-generation live commerce and video conversion platform.
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-neutral-400">
            {footerLinks.map((l) => (
              <a key={l} href="#" className="transition-colors hover:text-white">
                {l}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} ReelUp Inc. All rights reserved.</p>
          <p>Crafted for modern direct-to-consumer live shopping brands.</p>
        </div>
      </div>
    </footer>
  )
}
