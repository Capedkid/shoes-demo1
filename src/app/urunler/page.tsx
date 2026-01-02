"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { Filter, ChevronDown } from "lucide-react";

const allProducts = (isTurkish: boolean) => [
    { id: 1, name: isTurkish ? "AeroGlide Fütürist" : "AeroGlide Futurist", category: isTurkish ? "Koşu" : "Running", price: "249", image: "/hero.png" },
    { id: 2, name: isTurkish ? "Urban X-Lüks" : "Urban X-Luxe", category: isTurkish ? "Sokak Modası" : "Streetwear", price: "189", image: "/sneaker-urban.png" },
    { id: 3, name: isTurkish ? "Klasik Maun" : "Classic Mahogany", category: isTurkish ? "Resmi" : "Formal", price: "329", image: "/classic-leather.png" },
    { id: 4, name: isTurkish ? "Phantom Siyah" : "Phantom Black", category: isTurkish ? "Koşu" : "Running", price: "219", image: "/hero.png" },
    { id: 5, name: isTurkish ? "Neon Pulse" : "Neon Pulse", category: isTurkish ? "Sokak Modası" : "Streetwear", price: "159", image: "/sneaker-urban.png" },
    { id: 6, name: isTurkish ? "Gece Mavisi" : "Midnight Blue", category: isTurkish ? "Resmi" : "Formal", price: "299", image: "/classic-leather.png" },
];

export default function ProductsPage() {
    const [isTurkish, setIsTurkish] = useState(true);

    return (
        <main className="min-h-screen bg-black">
            <Header isTurkish={isTurkish} setIsTurkish={setIsTurkish} />

            <div className="pt-24 md:pt-32 pb-20 px-6 max-w-[1440px] mx-auto">
                {/* Page Header */}
                <div className="mb-10 md:mb-12">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-gradient mb-6 uppercase">
                        {isTurkish ? "TÜM KOLEKSİYON" : "ALL COLLECTIONS"}
                    </h1>
                    <p className="text-white/40 max-w-xl text-base md:text-lg">
                        {isTurkish
                            ? "Her adımda mükemmellik için tasarlanmış, teknoloji ve zarafetin buluştuğu eşsiz parçalarımızı keşfedin."
                            : "Discover our unique pieces where technology and elegance meet, designed for excellence in every step."}
                    </p>
                </div>

                {/* Filters Bar */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-y border-white/5 mb-12 md:mb-16 gap-6">
                    <div className="flex gap-8">
                        <button type="button" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/60 hover:text-white transition-colors">
                            <Filter size={14} />
                            {isTurkish ? "FİLTRELE" : "FILTER"}
                        </button>
                        <button type="button" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/60 hover:text-white transition-colors cursor-pointer">
                            {isTurkish ? "SIRALA" : "SORT BY"}
                            <ChevronDown size={14} />
                        </button>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-white/20">
                        {allProducts(isTurkish).length} {isTurkish ? "ÜRÜN LİSTELENİYOR" : "PRODUCTS LISTED"}
                    </span>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
                    {allProducts(isTurkish).map((product, index) => (
                        <ProductCard
                            key={product.id}
                            {...product}
                            index={index}
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
