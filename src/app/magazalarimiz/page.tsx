"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function StoresPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isTurkish, setIsTurkish] = useState(true);

    const stores = [
        { city: isTurkish ? "İSTANBUL" : "ISTANBUL", location: "Nişantaşı Flagship", address: "Abdi İpekçi Cd. No:42, Şişli" },
        { city: isTurkish ? "ANKARA" : "ANKARA", location: "Çankaya Concept", address: "Arjantin Cd. No:12, Gaziosmanpaşa" },
        { city: isTurkish ? "İZMİR" : "IZMIR", location: "Alsancak Studio", address: "Gül Sk. No:8, Konak" },
        { city: isTurkish ? "LONDRA" : "LONDON", location: "Soho Experience", address: "42 Carnaby St, Soho" },
    ];

    return (
        <main className="min-h-screen bg-black">
            <Header isTurkish={isTurkish} setIsTurkish={setIsTurkish} />

            <section className="pt-32 md:pt-48 pb-24 px-6">
                <div className="max-w-[1440px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-12 md:mb-20"
                    >
                        <span className="text-silver uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold mb-6 block">
                            {isTurkish ? "Deneyimi Yaşayın" : "Live the Experience"}
                        </span>
                        <h1 className="text-4xl md:text-8xl font-display font-bold text-gradient mb-8 uppercase">
                            {isTurkish ? "MAĞAZALARIMIZ" : "OUR STORES"}
                        </h1>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {stores.map((store, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-10 border border-white/5 bg-white/[0.01] rounded-3xl flex justify-between items-center hover:bg-white/[0.03] transition-all duration-500"
                            >
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <MapPin size={14} className="text-silver" />
                                        <span className="text-xs tracking-[0.3em] font-semibold text-silver uppercase">{store.city}</span>
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-white mb-2">{store.location}</h3>
                                    <p className="text-white/40 text-sm font-sans">{store.address}</p>
                                </div>
                                <button type="button" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-white group-hover:border-white transition-all duration-300">
                                    <Navigation size={18} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
