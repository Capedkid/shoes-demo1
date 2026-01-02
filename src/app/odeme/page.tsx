"use client";

import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { ArrowLeft, CreditCard, Truck, ShoppingBag, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
    const { cart, totalPrice, clearCart } = useCart();
    const [step, setStep] = useState(1);
    const [isCompleting, setIsCompleting] = useState(false);
    const router = useRouter();

    const isTurkish = true;

    const t = {
        title: isTurkish ? "ÖDEME" : "CHECKOUT",
        shipping: isTurkish ? "Teslimat Bilgileri" : "Shipping Information",
        payment: isTurkish ? "Ödeme Yöntemi" : "Payment Method",
        summary: isTurkish ? "Sipariş Özeti" : "Order Summary",
        firstName: isTurkish ? "Ad" : "First Name",
        lastName: isTurkish ? "Soyad" : "Last Name",
        address: isTurkish ? "Adres" : "Address",
        city: isTurkish ? "Şehir" : "City",
        phone: isTurkish ? "Telefon" : "Phone",
        next: isTurkish ? "SONRAKİ ADIM" : "NEXT STEP",
        complete: isTurkish ? "SİPARİŞİ TAMAMLA" : "COMPLETE ORDER",
        subtotal: isTurkish ? "Ara Toplam" : "Subtotal",
        shippingCost: isTurkish ? "Kargo" : "Shipping",
        free: isTurkish ? "Ücretsiz" : "Free",
        total: isTurkish ? "Toplam" : "Total",
        empty: isTurkish ? "Sepetiniz boş." : "Your cart is empty.",
    };

    const handleCompleteOrder = () => {
        setIsCompleting(true);
        clearCart?.();
        router.push("/siparis-basarili");
    };

    if (cart.length === 0 && !isCompleting) {
        return (
            <div className="min-h-screen bg-black pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">
                <ShoppingBag size={64} className="text-white/10 mb-8" />
                <h1 className="text-3xl font-display font-bold text-white mb-4 italic tracking-tighter">{t.empty}</h1>
                <Link href="/urunler" className="text-silver hover:text-white border-b border-silver/20 pb-1 transition-colors uppercase text-xs tracking-widest font-display font-bold">
                    {isTurkish ? "ÜRÜNLERE GÖZ AT" : "BROWSE PRODUCTS"}
                </Link>
            </div>
        );
    }

    if (isCompleting) {
        return <div className="min-h-screen bg-black" />; // Loading state or empty during redirect
    }

    return (
        <div className="min-h-screen bg-black pt-32 pb-20 px-6 sm:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <Link href="/" className="text-white/40 hover:text-white transition-colors">
                        <ArrowLeft size={20} />
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tighter italic uppercase">
                        {t.title}
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-7 space-y-12">
                        <div className="flex items-center gap-8 mb-12">
                            <div className={`flex items-center gap-3 ${step === 1 ? 'text-white' : 'text-white/20'}`}>
                                <span className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold ${step === 1 ? 'border-white bg-white text-black' : 'border-white/20'}`}>1</span>
                                <span className="text-[10px] uppercase tracking-widest font-bold font-display">{t.shipping}</span>
                            </div>
                            <div className="h-[1px] w-12 bg-white/10" />
                            <div className={`flex items-center gap-3 ${step === 2 ? 'text-white' : 'text-white/20'}`}>
                                <span className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold ${step === 2 ? 'border-white bg-white text-black' : 'border-white/20'}`}>2</span>
                                <span className="text-[10px] uppercase tracking-widest font-bold font-display">{t.payment}</span>
                            </div>
                        </div>

                        {step === 1 ? (
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">{t.firstName}</label>
                                        <input type="text" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl h-14 px-6 text-white text-sm focus:border-white/20 outline-none transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">{t.lastName}</label>
                                        <input type="text" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl h-14 px-6 text-white text-sm focus:border-white/20 outline-none transition-colors" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Email</label>
                                    <input type="email" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl h-14 px-6 text-white text-sm focus:border-white/20 outline-none transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">{t.address}</label>
                                    <textarea className="w-full bg-white/[0.03] border border-white/5 rounded-3xl p-6 text-white text-sm focus:border-white/20 outline-none transition-colors h-32 resize-none" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">{t.city}</label>
                                        <input type="text" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl h-14 px-6 text-white text-sm focus:border-white/20 outline-none transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">{t.phone}</label>
                                        <input type="tel" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl h-14 px-6 text-white text-sm focus:border-white/20 outline-none transition-colors" />
                                    </div>
                                </div>
                                <button onClick={() => setStep(2)} className="w-full bg-white text-black h-16 rounded-2xl font-display font-bold tracking-[0.2em] text-xs uppercase hover:bg-silver transition-all duration-300 shadow-xl">
                                    {t.next}
                                </button>
                            </motion.div>
                        ) : (
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                                <div className="space-y-4">
                                    <div className="p-6 bg-white/[0.03] border border-white/10 rounded-3xl flex items-center justify-between group cursor-pointer hover:border-white/30 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white">
                                                <CreditCard size={24} />
                                            </div>
                                            <div>
                                                <p className="text-white font-bold tracking-tight">{isTurkish ? "Kredi / Banka Kartı" : "Credit / Debit Card"}</p>
                                                <p className="text-[10px] text-white/40 uppercase tracking-widest">{isTurkish ? "Güvenli Ödeme" : "Secure Payment"}</p>
                                            </div>
                                        </div>
                                        <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                                            <div className="w-3 h-3 rounded-full bg-white" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-8 pt-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">{isTurkish ? "Kart Numarası" : "Card Number"}</label>
                                            <input type="text" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl h-14 px-6 text-white text-sm focus:border-white/20 outline-none transition-colors" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">MM/YY</label>
                                                <input type="text" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl h-14 px-4 text-white text-sm text-center focus:border-white/20 outline-none transition-colors" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">CVV</label>
                                                <input type="text" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl h-14 px-4 text-white text-sm text-center focus:border-white/20 outline-none transition-colors" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <button onClick={handleCompleteOrder} className="w-full bg-white text-black h-16 rounded-2xl font-display font-bold tracking-[0.2em] text-xs uppercase hover:bg-silver transition-all duration-300 shadow-xl">
                                        {t.complete}
                                    </button>
                                    <button onClick={() => setStep(1)} className="text-[10px] font-display font-bold text-white/40 hover:text-white uppercase tracking-widest transition-colors py-2">
                                        {isTurkish ? "GERİ DÖN" : "GO BACK"}
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    <div className="lg:col-span-1" />

                    <div className="lg:col-span-4">
                        <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-8 lg:p-10 sticky top-32">
                            <h2 className="text-xl font-display font-bold text-white tracking-widest uppercase mb-10 italic">{t.summary}</h2>
                            <div className="space-y-8 max-h-[400px] overflow-y-auto custom-scrollbar pr-4 -mr-4 mb-10">
                                {cart.map((item) => (
                                    <div key={`${item.id}-${item.size}`} className="flex gap-6 items-center">
                                        <div className="relative w-20 h-20 bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden flex-shrink-0">
                                            <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                                            <div className="absolute top-1 right-1 w-5 h-5 bg-white text-black rounded-full flex items-center justify-center text-[10px] font-bold">{item.quantity}</div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xs font-display font-bold text-white uppercase tracking-widest truncate max-w-[150px]">{item.name}</h3>
                                            <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Size: {item.size}</p>
                                            <p className="text-sm font-display font-bold text-silver mt-2">${parseFloat(item.price) * item.quantity}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-6 pt-10 border-t border-white/5">
                                <div className="flex justify-between items-center"><span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{t.subtotal}</span><span className="text-sm font-display font-bold text-white">${totalPrice}</span></div>
                                <div className="flex justify-between items-center"><span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{t.shippingCost}</span><span className="text-sm font-display font-bold text-silver">{t.free}</span></div>
                                <div className="h-[1px] w-full bg-white/5" />
                                <div className="flex justify-between items-end"><span className="text-xs text-white uppercase tracking-[0.2em] font-bold">{t.total}</span><span className="text-3xl font-display font-bold text-white">${totalPrice}</span></div>
                            </div>
                            <div className="mt-12 flex flex-col gap-6">
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5"><div className="text-silver"><Truck size={20} /></div><p className="text-[10px] text-white/60 uppercase tracking-widest leading-relaxed">{isTurkish ? "Aynı gün kargo ve ücretsiz iade desteği." : "Same day shipping & free returns."}</p></div>
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5"><div className="text-silver"><ShieldCheck size={20} /></div><p className="text-[10px] text-white/60 uppercase tracking-widest leading-relaxed">{isTurkish ? "SSL sertifikalı güvenli ödeme altyapısı." : "SSL certified secure payment infrastructure."}</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
