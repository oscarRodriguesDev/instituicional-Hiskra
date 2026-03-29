'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin, Twitter, Github, Mail } from 'lucide-react'

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer 
      className="relative border-t border-gray-100"
      style={{
        backgroundImage: 'url(/footer-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white/95" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mb-12"
        >
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo-hiskra.png"
                alt="Hiskra Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-sm font-semibold text-gray-900">Hiskra</span>
            </div>
            <p className="text-sm text-gray-600">
              Transformando complexidade em simplicidade através de inovação e tecnologia.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Produto</h3>
            <ul className="space-y-3">
              {['Serviços', 'Soluções', 'Preços'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-yellow-400 to-orange-500 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Empresa</h3>
            <ul className="space-y-3">
              {['Sobre', 'Blog', 'Carreiras', 'Contato'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-yellow-400 to-orange-500 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              {['Privacidade', 'Termos', 'Cookies'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-yellow-400 to-orange-500 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <div className="border-t border-gray-100 pt-8 mb-8" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm text-gray-600 mb-4 md:mb-0"
          >
            © 2024 Hiskra S&T. Todos os direitos reservados.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="flex items-center gap-6"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                variants={itemVariants}
                href={href}
                aria-label={label}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
