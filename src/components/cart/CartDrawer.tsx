"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

interface CartDrawerProps {
    isTurkish: boolean;
}

const CartDrawer = ({ isTurkish }: CartDrawerProps) => {
    const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

    const t = {
        title: isTurkish ? "SEPETİM" : "MY CART",
        empty: isTurkish ? "Sepetiniz henüz boş." : "Your cart is empty.",
        total: isTurkish ? "TOPLAM" : "TOTAL",
        checkout: isTurkish ? "ÖDEMEYE GEÇ" : "CHECKOUT",
        keepShopping: isTurkish ? "ALIŞVERİŞE DEVAM ET" : "CONTINUE SHOPPING",
        items: isTurkish ? "Ürün" : "Items",
        size: isTurkish ? "Beden" : "Size",
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed top-0 right-0 h-full w-full max-w-[450px] bg-[#080808] border-l border-white/5 z-[70] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-8 border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <ShoppingBag size={20} className="text-silver" />
                                <h2 className="text-xl font-display font-bold tracking-widest text-white uppercase">
                                    {t.title} <span className="text-white/20 ml-2">({totalItems})</span>
                                </h2>
                            </div>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="text-white/40 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto px-8 py-4 flex flex-col custom-scrollbar bg-[#050505] min-h-[60vh]">
                            {cart.length === 0 ? (
                                <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 py-6 max-h-[70vh]">
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="w-20 h-20 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center relative"
                                    >
                                        <ShoppingBag size={32} className="text-white/10" />
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="absolute inset-0 rounded-full border border-silver/10"
                                        />
                                    </motion.div>
                                    <div className="space-y-4">
                                        <p className="text-white/50 font-display text-sm tracking-[0.2em] uppercase">{t.empty}</p>
                                        <button
                                            onClick={() => setIsCartOpen(false)}
                                            className="inline-block text-[9px] font-display font-bold tracking-[0.4em] text-silver hover:text-white transition-all uppercase border-b border-white/10 pb-2 hover:border-white"
                                        >
                                            {t.keepShopping}
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-10 py-6">
                                    {cart.map((item) => (
                                        <div key={`${item.id}-${item.size}`} className="flex gap-8 group">
                                            <div className="relative w-28 h-28 bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden flex-shrink-0 group-hover:border-white/10 transition-colors">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="flex-1 flex flex-col justify-between py-2">
                                                <div className="flex justify-between items-start">
                                                    <div className="space-y-1">
                                                        <h3 className="text-sm font-display font-bold text-white uppercase tracking-widest group-hover:text-silver transition-colors">
                                                            {item.name}
                                                        </h3>
                                                        {item.size && (
                                                            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium">
                                                                {t.size}: <span className="text-white/60">{item.size}</span>
                                                            </p>
                                                        )}
                                                    </div>
                                                    <button
                                                        onClick={() => removeFromCart(item.id, item.size)}
                                                        className="text-white/10 hover:text-red-500 transition-colors p-1"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>

                                                <div className="flex justify-between items-center mt-6">
                                                    <div className="flex items-center border border-white/5 rounded-2xl h-10 px-3 bg-white/[0.03]">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1, item.size)}
                                                            className="text-white/20 hover:text-white transition-colors"
                                                        >
                                                            <Minus size={14} />
                                                        </button>
                                                        <span className="w-10 text-center text-xs font-display font-bold text-white">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.size)}
                                                            className="text-white/20 hover:text-white transition-colors"
                                                        >
                                                            <Plus size={14} />
                                                        </button>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-[10px] text-white/20 uppercase tracking-widest mb-1">Price</p>
                                                        <p className="font-display font-bold text-white text-lg tracking-tight">
                                                            ${(parseFloat(item.price) * item.quantity).toFixed(0)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {cart.length > 0 && (
                            <div className="p-8 border-t border-white/5 bg-[#030303]">
                                <div className="flex justify-between items-end mb-8">
                                    <span className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-semibold">
                                        {t.total}
                                    </span>
                                    <span className="text-3xl font-display font-bold text-white">
                                        ${totalPrice}
                                    </span>
                                </div>
                                <Link href="/odeme" onClick={() => setIsCartOpen(false)}>
                                    <button className="w-full bg-white text-black h-16 rounded-2xl font-display font-bold tracking-[0.2em] text-xs uppercase hover:bg-silver transition-all duration-300 flex items-center justify-center gap-3 group">
                                        {t.checkout}
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
