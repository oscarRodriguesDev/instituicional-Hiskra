import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const baseUrl = 'https://hiskra.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Hiskra | Solutions & Technologies — Inovação que Impulsiona o Futuro',
    template: '%s | Hiskra Solutions & Technologies',
  },
  description:
    'Hiskra Solutions & Technologies: desenvolvimento full-stack, gestão de inovação e consultoria de proteção de dados (LGPD/GDPR). Transformamos complexidade em simplicidade com soluções escaláveis e personalizadas.',
  keywords: [
    'Hiskra',
    'desenvolvimento full-stack',
    'gestão de inovação',
    'proteção de dados',
    'LGPD',
    'GDPR',
    'consultoria tecnológica',
    'soluções digitais',
    'desenvolvimento web',
    'desenvolvimento mobile',
    'empresas de tecnologia',
    'inovação empresarial',
  ],
  authors: [{ name: 'Hiskra Solutions & Technologies' }],
  creator: 'Hiskra Solutions & Technologies',
  publisher: 'Hiskra Solutions & Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: baseUrl,
    siteName: 'Hiskra Solutions & Technologies',
    title: 'Hiskra | Inovação que Impulsiona o Futuro',
    description:
      'Desenvolvimento full-stack, gestão de inovação e consultoria de proteção de dados. Transformamos complexidade em simplicidade.',
    images: [
      {
        url: '/hero-background.jpg',
        width: 1920,
        height: 1080,
        alt: 'Hiskra Solutions & Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hiskra | Inovação que Impulsiona o Futuro',
    description:
      'Desenvolvimento full-stack, gestão de inovação e consultoria de proteção de dados.',
    images: ['/hero-background.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}#organization`,
    name: 'Hiskra Solutions & Technologies',
    url: baseUrl,
    logo: `${baseUrl}/logo-hiskra.png`,
    description:
      'Empresa brasileira de tecnologia especializada em desenvolvimento full-stack, gestão de inovação e consultoria de proteção de dados (LGPD/GDPR).',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Avenida August Saint Hilaire, 12',
      addressLocality: 'Serra',
      addressRegion: 'ES',
      postalCode: '29173-040',
      addressCountry: 'BR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-27-98899-1663',
      contactType: 'customer service',
      availableLanguage: 'Portuguese',
    },
    sameAs: [],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}#website`,
    name: 'Hiskra Solutions & Technologies',
    url: baseUrl,
    description:
      'Desenvolvimento full-stack, gestão de inovação e consultoria de proteção de dados (LGPD/GDPR).',
    publisher: {
      '@id': `${baseUrl}#organization`,
    },
    inLanguage: 'pt-BR',
  }

  const serviceSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Desenvolvimento Full-Stack',
      provider: {
        '@id': `${baseUrl}#organization`,
      },
      description:
        'Soluções completas em desenvolvimento web e mobile: aplicações responsivas, APIs RESTful e GraphQL, apps mobile, integração com bancos SQL/NoSQL, arquiteturas escaláveis.',
      areaServing: 'BR',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Tecnologias Full-Stack',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Thing', name: 'React' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Thing', name: 'Next.js' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Thing', name: 'Node.js' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Thing', name: 'TypeScript' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Thing', name: 'PostgreSQL' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Thing', name: 'MongoDB' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Thing', name: 'Docker' } },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Gestão de Inovação',
      provider: {
        '@id': `${baseUrl}#organization`,
      },
      description:
        'Diagnóstico de maturidade inovadora, identificação de oportunidades, estruturação de processos, mentoria de times, e implementação de projetos piloto e MVP.',
      areaServing: 'BR',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Consultoria DPO e Proteção de Dados',
      provider: {
        '@id': `${baseUrl}#organization`,
      },
      description:
        'Assessoria em conformidade com LGPD e GDPR, auditoria de segurança, elaboração de políticas, implementação de controles, e resposta a incidentes.',
      areaServing: 'BR',
    },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'O que é a Hiskra Solutions & Technologies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Hiskra é uma empresa brasileira de tecnologia especializada em desenvolvimento full-stack, gestão de inovação e consultoria de proteção de dados (LGPD/GDPR). Fundada em inovação e excelência técnica, transforma desafios complexos em soluções elegantes e escaláveis.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quais serviços a Hiskra oferece?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Hiskra oferece três serviços principais: Desenvolvimento Full-Stack (web, mobile, APIs), Gestão de Inovação (Design Thinking, Lean Startup, Agile), e Consultoria DPO e Proteção de Dados (LGPD, GDPR, ISO 27001).',
        },
      },
      {
        '@type': 'Question',
        name: 'Como entrar em contato com a Hiskra?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Você pode entrar em contato pelo WhatsApp (27) 98899-1663, pelo email oscar.gst.projetos@gmail.com, ou pelo formulário de contato no site.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quais tecnologias a Hiskra utiliza?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Hiskra utiliza React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, Docker, LGPD, GDPR, ISO 27001, Design Thinking, Lean Startup, Agile e OKR.',
        },
      },
      {
        '@type': 'Question',
        name: 'A Hiskra atende clientes de que regiões?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Hiskra é uma empresa brasileira que atende clientes em todo o território nacional, com impacto local, estadual, nacional e internacional.',
        },
      },
    ],
  }

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema,
              websiteSchema,
              ...serviceSchemas,
              faqSchema,
            ]),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
