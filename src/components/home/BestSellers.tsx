"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Heart, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import WishlistModal from "../global/WishlistModal";

/**
 * Editorial "Best Sellers" Section
 * Features a bold asymmetrical grid:
 * - One dominant featured product (Left/Top)
 * - Three vertically oriented products (Right/Side)
 * 
 * Aesthetic: Ralph Lauren inspired, clean, luxury fashion.
 */

const products = [
  {
    id: "premium-tuxedo",
    name: "Classic Italian Tuxedo",
    description: "The epitome of evening sophistication. Custom-tailored from superfine merino wool with hand-stitched silk satin lapels for a timeless silhouette.",
    price: "NPR 75,000",
    images: [
      "/img/tuxedos-feature.png",
      "/img/wedding-feature.png",
      "/img/lookbook-2.png",
      "/img/lookbook-4.png"
    ],
    colors: [
      { hex: "#000000", label: "Midnight", imageIndex: 0 },
      { hex: "#1A1A1A", label: "Classic Black", imageIndex: 1 }
    ],
    href: "/product/classic-italian-tuxedo",
    featured: true,
  },
  {
    id: "charcoal-suit",
    name: "The Signature Charcoal Suit",
    price: "NPR 45,000",
    images: [
      "/img/suits-feature.png",
      "/img/lookbook-1.png",
      "https://images.unsplash.com/photo-1593032463870-738980ec8905?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000&auto=format&fit=crop"
    ],
    colors: [
      { hex: "#36454F", label: "Charcoal", imageIndex: 0 },
      { hex: "#2F4F4F", label: "Dark Slate", imageIndex: 2 },
      { hex: "#708090", label: "Slate Grey", imageIndex: 3 }
    ],
    href: "/product/charcoal-suit",
  },
  {
    id: "navy-business",
    name: "Slim Fit Navy Business Suit",
    price: "NPR 42,000",
    images: [
      "/img/lookbook-3.png",
      "/img/suits-feature.png",
      "https://images.unsplash.com/photo-1594938384824-0227670e3092?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593030103066-009c201fc182?q=80&w=2000&auto=format&fit=crop"
    ],
    colors: [
      { hex: "#000080", label: "Navy", imageIndex: 0 },
      { hex: "#191970", label: "Midnight Blue", imageIndex: 1 },
      { hex: "#4682B4", label: "Steel Blue", imageIndex: 2 }
    ],
    href: "/product/navy-business-suit",
  },
  {
    id: "wedding-groom",
    name: "Wedding Collection Groom Suit",
    price: "NPR 58,000",
    images: [
      "/img/wedding-feature.png",
      "/img/tuxedos-feature.png",
      "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593032465175-481ac7f4ce4a?q=80&w=2000&auto=format&fit=crop"
    ],
    colors: [
      { hex: "#F5F5F5", label: "Ivory", imageIndex: 0 },
      { hex: "#E5E4E2", label: "Platinum", imageIndex: 1 },
      { hex: "#C0C0C0", label: "Silver", imageIndex: 2 }
    ],
    href: "/product/wedding-groom-suit",
  },
];

const ProductImageCarousel = ({ 
  images, 
  name, 
  sizes, 
  className,
  activeIndex = 0,
  onIndexChange
}: { 
  images: string[], 
  name: string, 
  sizes: string, 
  className?: string,
  activeIndex?: number,
  onIndexChange?: (index: number) => void
}) => {
  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onIndexChange) {
      onIndexChange((activeIndex + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onIndexChange) {
      onIndexChange((activeIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className={`relative h-full w-full group/carousel ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image 
            src={images[activeIndex]} 
            alt={`${name} - View ${activeIndex + 1}`}
            fill
            className="object-cover transition-transform duration-[1.5s] ease-[0.16, 1, 0.3, 1] group-hover:scale-105"
            sizes={sizes}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <button 
          onClick={prevImage}
          className="p-2.5 bg-white/40 backdrop-blur-md rounded-full text-primary hover:bg-white transition-all shadow-md active:scale-95 cursor-pointer"
          aria-label="Previous variant"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextImage}
          className="p-2.5 bg-white/40 backdrop-blur-md rounded-full text-primary hover:bg-white transition-all shadow-md active:scale-95 cursor-pointer"
          aria-label="Next variant"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <div 
            key={idx}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-white w-5' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function BestSellers() {
  const [wishlistedIds, setWishlistedIds] = useState<string[]>([]);
  const [activeTooltipId, setActiveTooltipId] = useState<string | null>(null);
  const [lastAction, setLastAction] = useState<'added' | 'removed' | null>(null);
  const [activeModalId, setActiveModalId] = useState<string | null>(null);
  const featuredProduct = products.find((p) => p.featured);
  const secondaryProducts = products.filter((p) => !p.featured);

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const isAdding = !wishlistedIds.includes(id);

    setWishlistedIds((prev: string[]) => 
      isAdding ? [...prev, id] : prev.filter((item: string) => item !== id)
    );

    setLastAction(isAdding ? 'added' : 'removed');
    
    if (isAdding) {
      setActiveModalId(id);
    } else {
      setActiveTooltipId(id);
      setTimeout(() => {
        setActiveTooltipId(null);
      }, 2000);
    }
  };

  return (
    <section className="py-32 bg-[#F9F9F7] w-full overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-16">
        
        {/* Editorial Header */}
        <div className="flex flex-col items-center text-center mb-24 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-5xl md:text-7xl font-serif text-primary mb-6 tracking-tight">Best Sellers</h2>
            <div className="w-16 h-[2px] bg-accent/40 mx-auto mb-8" />
            <p className="text-neutral-gray text-base md:text-xl font-sans tracking-wide leading-relaxed font-light">
              &quot;Our most iconic pieces crafted for the modern gentleman.&quot;
            </p>
          </motion.div>
        </div>

        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Featured Product - Left (7 cols) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {featuredProduct && (
              <FeaturedProductCard 
                product={featuredProduct} 
                wishlistedIds={wishlistedIds}
                toggleWishlist={toggleWishlist}
                activeTooltipId={activeTooltipId}
                activeModalId={activeModalId}
                setActiveModalId={setActiveModalId}
                lastAction={lastAction}
              />
            )}
            
            {/* Tablet/Mobile visibility fallback for text when not hovering */}
            <div className="lg:hidden mt-8 px-4">
              <h3 className="text-3xl font-serif text-primary mb-2">{featuredProduct?.name}</h3>
              <p className="text-neutral-gray text-sm mb-6 max-w-lg">{featuredProduct?.description}</p>
              <span className="text-2xl font-sans text-primary">{featuredProduct?.price}</span>
            </div>
          </motion.div>

          {/* Secondary Products - Right (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12 lg:gap-20">
            {secondaryProducts.map((product, idx) => (
              <ProductGridItem 
                key={product.id}
                product={product}
                idx={idx}
                wishlistedIds={wishlistedIds}
                toggleWishlist={toggleWishlist}
                activeTooltipId={activeTooltipId}
                activeModalId={activeModalId}
                setActiveModalId={setActiveModalId}
                lastAction={lastAction}
              />
            ))}
          </div>
        </div>

        {/* Global Catalog Link */}
        <motion.div 
          className="mt-32 pt-24 border-t border-primary/5 flex flex-col items-center gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <div className="text-center">
            <h5 className="text-2xl font-serif text-primary/40 italic mb-10">&quot;Excellence is not an act, but a habit.&quot;</h5>
            <Link 
              href="/shop" 
              className="group relative px-16 py-7 bg-primary text-secondary text-[11px] font-bold tracking-[0.5em] uppercase transition-all hover:bg-accent hover:text-secondary overflow-hidden shadow-2xl"
            >
              <span className="relative z-10">Discover Full Collection</span>
              <div className="absolute inset-0 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Sub-components for better state management
function FeaturedProductCard({ product, wishlistedIds, toggleWishlist, activeTooltipId, activeModalId, setActiveModalId, lastAction }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="group relative flex flex-col h-full bg-white shadow-sm overflow-visible">
      <div className="relative aspect-[4/5] overflow-visible">
        <div className="relative w-full h-full overflow-hidden">
          <ProductImageCarousel 
            images={product.images} 
            name={product.name}
            sizes="(max-width: 1024px) 100vw, 900px"
            activeIndex={currentIndex}
            onIndexChange={setCurrentIndex}
          />
          
          {/* Luxury Floating Tag */}
          <div className="absolute top-10 left-10 z-20">
            <span className="px-5 py-2 bg-primary/90 text-secondary text-[10px] font-sans font-bold tracking-[0.3em] uppercase backdrop-blur-md">
              Featured Piece
            </span>
          </div>

          {/* Glassmorphism Text Overlay - Bottom */}
          <div className="absolute inset-x-0 bottom-0 p-12 lg:p-16 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 z-20">
            <div className="bg-white/10 backdrop-blur-2xl p-10 lg:p-12 border border-white/20 relative overflow-hidden group/overlay">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent transform -translate-y-full group-hover/overlay:translate-y-0 transition-transform duration-700 delay-300" />
              
              <div className="space-y-6">
                <Link href={product.href}>
                  <h3 className="text-4xl lg:text-5xl font-serif text-secondary leading-none mb-2 hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-secondary/80 text-sm md:text-base font-sans font-light leading-relaxed max-w-md">
                  {product.description}
                </p>
                <div className="flex flex-wrap items-center gap-10 pt-4">
                  <span className="text-3xl font-sans text-secondary font-light tracking-tight">{product.price}</span>
                  <div className="flex gap-6">
                    <Link href={product.href} className="flex items-center gap-3 text-accent text-[11px] font-bold uppercase tracking-[0.3em] group/view">
                      View Piece <ArrowRight size={14} className="group-hover/view:translate-x-2 transition-transform" />
                    </Link>
                    <button className="text-secondary text-[11px] font-bold uppercase tracking-[0.3em] border-b border-secondary/30 pb-1 hover:border-accent hover:text-accent transition-all">
                      Add to Bag
                    </button>
                  </div>
                </div>
                
                {/* Color Swatches - Lowest Part */}
                {product.colors && (
                  <div className="flex gap-3 pt-6 border-t border-white/10">
                    {product.colors.map((color: any, swIdx: number) => (
                      <button
                        key={swIdx}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setCurrentIndex(color.imageIndex);
                        }}
                        className={`w-5 h-5 rounded-full border border-white/20 p-0.5 transition-all hover:scale-125 cursor-pointer ${currentIndex === color.imageIndex ? 'ring-1 ring-white ring-offset-2 ring-offset-transparent' : ''}`}
                        title={color.label}
                      >
                        <div 
                          className="w-full h-full rounded-full shadow-inner" 
                          style={{ backgroundColor: color.hex }}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-10 right-10 z-50 flex flex-col items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="relative flex flex-col items-center">
            <AnimatePresence>
              {activeTooltipId === product.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: -55, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute bg-primary text-secondary text-[10px] font-sans font-bold uppercase tracking-widest px-3 py-2 whitespace-nowrap shadow-xl border border-accent/20 z-[60]"
                >
                  {lastAction === 'added' ? 'Added to Wishlist' : 'Removed from Wishlist'}
                  <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45 border-r border-b border-accent/20" />
                </motion.div>
              )}
            </AnimatePresence>
            <div className="relative flex flex-col items-center">
              <button 
                onClick={(e) => toggleWishlist(product.id, e)}
                className="p-4 bg-white/90 backdrop-blur-md rounded-full text-primary hover:bg-accent hover:text-secondary transition-all transform hover:scale-110 shadow-lg cursor-pointer" 
                aria-label="Add to Wishlist"
              >
                <Heart 
                  size={20} 
                  className={wishlistedIds.includes(product.id) ? "fill-accent text-accent" : ""} 
                />
              </button>

              <WishlistModal 
                isOpen={activeModalId === product.id} 
                onClose={() => setActiveModalId(null)} 
              />
            </div>
          </div>
          <button className="p-4 bg-white/90 backdrop-blur-md rounded-full text-primary hover:bg-primary hover:text-secondary transition-all transform hover:scale-110 shadow-lg cursor-pointer" aria-label="Add to Bag">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductGridItem({ product, idx, wishlistedIds, toggleWishlist, activeTooltipId, activeModalId, setActiveModalId, lastAction }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <motion.div
      className="group relative flex flex-col lg:flex-row gap-8 items-center lg:items-start"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative w-full lg:w-48 xl:w-56 flex-shrink-0 overflow-visible">
        <div className="relative aspect-[3/4] w-full h-full block bg-neutral-light shadow-sm overflow-hidden">
          <ProductImageCarousel 
            images={product.images}
            name={product.name}
            sizes="250px"
            activeIndex={currentIndex}
            onIndexChange={setCurrentIndex}
          />
          
          <div className="absolute bottom-0 inset-x-0 p-4 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
            <button className="w-full py-3 bg-primary text-secondary text-[9px] font-bold uppercase tracking-[0.2em] shadow-2xl hover:bg-accent transition-colors cursor-pointer">
              Quick Add
            </button>
          </div>
          <Link href={product.href} className="absolute inset-0 z-10" aria-label={`View ${product.name}`} />
        </div>

        <div className="absolute top-3 right-3 z-50 flex flex-col items-center">
          <div className="relative flex flex-col items-center">
            <AnimatePresence>
              {activeTooltipId === product.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: -45, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute bg-primary text-secondary text-[9px] font-sans font-bold uppercase tracking-widest px-2 py-1.5 whitespace-nowrap shadow-xl border border-accent/20 z-[60]"
                >
                  {lastAction === 'added' ? 'Added' : 'Removed'}
                  <div className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rotate-45 border-r border-b border-accent/20" />
                </motion.div>
              )}
            </AnimatePresence>
            <button 
              onClick={(e) => toggleWishlist(product.id, e)}
              className="p-2 bg-white/80 rounded-full text-primary hover:text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer"
              aria-label="Add to Wishlist"
            >
              <Heart 
                size={14} 
                className={wishlistedIds.includes(product.id) ? "fill-accent text-accent" : ""} 
              />
            </button>

            <WishlistModal 
              isOpen={activeModalId === product.id} 
              onClose={() => setActiveModalId(null)} 
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow text-center lg:text-left pt-2">
        <span className="text-accent text-[10px] font-sans tracking-[0.2em] uppercase mb-3 block">Signature Collection</span>
        <Link href={product.href}>
          <h4 className="text-2xl md:text-3xl font-serif text-primary mb-4 leading-tight group-hover:text-neutral-gray transition-all">
            {product.name}
          </h4>
        </Link>
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 mt-auto group/footer">
          <span className="text-xl font-sans text-primary/80 font-light">{product.price}</span>
          <Link 
            href={product.href} 
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40 hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-1 w-fit mx-auto lg:mx-0"
          >
            Discovery Detail <ArrowRight size={12} />
          </Link>
        </div>
        
        {/* Color Swatches - Lowest Part */}
        {product.colors && (
          <div className="flex justify-center lg:justify-start gap-2 mt-6 pt-6 border-t border-primary/5">
            {product.colors.map((color: any, swIdx: number) => (
              <button
                key={swIdx}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIndex(color.imageIndex);
                }}
                className={`w-4 h-4 rounded-full border border-neutral-light p-0.5 transition-all hover:scale-110 cursor-pointer ${currentIndex === color.imageIndex ? 'ring-1 ring-primary ring-offset-2' : ''}`}
                title={color.label}
              >
                <div 
                  className="w-full h-full rounded-full shadow-sm" 
                  style={{ backgroundColor: color.hex }}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
