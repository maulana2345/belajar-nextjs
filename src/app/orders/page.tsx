'use client';

import { useCart } from '@/store/cart';
import { formatIDR } from '@/lib/money';
import EmptyState from '@/components/EmptyState';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function OrdersPage() {
    const orders = useCart((s) => s.orders);
    const router = useRouter();

    return (
        <main className="mx-auto max-w-5xl p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
                <button
                    onClick={() => router.back()}
                    className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-slate-50"
                >
                    <ArrowLeft size={18} />
                    Kembali
                </button>
                <h1 className="text-xl font-semibold">Riwayat Order</h1>
            </div>

            {orders.length === 0 ? (
                <EmptyState title="Belum ada order" subtitle="Transaksi yang selesai akan muncul di sini." />
            ) : (
                <div className="overflow-auto rounded-xl border bg-white">
                    <table className="min-w-full text-sm">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-3 py-2 text-left">Order ID</th>
                                <th className="px-3 py-2 text-left">Tanggal</th>
                                <th className="px-3 py-2 text-right">Subtotal</th>
                                <th className="px-3 py-2 text-right">Diskon</th>
                                <th className="px-3 py-2 text-right">Pajak</th>
                                <th className="px-3 py-2 text-right">Total</th>
                                <th className="px-3 py-2 text-left">Metode</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((o) => (
                                <tr key={o.id} className="border-t">
                                    <td className="px-3 py-2 font-medium">{o.id}</td>
                                    <td className="px-3 py-2">{new Date(o.createdAt).toLocaleString('id-ID')}</td>
                                    <td className="px-3 py-2 text-right">{formatIDR(o.subtotal)}</td>
                                    <td className="px-3 py-2 text-right">{formatIDR(o.discount)}</td>
                                    <td className="px-3 py-2 text-right">{formatIDR(o.tax)}</td>
                                    <td className="px-3 py-2 text-right font-semibold">{formatIDR(o.total)}</td>
                                    <td className="px-3 py-2">{o.paymentMethod.toUpperCase()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </main>
    );
}