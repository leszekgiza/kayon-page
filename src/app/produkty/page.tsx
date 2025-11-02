import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import ProductListingPage from '@/components/ProductListingPage';

export const metadata: Metadata = {
  title: 'KAYON – Produkty | Nowy standard pomiarów',
  description:
    'Poznaj szczegółowe informacje o produktach KAYON: modułach komunikacyjnych, wodomierzach i rozwiązaniach wspierających zdalny odczyt mediów.',
};

const ProductsPage = () => (
  <>
    <Navigation showCenterLinks={false} isHomePage={false} />
    <main>
      <ProductListingPage />
    </main>
    <Footer />
  </>
);

export default ProductsPage;
