"use client";

import { motion, AnimatePresence } from "framer-motion";
import { User, Package, MapPin, LogOut, Settings, CreditCard, Bell, ChevronRight, ShoppingBag, Heart } from "lucide-react";
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
        noFavs: isTurkish ? "Henüz favori ürününüz bulunmuyor." : "You don't have any favorite products yet.",
        personalInfo: isTurkish ? "Kişisel Bilgiler" : "Personal Info",
        favorites: isTurkish ? "Favorilerim" : "My Favorites",
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
        { id: "favorites", icon: Heart, label: t.favorites },
        { id: "info", icon: User, label: t.personalInfo },
        { id: "addresses", icon: MapPin, label: t.addresses },
        { id: "payment", icon: CreditCard, label: t.payment },
        { id: "settings", icon: Settings, label: t.settings },
    ];

    return (
        <main className="min-h-screen bg-background text-foreground">
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
                                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-foreground/10 to-foreground/5 border border-border/10 flex items-center justify-center text-3xl font-display font-bold text-foreground italic">
                                    JD
                                </div>
                                <div>
                                    <h1 className="text-xl font-display font-bold text-foreground uppercase tracking-widest italic leading-tight">Ahmet Yılmaz</h1>
                                    <p className="text-[10px] text-foreground/40 uppercase tracking-[0.2em] font-bold mt-1">Gümüş Üyelik</p>
                                </div>
                            </div>

                            <nav className="space-y-2">
                                {menuItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveTab(item.id)}
                                        className={`w-full flex items-center justify-between p-5 rounded-2xl transition-all group ${activeTab === item.id
                                            ? 'bg-foreground text-background shadow-lg'
                                            : 'text-foreground/40 hover:bg-foreground/[0.03] hover:text-foreground'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <item.icon size={20} />
                                            <span className="text-[10px] uppercase font-bold tracking-widest">{item.label}</span>
                                        </div>
                                        <ChevronRight size={14} className={activeTab === item.id ? 'text-background' : 'text-foreground/10 group-hover:text-foreground/40'} />
                                    </button>
                                ))}
                                <button className="w-full flex items-center gap-4 p-5 rounded-2xl text-red-500/60 hover:text-red-500 hover:bg-red-500/5 transition-all mt-4">
                                    <LogOut size={20} />
                                    <span className="text-[10px] uppercase font-bold tracking-widest">{t.logout}</span>
                                </button>
                            </nav>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 bg-foreground/[0.02] border border-border/5 rounded-[40px] p-8 md:p-12">
                            <AnimatePresence mode="wait">
                                {activeTab === "orders" && (
                                    <motion.div
                                        key="orders"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-8"
                                    >
                                        <h2 className="text-2xl font-display font-bold text-foreground uppercase italic tracking-tighter mb-10">{t.orders}</h2>

                                        {mockOrders.length > 0 ? (
                                            <div className="space-y-4">
                                                {mockOrders.map((order) => (
                                                    <div key={order.id} className="bg-foreground/[0.03] border border-border/5 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-border/10 transition-colors group">
                                                        <div className="flex items-center gap-6">
                                                            <div className="w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center text-silver">
                                                                <ShoppingBag size={24} />
                                                            </div>
                                                            <div>
                                                                <p className="text-foreground font-display font-bold text-lg tracking-widest">{order.id}</p>
                                                                <p className="text-[10px] text-foreground/30 uppercase tracking-widest mt-1 font-bold">{order.date}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-between md:justify-end gap-12">
                                                            <div>
                                                                <p className="text-foreground font-display font-bold text-lg text-right">{order.total}</p>
                                                                <p className="text-[9px] text-silver uppercase tracking-[0.2em] font-bold mt-1 text-right">{order.status}</p>
                                                            </div>
                                                            <button className="w-12 h-12 rounded-full border border-border/10 flex items-center justify-center text-foreground/40 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all">
                                                                <ChevronRight size={18} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="text-center py-20">
                                                <Package size={48} className="text-foreground/5 mx-auto mb-6" />
                                                <p className="text-foreground/30 text-sm uppercase tracking-widest">{t.noOrders}</p>
                                            </div>
                                        )}
                                    </motion.div>
                                )}

                                {activeTab === "favorites" && (
                                    <motion.div
                                        key="favorites"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-8"
                                    >
                                        <h2 className="text-2xl font-display font-bold text-foreground uppercase italic tracking-tighter mb-10">{t.favorites}</h2>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                            {[
                                                { id: 1, name: "AeroGlide Fütürist", price: "249", image: "/hero.png" },
                                                { id: 2, name: "Urban X-Lüks", price: "189", image: "/sneaker-urban.png" }
                                            ].map((product) => (
                                                <div key={product.id} className="bg-foreground/[0.03] border border-border/5 rounded-3xl p-6 hover:border-border/10 transition-all group relative">
                                                    <button className="absolute top-4 right-4 z-10 text-red-500">
                                                        <Heart size={20} fill="currentColor" />
                                                    </button>
                                                    <div className="aspect-square relative mb-6">
                                                        <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                                                    </div>
                                                    <div className="flex justify-between items-end">
                                                        <div>
                                                            <h3 className="text-sm font-display font-bold uppercase tracking-widest">{product.name}</h3>
                                                            <p className="text-lg font-display font-bold mt-1">₺{product.price}</p>
                                                        </div>
                                                        <Link href={`/urunler/${product.id}`} className="text-[10px] font-bold uppercase tracking-widest text-silver hover:text-foreground transition-colors">
                                                            İNCELE
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
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
                                        <h2 className="text-2xl font-display font-bold text-foreground uppercase italic tracking-tighter mb-10">{t.personalInfo}</h2>
                                        <div className="space-y-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold ml-1">{t.name}</label>
                                                <input type="text" defaultValue="Ahmet Yılmaz" className="w-full bg-foreground/[0.03] border border-border/5 rounded-2xl h-14 px-6 text-foreground text-sm focus:border-foreground/20 outline-none transition-colors" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold ml-1">{t.email}</label>
                                                <input type="email" defaultValue="ahmet@e-posta.com" className="w-full bg-foreground/[0.03] border border-border/5 rounded-2xl h-14 px-6 text-foreground text-sm focus:border-foreground/20 outline-none transition-colors" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold ml-1">{t.phone}</label>
                                                <input type="tel" defaultValue="+90 555 123 45 67" className="w-full bg-foreground/[0.03] border border-border/5 rounded-2xl h-14 px-6 text-foreground text-sm focus:border-foreground/20 outline-none transition-colors" />
                                            </div>
                                            <button className="bg-foreground text-background px-12 h-14 rounded-2xl font-display font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-silver transition-all duration-300 mt-4">
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
