"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plus } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
    id?: number | string;
    name: string;
    category: string;
    price: string;
    image: string;
    index: number;
}

const ProductCard = ({ id = 1, name, category, price, image, index }: ProductCardProps) => {
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

                    {/* Hover Action */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <button type="button" className="bg-white text-black p-4 rounded-full translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                            <Plus size={24} />
                        </button>
                    </div>

                    {/* Category Tag */}
                    <div className="absolute top-6 left-6">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
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
