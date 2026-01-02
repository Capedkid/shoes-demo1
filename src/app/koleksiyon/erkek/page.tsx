"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { motion } from "framer-motion";

const menProducts = (isTurkish: boolean) => [
    { id: 1, name: isTurkish ? "AeroGlide Fütürist" : "AeroGlide Futurist", category: isTurkish ? "Koşu" : "Running", price: "249", image: "/hero.png" },
    { id: 4, name: isTurkish ? "Phantom Siyah" : "Phantom Black", category: isTurkish ? "Koşu" : "Running", price: "219", image: "/hero.png" },
    { id: 3, name: isTurkish ? "Klasik Maun" : "Classic Mahogany", category: isTurkish ? "Resmi" : "Formal", price: "329", image: "/classic-leather.png" },
];

export default function MenPage() {
    const [isTurkish, setIsTurkish] = useState(true);

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header isTurkish={isTurkish} setIsTurkish={setIsTurkish} />

            <div className="pt-48 pb-24 px-6 max-w-[1440px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <span className="text-silver uppercase tracking-[0.4em] text-xs font-semibold mb-6 block uppercase">
                        {isTurkish ? "Koleksiyon" : "Collection"}
                    </span>
                    <h1 className="text-6xl md:text-8xl font-display font-bold text-gradient mb-8">
                        {isTurkish ? "ERKEK" : "MEN"}
                    </h1>
                    <p className="text-foreground/40 max-w-2xl text-xl font-sans">
                        {isTurkish
                            ? "Güç, performans ve stilin mükemmel uyumu. Her adımda otoriteyi ve konforu hissedin."
                            : "The perfect harmony of power, performance, and style. Feel authority and comfort in every step."}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {menProducts(isTurkish).map((product, index) => (
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
