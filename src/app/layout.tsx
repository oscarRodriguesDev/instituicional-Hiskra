import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const baseUrl = 'https://landing.hiskra.com.br'

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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hiskra Solutions & Technologies',
    url: baseUrl,
    logo: `${baseUrl}/logo-hiskra.png`,
    description:
      'Desenvolvimento full-stack, gestão de inovação e consultoria de proteção de dados (LGPD/GDPR).',
    address: {
      '@type': 'PostalAddress',
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

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
