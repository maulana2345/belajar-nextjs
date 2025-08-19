export default function EmptyState({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
        <div className="rounded-2xl border bg-white p-8 text-center text-slate-500">
            <div className="text-lg font-medium text-slate-700">{title}</div>
            {subtitle && <div className="text-sm mt-1">{subtitle}</div>}
        </div>
    );
}