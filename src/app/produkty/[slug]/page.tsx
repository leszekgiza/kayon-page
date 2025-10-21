import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductDetailPage from '@/components/ProductDetailPage';
import { CONTENT } from '@/translations/content';

const SLUGS = Object.keys(CONTENT.pl.productDetails);

type ProductDetailParams = { slug: string };

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ProductDetailParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = CONTENT.pl.productDetails[slug];
  if (!detail) {
    return {};
  }

  return {
    title: `KAYON – ${detail.title}`,
    description: detail.intro,
  };
}

const ProductDetailRoute = async ({ params }: { params: Promise<ProductDetailParams> }) => {
  const { slug } = await params;

  if (!SLUGS.includes(slug)) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main>
        <ProductDetailPage slug={slug} />
      </main>
      <Footer />
    </>
  );
};

export default ProductDetailRoute;
