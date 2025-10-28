import ReferenceNavigation from '@/components/reference/ReferenceNavigation';
import ReferenceHero from '@/components/reference/ReferenceHero';
import ReferenceFeatures from '@/components/reference/ReferenceFeatures';
import ReferenceClients from '@/components/reference/ReferenceClients';
import ReferenceBenefits from '@/components/reference/ReferenceBenefits';
import ReferenceOffer from '@/components/reference/ReferenceOffer';
import ReferenceSystems from '@/components/reference/ReferenceSystems';
import ReferenceProducts from '@/components/reference/ReferenceProducts';
import ReferenceFooter from '@/components/reference/ReferenceFooter';

export default function ReferencePage() {
  return (
    <div className="flex w-[1920px] flex-col items-center bg-white">
      <ReferenceNavigation />
      <ReferenceHero />
      <ReferenceFeatures />
      <ReferenceClients />
      <ReferenceBenefits />
      <ReferenceOffer />
      <ReferenceSystems />
      <ReferenceProducts />
      <ReferenceFooter />
    </div>
  );
}
