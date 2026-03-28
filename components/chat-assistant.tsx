'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, MessageCircle, Send, Bot } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { allProducts } from '@/lib/product';

export interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
}

// Fungsi untuk format dan parse markdown
function formatMessage(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let inList = false;
  let listItems: string[] = [];

  lines.forEach((line, idx) => {
    const trimmedLine = line.trim();
    
    // Deteksi list item (dimulai dengan - )
    if (trimmedLine.startsWith('- ')) {
      inList = true;
      listItems.push(trimmedLine.substring(2));
    } else {
      // Jika sebelumnya dalam list mode, render list sekarang
      if (inList && listItems.length > 0) {
        elements.push(
          <ul key={`list-${idx}`} className="list-disc list-inside ml-2 space-y-1 my-2">
            {listItems.map((item, i) => (
              <li key={i} className="text-sm">
                {parseLineFormatting(item)}
              </li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
      
      // Render non-list line
      if (trimmedLine.length > 0) {
        elements.push(
          <p key={`p-${idx}`} className="text-sm leading-relaxed my-2">
            {parseLineFormatting(trimmedLine)}
          </p>
        );
      }
    }
  });

  // Render remaining list items
  if (inList && listItems.length > 0) {
    elements.push(
      <ul key="final-list" className="list-disc list-inside ml-2 space-y-1 my-2">
        {listItems.map((item, i) => (
          <li key={i} className="text-sm">
            {parseLineFormatting(item)}
          </li>
        ))}
      </ul>
    );
  }

  return elements;
}

// Fungsi untuk parse bold dan formatting dalam satu line
function parseLineFormatting(text: string) {
  // Split by bold pattern first
  const boldParts = text.split(/(\*\*[^*]+\*\*)/);
  
  return boldParts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const boldText = part.slice(2, -2);
      return <strong key={idx} className="font-semibold text-foreground">{boldText}</strong>;
    }
    
    // Now parse links in this part
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)|((https?:\/\/|www\.)[^\s]+)/g;
    const linkParts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(part)) !== null) {
      // Add text before link
      if (match.index > lastIndex) {
        linkParts.push(part.substring(lastIndex, match.index));
      }

      // Add link
      if (match[1] && match[2]) {
        // Markdown link format [text](url)
        linkParts.push(
          <a
            key={`link-${idx}-${match.index}`}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            {match[1]}
          </a>
        );
      } else if (match[3]) {
        // Direct URL
        linkParts.push(
          <a
            key={`link-${idx}-${match.index}`}
            href={match[3]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            {match[3]}
          </a>
        );
      }

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < part.length) {
      linkParts.push(part.substring(lastIndex));
    }

    return linkParts.length > 0 ? (
      <span key={idx}>{linkParts}</span>
    ) : (
      part
    );
  });
}

const quickReplies = [
  'Tanaman indoor',
  'Tanaman mudah dirawat',
  'Tanaman untuk halaman',
  'Tanaman berbunga',
  'Nomor pemilik',
  'lokasi tanaman iyas'
];

// Helper function untuk detect owner contact request
function isOwnerContactRequest(input: string): boolean {
  const keywords = [
    'nomor pemilik',
    'hubungi pemilik',
    'kontak pemilik',
    'nomor telepon',
    'nomor wa',
    'no pemilik',
    'no telepon',
    'no wa',
    'whatsapp pemilik',
    'wa pemilik',
    'call pemilik',
    'telpon pemilik',
    'siapa pemilik',
    'pemiliknya siapa',
  ];
  
  const lowerInput = input.toLowerCase();
  return keywords.some(keyword => lowerInput.includes(keyword));
}

// Helper function untuk detect location request
function isLocationRequest(input: string): boolean {
  const keywords = [
    'lokasi',
    'alamat',
    'di mana',
    'dimana',
    'dimana lokasi',
    'lokasi tanaman iyas',
    'alamat tanaman iyas',
    'dimana tanaman iyas',
    'di mana tanaman iyas',
    'kota',
    'jalan',
    'jl ',
    'maps',
  ];
  
  const lowerInput = input.toLowerCase();
  return keywords.some(keyword => lowerInput.includes(keyword));
}

// Produk yang tersedia di Tanaman Iyas

const SYSTEM_PROMPT = `Anda adalah AI Assistant untuk toko tanaman online "Tanaman Iyas" di Singaraja, Bali. Anda adalah expert dalam membantu pelanggan memilih dan mendapatkan informasi tentang tanaman.

📦 PRODUK YANG TERSEDIA DI TANAMAN IYAS:
${allProducts.map(p => `- ${p.name} (Tipe: ${p.type}, Deskripsi: ${p.description}, Harga: ${p.price}, Tingkat: ${p.difficulty}, Status: ${p.status})`).join('\n')}

👤 PEMILIK TANAMAN IYAS:
- Nama: ${process.env.NEXT_PUBLIC_OWNER_NAME || 'Pemilik Tanaman Iyas'}
- WhatsApp: ${process.env.NEXT_PUBLIC_OWNER_PHONE || 'Hubungi kami'}

PERAN ANDA:
- Membantu pelanggan memilih tanaman yang SESUAI dengan kebutuhan, budget, dan kondisi mereka
- Memberikan rekomendasi SPESIFIK dari list produk di atas
- Memberikan tips perawatan tanaman yang akurat
- Menjawab pertanyaan tentang jenis tanaman yang tersedia
- Merekomendasikan tanaman berdasarkan kondisi: indoor/outdoor, cahaya, kelembaban, tingkat kesulitan
- Jika pelanggan menanyakan nomor pemilik/kontak pemilik, berikan NAMA PEMILIK dan instruksi untuk hubungi via WhatsApp

PANDUAN REKOMENDASI:
- Untuk pemula: Sansevieria, Pothos, Monstera, Philodendron (semua "Mudah")
- Untuk indoor dengan cahaya rendah: Sansevieria, Pothos, Philodendron
- Untuk outdoor/halaman: Palem Hias, Bunga Mawar
- Untuk mereka yang hobi: Bunga Anggrek (tapi "Sulit") atau Bunga Mawar

GAYA KOMUNIKASI:
- Ramah, profesional, dan helpful dalam Bahasa Indonesia
- SINGKAT dan PADAT (max 2-3 kalimat per respons)
- Gunakan emoji untuk visual yang menarik
- Selalu SPESIFIK - refer ke nama produk yang tersedia

TENTANG TANAMAN IYAS
Tanaman iyas di dirikan pada tahun 2015 oleh ${process.env.NEXT_PUBLIC_OWNER_NAME || 'Pemilik Tanaman Iyas'}, seorang pecinta tanaman yang ingin membawa keindahan alam ke rumah dan taman di Singaraja. Kami menyediakan berbagai jenis tanaman hias berkualitas tinggi, mulai dari yang mudah dirawat hingga yang lebih eksotis untuk para penghobi. Misi kami adalah membantu pelanggan menemukan tanaman yang sempurna untuk mempercantik ruang mereka dan memberikan tips perawatan yang tepat agar tanaman tetap sehat dan indah.

AKSI jika ditanya HARGA/STOK/PEMBELIAN:
➜ Arahkan ke WhatsApp: "Untuk detail harga dan ketersediaan terbaru, silakan hubungi kami via WhatsApp untuk konsultasi langsung!"

AKSI jika ditanya Lokasi:
➜ "Tanaman Iyas berlokasi di Jl. Pulau Obi No. 40, Singaraja, Bali. Anda bisa membuka lokasi kami di [Google Maps](${process.env.NEXT_PUBLIC_LOCATION_URL}) atau hubungi kami via WhatsApp untuk petunjuk arah lebih spesifik!"

AKSI jika ditanya NOMOR/KONTAK PEMILIK:
➜ Berikan: "Anda bisa menghubungi **${process.env.NEXT_PUBLIC_OWNER_NAME || 'Pemilik Tanaman Iyas'}** langsung via WhatsApp untuk konsultasi lebih detail tentang tanaman dan pemesanan!"

DILARANG:
❌ Memberi harga/stok tanpa data akurat (arahkan ke WhatsApp)
❌ Menganjurkan produk yang TIDAK ada di list
❌ Bercerita di luar topik tanaman
❌ Membuat janji tentang ketersediaan
❌ Memberikan informasi perawatan yang salah

CATATAN: Jika pelanggan bertanya tentang produk lain yang bukan di list, katakan "Produk itu tidak ada di katalog kami saat ini, tapi silakan tanya ke tim kami via WhatsApp!"`;


export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Halo! 👋 Saya adalah AI Assistant Tanaman Iyas. Saya siap membantu Anda memilih tanaman yang tepat sesuai kebutuhan. Apa yang bisa saya bantu hari ini?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Helper function to call API
  const callChatAPI = async (userContent: string) => {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'system',
            content: SYSTEM_PROMPT,
          },
          ...messages.map(msg => ({
            role: msg.type === 'user' ? 'user' : 'assistant',
            content: msg.content,
          })),
          {
            role: 'user',
            content: userContent,
          },
        ],
        model: 'llama-3.1-8b-instant',
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      
      // Handle rate limit error
      if (response.status === 429) {
        throw new Error('Terlalu banyak permintaan. Silakan coba lagi dalam beberapa detik.');
      }
      
      throw new Error(errorData.error || 'Gagal menghubungi AI service');
    }

    return await response.json();
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const data = await callChatAPI(input);
      let assistantContent = data.choices[0]?.message?.content || 'Maaf, saya tidak bisa memproses pertanyaan Anda saat ini.';

      // Check if this is an owner contact request and add WhatsApp link
      if (isOwnerContactRequest(input)) {
        const ownerName = process.env.NEXT_PUBLIC_OWNER_NAME || 'Pemilik Tanaman Iyas';
        const ownerPhone = process.env.NEXT_PUBLIC_OWNER_PHONE || '';
        const phoneNumber = ownerPhone.replace(/\D/g, '');
        
        if (phoneNumber) {
          assistantContent = `Anda bisa menghubungi **${ownerName}** langsung via WhatsApp! 📱\n\n${assistantContent}`;
        }
      }

      // Check if this is a location request and provide formatted location
      if (isLocationRequest(input)) {
        const locationUrl = process.env.NEXT_PUBLIC_LOCATION_URL || '';
        const locationContent = `📍 **Lokasi Tanaman Iyas**\nAlamat: Jl. Pulau Obi No. 40, Singaraja, Bali\nBuka Google Maps: [Klik di sini](${locationUrl})\n\n${assistantContent}`;
        assistantContent = locationContent;
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: assistantContent,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: error instanceof Error 
          ? `Terjadi kesalahan: ${error.message}`
          : 'Terjadi kesalahan saat menghubungi AI. Silakan coba lagi nanti.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReply = async (reply: string) => {
    setInput(reply);
    
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: reply,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const data = await callChatAPI(reply);
      let assistantContent = data.choices[0]?.message?.content || 'Maaf, saya tidak bisa memproses pertanyaan Anda saat ini.';

      // Check if this is an owner contact request and add WhatsApp link
      if (isOwnerContactRequest(reply)) {
        const ownerName = process.env.NEXT_PUBLIC_OWNER_NAME || 'Pemilik Tanaman Iyas';
        const ownerPhone = process.env.NEXT_PUBLIC_OWNER_PHONE || '';
        const phoneNumber = ownerPhone.replace(/\D/g, '');
        
        if (phoneNumber) {
          assistantContent = `Anda bisa menghubungi **${ownerName}** langsung via WhatsApp! 📱\n\n${assistantContent}`;
        }
      }

      // Check if this is a location request and provide formatted location
      if (isLocationRequest(reply)) {
        const locationUrl = process.env.NEXT_PUBLIC_LOCATION_URL || '';
        const locationContent = `📍 **Lokasi Tanaman Iyas**\nAlamat: Jl. Pulau Obi No. 40, Singaraja, Bali\nBuka Google Maps: [Klik di sini](${locationUrl})\n\n${assistantContent}`;
        assistantContent = locationContent;
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: assistantContent,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: error instanceof Error 
          ? `Terjadi kesalahan: ${error.message}`
          : 'Terjadi kesalahan saat menghubungi AI. Silakan coba lagi nanti.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button - AI Bot Chat */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-2">
        <div className="max-w-[220px] rounded-full border border-green-500/30 bg-background/90 px-3 py-2 text-[11px] sm:text-xs font-medium text-foreground shadow-lg backdrop-blur-sm">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Bot asisten online, siap bantu pilih tanaman 🌿
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-16 w-16 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl active:scale-95 transition-all group"
          aria-label="Chat with AI Assistant"
          title="Chat dengan AI Assistant - Sistem Bot Online"
          type="button"
        >
          <div className="relative flex items-center justify-center">
            <Bot className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-primary animate-pulse"></span>
          </div>
        </button>
      </div>

      {/* Chat Panel */}
      {isOpen && (
        <Card className="fixed bottom-20 right-4 sm:bottom-28 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[calc(100vh-140px)] sm:h-[460px] flex flex-col shadow-xl p-0 overflow-hidden rounded-lg">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border bg-primary text-primary-foreground p-4 flex-shrink-0 py-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-base">Tanaman Iyas Assistant</h3>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 text-green-600 text-xs font-medium">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                  Online
                </span>
              </div>
              <p className="text-xs opacity-90">Bot AI siap membantu memilih tanaman</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg hover:bg-primary-foreground/20 p-1 transition-colors flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs rounded-lg px-4 py-3 text-sm ${
                    message.type === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground space-y-2'
                  }`}
                >
                  {message.type === 'user' ? (
                    message.content
                  ) : (
                    <div className="space-y-1">
                      {formatMessage(message.content)}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground rounded-lg px-4 py-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce delay-100" />
                    <div className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Replies */}
          {messages.length <= 1 && (
            <div className="border-t border-border p-3 space-y-2 flex-shrink-0 bg-background">
              <p className="text-xs font-semibold text-foreground/60 px-1">Pilih topik:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs px-3 py-1 rounded-full border border-border hover:border-accent hover:bg-accent/5 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-border p-3 flex-shrink-0 bg-background">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Tanya tentang tanaman..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button
                size="sm"
                variant="ghost"
                onClick={handleSendMessage}
                disabled={isLoading}
                className="px-2"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}
