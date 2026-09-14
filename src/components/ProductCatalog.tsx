import React, { useState, useMemo } from 'react';
import { Search, Flame, ShoppingBag, Eye, MessageCircle, Star, Sparkles, Check } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { formatRupiah, generateSingleProductOrderLink } from '../utils/whatsapp';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProduct,
  onAddToCart
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedNotification, setAddedNotification] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Varian' },
    { id: 'bestseller', label: '🔥 Best Seller' },
    { id: 'pedas', label: 'Pedas Daun Jeruk' },
    { id: 'gurih', label: 'Gurih Original' },
    { id: 'manis', label: 'Manis Jagung' },
    { id: 'paket', label: 'Paket Oleh-oleh' }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      let matchesCategory = true;
      if (selectedCategory === 'bestseller') {
        matchesCategory = Boolean(item.isBestSeller);
      } else if (selectedCategory !== 'all') {
        matchesCategory = item.category === selectedCategory;
      }

      // Search filter
      const matchesSearch =
        item.variant.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAddWithFeedback = (product: Product) => {
    onAddToCart(product);
    setAddedNotification(product.id);
    setTimeout(() => {
      setAddedNotification(null);
    }, 1500);
  };

  return (
    <section id="produk" className="py-16 sm:py-20 bg-stone-50/60 border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full">
            Katalog Rasa Pilihan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Varian Renyah Keripik Mayumi
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Dibuat dari pisang segar pilihan tanah Aceh, diracik dengan bumbu rempah alami dan daun jeruk segar tanpa bahan pengawet buatan.
          </p>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari rasa keripik..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-stone-200 rounded-xl focus:outline-hidden focus:border-emerald-600 shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8">
            <p className="text-stone-500 text-sm">Tidak ada varian yang sesuai dengan pencarian Anda.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-emerald-700 font-bold underline cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              const isAdded = addedNotification === product.id;
              const directWaLink = generateSingleProductOrderLink(product, 1);

              return (
                <div
                  key={product.id}
                  id={`product-card-${product.id}`}
                  className="group bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image Box */}
                    <div className="relative aspect-4/3 w-full bg-stone-100 overflow-hidden">
                      <img
                        src={product.image}
                        alt={`${product.name} ${product.variant}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        {product.badge ? (
                          <span className="bg-amber-400 text-stone-950 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full shadow-xs">
                            {product.badge}
                          </span>
                        ) : (
                          <span />
                        )}

                        <span className="bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded-md">
                          {product.weight}
                        </span>
                      </div>

                      {/* Quick Detail Preview Button */}
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-stone-800 text-xs font-semibold px-3 py-1.5 rounded-xl shadow-sm transition flex items-center gap-1.5 cursor-pointer backdrop-blur-xs"
                      >
                        <Eye className="w-3.5 h-3.5 text-stone-600" />
                        <span>Detail</span>
                      </button>
                    </div>

                    {/* Content Box */}
                    <div className="p-5 sm:p-6 space-y-2.5">
                      {/* Spiciness Level Indicator */}
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded">
                          {product.chipsType === 'paket' ? 'Paket Gift' : 'Pisang Renyah'}
                        </span>

                        {product.spicinessLevel > 0 && (
                          <div className="flex items-center gap-0.5" title={`Pedas level ${product.spicinessLevel}`}>
                            {[...Array(3)].map((_, i) => (
                              <Flame
                                key={i}
                                className={`w-3.5 h-3.5 ${
                                  i < product.spicinessLevel
                                    ? 'text-red-500 fill-red-500'
                                    : 'text-stone-200'
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Product Name */}
                      <h3 className="text-xl font-bold text-stone-900 leading-snug group-hover:text-emerald-800 transition-colors">
                        {product.variant}
                      </h3>

                      <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Price Section */}
                      <div className="pt-2 flex items-baseline gap-2">
                        <span className="text-2xl font-black text-emerald-900">
                          {formatRupiah(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-stone-400 line-through">
                            {formatRupiah(product.originalPrice)}
                          </span>
                        )}
                        <span className="text-[11px] text-stone-500">/ pouch</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="p-5 sm:p-6 pt-0 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleAddWithFeedback(product)}
                      className={`inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                        isAdded
                          ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                          : 'bg-stone-100 hover:bg-stone-200 text-stone-800 border-stone-200'
                      }`}
                      title="Tambah ke Keranjang Pesanan"
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Ditambahkan</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5 text-stone-700" />
                          <span>+ Keranjang</span>
                        </>
                      )}
                    </button>

                    <a
                      href={directWaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-2xs hover:shadow-xs cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Beli via WA</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
