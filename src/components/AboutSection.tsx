import React from 'react';
import { Heart, MapPin, Sparkles, CheckCircle2, Users, Building, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang-kami" className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Images Grid Showcase */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-md aspect-4/5 bg-stone-200">
                  <img
                    src="https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=600&q=80"
                    alt="Bumbu Rempah Daun Jeruk Asli"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="bg-emerald-800 text-white p-5 rounded-3xl shadow-sm text-center">
                  <span className="block text-2xl sm:text-3xl font-black text-amber-300">15.000+</span>
                  <span className="text-xs text-emerald-100 font-medium">Bungkus Terkirim Se-Indonesia</span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="bg-amber-400 text-stone-950 p-5 rounded-3xl shadow-sm text-center">
                  <span className="block text-2xl sm:text-3xl font-black">45+</span>
                  <span className="text-xs font-semibold text-stone-900">Mitra Reseller Aktif</span>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-md aspect-4/5 bg-stone-200">
                  <img
                    src="https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&w=600&q=80"
                    alt="Proses Pengolahan Pisang Pilihan"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Story & Brand Values */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full">
                Kisah Kami
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
                Berawal Dari Resep Dapur Keluarga di Banda Aceh
              </h2>
            </div>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              <strong>Keripik Mayumi</strong> lahir di jantung kota Banda Aceh dari kegemaran keluarga dalam mengolah camilan keripik pisang tradisional. Kami melihat keripik pisang di pasaran seringkali terasa terlalu keras atau berminyak, serta bumbunya hanya menggunakan serbuk perisa sintetis.
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Dengan komitmen menciptakan camilan yang <em>renyah, lokal, dan kekinian</em>, kami bereksperimen memadukan irisan tipis pisang segar pilihan dengan daun jeruk purut segar dan cabai rawit merah asli Aceh. Lahirlah <strong>Keripik Mayumi</strong>—camilan yang kini menjadi teman setia saat kerja, nugas, nongkrong, hingga oleh-oleh khas Banda Aceh.
            </p>

            {/* 3 Brand Values from PRD */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white p-4 rounded-2xl border border-stone-200/90 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs mb-2">
                  01
                </div>
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wide">100% Lokal</h4>
                <p className="text-[11px] text-stone-500 mt-1">Bahan segar dari petani lokal tanah Aceh.</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-stone-200/90 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs mb-2">
                  02
                </div>
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wide">Higienis</h4>
                <p className="text-[11px] text-stone-500 mt-1">Standar izin P-IRT, kemasan ziplock kedap udara.</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-stone-200/90 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-stone-100 text-stone-800 flex items-center justify-center font-bold text-xs mb-2">
                  03
                </div>
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wide">Inovatif</h4>
                <p className="text-[11px] text-stone-500 mt-1">Variasi rasa kekinian yang pas di lidah semua generasi.</p>
              </div>
            </div>

            {/* Workshop location note */}
            <div className="pt-2 flex items-center gap-3 text-xs text-stone-600 bg-white/70 p-3 rounded-2xl border border-stone-200">
              <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>
                <strong>Rumah Produksi:</strong> Jl. Teuku Umar No. 88, Seutui, Kota Banda Aceh, Nanggroe Aceh Darussalam.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
