"use client";

import { motion } from "framer-motion";
import {
    LayoutDashboard,
    ShoppingBag,
    Users,
    CreditCard,
    TrendingUp,
    Package,
    Settings,
    LogOut,
    Search,
    Bell,
    ExternalLink,
    ArrowUpRight,
    ArrowDownRight,
    MoreVertical,
    X
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState("dashboard");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { isTurkish } = useLanguage();
    const { theme } = useTheme();

    const stats = [
        { label: isTurkish ? "Toplam Satış" : "Total Sales", value: "₺45.285,00", trend: "+12.5%", isUp: true },
        { label: isTurkish ? "Siparişler" : "Orders", value: "324", trend: "+8.2%", isUp: true },
        { label: isTurkish ? "Müşteriler" : "Customers", value: "1.240", trend: "-2.4%", isUp: false },
        { label: isTurkish ? "Dönüşüm" : "Conversion", value: "%3.2", trend: "+1.1%", isUp: true },
    ];

    const recentOrders = [
        { id: "#SE-9821", customer: "Ahmet Yılmaz", product: "AeroGlide Fütürist", amount: "₺249,00", status: isTurkish ? "Ödendi" : "Paid", date: "02.01.2026" },
        { id: "#SE-9820", customer: "Zeynep Kaya", product: "Urban X-Lüks", amount: "₺189,00", status: isTurkish ? "Hazırlanıyor" : "Processing", date: "02.01.2026" },
        { id: "#SE-9819", customer: "Mehmet Demir", product: "Klasik Maun", amount: "₺329,00", status: isTurkish ? "Ödendi" : "Paid", date: "01.01.2026" },
        { id: "#SE-9818", customer: "Selin Şahin", product: "Phantom Siyah", amount: "₺219,00", status: isTurkish ? "Kargolandı" : "Shipped", date: "01.01.2026" },
        { id: "#SE-9817", customer: "Can Özkan", product: "Gece Mavisi", amount: "₺299,00", status: isTurkish ? "Ödendi" : "Paid", date: "31.12.2025" },
    ];

    const products = [
        { id: 1, name: "AeroGlide Fütürist", category: "Koşu", price: "249", stock: 45, image: "/hero.png" },
        { id: 2, name: "Urban X-Lüks", category: "Sokak Modası", price: "189", stock: 12, image: "/sneaker-urban.png" },
        { id: 3, name: "Klasik Maun", category: "Klasik", price: "329", stock: 8, image: "/classic-leather.png" },
        { id: 4, name: "Phantom Siyah", category: "Koşu", price: "219", stock: 24, image: "/hero.png" },
    ];

    const customers = [
        { name: "Ahmet Yılmaz", email: "ahmet@e-posta.com", joinDate: "15.05.2025", totalSpend: "₺12.450" },
        { name: "Zeynep Kaya", email: "zeynep@e-posta.com", joinDate: "20.06.2025", totalSpend: "₺8.120" },
        { name: "Mehmet Demir", email: "mehmet@e-posta.com", joinDate: "02.08.2025", totalSpend: "₺5.600" },
        { name: "Selin Şahin", email: "selin@e-posta.com", joinDate: "12.09.2025", totalSpend: "₺2.340" },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground flex">
            {/* Sidebar Toggle - Mobile Only */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-[60] h-20 bg-background/80 backdrop-blur-md border-b border-border/10 flex items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center text-background font-display font-black text-sm italic">SE</div>
                    <span className="font-display font-extrabold tracking-tighter text-sm italic tracking-[-0.05em]">SOLEEDGE <span className="text-[8px] opacity-20 align-top ml-1">ADMIN</span></span>
                </div>
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-xl font-display font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-foreground/20"
                >
                    {isSidebarOpen ? <X size={16} /> : <LayoutDashboard size={16} />}
                    <span>{isTurkish ? "MENÜ" : "MENU"}</span>
                </button>
            </div>

            {/* Sidebar */}
            <aside className={`w-72 bg-card border-r border-border/5 flex flex-col p-8 fixed h-full z-50 transition-transform duration-500 lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center gap-3 mb-16 px-4">
                    <div className="w-10 h-10 bg-foreground rounded-xl flex items-center justify-center text-background font-display font-black text-xl italic">SE</div>
                    <span className="font-display font-extrabold tracking-tighter text-2xl italic tracking-[-0.05em]">SOLEEDGE <span className="text-[10px] text-foreground/20 align-top ml-1 tracking-widest font-bold">ADMIN</span></span>
                </div>

                <nav className="flex-1 space-y-2">
                    {[
                        { id: "dashboard", icon: LayoutDashboard, label: isTurkish ? "Panel" : "Dashboard" },
                        { id: "products", icon: ShoppingBag, label: isTurkish ? "Ürünler" : "Products" },
                        { id: "orders", icon: Package, label: isTurkish ? "Siparişler" : "Orders" },
                        { id: "customers", icon: Users, label: isTurkish ? "Müşteriler" : "Customers" },
                        { id: "payments", icon: CreditCard, label: isTurkish ? "Ödemeler" : "Payments" },
                        { id: "analytics", icon: TrendingUp, label: isTurkish ? "Analizler" : "Analytics" },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => {
                                setActiveTab(item.id);
                                setIsSidebarOpen(false);
                            }}
                            className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all group ${activeTab === item.id ? 'bg-foreground text-background shadow-lg' : 'text-foreground/40 hover:bg-foreground/[0.03] hover:text-foreground'}`}
                        >
                            <item.icon size={20} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="pt-8 border-t border-border/5 space-y-2">
                    <button className="w-full flex items-center gap-4 p-4 rounded-2xl text-foreground/40 hover:bg-foreground/[0.03] hover:text-foreground transition-all">
                        <Settings size={20} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">{isTurkish ? "Ayarlar" : "Settings"}</span>
                    </button>
                    <button className="w-full flex items-center gap-4 p-4 rounded-2xl text-red-500/60 hover:text-red-500 hover:bg-red-500/5 transition-all">
                        <LogOut size={20} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">{isTurkish ? "Çıkış" : "Logout"}</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 lg:ml-72 p-6 md:p-12 lg:p-16 w-full overflow-hidden pt-28 lg:pt-16">
                {/* Top Header */}
                <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16 px-2">
                    <div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold italic tracking-tighter uppercase mb-2 leading-none">{isTurkish ? "Hoş Geldin, Admin" : "Welcome, Admin"}</h1>
                        <p className="text-[9px] md:text-[10px] text-foreground/30 uppercase tracking-[0.3em] font-bold">{isTurkish ? "İşte mağazanın bugünkü özeti" : "Here's what's happening today"}</p>
                    </div>
                    <div className="flex items-center gap-3 md:gap-6">
                        <div className="hidden sm:block relative group">
                            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/20 group-focus-within:text-foreground transition-colors" />
                            <input
                                type="text"
                                placeholder={isTurkish ? "Ara..." : "Search..."}
                                className="bg-foreground/[0.03] border border-border/5 rounded-2xl h-12 pl-12 pr-6 text-sm outline-none focus:border-border/20 transition-all w-48 md:w-64 text-foreground"
                            />
                        </div>
                        <div className="flex items-center gap-4 ml-auto lg:ml-0">
                            <button className="relative w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-foreground/[0.03] border border-border/5 flex items-center justify-center text-foreground/40 hover:text-foreground hover:border-border/20 transition-all">
                                <Bell size={20} />
                                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-silver rounded-full animate-pulse border-2 border-background" />
                            </button>
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-tr from-foreground/10 to-foreground/5 border border-border/10 flex items-center justify-center font-display font-bold text-sm italic text-foreground shadow-sm">AD</div>
                        </div>
                    </div>
                </header>

                {/* Dynamic Content Sections */}
                <div className="space-y-12">
                    {activeTab === "dashboard" && (
                        <>
                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                                {stats.map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-card border border-border/5 rounded-[32px] p-8 hover:border-border/10 transition-colors group"
                                    >
                                        <p className="text-[10px] text-foreground/30 uppercase tracking-[0.2em] font-bold mb-4">{stat.label}</p>
                                        <div className="flex items-end justify-between">
                                            <h3 className="text-3xl font-display font-bold italic">{stat.value}</h3>
                                            <div className={`flex items-center gap-1 text-[10px] font-bold ${stat.isUp ? 'text-green-500' : 'text-red-500'}`}>
                                                {stat.isUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                                                {stat.trend}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Recent Orders List */}
                            <section className="bg-card border border-border/5 rounded-[32px] md:rounded-[40px] p-6 md:p-10">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 md:mb-10 gap-4">
                                    <h2 className="text-xl font-display font-bold italic tracking-tighter uppercase">{isTurkish ? "Son Siparişler" : "Recent Orders"}</h2>
                                    <button onClick={() => setActiveTab("orders")} className="text-[10px] text-foreground/40 hover:text-foreground uppercase tracking-[0.2em] font-bold flex items-center gap-2 transition-all group self-start sm:self-auto">
                                        {isTurkish ? "TÜMÜNÜ GÖR" : "VIEW ALL"}
                                        <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </button>
                                </div>
                                <div className="w-full overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="border-b border-border/5">
                                                <th className="pb-6 text-[9px] uppercase tracking-widest text-foreground/20 font-bold">{isTurkish ? "SİPARİŞ NO" : "ORDER ID"}</th>
                                                <th className="pb-6 text-[9px] uppercase tracking-widest text-foreground/20 font-bold">{isTurkish ? "MÜŞTERİ" : "CUSTOMER"}</th>
                                                <th className="pb-6 text-[9px] uppercase tracking-widest text-foreground/20 font-bold">{isTurkish ? "ÜRÜN" : "PRODUCT"}</th>
                                                <th className="pb-6 text-[9px] uppercase tracking-widest text-foreground/20 font-bold">{isTurkish ? "TUTAR" : "AMOUNT"}</th>
                                                <th className="pb-6 text-[9px] uppercase tracking-widest text-foreground/20 font-bold">{isTurkish ? "DURUM" : "STATUS"}</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border/5">
                                            {recentOrders.slice(0, 4).map((order, i) => (
                                                <tr key={i} className="group hover:bg-foreground/[0.01] transition-colors">
                                                    <td className="py-6 font-display font-bold text-sm tracking-widest">{order.id}</td>
                                                    <td className="py-6 text-sm text-foreground/60">{order.customer}</td>
                                                    <td className="py-6 text-sm text-foreground/60">{order.product}</td>
                                                    <td className="py-6 font-display font-bold text-sm">{order.amount}</td>
                                                    <td className="py-6">
                                                        <span className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest ${order.status === 'Ödendi' || order.status === 'Paid' ? 'bg-green-500/10 text-green-500' :
                                                            order.status === 'Hazırlanıyor' || order.status === 'Processing' ? 'bg-silver/10 text-silver' :
                                                                'bg-foreground/10 text-foreground/60'
                                                            }`}>
                                                            {order.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </>
                    )}

                    {activeTab === "products" && (
                        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card border border-border/5 rounded-[40px] p-10">
                            <div className="flex items-center justify-between mb-10">
                                <h2 className="text-xl font-display font-bold italic tracking-tighter uppercase">{isTurkish ? "Ürün Yönetimi" : "Product Management"}</h2>
                                <button className="bg-foreground text-background px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-silver transition-all">
                                    {isTurkish ? "YENİ ÜRÜN EKLE" : "ADD NEW PRODUCT"}
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {products.map((product) => (
                                    <div key={product.id} className="bg-foreground/[0.03] border border-border/5 rounded-3xl p-6 hover:border-border/10 transition-colors">
                                        <div className="aspect-square relative mb-6 bg-muted p-4 rounded-2xl flex items-center justify-center">
                                            <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                                        </div>
                                        <h3 className="text-sm font-display font-bold uppercase tracking-widest mb-1">{product.name}</h3>
                                        <p className="text-[10px] text-foreground/30 uppercase tracking-widest mb-4">{product.category}</p>
                                        <div className="flex justify-between items-end">
                                            <span className="font-display font-bold text-lg">₺{product.price}</span>
                                            <div className="text-right">
                                                <p className="text-[9px] text-foreground/30 uppercase tracking-widest mb-1">{isTurkish ? "STOK" : "STOCK"}</p>
                                                <p className={`text-[10px] font-bold ${product.stock < 10 ? 'text-red-500' : 'text-green-500'}`}>{product.stock} Adet</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    )}

                    {activeTab === "orders" && (
                        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card border border-border/5 rounded-[40px] p-10">
                            <h2 className="text-xl font-display font-bold italic tracking-tighter uppercase mb-10">{isTurkish ? "Tüm Siparişler" : "All Orders"}</h2>
                            <div className="w-full overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-border/5">
                                            <th className="pb-6 text-[9px] uppercase tracking-widest text-foreground/20 font-bold">{isTurkish ? "SİPARİŞ NO" : "ORDER ID"}</th>
                                            <th className="pb-6 text-[9px] uppercase tracking-widest text-foreground/20 font-bold">{isTurkish ? "MÜŞTERİ" : "CUSTOMER"}</th>
                                            <th className="pb-6 text-[9px] uppercase tracking-widest text-foreground/20 font-bold">{isTurkish ? "TARİH" : "DATE"}</th>
                                            <th className="pb-6 text-[9px] uppercase tracking-widest text-foreground/20 font-bold">{isTurkish ? "TUTAR" : "AMOUNT"}</th>
                                            <th className="pb-6 text-[9px] uppercase tracking-widest text-foreground/20 font-bold">{isTurkish ? "DURUM" : "STATUS"}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border/5">
                                        {recentOrders.map((order, i) => (
                                            <tr key={i} className="group hover:bg-foreground/[0.01] transition-colors">
                                                <td className="py-6 font-display font-bold text-sm tracking-widest">{order.id}</td>
                                                <td className="py-6 text-sm text-foreground/60">{order.customer}</td>
                                                <td className="py-6 text-sm text-foreground/60">{order.date}</td>
                                                <td className="py-6 font-display font-bold text-sm">{order.amount}</td>
                                                <td className="py-6">
                                                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest ${order.status === 'Ödendi' || order.status === 'Paid' ? 'bg-green-500/10 text-green-500' :
                                                        order.status === 'Hazırlanıyor' || order.status === 'Processing' ? 'bg-silver/10 text-silver' :
                                                            'bg-foreground/10 text-foreground/60'
                                                        }`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.section>
                    )}

                    {activeTab === "customers" && (
                        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card border border-border/5 rounded-[40px] p-10">
                            <h2 className="text-xl font-display font-bold italic tracking-tighter uppercase mb-10">{isTurkish ? "Müşteri Listesi" : "Customer List"}</h2>
                            <div className="w-full overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-border/5">
                                            <th className="pb-6 text-[9px] uppercase tracking-widest text-foreground/20 font-bold">{isTurkish ? "AD SOYAD" : "FULL NAME"}</th>
                                            <th className="pb-6 text-[9px] uppercase tracking-widest text-foreground/20 font-bold">{isTurkish ? "E-POSTA" : "EMAIL"}</th>
                                            <th className="pb-6 text-[9px] uppercase tracking-widest text-foreground/20 font-bold">{isTurkish ? "KAYIT TARİHİ" : "JOIN DATE"}</th>
                                            <th className="pb-6 text-[9px] uppercase tracking-widest text-foreground/20 font-bold">{isTurkish ? "TOPLAM HARCAMA" : "TOTAL SPEND"}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border/5">
                                        {customers.map((customer, i) => (
                                            <tr key={i} className="group hover:bg-foreground/[0.01] transition-colors">
                                                <td className="py-6 font-display font-bold text-sm italic">{customer.name}</td>
                                                <td className="py-6 text-sm text-foreground/60">{customer.email}</td>
                                                <td className="py-6 text-sm text-foreground/60">{customer.joinDate}</td>
                                                <td className="py-6 font-display font-bold text-sm tracking-widest">{customer.totalSpend}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.section>
                    )}

                    {activeTab === "analytics" && (
                        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-card border border-border/5 rounded-[40px] p-10">
                                <h2 className="text-xl font-display font-bold italic tracking-tighter uppercase mb-10">{isTurkish ? "Satış Performansı" : "Sales Performance"}</h2>
                                <div className="space-y-8">
                                    {[
                                        { label: "Ocak", value: 85 },
                                        { label: "Şubat", value: 65 },
                                        { label: "Mart", value: 95 },
                                        { label: "Nisan", value: 75 },
                                    ].map((item, i) => (
                                        <div key={i} className="space-y-3">
                                            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                                                <span className="text-foreground/40">{item.label}</span>
                                                <span>₺{item.value * 1280}</span>
                                            </div>
                                            <div className="h-2 w-full bg-foreground/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${item.value}%` }}
                                                    transition={{ duration: 1, delay: i * 0.1 }}
                                                    className="h-full bg-foreground rounded-full"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-card border border-border/5 rounded-[40px] p-10">
                                <h2 className="text-xl font-display font-bold italic tracking-tighter uppercase mb-10">{isTurkish ? "Kategori Dağılımı" : "Category Distribution"}</h2>
                                <div className="space-y-8">
                                    {[
                                        { label: "Koşu", value: 45, color: "bg-silver" },
                                        { label: "Sokak Modası", value: 35, color: "bg-foreground" },
                                        { label: "Klasik", value: 20, color: "bg-foreground/20" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-6">
                                            <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center text-[10px] font-bold text-background`}>
                                                %{item.value}
                                            </div>
                                            <div>
                                                <h4 className="text-xs font-bold uppercase tracking-widest mb-1">{item.label}</h4>
                                                <p className="text-[10px] text-foreground/30 uppercase tracking-widest font-bold">{isTurkish ? "Pazar Payı" : "Market Share"}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.section>
                    )}

                    {activeTab === "payments" && (
                        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card border border-border/5 rounded-[40px] p-10 text-center py-40">
                            <CreditCard size={64} className="text-foreground/5 mx-auto mb-8" />
                            <h2 className="text-2xl font-display font-bold italic tracking-tighter uppercase mb-4">{isTurkish ? "Ödeme Kayıtları" : "Payment Logs"}</h2>
                            <p className="text-[10px] text-foreground/30 uppercase tracking-[0.3em] font-bold">{isTurkish ? "Bu bölüm yakında aktif edilecek" : "This section will be active soon"}</p>
                        </motion.section>
                    )}
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
