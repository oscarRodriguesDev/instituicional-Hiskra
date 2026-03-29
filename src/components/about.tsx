'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="sobre" ref={ref} className="py-20 sm:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.05 } : {}}
        transition={{ duration: 1 }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-balance">
              Transformar <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Complexidade</span> em <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Simplicidade</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              A Hiskra é uma empresa fundada em inovação e excelência técnica. Somos especialistas em transformar desafios complexos em soluções elegantes e escaláveis.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Com mais de uma década de experiência, nossa equipe combina conhecimento profundo em tecnologia com uma compreensão genuína dos negócios de nossos clientes.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { number: '100+', label: 'Projetos' },
                { number: '50+', label: 'Clientes' },
                { number: '15+', label: 'Anos' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Conheça Nossa Equipe
            </motion.button>
          </motion.div>

          {/* Right Content - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-80 sm:h-96 hidden md:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 via-red-500 via-purple-500 to-cyan-500 rounded-2xl opacity-10 blur-2xl" />
            
            <div className="absolute inset-6 bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
              <Image
                src="/about-target.jpg"
                alt="Alvo estratégico Hiskra - Transformar complexidade em simplicidade"
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
