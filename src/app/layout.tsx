import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: {
    default: 'Tauípe | JH Química — Produtos Químicos e Saneantes',
    template: '%s | Tauípe — JH Química',
  },
  description:
    'Fabricação e distribuição de produtos químicos, saneantes, produtos de limpeza e álcool em gel acendedor. Qualidade industrial em Pedreira, São Paulo.',
  keywords: [
    'produtos químicos',
    'saneantes',
    'álcool em gel acendedor',
    'produtos de limpeza',
    'JH Química',
    'Tauípe',
    'Puro-Álcool',
    'Pedreira',
    'São Paulo',
    'B2B',
  ],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Tauípe | JH Química',
    title: 'Tauípe | JH Química — Produtos Químicos e Saneantes',
    description:
      'Fabricação e distribuição de produtos químicos, saneantes e álcool em gel acendedor.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable}`}>
      <head>
        {/* Geist e JetBrains Mono via CDN como fallback */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-off-white text-navy antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}