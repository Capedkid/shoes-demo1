"use client";

import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Ruler, Info, CheckCircle2 } from "lucide-react";

export default function SizeGuidePage() {
    const { isTurkish } = useLanguage();

    const sizeData = [
        { eu: "40", cm: "25.0", us: "7", uk: "6" },
        { eu: "41", cm: "26.0", us: "8", uk: "7" },
        { eu: "42", cm: "27.0", us: "9", uk: "8" },
        { eu: "43", cm: "28.0", us: "10", uk: "9" },
        { eu: "44", cm: "29.0", us: "11", uk: "10" },
        { eu: "45", cm: "30.0", us: "12", uk: "11" },
    ];

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />

            <div className="pt-32 pb-24 px-6 max-w-[1000px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-silver uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
                        {isTurkish ? "Mükemmel Uyum" : "Perfect Fit"}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-gradient mb-8">
                        {isTurkish ? "NUMARA REHBERİ" : "SIZE GUIDE"}
                    </h1>
                    <p className="text-foreground/40 text-lg leading-relaxed max-w-2xl mx-auto">
                        {isTurkish
                            ? "Doğru ayakkabı numarası, hem performans hem de uzun süreli konfor için kritiktir. Aşağıdaki tabloyu kullanarak size en uygun numarayı bulabilirsiniz."
                            : "The right shoe size is critical for both performance and long-term comfort. Use the table below to find the best fit for you."}
                    </p>
                </motion.div>

                {/* Measurement Table */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-card border border-border/10 rounded-2xl overflow-hidden mb-16"
                >
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-border/10 bg-foreground/5">
                                <th className="p-6 text-[10px] uppercase tracking-widest text-foreground/40 font-semibold text-center">EU</th>
                                <th className="p-6 text-[10px] uppercase tracking-widest text-foreground/40 font-semibold text-center">CM</th>
                                <th className="p-6 text-[10px] uppercase tracking-widest text-foreground/40 font-semibold text-center">US</th>
                                <th className="p-6 text-[10px] uppercase tracking-widest text-foreground/40 font-semibold text-center">UK</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sizeData.map((row, idx) => (
                                <tr key={idx} className="border-b border-border/5 hover:bg-foreground/[0.01] transition-colors">
                                    <td className="p-6 text-foreground font-display font-bold text-center">{row.eu}</td>
                                    <td className="p-6 text-foreground/60 text-center font-sans">{row.cm}</td>
                                    <td className="p-6 text-foreground/60 text-center font-sans">{row.us}</td>
                                    <td className="p-6 text-foreground/60 text-center font-sans">{row.uk}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                {/* Tips Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 bg-card border border-border/10 rounded-2xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-silver/10 flex items-center justify-center text-silver">
                                <Ruler size={24} />
                            </div>
                            <h3 className="text-xl font-display font-bold text-foreground">
                                {isTurkish ? "Nasıl Ölçülür?" : "How to Measure?"}
                            </h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                isTurkish ? "Topuğunuzu duvara dayayarak bir kağıt üzerine basın." : "Step on a piece of paper with your heel against a wall.",
                                isTurkish ? "En uzun parmağınızın ucunu işaretleyin." : "Mark the tip of your longest toe.",
                                isTurkish ? "Topuk ile işaretlediğiniz nokta arasını CM olarak ölçün." : "Measure the distance from the heel to the mark in CM.",
                                isTurkish ? "Tablomuzdan karşılık gelen numarayı seçin." : "Select the corresponding size from our table."
                            ].map((tip, idx) => (
                                <li key={idx} className="flex gap-3 text-foreground/40 text-sm leading-relaxed">
                                    <CheckCircle2 size={16} className="text-silver shrink-0 mt-1" />
                                    {tip}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-8 bg-card border border-border/10 rounded-2xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-silver/10 flex items-center justify-center text-silver">
                                <Info size={24} />
                            </div>
                            <h3 className="text-xl font-display font-bold text-foreground">
                                {isTurkish ? "Önemli İpuçları" : "Important Tips"}
                            </h3>
                        </div>
                        <p className="text-foreground/40 text-sm leading-relaxed">
                            {isTurkish
                                ? "Ayaklarınız gün içinde hafifçe şişebilir, bu nedenle ölçümü öğleden sonra yapmanızı öneririz. Eğer iki numara arasındaysanız, daha rahat bir kullanım için bir büyük numarayı tercih edebilirsiniz."
                                : "Your feet may swell slightly during the day, so we recommend measuring in the afternoon. If you are between two sizes, we suggest choosing the larger one for better comfort."}
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
