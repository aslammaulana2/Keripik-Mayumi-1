import { FAQItem, ResellerPackage } from '../types';

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'pemesanan',
    question: 'Bagaimana cara memesan Keripik Mayumi?',
    answer:
      'Pemesanan sangat mudah dan cepat! Anda cukup memilih varian keripik di katalog website kami, lalu klik tombol "Pesan via WhatsApp". Anda akan otomatis diarahkan ke WhatsApp resmi kami dengan rincian pesanan yang sudah terisi rapi. Tim admin kami akan mengonfirmasi total dan ongkos kirim dalam hitungan menit.'
  },
  {
    id: 'faq-2',
    category: 'produk',
    question: 'Berapa lama daya tahan dan kerenyahan Keripik Mayumi?',
    answer:
      'Keripik Mayumi dapat bertahan hingga 6 bulan selama segel belum dibuka dan disimpan di tempat sejuk kering terhindar dari sinar matahari langsung. Kemasan kami menggunakan pouch aluminium foil dengan ziplock kedap udara, sehingga setelah dibuka bisa ditutup rapat kembali dan tetap renyah hingga berminggu-minggu.'
  },
  {
    id: 'faq-3',
    category: 'pengiriman',
    question: 'Apakah bisa kirim ke luar kota Banda Aceh dan luar pulau Sumatra?',
    answer:
      'Bisa sekali! Kami melayani pengiriman ke seluruh wilayah Indonesia melalui ekspedisi terpercaya (J&T Express, JNE, SiCepat, dan Pos Indonesia). Untuk area Banda Aceh dan Aceh Besar, tersedia pengiriman same-day via kurir lokal atau ambil langsung di lokasi produksi kami.'
  },
  {
    id: 'faq-4',
    category: 'pengiriman',
    question: 'Apakah produk aman dan tidak mudah hancur saat pengiriman?',
    answer:
      'Kami menerapkan standar packing ekstra aman! Setiap pesanan dikemas menggunakan bubble wrap berlapis serta kardus karton tebal khusus tanpa biaya tambahan, plus stiker "Fragile / Makanan Mudah Remuk" agar kurir menangani paket dengan hati-hati.'
  },
  {
    id: 'faq-5',
    category: 'produk',
    question: 'Apakah Keripik Mayumi sudah memiliki izin edar dan Halal?',
    answer:
      'Ya, seluruh varian Keripik Mayumi diproduksi secara higienis dengan standar izin P-IRT Dinas Kesehatan dan menggunakan 100% bahan baku halal alami tanpa pengawet buatan berbahaya.'
  },
  {
    id: 'faq-6',
    category: 'reseller',
    question: 'Bagaimana cara bergabung menjadi Reseller atau Dropshipper?',
    answer:
      'Anda dapat memilih salah satu paket kemitraan (Paket Pemula mulai Rp 150.000 atau Paket Juragan), lalu isi formulir pendaftaran di halaman Reseller. Tim kemitraan kami akan memberikan materi foto/video promosi, edukasi penjualan, serta harga khusus reseller dengan margin keuntungan hingga 35%.'
  }
];

export const RESELLER_PACKAGES: ResellerPackage[] = [
  {
    id: 'paket-pemula',
    name: 'Paket Reseller Pemula',
    tag: 'Cocok untuk Mahasiswa & Pemula',
    minOrderQty: 15,
    pricePerPcs: 10500,
    recommendedRetailPrice: 15000,
    starterCost: 157500,
    potentialProfitPercent: 30,
    features: [
      'Minimal order hanya 15 pouch',
      'Bebas mix 4 varian rasa favorit',
      'Akses ke Google Drive foto & video promosi HD',
      'Template copywriting promosi WhatsApp & IG',
      'Grup diskusi & konsultasi penjualan',
      'Bisa sistem Dropship (kirim atas nama toko Anda)'
    ],
    isPopular: false
  },
  {
    id: 'paket-juragan',
    name: 'Paket Agen / Juragan',
    tag: 'Paling Laris & Margin Maksimal',
    minOrderQty: 50,
    pricePerPcs: 9500,
    recommendedRetailPrice: 15000,
    starterCost: 475000,
    potentialProfitPercent: 36,
    features: [
      'Minimal order 50 pouch',
      'Harga termurah: Rp 9.500/pcs (Untung Rp 5.500/pcs)',
      'Free Banner Spanduk Promosi Keripik Mayumi',
      'Prioritas stok saat varian best seller menipis',
      'Materi promosi lengkap + template reels & story',
      'Listing nama toko / kontak Anda di website kami',
      'Subsidi ongkir s/d 50% untuk pengiriman luar Aceh'
    ],
    isPopular: true
  },
  {
    id: 'paket-dropship',
    name: 'Paket Mitra Dropshipper',
    tag: 'Tanpa Stok & Tanpa Modal Barang',
    minOrderQty: 1,
    pricePerPcs: 11500,
    recommendedRetailPrice: 15000,
    starterCost: 0,
    potentialProfitPercent: 23,
    features: [
      'Tanpa minimal order (1 pcs pun bisa)',
      'Tidak perlu simpan stok barang di rumah',
      'Packing & pengiriman dihandle 100% oleh tim Mayumi',
      'Label pengiriman menggunakan nama toko Anda',
      'Katalog foto & pricelist digital siap pakai',
      'Pencairan komisi cepat & transparan'
    ],
    isPopular: false
  }
];
