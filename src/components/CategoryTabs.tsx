"use client";

import { useProducts } from "@/store/products";
import { categories } from "@/data/products";
// import { cn } from "@/lib/utils";

export default function CategoryTabs() {
    const { category, setCategory } = useProducts();

    return (
        <label className="inline-flex items-center gap-2">
            <span className="hidden sm:inline text-sm text-slate-500">Kategori</span>
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="h-8 rounded-lg border px-3 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
            >
                {categories.map((c) => (
                    <option key={c} value={c}>
                        {c}
                    </option>
                ))}
            </select>
        </label>
    );
}
