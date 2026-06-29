'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Institutional } from '@/components/institutional'
import { About } from '@/components/about'
import { Footer } from '../components/footer'
import { ScrollProgress } from '@/components/scroll-progress'
import { ScrollToTop } from '@/components/scroll-to-top'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={sectionVariants}
      >
        <Services />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={sectionVariants}
      >
        <Institutional />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={sectionVariants}
      >
        <About />
      </motion.div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
