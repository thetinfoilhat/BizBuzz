import ShuffleHero from "@/components/ShuffleHero";
import LogoScroller from "@/components/LogoScroller";
import StatsSection from "@/components/StatsSection";
import ImageGallery from "@/components/ImageGallery";
import ProgramCards from "@/components/ProgramCards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <div id="hero-section">
        <ShuffleHero />
      </div>
      
      <div id="logo-section" className="pt-4 pb-4">
        <LogoScroller />
      </div>
      
      <div id="stats-section" className="pt-4">
        <StatsSection />
      </div>
      
      <div id="image-gallery-section">
        <ImageGallery />
      </div>
      
      <div id="program-cards-section">
        <ProgramCards />
      </div>
      
      <Footer />
    </div>
  );
}
