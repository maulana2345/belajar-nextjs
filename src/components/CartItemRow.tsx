'use client';

import { formatIDR } from '@/lib/money';
import { useCart } from '@/store/cart';

export default function CartItemRow({ id }: { id: string }) {
    const { items, inc, dec, remove, setQty } = useCart();
    const it = items[id];
    if (!it) return null;
    const line = it.product.price * it.qty;

    return (
        <div className="flex items-center justify-between gap-2 py-2">
            <div className="min-w-0">
                <div className="truncate font-medium">{it.product.name}</div>
                <div className="text-xs text-slate-500">{it.product.sku}</div>
            </div>

            <div className="flex items-center gap-2">
                <button onClick={() => dec(it.product.id)} className="px-2 py-1 rounded-lg border">-</button>
                <input
                    value={it.qty}
                    onChange={(e) => setQty(it.product.id, parseInt(e.target.value || '1', 10))}
                    className="w-12 border rounded-lg text-center py-1"
                    type="number"
                    min={1}
                />
                <button onClick={() => inc(it.product.id)} className="px-2 py-1 rounded-lg border">+</button>
            </div>

            <div className="w-28 text-right font-semibold">{formatIDR(line)}</div>
            <button onClick={() => remove(it.product.id)} className="text-slate-400 hover:text-red-600">✕</button>
        </div>
    );
}