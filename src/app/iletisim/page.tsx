"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isTurkish, setIsTurkish] = useState(true);

    return (
        <main className="min-h-screen bg-black">
            <Header isTurkish={isTurkish} setIsTurkish={setIsTurkish} />

            <section className="pt-32 md:pt-48 pb-24 px-6">
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <span className="text-silver uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold mb-6 block">
                                {isTurkish ? "Bize Ulaşın" : "Contact Us"}
                            </span>
                            <h1 className="text-4xl md:text-8xl font-display font-bold text-gradient mb-8 uppercase">
                                {isTurkish ? "İLETİŞİM" : "CONTACT"}
                            </h1>
                            <p className="text-white/40 max-w-sm font-sans mb-12 leading-relaxed">
                                {isTurkish
                                    ? "Her türlü sorunuz, öneriniz veya iş birliği talebiniz için bizimle iletişime geçebilirsiniz."
                                    : "You can contact us for any questions, suggestions, or collaboration requests."}
                            </p>

                            <div className="flex flex-col gap-8">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-silver">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <span className="text-[10px] text-white/20 block uppercase tracking-widest mb-1">EMAIL</span>
                                        <a href="mailto:contact@soleedge.com" className="text-white hover:text-silver transition-colors">contact@soleedge.com</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-silver">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <span className="text-[10px] text-white/20 block uppercase tracking-widest mb-1">PHONE</span>
                                        <a href="tel:+902120000000" className="text-white hover:text-silver transition-colors">+90 212 000 00 00</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-silver">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <span className="text-[10px] text-white/20 block uppercase tracking-widest mb-1">OFFICE</span>
                                        <span className="text-white">Levent, Istanbul, TR</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12"
                        >
                            <form className="flex flex-col gap-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] text-white/40 uppercase tracking-widest ml-1">{isTurkish ? "ADINIZ" : "NAME"}</label>
                                        <input type="text" className="bg-white/5 border border-white/10 rounded-xl h-14 px-4 text-white focus:outline-none focus:border-white transition-colors" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] text-white/40 uppercase tracking-widest ml-1">EMAIL</label>
                                        <input type="email" className="bg-white/5 border border-white/10 rounded-xl h-14 px-4 text-white focus:outline-none focus:border-white transition-colors" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] text-white/40 uppercase tracking-widest ml-1">{isTurkish ? "MESAJINIZ" : "MESSAGE"}</label>
                                    <textarea className="bg-white/5 border border-white/10 rounded-xl h-40 p-4 text-white focus:outline-none focus:border-white transition-colors resize-none" />
                                </div>
                                <button type="submit" className="h-14 bg-white text-black font-display font-bold tracking-widest text-xs uppercase hover:bg-silver transition-all duration-300 rounded-xl flex items-center justify-center gap-3">
                                    <Send size={16} />
                                    {isTurkish ? "GÖNDER" : "SEND"}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
