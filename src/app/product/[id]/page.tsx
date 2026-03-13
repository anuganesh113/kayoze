"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Heart, Ruler, Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/shop/ProductCard";

// Similar products mock data
const similarProducts = [
  { 
    id: "2", 
    name: "Classic Navy Blazer", 
    price: "NPR 32,000", 
    priceValue: 32000,
    fabric: "Wool",
    images: [
      "https://images.unsplash.com/photo-1592878904946-b3ce8ae24ea5?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593030103066-009c201fc182?q=80&w=2000&auto=format&fit=crop"
    ], 
    colors: [
      { hex: "#000080", label: "Navy", imageIndex: 0 },
      { hex: "#483D8B", label: "Slate Blue", imageIndex: 1 }
    ],
    category: "blazers" 
  },
  { 
    id: "3", 
    name: "Midnight Silk Tuxedo", 
    price: "NPR 58,000", 
    priceValue: 58000,
    fabric: "Silk",
    images: [
      "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549443105-95077a2827a3?q=80&w=2070&auto=format&fit=crop"
    ], 
    colors: [
      { hex: "#191970", label: "Midnight", imageIndex: 0 },
      { hex: "#000000", label: "Jet Black", imageIndex: 1 }
    ],
    category: "tuxedos" 
  },
  { 
    id: "5", 
    name: "Light Gray Linen Suit", 
    price: "NPR 38,000", 
    priceValue: 38000,
    fabric: "Linen",
    images: [
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1974&auto=format&fit=crop"
    ], 
    colors: [
      { hex: "#D3D3D3", label: "Light Gray", imageIndex: 0 },
      { hex: "#F5F5DC", label: "Beige", imageIndex: 1 }
    ],
    category: "suits" 
  },
  { 
    id: "12", 
    name: "Double Breasted Camel Coat", 
    price: "NPR 72,000", 
    priceValue: 72000,
    fabric: "Wool",
    images: [
      "https://images.unsplash.com/photo-1521223344201-d169129f7b7d?q=80&w=2070&auto=format&fit=crop"
    ], 
    colors: [
      { hex: "#C19A6B", label: "Camel", imageIndex: 0 }
    ],
    category: "outerwear" 
  },
];

// Mock data fetcher based on ID
const getProduct = (id: string) => {
  return {
    id,
    name: "The Signature Charcoal Suit",
    price: "NPR 45,000",
    priceValue: 45000,
    description: "Crafted from super 150s Italian wool, this signature charcoal suit offers unparalleled elegance and drape. The half-canvas construction ensures the jacket molds to your body over time, providing a bespoke-like fit.",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594938328870-9b23ceabc3aa?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617137984090-fcca84c9876e?q=80&w=2000&auto=format&fit=crop",
    ],
    details: ["100% Italian Wool", "Half-canvas construction", "Notch lapel", "Flap pockets", "Side vents", "Fully lined"],
    fit: "Tailored fit. Fits true to size. Jacket is tailored for a close fit across the shoulders and chest.",
    care: "Dry clean only. Hang on a wide-shoulder hanger to maintain shape."
  };
};

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = getProduct(id);
  const [mainImage, setMainImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [sizeError, setSizeError] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);

  // States for similar products cards
  const [wishlistedIds, setWishlistedIds] = useState<string[]>([]);
  const [activeTooltipId, setActiveTooltipId] = useState<string | null>(null);
  const [lastAction, setLastAction] = useState<'added' | 'removed' | null>(null);
  const [activeModalId, setActiveModalId] = useState<string | null>(null);

  const handleWishlistToggle = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const isAdding = !wishlistedIds.includes(id);
    setWishlistedIds(prev => isAdding ? [...prev, id] : prev.filter(item => item !== id));
    setLastAction(isAdding ? 'added' : 'removed');
    if (isAdding) {
      setActiveModalId(id);
    } else {
      setActiveTooltipId(id);
      setTimeout(() => setActiveTooltipId(null), 2000);
    }
  };

  const { addItem } = useCart();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  const sizes = ["36R", "38R", "40R", "42R", "44R", "46R"];

  const handleAddToBag = () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    
    setSizeError(false);
    setIsAdding(true);
    
    // Simulate a brief delay for luxury feel
    setTimeout(() => {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        priceValue: product.priceValue,
        size: selectedSize,
        image: product.images[0],
        quantity: 1
      });
      setIsAdding(false);
    }, 600);
  };

  return (
    <div className="pt-24 min-h-screen bg-secondary w-full">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 py-6 border-b border-neutral-light">
        <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-neutral-gray">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <ChevronRight size={14} />
          <span className="text-primary font-medium">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-16">
        {/* Product Images */}
        <div className="w-full lg:w-3/5 flex flex-col-reverse md:flex-row gap-6">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4 overflow-x-auto md:w-24 flex-shrink-0 scrollbar-hide">
            {product.images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setMainImage(idx)}
                className={`relative w-20 h-24 md:w-24 md:h-32 flex-shrink-0 border ${mainImage === idx ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'} transition-all`}
              >
                <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
              </button>
            ))}
          </div>

          {/* Main Image with Zoom */}
          <div 
            className="relative w-full aspect-[3/4] md:aspect-auto md:h-[800px] bg-neutral-light/20 overflow-hidden group cursor-zoom-in"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsZooming(true)}
            onMouseLeave={() => setIsZooming(false)}
          >
            <motion.div
              className="w-full h-full relative"
              animate={{
                scale: isZooming ? 2 : 1,
                x: isZooming ? `${50 - zoomPos.x}%` : "0%",
                y: isZooming ? `${50 - zoomPos.y}%` : "0%",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.5 }}
              style={{
                transformOrigin: "center center",
              }}
            >
              <Image 
                src={product.images[mainImage]} 
                alt={product.name} 
                fill 
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </motion.div>
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-2/5 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl md:text-4xl font-serif text-primary tracking-wide leading-tight">
              {product.name}
            </h1>
          </div>
          
          <div className="flex items-center gap-6 mb-8">
            <p className="text-2xl font-sans tracking-wide text-primary">{product.price}</p>
            <div className="h-4 w-[1px] bg-neutral-light" />
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-neutral-gray bg-neutral-light/30 px-3 py-1">In Stock</span>
          </div>

          {/* Size Selection */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <span className="font-sans uppercase text-sm tracking-widest text-primary font-semibold">Select Size</span>
                {sizeError && (
                  <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-accent text-[10px] font-bold uppercase tracking-widest"
                  >
                    * Required
                  </motion.span>
                )}
              </div>
              <button className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-neutral-gray hover:text-accent transition-colors cursor-pointer">
                <Ruler size={16} /> Size Guide
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {sizes.map((size) => (
                <button 
                  key={size}
                  onClick={() => {
                    setSelectedSize(size);
                    setSizeError(false);
                  }}
                  className={`py-3 border font-sans text-sm tracking-widest transition-all duration-300 cursor-pointer ${
                    selectedSize === size 
                    ? 'border-primary bg-primary text-secondary scale-[1.02] shadow-md' 
                    : sizeError 
                    ? 'border-accent/40 text-primary hover:border-primary'
                    : 'border-neutral-light text-primary hover:border-primary'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 mb-16">
            <button 
              onClick={handleAddToBag}
              disabled={isAdding}
              className={`w-full py-4 font-sans uppercase tracking-widest text-sm font-medium transition-all duration-500 shadow-lg relative overflow-hidden cursor-pointer ${
                isAdding ? 'bg-primary-light text-secondary !cursor-wait' : 'bg-primary text-secondary hover:bg-accent'
              }`}
            >
              <span className={`flex items-center justify-center gap-2 transition-opacity duration-300 ${isAdding ? 'opacity-0' : 'opacity-100'}`}>
                Add to Bag
              </span>
              {isAdding && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-5 h-5 border-2 border-secondary/30 border-t-secondary rounded-full"
                  />
                </div>
              )}
            </button>
            <button className="w-full flex items-center justify-center gap-2 border border-primary text-primary py-4 font-sans uppercase tracking-widest text-sm font-medium hover:bg-neutral-light/30 transition-colors duration-300 cursor-pointer">
              <Heart size={18} /> Add to Wishlist
            </button>
          </div>

          {/* Details Accordion System */}
          <div className="border-t border-primary/10">
            <AccordionItem title="Description" defaultOpen={true}>
              <p className="text-neutral-gray font-sans leading-relaxed text-sm">
                {product.description}
              </p>
            </AccordionItem>

            <AccordionItem title="Details & Care">
              <div className="space-y-4">
                <ul className="list-disc pl-5 space-y-2 text-neutral-gray font-sans text-sm">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="tracking-wide">{detail}</li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-primary/5">
                  <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2">Care Instructions</p>
                  <p className="text-neutral-gray font-sans text-sm">{product.care}</p>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="Fit & Sizing">
              <p className="text-neutral-gray font-sans text-sm leading-relaxed tracking-wide">
                {product.fit}
              </p>
            </AccordionItem>

            <AccordionSection title="Shipping & Returns">
              <p className="text-neutral-gray font-sans text-sm leading-relaxed tracking-wide">
                Complimentary express shipping on all orders over NPR 50,000. Returns accepted within 14 days of delivery. All items must be returned in their original condition with tags attached.
              </p>
            </AccordionSection>
          </div>
        </div>
      </div>

      {/* Similar Products Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-light">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-primary tracking-widest uppercase mb-4">You May Also Like</h2>
          <div className="w-24 h-[1px] bg-accent mx-auto mb-6" />
          <p className="text-neutral-gray font-sans tracking-wide">Complete your ensemble with our curated recommendations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {similarProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ProductCard 
                product={product}
                wishlistedIds={wishlistedIds}
                handleWishlistToggle={handleWishlistToggle}
                activeTooltipId={activeTooltipId}
                activeModalId={activeModalId}
                setActiveModalId={setActiveModalId}
                lastAction={lastAction}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Reusable Accordion Item Component
function AccordionItem({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-primary/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center py-6 text-left group"
      >
        <span className="font-sans uppercase text-sm tracking-[0.2em] text-primary font-bold group-hover:text-accent transition-colors">
          {title}
        </span>
        <div className="text-primary group-hover:text-accent transition-colors">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Alias for Shipping Section to keep original structure logic if needed, but using same UI
function AccordionSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <AccordionItem title={title}>{children}</AccordionItem>;
}
