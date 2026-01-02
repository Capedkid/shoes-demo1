"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface HeroProps {
    isTurkish: boolean;
}

const Hero = ({ isTurkish }: HeroProps) => {
    const content = isTurkish ? {
        tag: "Ayakkabının Geleceği",
        title: "BOŞLUĞA <br /> ADIM AT",
        description: "En yeni fütüristik koleksiyonumuzla benzersiz konforu ve performansı deneyimleyin. Minimalist tasarım, maksimum potansiyelle buluşuyor.",
        primaryBtn: "Koleksiyonu Keşfet",
        secondaryBtn: "Vizyonumuz",
        scroll: "Kaydır"
    } : {
        tag: "Future of Footwear",
        title: "STEP INTO <br /> THE VOID",
        description: "Experience unparalleled comfort and performance with our latest füturistic collection. Minimalist design meets maximum potential.",
        primaryBtn: "Explore Collection",
        secondaryBtn: "Our Vision",
        scroll: "Scroll"
    };

    return (
        <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 pb-10">
            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-5">
                <h2 className="text-[30vw] md:text-[20vw] font-display font-black tracking-tighter leading-none">
                    SOLEEDGE
                </h2>
            </div>

            {/* Hero Content */}
            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col gap-6 md:gap-8 max-w-xl order-2 lg:order-1 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-silver uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold">
                            {content.tag}
                        </span>
                        <h1
                            className="text-4xl sm:text-6xl md:text-8xl font-display font-bold leading-tight mt-4 text-gradient uppercase"
                            dangerouslySetInnerHTML={{ __html: content.title }}
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-white/60 text-base md:text-lg leading-relaxed font-sans max-w-md mx-auto lg:mx-0"
                    >
                        {content.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 justify-center lg:justify-start"
                    >
                        <Link href="/urunler" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-10 py-5 bg-white text-black font-display font-bold tracking-widest text-xs uppercase hover:bg-silver transition-all duration-300 flex items-center justify-center gap-3 group">
                                {content.primaryBtn}
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                        <Link href="/vizyon" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-10 py-5 border border-white/20 text-white font-display font-bold tracking-widest text-xs uppercase hover:border-white transition-all duration-300">
                                {content.secondaryBtn}
                            </button>
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    className="relative aspect-square w-full max-w-[400px] md:max-w-none mx-auto order-1 lg:order-2"
                >
                    {/* Glowing Background Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-[60px] md:blur-[100px]" />

                    <Image
                        src="/hero.png"
                        alt="SoleEdge Futurist Runner"
                        fill
                        className="object-contain drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)] animate-float"
                        priority
                    />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 hidden sm:flex"
            >
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">{content.scroll}</span>
                <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-white/30 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
