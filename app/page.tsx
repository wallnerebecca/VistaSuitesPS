import HeroSection from './components/HeroSection';
import LuxuryBathroomsSection from './components/LuxuryBathroomsSection';
import RoomsSection from './components/RoomsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FacilitiesSection from './components/FacilitiesSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <RoomsSection />
      <TestimonialsSection />
      <LuxuryBathroomsSection />
      <FacilitiesSection />
      <Footer />
    </>
  );
}

