"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { CreditCard, Banknote, ShieldCheck } from "lucide-react";

export default function PaymentsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isTurkish, setIsTurkish] = useState(true);

    return (
        <main className="min-h-screen bg-black">
            <Header isTurkish={isTurkish} setIsTurkish={setIsTurkish} />

            <section className="pt-48 pb-24 px-6">
                <div className="max-w-[1000px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-20 text-center"
                    >
                        <h1 className="text-6xl md:text-8xl font-display font-bold text-gradient mb-8 uppercase">
                            {isTurkish ? "ÖDEME YÖNTEMLERİ" : "PAYMENTS"}
                        </h1>
                        <p className="text-white/40 max-w-xl mx-auto font-sans text-xl leading-relaxed">
                            {isTurkish
                                ? "Güvenli alışveriş için sunduğumuz ödeme seçeneklerini buradan inceleyebilirsiniz."
                                : "You can review the payment options we offer for secure shopping here."}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-10 border border-white/5 bg-white/[0.01] rounded-3xl">
                            <div className="text-silver mb-8"><CreditCard size={32} /></div>
                            <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">{isTurkish ? "KREDİ KARTI" : "CREDIT CARD"}</h3>
                            <p className="text-white/40 font-sans leading-relaxed">
                                {isTurkish
                                    ? "Tüm banka ve kredi kartları ile hızlı ve güvenli ödeme. 12 aya varan taksit seçenekleri mevcuttur."
                                    : "Fast and secure payment with all debit and credit cards. Installment options up to 12 months are available."}
                            </p>
                        </div>
                        <div className="p-10 border border-white/5 bg-white/[0.01] rounded-3xl">
                            <div className="text-silver mb-8"><Banknote size={32} /></div>
                            <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">{isTurkish ? "HAVALE / EFT" : "BANK TRANSFER"}</h3>
                            <p className="text-white/40 font-sans leading-relaxed">
                                {isTurkish
                                    ? "Siparişinizi tamamladıktan sonra belirtilen hesaplarımıza havale/EFT ile ödeme yapabilirsiniz."
                                    : "After completing your order, you can pay by wire transfer/EFT to our specified accounts."}
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 bg-white/5 rounded-3xl p-12 border border-white/10 flex items-center gap-8 flex-col md:flex-row text-center md:text-left">
                        <div className="w-16 h-16 rounded-full bg-silver/10 flex items-center justify-center text-silver shrink-0">
                            <ShieldCheck size={32} />
                        </div>
                        <div>
                            <h4 className="text-xl font-display font-bold text-white mb-2 uppercase">{isTurkish ? "256-BIT SSL GÜVENLİĞİ" : "256-BIT SSL SECURITY"}</h4>
                            <p className="text-white/40 font-sans leading-relaxed">
                                {isTurkish
                                    ? "Verileriniz en üst düzey güvenlik protokolleri ile korunmaktadır. Ödeme bilgileriniz asla sistemlerimizde saklanmaz."
                                    : "Your data is protected with high-level security protocols. Your payment information is never stored in our systems."}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
