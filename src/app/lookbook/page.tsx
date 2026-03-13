"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const gallery = [
  { img: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?q=80&w=2000&auto=format&fit=crop", span: "row-span-2 col-span-1 md:col-span-2" },
  { img: "https://images.unsplash.com/photo-1507676184212-d0c8d67c5192?q=80&w=2072&auto=format&fit=crop", span: "row-span-1 col-span-1" },
  { img: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=1974&auto=format&fit=crop", span: "row-span-1 col-span-1" },
  { img: "https://images.unsplash.com/photo-1585042564264-5a21faebbc0b?q=80&w=2074&auto=format&fit=crop", span: "row-span-1 md:row-span-2 col-span-1 md:col-span-2" },
  { img: "https://images.unsplash.com/photo-1592878904946-b3ce8ae24ea5?q=80&w=2000&auto=format&fit=crop", span: "row-span-1 col-span-1" },
  { img: "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?q=80&w=2070&auto=format&fit=crop", span: "row-span-1 col-span-1" },
  { img: "https://images.unsplash.com/photo-1593030103066-009c201fc182?q=80&w=2000&auto=format&fit=crop", span: "row-span-1 col-span-1" },
  { img: "https://images.unsplash.com/photo-1593032465175-481ac7f4ce4a?q=80&w=2000&auto=format&fit=crop", span: "row-span-2 col-span-1 md:col-span-2" },
  { img: "https://images.unsplash.com/photo-1594938384824-0227670e3092?q=80&w=2000&auto=format&fit=crop", span: "row-span-1 col-span-1" },
  { img: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=2000&auto=format&fit=crop", span: "row-span-1 col-span-1 md:col-span-1" },
  { img: "https://images.unsplash.com/photo-1592878840134-d3d65ee12646?q=80&w=2000&auto=format&fit=crop", span: "row-span-1 col-span-1" },
  { img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000&auto=format&fit=crop", span: "row-span-1 col-span-1" },
  { img: "https://images.unsplash.com/photo-1593032463870-738980ec8905?q=80&w=2000&auto=format&fit=crop", span: "row-span-2 col-span-1 md:col-span-2" },
  { img: "https://images.unsplash.com/photo-1497333626463-7488ad9b2b79?q=80&w=2000&auto=format&fit=crop", span: "row-span-1 col-span-1" },
  { img: "https://images.unsplash.com/photo-1555069514-02913a409ef9?q=80&w=2000&auto=format&fit=crop", span: "row-span-1 col-span-1" },
  { img: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=2000&auto=format&fit=crop", span: "row-span-1 col-span-1 md:col-span-2" },
  { img: "https://images.unsplash.com/photo-1617130867099-2821ca221971?q=80&w=2000&auto=format&fit=crop", span: "row-span-1 col-span-1" },
  { img: "https://images.unsplash.com/photo-1611933010255-b77873534d0b?q=80&w=2000&auto=format&fit=crop", span: "row-span-1 col-span-1" },
];

export default function LookbookPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + gallery.length) % gallery.length));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % gallery.length));
  };

  return (
    <div className="pt-24 min-h-screen bg-secondary w-full">
      <div className="bg-primary text-secondary py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif tracking-widest uppercase mb-4">SS26 Lookbook</h1>
        <p className="text-neutral-gray font-sans tracking-wide">The intersection of heritage tailoring and modern audacity.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] md:auto-rows-[400px] gap-4">
          {gallery.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelectedIndex(idx)}
              className={`relative group overflow-hidden ${item.span} cursor-pointer`}
            >
              <Image 
                src={item.img} 
                alt={`Editorial feature ${idx + 1}`} 
                fill 
                className="object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-secondary text-[10px] uppercase tracking-[0.3em] font-bold bg-primary/40 backdrop-blur-sm px-4 py-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  View full
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Gallery Box */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/95 backdrop-blur-md p-4 md:p-10"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-secondary/60 hover:text-secondary transition-colors z-[110]"
              aria-label="Close gallery"
            >
              <X size={32} strokeWidth={1.5} />
            </button>

            {/* Navigation Left */}
            <button 
              onClick={handlePrev}
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-secondary/40 hover:text-secondary transition-colors z-[110] p-2"
              aria-label="Previous image"
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>

            {/* Navigation Right */}
            <button 
              onClick={handleNext}
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-secondary/40 hover:text-secondary transition-colors z-[110] p-2"
              aria-label="Next image"
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>

            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <motion.div 
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-5xl aspect-[4/5] md:aspect-auto md:h-[80vh]"
              >
                <Image 
                  src={gallery[selectedIndex].img}
                  alt={`Lookbook image ${selectedIndex + 1}`}
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>
              
              <div className="mt-8 text-secondary/60 font-sans tracking-[0.2em] text-[10px] uppercase flex items-center gap-4">
                <span className="w-8 h-[1px] bg-secondary/20" />
                {selectedIndex + 1} / {gallery.length}
                <span className="w-8 h-[1px] bg-secondary/20" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
