import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  title: 'Tanaman Iyas | Tanaman Hias dan Berkualitas di Singaraja',
  description: 'Tanaman Iyas menyediakan tanaman hias, tanaman taman, dan konsultasi tanaman di Singaraja. Tidak tersedia pemesanan online, silakan hubungi kami untuk info stok dan pemesanan.',
  keywords: 'tanaman hias Singaraja, toko tanaman Singaraja, tanaman berkualitas Bali, konsultasi tanaman, nursery tanaman, tanaman indoor outdoor',
  icons: {
    icon: [
      {
        url: 'https://raw.githubusercontent.com/Xvannn07/Portfolio-V2/refs/heads/main/public/images/logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'https://raw.githubusercontent.com/Xvannn07/Portfolio-V2/refs/heads/main/public/images/logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/xvann_logo.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: 'https://raw.githubusercontent.com/Xvannn07/Portfolio-V2/refs/heads/main/public/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
