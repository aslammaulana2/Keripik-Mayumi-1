export interface Product {
  id: string;
  name: string;
  variant: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice?: number;
  weight: string;
  spicinessLevel: number; // 0 = tidak pedas, 1 = pedas manis, 2 = sedang, 3 = ekstra pedas
  category: 'pedas' | 'gurih' | 'manis' | 'paket';
  badge?: string;
  image: string;
  ingredients: string[];
  shelfLife: string;
  isBestSeller?: boolean;
  packaging: string;
  chipsType: 'singkong' | 'pisang' | 'paket';
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ResellerPackage {
  id: string;
  name: string;
  tag: string;
  minOrderQty: number;
  pricePerPcs: number;
  recommendedRetailPrice: number;
  starterCost: number;
  potentialProfitPercent: number;
  features: string[];
  isPopular?: boolean;
}

export interface ResellerFormData {
  fullName: string;
  whatsapp: string;
  province: string;
  city: string;
  selectedPackage: string;
  experience: string;
  notes: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
  favoriteVariant: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'pemesanan' | 'produk' | 'pengiriman' | 'reseller';
}
