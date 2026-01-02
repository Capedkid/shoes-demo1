"use client";

import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function TrackingPage() {
    const { isTurkish } = useLanguage();

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />

            <section className="pt-48 pb-24 px-6">
                <div className="max-w-[800px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-gradient mb-8 uppercase">
                            {isTurkish ? "KARGO TAKİBİ" : "ORDER TRACKING"}
                        </h1>
                        <p className="text-foreground/40 font-sans leading-relaxed">
                            {isTurkish
                                ? "Sipariş numaranızı girerek gönderinizin durumunu anlık olarak takip edebilirsiniz."
                                : "Enter your order number to track your shipment's status in real-time."}
                        </p>
                    </motion.div>

                    <div className="bg-card border border-border/10 rounded-3xl p-12">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-4">
                                <label className="text-[10px] text-foreground/40 uppercase tracking-widest ml-1">{isTurkish ? "SİPARİŞ NUMARASI" : "ORDER NUMBER"}</label>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <input
                                        type="text"
                                        placeholder="e.g. SE-123456"
                                        className="flex-1 bg-foreground/5 border border-border/10 rounded-xl h-14 px-4 text-foreground focus:outline-none focus:border-foreground transition-colors"
                                    />
                                    <button type="button" className="w-full sm:w-auto px-8 h-14 bg-foreground text-background font-display font-bold tracking-widest text-xs uppercase hover:bg-silver transition-all duration-300 rounded-xl">
                                        {isTurkish ? "SORGULA" : "TRACK"}
                                    </button>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-border/5">
                                <div className="flex flex-col gap-10">
                                    {[
                                        { status: isTurkish ? "Sipariş Alındı" : "Order Received", date: "12 Oct, 10:30", completed: true },
                                        { status: isTurkish ? "Hazırlanıyor" : "Preparing", date: "12 Oct, 14:45", completed: true },
                                        { status: isTurkish ? "Kargoya Verildi" : "Shipped", date: "13 Oct, 09:15", completed: false },
                                        { status: isTurkish ? "Teslim Edildi" : "Delivered", date: "-", completed: false },
                                    ].map((step, idx) => (
                                        <div key={idx} className="flex gap-6 relative">
                                            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 z-10 
                                                ${step.completed ? 'bg-foreground border-foreground text-background' : 'bg-background border-border/10 text-foreground/10'}`}>
                                                {step.completed ? <CheckCircle size={14} /> : idx + 1}
                                            </div>
                                            {idx !== 3 && <div className="absolute left-4 top-8 w-[2px] h-10 bg-border/10" />}
                                            <div>
                                                <h4 className={`text-sm font-display font-bold ${step.completed ? 'text-foreground' : 'text-foreground/20'}`}>{step.status}</h4>
                                                <span className="text-[10px] text-foreground/20 block mt-1 tracking-widest">{step.date}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
