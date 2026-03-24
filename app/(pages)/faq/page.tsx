'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ChatAssistant } from '@/components/chat-assistant';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { faqs } from '@/lib/faqs';

export default function FAQPage() {
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
              <span className="text-foreground">FAQ</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Pertanyaan yang Sering Diajukan</h1>
            <p className="text-lg text-foreground/70 mt-4">
              Temukan jawaban untuk pertanyaan umum Anda tentang Tanaman Iyas dan layanan kami.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-12">
              {faqs.map((category, catIdx) => (
                <div key={catIdx}>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{category.category}</h2>
                  <Accordion type="single" collapsible className="space-y-3">
                    {category.items.map((item, itemIdx) => (
                      <AccordionItem
                        key={`${catIdx}-${itemIdx}`}
                        value={`${catIdx}-${itemIdx}`}
                        className="border border-border rounded-lg px-6"
                      >
                        <AccordionTrigger className="py-4 hover:no-underline hover:text-accent">
                          <span className="text-left font-semibold text-foreground">{item.q}</span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-4 text-foreground/70">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-accent/5 border-t border-border">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Masih Ada Pertanyaan?</h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Jika Anda tidak menemukan jawaban yang Anda cari, jangan ragu untuk menghubungi kami secara langsung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_OWNER_PHONE}?text=Halo%20Tanama%20Iyas,%20saya%20memiliki%20pertanyaan`}
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
