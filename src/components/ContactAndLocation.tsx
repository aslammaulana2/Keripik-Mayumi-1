import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Clock, MessageCircle, Send, ExternalLink, ShieldCheck } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY, EMAIL_ADDRESS, INSTAGRAM_HANDLE, TIKTOK_HANDLE } from '../utils/whatsapp';

export const ContactAndLocation: React.FC = () => {
  const [quickQuestion, setQuickQuestion] = useState('');
  const [senderName, setSenderName] = useState('');

  const handleSendQuickMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Admin Keripik Mayumi! 👋\nPerkenalkan saya *${senderName || 'Pelanggan'}*.\nSaya ingin bertanya:\n"${quickQuestion}"\n\nTerima kasih!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="kontak" className="py-16 sm:py-24 bg-white border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full">
            Hubungi & Kunjungi Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Lokasi Rumah Produksi & Pemesanan
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Ingin order langsung, ambil di toko (COD Banda Aceh), atau berkonsultasi seputar kemitraan? Tim kami siap melayani dengan ramah.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Quick Chat Form */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-50 hover:bg-emerald-50/50 p-5 rounded-3xl border border-stone-200/80 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <span className="text-xs text-stone-500 font-medium block">WhatsApp Resmi</span>
                <span className="text-sm font-bold text-stone-900 block mt-0.5">{WHATSAPP_DISPLAY}</span>
                <span className="text-[11px] text-emerald-700 font-medium mt-1 inline-flex items-center gap-1">
                  Chat Langsung &rarr;
                </span>
              </a>

              {/* Instagram Card */}
              <a
                href={`https://instagram.com/`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-50 hover:bg-amber-50/50 p-5 rounded-3xl border border-stone-200/80 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-500 text-white flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="text-xs text-stone-500 font-medium block">Instagram Resmi</span>
                <span className="text-sm font-bold text-stone-900 block mt-0.5">{INSTAGRAM_HANDLE}</span>
                <span className="text-[11px] text-rose-700 font-medium mt-1 inline-flex items-center gap-1">
                  Follow & Cek Story &rarr;
                </span>
              </a>

              {/* Operational Hours */}
              <div className="bg-stone-50 p-5 rounded-3xl border border-stone-200/80">
                <div className="w-10 h-10 rounded-xl bg-stone-800 text-amber-300 flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-xs text-stone-500 font-medium block">Jam Operasional Toko</span>
                <span className="text-xs font-bold text-stone-900 block mt-0.5">Senin - Sabtu: 08:00 - 18:00 WIB</span>
                <span className="text-[11px] text-stone-500 block">Minggu: 09:00 - 16:00 WIB</span>
              </div>

              {/* Email Address */}
              <div className="bg-stone-50 p-5 rounded-3xl border border-stone-200/80">
                <div className="w-10 h-10 rounded-xl bg-stone-700 text-white flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xs text-stone-500 font-medium block">Email Bisnis</span>
                <span className="text-xs font-bold text-stone-900 block mt-0.5">{EMAIL_ADDRESS}</span>
                <span className="text-[11px] text-stone-500 block">Untuk kemitraan corporate & retail</span>
              </div>

            </div>

            {/* Quick WhatsApp Inquiry Form */}
            <div className="bg-stone-50 p-6 rounded-3xl border border-stone-200/90 shadow-2xs">
              <h3 className="text-sm font-bold text-stone-900 mb-1 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                Tanya Cepat ke Admin Toko
              </h3>
              <p className="text-xs text-stone-500 mb-4">
                Punya pertanyaan seputar rasa, stok, atau pengiriman hari ini? Ketik pesan Anda di bawah:
              </p>

              <form onSubmit={handleSendQuickMessage} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Nama Anda..."
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white border border-stone-300 rounded-xl focus:outline-hidden focus:border-emerald-600"
                />
                <textarea
                  rows={2}
                  required
                  placeholder="Tuliskan pertanyaan Anda di sini..."
                  value={quickQuestion}
                  onChange={(e) => setQuickQuestion(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white border border-stone-300 rounded-xl focus:outline-hidden focus:border-emerald-600"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Pertanyaan ke WhatsApp</span>
                </button>
              </form>
            </div>

          </div>

          {/* Right Column: Interactive Map & Physical Location Banda Aceh */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="bg-stone-50 p-6 rounded-3xl border border-stone-200/90 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-extrabold uppercase text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded">
                    Rumah Produksi & Outlet
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    Keripik Mayumi Banda Aceh
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 flex items-start gap-1.5">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      Jl. Teuku Umar No. 88, Seutui, Kec. Baiturrahman, Kota Banda Aceh, Aceh 23243
                    </span>
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=Banda+Aceh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-stone-100 text-stone-700 text-xs font-bold px-3 py-2 rounded-xl border border-stone-300 flex items-center gap-1 shrink-0 transition"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Canvas / Visual Mockup */}
              <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden border border-stone-200 shadow-inner bg-emerald-50">
                <iframe
                  title="Peta Lokasi Keripik Mayumi Banda Aceh"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63539.06325997237!2d95.28913915!3d5.54829045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040375cf39f0a5b%3A0xb36ef2713959828e!2sBanda%20Aceh%2C%20Kota%20Banda%20Aceh%2C%20Aceh!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Floating Map Pin info badge */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs p-2.5 rounded-xl shadow-md border border-stone-200 text-xs text-stone-800 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-600 animate-pulse" />
                  <span className="font-semibold text-[11px]">Bisa COD / Ambil Langsung di Lokasi</span>
                </div>
              </div>

              {/* Delivery Service Notes */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-stone-600">
                <div className="bg-white p-3 rounded-xl border border-stone-200/80">
                  <strong className="block text-stone-900 font-bold">Area Banda Aceh & Aceh Besar:</strong>
                  <span className="text-[11px] text-stone-500">Pengiriman instant same-day via kurir lokal / Maxim / GrabExpress.</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-stone-200/80">
                  <strong className="block text-stone-900 font-bold">Luar Kota / Seluruh Indonesia:</strong>
                  <span className="text-[11px] text-stone-500">Kirim reguler via J&T, JNE, SiCepat (Free bubble wrap & kardus tebal).</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
