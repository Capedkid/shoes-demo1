"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function PrivacyPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isTurkish, setIsTurkish] = useState(true);

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header isTurkish={isTurkish} setIsTurkish={setIsTurkish} />

            <section className="pt-48 pb-24 px-6">
                <div className="max-w-[800px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16"
                    >
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-gradient mb-8 uppercase">
                            {isTurkish ? "GİZLİLİK POLİTİKASI" : "PRIVACY POLICY"}
                        </h1>
                        <p className="text-foreground/20 text-[10px] uppercase tracking-[0.3em] font-medium">
                            {isTurkish ? "SON GÜNCELLEME" : "LAST UPDATED"}: 02.01.2026
                        </p>
                    </motion.div>

                    <div className="flex flex-col gap-12 text-foreground/60 font-sans leading-relaxed text-sm">
                        <div className="bg-card border border-border/10 rounded-2xl p-8">
                            <h2 className="text-xl font-display font-bold text-foreground mb-4 uppercase">{isTurkish ? "1. VERİ TOPLAMA" : "1. DATA COLLECTION"}</h2>
                            <p>
                                {isTurkish
                                    ? "SOLEEDGE Dynamics olarak, sitemizi ziyaretleriniz sırasında kişisel verilerinizi 6698 sayılı KVKK kapsamına uygun olarak işliyoruz. Adınız, soyadınız, iletişim bilgileriniz ve sipariş detaylarınız hizmet sunumu için toplanmaktadır."
                                    : "As SOLEEDGE Dynamics, we process your personal data during your visits to our site in accordance with KVKK Law No. 6698. Your name, surname, contact information, and order details are collected for service delivery."}
                            </p>
                        </div>

                        <div className="bg-card border border-border/10 rounded-2xl p-8">
                            <h2 className="text-xl font-display font-bold text-foreground mb-4 uppercase">{isTurkish ? "2. ÇEREZLER" : "2. COOKIES"}</h2>
                            <p>
                                {isTurkish
                                    ? "Sitemizde kullanıcı deneyimini artırmak ve tercihlerinizi hatırlamak adına çerezler (cookies) kullanılmaktadır. Tarayıcı ayarlarınızdan çerezleri dilediğiniz zaman yönetebilirsiniz."
                                    : "Cookies are used on our site to enhance the user experience and remember your preferences. You can manage cookies from your browser settings at any time."}
                            </p>
                        </div>

                        <div className="bg-card border border-border/10 rounded-2xl p-8">
                            <h2 className="text-xl font-display font-bold text-foreground mb-4 uppercase">{isTurkish ? "3. BİLGİ PAYLAŞIMI" : "3. SHARING INFORMATION"}</h2>
                            <p>
                                {isTurkish
                                    ? "Toplanan veriler, yasal zorunluluklar ve lojistik (kargo) operasyonları dışında asla üçüncü şahıslarla ticari amaçla paylaşılmaz."
                                    : "Collected data is never shared with third parties for commercial purposes, except for legal obligations and logistics (shipping) operations."}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
