"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function BookAppointmentPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-secondary w-full">
      <div className="bg-primary text-secondary py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif tracking-widest uppercase mb-4">Book An Appointment</h1>
        <p className="text-neutral-gray font-sans tracking-wide">Schedule your private consultation at our Durbar Marg boutique.</p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24">
        {submitted ? (
          <div className="text-center py-16 bg-neutral-light/10 border border-neutral-light">
            <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={32} />
            </div>
            <h2 className="text-3xl font-serif text-primary mb-4">Request Received</h2>
            <p className="text-neutral-gray font-sans mb-8">
              Thank you for choosing Kayoze. A master tailor will contact you shortly to confirm your appointment time.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="border border-primary text-primary px-8 py-3 font-sans uppercase tracking-widest text-xs hover:bg-primary hover:text-secondary transition-colors"
            >
              Book Another Appointment
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* Consultation Type */}
            <div>
              <h3 className="font-serif text-2xl text-primary mb-6 border-b border-neutral-light pb-4">1. Select Service</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { id: "custom_suit", title: "Custom Suit", desc: "For business and lifestyle" },
                  { id: "wedding", title: "Wedding Bespoke", desc: "For groom and groomsmen" },
                  { id: "alteration", title: "Alterations", desc: "Expert tailoring adjustments" }
                ].map((service) => (
                  <label key={service.id} className="cursor-pointer">
                    <input type="radio" name="service" value={service.id} className="peer sr-only" required />
                    <div className="border border-neutral-light p-6 text-center peer-checked:border-primary peer-checked:bg-primary peer-checked:text-secondary transition-colors">
                      <h4 className="font-sans uppercase tracking-widest text-sm font-medium mb-2">{service.title}</h4>
                      <p className="text-xs font-sans opacity-70">{service.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Date & Time */}
            <div>
              <h3 className="font-serif text-2xl text-primary mb-6 border-b border-neutral-light pb-4">2. Date & Time</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block font-sans uppercase text-xs tracking-widest text-primary mb-2">Preferred Date</label>
                  <input type="date" required className="w-full border-b border-neutral-light py-3 outline-none focus:border-primary transition-colors bg-transparent text-primary font-sans" />
                </div>
                <div>
                  <label className="block font-sans uppercase text-xs tracking-widest text-primary mb-2">Preferred Time</label>
                  <select required className="w-full border-b border-neutral-light py-3 outline-none focus:border-primary transition-colors bg-transparent text-primary font-sans">
                    <option value="">Select a time</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Personal Details */}
            <div>
              <h3 className="font-serif text-2xl text-primary mb-6 border-b border-neutral-light pb-4">3. Your Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block font-sans uppercase text-xs tracking-widest text-primary mb-2">Full Name</label>
                  <input type="text" required placeholder="John Doe" className="w-full border-b border-neutral-light py-3 outline-none focus:border-primary transition-colors bg-transparent text-primary font-sans" />
                </div>
                <div>
                  <label className="block font-sans uppercase text-xs tracking-widest text-primary mb-2">Phone Number</label>
                  <input type="tel" required placeholder="+977 98..." className="w-full border-b border-neutral-light py-3 outline-none focus:border-primary transition-colors bg-transparent text-primary font-sans" />
                </div>
                <div className="md:col-span-2">
                  <label className="block font-sans uppercase text-xs tracking-widest text-primary mb-2">Email Address</label>
                  <input type="email" required placeholder="john@example.com" className="w-full border-b border-neutral-light py-3 outline-none focus:border-primary transition-colors bg-transparent text-primary font-sans" />
                </div>
                <div className="md:col-span-2">
                  <label className="block font-sans uppercase text-xs tracking-widest text-primary mb-2">Additional Notes</label>
                  <textarea rows={4} placeholder="Tell us about the occasion..." className="w-full border-b border-neutral-light py-3 outline-none focus:border-primary transition-colors bg-transparent text-primary font-sans resize-none" />
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <button type="submit" className="bg-primary text-secondary px-12 py-4 font-sans uppercase tracking-widest text-sm font-medium hover:bg-primary-light transition-colors w-full md:w-auto">
                Request Appointment
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
