'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ChatAssistant } from '@/components/chat-assistant';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { useState } from 'react';

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message
    const text = `Halo Tanaman Iyas! Nama saya ${formData.name}. ${formData.message} Hubungi saya di ${formData.phone}`;
    const waLink = `https://wa.me/${process.env.NEXT_PUBLIC_OWNER_PHONE}?text=${encodeURIComponent(text)}`;
    window.open(waLink, '_blank');
  };

  return (
    <>
      <Header />
      <ChatAssistant />

      <main>
        {/* Breadcrumb & Title */}
        <section className="border-b border-border">
          <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
              <a href="/" className="hover:text-accent transition-colors">
                Beranda
              </a>
              <span>/</span>
              <span className="text-foreground">Kontak</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Hubungi Kami</h1>
            <p className="text-lg text-foreground/70 mt-4">
              Kami siap membantu Anda dengan pertanyaan atau kebutuhan tanaman apapun.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Lokasi</h3>
                <p className="text-sm text-foreground/70">
                  Singaraja dan Sekitarnya, Buleleng, Bali
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mx-auto mb-4">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_OWNER_PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:underline"
                >
                  [{process.env.NEXT_PUBLIC_OWNER_PHONE}]
                </a>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mx-auto mb-4">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Jam Operasional</h3>
                <p className="text-sm text-foreground/70">
                  09:00 - 17:00<br />
                  Senin - Minggu
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mx-auto mb-4">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Chat Bot</h3>
                <p className="text-sm text-foreground/70">
                  Gunakan AI Assistant di halaman untuk bantuan instan
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Kirim Pesan</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nama Lengkap
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nama Anda"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@contoh.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nomor WhatsApp
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+62 8xx xxx xxxx"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Pesan
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Jelaskan kebutuhan atau pertanyaan Anda..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Kirim Pesan via WhatsApp
                  </Button>
                </form>

                <p className="text-xs text-foreground/60 mt-4">
                  💡 Tip: Isi form di atas dan klik tombol untuk mengirim pesan langsung ke WhatsApp kami.
                </p>
              </div>

              {/* Info */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Informasi Kontak</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Hubungi Langsung</h3>
                    <p className="text-foreground/70 mb-4">
                      Hubungi kami melalui WhatsApp untuk respons yang lebih cepat dan kemudahan komunikasi. Tim kami siap membantu Anda dengan pertanyaan apapun tentang tanaman.
                    </p>
                    <a
                      href={`https://wa.me/${process.env.NEXT_PUBLIC_OWNER_PHONE}?text=Halo%20Tanama%20Iyas,%20saya%20ingin%20berkonsultasi`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full">Buka WhatsApp</Button>
                    </a>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Chat Bot AI</h3>
                    <p className="text-foreground/70 mb-4">
                      Gunakan AI Assistant kami yang tersedia 24/7 untuk mendapatkan rekomendasi tanaman dan menjawab pertanyaan umum dengan cepat.
                    </p>
                    <Button variant="outline" className="w-full">Coba Chat Bot</Button>
                  </div>

                  <div className="bg-accent/5 rounded-lg p-6 border border-accent/20">
                    <h3 className="font-semibold text-foreground mb-2">Jam Operasional</h3>
                    <div className="text-sm text-foreground/70 space-y-2">
                      <div><strong>Senin - Minggu:</strong> 09:00 - 17:00</div>
                      <div>Untuk kebutuhan mendesak atau luar jam operasional, silakan hubungi kami melalui WhatsApp.</div>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                    <h3 className="font-semibold text-foreground mb-2">Area Layanan</h3>
                    <div className="text-sm text-foreground/70 space-y-1">
                      <div>✓ Singaraja (Utama)</div>
                      <div>✓ Buleleng</div>
                      <div>✓ Sekitarnya</div>
                      <div className="mt-2 text-xs italic">Untuk area lain, hubungi kami untuk informasi layanan.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Link */}
        <section className="py-12 border-t border-border bg-accent/5">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Punya pertanyaan umum?
            </h3>
            <p className="text-foreground/70 mb-6">
              Cek FAQ kami untuk menjawab pertanyaan yang sering diajukan.
            </p>
            <a href="/faq">
              <Button variant="outline">Lihat FAQ</Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
