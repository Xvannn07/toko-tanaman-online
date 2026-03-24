'use client';

import Link from 'next/link';
import { MapPin, Phone, Clock, AlertCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Warning Banner */}
        <div className="mb-8 flex gap-3 rounded-lg bg-accent/10 border border-accent/20 p-4">
          <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
          <p className="text-sm text-foreground/80">
            <strong>Penting:</strong> Pemesanan online tidak tersedia. Untuk wilayah Singaraja, silakan hubungi kami melalui WhatsApp atau telepon untuk informasi stok dan pemesanan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Tanaman Iyas</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Menyediakan tanaman hias dan tanaman berkualitas untuk rumah, taman, dan ruang hijau Anda.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                <span>Singaraja dan Sekitarnya</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <Clock className="h-4 w-4 text-accent flex-shrink-0" />
                <span>09:00 - 17:00 (Senin-Minggu)</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigasi</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-foreground/70 hover:text-accent transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/katalog" className="text-sm text-foreground/70 hover:text-accent transition-colors">
                  Katalog Tanaman
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="text-sm text-foreground/70 hover:text-accent transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-foreground/70 hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Hubungi Kami</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_OWNER_PHONE}?text=Halo%20Tanama%20Iyas,%20saya%20ingin%20bertanya`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-accent transition-colors flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${process.env.NEXT_PUBLIC_OWNER_PHONE}`}
                  className="text-sm text-foreground/70 hover:text-accent transition-colors flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  Telepon
                </a>
              </li>
              <li>
                <Link href="/kontak" className="text-sm text-foreground/70 hover:text-accent transition-colors">
                  Form Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Area Layanan</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>Singaraja</li>
              <li>Buleleng</li>
              <li>Sekitarnya</li>
              <li className="text-xs pt-2">
                <em>Hubungi kami untuk area lain</em>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>&copy; 2024 Tanaman Iyas. Semua hak dilindungi.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent transition-colors">
              Instagram
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Facebook
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              TikTok
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
