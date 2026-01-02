"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, Menu, X, Globe, User, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";
import CartDrawer from "../cart/CartDrawer";

interface HeaderProps {
    isTurkish: boolean;
    setIsTurkish: (val: boolean) => void;
}

const Header = ({ isTurkish, setIsTurkish }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const { setIsCartOpen, totalItems } = useCart();
    const { theme, toggleTheme } = useTheme();

    const navLinks = isTurkish
        ? [{ name: "Koleksiyonlar", href: "/urunler" }, { name: "Erkek", href: "/koleksiyon/erkek" }, { name: "Kadın", href: "/koleksiyon/kadin" }, { name: "Özel Tasarım", href: "/urunler" }]
        : [{ name: "Collections", href: "/urunler" }, { name: "Men", href: "/koleksiyon/erkek" }, { name: "Women", href: "/koleksiyon/kadin" }, { name: "Custom", href: "/urunler" }];

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

                    <button type="button" className="hidden sm:block text-foreground/60 hover:text-foreground transition-colors duration-300">
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
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden glass border-t border-border/5 overflow-hidden"
                >
                    <div className="flex flex-col gap-2 p-6">
                        {/* Mobile Search & User (Visible only on mobile now) */}
                        <div className="flex items-center gap-6 mb-4 pb-4 border-b border-border/5 sm:hidden">
                            <button type="button" className="flex items-center gap-3 text-foreground/60 text-[10px] uppercase tracking-widest">
                                <Search size={18} strokeWidth={1.5} />
                                {isTurkish ? "ARA" : "SEARCH"}
                            </button>
                            <button type="button" className="flex items-center gap-3 text-foreground/60 text-[10px] uppercase tracking-widest">
                                <User size={18} strokeWidth={1.5} />
                                {isTurkish ? "HESABIM" : "ACCOUNT"}
                            </button>
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

            <CartDrawer isTurkish={isTurkish} />
        </motion.header>
    );
};

export default Header;
