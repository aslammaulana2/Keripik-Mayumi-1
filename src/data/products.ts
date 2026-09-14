import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'mayumi-pedas-daun-jeruk',
    name: 'Keripik Mayumi',
    variant: 'Pedas Daun Jeruk',
    tagline: 'Sensasi pedas gurih berpadu aroma daun jeruk segar',
    description:
      'Varian primadona paling dicari! Keripik pisang renyah yang dibalut racikan cabai asli dan irisan daun jeruk purut segar. Aroma wangi yang menggoda dan rasa pedas gurih nagih tanpa bikin tenggorokan serak.',
    price: 15000,
    originalPrice: 18000,
    weight: '150 gram',
    spicinessLevel: 2,
    category: 'pedas',
    badge: 'Best Seller #1',
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Pisang Pilihan Aceh', 'Cabai Rawit Merah Asli', 'Daun Jeruk Purut Segar', 'Bawang Putih', 'Garam Laut', 'Minyak Kelapa Sawit Berkualitas'],
    shelfLife: '6 Bulan (Kemasan tertutup rapat)',
    packaging: 'Pouch Ziplock Aluminium Foil Higienis',
    chipsType: 'pisang'
  },
  {
    id: 'mayumi-original-gurih',
    name: 'Keripik Mayumi',
    variant: 'Original Gurih Renyah',
    tagline: 'Kerenyahan klasik rasa bawang putih & garam laut alami',
    description:
      'Pilihan sempurna bagi penyuka rasa klasik yang otentik. Mengedepankan rasa gurih manis alami pisang segar pilihan dengan sentuhan renyah bawang putih dan garam laut. Tekstur ekstra renyah tidak berminyak.',
    price: 13000,
    originalPrice: 15000,
    weight: '150 gram',
    spicinessLevel: 0,
    category: 'gurih',
    badge: 'Favorit Semua Usia',
    image: 'https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Pisang Pilihan Aceh', 'Bawang Putih Segar', 'Garam Laut', 'Kaldu Jamur Nabati', 'Minyak Kelapa Sawit'],
    shelfLife: '6 Bulan',
    packaging: 'Pouch Ziplock Aluminium Foil Higienis',
    chipsType: 'pisang'
  },
  {
    id: 'mayumi-balado-aceh',
    name: 'Keripik Mayumi',
    variant: 'Balado Spesial Aceh',
    tagline: 'Rasa balado manis pedas dengan sentuhan rempah khas Serambi Mekkah',
    description:
      'Racikan bumbu balado khas yang menggabungkan cabai merah besar segar dengan sedikit karamel gula aren dan rempah alami. Menghadirkan rasa manis gurih pedas yang seimbang dan melekat di lidah.',
    price: 15000,
    weight: '150 gram',
    spicinessLevel: 2,
    category: 'pedas',
    badge: 'Rempah Otentik',
    image: 'https://images.unsplash.com/photo-1528751014936-863e6e7a319c?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Pisang Pilihan', 'Cabai Merah Keriting', 'Gula Aren Alami', 'Bawang Merah & Putih', 'Asam Jawa', 'Garam Laut'],
    shelfLife: '6 Bulan',
    packaging: 'Pouch Ziplock Aluminium Foil Higienis',
    chipsType: 'pisang'
  },
  {
    id: 'mayumi-jagung-bakar',
    name: 'Keripik Mayumi',
    variant: 'Jagung Bakar Manis Gurih',
    tagline: 'Aroma smokey jagung manis mentega yang memanjakan lidah',
    description:
      'Sentuhan modern perpaduan manisnya jagung manis dengan kelezatan mentega gurih yang dipanggang. Cocok dinikmati saat santai sore, nonton bareng keluarga, ataupun teman belajar.',
    price: 14000,
    weight: '150 gram',
    spicinessLevel: 0,
    category: 'manis',
    badge: 'Paling Disukai Anak Muda',
    image: 'https://images.unsplash.com/photo-1600952841320-db92ec4047ca?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Pisang Renyah', 'Bumbu Jagung Manis Pilihan', 'Mentega Nabati', 'Gula Tebu Halus', 'Garam'],
    shelfLife: '6 Bulan',
    packaging: 'Pouch Ziplock Aluminium Foil Higienis',
    chipsType: 'pisang'
  },
  {
    id: 'mayumi-pedas-gila-lvl3',
    name: 'Keripik Mayumi',
    variant: 'Pedas Nendang Level 3',
    tagline: 'Khusus pecinta pedas sejati, ekstra cabai habanero & rawit merah',
    description:
      'Tantang batas kepedasanmu! Diracik dari kombinasi cabai rawit merah petik segar dan cabai kering pedas tingkat tinggi. Dijamin bikin melek seketika, cocok untuk teman lembur dan kumpul seru.',
    price: 15000,
    originalPrice: 17000,
    weight: '150 gram',
    spicinessLevel: 3,
    category: 'pedas',
    badge: 'Tantangan Ekstra Pedas',
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Pisang Pilihan', 'Cabai Rawit Merah Super', 'Cabai Kering Halus', 'Daun Jeruk Segar', 'Bumbu Rempah Rahasia'],
    shelfLife: '6 Bulan',
    packaging: 'Pouch Ziplock Aluminium Foil Higienis',
    chipsType: 'pisang'
  },
  {
    id: 'mayumi-paket-bundling-4rasa',
    name: 'Keripik Mayumi',
    variant: 'Paket Komplit 4 Rasa (Oleh-oleh)',
    tagline: 'Coba semua rasa favorit dalam 1 box kemasan cantik khas Banda Aceh',
    description:
      'Paket bundling hemat berisi 4 pouch varian lengkap: Pedas Daun Jeruk (150g), Original Gurih (150g), Balado Spesial Aceh (150g), dan Jagung Bakar (150g). Sudah termasuk box tenteng eksklusif oleh-oleh!',
    price: 52000,
    originalPrice: 59000,
    weight: '600 gram (4 x 150g)',
    spicinessLevel: 1,
    category: 'paket',
    badge: 'Paling Hemat 15%',
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80',
    ingredients: ['4 Varian Lengkap Keripik Mayumi dalam kemasan ziplock foil + Gift Box'],
    shelfLife: '6 Bulan',
    packaging: 'Box Exclusive Gift Pack + 4 Pouch Ziplock',
    chipsType: 'paket'
  }
];
