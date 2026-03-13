"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import WishlistModal from "@/components/global/WishlistModal";

interface Color {
  hex: string;
  label: string;
  imageIndex: number;
}

interface Product {
  id: string;
  name: string;
  price: string;
  priceValue: number;
  images: string[];
  colors: Color[];
  category: string;
  fabric: string;
}

interface ProductCardProps {
  product: Product;
  wishlistedIds: string[];
  handleWishlistToggle: (id: string, e: React.MouseEvent) => void;
  activeTooltipId: string | null;
  activeModalId: string | null;
  setActiveModalId: (id: string | null) => void;
  lastAction: 'added' | 'removed' | null;
}

export default function ProductCard({ 
  product, 
  wishlistedIds, 
  handleWishlistToggle, 
  activeTooltipId, 
  activeModalId, 
  setActiveModalId, 
  lastAction 
}: ProductCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className={`group cursor-pointer relative ${activeModalId === product.id ? 'z-50' : 'z-0'}`}>
      <div className="relative aspect-[3/4] mb-4 overflow-hidden shadow-sm bg-neutral-light">
        <Link href={`/product/${product.id}`} className="block w-full h-full relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image 
                src={product.images[currentIndex]} 
                alt={`${product.name} - View ${currentIndex + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Arrows */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <button 
              onClick={prevImage}
              className="p-2 bg-white/40 backdrop-blur-md rounded-full text-primary hover:bg-white transition-all shadow-sm cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextImage}
              className="p-2 bg-white/40 backdrop-blur-md rounded-full text-primary hover:bg-white transition-all shadow-sm cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {product.images.map((_, idx) => (
              <div 
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white w-4' : 'bg-white/40'}`}
              />
            ))}
          </div>

          <div className="absolute inset-x-0 bottom-0 bg-primary/90 backdrop-blur-md text-secondary text-center py-4 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
            <span className="font-sans uppercase text-sm tracking-widest">Quick View</span>
          </div>
        </Link>
      </div>
      
      {/* Wishlist Button & Tooltip */}
      <div className="absolute top-4 right-4 z-[60] flex flex-col items-center">
        <div className="relative flex flex-col items-center">
          <AnimatePresence>
            {activeTooltipId === product.id && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: -45, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute bg-primary text-secondary text-[10px] font-sans font-bold uppercase tracking-widest px-3 py-2 whitespace-nowrap shadow-xl border border-accent/20 z-[70]"
              >
                {lastAction === 'added' ? 'Added to Wishlist' : 'Removed from Wishlist'}
                <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45 border-r border-b border-accent/20" />
              </motion.div>
            )}
          </AnimatePresence>
          
          <button 
            onClick={(e) => handleWishlistToggle(product.id, e)}
            className="p-3 bg-white/80 backdrop-blur-md rounded-full text-primary hover:text-accent hover:bg-white transition-all transform hover:scale-110 shadow-sm opacity-0 group-hover:opacity-100 duration-300 cursor-pointer"
            aria-label="Add to Wishlist"
          >
            <Heart 
              size={18} 
              className={wishlistedIds.includes(product.id) ? "fill-accent text-accent" : ""} 
            />
          </button>

          <WishlistModal 
            isOpen={activeModalId === product.id} 
            onClose={() => setActiveModalId(null)} 
          />
        </div>
      </div>
      <div className="text-center md:text-left">
        <h3 className="font-serif text-lg text-primary mb-1 line-clamp-1 group-hover:text-neutral-gray transition-colors">
          <Link href={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="font-sans text-neutral-gray tracking-wide mb-4">{product.price}</p>
        
        {/* Color Swatches */}
        {product.colors && (
          <div className="flex justify-center md:justify-start gap-2">
            {product.colors.map((color, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIndex(color.imageIndex);
                }}
                className={`w-4 h-4 rounded-full border border-neutral-light p-0.5 transition-all hover:scale-110 cursor-pointer ${currentIndex === color.imageIndex ? 'ring-1 ring-primary ring-offset-2' : ''}`}
                title={color.label}
              >
                <div 
                  className="w-full h-full rounded-full" 
                  style={{ backgroundColor: color.hex }}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <WishlistModal 
        isOpen={activeModalId === product.id} 
        onClose={() => setActiveModalId(null)} 
      />
    </div>
  );
}
