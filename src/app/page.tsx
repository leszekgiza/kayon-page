import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PartnersSection from '@/components/PartnersSection';
import FeaturesSection from '@/components/FeaturesSection';
import BenefitsSection from '@/components/BenefitsSection';
import ProductsCarousel from '@/components/ProductsCarousel';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <PartnersSection />
        <FeaturesSection />
        <BenefitsSection />
        <ProductsCarousel />
      </main>
      <Footer />
    </>
  );
}
