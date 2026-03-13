"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Quote, Sparkles, Feather, Scissors } from "lucide-react";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="bg-secondary w-full overflow-hidden">
      
      {/* 1. EDITORIAL HERO */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=2000&auto=format&fit=crop" 
            alt="Tailor at work" 
            fill 
            className="object-cover opacity-50 grayscale" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary/80" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[10px] font-sans font-black uppercase tracking-[0.8em] text-secondary/40 block mb-6 italic"
          >
            Since 1994
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-[10rem] font-serif text-secondary tracking-tighter leading-none"
          >
            The <span className="italic">Legacy</span>
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 1, duration: 1 }}
            className="h-px bg-accent mx-auto mt-12"
          />
        </div>

        {/* Floating Atelier Coordinates */}
        <div className="absolute bottom-12 left-12 hidden md:block">
          <p className="text-[10px] font-sans font-bold text-secondary/20 tracking-[0.5em] uppercase [writing-mode:vertical-lr]">
            27.7120° N, 85.3230° E • KATHMANDU
          </p>
        </div>
      </section>

      {/* 2. THE STORY - ASYMMETRICAL EDITORIAL */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-20 py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="lg:col-span-12 xl:col-span-5"
          >
            <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-black block mb-6">Our Genesis</span>
            <h2 className="text-5xl md:text-7xl font-serif text-primary tracking-tight leading-[0.9] mb-12 italic">
              A Symphony of <br /> Cloth & Soul
            </h2>
            <div className="space-y-8 text-neutral-gray font-serif text-xl leading-relaxed max-w-lg">
              <p>
                Founded in the historic heart of Kathmandu, Kayoze Durbar Marg was born from a singular vision: to revive the lost art of true bespoke tailoring with a distinctly modern sensibility.
              </p>
              <p className="font-sans text-sm tracking-wide leading-loose text-primary/60 border-l-2 border-accent/20 pl-8 ml-2 italic">
                &quot;The perfect suit is not just seen; it is felt. It is the bridge between a man&apos;s ambition and his silhouette.&quot;
              </p>
              <p>
                Every garment is a sculptor&apos;s journey. From the initial measurement to the final fitting, our master artisans dedicate over 40 hours of unhurried handwork to a single Kayoze suit.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="lg:col-span-12 xl:col-span-7 relative"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-[2s]">
              <Image 
                src="/img/tailor_craft.png" 
                alt="Master tailoring" 
                fill 
                className="object-cover transition-transform duration-[5s] hover:scale-110" 
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
            {/* Decal Text */}
            <div className="absolute -bottom-10 -left-10 bg-secondary p-12 shadow-2xl hidden xl:block border border-primary/5">
                <p className="text-[10px] font-sans font-black tracking-[0.5em] text-primary/20 uppercase mb-4">Metric of Craft</p>
                <div className="flex gap-12">
                   <div>
                      <span className="text-4xl font-serif text-primary block tracking-tighter">4.5K</span>
                      <span className="text-[9px] uppercase tracking-widest text-accent font-bold">Stitches</span>
                   </div>
                   <div className="w-px h-10 bg-primary/5" />
                   <div>
                      <span className="text-4xl font-serif text-primary block tracking-tighter">150+</span>
                      <span className="text-[9px] uppercase tracking-widest text-accent font-bold">Details</span>
                   </div>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. THE PILLARS - ICONIC GRID */}
      <section className="bg-primary py-40">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-10 flex items-center justify-center border border-secondary/10 rounded-full group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                <Sparkles size={24} strokeWidth={1} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-serif text-secondary mb-6 italic">Heritage Excellence</h3>
              <p className="text-secondary/40 font-sans text-sm tracking-wide leading-relaxed">
                Reviving 19th-century techniques with materials sourced exclusively from the world&apos;s oldest textile mills in Biella and Yorkshire.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-10 flex items-center justify-center border border-secondary/10 rounded-full group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                <Scissors size={24} strokeWidth={1} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-serif text-secondary mb-6 italic">Master Architect</h3>
              <p className="text-secondary/40 font-sans text-sm tracking-wide leading-relaxed">
                A suit is sculpted, not sewn. Our process involves 3 private fittings to ensure a second-skin fit that defies the ordinary.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-10 flex items-center justify-center border border-secondary/10 rounded-full group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                <Feather size={24} strokeWidth={1} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-serif text-secondary mb-6 italic">Ethereal Fabric</h3>
              <p className="text-secondary/40 font-sans text-sm tracking-wide leading-relaxed">
                From Super 200s wool to rare vicuña, we navigate the globe to find fibers that offer unparalleled breathability and drape.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. LARGE EDITORIAL PULL QUOTE */}
      <section className="py-60 px-6 relative bg-secondary">
        <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden opacity-5 pointer-events-none">
           <span className="text-[30rem] font-serif italic text-primary absolute top-1/2 -translate-y-1/2 right-[-10rem]">Craft</span>
        </div>
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          >
            <Quote size={60} strokeWidth={1} className="mx-auto mb-16 text-accent opacity-20" />
            <h2 className="text-4xl md:text-7xl font-serif text-primary leading-tight tracking-tight italic">
              &quot;In a world of mass production, we offer the luxury of time, the dignity of labor, and the precision of the master&apos;s eye.&quot;
            </h2>
            <div className="mt-16 flex items-center justify-center gap-6">
               <div className="h-px w-8 bg-accent" />
               <span className="text-[10px] font-sans font-black uppercase tracking-[0.5em] text-primary">The Artisan Circle</span>
               <div className="h-px w-8 bg-accent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. CRAFTSMANSHIP GALLERY - STAGGERED */}
      <section className="pb-40 px-6 lg:px-20">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="md:col-span-12 lg:col-span-7 aspect-[16/9] relative overflow-hidden group"
            >
              <Image 
                src="/img/atelier_details.png" 
                alt="Atelier tools" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-8 left-8 text-secondary">
                 <span className="text-[10px] uppercase tracking-[0.4em] font-black opacity-40">Detail 01</span>
                 <h4 className="text-2xl font-serif italic">The Precision of Steel</h4>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="md:col-span-6 lg:col-span-5 aspect-[4/5] relative overflow-hidden group lg:mt-24"
            >
              <Image 
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000&auto=format&fit=crop" 
                alt="Fabric texture" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-8 left-8 text-secondary">
                 <span className="text-[10px] uppercase tracking-[0.4em] font-black opacity-40">Detail 02</span>
                 <h4 className="text-2xl font-serif italic">Sartorial Geometry</h4>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.4 }}
              className="hidden lg:block lg:col-span-4 aspect-square relative overflow-hidden group lg:-mt-20"
            >
              <Image 
                src="https://images.unsplash.com/photo-1555061527-380d6f30a5cb?q=80&w=2000&auto=format&fit=crop" 
                alt="Finished detail" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="absolute bottom-8 left-8 text-secondary">
                 <span className="text-[10px] uppercase tracking-[0.4em] font-black opacity-40">Detail 03</span>
                 <h4 className="text-2xl font-serif italic">The Final Drape</h4>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. FINALE LIFESTYLE */}
      <section className="relative h-[100vh] overflow-hidden">
        <motion.div 
          whileInView={{ scale: 1.1 }}
          transition={{ duration: 10 }}
          className="absolute inset-0"
        >
          <Image 
            src="/img/bespoke_suit.png" 
            alt="The Kayoze Man" 
            fill 
            className="object-cover grayscale hover:grayscale-0 transition-all duration-[3s]" 
          />
        </motion.div>
        <div className="absolute inset-0 bg-primary/40" />
        
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
              <h2 className="text-5xl md:text-8xl font-serif text-secondary mb-12 tracking-tighter">Your Story, <br /><span className="italic">Tailored.</span></h2>
              <button className="group relative px-20 py-8 overflow-hidden bg-transparent border border-secondary/20 shadow-2xl transition-all hover:border-accent">
                <div className="absolute inset-0 bg-accent translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
                <span className="relative z-10 text-secondary text-[11px] font-sans font-bold tracking-[0.5em] uppercase group-hover:text-secondary">Explore the Collection</span>
              </button>
           </motion.div>
        </div>
      </section>

      {/* Film Grain Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[99] opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      </div>

    </div>
  );
}
