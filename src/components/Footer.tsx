import React from 'react';
import { Flame, Instagram, Phone, Mail, MapPin, Heart, ShieldCheck } from 'lucide-react';
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER, EMAIL_ADDRESS, INSTAGRAM_HANDLE, TIKTOK_HANDLE } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-sm">
                <Flame className="w-5 h-5 text-amber-300 fill-amber-300" />
              </div>
              <div>
                <span className="block text-xl font-black text-white tracking-tight leading-none">
                  Keripik <span className="text-amber-500">Mayumi</span>
                </span>
                <span className="text-[10px] tracking-widest text-emerald-400 font-semibold uppercase">
                  Banda Aceh • Est. 2024
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-400 max-w-sm italic">
              &ldquo;Kriuknya Bikin Nagih, Rasanya Bikin Rindu!&rdquo;
            </p>

            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              Pelopor camilan keripik renyah khas Banda Aceh dengan racikan rempah asli dan daun jeruk segar. Kemasan ziplock higienis, cocok untuk teman aktivitas harian dan oleh-oleh istimewa.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-emerald-600 text-stone-300 hover:text-white flex items-center justify-center transition"
                title="WhatsApp Resmi"
              >
                <Phone className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-gradient-to-tr hover:from-amber-600 hover:to-rose-600 text-stone-300 hover:text-white flex items-center justify-center transition"
                title="Instagram Resmi"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition"
                title="Email Bisnis"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigasi Cepat */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigasi</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#beranda" className="hover:text-amber-400 transition">Beranda</a>
              </li>
              <li>
                <a href="#produk" className="hover:text-amber-400 transition">Katalog Produk</a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-amber-400 transition">Keunggulan & Kualitas</a>
              </li>
              <li>
                <a href="#tentang-kami" className="hover:text-amber-400 transition">Tentang Kami</a>
              </li>
              <li>
                <a href="#reseller" className="hover:text-amber-400 transition">Program Reseller</a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-amber-400 transition">Ulasan Pelanggan</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Varian Favorit */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Varian Rasa</h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>Pedas Daun Jeruk (Best Seller)</li>
              <li>Original Gurih Renyah</li>
              <li>Balado Spesial Aceh</li>
              <li>Jagung Bakar Manis</li>
              <li>Pedas Nendang Level 3</li>
              <li>Paket Bundling 4 Rasa</li>
            </ul>
          </div>

          {/* Col 4: Rumah Produksi & Izin */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Alamat & Legalitas</h4>
            <div className="space-y-2 text-xs text-stone-400 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Jl. Teuku Umar No. 88, Seutui, Kec. Baiturrahman, Banda Aceh 23243</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{WHATSAPP_DISPLAY}</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="bg-stone-800/80 p-3 rounded-xl border border-stone-700/80 space-y-1 text-[11px]">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Izin P-IRT & Sertifikasi Halal</span>
                </div>
                <p className="text-stone-400">P-IRT No. 2151171010452-28</p>
                <p className="text-stone-400">100% Halal Indonesia</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2025 Keripik Mayumi Banda Aceh. Seluruh hak cipta dilindungi.</p>
          <p className="flex items-center gap-1">
            Dibuat dengan rasa cinta di Tanah Rencong, Banda Aceh
          </p>
        </div>

      </div>
    </footer>
  );
};
