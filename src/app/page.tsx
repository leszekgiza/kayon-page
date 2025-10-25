import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import GreenSection from '@/components/GreenSection';
import BenefitsSection from '@/components/BenefitsSection';
import OfferSection from '@/components/OfferSection';
import SystemsSection from '@/components/SystemsSection';
import ProductsSection from '@/components/ProductsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

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
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
