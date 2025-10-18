import ShuffleHero from "@/components/ShuffleHero";
import DualYearBand from "@/components/DualYearBand";
import LogoScroller from "@/components/LogoScroller";
import ImageGallery from "@/components/ImageGallery";
import YearAwareProgramCards from "@/components/YearAwareProgramCards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <div id="hero-section">
        <ShuffleHero />
      </div>
      
      <div id="dual-year-section">
        <DualYearBand />
      </div>
      
      <div id="logo-section" className="pt-4 pb-4">
        <LogoScroller />
      </div>
      
      <div id="image-gallery-section">
        <ImageGallery />
      </div>
      
      <div id="program-cards-section">
        <YearAwareProgramCards />
      </div>
      
      <Footer />
    </div>
  );
}
