import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WeddingPage() {
  return (
    <div className="pt-24 min-h-screen bg-secondary w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1546193430-c2d207739ed7?q=80&w=2000&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-secondary mb-6 tracking-wide drop-shadow-lg leading-tight">
            The Wedding Collection
          </h1>
          <p className="text-lg text-secondary/90 font-sans mb-10 tracking-widest uppercase">
            Impeccable style for your most important day.
          </p>
          <Link 
            href="/book" 
            className="inline-flex items-center justify-center gap-2 bg-secondary text-primary px-8 py-4 font-sans uppercase tracking-widest text-sm font-medium hover:bg-neutral-light transition-colors duration-300"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-primary tracking-wide mb-8">A Masterpiece for the Groom</h2>
        <p className="text-neutral-gray font-sans leading-relaxed text-lg">
          Whether you envision a classic black tuxedo, a sophisticated charcoal three-piece suit, or a unique velvet dinner jacket, Kayoze Durbar Marg offers an exceptional bespoke experience to ensure you look flawless when it matters most.
        </p>
      </section>

      {/* Grid Features */}
      <section className="py-12 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[3/4] md:aspect-square w-full">
          <Image src="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1500&auto=format&fit=crop" alt="Classic Tuxedo" fill className="object-cover" />
        </div>
        <div>
          <h3 className="text-3xl font-serif text-primary tracking-wide mb-6">The Classic Tuxedo</h3>
          <p className="text-neutral-gray font-sans leading-relaxed mb-8">
            The epitome of evening elegance. Our tuxedos feature satin or grosgrain lapels, precise shoulder expression, and luxurious Italian wool. Perfect for black-tie affairs and evening receptions.
          </p>
          <Link href="/shop?category=tuxedos" className="group inline-flex items-center gap-2 font-sans uppercase tracking-widest text-sm text-primary hover:text-accent transition-colors">
            Shop Tuxedos <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center flex-col-reverse md:flex-row-reverse">
        <div>
          <h3 className="text-3xl font-serif text-primary tracking-wide mb-6">The Destination Wedding</h3>
          <p className="text-neutral-gray font-sans leading-relaxed mb-8">
            For daytime ceremonies or warmer climates, our breathable linens, lightweight wools, and silk blends offer elegant alternatives that keep you comfortable without sacrificing style.
          </p>
          <Link href="/shop?category=suits" className="group inline-flex items-center gap-2 font-sans uppercase tracking-widest text-sm text-primary hover:text-accent transition-colors">
            Explore Suits <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="relative aspect-[3/4] md:aspect-square w-full">
          <Image src="https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=1500&auto=format&fit=crop" alt="Linen Suit" fill className="object-cover" />
        </div>
      </section>

      {/* Groomsmen Packages */}
      <section className="py-24 bg-primary text-secondary mt-12 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif tracking-wide mb-6">Groomsmen Packages</h2>
          <p className="text-neutral-gray font-sans leading-relaxed text-lg mb-10">
            Coordinating your groomsmen has never been more elegant. Enquire about our special group tailoring packages, ensuring your entire party looks cohesive and refined.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center gap-2 border border-secondary text-secondary px-8 py-4 font-sans uppercase tracking-widest text-sm font-medium hover:bg-secondary hover:text-primary transition-colors duration-300"
          >
            Enquire Now
          </Link>
        </div>
      </section>
    </div>
  );
}
