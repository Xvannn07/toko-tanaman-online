import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  difficulty: 'mudah' | 'sedang' | 'sulit';
  type: 'indoor' | 'outdoor' | 'keduanya';
  status: 'tersedia' | 'terbatas' | 'tidak tersedia';
  image: string;
  price: number;
}

export function ProductCard({ product }: { product: Product }) {
  const difficultyColors = {
    mudah: 'bg-green-100 text-green-700',
    sedang: 'bg-yellow-100 text-yellow-700',
    sulit: 'bg-orange-100 text-orange-700',
  };

  const statusColors = {
    tersedia: 'bg-green-600 text-white border border-green-700 shadow-lg',
    terbatas: 'bg-orange-500 text-white border border-orange-600 shadow-lg',
    'tidak tersedia': 'bg-red-600 text-white border border-red-700 shadow-lg',
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      {/* Image */}
      <div className="relative overflow-hidden bg-muted h-86 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />

        <div className="absolute top-3 right-3 flex gap-2">
          <Badge
            variant="secondary"
            className={`px-3 py-1 text-sm font-extrabold rounded-md backdrop-blur-sm ${statusColors[product.status]}`}
          >
            {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col gap-3">
        <div>
          <h3 className="font-semibold text-lg text-foreground mb-1">{product.name}</h3>
          <p className="text-sm text-foreground/60">{product.category}</p>
        </div>

        <p className="text-sm text-foreground/70 flex-1">{product.description}</p>

        {/* Details */}
        <div className="space-y-2">
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline" className={difficultyColors[product.difficulty]}>
              Perawatan: {product.difficulty.charAt(0).toUpperCase() + product.difficulty.slice(1)}
            </Badge>
            <Badge variant="outline">
              {product.type === 'indoor'
                ? 'Indoor'
                : product.type === 'outdoor'
                  ? 'Outdoor'
                  : 'Indoor & Outdoor'}
            </Badge>
          </div>
        </div>

        {/* Price */}
        <div className="py-2 border-t border-b border-border">
          <p className="text-sm text-foreground/70">Harga Mulai Dari:</p>
          <p className="text-2xl font-bold text-primary">
            Rp {product.price.toLocaleString('id-ID')}
          </p>
        </div>

        {/* CTA Button */}
        <a
          href={`https://wa.me/${process.env.NEXT_PUBLIC_OWNER_PHONE}?text=Halo%20Tanama%20Iyas,%20saya%20tertarik%20dengan%20tanaman%20ini`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button className="w-full gap-2" variant="default">
            <MessageCircle className="h-4 w-4" />
            Konsultasi via WhatsApp
          </Button>
        </a>
      </div>
    </Card>
  );
}