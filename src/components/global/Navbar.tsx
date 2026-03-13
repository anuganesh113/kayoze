"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag, User, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import SearchModal from "./SearchModal";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Shop", href: "/shop" },
    { name: "Wedding", href: "/wedding" },
    { name: "Lookbook", href: "/lookbook" },
    { name: "Contact", href: "/contact" },
    { name: "Book Appointment", href: "/book" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-primary text-secondary py-4 shadow-md"
          : isHome
          ? "bg-transparent text-secondary py-6"
          : "bg-secondary text-foreground py-4 border-b border-neutral-light"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Links - Left */}
        <div className="hidden lg:flex gap-8 text-sm uppercase tracking-widest font-medium">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="relative w-32 md:w-40 h-12 md:h-16 lg:flex-1 flex justify-center items-center"
        >
          <div className="relative w-full h-full">
            <Image 
              src="/img/logo.jpg" 
              alt="KAYOZE DURBAR MARG" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Links - Right */}
        <div className="hidden lg:flex gap-8 text-sm uppercase tracking-widest font-medium lg:justify-end">
          {navLinks.slice(3).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex gap-4 lg:gap-6 items-center lg:ml-8">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="hover:text-accent transition-colors cursor-pointer"
          >
            <Search size={20} />
          </button>
          <button 
            onClick={() => setIsAuthOpen(true)}
            className="hidden lg:block hover:text-accent transition-colors cursor-pointer"
          >
            <User size={20} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="hover:text-accent transition-colors relative cursor-pointer"
            aria-label={`Shopping bag with ${totalItems} items`}
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-accent text-secondary text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-primary/20"
              >
                {totalItems}
              </motion.span>
            )}
          </button>
        </div>
      </div>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-primary text-secondary p-6 shadow-xl lg:hidden flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif tracking-wide border-b border-neutral-charcoal pb-4"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/account"
            className="flex items-center gap-4 text-lg font-serif tracking-wide pt-2"
          >
            <User size={24} /> My Account
          </Link>
        </div>
      )}
    </nav>
  );
}
