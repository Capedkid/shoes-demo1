"use client";

import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
    const { isTurkish } = useLanguage();

    return (
        <main className="min-h-screen bg-background">
            <Header />

            <section className="pt-32 md:pt-48 pb-24 px-6">
                <div className="max-w-[1440px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12 md:mb-20"
                    >
                        <span className="text-silver uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold mb-6 block">
                            {isTurkish ? "Hikayemiz" : "Our Story"}
                        </span>
                        <h1 className="text-4xl md:text-8xl font-display font-bold text-gradient mb-8 md:mb-12 uppercase">
                            {isTurkish ? "HAKKIMIZDA" : "ABOUT US"}
                        </h1>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-square bg-muted rounded-3xl overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent z-10" />
                            {/* Image would go here */}
                            <div className="w-full h-full flex items-center justify-center text-white/10 font-display text-4xl font-bold">
                                SOLEEDGE HERITAGE
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-8"
                        >
                            <h2 className="text-3xl font-display font-medium text-foreground italic">
                                {isTurkish ? "Geleceği Tasarlıyoruz" : "Designing the Future"}
                            </h2>
                            <p className="text-foreground/60 text-lg leading-relaxed font-sans">
                                {isTurkish
                                    ? "2024 yılında kurulan SOLEEDGE, ayakkabı dünyasında teknoloji ve lüksün birleşimini temsil ediyor. Amacımız, her adımda sadece konfor değil, aynı zamanda fütüristik bir kimlik sunmaktır. Mühendislik ekiplerimiz, en hafif materyalleri en dayanıklı yapılarla birleştirerek modern şehir insanının ihtiyaçlarına cevap veriyor."
                                    : "Founded in 2024, SOLEEDGE represents the fusion of technology and luxury in the world of footwear. Our goal is to offer not just comfort in every step, but also a futuristic identity. Our engineering teams combine the lightest materials with the most durable structures to respond to the needs of the modern urbanite."}
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-8">
                                <div>
                                    <span className="text-4xl font-display font-bold text-foreground block mb-2">2024</span>
                                    <p className="text-[10px] uppercase tracking-widest text-foreground/40">{isTurkish ? "KURULUŞ" : "ESTABLISHED"}</p>
                                </div>
                                <div>
                                    <span className="text-4xl font-display font-bold text-foreground block mb-2">12+</span>
                                    <p className="text-[10px] uppercase tracking-widest text-foreground/40">{isTurkish ? "ÜLKE" : "COUNTRIES"}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
