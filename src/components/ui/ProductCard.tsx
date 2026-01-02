"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plus, ShoppingBag } from "lucide-react";
import Link from "next/link";
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
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 hidden md:flex items-center justify-center">
                        <button
                            type="button"
                            onClick={handleQuickAdd}
                            className="bg-white text-black h-12 w-12 rounded-full translate-y-10 group-hover:translate-y-0 transition-all duration-500 delay-75 shadow-xl hover:bg-silver flex items-center justify-center relative group/btn"
                        >
                            <div className="relative flex items-center justify-center">
                                <ShoppingBag size={20} className="group-hover/btn:scale-90 transition-transform duration-300" />
                                <Plus size={12} strokeWidth={3} className="absolute -top-1 -right-1 bg-white rounded-full p-0.5 text-black" />
                            </div>
                        </button>
                    </div>

                    {/* Quick Add (Mobile - Persistent) */}
                    <div className="absolute top-4 right-4 md:hidden z-10">
                        <button
                            type="button"
                            onClick={handleQuickAdd}
                            className="bg-white/90 backdrop-blur-md text-black h-10 w-10 rounded-full shadow-lg active:scale-95 transition-transform flex items-center justify-center"
                        >
                            <div className="relative flex items-center justify-center">
                                <ShoppingBag size={16} />
                                <Plus size={10} strokeWidth={3} className="absolute -top-1 -right-1 bg-white rounded-full p-0.5 text-black" />
                            </div>
                        </button>
                    </div>

                    {/* Category Tag */}
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
                        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/50 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
                            {category}
                        </span>
                    </div>
                </div>

                <div className="mt-6 flex justify-between items-start">
                    <div>
                        <h3 className="text-base font-display font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">
                            {name}
                        </h3>
                        <p className="text-white/40 text-sm mt-1 uppercase tracking-widest text-[10px]">
                            Limited Edition
                        </p>
                    </div>
                    <span className="font-display font-bold text-lg">${price}</span>
                </div>
            </motion.div>
        </Link>
    );
};

export default ProductCard;
