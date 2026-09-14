import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../types';
import { formatRupiah, generateCartOrderLink } from '../utils/whatsapp';

interface WhatsAppOrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, newQty: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const WhatsAppOrderDrawer: React.FC<WhatsAppOrderDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [customerInfo, setCustomerInfo] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: 'Banda Aceh',
    shippingMethod: 'Kurir Lokal Banda Aceh (Same-day)',
    notes: ''
  });

  if (!isOpen) return null;

  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const isFreeDeliveryEligible =
    customerInfo.city.toLowerCase().includes('banda aceh') && totalItemsCount >= 4;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    const waLink = generateCartOrderLink(items, customerInfo);
    window.open(waLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50/80">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center shadow-xs">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-stone-900">
                  Keranjang Pesanan WhatsApp
                </h3>
                <span className="text-xs text-stone-500">
                  {totalItemsCount} item dipilih
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-stone-500 hover:bg-stone-200 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">
            
            {/* Items List */}
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-sm font-bold text-stone-800">Keranjang Masih Kosong</h4>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Pilih varian rasa favorit Anda di katalog dan klik "+ Keranjang" untuk membuat format pesanan otomatis.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 text-xs font-bold text-emerald-700 hover:underline cursor-pointer"
                >
                  &larr; Lihat Katalog Produk
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-stone-500 pb-1">
                  <span>Daftar Varian</span>
                  <button
                    onClick={onClearCart}
                    className="text-red-600 hover:underline text-[11px] cursor-pointer"
                  >
                    Kosongkan Semua
                  </button>
                </div>

                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200/90 flex gap-3 items-center justify-between"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.variant}
                      className="w-14 h-14 rounded-xl object-cover shrink-0 border border-stone-200"
                    />

                    <div className="flex-1 min-w-0">
                      <h5 className="text-xs font-bold text-stone-900 truncate">
                        {item.product.variant}
                      </h5>
                      <span className="text-[11px] text-stone-500 block">
                        {formatRupiah(item.product.price)} x {item.quantity}
                      </span>
                      <span className="text-xs font-black text-emerald-800">
                        {formatRupiah(item.product.price * item.quantity)}
                      </span>
                    </div>

                    {/* Quantity Adjustment */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <div className="flex items-center border border-stone-300 rounded-lg bg-white overflow-hidden shadow-2xs">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 text-stone-600 hover:bg-stone-100 font-bold text-xs"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-stone-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 text-stone-600 hover:bg-stone-100 font-bold text-xs"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="p-1.5 text-stone-400 hover:text-red-600 transition"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Customer Information Form */}
            {items.length > 0 && (
              <form id="drawer-checkout-form" onSubmit={handleCheckout} className="space-y-3 pt-2">
                <div className="border-t border-stone-200 pt-4">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-stone-800 mb-3">
                    Data Pengiriman Pesanan
                  </h4>

                  <div className="space-y-2.5">
                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 mb-1">
                        Nama Penerima *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Muhammad Ilham"
                        value={customerInfo.fullName}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, fullName: e.target.value })}
                        className="w-full text-xs px-3 py-2 border border-stone-300 rounded-xl bg-white focus:outline-hidden focus:border-emerald-600"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] font-bold text-stone-700 mb-1">
                          No. WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="0812xxxx"
                          value={customerInfo.phone}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                          className="w-full text-xs px-3 py-2 border border-stone-300 rounded-xl bg-white focus:outline-hidden focus:border-emerald-600"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-stone-700 mb-1">
                          Kota Tujuan *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Banda Aceh"
                          value={customerInfo.city}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })}
                          className="w-full text-xs px-3 py-2 border border-stone-300 rounded-xl bg-white focus:outline-hidden focus:border-emerald-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 mb-1">
                        Alamat Lengkap *
                      </label>
                      <textarea
                        rows={2}
                        required
                        placeholder="Nama jalan, nomor rumah, kecamatan, kelurahan..."
                        value={customerInfo.address}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                        className="w-full text-xs px-3 py-2 border border-stone-300 rounded-xl bg-white focus:outline-hidden focus:border-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 mb-1">
                        Metode Pengiriman
                      </label>
                      <select
                        value={customerInfo.shippingMethod}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, shippingMethod: e.target.value })}
                        className="w-full text-xs px-3 py-2 border border-stone-300 rounded-xl bg-white focus:outline-hidden focus:border-emerald-600"
                      >
                        <option value="Kurir Lokal Banda Aceh (Same-day)">Kurir Lokal Banda Aceh (Same-day)</option>
                        <option value="Ambil Sendiri di Toko Banda Aceh">Ambil Sendiri di Toko (Seutui, Banda Aceh)</option>
                        <option value="J&T Express (Luar Kota / Luar Pulau)">J&T Express (Luar Kota)</option>
                        <option value="JNE Reguler / YES">JNE Reguler / YES</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 mb-1">
                        Catatan Khusus (Opsional)
                      </label>
                      <input
                        type="text"
                        placeholder="Misal: Tolong packing kardus tebal untuk oleh-oleh"
                        value={customerInfo.notes}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                        className="w-full text-xs px-3 py-2 border border-stone-300 rounded-xl bg-white focus:outline-hidden focus:border-emerald-600"
                      />
                    </div>
                  </div>
                </div>
              </form>
            )}

          </div>

          {/* Drawer Footer Summary & WhatsApp Submit */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50/90 space-y-3">
              {isFreeDeliveryEligible && (
                <div className="bg-emerald-100 text-emerald-900 px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Selamat! Pesanan Anda berhak Gratis Ongkir area Banda Aceh!</span>
                </div>
              )}

              <div className="flex items-center justify-between text-xs text-stone-600">
                <span>Total Jumlah Barang:</span>
                <span className="font-bold text-stone-900">{totalItemsCount} bungkus</span>
              </div>

              <div className="flex items-center justify-between text-sm sm:text-base font-extrabold text-stone-900 border-t border-stone-200/60 pt-2">
                <span>Total Estimasi:</span>
                <span className="text-xl font-black text-emerald-800">
                  {formatRupiah(subtotal)}
                </span>
              </div>

              <button
                type="submit"
                form="drawer-checkout-form"
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Kirim Pesanan ke WhatsApp Admin</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-stone-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Pesan langsung terkirim rapi ke WhatsApp resmi Mayumi</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
