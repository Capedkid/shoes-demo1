"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Briefcase, Users, Zap } from "lucide-react";

export default function CareerPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { isTurkish } = useLanguage();

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />

            <section className="pt-32 md:pt-48 pb-24 px-6">
                <div className="max-w-[1440px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16 md:mb-24"
                    >
                        <span className="text-silver uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold mb-6 block">
                            {isTurkish ? "Bize Katılın" : "Join Us"}
                        </span>
                        <h1 className="text-4xl md:text-8xl font-display font-bold text-gradient mb-8 uppercase">
                            {isTurkish ? "KARİYER" : "CAREER"}
                        </h1>
                        <p className="text-foreground/40 max-w-xl mx-auto font-sans leading-relaxed">
                            {isTurkish
                                ? "Geleceğin ayakkabı teknolojilerini şekillendirmek için en parlak zekaları arıyoruz. Yenilikçi bir ekibin parçası olmak ister misiniz?"
                                : "We are looking for the brightest minds to shape the footwear technologies of the future. Do you want to be part of an innovative team?"}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        {[
                            { icon: <Users size={32} />, title: isTurkish ? "Kültür" : "Culture", desc: isTurkish ? "Çeşitliliğe inanan, yaratıcılığı destekleyen bir ortam." : "An environment that believes in diversity and supports creativity." },
                            { icon: <Zap size={32} />, title: isTurkish ? "Gelişim" : "Growth", desc: isTurkish ? "Sürekli öğrenme ve kariyer basamaklarını hızla tırmanma imkanı." : "Opportunity for continuous learning and rapid career advancement." },
                            { icon: <Briefcase size={32} />, title: isTurkish ? "Fayda" : "Benefits", desc: isTurkish ? "Rekabetçi yan haklar ve modern çalışma alanları." : "Competitive side benefits and modern workspaces." },
                        ].map((item, idx) => (
                            <div key={idx} className="p-12 border border-white/5 bg-white/[0.01] rounded-3xl">
                                <div className="text-silver mb-8">{item.icon}</div>
                                <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">{item.title}</h3>
                                <p className="text-white/40 leading-relaxed font-sans">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="border border-border/10 rounded-3xl p-12 text-center bg-foreground/5 backdrop-blur-md">
                        <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                            {isTurkish ? "İş İlanlarını Görüntüle" : "View Job Openings"}
                        </h2>
                        <button type="button" className="px-12 h-14 bg-foreground text-background font-display font-bold tracking-widest text-xs uppercase hover:bg-silver transition-all duration-300 rounded-full">
                            {isTurkish ? "BAŞVURU YAP" : "APPLY NOW"}
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
