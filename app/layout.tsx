import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://tanamaniyas.com'), // Ganti ke domain asli Tanaman Iyas
  title: {
    default: 'Tanaman Iyas | Tanaman Hias Berkualitas di Singaraja',
    template: '%s | Tanaman Iyas'
  },
  description: 'Tanaman Iyas menyediakan tanaman hias indoor & outdoor, tanaman taman, dan konsultasi perawatan tanaman di Singaraja, Bali. Kunjungi nursery kami untuk lihat koleksi lengkap.',
  keywords: ['tanaman hias Singaraja', 'toko tanaman Singaraja', 'nursery tanaman Bali', 'tanaman indoor', 'tanaman outdoor', 'konsultasi tanaman', 'jual tanaman Singaraja', 'Bali'],
  authors: [{ name: 'Tanaman Iyas' }],
  creator: 'Tanaman Iyas',
  publisher: 'Tanaman Iyas',
  
  alternates: {
    canonical: '/', // Jadi https://tanamaniyas.com/
  },
  
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://tanamaniyas.com',
    siteName: 'Tanaman Iyas',
    title: 'Tanaman Iyas | Tanaman Hias Berkualitas di Singaraja',
    description: 'Nursery tanaman hias indoor & outdoor di Singaraja, Bali. Lihat koleksi tanaman taman, konsultasi perawatan, dan info stok langsung di tempat.',
    images: [
      {
        url: '/og-image.jpg', // Taruh di public/og-image.jpg ukuran 1200x630
        width: 1200,
        height: 630,
        alt: 'Tanaman Iyas - Nursery Tanaman Hias Singaraja',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Tanaman Iyas | Tanaman Hias Berkualitas di Singaraja',
    description: 'Nursery tanaman hias indoor & outdoor di Singaraja, Bali. Kunjungi langsung untuk lihat koleksi & konsultasi perawatan.',
    images: ['/og-image.jpg'],
    // creator: '@twitter_akun_iyas' // tambahin kalau ada
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
  
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
      { url: '/xvann_logo.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  
  // manifest: '/manifest.json', // aktifkan kalau udah bikin PWA
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
