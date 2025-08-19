'use client';

import { create } from 'zustand';
import { Product } from '@/lib/types';
import { demoProducts } from '@/data/products';

type ProductState = {
    products: Product[];
    category: string;
    query: string;
    setCategory: (c: string) => void;
    setQuery: (q: string) => void;
    setProducts: (p: Product[]) => void; // can be used after fetching from backend
};

export const useProducts = create<ProductState>((set) => ({
    products: demoProducts,
    category: 'All',
    query: '',
    setCategory: (category) => set({ category }),
    setQuery: (query) => set({ query }),
    setProducts: (products) => set({ products }),
}));