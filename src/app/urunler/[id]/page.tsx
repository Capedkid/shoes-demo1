"use client";

import React, { useState, use } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Plus, Minus, ShoppingCart, Heart, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

interface Product {
    name: string;
    price: string;
    image: string;
    description: string;
}

const products = (isTurkish: boolean): Record<string, Product> => ({
    "1": { name: isTurkish ? "AeroGlide Fütürist" : "AeroGlide Futurist", price: "249", image: "/hero.png", description: isTurkish ? "Hız ve stil için tasarlandı. AeroGlide, ultra hafif yapısı ve üstün enerji geri dönüşümü sağlayan taban teknolojisi ile sınırları zorluyor." : "Engineered for speed and style. AeroGlide pushes boundaries with its ultra-lightweight build and superior energy return sole technology." },
    "2": { name: isTurkish ? "Urban X-Lüks" : "Urban X-Luxe", price: "189", image: "/sneaker-urban.png", description: isTurkish ? "Şehir hayatının dinamizmine uyum sağlayın. Premium materyaller ve dikkat çekici tasarımıyla Urban X-Luxe, sokak modasının zirvesini temsil ediyor." : "Adapt to the dynamism of city life. With premium materials and striking design, Urban X-Luxe represents the pinnacle of streetwear." },
    "3": { name: isTurkish ? "Klasik Maun" : "Classic Mahogany", price: "329", image: "/classic-leather.png", description: isTurkish ? "Zamansız zarafet. En iyi İtalyan derisinden el işçiliğiyle üretilen Klasik Maun, her adımda prestij ve konfor sunar." : "Timeless elegance. Handcrafted from the finest Italian leather, Classic Mahogany offers prestige and comfort in every step." },
});

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const [isTurkish, setIsTurkish] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const { addToCart } = useCart();

    // Unwrapping params using React.use() for Next.js 15+ compatibility
    const unwrappedParams = use(params);
    const id = unwrappedParams.id;

    const productData = products(isTurkish);
    const product = productData[id] || productData["1"];

    const sizes = ["40", "41", "42", "43", "44", "45"];

    const [zoomStyle, setZoomStyle] = useState({ transformOrigin: "center", scale: "1" });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomStyle({ transformOrigin: `${x}% ${y}%`, scale: "2" });
    };

    const handleMouseLeave = () => {
        setZoomStyle({ transformOrigin: "center", scale: "1" });
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert(isTurkish ? "Lütfen bir numara seçin." : "Please select a size.");
            return;
        }

        addToCart({
            id: parseInt(id),
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity,
            size: selectedSize
        });
    };

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header isTurkish={isTurkish} setIsTurkish={setIsTurkish} />

            <div className="pt-24 md:pt-32 pb-24 px-6 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Product Image Section with Zoom */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-square bg-muted rounded-2xl overflow-hidden flex items-center justify-center p-8 md:p-12 md:cursor-zoom-in group"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <div
                        className="relative w-full h-full transition-transform duration-200 ease-out pointer-events-none"
                        style={zoomStyle}
                    >
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Zoom Indicator */}
                    <div className="absolute bottom-6 right-6 px-3 py-1.5 bg-background/60 backdrop-blur-md rounded-full border border-border/10 opacity-100 md:group-hover:opacity-0 transition-opacity">
                        <span className="text-[9px] md:text-[10px] text-foreground/60 tracking-widest uppercase flex items-center gap-2">
                            {isTurkish ? "Mercek Etkisi" : "Lens Effect"}
                        </span>
                    </div>
                </motion.div>

                {/* Product Info Section */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col gap-8"
                >
                    <div className="text-center lg:text-left">
                        <span className="text-silver uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold mb-4 block">
                            {isTurkish ? "Premium Koleksiyon" : "Premium Collection"}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4 uppercase">
                            {product.name}
                        </h1>
                        <p className="text-2xl md:text-3xl font-display font-medium text-silver">${product.price}</p>
                    </div>

                    <p className="text-foreground/60 text-lg leading-relaxed max-w-xl">
                        {product.description}
                    </p>

                    {/* Size Selection */}
                    <div>
                        <span className="text-[10px] uppercase tracking-widest text-foreground/40 mb-4 block">
                            {isTurkish ? "NUMARA SEÇİN" : "SELECT SIZE"}
                        </span>
                        <div className="flex flex-wrap gap-3">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    type="button"
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-14 h-14 flex items-center justify-center border transition-all duration-300 font-display text-sm
                    ${selectedSize === size ? "bg-foreground text-background border-foreground" : "border-border/10 text-foreground/40 hover:border-foreground/40 hover:text-foreground"}`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity and CTA */}
                    <div className="flex flex-col sm:flex-row gap-6 items-center">
                        <div className="flex items-center border border-border/10 rounded-full h-14 px-4 bg-foreground/5">
                            <button
                                type="button"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="text-foreground/40 hover:text-foreground transition-colors"
                                disabled={quantity <= 1}
                            >
                                <Minus size={18} />
                            </button>
                            <span className="w-12 text-center text-foreground font-display font-bold">{quantity}</span>
                            <button
                                type="button"
                                onClick={() => setQuantity(quantity + 1)}
                                className="text-foreground/40 hover:text-foreground transition-colors"
                            >
                                <Plus size={18} />
                            </button>
                        </div>

                        <button
                            type="button"
                            onClick={handleAddToCart}
                            className="flex-1 w-full bg-foreground text-background h-14 rounded-full font-display font-bold tracking-widest text-xs uppercase hover:bg-silver transition-all duration-300 flex items-center justify-center gap-3"
                        >
                            <ShoppingCart size={18} />
                            {isTurkish ? "SEPETE EKLE" : "ADD TO CART"}
                        </button>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-8 pt-4">
                        <button type="button" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-foreground/40 hover:text-foreground transition-colors">
                            <Heart size={16} />
                            {isTurkish ? "FAVORİLERE EKLE" : "ADD TO WISHLIST"}
                        </button>
                        <button type="button" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-foreground/40 hover:text-foreground transition-colors">
                            <Share2 size={16} />
                            {isTurkish ? "PAYLAŞ" : "SHARE"}
                        </button>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
