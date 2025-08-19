'use client';

import { Product } from '@/lib/types';
import { formatIDR } from '@/lib/money';
import { useCart } from '@/store/cart';

export default function ProductCard({ p }: { p: Product }) {
    const add = useCart((s) => s.add);
    return (
        <div className="group rounded-2xl border p-3 hover:shadow-md transition bg-white">
            <div className="aspect-[4/3] w-full rounded-xl bg-slate-100 mb-3 grid place-items-center text-slate-400">
                {/* Tempatkan gambar produk di sini jika ada */}
                {p.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.image} alt={p.name} className="object-cover w-full h-full rounded-xl" />
                ) : (
                    <span className="text-sm">No Image</span>
                )}
            </div>
            <div className="flex items-start justify-between gap-2">
                <div>
                    <div className="font-medium leading-tight">{p.name}</div>
                    <div className="text-xs text-slate-500 mt-1">{p.sku} • Stock {p.stock}</div>
                    <div className="font-semibold mt-2">{formatIDR(p.price)}</div>
                </div>
                
            </div>
            <button
                onClick={() => add(p, 1)}
                className="mt-3 w-full rounded-xl bg-slate-900 text-white py-2 hover:bg-slate-800"
            >
                Tambah
            </button>
        </div>
    );
}