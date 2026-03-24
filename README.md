# 🌿 Tanama Iyas — Online Plant Shop

Website penjualan tanaman online berbasis **Next.js** dengan integrasi **AI Assistant Bot** untuk membantu pengunjung memilih tanaman yang sesuai kebutuhan, lokasi, dan preferensi perawatan.

> Catatan: proyek ini dirancang untuk **katalog dan konsultasi tanaman**, bukan pemesanan online langsung. Untuk pemesanan, pelanggan dapat menghubungi pemilik melalui WhatsApp atau lokasi toko yang tersedia.

---

## ✨ Fitur Utama

* **Katalog tanaman online** dengan tampilan modern dan responsif
* **AI Assistant Bot** untuk membantu memilih tanaman berdasarkan kebutuhan pengguna
* **SEO friendly** untuk membantu website lebih mudah ditemukan di mesin pencari
* **Informasi kontak cepat** melalui WhatsApp
* **Lokasi toko** lewat Google Maps embed
* **Data konfigurasi aman** menggunakan `.env.local`
* **Komponen UI modern** dengan Next.js dan Tailwind CSS

---

## 🧰 Tech Stack

* **Next.js**
* **React**
* **Tailwind CSS**
* **Groq API** untuk AI Assistant Bot
* **TypeScript** (opsional, jika digunakan di project Anda)

---

## 📸 Preview Tampilan

![Preview Website Tanama Iyas](https://raw.githubusercontent.com/Xvannn07/toko-tanaman-online/refs/heads/main/public/preview.png)

---

## 📁 Struktur Halaman

Contoh struktur halaman yang disarankan:

* **Home** — banner utama, CTA, dan highlight produk
* **Catalog** — daftar tanaman berdasarkan kategori
* **About** — profil toko / pemilik
* **Contact** — WhatsApp, maps, dan informasi lokasi
* **AI Assistant** — bot untuk tanya jawab seputar tanaman

---

## 🔐 Environment Variables

Buat file `.env.local` di root project, lalu isi seperti berikut:

```env
NEXT_PUBLIC_GROQ_API_KEY=
NEXT_PUBLIC_OWNER_NAME=Made Khrisna
NEXT_PUBLIC_OWNER_PHONE=6281775489662
NEXT_PUBLIC_LOCATION_URL=
NEXT_PUBLIC_LOCATION_URL_EMBED=
```

### Penjelasan setiap data

* `NEXT_PUBLIC_GROQ_API_KEY` → API key untuk mengaktifkan AI assistant bot
* `NEXT_PUBLIC_OWNER_NAME` → nama pemilik toko yang akan ditampilkan di website
* `NEXT_PUBLIC_OWNER_PHONE` → nomor WhatsApp pemilik untuk kontak cepat
* `NEXT_PUBLIC_LOCATION_URL` → link Google Maps lokasi toko
* `NEXT_PUBLIC_LOCATION_URL_EMBED` → link embed Google Maps untuk ditampilkan di halaman kontak

---

## 🧩 Penerapan Data `.env.local`

### 1) Mengambil data env di Next.js

Contoh pemakaian di komponen:

```tsx
const ownerName = process.env.NEXT_PUBLIC_OWNER_NAME;
const ownerPhone = process.env.NEXT_PUBLIC_OWNER_PHONE;
const locationUrl = process.env.NEXT_PUBLIC_LOCATION_URL;
const locationEmbed = process.env.NEXT_PUBLIC_LOCATION_URL_EMBED;
```

---

### 2) Tombol WhatsApp

```tsx
const waMessage = `Halo ${process.env.NEXT_PUBLIC_OWNER_NAME}, saya ingin bertanya tentang tanaman.`;
const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_OWNER_PHONE}?text=${encodeURIComponent(waMessage)}`;

<a href={whatsappLink} target="_blank" rel="noreferrer">
  Hubungi via WhatsApp
</a>
```

---

### 3) Menampilkan lokasi toko

```tsx
<iframe
  src={process.env.NEXT_PUBLIC_LOCATION_URL_EMBED}
  width="100%"
  height="350"
  style={{ border: 0 }}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

---

### 4) Menggunakan data untuk AI Assistant

```tsx
const systemPrompt = `
Kamu adalah AI Assistant untuk toko tanaman ${process.env.NEXT_PUBLIC_OWNER_NAME}.
Bantu pengunjung memilih tanaman berdasarkan kebutuhan, perawatan, dan kondisi ruangan.
Jangan menerima pemesanan online langsung. Arahkan pengguna untuk menghubungi WhatsApp jika ingin bertanya lebih lanjut.
`;
```

---

## 🤖 Integrasi AI Assistant Bot

AI assistant dapat membantu menjawab pertanyaan seperti:

* Tanaman apa yang cocok untuk ruangan minim cahaya?
* Tanaman hias apa yang mudah dirawat?
* Bagaimana cara merawat anthurium?
* Tanaman apa yang cocok untuk hadiah?

Contoh alur bot:

1. Pengunjung membuka website
2. Klik tombol **Asisten AI**
3. Menuliskan pertanyaan tentang tanaman
4. Bot memberi rekomendasi tanaman yang sesuai
5. Jika perlu, bot mengarahkan ke kontak pemilik

---

## 🚀 Cara Menjalankan Project

```bash
# install dependency
npm install

# jalankan development server
npm run dev
```

Buka:

```bash
http://localhost:3000
```

---

## 🛠️ Contoh Script yang Bisa Ditambahkan

### File `.env.local`

```env
NEXT_PUBLIC_GROQ_API_KEY=your_api_key_here
NEXT_PUBLIC_OWNER_NAME=Made Khrisna
NEXT_PUBLIC_OWNER_PHONE=6281775489662
NEXT_PUBLIC_LOCATION_URL=https://maps.google.com/?q=Your+Store+Location
NEXT_PUBLIC_LOCATION_URL_EMBED=https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE
```

### Helper kontak WhatsApp

```ts
export const getWhatsAppLink = (message: string) => {
  const phone = process.env.NEXT_PUBLIC_OWNER_PHONE || "";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
```

---

## 📌 Catatan Penting

* Website ini fokus pada **katalog dan konsultasi tanaman**
* Pemesanan langsung bisa diarahkan ke WhatsApp
* Pastikan isi `.env.local` tidak dibagikan ke publik
* Untuk fitur AI, pastikan API key valid dan aman digunakan

