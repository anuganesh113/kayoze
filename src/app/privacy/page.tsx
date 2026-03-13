"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Lock, Globe, Mail } from "lucide-react";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Introduction",
      icon: <Globe size={20} strokeWidth={1} />,
      content: "At Kayoze Durbar Marg, your privacy is as paramount as the precision of our tailoring. This Privacy Policy outlines how we collect, use, and protect the personal information you entrust to us when accessing our digital atelier and bespoke services."
    },
    {
      title: "Information Collection",
      icon: <Eye size={20} strokeWidth={1} />,
      content: "We collect information essential to provide you with an unparalleled sartorial experience. This includes your contact details for appointments and inquiries, measurement data for bespoke garments, and interaction history to refine our services to your preferences."
    },
    {
      title: "Data Discretion",
      icon: <Shield size={20} strokeWidth={1} />,
      content: "Your data is treated with the utmost discretion. We do not sell your personal information to third parties. Information is only shared with trusted service providers who assist us in operating our website, conducting our business, or serving our clients, provided they agree to keep this information confidential."
    },
    {
      title: "Security Measures",
      icon: <Lock size={20} strokeWidth={1} />,
      content: "We implement a variety of high-level security measures to maintain the safety of your personal information. Our digital infrastructure is designed to protect your data from unauthorized access, ensuring that your private details remain private."
    },
    {
      title: "Atelier Correspondence",
      icon: <Mail size={20} strokeWidth={1} />,
      content: "Should you have any questions regarding this privacy policy or the treatment of your personal data, please contact our concierge at info@kayoze.com. We are committed to addressing your concerns with the same attention to detail we apply to our craft."
    }
  ];

  return (
    <div className="bg-secondary min-h-screen pt-24 pb-40 overflow-hidden">
      
      {/* 1. TYPOGRAPHIC HERO */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center px-6 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
        </div>
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
           className="relative z-10"
        >
          <span className="text-[10px] font-sans font-black uppercase tracking-[0.8em] text-secondary/40 block mb-6 italic">Legal & Discretion</span>
          <h1 className="text-6xl md:text-9xl font-serif text-secondary tracking-tighter leading-none mb-12">
            Privacy <br /> <span className="italic">Policy</span>
          </h1>
          <div className="h-px w-24 bg-accent mx-auto" />
        </motion.div>

        {/* Decorative Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
           <span className="text-[40rem] font-serif italic text-secondary whitespace-nowrap">Kayoze</span>
        </div>
      </section>

      {/* 2. EDITORIAL CONTENT */}
      <section className="max-w-4xl mx-auto px-6 mt-32">
        <div className="space-y-32">
          {sections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.1 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                <div className="md:w-1/3 flex flex-row md:flex-col items-center md:items-start gap-6 border-b md:border-b-0 md:border-l border-primary/10 pb-6 md:pb-0 md:pl-12">
                   <div className="w-12 h-12 flex items-center justify-center rounded-full border border-primary/5 group-hover:bg-accent group-hover:border-accent transition-all duration-500 text-primary group-hover:text-secondary">
                      {section.icon}
                   </div>
                   <h2 className="text-xl md:text-2xl font-serif text-primary tracking-tight transition-colors group-hover:text-accent italic">
                      {section.title}
                   </h2>
                </div>
                <div className="md:w-2/3">
                   <p className="text-neutral-gray font-sans text-lg leading-relaxed">
                      {section.content}
                   </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. LAST UPDATED */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-40 pt-20 border-t border-primary/5 text-center"
        >
          <p className="text-[10px] font-sans font-black uppercase tracking-[0.5em] text-primary/20">
            Last Updated: March 2026
          </p>
          <div className="mt-12 flex items-center justify-center gap-4 opacity-5">
             <div className="h-[1px] w-8 bg-primary" />
             <span className="text-[9px] uppercase tracking-[0.6em] font-black">KAYOZE DURBAR MARG</span>
             <div className="h-[1px] w-8 bg-primary" />
          </div>
        </motion.div>
      </section>

      {/* Film Grain Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[99] opacity-[0.02] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      </div>

    </div>
  );
}
