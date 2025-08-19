'use client';

import { useState } from 'react';
import { useUi } from '@/store/ui';
import { useCart } from '@/store/cart';
import CartItemRow from './CartItemRow';
import OrderSummary from './OrderSummary';
import PaymentModal from './PaymentModal';

export default function CartDrawer() {
    const { cartOpen, setCartOpen } = useUi();
    const { items, clear } = useCart();
    const [payOpen, setPayOpen] = useState(false);

    const ids = Object.keys(items);

    return (
        <>
            {/* Backdrop */}
            {cartOpen && (
                <div
                    onClick={() => setCartOpen(false)}
                    className="fixed inset-0 z-40 bg-black/30"
                />
            )}

            {/* Drawer */}
            <aside
                className={`fixed right-0 top-0 z-50 h-full w-[92%] max-w-md bg-white shadow-xl transition-transform ${cartOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="h-full flex flex-col">
                    <div className="flex items-center justify-between border-b p-4">
                        <h3 className="text-lg font-semibold">Keranjang</h3>
                        <div className="flex items-center gap-2">
                            <button onClick={clear} className="btn border-red-700 rounded-lg border px-3 py-1.5 hover:bg-red-600 hover:text-white">Bersihkan</button>
                            <button onClick={() => setCartOpen(false)} className="text-slate-500">✕</button>
                        </div>
                    </div>

                    {/* List items */}
                    <div className="flex-1 overflow-auto p-4">
                        {ids.length === 0 ? (
                            <div className="text-center text-slate-400 mt-12">Keranjang kosong</div>
                        ) : (
                            ids.map((id) => <CartItemRow key={id} id={id} />)
                        )}
                    </div>

                    {/* Sticky footer: ringkasan + tombol Bayar */}
                    <div className="border-t p-4 space-y-3 bg-white">
                        <OrderSummary />
                        <button
                            disabled={ids.length === 0}
                            onClick={() => setPayOpen(true)}
                            className="w-full rounded-xl bg-slate-900 text-white py-2.5 disabled:opacity-50"
                        >
                            Bayar
                        </button>
                    </div>
                </div>
            </aside>

            <PaymentModal open={payOpen} onClose={() => setPayOpen(false)} />
        </>
    );
}