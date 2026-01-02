"use client";

import { motion, AnimatePresence } from "framer-motion";
import { User, Package, MapPin, LogOut, Settings, CreditCard, Bell, ChevronRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const ProfilePage = () => {
    const [isTurkish, setIsTurkish] = useState(true);
    const [activeTab, setActiveTab] = useState("orders");

    const t = {
        title: isTurkish ? "HESABIM" : "MY ACCOUNT",
        orders: isTurkish ? "Siparişlerim" : "My Orders",
        addresses: isTurkish ? "Adreslerim" : "My Addresses",
        payment: isTurkish ? "Ödeme Yöntemleri" : "Payment Methods",
        settings: isTurkish ? "Hesap Ayarları" : "Account Settings",
        logout: isTurkish ? "Çıkış Yap" : "Logout",
        noOrders: isTurkish ? "Henüz bir siparişiniz bulunmuyor." : "You don't have any orders yet.",
        personalInfo: isTurkish ? "Kişisel Bilgiler" : "Personal Info",
        name: isTurkish ? "Ad Soyad" : "Full Name",
        email: isTurkish ? "E-posta" : "Email",
        phone: isTurkish ? "Telefon" : "Phone",
        save: isTurkish ? "GÜNCELLE" : "UPDATE",
    };

    const mockOrders = [
        { id: "#SE-9821", date: "12 Dec 2025", total: "$249.00", status: isTurkish ? "Teslim Edildi" : "Delivered" },
        { id: "#SE-7742", date: "05 Nov 2025", total: "$189.00", status: isTurkish ? "İptal Edildi" : "Cancelled" },
    ];

    const menuItems = [
        { id: "orders", icon: Package, label: t.orders },
        { id: "info", icon: User, label: t.personalInfo },
        { id: "addresses", icon: MapPin, label: t.addresses },
        { id: "payment", icon: CreditCard, label: t.payment },
        { id: "settings", icon: Settings, label: t.settings },
    ];

    return (
        <main className="min-h-screen bg-black">
            <Header isTurkish={isTurkish} setIsTurkish={setIsTurkish} />

            <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row gap-16"
                    >
                        {/* Sidebar */}
                        <div className="w-full md:w-80 flex-shrink-0">
                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-3xl font-display font-bold text-white italic">
                                    JD
                                </div>
                                <div>
                                    <h1 className="text-xl font-display font-bold text-white uppercase tracking-widest italic leading-tight">John Doe</h1>
                                    <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold mt-1">Gümüş Üye</p>
                                </div>
                            </div>

                            <nav className="space-y-2">
                                {menuItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveTab(item.id)}
                                        className={`w-full flex items-center justify-between p-5 rounded-2xl transition-all group ${activeTab === item.id
                                            ? 'bg-white text-black'
                                            : 'text-white/40 hover:bg-white/[0.03] hover:text-white'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <item.icon size={20} />
                                            <span className="text-[10px] uppercase font-bold tracking-widest">{item.label}</span>
                                        </div>
                                        <ChevronRight size={14} className={activeTab === item.id ? 'text-black' : 'text-white/10 group-hover:text-white/40'} />
                                    </button>
                                ))}
                                <button className="w-full flex items-center gap-4 p-5 rounded-2xl text-red-500/60 hover:text-red-500 hover:bg-red-500/5 transition-all mt-4">
                                    <LogOut size={20} />
                                    <span className="text-[10px] uppercase font-bold tracking-widest">{t.logout}</span>
                                </button>
                            </nav>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-[40px] p-8 md:p-12">
                            <AnimatePresence mode="wait">
                                {activeTab === "orders" && (
                                    <motion.div
                                        key="orders"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-8"
                                    >
                                        <h2 className="text-2xl font-display font-bold text-white uppercase italic tracking-tighter mb-10">{t.orders}</h2>

                                        {mockOrders.length > 0 ? (
                                            <div className="space-y-4">
                                                {mockOrders.map((order) => (
                                                    <div key={order.id} className="bg-white/[0.03] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-white/10 transition-colors group">
                                                        <div className="flex items-center gap-6">
                                                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-silver">
                                                                <ShoppingBag size={24} />
                                                            </div>
                                                            <div>
                                                                <p className="text-white font-display font-bold text-lg tracking-widest">{order.id}</p>
                                                                <p className="text-[10px] text-white/30 uppercase tracking-widest mt-1 font-bold">{order.date}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-between md:justify-end gap-12">
                                                            <div>
                                                                <p className="text-white font-display font-bold text-lg text-right">{order.total}</p>
                                                                <p className="text-[9px] text-silver uppercase tracking-[0.2em] font-bold mt-1 text-right">{order.status}</p>
                                                            </div>
                                                            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all">
                                                                <ChevronRight size={18} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="text-center py-20">
                                                <Package size={48} className="text-white/5 mx-auto mb-6" />
                                                <p className="text-white/30 text-sm uppercase tracking-widest">{t.noOrders}</p>
                                            </div>
                                        )}
                                    </motion.div>
                                )}

                                {activeTab === "info" && (
                                    <motion.div
                                        key="info"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="max-w-xl"
                                    >
                                        <h2 className="text-2xl font-display font-bold text-white uppercase italic tracking-tighter mb-10">{t.personalInfo}</h2>
                                        <div className="space-y-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">{t.name}</label>
                                                <input type="text" defaultValue="John Doe" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl h-14 px-6 text-white text-sm focus:border-white/20 outline-none transition-colors" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">{t.email}</label>
                                                <input type="email" defaultValue="john@example.com" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl h-14 px-6 text-white text-sm focus:border-white/20 outline-none transition-colors" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">{t.phone}</label>
                                                <input type="tel" defaultValue="+90 555 123 4567" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl h-14 px-6 text-white text-sm focus:border-white/20 outline-none transition-colors" />
                                            </div>
                                            <button className="bg-white text-black px-12 h-14 rounded-2xl font-display font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-silver transition-all duration-300 mt-4">
                                                {t.save}
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default ProfilePage;
