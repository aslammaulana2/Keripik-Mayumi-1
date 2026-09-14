import React, { useState } from 'react';
import { Users, TrendingUp, Sparkles, CheckCircle2, MessageCircle, HelpCircle, Gift, ArrowRight } from 'lucide-react';
import { RESELLER_PACKAGES } from '../data/faqs';
import { ResellerFormData } from '../types';
import { formatRupiah, generateResellerRegistrationLink } from '../utils/whatsapp';

export const ResellerSection: React.FC = () => {
  // Interactive Simulator State
  const [dailySales, setDailySales] = useState(15); // pouches per day
  const profitPerPcs = 5500; // avg profit for reseller
  const monthlyProfit = dailySales * profitPerPcs * 30;

  // Form State
  const [formData, setFormData] = useState<ResellerFormData>({
    fullName: '',
    whatsapp: '',
    province: 'Aceh',
    city: '',
    selectedPackage: 'Paket Reseller Pemula (15 pcs)',
    experience: 'Pemula / Belum Pernah',
    notes: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waLink = generateResellerRegistrationLink(formData);
    window.open(waLink, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  return (
    <section id="reseller" className="py-16 sm:py-24 bg-white border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
            Peluang Usaha Kemitraan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Gabung Jadi Reseller & Dropshipper Keripik Mayumi
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Dapatkan penghasilan tambahan hingga jutaan rupiah per bulan dari rumah dengan produk camilan yang repeat order-nya tinggi dan disukai semua kalangan.
          </p>
        </div>

        {/* 4 Core Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-stone-50 p-6 rounded-3xl border border-stone-200/80">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900 mb-1">Margin Profit Tinggi</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Keuntungan bersih hingga 30% - 36% per bungkus. Harga jual kembali fleksibel sesuai pasar di kota Anda.
            </p>
          </div>

          <div className="bg-stone-50 p-6 rounded-3xl border border-stone-200/80">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold mb-4">
              <Gift className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900 mb-1">Modal Awal Ringan</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Mulai dari Rp 150.000 saja sudah bisa menjadi reseller resmi dan langsung dapat 15 pouch keripik.
            </p>
          </div>

          <div className="bg-stone-50 p-6 rounded-3xl border border-stone-200/80">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900 mb-1">Materi Promosi Siap Pakai</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Disediakan foto produk beresolusi tinggi, video reels/TikTok, dan copywriting promosi WhatsApp tinggal copy-paste.
            </p>
          </div>

          <div className="bg-stone-50 p-6 rounded-3xl border border-stone-200/80">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900 mb-1">Dukungan Dropship</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Takut stok menumpuk? Tim kami bisa kirimkan paket langsung ke pembeli Anda dengan label pengirim atas nama toko Anda!
            </p>
          </div>
        </div>

        {/* Interactive Profit Simulator */}
        <div className="mb-16 bg-gradient-to-br from-emerald-900 to-emerald-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider bg-emerald-800/80 px-3 py-1 rounded-md inline-block">
                Simulasi Keuntungan Reseller
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Berapa Potensi Penghasilan Anda?
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                Geser estimasi penjualan per hari untuk melihat proyeksi keuntungan bersih bulanan Anda sebagai mitra Keripik Mayumi:
              </p>

              {/* Slider Input */}
              <div className="pt-3 space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold text-emerald-200">
                  <span>Target Penjualan per Hari:</span>
                  <span className="text-lg font-black text-amber-300">{dailySales} Bungkus / Hari</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="5"
                  value={dailySales}
                  onChange={(e) => setDailySales(Number(e.target.value))}
                  className="w-full accent-amber-400 h-2 bg-emerald-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-emerald-300">
                  <span>5 pcs (Sampingan Santai)</span>
                  <span>25 pcs (Aktif Medsos)</span>
                  <span>50 pcs (Juragan Camilan)</span>
                </div>
              </div>
            </div>

            {/* Result Box */}
            <div className="md:col-span-5 bg-white text-stone-900 p-6 sm:p-7 rounded-2xl shadow-lg border border-emerald-700/30 text-center space-y-3">
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wide block">
                Estimasi Keuntungan Bersih / Bulan
              </span>
              <div className="text-3xl sm:text-4xl font-black text-emerald-800">
                {formatRupiah(monthlyProfit)}
              </div>
              <p className="text-xs text-stone-500">
                *Berdasarkan selisih harga rata-rata Rp {profitPerPcs.toLocaleString('id-ID')}/pcs x {dailySales * 30} bungkus dalam 30 hari.
              </p>
              <a
                href="#form-reseller"
                className="inline-block w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs rounded-xl shadow-xs transition"
              >
                Mulai Gabung Sekarang
              </a>
            </div>

          </div>
        </div>

        {/* Reseller Package Cards */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-stone-900">Pilihan Paket Kemitraan</h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">Pilih tingkatan yang paling sesuai dengan target dan modal Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESELLER_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-3xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 ${
                  pkg.isPopular
                    ? 'border-emerald-600 bg-emerald-50/40 shadow-md ring-2 ring-emerald-600/30 relative'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                {pkg.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-700 text-white text-[11px] font-black uppercase tracking-wider py-1 px-3 rounded-full shadow-xs">
                    Paling Direkomendasikan
                  </span>
                )}

                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-stone-500 font-medium block">{pkg.tag}</span>
                    <h4 className="text-xl font-extrabold text-stone-900 mt-0.5">{pkg.name}</h4>
                  </div>

                  <div className="py-2 border-y border-stone-200/80">
                    <span className="text-xs text-stone-500 block">Harga Modal:</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-black text-emerald-800">
                        {formatRupiah(pkg.pricePerPcs)}
                      </span>
                      <span className="text-xs text-stone-500">/ pcs</span>
                    </div>
                    <span className="text-[11px] text-stone-500 block mt-1">
                      Min. Order: {pkg.minOrderQty} bungkus {pkg.starterCost > 0 ? `(${formatRupiah(pkg.starterCost)})` : ''}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2 text-xs text-stone-700">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-4 border-t border-stone-100">
                  <button
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, selectedPackage: pkg.name }));
                      const formEl = document.getElementById('form-reseller');
                      if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                      pkg.isPopular
                        ? 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
                    }`}
                  >
                    Pilih {pkg.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reseller Registration Form */}
        <div id="form-reseller" className="max-w-2xl mx-auto bg-stone-50 p-6 sm:p-10 rounded-3xl border border-stone-200/90 shadow-sm">
          <div className="text-center mb-6 space-y-1">
            <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900">
              Formulir Pendaftaran Mitra Reseller
            </h3>
            <p className="text-xs text-stone-500">
              Isi data diri Anda di bawah ini. Kami akan langsung mengonfirmasi via WhatsApp untuk aktivasi kemitraan dan pengiriman materi promosi.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">
                Nama Lengkap *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Contoh: Siti Rahmawati"
                className="w-full text-xs px-3 py-2.5 border border-stone-300 rounded-xl bg-white focus:outline-hidden focus:border-emerald-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Nomor WhatsApp Aktif *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  placeholder="Contoh: 081234567890"
                  className="w-full text-xs px-3 py-2.5 border border-stone-300 rounded-xl bg-white focus:outline-hidden focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Kota / Kabupaten *
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="Contoh: Banda Aceh / Medan / Pekanbaru"
                  className="w-full text-xs px-3 py-2.5 border border-stone-300 rounded-xl bg-white focus:outline-hidden focus:border-emerald-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Pilihan Paket Kemitraan *
                </label>
                <select
                  value={formData.selectedPackage}
                  onChange={(e) => setFormData({ ...formData, selectedPackage: e.target.value })}
                  className="w-full text-xs px-3 py-2.5 border border-stone-300 rounded-xl bg-white focus:outline-hidden focus:border-emerald-600"
                >
                  <option value="Paket Reseller Pemula (15 pcs)">Paket Reseller Pemula (15 pcs)</option>
                  <option value="Paket Agen / Juragan (50 pcs)">Paket Agen / Juragan (50 pcs)</option>
                  <option value="Paket Mitra Dropshipper">Paket Mitra Dropshipper (Tanpa Modal)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Pengalaman Jualan
                </label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full text-xs px-3 py-2.5 border border-stone-300 rounded-xl bg-white focus:outline-hidden focus:border-emerald-600"
                >
                  <option value="Pemula / Belum Pernah">Pemula (Baru Mau Mulai)</option>
                  <option value="Pernah Jual Camilan Lain">Pernah Jual Camilan Lain</option>
                  <option value="Punya Toko / Warung Offline">Punya Toko / Warung Offline</option>
                  <option value="Aktif Jualan Online (Medsos/Marketplace)">Aktif Jualan Online</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">
                Catatan atau Rencana Penjualan (Opsional)
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Misal: Mau jual ke teman kantor dan buka booth di kampus..."
                className="w-full text-xs px-3 py-2 border border-stone-300 rounded-xl bg-white focus:outline-hidden focus:border-emerald-600"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Kirim Pendaftaran via WhatsApp</span>
            </button>
          </form>

          {formSubmitted && (
            <p className="text-center text-xs text-emerald-800 font-semibold mt-3">
              ✓ Formulir telah dialihkan ke WhatsApp Admin Kemitraan Keripik Mayumi!
            </p>
          )}
        </div>

      </div>
    </section>
  );
};
