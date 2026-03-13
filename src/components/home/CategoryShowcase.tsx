"use client";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const categories = [
  {
    id: "suits",
    title: "Signature",
    subtitle: "The Masterpiece Collection",
    label: "Bespoke Suits",
    number: "01",
    image: "/img/suits-feature.png",
    href: "/shop?category=suits",
    layout: "lg:col-span-2 lg:row-span-2 min-h-[500px]",
  },
  {
    id: "tuxedos",
    title: "Formal",
    subtitle: "Evening Excellence",
    label: "Tuxedos",
    number: "02",
    image: "/img/tuxedos-feature.png",
    href: "/shop?category=tuxedos",
    layout: "lg:col-span-1 lg:row-span-1 min-h-[240px]",
  },
  {
    id: "wedding",
    title: "Heritage",
    subtitle: "Sacred Ceremonials",
    label: "Wedding Collection",
    number: "03",
    image: "/img/wedding-feature.png",
    href: "/wedding",
    layout: "lg:col-span-1 lg:row-span-1 min-h-[240px]",
  },
  {
    id: "blazers",
    title: "Editorial",
    subtitle: "Modern Distinction",
    label: "Blazers",
    number: "04",
    image: "https://images.unsplash.com/photo-1594938333048-15c5127f4c9c?q=80&w=2000&auto=format&fit=crop",
    href: "/shop?category=blazers",
    layout: "lg:col-span-2 lg:row-span-1 min-h-[240px]",
  },
  {
    id: "accessories",
    title: "Accents",
    subtitle: "The Final Polish",
    label: "Accessories",
    number: "05",
    image: "/img/accessories-feature.png",
    href: "/shop?category=accessories",
    layout: "lg:col-span-1 lg:row-span-1 min-h-[240px]",
  },
];

export default function CategoryShowcase() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="py-24 bg-secondary w-full relative overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-20 left-10 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <span className="text-[20rem] font-serif font-bold text-primary leading-none">EST. 2026</span>
      </div>

      <div className="max-w-[1700px] mx-auto px-6 lg:px-16">
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row justify-between items-baseline mb-16 gap-12 border-b border-neutral-light pb-8">
          <div className="max-w-3xl">
            <motion.div 
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent text-xs font-sans tracking-[0.6em] uppercase">Sartorial Excellence</span>
            </motion.div>
            <motion.h2 
              className="text-6xl md:text-8xl font-serif text-primary tracking-tighter leading-[0.9]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              The Collection <br /> 
              <span className="text-accent italic font-normal ml-8 md:ml-16">Anthology</span>
            </motion.h2>
          </div>
          
          <motion.p 
            className="max-w-sm text-neutral-gray text-sm md:text-base font-sans tracking-wide leading-relaxed font-light text-right self-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            A curated study in heritage tailoring and contemporary silhouettes. Each piece is a testament to uncompromised craftsmanship.
          </motion.p>
        </div>

        {/* Premium Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <motion.div 
              key={category.id}
              className={`group relative overflow-hidden bg-neutral-charcoal ${category.layout}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={category.href} className="block w-full h-full relative group/card">
                {/* Background Layer with Parallax-esque Zoom */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={category.image}
                    alt={category.label}
                    fill
                    className="object-cover transition-transform duration-[2.5s] ease-[0.16, 1, 0.3, 1] group-hover:scale-110 group-hover:rotate-[0.5deg]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Luxury Overlays */}
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/40 transition-colors duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* Vertical Side Label */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left z-20 pointer-events-none">
                  <span className="text-[10px] uppercase tracking-[0.8em] font-sans text-secondary/40 group-hover:text-accent transition-colors duration-700">
                    Kayoze Durbar Marg
                  </span>
                </div>

                {/* Ghost Numbering */}
                <div className="absolute top-10 right-10 z-10 select-none overflow-hidden">
                  <motion.span 
                    className="text-[12rem] md:text-[15rem] font-serif font-black text-secondary/5 block leading-none -tracking-widest translate-y-20 group-hover:translate-y-0 transition-transform duration-1000"
                  >
                    {category.number}
                  </motion.span>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                  <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-1000 ease-[0.16, 1, 0.3, 1]">
                    <span className="text-accent text-[11px] uppercase tracking-[0.5em] font-sans mb-3 block opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 font-semibold">
                      {category.label}
                    </span>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-secondary tracking-tighter mb-1 leading-none">
                      {category.title}
                    </h3>
                    <p className="text-secondary/60 text-[10px] font-sans tracking-[0.1em] mb-6 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 lowercase italic">
                      {category.subtitle}
                    </p>
                    
                    {/* Editorial CTA */}
                    <div className="flex items-center group/cta cursor-pointer">
                      <div className="w-0 h-[1px] bg-accent group-hover:w-16 transition-all duration-700 ease-in-out md:block hidden" />
                      <span className="text-[10px] md:ml-4 font-sans font-bold tracking-[0.4em] uppercase text-secondary group-hover:text-accent transition-colors duration-500">
                        Explore Collection
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Corner Lines */}
                <div className="absolute top-8 left-8 w-12 h-[1px] bg-accent/30 group-hover:bg-accent/80 transition-all duration-700 scale-x-0 group-hover:scale-x-100 origin-left" />
                <div className="absolute top-8 left-8 w-[1px] h-12 bg-accent/30 group-hover:bg-accent/80 transition-all duration-700 scale-y-0 group-hover:scale-y-100 origin-top" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Editorial Quote */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-neutral-gray text-xs uppercase tracking-[0.8em] mb-4">Crafted for the few</p>
          <h3 className="text-2xl md:text-4xl font-serif italic text-primary/40">&quot;Simplicity is the ultimate sophistication.&quot;</h3>
        </motion.div>
      </div>
    </section>
  );
}

