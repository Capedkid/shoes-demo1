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
    { id: 3, name: isTurkish ? "Klasik Maun" : "Classic Mahogany", category: isTurkish ? "Klasik" : "Formal", price: "329", image: "/classic-leather.png" },
    { id: 4, name: isTurkish ? "Phantom Siyah" : "Phantom Black", category: isTurkish ? "Koşu" : "Running", price: "219", image: "/hero.png" },
    { id: 5, name: isTurkish ? "Neon Pulse" : "Neon Pulse", category: isTurkish ? "Sokak Modası" : "Streetwear", price: "159", image: "/sneaker-urban.png" },
    { id: 6, name: isTurkish ? "Gece Mavisi" : "Midnight Blue", category: isTurkish ? "Klasik" : "Formal", price: "299", image: "/classic-leather.png" },
];

export default function ProductsPage() {
    const [isTurkish, setIsTurkish] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<string>("newest");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);

    const categories = useMemo(() => {
        const raw = isTurkish ? ["Koşu", "Sokak Modası", "Klasik"] : ["Running", "Streetwear", "Classic"];
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
        <main className="min-h-screen bg-background text-foreground">
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
                        className="text-foreground/40 max-w-xl text-base md:text-lg uppercase tracking-widest text-[10px] md:text-xs font-bold leading-relaxed"
                    >
                        {t.desc}
                    </motion.p>
                </div>

                {/* Filters Bar */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-y border-border/5 mb-16 gap-6 sticky top-20 bg-background/80 backdrop-blur-xl z-30 px-2 -mx-2">
                    <div className="flex gap-10 items-center">
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-[0.2em] text-foreground hover:text-silver transition-all"
                        >
                            <SlidersHorizontal size={14} />
                            {t.filter}
                            {selectedCategory && <span className="w-1.5 h-1.5 bg-silver rounded-full ml-1" />}
                        </button>

                        <div className="hidden md:flex gap-6 items-center border-l border-border/10 pl-10">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                                    className={`text-[9px] uppercase font-bold tracking-[0.2em] transition-all hover:text-foreground ${selectedCategory === cat ? 'text-foreground translate-y-[-2px]' : 'text-foreground/30'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-10 w-full md:w-auto justify-between md:justify-end">
                        <button
                            onClick={() => setIsSortOpen(!isSortOpen)}
                            className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-[0.2em] text-foreground hover:text-silver transition-all"
                        >
                            <ChevronDown size={14} className={`transition-transform duration-300 ${isSortOpen ? 'rotate-180' : ''}`} />
                            {t.sort}
                        </button>

                        <div className="hidden md:block relative group">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-transparent text-[10px] uppercase font-bold tracking-[0.2em] text-foreground/60 hover:text-foreground transition-all appearance-none pr-8 cursor-pointer outline-none border-none focus:ring-0"
                            >
                                <option value="newest" className="bg-background">{t.newest}</option>
                                <option value="price-low" className="bg-background">{t.lowToHigh}</option>
                                <option value="price-high" className="bg-background">{t.highToLow}</option>
                            </select>
                        </div>

                        <span className="text-[9px] uppercase tracking-[0.3em] text-foreground/20 font-bold">
                            {filteredProducts.length} {t.listed}
                        </span>
                    </div>
                </div>

                {/* Filters & Sort Content - Mobile (Drawer) */}
                <AnimatePresence>
                    {(isFilterOpen || isSortOpen) && (
                        <>
                            {/* Mobile Drawer Background Overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => { setIsFilterOpen(false); setIsSortOpen(false); }}
                                className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[90] md:hidden"
                            />

                            {/* Mobile Filter Drawer */}
                            {isFilterOpen && (
                                <motion.div
                                    initial={{ x: "100%" }}
                                    animate={{ x: 0 }}
                                    exit={{ x: "100%" }}
                                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                    className="fixed top-0 right-0 bottom-0 w-[300px] bg-background border-l border-border/10 z-[100] p-8 md:hidden"
                                >
                                    <div className="flex items-center justify-between mb-12">
                                        <h3 className="text-xl font-display font-bold uppercase tracking-widest text-foreground">{t.filter}</h3>
                                        <button onClick={() => setIsFilterOpen(false)} className="text-foreground/40 hover:text-foreground">
                                            <X size={24} />
                                        </button>
                                    </div>

                                    <div className="space-y-10">
                                        <div>
                                            <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/20 font-bold block mb-6">
                                                {isTurkish ? "KATEGORİ" : "CATEGORY"}
                                            </span>
                                            <div className="flex flex-col gap-4">
                                                <button
                                                    onClick={() => { setSelectedCategory(null); setIsFilterOpen(false); }}
                                                    className={`text-xs uppercase tracking-widest font-bold text-left py-2 border-b border-border/5 ${!selectedCategory ? 'text-foreground' : 'text-foreground/20'}`}
                                                >
                                                    {t.all}
                                                </button>
                                                {categories.map((cat) => (
                                                    <button
                                                        key={cat}
                                                        onClick={() => { setSelectedCategory(cat); setIsFilterOpen(false); }}
                                                        className={`text-xs uppercase tracking-widest font-bold text-left py-2 border-b border-border/5 ${selectedCategory === cat ? 'text-foreground' : 'text-foreground/20'}`}
                                                    >
                                                        {cat}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => setIsFilterOpen(false)}
                                            className="w-full bg-foreground text-background py-4 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] mt-12"
                                        >
                                            {isTurkish ? "ÜRÜNLERİ GÖSTER" : "SHOW PRODUCTS"}
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {/* Mobile Sort Drawer */}
                            {isSortOpen && (
                                <motion.div
                                    initial={{ x: "100%" }}
                                    animate={{ x: 0 }}
                                    exit={{ x: "100%" }}
                                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                    className="fixed top-0 right-0 bottom-0 w-[300px] bg-background border-l border-border/10 z-[100] p-8 md:hidden"
                                >
                                    <div className="flex items-center justify-between mb-12">
                                        <h3 className="text-xl font-display font-bold uppercase tracking-widest text-foreground">{t.sort}</h3>
                                        <button onClick={() => setIsSortOpen(false)} className="text-foreground/40 hover:text-foreground">
                                            <X size={24} />
                                        </button>
                                    </div>

                                    <div className="space-y-10">
                                        <div className="flex flex-col gap-4">
                                            {[
                                                { id: "newest", label: t.newest },
                                                { id: "price-low", label: t.lowToHigh },
                                                { id: "price-high", label: t.highToLow }
                                            ].map((option) => (
                                                <button
                                                    key={option.id}
                                                    onClick={() => { setSortBy(option.id); setIsSortOpen(false); }}
                                                    className={`text-xs uppercase tracking-widest font-bold text-left py-4 border-b border-border/5 ${sortBy === option.id ? 'text-foreground' : 'text-foreground/20'}`}
                                                >
                                                    {option.label}
                                                </button>
                                            ))}
                                        </div>

                                        <button
                                            onClick={() => setIsSortOpen(false)}
                                            className="w-full bg-foreground text-background py-4 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] mt-12"
                                        >
                                            {isTurkish ? "TAMAM" : "DONE"}
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </>
                    )}
                </AnimatePresence>

                {/* Active Filters Display */}
                <AnimatePresence>
                    {(selectedCategory) && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex gap-4 mb-10"
                        >
                            {selectedCategory && (
                                <button
                                    onClick={() => setSelectedCategory(null)}
                                    className="flex items-center gap-2 bg-foreground/[0.05] border border-border/10 px-4 py-2 rounded-full text-[9px] font-bold text-foreground uppercase tracking-widest hover:border-foreground/30 transition-all"
                                >
                                    {selectedCategory} <X size={10} />
                                </button>
                            )}
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
