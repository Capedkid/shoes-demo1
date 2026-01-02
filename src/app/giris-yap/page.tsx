"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function LoginPage() {
    const [isTurkish, setIsTurkish] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const t = {
        title: isTurkish ? "HOŞ GELDİNİZ" : "WELCOME BACK",
        subtitle: isTurkish ? "Hesabınıza giriş yapın" : "Sign in to your account",
        email: isTurkish ? "E-POSTA" : "EMAIL ADDRESS",
        password: isTurkish ? "ŞİFRE" : "PASSWORD",
        forgot: isTurkish ? "Şifremi unuttum" : "Forgot password?",
        submit: isTurkish ? "GİRİŞ YAP" : "SIGN IN",
        noAccount: isTurkish ? "Hesabınız yok mu?" : "Don't have an account?",
        register: isTurkish ? "KAYIT OLUN" : "REGISTER NOW",
        back: isTurkish ? "GERİ DÖN" : "BACK TO SHOP"
    };

    return (
        <main className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-silver/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
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
                className="w-full max-w-[450px] relative z-10"
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

                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center ml-1">
                            <label className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{t.password}</label>
                            <button type="button" className="text-[10px] text-silver hover:text-white uppercase tracking-widest transition-colors font-bold">
                                {t.forgot}
                            </button>
                        </div>
                        <div className="relative group">
                            <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-white transition-colors" size={18} />
                            <input
                                type={showPassword ? "text" : "password"}
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

                    <button
                        type="submit"
                        className="mt-4 bg-white text-black h-16 rounded-2xl font-display font-bold tracking-[0.2em] text-xs uppercase hover:bg-silver transition-all duration-500 shadow-2xl flex items-center justify-center gap-3 group"
                    >
                        {t.submit}
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="text-center mt-12 pt-8 border-t border-white/5">
                        <p className="text-white/30 text-[9px] uppercase tracking-[0.3em] mb-6 font-bold">
                            {t.noAccount}
                        </p>
                        <Link href="/kayit-ol" className="inline-block">
                            <span className="text-white font-bold tracking-[0.2em] text-[10px] uppercase border-b border-white/20 hover:border-white transition-all cursor-pointer pb-1">
                                {t.register}
                            </span>
                        </Link>
                    </div>
                </form>
            </motion.div>
        </main>
    );
}
