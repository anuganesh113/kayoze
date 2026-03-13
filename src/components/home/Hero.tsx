"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Background with subtle parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=2960&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/40" />
      </motion.div>

      {/* Decorative Gold Frame (Subtle) */}
      <motion.div 
        className="absolute inset-10 border border-accent/20 pointer-events-none z-10 hidden md:block"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        {/* Subtle Line Accent */}
        <motion.div 
          className="h-px w-16 bg-accent mb-8"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 64, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />

        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-serif text-secondary mb-4 tracking-tight leading-none drop-shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          KAYOZE
          <span className="block text-4xl md:text-5xl lg:text-6xl mt-2 font-normal tracking-[0.2em] font-serif text-accent/90">
            DURBAR MARG
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-sm md:text-base text-neutral-light font-sans mb-14 tracking-[0.4em] uppercase max-w-2xl mx-auto font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        >
          Luxury Tailoring for the Modern Gentleman
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-8 justify-center items-center w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link 
            href="/shop" 
            className="group relative overflow-hidden bg-secondary text-primary px-12 py-5 font-sans uppercase tracking-[0.2em] text-xs font-semibold"
          >
            <span className="relative z-10 flex items-center gap-3 transition-colors duration-500 group-hover:text-secondary">
              Shop Collection
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
            </span>
            <div className="absolute inset-0 bg-accent translate-y-full transition-transform duration-500 ease-[0.16, 1, 0.3, 1] group-hover:translate-y-0" />
          </Link>

          <Link 
            href="/book" 
            className="group relative px-12 py-5 font-sans uppercase tracking-[0.2em] text-xs font-semibold text-secondary"
          >
            <span className="relative z-10">Book Custom Suit</span>
            <div className="absolute bottom-0 left-0 w-full h-px bg-secondary/50 transition-all duration-300 group-hover:h-full group-hover:bg-secondary/10" />
            <div className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-500 group-hover:w-full" />
          </Link>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-secondary/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-[10px] uppercase tracking-[0.5em] font-sans">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-secondary/30 to-transparent" />
      </motion.div>
    </section>
  );
}
