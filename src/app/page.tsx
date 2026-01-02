"use client";

import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import ProductCard from "@/components/ui/ProductCard";
import Footer from "@/components/layout/Footer";

const featuredProducts = (isTurkish: boolean) => [
  {
    id: 1,
    name: isTurkish ? "AeroGlide Fütürist" : "AeroGlide Futurist",
    category: isTurkish ? "Koşu" : "Running",
    price: "249",
    image: "/hero.png",
  },
  {
    id: 2,
    name: isTurkish ? "Urban X-Lüks" : "Urban X-Luxe",
    category: isTurkish ? "Sokak Modası" : "Streetwear",
    price: "189",
    image: "/sneaker-urban.png",
  },
  {
    id: 3,
    name: isTurkish ? "Klasik Maun" : "Classic Mahogany",
    category: isTurkish ? "Resmi" : "Formal",
    price: "329",
    image: "/classic-leather.png",
  },
];

export default function Home() {
  const { isTurkish } = useLanguage();

  const content = isTurkish ? {
    tag: "Özel Seçki",
    title: "OLAĞANÜSTÜ <br /> İŞÇİLİK",
    description: "SoleEdge'deki her çift, kalite, inovasyon ve mükemmel adım arayışımıza olan bağlılığımızın bir kanıtıdır."
  } : {
    tag: "Curated Selection",
    title: "EXCEPTIONAL <br /> CRAFTSMANSHIP",
    description: "Every pair at SoleEdge is a testament to our commitment to quality, innovation, and the pursuit of the perfect step."
  };

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      {/* Featured Products Section */}
      <section id="collections" className="py-32 px-6 bg-background">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-silver uppercase tracking-[0.3em] text-[10px] font-semibold">
                {content.tag}
              </span>
              <h2
                className="text-4xl md:text-6xl font-display font-bold mt-4 text-gradient"
                dangerouslySetInnerHTML={{ __html: content.title }}
              />
            </div>
            <p className="max-w-xs text-foreground/40 text-sm leading-relaxed">
              {content.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {featuredProducts(isTurkish).map((product, index) => (
              <ProductCard
                key={product.id}
                {...product}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
