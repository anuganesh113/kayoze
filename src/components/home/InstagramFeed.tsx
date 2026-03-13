import Image from "next/image";
import { Instagram } from "lucide-react";

const feed = [
  "/img/insta-1.png",
  "/img/insta-2.png",
  "/img/insta-3.png",
  "/img/insta-4.png",
  "/img/insta-5.png",
  "/img/insta-6.png",
];

export default function InstagramFeed() {
  const instagramUrl = "https://www.instagram.com/kayoze_durbarmarg/?hl=en";

  return (
    <section className="py-24 bg-secondary-muted w-full border-t border-neutral-light/50">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <span className="text-accent text-[10px] font-sans tracking-[0.6em] uppercase mb-4 block">Social Registry</span>
        <h2 className="text-3xl md:text-5xl font-serif text-primary tracking-tight mb-8 italic">Follow Our <span className="not-italic">Journey</span></h2>
        <a 
          href={instagramUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group inline-flex items-center gap-3 text-primary/60 hover:text-accent transition-all font-sans text-sm tracking-widest uppercase border-b border-primary/10 pb-1"
        >
          <Instagram size={18} className="group-hover:scale-110 transition-transform" />
          <span>@kayoze_durbarmarg</span>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 g-0">
        {feed.map((src, index) => (
          <a 
            key={index} 
            href={instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative aspect-square group overflow-hidden block"
          >
            <Image 
              src={src} 
              alt={`Kayoze Instagram Post ${index + 1}`}
              fill
              className="object-cover transition-transform duration-[1.5s] ease-[0.16, 1, 0.3, 1] group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
            />
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <Instagram size={32} className="text-secondary" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
