'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase } from 'lucide-react'

export function Careers() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const jobs = [
    'Desenvolvedor Full-Stack Pleno',
    'Analista de Inovação',
    'Consultor de Proteção de Dados',
  ]

  return (
    <section ref={ref} className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
              Trabalhe
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                Conosco
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Faça parte da nossa equipe. Confira as vagas disponíveis:
            </p>
          </motion.div>

          {/* Jobs List */}
          <div className="max-w-2xl mx-auto space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center justify-between p-5 rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-900 font-medium">{job}</span>
                </div>
                <a
                  href="#"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 font-semibold hover:underline whitespace-nowrap"
                >
                  cadastre-se
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
