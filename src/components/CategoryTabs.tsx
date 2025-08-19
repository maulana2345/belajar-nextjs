"use client";

import { useProducts } from "@/store/products";
import { categories } from "@/data/products";
import { cn } from "@/lib/utils";

export default function CategoryTabs() {
    const { category, setCategory } = useProducts();

    return (
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {categories.map((c) => (
                <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={cn(
                        'shrink-0 inline-flex items-center justify-center rounded-md h-7 px-3 text-base leading-none',
                        category === c ? "bg-slate-100 text-orange-400" : "hover:bg-slate-200",
                    )}
                >
                    {c}
                </button>
            ))}
        </div>
    );
}
