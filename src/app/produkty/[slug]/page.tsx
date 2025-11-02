import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/sections/Footer';
import ProductCategoryPage from '@/components/ProductCategoryPage';
import ProductDetailPage from '@/components/ProductDetailPage';
import ProductsSection from '@/components/sections/ProductsSection';
import { CONTENT } from '@/translations/content';

const PRODUCT_SLUGS = Object.keys(CONTENT.pl.productDetails).filter((slug) => slug !== 'ploumeter-rc12');
const CATEGORY_SLUGS = CONTENT.pl.productCategories.map((category) => category.slug);
const ALL_SLUGS = [...PRODUCT_SLUGS, ...CATEGORY_SLUGS];

type ProductDetailParams = { slug: string };

export function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ProductDetailParams>;
}): Promise<Metadata> {
  const { slug } = await params;

  const category = CONTENT.pl.productCategories.find((item) => item.slug === slug);
  if (!category) {
    return {};
  }

  return {
    title: `KAYON - ${category.title}`,
    description: category.description,
  };
}

const ProductDetailRoute = async ({ params }: { params: Promise<ProductDetailParams> }) => {
  const { slug } = await params;

  const isCategory = CATEGORY_SLUGS.includes(slug);

  if (!isCategory) {
    notFound();
  }

  return (
    <>
      <Navigation showCenterLinks={false} isHomePage />
      <main>
        <ProductCategoryPage slug={slug} />
        <ProductsSection />
      </main>
      <Footer />
    </>
  );
};

export default ProductDetailRoute;
