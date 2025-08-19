'use client';

import { ShoppingCart, History } from 'lucide-react';
import Link from 'next/link';
import { useUi } from '@/store/ui';
import { useCart } from '@/store/cart';
import SearchBox from '@/components/SearchBox';

export default function TopBar() {
    const { setCartOpen } = useUi();
    const count = Object.values(useCart((s) => s.items)).reduce((a, b) => a + b.qty, 0);

    return (
        <div className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
            <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
                {/* Logo / Title */}
                <div className="font-semibold text-lg shrink-0">🧾 POS Dashboard</div>

                {/* Search — menempel di TopBar di samping logo */}
                <div className="flex-1 flex justify-start">
                    <div className="max-w-[520px] hidden sm:block">
                        <SearchBox />
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0">
                    <Link
                        href="/orders"
                        className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-slate-50"
                    >
                        <History size={18} />
                        <span className="hidden md:inline">Orders</span>
                    </Link>
                    <button
                        onClick={() => setCartOpen(true)}
                        className="relative inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-3 py-2 hover:bg-slate-800"
                    >
                        <ShoppingCart size={18} />
                        <span className="hidden md:inline">Cart</span>
                        {count > 0 && (
                            <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 grid place-items-center rounded-full bg-orange-400 text-white text-xs font-semibold">
                                {count}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}