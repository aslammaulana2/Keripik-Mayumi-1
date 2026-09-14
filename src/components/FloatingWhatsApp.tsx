import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showBubble, setShowBubble] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-none">
      {/* Speech Bubble Prompt */}
      {showBubble && (
        <div className="pointer-events-auto bg-white rounded-2xl p-3.5 shadow-xl border border-stone-200 text-stone-800 max-w-[240px] text-xs animate-in fade-in slide-in-from-bottom-2 duration-300 relative">
          <button
            onClick={() => setShowBubble(false)}
            aria-label="Tutup pesan"
            className="absolute top-2 right-2 text-stone-400 hover:text-stone-600 p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1.5 font-bold text-emerald-800 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Admin Mayumi Online</span>
          </div>
          <p className="text-stone-600 text-[11px] leading-relaxed">
            Butuh bantuan pemesanan atau info reseller? Chat kami di WhatsApp yuk! 🍿
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo Admin Keripik Mayumi! Saya ingin pesan keripik...')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Admin Keripik Mayumi"
        className="pointer-events-auto w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 group"
      >
        <MessageCircle className="w-7 h-7 fill-white group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
};
