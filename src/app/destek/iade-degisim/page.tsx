"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { RefreshCw, ShieldCheck, Clock } from "lucide-react";

export default function ReturnsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isTurkish, setIsTurkish] = useState(true);

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header isTurkish={isTurkish} setIsTurkish={setIsTurkish} />

            <section className="pt-48 pb-24 px-6">
                <div className="max-w-[1000px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-20"
                    >
                        <h1 className="text-6xl md:text-8xl font-display font-bold text-gradient mb-8 uppercase">
                            {isTurkish ? "İADE & DEĞİŞİM" : "RETURNS & EXCHANGES"}
                        </h1>
                        <p className="text-foreground/40 max-w-2xl font-sans text-xl leading-relaxed">
                            {isTurkish
                                ? "Memnuniyetiniz bizim için önemli. Satın aldığınız ürünleri kolayca iade edebilir veya değiştirebilirsiniz."
                                : "Your satisfaction is important to us. You can easily return or exchange the products you have purchased."}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="p-10 border border-border/5 bg-card rounded-3xl">
                            <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center text-silver mb-8">
                                <Clock size={24} />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-foreground mb-4 uppercase">{isTurkish ? "30 GÜN SÜRE" : "30-DAY WINDOW"}</h3>
                            <p className="text-foreground/40 font-sans leading-relaxed">
                                {isTurkish
                                    ? "Siparişinizi teslim aldığınız tarihten itibaren 30 gün içinde iade talebinde bulunabilirsiniz."
                                    : "You can request a return within 30 days from the date you received your order."}
                            </p>
                        </div>
                        <div className="p-10 border border-border/5 bg-card rounded-3xl">
                            <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center text-silver mb-8">
                                <RefreshCw size={24} />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-foreground mb-4 uppercase">{isTurkish ? "KOLAY DEĞİŞİM" : "EASY EXCHANGE"}</h3>
                            <p className="text-foreground/40 font-sans leading-relaxed">
                                {isTurkish
                                    ? "Beden uyumsuzluğu gibi durumlarda, stoktaki diğer numaralarla ücretsiz değişim yapabilirsiniz."
                                    : "In case of size mismatch, you can make a free exchange with other sizes in stock."}
                            </p>
                        </div>
                    </div>

                    <div className="bg-card rounded-3xl p-12 border border-border/10">
                        <h2 className="text-2xl font-display font-bold text-foreground mb-8 uppercase">{isTurkish ? "İADE KOŞULLARI" : "RETURN CONDITIONS"}</h2>
                        <ul className="flex flex-col gap-6">
                            {[
                                isTurkish ? "Ürün orijinal ambalajında ve faturalı olmalıdır." : "Product must be in original packaging with invoice.",
                                isTurkish ? "Kullanılmış, yıkanmış veya hasar görmüş ürünlerin iadesi kabul edilmez." : "Returns of used, washed, or damaged products are not accepted.",
                                isTurkish ? "İade kargo ücreti, kusurlu ürünler dışında müşteriye aittir." : "Return shipping fee belongs to the customer except for defective products.",
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4 items-start text-foreground/60 font-sans">
                                    <ShieldCheck size={18} className="text-silver mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
