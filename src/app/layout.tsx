import type { Metadata } from "next";
import { Syne, Montserrat } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoleEdge | Premium Ayakkabı Deneyimi",
  description: "En yüksek kaliteye sahip ayakkabı koleksiyonumuzu keşfedin. Mükemmellik için tasarlandı, cesurlar için üretildi.",
};

import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${syne.variable} ${montserrat.variable} antialiased`}>
        <LanguageProvider>
          <ThemeProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
