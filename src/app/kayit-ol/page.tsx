"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Mail, Lock, User, Eye, EyeOff, ArrowRight, Check, X } from "lucide-react";

export default function RegisterPage() {
    const [isTurkish, setIsTurkish] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const t = {
        title: isTurkish ? "HESAP OLUŞTUR" : "CREATE ACCOUNT",
        subtitle: isTurkish ? "SoleEdge ailesine katılın" : "Join the SoleEdge family",
        name: isTurkish ? "AD SOYAD" : "FULL NAME",
        email: isTurkish ? "E-POSTA" : "EMAIL ADDRESS",
        password: isTurkish ? "ŞİFRE" : "PASSWORD",
        confirmPassword: isTurkish ? "ŞİFRE TEKRAR" : "CONFIRM PASSWORD",
        submit: isTurkish ? "KAYIT OL" : "CREATE ACCOUNT",
        hasAccount: isTurkish ? "Zaten hesabınız var mı?" : "Already have an account?",
        login: isTurkish ? "GİRİŞ YAPIN" : "LOG IN NOW",
        back: isTurkish ? "GERİ DÖN" : "BACK",
        rulesTitle: isTurkish ? "ŞİFRE KURALLARI" : "PASSWORD RULES",
    };

    const rules = [
        { id: 1, label: isTurkish ? "En az 8 karakter" : "At least 8 characters", met: password.length >= 8 },
        { id: 2, label: isTurkish ? "En az bir büyük harf" : "At least one uppercase", met: /[A-Z]/.test(password) },
        { id: 3, label: isTurkish ? "En az bir sayı" : "At least one number", met: /[0-9]/.test(password) },
        { id: 4, label: isTurkish ? "Şifreler eşleşiyor" : "Passwords match", met: password === confirmPassword && password.length > 0 },
    ];

    return (
        <main className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-silver/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
            </div>

            {/* Back Button */}
            <Link
                href="/"
                className="absolute top-8 left-8 md:top-12 md:left-12 flex items-center gap-3 text-white/40 hover:text-white transition-all group z-20"
            >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                    <ArrowLeft size={18} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{t.back}</span>
            </Link>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-[500px] relative z-10"
            >
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4 uppercase italic tracking-tighter">
                        {t.title}
                    </h1>
                    <p className="text-white/40 tracking-[0.3em] text-[10px] uppercase font-bold">
                        {t.subtitle}
                    </p>
                </div>

                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] text-white/40 uppercase tracking-widest ml-1 font-bold">{t.name}</label>
                            <div className="relative group">
                                <User className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-white transition-colors" size={18} />
                                <input
                                    type="text"
                                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl h-16 pl-14 pr-6 text-white focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all text-sm"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] text-white/40 uppercase tracking-widest ml-1 font-bold">{t.email}</label>
                            <div className="relative group">
                                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-white transition-colors" size={18} />
                                <input
                                    type="email"
                                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl h-16 pl-14 pr-6 text-white focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2 relative">
                            <label className="text-[10px] text-white/40 uppercase tracking-widest ml-1 font-bold">{t.password}</label>
                            <div className="relative group">
                                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-white transition-colors" size={18} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl h-16 pl-14 pr-14 text-white focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all text-sm"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] text-white/40 uppercase tracking-widest ml-1 font-bold">{t.confirmPassword}</label>
                            <div className="relative group">
                                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-white transition-colors" size={18} />
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl h-16 pl-14 pr-14 text-white focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all text-sm"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
                                >
                                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Password Rules */}
                    {password.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 space-y-3 overflow-hidden"
                        >
                            <p className="text-[9px] text-white/40 uppercase tracking-[0.2em] font-bold mb-4">{t.rulesTitle}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {rules.map((rule) => (
                                    <div key={rule.id} className="flex items-center gap-2">
                                        <div className={`w-4 h-4 rounded-full flex items-center justify-center ${rule.met ? 'bg-green-500/20 text-green-500' : 'bg-white/5 text-white/20'}`}>
                                            {rule.met ? <Check size={10} /> : <X size={10} />}
                                        </div>
                                        <span className={`text-[10px] uppercase tracking-wider font-bold ${rule.met ? 'text-white/60' : 'text-white/20'}`}>{rule.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    <button
                        type="submit"
                        className="mt-4 bg-white text-black h-16 rounded-2xl font-display font-bold tracking-[0.2em] text-xs uppercase hover:bg-silver transition-all duration-500 shadow-2xl flex items-center justify-center gap-3 group"
                    >
                        {t.submit}
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="text-center mt-12 pt-8 border-t border-white/5">
                        <p className="text-white/30 text-[9px] uppercase tracking-[0.3em] mb-6 font-bold">
                            {t.hasAccount}
                        </p>
                        <Link href="/giris-yap" className="inline-block">
                            <span className="text-white font-bold tracking-[0.2em] text-[10px] uppercase border-b border-white/20 hover:border-white transition-all cursor-pointer pb-1">
                                {t.login}
                            </span>
                        </Link>
                    </div>
                </form>
            </motion.div>
        </main>
    );
}
