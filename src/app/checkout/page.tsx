"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  Lock, 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  Wallet,
  CheckCircle2,
  Tag,
  ArrowLeft
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

const STEPS = ["Contact", "Shipping", "Delivery", "Payment"];

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, totalPrice, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [shippingFee, setShippingFee] = useState(500); 
  
  const [customerInfo, setCustomerInfo] = useState({ name: "", email: "", phone: "" });
  const [shippingDetails, setShippingDetails] = useState({ country: "Nepal", province: "", city: "", street: "", postal: "" });
  const [deliveryMethod, setDeliveryMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("card");

  const provinces = [
    "Koshi Province", "Madhesh Province", "Bagmati Province", 
    "Gandaki Province", "Lumbini Province", "Karnali Province", "Sudurpashchim Province"
  ];

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      handlePlaceOrder();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === "KAYOZE10") {
      setDiscount(totalPrice * 0.1);
    }
  };

  const handlePlaceOrder = () => {
    router.push("/checkout/confirmation");
    setTimeout(() => clearCart(), 1000);
  };

  const finalTotal = totalPrice + shippingFee - discount;

  if (cart.length === 0 && currentStep === 0) {
    return (
      <div className="pt-40 pb-20 px-6 text-center bg-white min-h-screen">
        <h1 className="text-3xl font-sans font-medium text-primary mb-6">Your shopping bag is empty.</h1>
        <p className="text-neutral-gray mb-10 max-w-md mx-auto">Please add items to your bag before proceeding to checkout.</p>
        <Link href="/shop" className="inline-block px-10 py-4 bg-primary text-white font-sans text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors">
          Browse Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50 min-h-screen pt-28 pb-20 font-sans text-primary">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* PROGRESS NAVIGATION */}
        <div className="flex items-center justify-between mb-12 border-b border-neutral-200 pb-6">
          <div className="flex items-center gap-8">
            {STEPS.map((step, idx) => (
              <div 
                key={step} 
                className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest ${
                  idx === currentStep ? "text-primary" : idx < currentStep ? "text-neutral-400" : "text-neutral-300"
                }`}
              >
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center text-[9px] ${
                  idx === currentStep ? "border-primary bg-primary text-white" : "border-neutral-200"
                }`}>
                  {idx < currentStep ? <CheckCircle2 size={12} strokeWidth={3} /> : idx + 1}
                </div>
                <span className="hidden sm:block">{step}</span>
                {idx < STEPS.length - 1 && <div className="hidden sm:block w-4 h-[1px] bg-neutral-200 mx-2" />}
              </div>
            ))}
          </div>
          <Link href="/shop" className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 hover:text-primary transition-colors flex items-center gap-2">
            <ArrowLeft size={12} /> Back to Store
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* MAIN FORM AREA */}
          <div className="lg:col-span-7">
            <div className="space-y-10">
              
              <AnimatePresence mode="wait">
                {/* STEP 1: CONTACT */}
                {currentStep === 0 && (
                  <motion.div 
                    key="step0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-white p-8 sm:p-10 border border-neutral-200"
                  >
                    <h2 className="text-xl font-medium mb-8">Contact Information</h2>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Full Name</label>
                        <input 
                          type="text" 
                          className="w-full h-12 px-4 border border-neutral-200 focus:border-primary outline-none transition-colors"
                          placeholder="Lord Kensington"
                          value={customerInfo.name}
                          onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Email Address</label>
                          <input 
                            type="email" 
                            className="w-full h-12 px-4 border border-neutral-200 focus:border-primary outline-none transition-colors"
                            placeholder="bespoke@kayoze.com"
                            value={customerInfo.email}
                            onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Phone Number</label>
                          <input 
                            type="tel" 
                            className="w-full h-12 px-4 border border-neutral-200 focus:border-primary outline-none transition-colors"
                            placeholder="+977 1234567890"
                            value={customerInfo.phone}
                            onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: SHIPPING */}
                {currentStep === 1 && (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-white p-8 sm:p-10 border border-neutral-200"
                  >
                    <h2 className="text-xl font-medium mb-8">Shipping Address</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Country</label>
                        <select className="w-full h-12 px-4 border border-neutral-200 focus:border-primary outline-none bg-white">
                          <option>Nepal</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Province</label>
                        <select 
                          className="w-full h-12 px-4 border border-neutral-200 focus:border-primary outline-none bg-white"
                          value={shippingDetails.province}
                          onChange={(e) => setShippingDetails({...shippingDetails, province: e.target.value})}
                        >
                          <option value="">Select Province</option>
                          {provinces.map(p => <option key={p} value={p}>{p}</option>)}
                        </select>
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Street Address</label>
                        <input 
                          type="text" 
                          className="w-full h-12 px-4 border border-neutral-200 focus:border-primary outline-none transition-colors"
                          placeholder="Durbar Marg, House No. 24"
                          value={shippingDetails.street}
                          onChange={(e) => setShippingDetails({...shippingDetails, street: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">City</label>
                        <input 
                          type="text" 
                          className="w-full h-12 px-4 border border-neutral-200 focus:border-primary outline-none transition-colors"
                          placeholder="Kathmandu"
                          value={shippingDetails.city}
                          onChange={(e) => setShippingDetails({...shippingDetails, city: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Postal Code</label>
                        <input 
                          type="text" 
                          className="w-full h-12 px-4 border border-neutral-200 focus:border-primary outline-none transition-colors"
                          placeholder="44600"
                          value={shippingDetails.postal}
                          onChange={(e) => setShippingDetails({...shippingDetails, postal: e.target.value})}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: DELIVERY */}
                {currentStep === 2 && (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-white p-8 sm:p-10 border border-neutral-200"
                  >
                    <h2 className="text-xl font-medium mb-8">Delivery Method</h2>
                    <div className="space-y-4">
                      <div 
                        onClick={() => {setDeliveryMethod("standard"); setShippingFee(500);}}
                        className={`p-6 border transition-all cursor-pointer flex justify-between items-center ${
                          deliveryMethod === "standard" ? "border-primary ring-1 ring-primary" : "border-neutral-200 hover:border-neutral-300"
                        }`}
                      >
                         <div className="flex items-center gap-4">
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                              deliveryMethod === "standard" ? "border-primary" : "border-neutral-300"
                            }`}>
                              {deliveryMethod === "standard" && <div className="w-2 h-2 rounded-full bg-primary" />}
                            </div>
                            <div>
                               <p className="text-sm font-bold">Standard Delivery</p>
                               <p className="text-[11px] text-neutral-400">Arrives in 3–5 business days</p>
                            </div>
                         </div>
                         <p className="text-sm font-bold">Rs. 500</p>
                      </div>

                      <div 
                        onClick={() => {setDeliveryMethod("express"); setShippingFee(1500);}}
                        className={`p-6 border transition-all cursor-pointer flex justify-between items-center ${
                          deliveryMethod === "express" ? "border-primary ring-1 ring-primary" : "border-neutral-200 hover:border-neutral-300"
                        }`}
                      >
                         <div className="flex items-center gap-4">
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                              deliveryMethod === "express" ? "border-primary" : "border-neutral-300"
                            }`}>
                              {deliveryMethod === "express" && <div className="w-2 h-2 rounded-full bg-primary" />}
                            </div>
                            <div>
                               <p className="text-sm font-bold">Express Delivery</p>
                               <p className="text-[11px] text-neutral-400">Arrives in 1–2 business days</p>
                            </div>
                         </div>
                         <p className="text-sm font-bold">Rs. 1,500</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: PAYMENT */}
                {currentStep === 3 && (
                  <motion.div 
                    key="step3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-white p-8 sm:p-10 border border-neutral-200"
                  >
                    <h2 className="text-xl font-medium mb-8">Payment Method</h2>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { id: "esewa", name: "eSewa" },
                        { id: "khalti", name: "Khalti" },
                        { id: "imepay", name: "IME Pay" },
                        { id: "card", name: "Credit / Debit Card" },
                        { id: "cod", name: "Cash on Delivery" }
                      ].map((pm) => (
                        <div 
                          key={pm.id}
                          onClick={() => setPaymentMethod(pm.id)}
                          className={`p-4 px-6 border transition-all cursor-pointer flex justify-between items-center ${
                            paymentMethod === pm.id ? "border-primary bg-neutral-50" : "border-neutral-200 hover:border-neutral-300"
                          }`}
                        >
                          <span className="text-sm font-medium">{pm.name}</span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                            paymentMethod === pm.id ? "border-primary" : "border-neutral-300"
                          }`}>
                            {paymentMethod === pm.id && <div className="w-2 h-2 rounded-full bg-primary" />}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-neutral-100 flex items-center gap-4 text-neutral-400">
                       <ShieldCheck size={20} />
                       <p className="text-[11px] leading-relaxed">
                          All transactions are secure and encrypted. You will be redirected to the secure portal of your selected payment provider to complete the purchase.
                       </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ACTIONS */}
              <div className="flex justify-between items-center pt-4">
                <button 
                  onClick={handleBack}
                  className={`text-[11px] font-bold uppercase tracking-widest transition-opacity ${
                    currentStep === 0 ? "opacity-0 pointer-events-none" : "hover:text-neutral-500"
                  }`}
                >
                  Back
                </button>
                <button 
                  onClick={handleNext}
                  className="px-12 py-4 bg-primary text-white text-[11px] font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors flex items-center gap-4 group"
                >
                  {currentStep === STEPS.length - 1 ? (
                    <span className="flex items-center gap-3"><Lock size={12} /> Place Order</span>
                  ) : (
                    <span className="flex items-center gap-3">Continue <ChevronRight size={14} /></span>
                  )}
                </button>
              </div>

              {/* TRUST */}
              <div className="mt-16 flex items-center justify-center gap-10 opacity-40">
                 <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                    <Lock size={14} /> Secure
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                    <Truck size={14} /> Tracking
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                    <ShieldCheck size={14} /> Guaranteed
                 </div>
              </div>
            </div>
          </div>

          {/* SIDEBAR SUMMARY */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-neutral-200 p-8 sm:p-10 sticky top-32">
              <h3 className="text-lg font-medium mb-10 border-b border-neutral-100 pb-5">Order Summary</h3>
              
              <div className="space-y-6 mb-10 max-h-[350px] overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-5">
                    <div className="relative w-16 aspect-[3/4] border border-neutral-100 flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold uppercase tracking-tight truncate">{item.name}</p>
                      <p className="text-[10px] text-neutral-400 mt-1">Size: {item.size} • Qty: {item.quantity}</p>
                      <p className="text-xs font-bold mt-2">Rs. {(item.priceValue * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-8">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="PROMO CODE"
                    className="flex-1 h-12 px-4 border border-neutral-200 focus:border-primary outline-none text-[11px] font-bold tracking-widest transition-colors uppercase"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button 
                    onClick={applyCoupon}
                    className="h-12 px-6 border border-primary text-[11px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all"
                  >
                    Apply
                  </button>
                </div>

                <div className="space-y-3 pt-6 border-t border-neutral-100">
                  <div className="flex justify-between text-xs font-medium text-neutral-400">
                    <span className="uppercase tracking-widest">Subtotal</span>
                    <span className="text-primary tracking-tight">Rs. {totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs font-medium text-neutral-400">
                    <span className="uppercase tracking-widest">Shipping</span>
                    <span className="text-primary tracking-tight">Rs. {shippingFee.toLocaleString()}</span>
                  </div>
                  {discount > 0 && (
                     <div className="flex justify-between text-xs font-bold text-accent">
                        <span className="uppercase tracking-widest">Discount (10%)</span>
                        <span className="tracking-tight">- Rs. {discount.toLocaleString()}</span>
                     </div>
                  )}
                  <div className="flex justify-between pt-6 border-t border-neutral-100">
                    <span className="text-[11px] font-bold uppercase tracking-widest">Total</span>
                    <span className="text-2xl font-bold tracking-tighter">Rs. {finalTotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="mt-8 text-center text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
               Kayoze Durbar Marg &copy; 2026
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
