'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, Phone, Mail, MessageCircle } from 'lucide-react'

export function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Olá! Meu nome é ${name}.\n\n${message}\n\n(Email: ${email})`
    )
    window.open(`https://wa.me/5527988991663?text=${text}`, '_blank')
  }

  return (
    <section id="contato" ref={ref} className="py-20 sm:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.05 } : {}}
        transition={{ duration: 1 }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance"
          >
            Entre em
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              Contato
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto text-pretty"
          >
            Estamos prontos para transformar sua ideia em realidade. Fale conosco!
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-5 gap-12 lg:gap-16"
        >
          {/* Form */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Como podemos ajudar você?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center gap-2"
              >
                Enviar pelo WhatsApp
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col gap-6">
            <a
              href="https://wa.me/5527988991663"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-400 to-green-500 p-2.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-full h-full text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                <p className="text-gray-600 text-sm">(27) 98899-1663</p>
              </div>
            </a>

            <a
              href="mailto:oscar.gst.projetos@gmail.com"
              className="group flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 p-2.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-full h-full text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600 text-sm break-all">oscar.gst.projetos@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+5527988991663"
              className="group flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 p-2.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-full h-full text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Telefone</h3>
                <p className="text-gray-600 text-sm">(27) 98899-1663</p>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
