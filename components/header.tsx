'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
            🌿
          </div>
          <span className="text-xl font-bold text-foreground hidden sm:inline">Tanaman Iyas</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Beranda
          </Link>
          <Link href="/katalog" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Katalog
          </Link>
          <Link href="/tentang" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Tentang Kami
          </Link>
          <Link href="/faq" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            FAQ
          </Link>
          <Link href="/kontak" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Kontak
          </Link>
        </div>

        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center gap-2">
          <a href={`https://wa.me/${process.env.NEXT_PUBLIC_OWNER_PHONE?.replace(/\D/g, '')}?text=Halo%20Tanama%20Iyas,%20saya%20ingin%20berkonsultasi%20tentang%20tanaman`} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="gap-2">
              <span className="text-base">💬</span>
              <span className="hidden sm:inline">Hubungi Kami</span>
            </Button>
          </a>
          <button
            className="md:hidden p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Beranda
            </Link>
            <Link href="/katalog" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Katalog
            </Link>
            <Link href="/tentang" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Tentang Kami
            </Link>
            <Link href="/faq" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              FAQ
            </Link>
            <Link href="/kontak" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Kontak
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
