import { CartItem, Product, ResellerFormData } from '../types';

export const WHATSAPP_NUMBER = '6285356078836'; // Official WhatsApp Keripik Mayumi
export const WHATSAPP_DISPLAY = '+62 853-5607-8836';
export const EMAIL_ADDRESS = 'kontak@keripikmayumi.com';
export const INSTAGRAM_HANDLE = '@keripikmayumi.id';
export const TIKTOK_HANDLE = '@keripikmayumi';

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

export function generateSingleProductOrderLink(
  product: Product,
  quantity: number = 1,
  customerCity: string = 'Banda Aceh'
): string {
  const totalPrice = product.price * quantity;
  const message = `Halo Keripik Mayumi! 🍿\nSaya ingin memesan keripik:\n- *${product.name} (${product.variant})*\n- Jumlah: *${quantity} bungkus*\n- Estimasi Harga: *${formatRupiah(totalPrice)}*\n- Tujuan Pengiriman: *${customerCity}*\n\nMohon info ketersediaan stok dan total ongkir ya. Terima kasih!`;
  
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function generateCartOrderLink(
  items: CartItem[],
  customerInfo: {
    fullName: string;
    phone: string;
    address: string;
    city: string;
    shippingMethod: string;
    notes?: string;
  }
): string {
  const itemsText = items
    .map(
      (item, idx) =>
        `${idx + 1}. ${item.product.variant} (${item.product.weight}) x ${item.quantity} = ${formatRupiah(
          item.product.price * item.quantity
        )}`
    )
    .join('\n');

  const grandTotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const message = `Halo Keripik Mayumi! 🍿\nSaya ingin membuat pesanan melalui website:\n\n*DAFTAR PESANAN:*\n${itemsText}\n\n*Total Produk:* *${formatRupiah(grandTotal)}*\n\n*DATA PENGIRIMAN:*\n- Nama: ${customerInfo.fullName || '-'}\n- No. WhatsApp: ${customerInfo.phone || '-'}\n- Kota / Tujuan: ${customerInfo.city || 'Banda Aceh'}\n- Alamat Lengkap: ${customerInfo.address || '-'}\n- Metode Pengiriman: ${customerInfo.shippingMethod || 'Kurir Lokal Banda Aceh'}\n${customerInfo.notes ? `- Catatan: ${customerInfo.notes}\n` : ''}\nMohon konfirmasi ketersediaan stok dan rekening pembayaran ya. Terima kasih!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function generateResellerRegistrationLink(formData: ResellerFormData): string {
  const message = `Halo Tim Kemitraan Keripik Mayumi! 🤝\nSaya tertarik mendaftar program Reseller / Dropshipper:\n\n*DATA PENDAFTAR:*\n- Nama Lengkap: *${formData.fullName}*\n- No. WhatsApp: *${formData.whatsapp}*\n- Kota / Provinsi: *${formData.city}, ${formData.province}*\n- Paket yang Diminati: *${formData.selectedPackage}*\n- Pengalaman Jualan: *${formData.experience}*\n${formData.notes ? `- Catatan / Rencana: ${formData.notes}\n` : ''}\nMohon panduan langkah pendaftaran dan pricelist reseller lengkapnya. Terima kasih!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
