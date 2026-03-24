import { Heart, Sun, Droplets, Leaf } from 'lucide-react';

export interface Benefit {
  icon: typeof Heart;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    icon: Heart,
    title: 'Kesehatan Mental',
    description: 'Tanaman hijau terbukti mengurangi stres dan meningkatkan kesejahteraan mental Anda.',
  },
  {
    icon: Sun,
    title: 'Penyejuk Udara Alami',
    description: 'Tanaman menyerap CO2 dan menghasilkan oksigen, membuat udara rumah lebih segar.',
  },
  {
    icon: Droplets,
    title: 'Kelembaban Optimal',
    description: 'Meningkatkan kelembaban udara melalui proses transpirasi yang natural dan sehat.',
  },
  {
    icon: Leaf,
    title: 'Estetika Rumah',
    description: 'Menambah keindahan visual dan menciptakan suasana hijau yang menenangkan di rumah Anda.',
  },
];
