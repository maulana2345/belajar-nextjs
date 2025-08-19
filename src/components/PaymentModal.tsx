'use client';

import { useEffect, useState } from 'react';
import { useCart } from '@/store/cart';
import { formatIDR } from '@/lib/money';

export default function PaymentModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    const { totals, checkout } = useCart();
    const { total } = totals();
    const [method, setMethod] = useState<'cash' | 'qris' | 'card' | 'other'>('cash');
    const [paid, setPaid] = useState<number>(total);

    // Sinkronkan jumlah bayar jika total berubah
    useEffect(() => setPaid(total), [total]);

    if (!open) return null;

    const handlePay = () => {
        const order = checkout({ method, paidAmount: paid });
        alert(`Order ${order.id} berhasil! Kembalian: ${formatIDR(order.change)}`);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/40 grid place-items-center p-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-4 sm:p-5 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold">Pembayaran</h3>
                    <button onClick={onClose} className="text-slate-500">✕</button>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between">
                        <span>Total yang harus dibayar</span>
                        <span className="font-semibold">{formatIDR(total)}</span>
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm">Metode</label>
                        <select
                            value={method}
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            onChange={(e) => setMethod(e.target.value as any)}
                            className="w-full rounded-xl border px-3 py-2"
                        >
                            <option value="cash">Cash</option>
                            <option value="qris">QRIS</option>
                            <option value="card">Kartu</option>
                            <option value="other">Lainnya</option>
                        </select>
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm">Jumlah dibayar</label>
                        <input
                            type="number"
                            value={paid}
                            onChange={(e) => setPaid(parseInt(e.target.value || '0', 10))}
                            className="w-full rounded-xl border px-3 py-2 text-right"
                            min={0}
                        />
                    </div>
                    <button
                        onClick={handlePay}
                        className="w-full rounded-xl bg-slate-900 text-white py-2.5 hover:bg-slate-800"
                    >
                        Bayar & Selesaikan
                    </button>
                </div>
            </div>
        </div>
    );
}