import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Institutional } from '@/components/institutional'
import { About } from '@/components/about'
import { Footer } from '../components/footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Institutional />
      <About />
      <Footer />
    </main>
  )
}
