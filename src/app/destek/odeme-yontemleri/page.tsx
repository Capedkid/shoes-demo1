"use client";

import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { CreditCard, Banknote, ShieldCheck } from "lucide-react";

export default function PaymentsPage() {
    const { isTurkish } = useLanguage();

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />

            <section className="pt-48 pb-24 px-6">
                <div className="max-w-[1000px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-12 md:mb-20 text-center"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-gradient mb-6 md:mb-8 uppercase leading-tight">
                            {isTurkish ? "ÖDEME YÖNTEMLERİ" : "PAYMENTS"}
                        </h1>
                        <p className="text-foreground/40 max-w-xl mx-auto font-sans text-base md:text-xl leading-relaxed px-4">
                            {isTurkish
                                ? "Güvenli alışveriş için sunduğumuz ödeme seçeneklerini buradan inceleyebilirsiniz."
                                : "You can review the payment options we offer for secure shopping here."}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <div className="p-8 md:p-10 border border-border/5 bg-card rounded-3xl">
                            <div className="text-silver mb-6 md:mb-8"><CreditCard size={32} /></div>
                            <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4 uppercase">{isTurkish ? "KREDİ KARTI" : "CREDIT CARD"}</h3>
                            <p className="text-sm md:text-base text-foreground/40 font-sans leading-relaxed">
                                {isTurkish
                                    ? "Tüm banka ve kredi kartları ile hızlı ve güvenli ödeme. 12 aya varan taksit seçenekleri mevcuttur."
                                    : "Fast and secure payment with all debit and credit cards. Installment options up to 12 months are available."}
                            </p>
                        </div>
                        <div className="p-8 md:p-10 border border-border/5 bg-card rounded-3xl">
                            <div className="text-silver mb-6 md:mb-8"><Banknote size={32} /></div>
                            <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4 uppercase">{isTurkish ? "HAVALE / EFT" : "BANK TRANSFER"}</h3>
                            <p className="text-sm md:text-base text-foreground/40 font-sans leading-relaxed">
                                {isTurkish
                                    ? "Siparişinizi tamamladıktan sonra belirtilen hesaplarımıza havale/EFT ile ödeme yapabilirsiniz."
                                    : "After completing your order, you can pay by wire transfer/EFT to our specified accounts."}
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 md:mt-16 bg-foreground/5 rounded-3xl p-8 md:p-12 border border-border/10 flex items-center gap-6 md:gap-8 flex-col md:flex-row text-center md:text-left">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-silver/10 flex items-center justify-center text-silver shrink-0">
                            <ShieldCheck size={28} className="md:w-8 md:h-8" />
                        </div>
                        <div>
                            <h4 className="text-lg md:text-xl font-display font-bold text-foreground mb-2 uppercase">{isTurkish ? "256-BIT SSL GÜVENLİĞİ" : "256-BIT SSL SECURITY"}</h4>
                            <p className="text-sm md:text-base text-foreground/40 font-sans leading-relaxed">
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
