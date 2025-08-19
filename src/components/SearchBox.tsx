'use client';

import { useProducts } from '@/store/products';

export default function SearchBox() {
  const { query, setQuery } = useProducts();
  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Cari produk"
      className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
    />
  );
}