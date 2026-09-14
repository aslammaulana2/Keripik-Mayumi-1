import React, { useState } from 'react';
import { X, MessageCircle, ShoppingBag, Flame, Sparkles, CheckCircle2, ShieldCheck, Clock, Package } from 'lucide-react';
import { Product } from '../types';
import { formatRupiah, generateSingleProductOrderLink } from '../utils/whatsapp';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  const [quantity, setQuantity] = useState(1);
  const [cityInput, setCityInput] = useState('Banda Aceh');

  if (!product) return null;

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const directWhatsAppLink = generateSingleProductOrderLink(product, quantity, cityInput);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Tutup detail produk"
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-stone-100 text-stone-700 p-2 rounded-full shadow-md transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image Side */}
          <div className="relative bg-stone-100 h-64 md:h-full min-h-[260px] overflow-hidden">
            <img
              src={product.image}
              alt={`${product.name} ${product.variant}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            
            {product.badge && (
              <div className="absolute top-4 left-4">
                <span className="bg-amber-400 text-stone-950 text-xs font-extrabold px-3 py-1 rounded-full shadow-sm">
                  {product.badge}
                </span>
              </div>
            )}

            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-xs bg-emerald-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md font-medium inline-block">
                Kemasan: {product.weight}
              </span>
            </div>
          </div>

          {/* Product Details Side */}
          <div className="p-6 sm:p-7 flex flex-col justify-between space-y-5">
            <div>
              {/* Category & Spiciness */}
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-xs font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md">
                  {product.chipsType === 'paket' ? 'Paket Oleh-oleh' : 'Keripik Singkong Renyah'}
                </span>

                {product.spicinessLevel > 0 && (
                  <div className="flex items-center gap-1 text-xs text-red-600 font-semibold" title={`Level Pedas ${product.spicinessLevel}`}>
                    <span className="text-stone-500 font-normal">Pedas:</span>
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

              {/* Title & Tagline */}
              <h2 className="text-2xl font-extrabold text-stone-900 leading-tight">
                {product.variant}
              </h2>
              <p className="text-xs text-amber-700 font-semibold mt-0.5">
                {product.tagline}
              </p>

              {/* Price Row */}
              <div className="flex items-baseline gap-2.5 mt-3">
                <span className="text-2xl font-black text-emerald-800">
                  {formatRupiah(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-stone-400 line-through">
                    {formatRupiah(product.originalPrice)}
                  </span>
                )}
                <span className="text-xs text-stone-500">/ bungkus</span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed">
                {product.description}
              </p>

              {/* Ingredients and Features */}
              <div className="mt-4 pt-3 border-t border-stone-100 space-y-2">
                <div className="text-xs font-semibold text-stone-800">Komposisi Bahan:</div>
                <div className="flex flex-wrap gap-1.5">
                  {product.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specs Grid */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] text-stone-600 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                <div className="flex items-center gap-1.5">
                  <Package className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{product.packaging}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Daya tahan: {product.shelfLife}</span>
                </div>
              </div>
            </div>

            {/* Quantity Selector & Order Actions */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-700">Jumlah Pesanan:</span>
                <div className="flex items-center border border-stone-300 rounded-xl bg-white overflow-hidden shadow-2xs">
                  <button
                    onClick={handleDecrease}
                    className="px-3 py-1.5 text-stone-600 hover:bg-stone-100 font-bold transition"
                  >
                    -
                  </button>
                  <span className="w-10 text-center text-xs font-bold text-stone-900">
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncrease}
                    className="px-3 py-1.5 text-stone-600 hover:bg-stone-100 font-bold transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Destination City Input for prefilled text */}
              <div className="flex items-center gap-2">
                <label className="text-xs text-stone-500 shrink-0">Kota Tujuan:</label>
                <input
                  type="text"
                  value={cityInput}
                  onChange={(e) => setCityInput(e.target.value)}
                  placeholder="Banda Aceh / Medan / dll"
                  className="w-full text-xs px-2.5 py-1.5 border border-stone-200 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-stone-50/50"
                />
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <button
                  onClick={() => {
                    onAddToCart(product, quantity);
                    onClose();
                  }}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold py-3 rounded-xl transition cursor-pointer border border-stone-300"
                >
                  <ShoppingBag className="w-4 h-4 text-stone-700" />
                  <span>+ Keranjang</span>
                </button>

                <a
                  href={directWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-3 rounded-xl shadow-xs transition cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Beli via WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
