export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQCategory {
  category: string;
  items: FAQItem[];
}

export const faqs: FAQCategory[] = [
  {
    category: 'Umum',
    items: [
      {
        q: 'Apa itu Tanaman Iyas?',
        a: 'Tanaman Iyas adalah toko tanaman keluarga yang menyediakan berbagai pilihan tanaman hias berkualitas tinggi di Singaraja dan sekitarnya. Kami berkomitmen untuk memberikan tanaman terbaik dengan layanan konsultasi profesional.',
      },
      {
        q: 'Berapa lama Tanaman Iyas melayani?',
        a: 'Tanaman Iyas buka dari Senin hingga Minggu, pukul 09:00 hingga 17:00. Anda dapat menghubungi kami kapan saja melalui WhatsApp untuk kebutuhan khusus atau konsultasi.',
      },
      {
        q: 'Di mana lokasi Tanaman Iyas?',
        a: 'Tanaman Iyas berlokasi di Singaraja dan melayani area Singaraja, Buleleng, dan sekitarnya. Hubungi kami untuk lokasi spesifik atau jika Anda berada di area lain.',
      },
    ],
  },
  {
    category: 'Pemesanan & Pembayaran',
    items: [
      {
        q: 'Bagaimana cara memesan tanaman?',
        a: 'Kami tidak menerima pemesanan online. Untuk memesan, silakan hubungi kami melalui WhatsApp atau telepon. Tim kami siap membantu Anda dengan cepat dan profesional.',
      },
      {
        q: 'Apakah tersedia pengiriman?',
        a: 'Untuk informasi pengiriman, silakan hubungi kami melalui WhatsApp. Kami akan menginformasikan opsi pengiriman dan biaya yang tersedia untuk lokasi Anda.',
      },
      {
        q: 'Apakah ada pembelian online?',
        a: 'Saat ini kami tidak menyediakan sistem pembelian online. Semua transaksi dilakukan melalui konsultasi langsung via WhatsApp atau kunjungan langsung ke toko kami.',
      },
      {
        q: 'Metode pembayaran apa saja yang diterima?',
        a: 'Untuk informasi metode pembayaran yang tersedia, silakan tanyakan langsung kepada tim kami melalui WhatsApp atau telepon.',
      },
    ],
  },
  {
    category: 'Tanaman & Perawatan',
    items: [
      {
        q: 'Tanaman apa yang cocok untuk pemula?',
        a: 'Untuk pemula, kami merekomendasikan: Sansevieria (Lidah Mertua), Pothos, Monstera, dan Philodendron. Semua tanaman ini mudah dirawat dan tahan terhadap berbagai kondisi.',
      },
      {
        q: 'Apakah ada tanaman yang cocok untuk indoor?',
        a: 'Ya! Banyak tanaman indoor pilihan kami seperti Monstera, Sansevieria, Sirih Gading, dan Aglonema. Semuanya tahan terhadap cahaya rendah dan mudah dirawat di dalam ruangan.',
      },
      {
        q: 'Bagaimana cara merawat tanaman agar tetap hidup?',
        a: 'Setiap jenis tanaman memiliki kebutuhan berbeda. Secara umum, penting untuk memberikan cahaya yang cukup, penyiraman yang tepat, tanah berkualitas, dan pupuk berkala. Tim kami siap memberikan panduan detail sesuai jenis tanaman Anda.',
      },
      {
        q: 'Berapa sering saya harus menyiram tanaman?',
        a: 'Frekuensi penyiraman tergantung jenis tanaman dan kondisi lingkungan. Sebagian tanaman lebih suka tanah lembab, sementara yang lain lebih tahan kering. Hubungi kami untuk panduan penyiraman spesifik untuk tanaman Anda.',
      },
      {
        q: 'Apakah tersedia layanan perawatan tanaman?',
        a: 'Untuk informasi tentang layanan perawatan tambahan, silakan hubungi kami melalui WhatsApp. Kami akan mendiskusikan opsi yang tersedia.',
      },
    ],
  },
  {
    category: 'Konsultasi & Layanan',
    items: [
      {
        q: 'Apakah ada layanan konsultasi?',
        a: 'Ya! Kami menyediakan konsultasi gratis untuk membantu Anda memilih tanaman yang tepat sesuai kebutuhan, budget, dan kondisi ruangan Anda.',
      },
      {
        q: 'Bagaimana cara mendapatkan konsultasi?',
        a: 'Hubungi kami melalui WhatsApp atau telepon. Tim kami siap memberikan konsultasi lengkap tentang jenis tanaman, cara merawat, dan rekomendasi lainnya.',
      },
      {
        q: 'Apakah bisa custom order tanaman?',
        a: 'Untuk kebutuhan custom order atau tanaman spesifik, silakan hubungi kami langsung melalui WhatsApp. Kami akan berusaha memenuhi permintaan Anda.',
      },
      {
        q: 'Apakah ada garansi tanaman?',
        a: 'Semua tanaman kami dijamin dalam kondisi sehat pada saat diserahkan. Untuk detail garansi dan kebijakan pengembalian, silakan tanyakan kepada tim kami.',
      },
    ],
  },
  {
    category: 'Area Layanan',
    items: [
      {
        q: 'Apakah Anda melayani area selain Singaraja?',
        a: 'Kami melayani Singaraja, Buleleng, dan sekitarnya. Untuk area lain, silakan hubungi kami melalui WhatsApp untuk menanyakan apakah kami dapat melayani lokasi Anda.',
      },
      {
        q: 'Bagaimana jika saya tidak berada di Singaraja?',
        a: 'Hubungi kami melalui WhatsApp untuk menanyakan kemungkinan pengiriman ke lokasi Anda. Kami akan memberikan informasi lengkap tentang biaya dan jadwal pengiriman.',
      },
    ],
  },
];
