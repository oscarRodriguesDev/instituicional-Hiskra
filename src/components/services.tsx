'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Lightbulb, Shield } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { ServiceModal } from './service-modal'

export function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null)
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
      details: [
        'Desenvolvimento de aplicações web responsivas e de alto desempenho',
        'Criação de APIs RESTful e GraphQL robustas',
        'Desenvolvimento de aplicações mobile nativas e cross-platform',
        'Integração com bancos de dados modernos (SQL e NoSQL)',
        'Implementação de arquiteturas escaláveis e seguras',
      ],
      benefits: [
        'Soluções personalizadas para seus negócios',
        'Código limpo e bem documentado',
        'Suporte e manutenção contínua',
        'Entrega em prazos estabelecidos',
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Docker'],
    },
    {
      icon: Lightbulb,
      title: 'Gestão de Inovação',
      description: 'Ajudamos sua empresa a identificar, desenvolver e implementar estratégias inovadoras.',
      gradient: 'from-orange-500 to-red-500',
      details: [
        'Diagnóstico da maturidade inovadora da sua empresa',
        'Identificação de oportunidades de inovação',
        'Estruturação de processos inovadores e metodologias ágeis',
        'Mentoria e capacitação de times de inovação',
        'Implementação de projetos piloto e MVP',
      ],
      benefits: [
        'Aumento da competitividade no mercado',
        'Geração de novos modelos de negócio',
        'Engajamento e motivação de colaboradores',
        'Redução de riscos em inovação',
      ],
      technologies: ['Design Thinking', 'Lean Startup', 'Agile', 'OKR', 'Inovação Aberta'],
    },
    {
      icon: Shield,
      title: 'Consultoria DPO e Proteção de Dados',
      description: 'Conformidade com LGPD e GDPR. Proteja seus dados com nossas soluções especializadas.',
      gradient: 'from-blue-400 to-cyan-500',
      details: [
        'Assessoria em conformidade com LGPD e GDPR',
        'Auditoria de segurança e privacidade de dados',
        'Elaboração de políticas e procedimentos de proteção de dados',
        'Implementação de controles técnicos e operacionais',
        'Resposta a incidentes de segurança e relatórios obrigatórios',
      ],
      benefits: [
        'Proteção contra multas e sanções legais',
        'Confiança dos clientes e parceiros',
        'Conformidade regulatória garantida',
        'Redução de riscos cibernéticos',
      ],
      technologies: ['LGPD', 'GDPR', 'ISO 27001', 'Criptografia', 'Audit Trails'],
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

                {/* Learn More Button */}
                <motion.button
                  onClick={() => setSelectedService(index)}
                  className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 font-semibold hover:gap-3 transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  Saiba mais
                  <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </motion.button>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Service Modal */}
      {selectedService !== null && (
        <ServiceModal
          isOpen={selectedService !== null}
          onClose={() => setSelectedService(null)}
          title={services[selectedService].title}
          description={services[selectedService].description}
          details={services[selectedService].details}
          benefits={services[selectedService].benefits}
          technologies={services[selectedService].technologies}
          gradient={services[selectedService].gradient}
        />
      )}
    </section>
  )
}
