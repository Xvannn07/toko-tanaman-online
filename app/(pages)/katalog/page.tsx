'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ChatAssistant } from '@/components/chat-assistant';
import { ProductCard, type Product } from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useMemo } from 'react';
import { Filter, Search, X } from 'lucide-react';
import { allProducts } from '@/lib/product';

type SortOption = 'nama' | 'daftar';

export default function KatalogPage() {
  const [activeFilter, setActiveFilter] = useState('semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('daftar');

  // Filter dan search logic yang lebih efficient
  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    // Apply category filter
    if (activeFilter === 'indoor') {
      filtered = filtered.filter((p) => p.type === 'indoor' || p.type === 'keduanya');
    } else if (activeFilter === 'outdoor') {
      filtered = filtered.filter((p) => p.type === 'outdoor' || p.type === 'keduanya');
    } else if (activeFilter === 'mudah') {
      filtered = filtered.filter((p) => p.difficulty === 'mudah');
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    if (sortBy === 'nama') {
      filtered.sort((a, b) => a.name.localeCompare(b.name, 'id'));
    }

    return filtered;
  }, [activeFilter, searchQuery, sortBy]);

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveFilter('semua');
    setSortBy('daftar');
  };

  const isFilterActive = activeFilter !== 'semua' || searchQuery.trim() !== '' || sortBy !== 'daftar';

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
              <span className="text-foreground">Katalog Tanaman</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Katalog Tanaman Lengkap</h1>
            <p className="text-lg text-foreground/70 mt-4">
              Jelajahi koleksi lengkap tanaman kami dan temukan tanaman favorit Anda.
            </p>
          </div>
        </section>

        {/* Search & Filters */}
        <section className="border-b border-border bg-accent/5">
          <div className="container mx-auto px-4 md:px-6 py-6">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-foreground/40" />
                <Input
                  type="text"
                  placeholder="Cari tanaman berdasarkan nama, jenis, atau kategori..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-10 h-10"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-foreground/10 rounded"
                  >
                    <X className="h-4 w-4 text-foreground/40 hover:text-foreground/60" />
                  </button>
                )}
              </div>
            </div>

            {/* Filters & Sorting */}
            <div className="flex flex-col gap-4">
              {/* Category Filter */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="h-5 w-5 text-foreground" />
                  <span className="font-semibold text-foreground">Kategori:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Semua', value: 'semua' },
                    { label: 'Indoor', value: 'indoor' },
                    { label: 'Outdoor', value: 'outdoor' },
                    { label: 'Mudah Dirawat', value: 'mudah' },
                  ].map((filter) => (
                    <Button
                      key={filter.value}
                      variant={activeFilter === filter.value ? 'default' : 'outline'}
                      onClick={() => handleFilter(filter.value)}
                      size="sm"
                    >
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Sorting & Clear Filters */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <label className="text-sm font-medium text-foreground">Urutkan:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="px-3 py-1.5 text-sm border border-border rounded-md bg-background text-foreground hover:border-accent transition-colors"
                  >
                    <option value="daftar">Daftar Default</option>
                    <option value="nama">Nama (A-Z)</option>
                  </select>
                </div>

                {isFilterActive && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleResetFilters}
                    className="text-foreground/70 hover:text-foreground"
                  >
                    Reset Semua Filter
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            {filteredProducts.length > 0 ? (
              <>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                  <p className="text-sm text-foreground/60">
                    Menampilkan <strong className="text-foreground">{filteredProducts.length}</strong> dari{' '}
                    <strong className="text-foreground">{allProducts.length}</strong> produk
                    {isFilterActive && <span className="text-accent"> (dengan filter aktif)</span>}
                  </p>
                  {isFilterActive && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleResetFilters}
                      className="w-full sm:w-auto"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Clear Filters
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🌱</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Tidak ada produk yang ditemukan
                </h3>
                <p className="text-foreground/70 mb-8 max-w-md mx-auto">
                  {searchQuery ? (
                    <>Pencarian "<strong>{searchQuery}</strong>" tidak menemukan hasil. Coba ubah kata kunci atau filter yang digunakan.</>
                  ) : (
                    <>Tidak ada produk yang sesuai dengan filter yang dipilih. Coba ubah kategori atau sorting.</>
                  )}
                </p>
                <Button 
                  variant="outline" 
                  onClick={handleResetFilters}
                  className="gap-2"
                >
                  <X className="h-4 w-4" />
                  Reset Semua Filter
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 border-t border-border bg-accent/5">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Tidak menemukan tanaman yang Anda cari?
            </h3>
            <p className="text-foreground/70 mb-6">
              Hubungi kami via WhatsApp untuk konsultasi dan rekomendasi produk yang lebih spesifik berdasarkan kebutuhan Anda.
            </p>
            <a 
              href={`https://wa.me/${process.env.NEXT_PUBLIC_OWNER_PHONE}?text=Halo%20Tanama%20Iyas,%20saya%20ingin%20konsultasi%20tentang%20tanaman`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button>💬 Chat via WhatsApp</Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
