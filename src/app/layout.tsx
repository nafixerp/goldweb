import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import GoldRateWidget from '@/components/ui/GoldRateWidget'

export const metadata: Metadata = {
  title: 'Sevens Gold - Premium Jewelry | Ernakulam\'s Finest Jewelry Showroom',
  description: 'Discover exquisite gold, diamond, and bridal jewelry at Sevens Gold, Ernakulam. BIS Hallmarked, certified diamonds, and traditional craftsmanship since generations.',
  keywords: 'gold jewelry, diamond jewelry, bridal jewelry, Ernakulam jewelers, Kerala gold, wedding jewelry, custom jewelry design',
  authors: [{ name: 'Sevens Gold' }],
  openGraph: {
    title: 'Sevens Gold - Premium Jewelry | Ernakulam',
    description: 'Discover exquisite gold, diamond, and bridal jewelry at Sevens Gold, Ernakulam.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Sevens Gold',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sevens Gold - Premium Jewelry',
    description: 'Discover exquisite gold, diamond, and bridal jewelry at Sevens Gold, Ernakulam.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <GoldRateWidget />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
