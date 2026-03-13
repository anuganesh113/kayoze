"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, ArrowRight, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
}

const mockProducts: Product[] = [
  { 
    id: "1", 
    name: "The Signature Charcoal Suit", 
    price: "NPR 45,000", 
    image: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?q=80&w=1000&auto=format&fit=crop",
    category: "Suits"
  },
  { 
    id: "3", 
    name: "Midnight Silk Tuxedo", 
    price: "NPR 58,000", 
    image: "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?q=80&w=1000&auto=format&fit=crop",
    category: "Tuxedos"
  },
  { 
    id: "5", 
    name: "Light Gray Linen Suit", 
    price: "NPR 38,000", 
    image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=1000&auto=format&fit=crop",
    category: "Suits"
  },
  { 
    id: "12", 
    name: "Double Breasted Camel Coat", 
    price: "NPR 72,000", 
    image: "https://images.unsplash.com/photo-1521223344201-d169129f7b7d?q=80&w=2000&auto=format&fit=crop",
    category: "Outerwear"
  },
];

const popularCategories = ["Suits", "Tuxedos", "Blazers", "Shirts", "Accessories"];

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length > 1) {
      const filtered = mockProducts.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col bg-primary/95 backdrop-blur-2xl"
        >
          {/* Header */}
          <div className="flex justify-between items-center px-6 md:px-12 py-8 border-b border-secondary/10">
            <span className="text-secondary/40 text-[10px] uppercase tracking-[0.6em] font-bold">Search the Atelier</span>
            <button 
              onClick={onClose}
              className="group flex items-center gap-3 text-secondary hover:text-accent transition-colors transition-transform active:scale-95"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Search Box */}
          <div className="max-w-6xl mx-auto w-full px-6 py-20 md:py-32 flex flex-col items-center">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="w-full relative group"
            >
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What are you looking for?"
                className="w-full bg-transparent border-b-2 border-secondary/10 py-8 text-3xl md:text-6xl font-serif text-secondary focus:outline-none focus:border-accent transition-all placeholder:text-secondary/20 italic tracking-tight"
              />
              <Search 
                className={`absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-500 ${query ? 'text-accent scale-110' : 'text-secondary/20'}`} 
                size={32} 
                strokeWidth={1} 
              />
            </motion.div>

            {/* Results or Suggestions */}
            <div className="w-full mt-24 grid grid-cols-1 lg:grid-cols-12 gap-20 overflow-y-auto custom-scrollbar pr-2 max-h-[50vh]">
              
              {/* Left Column: Results or Suggestions */}
              <div className="lg:col-span-8">
                {query.length > 1 ? (
                  <div className="space-y-12">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[11px] uppercase tracking-[0.5em] text-secondary/40 font-bold">
                        Search Results ({results.length})
                      </h3>
                      {results.length > 0 && (
                        <Link href="/shop" onClick={onClose} className="text-accent text-[10px] uppercase tracking-[0.3em] font-bold hover:underline">
                          View All
                        </Link>
                      )}
                    </div>
                    
                    {results.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {results.map((product, idx) => (
                          <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <Link 
                              href={`/product/${product.id}`}
                              onClick={onClose}
                              className="group flex gap-6 items-center p-4 hover:bg-secondary/5 transition-all rounded-sm border border-transparent hover:border-secondary/10"
                            >
                              <div className="relative w-24 aspect-[3/4] overflow-hidden bg-secondary/5">
                                <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-xl font-serif text-secondary mb-1 leading-tight">{product.name}</h4>
                                <p className="text-accent text-sm font-sans font-medium">{product.price}</p>
                                <span className="text-[9px] uppercase tracking-widest text-secondary/30 mt-2 block">{product.category}</span>
                              </div>
                              <ArrowRight size={16} className="text-secondary/20 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-12 text-center border border-dashed border-secondary/10 rounded-sm"
                      >
                        <p className="text-secondary/40 font-serif italic text-xl">No signature pieces found matching &quot;{query}&quot;</p>
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-12">
                    <h3 className="text-[11px] uppercase tracking-[0.5em] text-secondary/40 font-bold flex items-center gap-3">
                      <TrendingUp size={14} className="text-accent" /> Suggested for You
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {mockProducts.map((p, idx) => (
                        <motion.div
                          key={p.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                        >
                          <Link 
                            href={`/product/${p.id}`}
                            onClick={onClose}
                            className="group block space-y-4"
                          >
                            <div className="relative aspect-[3/4] overflow-hidden bg-secondary/5 grayscale transition-all duration-700 group-hover:grayscale-0 rounded-sm">
                              <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div>
                              <h4 className="text-xs md:text-sm font-serif text-secondary leading-tight line-clamp-2">{p.name}</h4>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Categories */}
              <div className="lg:col-span-4 lg:border-l lg:border-secondary/10 lg:pl-20 space-y-12">
                <h3 className="text-[11px] uppercase tracking-[0.5em] text-secondary/40 font-bold">Popular Categories</h3>
                <ul className="space-y-6">
                  {popularCategories.map((cat, idx) => (
                    <motion.li 
                      key={cat}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                    >
                      <Link 
                        href="/shop" 
                        onClick={onClose}
                        className="group flex items-center justify-between text-2xl md:text-3xl font-serif text-secondary hover:text-accent transition-colors"
                      >
                        <span className="italic">{cat}</span>
                        <ArrowRight size={20} className="text-secondary/10 group-hover:text-accent transition-transform -translate-x-4 group-hover:translate-x-0" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="pt-12">
                   <div className="bg-secondary/5 p-8 rounded-sm border border-secondary/10 group cursor-pointer hover:bg-secondary/10 transition-colors">
                      <h5 className="text-[9px] uppercase tracking-[0.3em] font-bold text-accent mb-2 italic">Exclusive Service</h5>
                      <h4 className="text-lg font-serif text-secondary mb-4">Book a private tailoring consultation</h4>
                      <Link href="/book" onClick={onClose} className="text-[10px] uppercase tracking-[0.2em] font-black text-secondary group-hover:underline">Explore Portfolio</Link>
                   </div>
                </div>
              </div>

            </div>
          </div>

          {/* Footer Decoration */}
          <div className="mt-auto px-12 py-12 flex justify-center items-center opacity-10">
            <span className="text-[8rem] md:text-[15rem] font-serif tracking-tighter text-secondary leading-none whitespace-nowrap">KAYOZE DURBAR MARG</span>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
