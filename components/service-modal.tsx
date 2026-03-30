'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  details: string[]
  benefits: string[]
  technologies?: string[]
  gradient: string
}

export function ServiceModal({
  isOpen,
  onClose,
  title,
  description,
  details,
  benefits,
  technologies,
  gradient,
}: ServiceModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-lg transition-colors z-10"
              >
                <X className="w-6 h-6 text-gray-600" />
              </motion.button>

              {/* Content */}
              <div className="p-8 sm:p-12">
                {/* Header */}
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${gradient} p-3.5 mb-6`}>
                  <div className="w-full h-full bg-white rounded opacity-0" />
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">
                  {title}
                </h2>

                <p className="text-lg text-gray-600 mb-8">
                  {description}
                </p>

                {/* Details Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Detalhes do Serviço
                  </h3>
                  <ul className="space-y-3">
                    {details.map((detail, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <span className={`flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r ${gradient} mt-2`} />
                        <span className="text-gray-700">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Benefits Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Benefícios
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="p-4 bg-gray-50 rounded-lg border border-gray-100"
                      >
                        <p className="text-gray-700 font-medium">{benefit}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies Section */}
                {technologies && technologies.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Tecnologias Utilizadas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className={`px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${gradient}`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <Link href="/contato" className="block">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r ${gradient} text-white font-semibold transition-all duration-300 text-center`}
                  >
                    Solicitar Orcamento
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
