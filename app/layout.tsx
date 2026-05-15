import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Princess Parlor | Kids Hair Salon',
  description: 'Beautiful styles for your little princess. Professional kids hair salon offering braids, styling, treatments and more.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Princess Parlor | Kids Hair Salon',
    description: 'Beautiful styles for your little princess. Professional kids hair salon offering braids, styling, treatments and more.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Princess Parlor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Princess Parlor | Kids Hair Salon',
    description: 'Beautiful styles for your little princess. Professional kids hair salon offering braids, styling, treatments and more.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
