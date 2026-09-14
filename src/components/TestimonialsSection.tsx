import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  const [filterRole, setFilterRole] = useState<string>('all');

  const filtered = TESTIMONIALS.filter((t) => {
    if (filterRole === 'all') return true;
    if (filterRole === 'mahasiswa') return t.role.toLowerCase().includes('mahasisw');
    if (filterRole === 'pekerja') return t.role.toLowerCase().includes('karyawan') || t.role.toLowerCase().includes('pegawai');
    if (filterRole === 'keluarga') return t.role.toLowerCase().includes('ibu');
    if (filterRole === 'reseller') return t.role.toLowerCase().includes('reseller');
    return true;
  });

  return (
    <section id="testimoni" className="py-16 sm:py-24 bg-stone-50/70 border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full">
            Cerita Pecinta Mayumi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Apa Kata Mereka yang Sudah Mencoba?
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Dari mahasiswa hingga pekerja kantoran dan ibu rumah tangga, inilah alasan kenapa Keripik Mayumi selalu bikin rindu.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center items-center gap-2 overflow-x-auto pb-4 mb-8">
          {[
            { id: 'all', label: 'Semua Ulasan' },
            { id: 'mahasiswa', label: 'Mahasiswa / Pelajar' },
            { id: 'pekerja', label: 'Pekerja Kantoran' },
            { id: 'keluarga', label: 'Ibu Rumah Tangga' },
            { id: 'reseller', label: 'Mitra Reseller' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterRole(tab.id)}
              className={`text-xs font-semibold px-4 py-2 rounded-xl transition cursor-pointer whitespace-nowrap ${
                filterRole === tab.id
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Stars and Favorite Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] bg-amber-50 text-amber-800 font-semibold px-2 py-0.5 rounded-md border border-amber-200/50">
                    {t.favoriteVariant}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 mt-5 border-t border-stone-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-emerald-500 shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-stone-900 truncate flex items-center gap-1">
                    {t.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  </h4>
                  <p className="text-[11px] text-stone-500 truncate">{t.role}</p>
                  <p className="text-[10px] text-emerald-700 font-medium">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
