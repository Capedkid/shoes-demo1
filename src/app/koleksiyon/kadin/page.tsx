"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { motion } from "framer-motion";

const womenProducts = (isTurkish: boolean) => [
    { id: 2, name: isTurkish ? "Urban X-Lüks" : "Urban X-Luxe", category: isTurkish ? "Sokak Modası" : "Streetwear", price: "189", image: "/sneaker-urban.png" },
    { id: 5, name: isTurkish ? "Neon Pulse" : "Neon Pulse", category: isTurkish ? "Sokak Modası" : "Streetwear", price: "159", image: "/sneaker-urban.png" },
    { id: 6, name: isTurkish ? "Gece Mavisi" : "Midnight Blue", category: isTurkish ? "Resmi" : "Formal", price: "299", image: "/classic-leather.png" },
];

export default function WomenPage() {
    const [isTurkish, setIsTurkish] = useState(true);

    return (
        <main className="min-h-screen bg-black">
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
                        {isTurkish ? "KADIN" : "WOMEN"}
                    </h1>
                    <p className="text-white/40 max-w-2xl text-xl font-sans">
                        {isTurkish
                            ? "Zarafet ve teknolojinin buluşma noktası. Hafiflik ve estetiği keşfedin."
                            : "Where elegance meets technology. Discover lightness and aesthetics."}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {womenProducts(isTurkish).map((product, index) => (
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
