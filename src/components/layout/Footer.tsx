"use client";

import { useLanguage } from "@/context/LanguageContext";
import {
    Instagram,
    Facebook,
    Twitter,
    Linkedin,
    MessageCircle,
    ArrowUpRight,
    Mail
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const { isTurkish } = useLanguage();
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: isTurkish ? "Alışveriş" : "Shopping",
            links: [
                { name: isTurkish ? "Yeni Gelenler" : "New Arrivals", href: "/urunler" },
                { name: isTurkish ? "Erkek Koleksiyonu" : "Men's Collection", href: "/koleksiyon/erkek" },
                { name: isTurkish ? "Kadın Koleksiyonu" : "Women's Collection", href: "/koleksiyon/kadin" },
                { name: isTurkish ? "Özel Tasarım" : "Custom Design", href: "#" },
                { name: isTurkish ? "Numaranı Bul" : "Find Your Size", href: "/numara-rehberi" },
            ],
        },
        {
            title: isTurkish ? "Kurumsal" : "Corporate",
            links: [
                { name: isTurkish ? "Hakkımızda" : "About Us", href: "/hakkimizda" },
                { name: isTurkish ? "Sürdürülebilirlik" : "Sustainability", href: "/surdurulebilirlik" },
                { name: isTurkish ? "Mağazalarımız" : "Our Stores", href: "/magazalarimiz" },
                { name: isTurkish ? "Kariyer" : "Careers", href: "/kariyer" },
                { name: isTurkish ? "İletişim" : "Contact", href: "/iletisim" },
            ],
        },
        {
            title: isTurkish ? "Destek" : "Support",
            links: [
                { name: isTurkish ? "Kargo Takibi" : "Order Tracking", href: "/destek/kargo-takibi" },
                { name: isTurkish ? "İade & Değişim" : "Returns & Exchanges", href: "/destek/iade-degisim" },
                { name: isTurkish ? "Sıkça Sorulan Sorular" : "FAQ", href: "/destek/sss" },
                { name: isTurkish ? "Ödeme Yöntemleri" : "Payment Methods", href: "/destek/odeme-yontemleri" },
                { name: isTurkish ? "Gizlilik Politikası" : "Privacy Policy", href: "/destek/gizlilik-politikasi" },
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
                            {isTurkish
                                ? "Sadece bir ayakkabı değil, bir yaşam tarzı. Geleceğin teknolojisini bugünün stiliyle buluşturuyoruz. Adımlarınızı bizimle güçlendirin."
                                : "Not just a shoe, but a lifestyle. We bring the technology of the future together with today's style. Empower your steps with us."}
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
                        &copy; {currentYear} SOLEEDGE Dynamics. {isTurkish ? "Tüm Hakları Saklıdır" : "All Rights Reserved"}.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-foreground/20 hover:text-foreground text-[10px] uppercase tracking-[0.2em] transition-colors">{isTurkish ? "KVKK" : "GDPR"}</Link>
                        <Link href="#" className="text-foreground/20 hover:text-foreground text-[10px] uppercase tracking-[0.2em] transition-colors">{isTurkish ? "Çerez Politikası" : "Cookie Policy"}</Link>
                        <Link href="#" className="text-foreground/20 hover:text-foreground text-[10px] uppercase tracking-[0.2em] transition-colors">{isTurkish ? "Kullanım Koşulları" : "Terms of Use"}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
