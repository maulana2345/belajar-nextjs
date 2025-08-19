'use client';

import { formatIDR } from '@/lib/money';
import { useCart } from '@/store/cart';

export default function OrderSummary() {
    const { discount, setDiscount, totals, taxRate } = useCart();
    const { subtotal, tax, total } = totals();

    return (
        <div className="space-y-2">
            <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>{formatIDR(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
                <label htmlFor="discount">Diskon</label>
                <div className="flex items-center gap-2">
                    <span className="text-slate-500 text-xs">IDR</span>
                    <input
                        id="discount"
                        type="number"
                        value={discount}
                        onChange={(e) => setDiscount(parseInt(e.target.value || '0', 10))}
                        className="w-28 border rounded-lg px-2 py-1 text-right"
                    />
                </div>
            </div>
            <div className="flex justify-between text-sm">
                <span>Pajak ({Math.round(taxRate * 100)}%)</span>
                <span>{formatIDR(tax)}</span>
            </div>
            <div className="flex justify-between text-base font-semibold border-t pt-2">
                <span>Total</span>
                <span>{formatIDR(total)}</span>
            </div>
        </div>
    );
}