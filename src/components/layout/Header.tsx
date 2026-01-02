"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Menu, X, Globe, User, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import CartDrawer from "../cart/CartDrawer";
import { allProducts } from "@/app/urunler/page";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const { setIsCartOpen, totalItems } = useCart();
    const { theme, toggleTheme } = useTheme();
    const { isTurkish, setIsTurkish, t } = useLanguage();

    const navLinks = isTurkish
        ? [{ name: "Koleksiyonlar", href: "/urunler" }, { name: "Erkek", href: "/koleksiyon/erkek" }, { name: "Kadın", href: "/koleksiyon/kadin" }, { name: "Özel Tasarım", href: "/urunler" }]
        : [{ name: "Collections", href: "/urunler" }, { name: "Men", href: "/koleksiyon/erkek" }, { name: "Women", href: "/koleksiyon/kadin" }, { name: "Custom", href: "/urunler" }];

    const filteredProducts = searchQuery.trim()
        ? allProducts(isTurkish).filter(p =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase())
        ).slice(0, 5)
        : [];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full z-50 border-b border-border/5 glass"
        >
            <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
                {/* Navigation Links - Desktop */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-xs uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition-colors duration-300"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Logo */}
                <Link href="/" className="md:absolute md:left-1/2 md:-translate-x-1/2 group">
                    <span className="text-xl md:text-2xl font-display font-bold tracking-tighter text-foreground group-hover:text-silver transition-colors duration-500">
                        SOLEEDGE<span className="text-silver">.</span>
                    </span>
                </Link>

                {/* Icons & Language Switcher */}
                <div className="flex items-center gap-4 md:gap-6">
                    {/* Language Toggle */}
                    <div className="hidden lg:flex items-center gap-2 border border-border/10 rounded-full px-3 py-1 bg-foreground/5">
                        <Globe size={14} className="text-foreground/40" />
                        <button
                            type="button"
                            onClick={() => setIsTurkish(true)}
                            className={`text-[10px] font-bold tracking-widest ${isTurkish ? 'text-foreground' : 'text-foreground/20'} transition-colors`}
                        >
                            TR
                        </button>
                        <span className="text-foreground/10 w-[1px] h-3 bg-border/10" />
                        <button
                            type="button"
                            onClick={() => setIsTurkish(false)}
                            className={`text-[10px] font-bold tracking-widest ${!isTurkish ? 'text-foreground' : 'text-foreground/20'} transition-colors`}
                        >
                            EN
                        </button>
                    </div>

                    {/* Theme Toggle */}
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="w-10 h-10 rounded-full border border-border/10 flex items-center justify-center text-foreground/60 hover:text-foreground transition-all duration-300"
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <button
                        type="button"
                        onClick={() => setIsSearchOpen(true)}
                        className="hidden sm:block text-foreground/60 hover:text-foreground transition-colors duration-300"
                    >
                        <Search size={20} strokeWidth={1.5} />
                    </button>

                    <Link href="/giris-yap" className="hidden sm:block text-foreground/60 hover:text-foreground transition-colors duration-300">
                        <User size={20} strokeWidth={1.5} />
                    </Link>

                    <button
                        type="button"
                        onClick={() => setIsCartOpen(true)}
                        className="text-foreground/60 hover:text-foreground transition-colors duration-300 relative"
                    >
                        <ShoppingBag size={20} strokeWidth={1.5} />
                        {totalItems > 0 && (
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-silver rounded-full" />
                        )}
                    </button>
                    <button
                        type="button"
                        className="md:hidden text-foreground/60 hover:text-foreground transition-colors duration-300 ml-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-t border-border/10 overflow-hidden shadow-2xl"
                    >
                        <div className="flex flex-col gap-2 p-6">
                            {/* Mobile Search & User (Visible only on mobile now) */}
                            <div className="flex items-center gap-6 mb-4 pb-4 border-b border-border/10 sm:hidden">
                                <button
                                    onClick={() => { setIsSearchOpen(true); setIsOpen(false); }}
                                    type="button"
                                    className="flex items-center gap-3 text-foreground/60 text-[10px] uppercase tracking-widest hover:text-foreground"
                                >
                                    <Search size={18} strokeWidth={1.5} />
                                    {isTurkish ? "ARA" : "SEARCH"}
                                </button>
                                <Link
                                    href="/profil"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 text-foreground/60 text-[10px] uppercase tracking-widest hover:text-foreground"
                                >
                                    <User size={18} strokeWidth={1.5} />
                                    {isTurkish ? "HESABIM" : "ACCOUNT"}
                                </Link>
                            </div>

                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-xs uppercase tracking-[0.2em] text-foreground/60 py-4 hover:text-foreground transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="flex items-center gap-6 py-6 border-t border-border/5 mt-2">
                                <button
                                    onClick={() => { setIsTurkish(true); setIsOpen(false); }}
                                    className={`text-[10px] font-bold tracking-[0.2em] ${isTurkish ? 'text-foreground' : 'text-foreground/20'}`}
                                >
                                    TÜRKÇE
                                </button>
                                <button
                                    onClick={() => { setIsTurkish(false); setIsOpen(false); }}
                                    className={`text-[10px] font-bold tracking-[0.2em] ${!isTurkish ? 'text-foreground' : 'text-foreground/20'}`}
                                >
                                    ENGLISH
                                </button>
                            </div>

                            {/* Mobile Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="flex items-center gap-3 text-foreground/60 text-[10px] uppercase tracking-widest py-4 border-t border-border/5"
                            >
                                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                                {isTurkish ? (theme === 'dark' ? "AYDINLIK MOD" : "KARANLIK MOD") : (theme === 'dark' ? "LIGHT MODE" : "DARK MODE")}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Search Overlay */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-start pt-32 px-6"
                    >
                        <button
                            onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}
                            className="absolute top-8 right-8 text-foreground/40 hover:text-foreground transition-colors"
                        >
                            <X size={32} strokeWidth={1} />
                        </button>

                        <div className="w-full max-w-2xl">
                            <div className="relative group shadow-2xl">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-foreground/40 group-focus-within:text-silver transition-colors" size={24} />
                                <input
                                    autoFocus
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder={isTurkish ? "Hayalindeki ayakkabıyı ara..." : "Search for your dream shoes..."}
                                    className="w-full bg-card border-b-2 border-border/20 h-20 pl-20 pr-10 text-xl md:text-3xl font-display outline-none focus:border-silver transition-colors text-foreground placeholder:text-foreground/30 rounded-t-2xl"
                                />
                            </div>

                            {/* Search Results */}
                            {filteredProducts.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-2 space-y-2"
                                >
                                    {filteredProducts.map((product) => (
                                        <Link
                                            key={product.id}
                                            href={`/urunler/${product.id}`}
                                            onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}
                                            className="flex items-center gap-6 p-4 rounded-2xl bg-card border border-border/10 hover:border-silver/30 transition-all group shadow-xl"
                                        >
                                            <div className="w-20 h-20 rounded-xl bg-background overflow-hidden flex items-center justify-center p-2 border border-border/5">
                                                <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-display font-bold uppercase tracking-widest text-sm text-foreground">{product.name}</h4>
                                                <p className="text-[10px] text-foreground/50 uppercase tracking-widest font-bold mt-1">{product.category}</p>
                                                <p className="text-sm font-display font-bold mt-2 text-silver">₺{product.price}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </motion.div>
                            )}

                            <div className="mt-12 p-8 rounded-3xl bg-card border border-border/10 shadow-xl">
                                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/60 mb-6">{isTurkish ? "Popüler Aramalar" : "Popular Searches"}</h4>
                                <div className="flex flex-wrap gap-3">
                                    {["AeroGlide", "Sneakers", "Retro", "Sports"].map(tag => (
                                        <button
                                            key={tag}
                                            onClick={() => setSearchQuery(tag)}
                                            className="px-5 py-2 rounded-full border border-border/10 bg-background/50 text-[10px] uppercase tracking-widest font-bold text-foreground/80 hover:bg-foreground hover:text-background transition-all"
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <CartDrawer />
        </motion.header>
    );
};

export default Header;
