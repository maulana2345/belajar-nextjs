// Server Component
import TopBar from '@/components/TopBar';
import CategoryTabs from '@/components/CategoryTabs';
import ProductGrid from '@/components/ProductGrid';
import ClientOnly from '@/components/ClientOnly';
import CartDrawer from '@/components/CartDrawer';

export default function Page() {
  return (
    <main>
      <TopBar />

      {/* Category bar berada di bawah TopBar, full-width */}
      <div className="border-b border-slate-200 bg-slate-100">
        <div className="mx-auto max-w-7xl h-8 px-4">
          <div className="h-full flex items-center justify-center overflow-x-auto no-scrollbar">
            <CategoryTabs />
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl p-4 sm:p-6">
        <ProductGrid />
      </section>

      {/* Cart hanya dirender di client untuk hindari hydration mismatch */}
      <ClientOnly>
        <CartDrawer />
      </ClientOnly>
    </main>
  );
}