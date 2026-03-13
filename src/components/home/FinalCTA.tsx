"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar } from "lucide-react";

/**
 * Final Call-to-Action (Book Your Custom Suit)
 * Redesigned for a high-impact cinematic experience.
 * Features:
 * - Immersive background with luxury tailoring imagery.
 * - Deep contrast with gold accenting.
 * - Elegant serif typography.
 * - Dual premium CTAs.
 */

export default function FinalCTA() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary">
      {/* Immersive Background Image */}
      <div 
        className="absolute inset-0 z-0 scale-105 pointer-events-none opacity-40"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=2000&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Luxury Vignette Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary via-primary/40 to-primary" />
      <div className="absolute inset-0 z-10 bg-radial-gradient(circle, transparent 20%, rgba(0,0,0,0.8) 100%)" />

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-accent text-[10px] sm:text-[11px] font-sans tracking-[0.8em] uppercase mb-10 block">Private Consultations</span>
          
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-serif text-secondary mb-12 tracking-tighter leading-[0.95]">
             The <span className="italic text-accent">Pinnacle</span> of <br />
             Personal Style
          </h2>
          
          <div className="w-24 h-px bg-accent/30 mx-auto mb-12" />
          
          <p className="text-secondary/70 max-w-2xl mx-auto font-sans text-lg md:text-xl font-light leading-relaxed mb-16 tracking-wide">
            Your journey to the perfect suit begins with a single conversation. 
            Step into the world of Kayoze Durbar Marg and experience the heritage of fine tailoring.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link 
              href="/book" 
              className="group relative px-14 py-6 bg-accent text-secondary text-[11px] font-sans font-bold tracking-[0.6em] uppercase transition-all hover:bg-white hover:text-primary overflow-hidden shadow-2xl w-full sm:w-auto text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Calendar size={16} strokeWidth={1} />
                Book Your Entry
              </span>
              <div className="absolute inset-0 bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
            </Link>
            
            <Link 
              href="/lookbook" 
              className="group px-14 py-6 border border-white/10 text-secondary text-[11px] font-sans font-bold tracking-[0.6em] uppercase hover:bg-white hover:text-primary hover:border-white transition-all w-full sm:w-auto text-center overflow-hidden relative"
            >
              <span className="relative z-10">Explore Archive</span>
              <div className="absolute inset-0 bg-white transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Subtle Bottom Accent */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 opacity-20 flex flex-col items-center">
        <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
