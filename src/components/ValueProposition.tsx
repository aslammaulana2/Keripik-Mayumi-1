import React from 'react';
import { ShieldCheck, Leaf, Sparkles, PackageCheck, Award, HeartHandshake } from 'lucide-react';

export const ValueProposition: React.FC = () => {
  const values = [
    {
      icon: Sparkles,
      title: 'Kriuk Maksimal & Tidak Berminyak',
      description:
        'Melalui proses penirisan minyak berteknologi spinner higienis, keripik menjadi super renyah tanpa meninggalkan rasa gatal atau serak di tenggorokan.'
    },
    {
      icon: Leaf,
      title: 'Daun Jeruk & Cabai Asli',
      description:
        'Bukan perisa sintetis! Kami menumbuk cabai rawit asli Aceh dan mencampurkan irisan daun jeruk purut segar yang wangi semerbak saat kemasan dibuka.'
    },
    {
      icon: PackageCheck,
      title: 'Kemasan Ziplock Foil Kedap Udara',
      description:
        'Menggunakan pouch aluminium foil food grade dengan klip ziplock rapat. Bisa disimpan kembali dan kerenyahan terjaga awet hingga 6 bulan.'
    },
    {
      icon: HeartHandshake,
      title: 'Berdayakan Petani Lokal Aceh',
      description:
        'Bahan baku pisang kualitas super dipanen langsung dari kebun petani lokal di Banda Aceh dan Aceh Besar untuk mendukung ekonomi UMKM daerah.'
    }
  ];

  return (
    <section id="keunggulan" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full">
            Kualitas Tanpa Kompromi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Kenapa Keripik Mayumi Jadi Favorit?
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Kombinasi bahan lokal pilihan dan resep bumbu otentik menghasilkan kerenyahan yang bikin Anda tak bisa berhenti mengunyah.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-stone-50/80 rounded-3xl p-6 sm:p-7 border border-stone-200/80 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-amber-300 flex items-center justify-center mb-5 shadow-xs group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-emerald-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Banner Garansi Kerenyahan */}
        <div className="mt-12 bg-gradient-to-r from-emerald-800 to-emerald-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center shrink-0 mx-auto md:mx-0 shadow-xs">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold">Garansi Kerenyahan & Rasa</h4>
              <p className="text-xs sm:text-sm text-emerald-200 mt-1 max-w-xl">
                Paket sampai dalam kondisi remuk atau tidak renyah? Hubungi admin WhatsApp kami untuk penggantian barang atau kompensasi kilat!
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <span className="inline-block bg-white text-emerald-950 text-xs font-black px-4 py-2.5 rounded-xl shadow-xs">
              P-IRT No. 2151171010452-28
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
