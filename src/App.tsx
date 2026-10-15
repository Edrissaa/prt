import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { Benchmarks } from '@/components/sections/benchmarks'
import { Blog } from '@/components/sections/blog'
import { Brands } from '@/components/sections/brands'
import { Features } from '@/components/sections/features'
import { Hero } from '@/components/sections/hero'
import { SocialMetrics } from '@/components/sections/social-metrics'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Brands />
        <Features />
        <Benchmarks />
        <SocialMetrics />
        <Blog />
      </main>
      <Footer />
    </>
  )
}
