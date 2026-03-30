"use client";

import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingBag, Heart, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WishlistPage() {
  const { wishlistIds, toggleWishlist } = useWishlist();
  const { addItem } = useCart();

  const wishlistedProducts = products.filter((p) => wishlistIds.includes(p.id));

  const handleMoveToBag = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      priceValue: product.priceValue,
      size: "40R", // Default size for wishlist items if not specified
      image: product.images[0],
      quantity: 1,
    });
    // Optional: toggleWishlist(product.id); // Remove from wishlist after adding to bag? 
    // Usually, users expect it to stay until removed or specifically "moved".
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary w-full">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif tracking-[0.2em] uppercase text-primary mb-4">My Wishlist</h1>
          <div className="w-24 h-[1px] bg-accent mx-auto mb-6" />
          <p className="text-neutral-gray font-sans tracking-wide">Your curated selection of luxury pieces.</p>
        </header>

        <AnimatePresence mode="popLayout">
          {wishlistedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {wishlistedProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="group bg-white flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-500 rounded-sm overflow-hidden"
                >
                  {/* Product Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Link href={`/product/${product.id}`}>
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </Link>
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-primary hover:text-accent transition-colors shadow-sm cursor-pointer z-10"
                      title="Remove from wishlist"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  {/* Product Details */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-4">
                      <p className="text-[10px] uppercase tracking-widest text-neutral-gray mb-1">{product.category}</p>
                      <Link href={`/product/${product.id}`}>
                        <h3 className="text-xl font-serif text-primary group-hover:text-accent transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                    </div>
                    
                    <div className="mt-auto pt-6 border-t border-neutral-light flex items-center justify-between">
                      <p className="text-lg font-sans text-primary">{product.price}</p>
                      <button
                        onClick={() => handleMoveToBag(product)}
                        className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-primary hover:text-accent transition-colors cursor-pointer"
                      >
                        Add to Bag <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-32 text-center"
            >
              <div className="w-24 h-24 bg-neutral-light/50 rounded-full flex items-center justify-center mb-8">
                <Heart size={40} className="text-neutral-gray opacity-30" />
              </div>
              <h2 className="text-3xl font-serif text-primary mb-4">Your wishlist is empty</h2>
              <p className="text-neutral-gray max-w-sm mx-auto mb-10 font-sans tracking-wide">
                Discover our signature collections and save your favorite pieces here.
              </p>
              <Link
                href="/shop"
                className="px-10 py-4 bg-primary text-secondary font-sans uppercase tracking-[0.2em] text-xs hover:bg-accent transition-all duration-300 shadow-lg"
              >
                Explore Shop
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
