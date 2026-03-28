'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart, Lightbulb } from 'lucide-react'

export function Institutional() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const sections = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Transformar a complexidade em simplicidade através de soluções tecnológicas inovadoras, capacitando empresas a alcançarem seu máximo potencial em um mundo digital em constante evolução.',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser a referência global em excelência tecnológica, reconhecida pela entrega de soluções que combinam inovação, segurança e impacto transformador nos negócios de nossos clientes.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Inovação contínua, integridade absoluta, excelência técnica, respeito à diversidade, e compromisso com o desenvolvimento sustentável. Acreditamos que tecnologia deve servir à humanidade.',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: Lightbulb,
      title: 'Propósito',
      description: 'Capacitar organizações a liderar no futuro digital, fornecendo tecnologia que não apenas resolve problemas complexos, mas também gera impacto social positivo e sustentável.',
      gradient: 'from-pink-500 to-purple-500',
    },
  ]

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance"
          >
            Nossa Identidade
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              Institucional
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto text-pretty"
          >
            Fundada com o compromisso de transformar a forma como as organizações utilizam tecnologia, a Hiskra é guiada por pilares fundamentais que orientam cada decisão e ação.
          </motion.p>
        </motion.div>

        {/* Grid of Institutional Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 lg:gap-10"
        >
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg"
              >
                {/* Background Gradient Accent */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${section.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className={`text-2xl sm:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${section.gradient}`}>
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {section.description}
                </p>

                {/* Border accent on hover */}
                <div className={`absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-gradient-to-r ${section.gradient} transition-all duration-300 rounded-b-2xl`} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Values Highlight Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="mt-20 sm:mt-28 p-8 sm:p-12 rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-balance"
          >
            Os Três Pilares da Hiskra
          </motion.h3>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { name: 'Potencial', description: 'Desenvolvemos o máximo potencial de cada projeto e equipe' },
              { name: 'Inovação', description: 'Inovação contínua é o coração de tudo que fazemos' },
              { name: 'Respeito', description: 'Valorizamos as pessoas, a diversidade e a sustentabilidade' },
            ].map((pillar, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="mb-4">
                  <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                    {index + 1}
                  </p>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {pillar.name}
                </h4>
                <p className="text-gray-600">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
