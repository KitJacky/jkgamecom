import { Hero } from "@/components/Hero";
import { GamesSection } from "@/components/GamesSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <GamesSection />
      <Footer />
    </div>
  );
};

export default Index;
