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
    MoreVertical
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const AdminDashboard = () => {
    const [isTurkish, setIsTurkish] = useState(true);

    const stats = [
        { label: isTurkish ? "Toplam Satış" : "Total Sales", value: "$45,285.00", trend: "+12.5%", isUp: true },
        { label: isTurkish ? "Siparişler" : "Orders", value: "324", trend: "+8.2%", isUp: true },
        { label: isTurkish ? "Müşteriler" : "Customers", value: "1,240", trend: "-2.4%", isUp: false },
        { label: isTurkish ? "Dönüşüm" : "Conversion", value: "3.2%", trend: "+1.1%", isUp: true },
    ];

    const recentOrders = [
        { id: "#SE-9821", customer: "John Doe", product: "AeroGlide Futurist", amount: "$249.00", status: "Paid" },
        { id: "#SE-9820", customer: "Sarah Miller", product: "Urban X-Luxe", amount: "$189.00", status: "Processing" },
        { id: "#SE-9819", customer: "Michael Chen", product: "Classic Mahogany", amount: "$329.00", status: "Paid" },
        { id: "#SE-9818", customer: "Emma Wilson", product: "Phantom Black", amount: "$219.00", status: "Shipped" },
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white flex">
            {/* Sidebar */}
            <aside className="w-72 bg-black border-r border-white/5 flex flex-col p-8 fixed h-full z-50">
                <div className="flex items-center gap-3 mb-16 px-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black font-display font-black text-xl italic">SE</div>
                    <span className="font-display font-extrabold tracking-tighter text-2xl italic tracking-[-0.05em]">SOLEEDGE <span className="text-[10px] text-white/20 align-top ml-1 tracking-widest font-bold">ADMIN</span></span>
                </div>

                <nav className="flex-1 space-y-2">
                    {[
                        { icon: LayoutDashboard, label: isTurkish ? "Dashboard" : "Dashboard", active: true },
                        { icon: ShoppingBag, label: isTurkish ? "Ürünler" : "Products" },
                        { icon: Package, label: isTurkish ? "Siparişler" : "Orders" },
                        { icon: Users, label: isTurkish ? "Müşteriler" : "Customers" },
                        { icon: CreditCard, label: isTurkish ? "Ödemeler" : "Payments" },
                        { icon: TrendingUp, label: isTurkish ? "Analizler" : "Analytics" },
                    ].map((item, i) => (
                        <button
                            key={i}
                            className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all group ${item.active ? 'bg-white text-black' : 'text-white/40 hover:bg-white/[0.03] hover:text-white'}`}
                        >
                            <item.icon size={20} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="pt-8 border-t border-white/5 space-y-2">
                    <button className="w-full flex items-center gap-4 p-4 rounded-2xl text-white/40 hover:bg-white/[0.03] hover:text-white transition-all">
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
            <main className="flex-1 ml-72 p-12 lg:p-16">
                {/* Top Header */}
                <header className="flex justify-between items-center mb-16">
                    <div>
                        <h1 className="text-4xl font-display font-bold italic tracking-tighter uppercase mb-2">{isTurkish ? "Hoş Geldin, Admin" : "Welcome, Admin"}</h1>
                        <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">{isTurkish ? "İşte mağazanın bugünkü özeti" : "Here's what's happening today"}</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="relative group">
                            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-white transition-colors" />
                            <input
                                type="text"
                                placeholder={isTurkish ? "Ara..." : "Search..."}
                                className="bg-white/[0.03] border border-white/5 rounded-2xl h-12 pl-12 pr-6 text-sm outline-none focus:border-white/20 transition-all w-64"
                            />
                        </div>
                        <button className="relative w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all">
                            <Bell size={20} />
                            <span className="absolute top-3 right-3 w-2 h-2 bg-silver rounded-full animate-pulse border-2 border-black" />
                        </button>
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-white/10 to-white/5 border border-white/10 flex items-center justify-center font-display font-bold text-sm italic">AD</div>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/[0.02] border border-white/5 rounded-[32px] p-8 hover:border-white/10 transition-colors group"
                        >
                            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mb-4">{stat.label}</p>
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

                {/* Recent Orders */}
                <section className="bg-white/[0.02] border border-white/5 rounded-[40px] p-10">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-xl font-display font-bold italic tracking-tighter uppercase">{isTurkish ? "Son Siparişler" : "Recent Orders"}</h2>
                        <button className="text-[10px] text-white/40 hover:text-white uppercase tracking-[0.2em] font-bold flex items-center gap-2 transition-all group">
                            {isTurkish ? "TÜMÜNÜ GÖR" : "VIEW ALL"}
                            <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                    </div>

                    <div className="w-full overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="pb-6 text-[9px] uppercase tracking-widest text-white/20 font-bold">{isTurkish ? "SİPARİŞ NO" : "ORDER ID"}</th>
                                    <th className="pb-6 text-[9px] uppercase tracking-widest text-white/20 font-bold">{isTurkish ? "MÜŞTERİ" : "CUSTOMER"}</th>
                                    <th className="pb-6 text-[9px] uppercase tracking-widest text-white/20 font-bold">{isTurkish ? "ÜRÜN" : "PRODUCT"}</th>
                                    <th className="pb-6 text-[9px] uppercase tracking-widest text-white/20 font-bold">{isTurkish ? "TUTAR" : "AMOUNT"}</th>
                                    <th className="pb-6 text-[9px] uppercase tracking-widest text-white/20 font-bold">{isTurkish ? "DURUM" : "STATUS"}</th>
                                    <th className="pb-6"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {recentOrders.map((order, i) => (
                                    <tr key={i} className="group hover:bg-white/[0.01] transition-colors">
                                        <td className="py-6 font-display font-bold text-sm tracking-widest">{order.id}</td>
                                        <td className="py-6 text-sm text-white/60">{order.customer}</td>
                                        <td className="py-6 text-sm text-white/60">{order.product}</td>
                                        <td className="py-6 font-display font-bold text-sm">{order.amount}</td>
                                        <td className="py-6">
                                            <span className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest ${order.status === 'Paid' ? 'bg-green-500/10 text-green-500' :
                                                    order.status === 'Processing' ? 'bg-silver/10 text-silver' :
                                                        'bg-white/10 text-white/60'
                                                }`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="py-6 text-right">
                                            <button className="p-2 rounded-xl hover:bg-white/5 transition-all outline-none opacity-0 group-hover:opacity-100">
                                                <MoreVertical size={16} className="text-white/40" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AdminDashboard;
