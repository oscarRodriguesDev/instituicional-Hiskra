'use client'

import { motion } from 'framer-motion'
import { Code2, Lightbulb, Shield } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

export function Services() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const services = [
    {
      icon: Code2,
      title: 'Desenvolvimento Full-Stack',
      description: 'Soluções completas em desenvolvimento web e mobile com as tecnologias mais modernas do mercado.',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Lightbulb,
      title: 'Gestão de Inovação',
      description: 'Ajudamos sua empresa a identificar, desenvolver e implementar estratégias inovadoras.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Shield,
      title: 'Consultoria DPO e Proteção de Dados',
      description: 'Conformidade com LGPD e GDPR. Proteja seus dados com nossas soluções especializadas.',
      gradient: 'from-blue-400 to-cyan-500',
    },
  ]

  return (
    <section id="servicos" ref={ref} className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Soluções completas para transformar complexidade em simplicidade
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group rounded-2xl bg-white border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Icon Background */}
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.gradient} p-3.5 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-full h-full text-white" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <motion.a
                  href="#"
                  className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 font-semibold hover:gap-3 transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  Saiba mais
                  <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </motion.a>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
