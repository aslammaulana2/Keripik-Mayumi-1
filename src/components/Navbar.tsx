import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, MessageCircle, Flame } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../utils/whatsapp';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Katalog Produk', href: '#produk' },
    { label: 'Keunggulan', href: '#keunggulan' },
    { label: 'Tentang Kami', href: '#tentang-kami' },
    { label: 'Kemitraan Reseller', href: '#reseller' },
    { label: 'Kontak & Lokasi', href: '#kontak' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-stone-200'
          : 'bg-[#FAF8F5]/90 backdrop-blur-sm py-4 border-b border-stone-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#beranda" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-200">
            <Flame className="w-5 h-5 text-amber-300 fill-amber-300" />
          </div>
          <div>
            <span className="block text-xl font-extrabold tracking-tight text-emerald-950 leading-none">
              Keripik <span className="text-amber-600">Mayumi</span>
            </span>
            <span className="text-[11px] font-medium tracking-wide text-emerald-700 uppercase">
              Khas Banda Aceh
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'text-emerald-800 bg-emerald-50 font-semibold'
                    : 'text-stone-600 hover:text-emerald-700 hover:bg-stone-100/70'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Cart / WhatsApp Order Drawer Button */}
          <button
            onClick={onOpenCart}
            id="navbar-cart-button"
            className="relative p-2.5 rounded-xl text-stone-700 hover:text-emerald-800 hover:bg-emerald-50/80 transition-colors cursor-pointer border border-stone-200/80"
            title="Daftar Pesanan"
            aria-label="Keranjang Pesanan"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-amber-500 text-stone-950 text-xs font-bold rounded-full flex items-center justify-center shadow-sm animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Quick WhatsApp CTA Button */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo Keripik Mayumi, saya ingin tanya ketersediaan stok keripik...')}`}
            target="_blank"
            rel="noopener noreferrer"
            id="navbar-whatsapp-cta"
            className="hidden sm:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm hover:shadow transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 text-white fill-current" />
            <span>Chat WhatsApp</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="navbar-mobile-toggle"
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-100 transition cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-stone-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCart();
              }}
              className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-emerald-900 bg-emerald-50 rounded-lg"
            >
              <span className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-emerald-700" />
                Keranjang Pesanan
              </span>
              <span className="bg-emerald-700 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                {cartCount} item
              </span>
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo Keripik Mayumi! Saya ingin pesan keripik...')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-2.5 rounded-xl transition"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Chat WhatsApp Admin
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
