export type Product = {
    id: string;
    name: string;
    sku?: string;
    price: number; // in IDR
    stock: number;
    image?: string;
    category?: string;
};

export type CartItem = {
    product: Product;
    qty: number;
    note?: string;
};

export type PaymentMethod = "cash" | "qris" | "card" | "other";

export type Order = {
    id: string;
    createdAt: string; // ISO
    items: CartItem[];
    subtotal: number;
    discount: number; // absolute value (IDR)
    tax: number; // absolute value (IDR)
    total: number;
    paymentMethod: PaymentMethod;
    paidAmount: number;
    change: number;
};
