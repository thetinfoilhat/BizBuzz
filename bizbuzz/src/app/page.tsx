import ShuffleHero from "@/components/home/ShuffleHero";
import LogoScroller from "@/components/home/LogoScroller";
import ImageGallery from "@/components/home/ImageGallery";
import YearAwareProgramCards from "@/components/years/YearAwareProgramCards";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <div id="hero-section">
        <ShuffleHero />
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
