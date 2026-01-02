"use client";

import { useState, useMemo } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { Filter, ChevronDown, X, SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<string>("newest");
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const categories = useMemo(() => {
        const raw = isTurkish ? ["Koşu", "Sokak Modası", "Resmi"] : ["Running", "Streetwear", "Formal"];
        return raw;
    }, [isTurkish]);

    const filteredProducts = useMemo(() => {
        let result = allProducts(isTurkish);

        if (selectedCategory) {
            result = result.filter(p => p.category === selectedCategory);
        }

        if (sortBy === "price-low") {
            result = [...result].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        } else if (sortBy === "price-high") {
            result = [...result].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        }

        return result;
    }, [isTurkish, selectedCategory, sortBy]);

    const t = {
        title: isTurkish ? "TÜM KOLEKSİYON" : "ALL COLLECTIONS",
        desc: isTurkish
            ? "Her adımda mükemmellik için tasarlanmış, teknoloji ve zarafetin buluştuğu eşsiz parçalarımızı keşfedin."
            : "Discover our unique pieces where technology and elegance meet, designed for excellence in every step.",
        filter: isTurkish ? "FİLTRELE" : "FILTER",
        sort: isTurkish ? "SIRALA" : "SORT BY",
        listed: isTurkish ? "ÜRÜN LİSTELENİYOR" : "PRODUCTS LISTED",
        all: isTurkish ? "Tümü" : "All",
        newest: isTurkish ? "En Yeniler" : "Newest",
        lowToHigh: isTurkish ? "Fiyat: Düşükten Yükseğe" : "Price: Low to High",
        highToLow: isTurkish ? "Fiyat: Yüksekten Düşüğe" : "Price: High to Low",
        apply: isTurkish ? "UYGULA" : "APPLY",
        clear: isTurkish ? "TEMİZLE" : "CLEAR",
    };

    return (
        <main className="min-h-screen bg-black">
            <Header isTurkish={isTurkish} setIsTurkish={setIsTurkish} />

            <div className="pt-24 md:pt-40 pb-20 px-6 max-w-[1440px] mx-auto">
                {/* Page Header */}
                <div className="mb-14">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-4xl sm:text-5xl md:text-8xl font-display font-bold text-gradient mb-8 uppercase italic tracking-tighter"
                    >
                        {t.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/40 max-w-xl text-base md:text-lg uppercase tracking-widest text-[10px] md:text-xs font-bold leading-relaxed"
                    >
                        {t.desc}
                    </motion.p>
                </div>

                {/* Filters Bar */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-y border-white/5 mb-16 gap-6 sticky top-20 bg-black/80 backdrop-blur-xl z-30 px-2 -mx-2">
                    <div className="flex gap-10 items-center">
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-[0.2em] text-white hover:text-silver transition-all"
                        >
                            <SlidersHorizontal size={14} />
                            {t.filter}
                            {selectedCategory && <span className="w-1.5 h-1.5 bg-silver rounded-full ml-1" />}
                        </button>

                        <div className="hidden md:flex gap-6 items-center border-l border-white/10 pl-10">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                                    className={`text-[9px] uppercase font-bold tracking-[0.2em] transition-all hover:text-white ${selectedCategory === cat ? 'text-white translate-y-[-2px]' : 'text-white/30'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-10 w-full md:w-auto justify-between md:justify-end">
                        <div className="relative group">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-transparent text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 hover:text-white transition-all appearance-none pr-8 cursor-pointer outline-none"
                            >
                                <option value="newest" className="bg-[#0a0a0a]">{t.newest}</option>
                                <option value="price-low" className="bg-[#0a0a0a]">{t.lowToHigh}</option>
                                <option value="price-high" className="bg-[#0a0a0a]">{t.highToLow}</option>
                            </select>
                            <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/40" />
                        </div>

                        <span className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-bold">
                            {filteredProducts.length} {t.listed}
                        </span>
                    </div>
                </div>

                {/* Active Filters Display */}
                <AnimatePresence>
                    {selectedCategory && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex gap-4 mb-10"
                        >
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className="flex items-center gap-2 bg-white/[0.05] border border-white/10 px-4 py-2 rounded-full text-[9px] font-bold text-white uppercase tracking-widest hover:border-white/30 transition-all"
                            >
                                {selectedCategory} <X size={10} />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-24">
                    {filteredProducts.map((product, index) => (
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
