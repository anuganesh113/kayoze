import Hero from "@/components/home/Hero";
import BestSellers from "@/components/home/BestSellers";
import TailoringSteps from "@/components/home/TailoringSteps";
import LookbookPreview from "@/components/home/LookbookPreview";
import Testimonials from "@/components/home/Testimonials";
import InstagramFeed from "@/components/home/InstagramFeed";
import FinalCTA from "@/components/home/FinalCTA";
import CategoryShowcase from "@/components/home/CategoryShowcase";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <CategoryShowcase />
      <BestSellers />
      <TailoringSteps />
      <LookbookPreview />
      <Testimonials />
      <InstagramFeed />
      <FinalCTA />
    </div>
  );
}
