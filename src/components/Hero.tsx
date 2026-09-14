import React from 'react';
import { MessageCircle, ArrowDown, Sparkles, ShieldCheck, CheckCircle2, Star, Flame, Award } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../utils/whatsapp';

interface HeroProps {
  onExploreProducts: () => void;
  onOrderSpecial: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onOrderSpecial }) => {
  return (
    <section id="beranda" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background soft decorative accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-[-5%] w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Origin & Quality Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
              <span>Oleh-oleh Khas Banda Aceh • 100% Singkong Lokal Pilihan</span>
            </div>

            {/* Brand Tagline & Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
                Kriuknya Bikin <span className="text-amber-600 underline decoration-amber-300 decoration-wavy decoration-2">Nagih</span>,<br />
                Rasanya Bikin <span className="text-emerald-700">Rindu!</span>
              </h1>
              <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Camilan keripik renyah berbalut bumbu rempah alami dan segarnya irisan daun jeruk purut khas Serambi Mekkah. Dikemas dalam pouch ziplock higienis, bikin kerenyahannya tahan lama sampai gigitan terakhir!
              </p>
            </div>

            {/* Feature Highlights Mini */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-700 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-stone-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Ekstra Renyah & Tiris</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-700 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-stone-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Daun Jeruk Asli</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-700 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-stone-200/80 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Ziplock Foil Kedap</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo Keripik Mayumi! Saya mau pesan keripik varian Pedas Daun Jeruk...')}`}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-order-whatsapp-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Pesan Cepat via WhatsApp</span>
              </a>

              <button
                onClick={onExploreProducts}
                id="hero-explore-products-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-stone-800 font-semibold text-base px-6 py-3.5 rounded-xl border border-stone-300 shadow-xs hover:shadow transition-all cursor-pointer"
              >
                <span>Lihat Katalog Rasa</span>
                <ArrowDown className="w-4 h-4 text-stone-500" />
              </button>
            </div>

            {/* Trust and Social Proof Strip */}
            <div className="pt-4 border-t border-stone-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-stone-500">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-stone-800">4.9/5.0</span>
                <span>(2.400+ Ulasan Puas)</span>
              </div>

              <div className="hidden sm:inline-block w-1 h-1 rounded-full bg-stone-300" />

              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>Izin Edar P-IRT & 100% Halal</span>
              </div>

              <div className="hidden sm:inline-block w-1 h-1 rounded-full bg-stone-300" />

              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Kirim Aman Seluruh Indonesia</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Product Showcase Hero */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card Graphic */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-stone-200/80">
                <div className="relative aspect-4/3 w-full bg-stone-100 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=1000&q=80"
                    alt="Keripik Mayumi Pedas Daun Jeruk Khas Banda Aceh"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-amber-500 text-stone-950 text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
                      <Flame className="w-3.5 h-3.5 fill-current" />
                      Varian Terlaris #1
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold tracking-tight">Pedas Daun Jeruk Special</h3>
                    <p className="text-xs text-stone-200 mt-0.5">Aroma daun jeruk purut segar berpadu cabai rawit merah asli</p>
                  </div>
                </div>

                {/* Bottom Card Summary */}
                <div className="p-5 bg-white flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-500 block">Kemasan Pouch Ziplock 150g</span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-2xl font-black text-emerald-900">Rp 15.000</span>
                      <span className="text-sm text-stone-400 line-through">Rp 18.000</span>
                    </div>
                  </div>

                  <button
                    onClick={onOrderSpecial}
                    className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-sm px-4 py-2.5 rounded-xl shadow-xs transition cursor-pointer"
                  >
                    Beli Varian Ini
                  </button>
                </div>
              </div>

              {/* Floating Customer Testimonial Bubble */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-stone-200 max-w-[260px] hidden sm:block">
                <div className="flex items-center gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                    alt="Customer Avatar"
                    className="w-8 h-8 rounded-full object-cover border border-emerald-500"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-stone-800">Cut Nurul (Darussalam)</h4>
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-stone-600 mt-1.5 italic leading-tight">
                  &ldquo;Kriuknya gilaa beneran nagih! Daun jeruknya wangi semerbak.&rdquo;
                </p>
              </div>

              {/* Floating Banda Aceh Origin Badge */}
              <div className="absolute -top-4 -right-4 bg-emerald-900 text-white p-3 rounded-2xl shadow-lg border border-emerald-700 hidden sm:flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-amber-400 text-emerald-950 flex items-center justify-center font-black text-xs">
                  BA
                </div>
                <div className="text-left">
                  <span className="block text-[11px] text-emerald-300 font-semibold uppercase">Produksi Lokal</span>
                  <span className="block text-xs font-bold">Banda Aceh</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
