"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Package, ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const OrderSuccessPage = () => {
    const [orderNumber, setOrderNumber] = useState("");

    useEffect(() => {
        setOrderNumber(Math.random().toString(36).toUpperCase().substring(2, 10));
    }, []);

    const isTurkish = true;

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-6 flex items-center justify-center">
            <div className="max-w-2xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-card border border-border/5 rounded-[40px] p-12 md:p-16 text-center relative overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-silver/5 blur-[100px] -z-10 rounded-full" />

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 12, delay: 0.3 }}
                        className="w-24 h-24 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(var(--foreground-rgb),0.1)]"
                    >
                        <CheckCircle2 size={48} />
                    </motion.div>

                    <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 italic tracking-tighter uppercase">
                        {isTurkish ? "SİPARİŞİNİZ ALINDI" : "ORDER PLACED"}
                    </h1>

                    <p className="text-foreground/40 text-sm md:text-base leading-relaxed mb-12 max-w-md mx-auto uppercase tracking-widest text-[10px]">
                        {isTurkish
                            ? "Tebrikler! Siparişiniz başarıyla sisteme kaydedildi. Hazırlık sürecine başlıyoruz."
                            : "Congratulations! Your order has been successfully recorded. We are starting the preparation process."}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                        <div className="bg-foreground/[0.03] border border-border/5 rounded-3xl p-6 text-left">
                            <div className="flex items-center gap-3 mb-2 text-silver">
                                <Package size={18} />
                                <span className="text-[10px] font-bold uppercase tracking-widest">{isTurkish ? "SİPARİŞ NO" : "ORDER ID"}</span>
                            </div>
                            <p className="text-foreground font-display font-bold text-lg tracking-widest">#{orderNumber}</p>
                        </div>
                        <div className="bg-foreground/[0.03] border border-border/5 rounded-3xl p-6 text-left">
                            <div className="flex items-center gap-3 mb-2 text-silver">
                                <ShoppingBag size={18} />
                                <span className="text-[10px] font-bold uppercase tracking-widest">{isTurkish ? "DURUM" : "STATUS"}</span>
                            </div>
                            <p className="text-foreground font-display font-bold text-lg tracking-widest uppercase">{isTurkish ? "HAZIRLANIYOR" : "PREPARING"}</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link
                            href="/urunler"
                            className="bg-foreground text-background px-10 h-16 rounded-2xl font-display font-bold text-xs tracking-[0.2em] uppercase hover:bg-silver transition-all duration-300 flex items-center justify-center gap-3 group"
                        >
                            {isTurkish ? "ALIŞVERİŞE DEVAM ET" : "CONTINUE SHOPPING"}
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>

                <div className="mt-12 text-center">
                    <p className="text-foreground/20 text-[10px] uppercase tracking-[0.3em] font-bold mb-4">
                        {isTurkish ? "BİZE KATILIN" : "JOIN US"}
                    </p>
                    <div className="flex justify-center gap-8 text-foreground/40">
                        {["INSTAGRAM", "TWITTER", "BEHANCE"].map((social) => (
                            <button key={social} className="hover:text-foreground transition-colors text-[9px] font-bold tracking-widest">
                                {social}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccessPage;
