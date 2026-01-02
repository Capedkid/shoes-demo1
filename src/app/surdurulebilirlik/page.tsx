"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Leaf, Recycle, Wind } from "lucide-react";

export default function SustainabilityPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isTurkish, setIsTurkish] = useState(true);

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header isTurkish={isTurkish} setIsTurkish={setIsTurkish} />

            <section className="pt-32 md:pt-48 pb-24 px-6">
                <div className="max-w-[1440px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 md:mb-24"
                    >
                        <span className="text-silver uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold mb-6 block">
                            {isTurkish ? "Gelecek İçin Sorumluluk" : "Responsibility for the Future"}
                        </span>
                        <h1 className="text-4xl md:text-8xl font-display font-bold text-gradient mb-8 md:mb-12 uppercase">
                            {isTurkish ? "SÜRDÜRÜLEBİLİRLİK" : "SUSTAINABILITY"}
                        </h1>
                        <p className="text-foreground/40 max-w-2xl mx-auto text-xl font-sans leading-relaxed">
                            {isTurkish
                                ? "Gezegenimizi korurken geleceğin ayakkabılarını üretiyoruz. Karbon ayak izimizi minimize etmek ve döngüsel ekonomiye katkıda bulunmak en büyük önceliğimiz."
                                : "We produce the shoes of the future while protecting our planet. Minimizing our carbon footprint and contributing to the circular economy is our top priority."}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <Leaf className="text-silver" size={40} />, title: isTurkish ? "%100 Geri Dönüşüm" : "100% Recycled", desc: isTurkish ? "Tüm kutularımız ve ambalaj malzemelerimiz tamamen geri dönüştürülmüş materyallerden üretilir." : "All our boxes and packaging materials are made from completely recycled materials." },
                            { icon: <Recycle className="text-silver" size={40} />, title: isTurkish ? "Etik Üretim" : "Ethical Production", desc: isTurkish ? "Tedarik zincirimizin her aşamasında adil çalışma koşullarını ve çevresel standartları garanti ediyoruz." : "We guarantee fair working conditions and environmental standards at every stage of our supply chain." },
                            { icon: <Wind className="text-silver" size={40} />, title: isTurkish ? "Sıfır Karbon" : "Net Zero", desc: isTurkish ? "2030 yılına kadar tüm üretim tesislerimizde %100 yenilenebilir enerjiye geçmeyi hedefliyoruz." : "We aim to switch to 100% renewable energy in all our production facilities by 2030." },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="p-12 border border-border/5 bg-card rounded-3xl flex flex-col items-center gap-6"
                            >
                                {item.icon}
                                <h3 className="text-2xl font-display font-bold text-foreground uppercase tracking-wider">{item.title}</h3>
                                <p className="text-foreground/40 leading-relaxed font-sans">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
