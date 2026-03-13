import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-secondary-muted pt-20 pb-10 border-t border-neutral-charcoal">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-3xl font-serif font-bold tracking-widest text-secondary inline-block mb-6">
            KAYOZE
          </Link>
          <p className="text-neutral-light max-w-sm mb-8 font-sans leading-relaxed">
            Luxury menswear and custom tailoring. Precision, elegance, and timeless style for the modern gentleman, located in the heart of Durbar Marg, Kathmandu.
          </p>
          <div className="flex gap-6">
            <a 
              href="https://www.instagram.com/kayoze_durbarmarg/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-accent transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-serif text-lg text-secondary mb-6 tracking-wide">Explore</h4>
          <ul className="space-y-4 font-sans text-neutral-light">
            <li>
              <Link href="/shop" className="hover:text-accent transition-colors">Shop Collection</Link>
            </li>
            <li>
              <Link href="/wedding" className="hover:text-accent transition-colors">Wedding Suits</Link>
            </li>
            <li>
              <Link href="/lookbook" className="hover:text-accent transition-colors">Lookbook</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-serif text-lg text-secondary mb-6 tracking-wide">Client Services</h4>
          <ul className="space-y-4 font-sans text-neutral-light">
            <li>
              <Link href="/book" className="hover:text-accent transition-colors">Book an Appointment</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent transition-colors">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-neutral-charcoal flex flex-col md:flex-row justify-between items-center text-sm text-neutral-gray font-sans">
        <p>&copy; {new Date().getFullYear()} Kayoze Durbar Marg. All Rights Reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
