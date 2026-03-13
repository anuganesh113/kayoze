"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Send, Instagram, ArrowRight } from "lucide-react";

const instagramPosts = [
  "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507676184212-d0c8d67c5192?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585042564264-5a21faebbc0b?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1592878904946-b3ce8ae24ea5?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?q=80&w=1000&auto=format&fit=crop",
];

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/img/contact.jpg"
          alt="Kayoze Boutique"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-serif text-secondary mb-8 tracking-tight leading-none"
          >
            Contact <br />
            <span className="italic font-light">Kayoze Durbar Marg</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-secondary/80 text-lg md:text-xl font-sans font-light tracking-widest uppercase mb-12"
          >
            &quot;We&apos;re here to help you find the perfect suit.&quot;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/book"
              className="px-12 py-5 bg-secondary text-primary font-sans font-bold text-[11px] tracking-[0.3em] uppercase hover:bg-accent transition-all duration-500 w-full sm:w-auto"
            >
              Book Appointment
            </Link>
            <a
              href="tel:+977123456789"
              className="px-12 py-5 border border-secondary/30 text-secondary font-sans font-bold text-[11px] tracking-[0.3em] uppercase hover:bg-secondary hover:text-primary transition-all duration-500 w-full sm:w-auto"
            >
              Call Us
            </a>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-20 py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-start">
          
          {/* 2. ULTRA-PREMIUM CONTACT INFORMATION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-12 xl:col-span-5 relative"
          >
            <div className="sticky top-40 space-y-24">
              <div className="relative">
                <span className="text-[10px] font-sans font-black uppercase tracking-[0.8em] text-primary/20 block mb-6">Our Legacy</span>
                <h2 className="text-6xl md:text-8xl font-serif text-primary tracking-tighter leading-[0.85] italic">
                  The <br /> Boutique
                </h2>
              </div>

              <div className="space-y-16 max-w-sm">
                <div className="group pb-10 border-b border-primary/5">
                  <h4 className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-primary/30 mb-4 transition-colors group-hover:text-accent">Destination</h4>
                  <p className="text-xl md:text-2xl font-serif text-primary leading-tight">Durbar Marg, Kathmandu<br /><span className="text-primary/40 italic">Kingdom of Nepal</span></p>
                </div>

                <div className="group pb-10 border-b border-primary/5">
                  <h4 className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-primary/30 mb-4 transition-colors group-hover:text-accent">Liaison</h4>
                  <div className="space-y-2">
                    <p className="text-xl md:text-2xl font-serif text-primary flex items-center gap-4 transition-transform group-hover:translate-x-2">
                      <Phone size={16} strokeWidth={1} className="text-accent" /> +977 1 426 0907
                    </p>
                    <p className="text-xl md:text-2xl font-serif text-primary flex items-center gap-4 transition-transform group-hover:translate-x-2">
                      <Mail size={16} strokeWidth={1} className="text-accent" /> info@kayoze.com
                    </p>
                  </div>
                </div>

                <div className="group">
                  <h4 className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-primary/30 mb-4 transition-colors group-hover:text-accent">Atelier Hours</h4>
                  <p className="text-xl md:text-2xl font-serif text-primary italic leading-relaxed">
                    Sunday – Friday<br />
                    10:00 AM – 20:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ASYMMETRICAL EDITORIAL IMAGE & FORM */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-40">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.1, 0.6, 0.4, 1] }}
              className="relative aspect-[16/10] overflow-hidden group/boutique-img"
            >
              <Image
                src="/img/boutique.png"
                alt="Kayoze Atelier Interior"
                fill
                className="object-cover transition-transform duration-[5s] group-hover/boutique-img:scale-110"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-secondary text-[9px] font-sans font-bold tracking-[0.4em] uppercase opacity-40">
                Atelier Perspective
              </div>
            </motion.div>

            {/* 3. CONTACT FORM - MINIMALIST PREMIUM */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="bg-[#F8F8F6] p-12 md:p-24 shadow-[30px_60px_100px_rgba(0,0,0,0.02)] relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl" />
              
              <div className="relative mb-20 text-center lg:text-left">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-accent block mb-4 italic">Private Correspondence</span>
                <h3 className="text-4xl md:text-5xl font-serif text-primary tracking-tight italic">Send an Inquiry</h3>
              </div>

              <form className="space-y-16" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="relative group/field">
                    <label className="text-[8px] uppercase tracking-[0.3em] font-black text-primary/40 block mb-2 transition-colors group-focus-within/field:text-accent">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your signature"
                      className="w-full bg-transparent border-b border-primary/5 py-4 font-serif text-lg focus:outline-none focus:border-accent transition-colors placeholder:text-primary/10 italic"
                    />
                  </div>
                  <div className="relative group/field">
                    <label className="text-[8px] uppercase tracking-[0.3em] font-black text-primary/40 block mb-2 transition-colors group-focus-within/field:text-accent">Electronic Mail</label>
                    <input
                      type="email"
                      placeholder="address@correspondence.com"
                      className="w-full bg-transparent border-b border-primary/5 py-4 font-serif text-lg focus:outline-none focus:border-accent transition-colors placeholder:text-primary/10 italic"
                    />
                  </div>
                </div>
                
                <div className="relative group/field">
                  <label className="text-[8px] uppercase tracking-[0.3em] font-black text-primary/40 block mb-2 transition-colors group-focus-within/field:text-accent">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your tailoring requirements..."
                    className="w-full bg-transparent border-b border-primary/5 py-4 font-serif text-lg focus:outline-none focus:border-accent transition-colors placeholder:text-primary/10 italic resize-none"
                  />
                </div>

                <button className="group relative w-full py-8 overflow-hidden bg-primary shadow-2xl transition-transform active:scale-[0.98]">
                  <div className="absolute inset-0 bg-accent translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
                  <span className="relative z-10 flex items-center justify-center gap-6 text-secondary text-[11px] font-sans font-bold tracking-[0.6em] uppercase transition-colors duration-500 group-hover:text-secondary">
                    Dispatch <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-3" />
                  </span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 4. GOOGLE MAP SECTION */}
      <section className="py-24 bg-[#F2F2F2]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 tracking-tight italic">Visit Our Store</h2>
              <p className="text-[#4A5568] text-lg font-sans font-light leading-relaxed">
                Step into our Durbar Marg boutique to explore the Kayoze collection in person. Experience the feel of superfine wools and receive personalized guidance from our master tailors.
              </p>
            </div>
            <div className="w-24 h-[1px] bg-primary/20 hidden md:block mb-6" />
          </div>
          <div className="relative w-full h-[600px] overflow-hidden grayscale contrast-125 shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2227282855167!2d85.31597811506195!3d27.70tailored!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190012345678%3A0x1234567890abcdef!2sDurbar%20Marg%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1620000000000!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Kayoze Durbar Marg Location"
            />
          </div>
        </div>
      </section>

      {/* 5. BOOK APPOINTMENT SECTION */}
      <section className="relative py-40 overflow-hidden group">
        <Image
          src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2600&auto=format&fit=crop"
          alt="Personal Consultation"
          fill
          className="object-cover transition-transform duration-[3s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-8 tracking-tight leading-tight">
              Book Your Personal <br /> <span className="italic">Suit Consultation</span>
            </h2>
            <p className="text-secondary/70 text-lg md:text-xl font-sans font-light tracking-wide leading-relaxed mb-12 max-w-2xl mx-auto">
              Schedule a visit to our Durbar Marg boutique and experience the art of luxury tailoring.
            </p>
            <Link
              href="/book"
              className="px-16 py-6 bg-accent text-secondary font-sans font-bold text-[11px] tracking-[0.4em] uppercase hover:bg-secondary hover:text-primary transition-all duration-500 shadow-2xl inline-block"
            >
              Book Appointment
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6. INSTAGRAM GALLERY */}
      <section className="py-32 bg-secondary overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl font-serif text-primary mb-6 tracking-tight uppercase">Follow Our Journey</h2>
            <Link href="https://instagram.com/kayoze" className="flex items-center gap-3 text-accent text-[11px] font-bold uppercase tracking-[0.3em] hover:text-primary transition-colors">
              <Instagram size={16} /> @kayoze_durbarmarg
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {instagramPosts.map((post, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="relative aspect-square group overflow-hidden"
              >
                <Image
                  src={post}
                  alt="Instagram post"
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-125 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <Instagram size={24} className="text-secondary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/img/coats.png"
          alt="Kayoze Detail"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-serif text-secondary mb-10 tracking-tight italic">Your Perfect Suit Awaits</h2>
            <Link
              href="/shop"
              className="group relative px-16 py-7 bg-primary text-secondary text-[11px] font-bold tracking-[0.5em] uppercase transition-all hover:bg-accent overflow-hidden shadow-2xl inline-block"
            >
              <span className="relative z-10">Explore Collection</span>
              <div className="absolute inset-0 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
