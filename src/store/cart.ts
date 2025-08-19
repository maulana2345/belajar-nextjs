'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartItem, Order, Product } from '@/lib/types';
import { uid } from '@/lib/utils';

type CartState = {
    items: Record<string, CartItem>; // key: product.id
    discount: number; // absolute IDR
    taxRate: number;  // percentage, e.g. 0.11 for 11%
    add: (p: Product, qty?: number) => void;
    remove: (productId: string) => void;
    inc: (productId: string) => void;
    dec: (productId: string) => void;
    setQty: (productId: string, qty: number) => void;
    clear: () => void;
    setDiscount: (value: number) => void;
    setTaxRate: (value: number) => void;
    totals: () => { subtotal: number; tax: number; total: number };

    // Orders (mock)
    orders: Order[];
    checkout: (payment: {
        method: Order['paymentMethod'];
        paidAmount: number;
    }) => Order;
};

export const useCart = create<CartState>()(
    persist(
        (set, get) => ({
            items: {},
            discount: 0,
            taxRate: 0.11,
            orders: [],

            add: (p, qty = 1) =>
                set((s) => {
                    const curr = s.items[p.id];
                    const nextQty = (curr?.qty || 0) + qty;
                    return { items: { ...s.items, [p.id]: { product: p, qty: nextQty } } };
                }),

            remove: (id) =>
                set((s) => {
                    const clone = { ...s.items };
                    delete clone[id];
                    return { items: clone };
                }),

            inc: (id) => set((s) => {
                const ci = s.items[id];
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (!ci) return {} as any;
                return { items: { ...s.items, [id]: { ...ci, qty: ci.qty + 1 } } };
            }),

            dec: (id) => set((s) => {
                const ci = s.items[id];
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (!ci) return {} as any;
                const newQty = Math.max(1, ci.qty - 1);
                return { items: { ...s.items, [id]: { ...ci, qty: newQty } } };
            }),

            setQty: (id, qty) => set((s) => {
                const ci = s.items[id];
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (!ci) return {} as any;
                const q = Math.max(1, Math.floor(qty || 1));
                return { items: { ...s.items, [id]: { ...ci, qty: q } } };
            }),

            clear: () => set({ items: {}, discount: 0 }),

            setDiscount: (value) => set({ discount: Math.max(0, Math.floor(value || 0)) }),
            setTaxRate: (value) => set({ taxRate: Math.max(0, value) }),

            totals: () => {
                const s = get();
                const subtotal = Object.values(s.items).reduce(
                    (sum, it) => sum + it.product.price * it.qty,
                    0,
                );
                const afterDiscount = Math.max(0, subtotal - s.discount);
                const tax = Math.floor(afterDiscount * s.taxRate);
                const total = afterDiscount + tax;
                return { subtotal, tax, total };
            },

            checkout: ({ method, paidAmount }) => {
                const s = get();
                const { subtotal, tax, total } = s.totals();
                const order: Order = {
                    id: 'ORD-' + uid().toUpperCase(),
                    createdAt: new Date().toISOString(),
                    items: Object.values(s.items),
                    subtotal,
                    discount: s.discount,
                    tax,
                    total,
                    paymentMethod: method,
                    paidAmount,
                    change: Math.max(0, paidAmount - total),
                };
                set({
                    orders: [order, ...s.orders],
                });
                // reset cart
                set({ items: {}, discount: 0 });
                return order;
            },
        }),
        {
            name: 'pos-cart-store',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                items: state.items,
                discount: state.discount,
                taxRate: state.taxRate,
                orders: state.orders,
            }),
        },
    ),
);