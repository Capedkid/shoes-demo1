"use client";

import {
    Instagram,
    Facebook,
    Twitter,
    Linkedin,
    MessageCircle, // Using MessageCircle for WhatsApp
    ArrowUpRight,
    Mail
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Alışveriş",
            links: [
                { name: "Yeni Gelenler", href: "/urunler" },
                { name: "Erkek Koleksiyonu", href: "/koleksiyon/erkek" },
                { name: "Kadın Koleksiyonu", href: "/koleksiyon/kadin" },
                { name: "Özel Tasarım", href: "#" },
                { name: "Numaranı Bul", href: "/numara-rehberi" },
            ],
        },
        {
            title: "Kurumsal",
            links: [
                { name: "Hakkımızda", href: "/hakkimizda" },
                { name: "Sürdürülebilirlik", href: "/surdurulebilirlik" },
                { name: "Mağazalarımız", href: "/magazalarimiz" },
                { name: "Kariyer", href: "/kariyer" },
                { name: "İletişim", href: "/iletisim" },
            ],
        },
        {
            title: "Destek",
            links: [
                { name: "Kargo Takibi", href: "/destek/kargo-takibi" },
                { name: "İade & Değişim", href: "/destek/iade-degisim" },
                { name: "Sıkça Sorulan Sorular", href: "/destek/sss" },
                { name: "Ödeme Yöntemleri", href: "/destek/odeme-yontemleri" },
                { name: "Gizlilik Politikası", href: "/destek/gizlilik-politikasi" },
            ],
        },
    ];

    const socialLinks = [
        { icon: <MessageCircle size={20} />, href: "#", name: "WhatsApp" },
        { icon: <Instagram size={20} />, href: "#", name: "Instagram" },
        { icon: <Facebook size={20} />, href: "#", name: "Facebook" },
        { icon: <Twitter size={20} />, href: "#", name: "Twitter" },
        { icon: <Linkedin size={20} />, href: "#", name: "LinkedIn" },
        { icon: <Mail size={20} />, href: "mailto:info@soleedge.com", name: "Gmail" },
    ];

    return (
        <footer className="bg-background border-t border-border/5 pt-24 pb-12 px-6">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-8">
                            <span className="text-3xl font-display font-bold tracking-tighter text-foreground">
                                SOLEEDGE<span className="text-silver">.</span>
                            </span>
                        </Link>
                        <p className="text-foreground/40 text-sm leading-relaxed max-w-sm mb-8">
                            Sadece bir ayakkabı değil, bir yaşam tarzı. Geleceğin teknolojisini
                            bugünün stiliyle buluşturuyoruz. Adımlarınızı bizimle güçlendirin.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/40 hover:text-foreground hover:border-foreground transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {footerLinks.map((group) => (
                        <div key={group.title}>
                            <h4 className="text-foreground font-display text-sm font-semibold uppercase tracking-widest mb-8">
                                {group.title}
                            </h4>
                            <ul className="flex flex-col gap-4">
                                {group.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-foreground/40 hover:text-foreground text-sm transition-colors duration-300 flex items-center group"
                                        >
                                            {link.name}
                                            <ArrowUpRight className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 ml-1" size={14} />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-border/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-foreground/20 text-[10px] uppercase tracking-[0.2em]">
                        &copy; {currentYear} SOLEEDGE Dynamics. Tüm Hakları Saklıdır.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-foreground/20 hover:text-foreground text-[10px] uppercase tracking-[0.2em] transition-colors">KVKK</Link>
                        <Link href="#" className="text-foreground/20 hover:text-foreground text-[10px] uppercase tracking-[0.2em] transition-colors">Çerez Politikası</Link>
                        <Link href="#" className="text-foreground/20 hover:text-foreground text-[10px] uppercase tracking-[0.2em] transition-colors">Kullanım Koşulları</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
