"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WishlistModal({ isOpen, onClose }: WishlistModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="absolute top-[calc(100%+15px)] left-1/2 -translate-x-1/2 z-[100] w-[280px] pointer-events-auto">
          {/* Arrow Pointer */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-neutral-light" />
          
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] relative overflow-hidden border border-neutral-light"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-primary/40 hover:text-primary transition-colors p-1"
              aria-label="Close modal"
            >
              <X size={16} strokeWidth={2} />
            </button>

            <div className="p-8 flex flex-col items-center text-center">
              {/* Title */}
              <h2 className="text-xl font-serif text-primary mb-5 tracking-tight">
                Added to Wishlist
              </h2>

              {/* Divider */}
              <div className="w-full h-[0.5px] bg-neutral-light mb-6 opacity-60" />

              {/* Message */}
              <p className="text-[#4A5568] text-[13px] font-sans leading-relaxed mb-8 px-2">
                Sign in to create lists and save your items for longer than 30 days
              </p>

              {/* Main Action Button */}
              <button 
                className="w-full bg-[#1A3651] text-secondary font-sans font-bold text-[10px] tracking-[0.2em] uppercase py-4 px-6 hover:bg-primary transition-colors shadow-sm"
              >
                Sign In / Register
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
