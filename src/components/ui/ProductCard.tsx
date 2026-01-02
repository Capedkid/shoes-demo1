"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plus, ShoppingBag, Heart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
    id?: number | string;
    name: string;
    category: string;
    price: string;
    image: string;
    index: number;
}

const ProductCard = ({ id = 1, name, category, price, image, index }: ProductCardProps) => {
    const { addToCart } = useCart();
    const [isFavorite, setIsFavorite] = useState(false);

    const handleQuickAdd = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart({
            id: typeof id === 'string' ? parseInt(id) : id,
            name,
            price,
            image,
            quantity: 1,
            size: "42" // Default size for quick add
        });
    };

    return (
        <Link href={`/urunler/${id}`}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
            >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted flex items-center justify-center p-8">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />

                    {/* Hover Action (Desktop) */}
                    <div className="absolute inset-0 bg-background/40 backdrop-blur-sm opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 hidden md:flex items-center justify-center">
                        <button
                            type="button"
                            onClick={handleQuickAdd}
                            className="bg-foreground text-background h-12 w-12 rounded-full translate-y-10 group-hover:translate-y-0 transition-all duration-500 delay-75 shadow-xl hover:bg-silver flex items-center justify-center relative group/btn"
                        >
                            <div className="relative flex items-center justify-center">
                                <ShoppingBag size={20} className="group-hover/btn:scale-90 transition-transform duration-300" />
                                <Plus size={12} strokeWidth={3} className="absolute -top-1 -right-1 bg-foreground rounded-full p-0.5 text-background" />
                            </div>
                        </button>
                    </div>

                    {/* Favorites Button */}
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10">
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setIsFavorite(!isFavorite);
                            }}
                            className={`h-10 w-10 md:h-12 md:w-12 rounded-full border border-border/10 flex items-center justify-center transition-all duration-300 backdrop-blur-md ${isFavorite ? 'bg-red-500 border-red-500 text-white' : 'bg-background/20 text-foreground/60 hover:text-foreground hover:bg-background/40'}`}
                        >
                            <Heart size={18} fill={isFavorite ? "currentColor" : "none"} className={isFavorite ? "scale-110" : ""} />
                        </button>
                    </div>

                    {/* Quick Add (Mobile - Persistent) */}
                    <div className="absolute top-4 right-16 md:hidden z-10">
                        <button
                            type="button"
                            onClick={handleQuickAdd}
                            className="bg-foreground/90 backdrop-blur-md text-background h-10 w-10 rounded-full shadow-lg active:scale-95 transition-transform flex items-center justify-center"
                        >
                            <div className="relative flex items-center justify-center">
                                <ShoppingBag size={16} />
                                <Plus size={10} strokeWidth={3} className="absolute -top-1 -right-1 bg-foreground rounded-full p-0.5 text-background" />
                            </div>
                        </button>
                    </div>

                    {/* Category Tag */}
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
                        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-foreground/50 bg-background/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-border/5">
                            {category}
                        </span>
                    </div>
                </div>

                <div className="mt-6 flex justify-between items-start">
                    <div>
                        <h3 className="text-base font-display font-medium tracking-tight text-foreground/90 group-hover:text-foreground transition-colors">
                            {name}
                        </h3>
                        <p className="text-foreground/40 text-sm mt-1 uppercase tracking-widest text-[10px]">
                            SINIRLI ÜRETİM
                        </p>
                    </div>
                    <span className="font-display font-bold text-lg">₺{price}</span>
                </div>
            </motion.div>
        </Link>
    );
};

export default ProductCard;
