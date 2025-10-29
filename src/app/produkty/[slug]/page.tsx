import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductCategoryPage from '@/components/ProductCategoryPage';
import ProductDetailPage from '@/components/ProductDetailPage';
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

  if (CATEGORY_SLUGS.includes(slug)) {
    const category = CONTENT.pl.productCategories.find((item) => item.slug === slug);
    if (!category) {
      return {};
    }

    return {
      title: `KAYON - ${category.title}`,
      description: category.description,
    };
  }

  const detail = CONTENT.pl.productDetails[slug];
  if (!detail) {
    return {};
  }

  return {
    title: `KAYON - ${detail.title}`,
    description: detail.intro,
  };
}

const ProductDetailRoute = async ({ params }: { params: Promise<ProductDetailParams> }) => {
  const { slug } = await params;

  const isCategory = CATEGORY_SLUGS.includes(slug);
  const isProduct = PRODUCT_SLUGS.includes(slug);

  if (!isCategory && !isProduct) {
    notFound();
  }

  return (
    <>
      <Navigation showCenterLinks={false} />
      <main>
        {isCategory ? <ProductCategoryPage slug={slug} /> : <ProductDetailPage slug={slug} />}
      </main>
      <Footer />
    </>
  );
};

export default ProductDetailRoute;
