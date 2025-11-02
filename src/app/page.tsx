import Navigation from '@/components/ui/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import GreenSection from '@/components/sections/GreenSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import OfferSection from '@/components/sections/OfferSection';
import SystemsSection from '@/components/sections/SystemsSection';
import ProductsSection from '@/components/sections/ProductsSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <GreenSection />
        <BenefitsSection />
        <OfferSection />
        <SystemsSection />
        <ProductsSection />
      </main>
      <Footer />
    </>
  );
}
