'use client';

import { useProducts } from '@/store/products';
import ProductCard from './ProductCard';

export default function ProductGrid() {
    const { products, category, query } = useProducts();

    const filtered = products.filter((p) => {
        const byCat = category === 'All' || p.category === category;
        const q = query.trim().toLowerCase();
        const byQuery = !q ||
            p.name.toLowerCase().includes(q) ||
            (p.sku || '').toLowerCase().includes(q);
        return byCat && byQuery;
    });

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {filtered.map((p) => (
                <ProductCard key={p.id} p={p} />
            ))}
        </div>
    );
}