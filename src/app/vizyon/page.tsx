"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function VisionPage() {
    const [isTurkish, setIsTurkish] = useState(true);

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header isTurkish={isTurkish} setIsTurkish={setIsTurkish} />

            {/* Hero Section */}
            <section className="pt-32 md:pt-48 pb-12 md:pb-24 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-silver uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold mb-6 block"
                    >
                        {isTurkish ? "Geleceği Şekillendirmek" : "Shaping the Future"}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-6xl md:text-8xl font-display font-bold text-gradient mb-8 md:mb-12 uppercase"
                    >
                        {isTurkish ? "VİZYONUMUZ" : "OUR VISION"}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-foreground/60 text-base md:text-xl leading-relaxed font-sans"
                    >
                        {isTurkish
                            ? "SOLEEDGE olarak, ayakkabının sadece bir ihtiyaç değil, insan potansiyelini artıran bir teknoloji olduğuna inanıyoruz. Tasarım ve mühendisliğin kesiştiği noktada, dünyayı daha hızlı, daha konforlu ve daha stili takip eden bir yer haline getirmek için çalışıyoruz."
                            : "At SOLEEDGE, we believe footwear is not just a necessity but a technology that enhances human potential. At the intersection of design and engineering, we work to make the world a faster, more comfortable, and trendier place."}
                    </motion.p>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 px-6 bg-card border-y border-border/5">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        {
                            title: isTurkish ? "İnovasyon" : "Innovation",
                            desc: isTurkish ? "Sınırları zorlayan materyaller ve üretim teknikleriyle geleceği bugüne taşıyoruz." : "We bring the future to today with materials and production techniques that push boundaries."
                        },
                        {
                            title: isTurkish ? "Sürdürülebilirlik" : "Sustainability",
                            desc: isTurkish ? "Dünyamızı korumak için geri dönüştürülmüş materyaller ve çevre dostu süreçler kullanıyoruz." : "We use recycled materials and eco-friendly processes to protect our world."
                        },
                        {
                            title: isTurkish ? "Estetik" : "Aesthetics",
                            desc: isTurkish ? "Minimalist ve fütüristik tasarım anlayışımızla her adımda sanatı hissedin." : "Feel art in every step with our minimalist and futuristic design approach."
                        },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="p-12 border border-border/5 bg-background/40 rounded-3xl"
                        >
                            <h3 className="text-2xl font-display font-bold text-foreground mb-6 uppercase tracking-wider">{item.title}</h3>
                            <p className="text-foreground/40 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
