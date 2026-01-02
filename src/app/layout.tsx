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
  title: "SoleEdge | Premium Footwear Experience",
  description: "Discover a curated collection of ultra-premium footwear. Engineered for excellence, designed for the bold.",
};

import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "@/context/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${syne.variable} ${montserrat.variable} antialiased`}>
        <ThemeProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
