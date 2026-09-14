import React, { useState } from 'react';
import { Sparkles, X, ArrowRight } from 'lucide-react';

interface PromoBannerProps {
  onPromoClick: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onPromoClick }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div id="promo-banner" className="bg-emerald-800 text-white text-xs sm:text-sm py-2 px-4 sticky top-0 z-50 shadow-sm transition-all border-b border-emerald-900/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden text-center sm:text-left mx-auto sm:mx-0">
          <span className="inline-flex items-center justify-center bg-amber-400 text-emerald-950 font-bold px-2 py-0.5 rounded text-[11px] uppercase tracking-wider shrink-0">
            Promo Spesial
          </span>
          <p className="truncate text-emerald-100 font-medium">
            Beli 4 Pouch varian apa saja, <strong className="text-white font-bold">Gratis Ongkir</strong> area Banda Aceh & diskon paket bundling!
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onPromoClick}
            className="hidden md:inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-semibold text-xs transition cursor-pointer underline underline-offset-2"
          >
            Pesan Sekarang <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Tutup banner promo"
            className="text-emerald-300 hover:text-white p-1 rounded hover:bg-emerald-700/50 transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
