import { Product } from '@/lib/types';

export const categories = [
    'All',
    'Beverages',
    'Snacks',
    'Bakery',
    'Household',
] as const;

export const demoProducts: Product[] = [
    { id: 'P-001', name: 'Kopi Latte 250ml', sku: 'LAT250', price: 22000, stock: 50, category: 'Beverages', image: 'https://cdn1-production-images-kly.akamaized.net/LuNWezKvQzrOW-d2SbdVJqtLSmA=/0x3865:4480x6390/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2968264/original/039234400_1573794931-nathan-dumlao-zUNs99PGDg0-unsplash.jpg'},
    { id: 'P-002', name: 'Teh Botol 350ml', sku: 'TEH350', price: 8000, stock: 120, category: 'Beverages', image: 'https://cdn1-production-images-kly.akamaized.net/LuNWezKvQzrOW-d2SbdVJqtLSmA=/0x3865:4480x6390/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2968264/original/039234400_1573794931-nathan-dumlao-zUNs99PGDg0-unsplash.jpg' },
    { id: 'P-003', name: 'Air Mineral 600ml', sku: 'AIR600', price: 6000, stock: 200, category: 'Beverages',image: 'https://cdn1-production-images-kly.akamaized.net/LuNWezKvQzrOW-d2SbdVJqtLSmA=/0x3865:4480x6390/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2968264/original/039234400_1573794931-nathan-dumlao-zUNs99PGDg0-unsplash.jpg' },
    { id: 'P-004', name: 'Roti Coklat', sku: 'ROTCHOC', price: 12000, stock: 30, category: 'Bakery', image: 'https://cdn1-production-images-kly.akamaized.net/LuNWezKvQzrOW-d2SbdVJqtLSmA=/0x3865:4480x6390/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2968264/original/039234400_1573794931-nathan-dumlao-zUNs99PGDg0-unsplash.jpg' },
    { id: 'P-005', name: 'Donat Keju', sku: 'DNKEJU', price: 10000, stock: 24, category: 'Bakery', image: 'https://cdn1-production-images-kly.akamaized.net/LuNWezKvQzrOW-d2SbdVJqtLSmA=/0x3865:4480x6390/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2968264/original/039234400_1573794931-nathan-dumlao-zUNs99PGDg0-unsplash.jpg' },
    { id: 'P-006', name: 'Keripik Singkong 70g', sku: 'KRPS70', price: 9000, stock: 60, category: 'Snacks', image: 'https://cdn1-production-images-kly.akamaized.net/LuNWezKvQzrOW-d2SbdVJqtLSmA=/0x3865:4480x6390/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2968264/original/039234400_1573794931-nathan-dumlao-zUNs99PGDg0-unsplash.jpg'},
    { id: 'P-007', name: 'Kacang Garam 80g', sku: 'KCG80', price: 7000, stock: 50, category: 'Snacks', image: 'https://cdn1-production-images-kly.akamaized.net/LuNWezKvQzrOW-d2SbdVJqtLSmA=/0x3865:4480x6390/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2968264/original/039234400_1573794931-nathan-dumlao-zUNs99PGDg0-unsplash.jpg' },
    { id: 'P-008', name: 'Tisu Wajah 100s', sku: 'TSW100', price: 15000, stock: 40, category: 'Household', image: 'https://cdn1-production-images-kly.akamaized.net/LuNWezKvQzrOW-d2SbdVJqtLSmA=/0x3865:4480x6390/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2968264/original/039234400_1573794931-nathan-dumlao-zUNs99PGDg0-unsplash.jpg' },
    { id: 'P-009', name: 'Sabun Cuci Piring 400ml', sku: 'SBN400', price: 14000, stock: 35, category: 'Household', image: 'https://cdn1-production-images-kly.akamaized.net/LuNWezKvQzrOW-d2SbdVJqtLSmA=/0x3865:4480x6390/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2968264/original/039234400_1573794931-nathan-dumlao-zUNs99PGDg0-unsplash.jpg' },
    { id: 'P-010', name: 'Shampoo 100ml', sku: 'SHM100', price: 18000, stock: 25, category: 'Household', image: 'https://cdn1-production-images-kly.akamaized.net/LuNWezKvQzrOW-d2SbdVJqtLSmA=/0x3865:4480x6390/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2968264/original/039234400_1573794931-nathan-dumlao-zUNs99PGDg0-unsplash.jpg' },
];