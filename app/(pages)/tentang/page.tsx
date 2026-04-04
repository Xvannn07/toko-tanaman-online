'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ChatAssistant } from '@/components/chat-assistant';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Users, Leaf, Zap, MapPin, Clock, Phone } from 'lucide-react';
import Link from 'next/link';

export default function TentangPage() {
  const values = [
    {
      icon: Leaf,
      title: 'Kualitas Premium',
      description: 'Setiap tanaman dipilih dan dirawat dengan standar kualitas tertinggi untuk kepuasan pelanggan.',
    },
    {
      icon: Users,
      title: 'Layanan Personal',
      description: 'Tim kami memberikan konsultasi personal untuk memastikan Anda mendapatkan tanaman yang tepat.',
    },
    {
      icon: Award,
      title: 'Pengalaman',
      description: 'Dengan pengalaman bertahun-tahun, kami adalah ahli dalam dunia tanaman hias dan landscape.',
    },
    {
      icon: Zap,
      title: 'Inovasi',
      description: 'Terus berkembang dengan koleksi tanaman terbaru dan metode perawatan modern.',
    },
  ];

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
              <span className="text-foreground">Info Tentang Kami</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Tentang Tanaman Iyas</h1>
            <p className="text-lg text-foreground/70 mt-4">
              Mengenal lebih jauh tentang misi dan visi kami dalam bisnis tanaman.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Cerita Kami</h2>
                <div className="space-y-4 text-foreground/70">
                  <p>
                    Tanaman Iyas dimulai dari passion keluarga kami terhadap tanaman hijau. Kami percaya bahwa setiap rumah dan ruang kerja memerlukan sentuhan alam untuk menciptakan lingkungan yang sehat dan nyaman.
                  </p>
                  <p>
                    Dengan dedikasi penuh, kami memilih dan merawat setiap tanaman dengan cermat untuk memastikan kualitas terbaik sampai ke tangan pelanggan kami. Setiap tanaman yang kami tawarkan telah melalui proses seleksi ketat.
                  </p>
                  <p>
                    Naman Iyas Di ambil dari nama istri, dengan mengambarkan perjuangan seorang petani yang berjuang untuk menghidupkan tanaman.
                  </p>
                </div>
              </div>

              <img
                src='/green-house.png'
                alt="Green House"
                className="bg-accent/10 rounded-lg h-96 flex items-center justify-center text-8xl"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-accent/5 border-b border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Misi Kami</h3>
                <p className="text-foreground/70">
                  Menyediakan tanaman berkualitas tinggi dan konsultasi profesional untuk meningkatkan kualitas hidup masyarakat Singaraja melalui keindahan dan kesehatan tanaman hijau.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Visi Kami</h3>
                <p className="text-foreground/70">
                  Menjadi toko tanaman terpercaya dan pilihan utama di Singaraja yang dikenal atas kualitas produk, pelayanan profesional, dan komitmen terhadap kepuasan pelanggan.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nilai-Nilai Kami</h2>
              <p className="text-lg text-foreground/70">Prinsip yang kami pegang teguh dalam setiap aspek bisnis.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                        <p className="text-sm text-foreground/70">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Lokasi Tanaman Iyas</h2>
              <p className="text-lg text-foreground/70">Kunjungi toko kami yang berlokasi strategis di Singaraja</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Maps Preview */}
              <div className="rounded-lg overflow-hidden shadow-lg h-full min-h-[400px]">
                <iframe
                  src={process.env.NEXT_PUBLIC_LOCATION_URL_EMBED || "https://maps.google.com/?q=Tanaman+Iyas+Singaraja&output=embed"}
                  width="100%"
                  height="100%"
                  style={{ minHeight: '400px', border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Location Info */}
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Alamat Toko</h3>
                      <p className="text-foreground/70">
                        Jalan Imam Bonjol, Singaraja<br />
                        Bali, Indonesia 81154
                      </p>
                      <a
                        href="https://maps.google.com/?q=Tanaman+Iyas+Singaraja"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 transition-colors font-medium mt-3 inline-block"
                      >
                        Buka di Google Maps →
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                        <Clock className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Jam Operasional</h3>
                      <p className="text-foreground/70">
                        Senin - Jumat: 08:00 - 17:00<br />
                        Sabtu: 08:00 - 16:00<br />
                        Minggu: 09:00 - 14:00
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Hubungi Kami</h3>
                      <p className="text-foreground/70 mb-3">
                        Hubungi langsung melalui WhatsApp atau telepon
                      </p>
                      <a
                        href={`https://wa.me/${process.env.NEXT_PUBLIC_OWNER_PHONE}?text=Halo%20Tanama%20Iyas,%20saya%20ingin%20bertanya`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" className="w-full">
                          Chat WhatsApp
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Hubungi Kami</h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Ingin mengenal lebih jauh tentang Tanaman Iyas atau memiliki pertanyaan? Jangan ragu untuk menghubungi kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_OWNER_PHONE}?text=Halo%20Tanama%20Iyas,%20saya%20ingin%20mengenal%20lebih%20jauh%20tentang%20bisnis%20anda`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="w-full sm:w-auto">
                  Chat WhatsApp
                </Button>
              </a>
              <Link href="/kontak">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Form Kontak
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
