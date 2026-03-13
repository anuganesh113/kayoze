"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

/**
 * Compact Editorial Lookbook
 * Features a high-density horizontal gallery for a premium, magazine-like feel
 * with a significantly reduced vertical footprint.
 */

const looks = [
  {
    id: "modern-groom",
    title: "The Modern Groom",
    category: "Signature Collection",
    image: "/img/wedding-feature.png",
    aspect: "aspect-[3/4]",
  },
  {
    id: "midnight-tuxedo",
    title: "Midnight Silk Tuxedo",
    category: "Evening Wear",
    image: "/img/tuxedos-feature.png",
    aspect: "aspect-[3/4]",
  },
  {
    id: "classic-gentleman",
    title: "Classic Gentleman",
    category: "Business Suite",
    image: "/img/suits-feature.png",
    aspect: "aspect-[3/4]",
  },
  {
    id: "urban-tailoring",
    title: "Urban Tailoring",
    category: "Essential Luxury",
    image: "/img/accessories-feature.png",
    aspect: "aspect-[3/4]",
  },
];

export default function LookbookPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 450;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  
  return (
    <section className="py-20 bg-secondary overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-16">
        
        {/* Compact Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <span className="text-accent text-[10px] font-sans tracking-[0.5em] uppercase mb-4 block">Seasonal Campaign</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary tracking-tight leading-none">
              Editorial <span className="italic text-primary/70">Lookbook</span>
            </h2>
          </motion.div>

          <div className="flex items-center gap-12">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center text-primary/40 hover:border-accent hover:text-accent transition-all group"
                aria-label="Previous look"
              >
                <ArrowRight size={18} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center text-primary/40 hover:border-accent hover:text-accent transition-all group"
                aria-label="Next look"
              >
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden sm:block"
            >
              <Link 
                href="/lookbook" 
                className="group inline-flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-primary/60 hover:text-accent transition-all"
              >
                Explore Full Film <div className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-secondary transition-all"><Play size={12} fill="currentColor" /></div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Horizontal Editorial Strip */}
        <div 
          ref={scrollRef}
          className="flex gap-6 lg:gap-8 overflow-x-auto no-scrollbar pb-8 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
        >
          {looks.map((look, idx) => (
            <motion.div
              key={look.id}
              className={`flex-shrink-0 w-[85vw] md:w-[400px] lg:w-[450px] relative ${look.aspect} group overflow-hidden bg-neutral-light snap-start`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image 
                src={look.image}
                alt={look.title}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-[0.16, 1, 0.3, 1] group-hover:scale-110"
                sizes="500px"
              />
              
              {/* Luxury Glassmorphism Card */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="bg-white/10 backdrop-blur-xl p-8 border border-white/20 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <span className="text-accent text-[9px] font-sans tracking-[0.3em] uppercase mb-2 block">{look.category}</span>
                  <h3 className="text-2xl font-serif text-secondary mb-4 italic">{look.title}</h3>
                  <Link 
                    href="/lookbook" 
                    className="inline-flex items-center gap-2 text-white/70 text-[9px] font-bold uppercase tracking-[0.3em] hover:text-accent transition-colors"
                  >
                    View Look <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Minimal Bottom Label (Visible when not hovering) */}
              <div className="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity duration-300">
                <h4 className="text-secondary text-sm font-serif tracking-widest uppercase">{look.title}</h4>
              </div>
            </motion.div>
          ))}
          
          {/* Final "Explore" Card */}
          <motion.div
            className="flex-shrink-0 w-[85vw] md:w-[400px] lg:w-[450px] aspect-[3/4] flex flex-col items-center justify-center border border-primary/5 group hover:border-accent transition-colors snap-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center p-12">
              <span className="text-primary/20 text-7xl font-serif mb-8 block select-none">&ldquo;</span>
              <p className="text-primary/60 text-lg font-serif italic mb-10 leading-relaxed">
                Experience the heritage of fine tailoring in every frame.
              </p>
              <Link 
                href="/lookbook" 
                className="group relative px-10 py-5 bg-primary text-secondary text-[10px] font-bold tracking-[0.4em] uppercase transition-all hover:bg-accent hover:text-secondary overflow-hidden"
              >
                <span className="relative z-10">All Looks</span>
                <div className="absolute inset-0 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
