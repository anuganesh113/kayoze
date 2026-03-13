"use client";

import { motion } from "framer-motion";
import { Scissors, Ruler, Sparkles, Shirt, ChevronRight } from "lucide-react";
import Link from "next/link";

/**
 * The Kayoze Experience (Tailoring Steps)
 * Re-designed with a dark luxury cinematic aesthetic.
 * Features:
 * - Moody black/gold high-contrast theme.
 * - Staggered entrance animations.
 * - Glassmorphism hover cards.
 * - Traditional artisanal storytelling.
 */

const steps = [
  {
    number: "01",
    icon: <Shirt size={32} strokeWidth={1} />,
    title: "Fabric Selection",
    description: "Curated collection of superfine Italian wool, pure silk, and rare vicuña from the world's most prestigious mills."
  },
  {
    number: "02",
    icon: <Ruler size={32} strokeWidth={1} />,
    title: "The Blueprint",
    description: "Over 30 individual anatomical measurements are taken to create a unique paper pattern, drafted by hand."
  },
  {
    number: "03",
    icon: <Scissors size={32} strokeWidth={1} />,
    title: "Artisanal Tailoring",
    description: "Our master tailors execute thousands of meticulous hand-stitches to ensure a silhouette of unmatched precision."
  },
  {
    number: "04",
    icon: <Sparkles size={32} strokeWidth={1} />,
    title: "The Final Fitting",
    description: "A secondary adjustment ensures that every contour and drape aligns perfectly with the modern gentleman's form."
  }
];

export default function TailoringSteps() {
  return (
    <section className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#C5A47E 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
      
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Cinematic Header */}
        <div className="flex flex-col items-center text-center mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-accent text-[10px] font-sans tracking-[0.6em] uppercase mb-6 block">Bespoke Artisanship</span>
            <h2 className="text-5xl md:text-7xl font-serif text-secondary mb-8 tracking-tight italic">
              The Kayoze <span className="not-italic text-white">Experience</span>
            </h2>
            <p className="text-secondary/50 max-w-2xl mx-auto font-sans text-base md:text-lg font-light leading-relaxed tracking-wide">
              Bespoke is a conversation between tailor and client. It is the mastery of proportion, 
              the discipline of tradition, and the pursuit of individual perfection.
            </p>
          </motion.div>
        </div>

        {/* Tailoring Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="group relative flex flex-col p-8 lg:p-10 bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-accent/20 transition-all duration-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              {/* Step Number Background */}
              <div className="absolute top-4 right-6 text-white/[0.03] text-8xl font-serif select-none pointer-events-none group-hover:text-accent/5 transition-colors duration-700">
                {step.number}
              </div>

              {/* Icon & Label */}
              <div className="mb-12 relative">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:border-accent transition-all duration-700">
                  {step.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-grow relative z-10">
                <span className="text-accent/40 text-[9px] font-sans tracking-[0.4em] uppercase mb-3 block">Step {step.number}</span>
                <h3 className="font-serif text-2xl text-secondary mb-6 tracking-wide group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="font-sans text-secondary/40 leading-relaxed text-sm font-light mb-10">
                  {step.description}
                </p>
                
                {/* Micro CTA */}
                <div className="mt-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 group-hover:text-accent transition-colors duration-500">
                  View Detail <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute bottom-0 right-0 w-[1px] h-full bg-accent/30" />
                <div className="absolute bottom-0 right-0 w-full h-[1px] bg-accent/30" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Catalog Link */}
        <motion.div 
          className="mt-32 pt-24 border-t border-white/[0.03] flex flex-col md:flex-row items-center justify-between gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <div className="max-w-xl">
             <h4 className="text-2xl font-serif text-secondary mb-4 italic">&quot;Elegance is not about being noticed, it is about being remembered.&quot;</h4>
             <p className="text-white/30 text-xs font-sans tracking-widest uppercase mb-8">Mastering the Art of Modern Tailoring</p>
          </div>
          <Link 
            href="/book" 
            className="group relative px-12 py-6 bg-accent text-secondary text-[10px] font-sans font-bold tracking-[0.6em] uppercase transition-all hover:bg-white hover:text-primary overflow-hidden shadow-2xl"
          >
            <span className="relative z-10">Commission Your Suit</span>
            <div className="absolute inset-0 bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
