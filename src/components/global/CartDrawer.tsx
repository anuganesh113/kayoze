"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-secondary shadow-2xl z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-primary/10 flex justify-between items-center bg-primary text-secondary">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} />
                <h2 className="font-serif text-xl tracking-wide uppercase">Your Bag ({totalItems})</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-secondary/10 rounded-full transition-colors cursor-pointer"
                aria-label="Close cart"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-primary/20">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 bg-neutral-light/30 rounded-full flex items-center justify-center">
                    <ShoppingBag size={32} className="text-neutral-gray" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-primary mb-2">Your bag is empty</h3>
                    <p className="text-neutral-gray font-sans text-sm">Discover our signature collections and find your perfect fit.</p>
                  </div>
                  <Link 
                    href="/shop" 
                    onClick={() => setIsCartOpen(false)}
                    className="px-8 py-3 bg-primary text-secondary font-sans uppercase tracking-widest text-xs hover:bg-accent transition-all cursor-pointer"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <motion.div 
                      layout
                      key={`${item.id}-${item.size}`} 
                      className="flex gap-4 group"
                    >
                      <div className="relative w-24 aspect-[3/4] bg-neutral-light/20 flex-shrink-0 overflow-hidden">
                        <Image 
                          src={item.image} 
                          alt={item.name} 
                          fill 
                          className="object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="font-serif text-primary text-sm tracking-wide line-clamp-2 uppercase">{item.name}</h4>
                            <button 
                              onClick={() => removeItem(item.id, item.size)}
                              className="text-neutral-gray hover:text-accent transition-colors p-1 cursor-pointer"
                              aria-label="Remove item"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <p className="text-[10px] font-sans text-neutral-gray uppercase tracking-widest mb-2">Size: <span className="text-primary font-bold">{item.size}</span></p>
                          <p className="font-sans text-sm text-primary font-medium">{item.price}</p>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="flex items-center border border-primary/10 rounded-full px-2 py-1">
                            <button 
                              onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                              className="p-1 hover:text-accent transition-colors disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
                              disabled={item.quantity <= 1}
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-xs font-sans font-bold">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                              className="p-1 hover:text-accent transition-colors cursor-pointer"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer / Summary */}
            {cart.length > 0 && (
              <div className="p-6 bg-primary text-secondary border-t border-secondary/10 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-serif text-lg tracking-wide uppercase">Subtotal</span>
                  <span className="font-sans text-xl font-medium tracking-wide">NPR {totalPrice.toLocaleString()}</span>
                </div>
                <p className="text-[10px] font-sans uppercase tracking-[0.2em] mb-6 opacity-60 text-center italic">
                  Shipping and taxes calculated at checkout
                </p>
                <div className="space-y-3">
                  <Link 
                    href="/checkout"
                    onClick={() => setIsCartOpen(false)}
                    className="w-full bg-secondary text-primary py-4 font-sans uppercase tracking-[0.2em] text-xs font-bold hover:bg-accent hover:text-secondary transition-all flex items-center justify-center gap-3 group cursor-pointer"
                  >
                    Checkout Now <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="w-full border border-secondary/30 py-4 font-sans uppercase tracking-[0.2em] text-[10px] hover:bg-secondary/10 transition-all text-center cursor-pointer"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
