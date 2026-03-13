"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Package, Truck, ArrowRight, Printer } from "lucide-react";
import { useEffect, useState } from "react";

export default function ConfirmationPage() {
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    const random = Math.floor(1000 + Math.random() * 9000);
    setOrderNumber(`KD-${random}-${new Date().getFullYear()}`);
  }, []);

  return (
    <div className="bg-neutral-50 min-h-screen pt-28 pb-20 font-sans text-primary">
      
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT: SUCCESS INFO */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 sm:p-12 border border-neutral-200"
          >
            <div className="flex items-center gap-4 mb-10 text-emerald-600">
               <CheckCircle size={24} strokeWidth={2.5} />
               <span className="text-xs font-bold uppercase tracking-[0.2em]">Purchase Confirmed</span>
            </div>
            
            <h1 className="text-3xl font-medium tracking-tight mb-6">
              Thank you for your order.
            </h1>
            <p className="text-neutral-500 text-sm leading-relaxed mb-10">
              We've received your request and our atelier experts are now preparing your items. A confirmation email with tracking details will be sent shortly.
            </p>
            
            <div className="space-y-1 mb-12">
               <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Order Reference</p>
               <p className="text-xl font-bold">{orderNumber}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
               <div className="p-6 border border-neutral-100 bg-neutral-50/50">
                  <Package className="text-primary mb-4" size={20} />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Status</p>
                  <p className="text-sm font-bold">In Preparation</p>
               </div>
               <div className="p-6 border border-neutral-100 bg-neutral-50/50">
                  <Truck className="text-primary mb-4" size={20} />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Estimate</p>
                  <p className="text-sm font-bold">3 - 5 Business Days</p>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-10 border-t border-neutral-100">
               <Link href="/shop" className="px-10 py-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all text-center flex items-center justify-center gap-2">
                  Continue Shopping <ArrowRight size={14} />
               </Link>
               <button className="px-10 py-4 border border-neutral-200 text-primary text-[10px] font-bold uppercase tracking-widest hover:bg-neutral-50 transition-all text-center flex items-center justify-center gap-2">
                  <Printer size={14} /> Print Receipt
               </button>
            </div>
          </motion.div>

          {/* RIGHT: IMAGE & BRAND */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative aspect-[4/5] w-full overflow-hidden border border-neutral-200 grayscale contrast-125"
            >
              <Image 
                src="/img/checkout_success.png" 
                alt="Order Confirmed" 
                fill 
                className="object-cover" 
                priority
              />
            </motion.div>
            
            <div className="bg-white p-8 border border-neutral-200">
               <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Sartorial Assurance</h4>
               <p className="text-xs text-neutral-500 leading-relaxed italic">
                  "At Kayoze, we believe every garment tells a story. We are honored to be part of yours."
               </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
