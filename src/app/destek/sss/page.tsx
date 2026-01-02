"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isTurkish, setIsTurkish] = useState(true);
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    const faqs = [
        {
            q: isTurkish ? "Kargo ne kadar sürede ulaşır?" : "How long does shipping take?",
            a: isTurkish
                ? "Siparişleriniz genellikle 1-3 iş günü içerisinde kargoya teslim edilir. Bölgenize göre teslimat süresi 1-2 iş günü sürebilir."
                : "Your orders are usually delivered to cargo within 1-3 business days. Depending on your region, delivery may take 1-2 business days."
        },
        {
            q: isTurkish ? "Ayakkabı numaraları tam mı?" : "Are shoe sizes true to fit?",
            a: isTurkish
                ? "SOLEEDGE modelleri genellikle standart EU kalıplarına uygundur. Detaylı bilgi için 'Numara Rehberimizi' inceleyebilirsiniz."
                : "SOLEEDGE models generally comply with standard EU sizes. For detailed information, you can check our 'Size Guide'."
        },
        {
            q: isTurkish ? "Ödeme yöntemleri nelerdir?" : "What are the payment methods?",
            a: isTurkish
                ? "Kredi kartı, banka kartı ve havale yöntemlerini kabul ediyoruz. Çok yakında kapıda ödeme seçeneği de eklenecektir."
                : "We accept credit card, debit card, and wire transfer methods. Cash on delivery option will be added very soon."
        },
        {
            q: isTurkish ? "Garanti süresi nedir?" : "What is the warranty period?",
            a: isTurkish
                ? "Tüm ürünlerimiz üretim hatalarına karşı 6 ay SOLEEDGE garantisi altındadır."
                : "All our products are under a 6-month SOLEEDGE warranty against manufacturing defects."
        }
    ];

    return (
        <main className="min-h-screen bg-black">
            <Header isTurkish={isTurkish} setIsTurkish={setIsTurkish} />

            <section className="pt-32 md:pt-48 pb-24 px-6">
                <div className="max-w-[800px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h1 className="text-4xl md:text-7xl font-display font-bold text-gradient mb-8 uppercase">
                            {isTurkish ? "SORULARINIZI" : "QUESTIONS"} <br /> {isTurkish ? "YANITLIYORUZ" : "ANSWERED"}
                        </h1>
                    </motion.div>

                    <div className="flex flex-col gap-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/10"
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                    className="w-full p-8 flex justify-between items-center text-left bg-white/[0.01]"
                                >
                                    <span className="text-lg font-display font-medium text-white">{faq.q}</span>
                                    {openIdx === idx ? <Minus size={18} className="text-silver" /> : <Plus size={18} className="text-white/20" />}
                                </button>
                                {openIdx === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        className="px-8 pb-8 text-white/40 font-sans leading-relaxed"
                                    >
                                        {faq.a}
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
