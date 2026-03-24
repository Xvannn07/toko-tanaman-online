'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ChatAssistant } from '@/components/chat-assistant';
import { ProductCard, type Product } from '@/components/product-card';
import { CarouselBackground } from '@/components/carousel-background';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Leaf, MessageSquare, MapPin, Clock, Phone } from 'lucide-react';
import Link from 'next/link';
import { allProducts } from '@/lib/product';
import { benefits } from '@/lib/benefits';
import { faqs } from '@/lib/faqs';

export default function Home() {
  return (
    <>
      <Header />
      <ChatAssistant />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 min-h-[600px] md:min-h-[700px] flex items-center">
          <CarouselBackground />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
                <Leaf className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">Selamat Datang Di Tanaman Iyas.</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Tanaman Hias Berkualitas untuk Rumah dan Taman Anda.
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Tanaman Iyas menyediakan berbagai pilihan tanaman hias, tanaman taman, dan tanaman pilihan yang dirawat dengan baik, dan berkualitas tentunya dengan harga yang terjangkau.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href={`https://wa.me/${process.env.NEXT_PUBLIC_OWNER_PHONE?.replace(/\D/g, '')}?text=Halo%20Tanama%20Iyas,%20saya%20ingin%20berkonsultasi%20tentang%20tanaman`} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Pesan Whatsaap
                  </Button>
                </a>
                <Link href="/katalog">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Lihat Katalog
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Produk Dan Tanaman Pilihan Unggulan</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Koleksi produk dan tanaman terbaik kami yang telah dipilih khusus untuk perawatan serta keindahan tanaman.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProducts.slice(0, 6).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/katalog">
                <Button size="lg" variant="outline">
                  Lihat Semua Produk Dan Tanaman
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-accent/5 border-y border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Manfaat Memiliki Tanaman</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Tanaman bukan hanya dekorasi, tetapi juga bagaimana cara menjaga kehidupan tanaman serta kesehatan Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                        <p className="text-sm text-foreground/70">{benefit.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Kenapa Memilih Tanaman Iyas?</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-accent font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Tanaman Berkualitas Tinggi</h4>
                      <p className="text-sm text-foreground/70">Semua tanaman dirawat dengan penuh perhatian dan standar kualitas terbaik.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-accent font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Konsultasi Gratis</h4>
                      <p className="text-sm text-foreground/70">Tim kami siap membantu Anda memilih tanaman yang tepat sesuai kebutuhan.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-accent font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Layanan Pelanggan Terpercaya</h4>
                      <p className="text-sm text-foreground/70">Hubungi kami kapan saja melalui WhatsApp untuk bantuan dan pertanyaan.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-accent font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Harga Kompetitif</h4>
                      <p className="text-sm text-foreground/70">Menawarkan harga terbaik tanpa mengorbankan kualitas produk kami.</p>
                    </div>
                  </div>
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

        {/* Service Area */}
        <section className="py-16 md:py-24 border-y border-border">
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
                  height="100%"
                  width="100%"
                  style={{ minHeight: '600px', border: 0 }}
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
                        Jalan Pulau Obi, Singaraja<br />
                        Bali, Indonesia 81154
                      </p>
                      <a
                        href={process.env.NEXT_PUBLIC_LOCATION_URL || "https://maps.google.com/?q=Tanaman+Iyas+Singaraja"}
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
                        href={`https://wa.me/${process.env.NEXT_PUBLIC_OWNER_PHONE?.replace(/\D/g, '')}?text=Halo%20Tanama%20Iyas,%20saya%20ingin%20berkunjung`}
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

        {/* FAQ Section */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pertanyaan Umum</h2>
              <p className="text-lg text-foreground/70">Temukan jawaban untuk pertanyaan Anda di sini.</p>
            </div>

            <div className="max-w-2xl mx-auto space-y-4">
              {faqs.find(cat => cat.category === 'Umum')?.items.map((faq, idx) => (
                <Card key={idx} className="p-6 hover:shadow-md transition-shadow cursor-pointer group">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {faq.q}
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                    <div className="text-accent text-lg font-light group-hover:translate-x-1 transition-transform">
                      →
                    </div>
                  </div>
                </Card>
              )) || []}
            </div>

            <div className="mt-12 text-center">
              <Link href="/faq">
                <Button variant="outline">Lihat Semua FAQ</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary/5 border-t border-border">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Siap Memperindah Ruang Anda?</h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Hubungi kami hari ini untuk konsultasi gratis dan temukan tanaman yang sempurna untuk kebutuhan Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`https://wa.me/${process.env.NEXT_PUBLIC_OWNER_PHONE?.replace(/\D/g, '')}?text=Halo%20Tanama%20Iyas,%20saya%20ingin%20berkonsultasi%20tentang%20tanaman`} target="_blank" rel="noopener noreferrer">
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
