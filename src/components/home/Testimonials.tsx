export default function Testimonials() {
  return (
    <section className="py-32 bg-secondary w-full">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-12">
          <span className="text-accent text-6xl font-serif leading-none tracking-tighter">&quot;</span>
        </div>
        <blockquote className="text-2xl md:text-4xl font-serif text-primary leading-tight mb-8">
          The attention to detail is unparalleled. My wedding tuxedo from Kayoze was absolutely perfect, an impeccable fit that made me feel effortlessly elegant.
        </blockquote>
        <div className="flex flex-col items-center">
          <div className="w-12 h-px bg-accent mb-4" />
          <cite className="font-sans text-neutral-gray not-italic tracking-widest uppercase text-sm">
            Arjun S., Kathmandu
          </cite>
        </div>
      </div>
    </section>
  );
}
