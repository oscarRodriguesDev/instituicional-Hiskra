'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex-shrink-0"
          >
            <Image
              src="/logo-hiskra.png"
              alt="Hiskra Logo"
              width={48}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hidden md:flex items-center gap-8"
          >
            <a href="/#sobre" className="text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transition-all duration-300 font-medium">
              Sobre
            </a>
            <a href="/#servicos" className="text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transition-all duration-300 font-medium">
              Servicos
            </a>
            <Link href="/contato" className="text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transition-all duration-300 font-medium">
              Contato
            </Link>
          </motion.div>

          {/* CTA Button */}
          <Link href="/contato">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 py-2 font-medium text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 border-2 border-transparent hover:border-current rounded-lg transition-all duration-300"
              style={{
                backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #FFD700, #FF8C00, #FF4D4D, #E6007E, #8A2BE2, #4169E1, #00CED1)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
              }}
            >
              Comecar Agora
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
