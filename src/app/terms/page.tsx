"use client";

import { motion } from "framer-motion";
import { Scale, FileText, ShoppingBag, ScrollText, Users } from "lucide-react";

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "Agreement to Terms",
      icon: <ScrollText size={20} strokeWidth={1} />,
      content: "By accessing the digital atelier of Kayoze Durbar Marg, you agree to be bound by these Terms of Service. These terms govern your use of our website, bespoke tailoring services, and the acquisition of our curated collection. If you do not agree with any part of these terms, we invite you to contact us for clarification before proceeding."
    },
    {
      title: "Bespoke & Made-to-Measure",
      icon: <ShoppingBag size={20} strokeWidth={1} />,
      content: "All bespoke and made-to-measure garments are crafted specifically to your unique measurements and requirements. Due to the personalized nature of these creations, orders cannot be cancelled or refunded once the fabric cutting process has commenced. We provide a series of dedicated fittings to ensure uncompromised excellence in fit and finish."
    },
    {
      title: "Intellectual Property",
      icon: <Scale size={20} strokeWidth={1} />,
      content: "The designs, imagery, brand identity, and editorial content presented on this platform are the exclusive property of Kayoze Durbar Marg. Unauthorized reproduction, distribution, or use of these materials is strictly prohibited, as they represent the heritage and creative integrity of our atelier."
    },
    {
      title: "Client Accounts",
      icon: <Users size={20} strokeWidth={1} />,
      content: "When creating an account within our digital circle, you are responsible for maintaining the confidentiality of your credentials. You agree to provide accurate and complete information and to notify us immediately of any unauthorized access to your account."
    },
    {
      title: "Limitation of Liability",
      icon: <FileText size={20} strokeWidth={1} />,
      content: "Kayoze Durbar Marg shall not be liable for any indirect, incidental, or consequential damages arising from the use of our digital platform or bespoke services. We strive for sartorial perfection, yet our liability is limited to the extent permitted by the laws of Nepal."
    }
  ];

  return (
    <div className="bg-secondary min-h-screen pt-24 pb-40 overflow-hidden text-primary">
      
      {/* 1. EDITORIAL HERO */}
      <section className="relative h-[65vh] flex flex-col items-center justify-center text-center px-6 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
        </div>
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
           className="relative z-10"
        >
          <span className="text-[10px] font-sans font-black uppercase tracking-[0.8em] text-secondary/40 block mb-8 italic">The Sartorial Agreement</span>
          <h1 className="text-6xl md:text-9xl font-serif text-secondary tracking-tighter leading-none mb-12">
            Terms of <br /> <span className="italic">Service</span>
          </h1>
          <div className="h-px w-32 bg-accent mx-auto" />
        </motion.div>

        {/* Decorative Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] select-none pointer-events-none">
           <span className="text-[40rem] font-serif italic text-secondary whitespace-nowrap">Service</span>
        </div>
      </section>

      {/* 2. TERMS CONTENT */}
      <section className="max-w-5xl mx-auto px-6 mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
           {/* Sidebar Navigation (Visual) */}
           <div className="hidden lg:block lg:col-span-4 sticky top-40 h-fit space-y-8 border-r border-primary/5 pr-12">
              <span className="text-[10px] font-sans font-black uppercase tracking-[0.5em] text-accent block mb-8">Navigation</span>
              {sections.map((section, idx) => (
                <div key={section.title} className="group cursor-pointer">
                   <p className="text-sm font-serif italic text-primary/40 group-hover:text-primary transition-colors">
                      {`0${idx + 1}. ${section.title}`}
                   </p>
                </div>
              ))}
           </div>

           {/* Detailed Terms */}
           <div className="lg:col-span-8 space-y-32">
              {sections.map((section, idx) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-6 mb-8 text-accent">
                     <div className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/10 group-hover:bg-accent group-hover:text-secondary transition-all duration-500">
                        {section.icon}
                     </div>
                     <span className="text-[10px] font-sans font-black uppercase tracking-[0.4em]">Section 0{idx + 1}</span>
                  </div>
                  <h2 className="text-3xl font-serif text-primary leading-tight mb-10 italic">
                     {section.title}
                  </h2>
                  <p className="text-neutral-gray font-sans text-lg leading-relaxed">
                     {section.content}
                  </p>
                </motion.div>
              ))}
           </div>
        </div>

        {/* 3. ATELIER CONTACT */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="mt-40 p-16 bg-primary text-secondary text-center relative overflow-hidden group"
        >
          <div className="relative z-10">
             <h3 className="text-4xl font-serif italic mb-8">Need further clarification?</h3>
             <p className="text-secondary/60 font-serif text-lg max-w-2xl mx-auto mb-12">
                Our concierge is available to discuss any aspect of our service agreement or bespoke process.
             </p>
             <a href="mailto:info@kayoze.com" className="inline-block px-12 py-5 border border-secondary/20 hover:border-accent hover:text-accent transition-all font-sans text-[10px] font-black uppercase tracking-[0.5em]">
                Contact Concierge
             </a>
          </div>
          {/* Subtle Graphic Element */}
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
             <Scale size={200} />
          </div>
        </motion.div>

        {/* 4. FOOTER IDENTIFIER */}
        <div className="mt-24 text-center">
          <p className="text-[10px] font-sans font-black uppercase tracking-[0.6em] text-primary/10">
            &copy; 2026 Kayoze Durbar Marg Bespoke Tailoring
          </p>
        </div>
      </section>

      {/* Film Grain Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[99] opacity-[0.02] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      </div>

    </div>
  );
}
