import { ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { LogoMark } from '@/components/shared/logo'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { navLinks, productLinks } from '@/data/content'
import { cn } from '@/lib/utils'

const linkClass =
  'relative text-sm font-medium text-neutral-600 transition-colors hover:text-black after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b bg-white/85 backdrop-blur-md transition-shadow duration-300',
        scrolled ? 'border-neutral-200/80 shadow-subtle' : 'border-transparent',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="group flex items-center gap-3">
          <LogoMark />
          <span className="text-xs font-medium tracking-tight text-neutral-600 transition-colors group-hover:text-black md:text-sm">
            / hello@reel.ai
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger className={cn(linkClass, 'group flex items-center gap-1 after:hidden data-[state=open]:text-black')}>
              Products
              <ChevronDown className="size-3.5 opacity-60 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {productLinks.map((item) => (
                <DropdownMenuItem key={item.title} asChild>
                  <a href={item.href} className="flex-col items-start gap-0.5">
                    <span className="font-semibold text-neutral-900">{item.title}</span>
                    <span className="text-xs text-neutral-500">{item.desc}</span>
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <a href="#demo">Book A Demo</a>
          </Button>
          <Button asChild>
            <a href="#signup">Get Started</a>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="size-10 p-0 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'grid border-neutral-100 bg-white transition-[grid-template-rows] duration-300 ease-out-soft md:hidden',
          open ? 'grid-rows-[1fr] border-t' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4" aria-label="Mobile">
            {[...productLinks.map((p) => ({ label: p.title, href: p.href })), ...navLinks, { label: 'Book A Demo', href: '#demo' }].map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-black"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
