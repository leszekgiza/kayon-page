import { motion } from "framer-motion";
import parse from "html-react-parser";
import { AnimatePresence } from "framer-motion";

const ProductDetailsModal = ({ items, expandedProduct, setExpandedProduct }: any) => {
  return (
    <AnimatePresence>
      {
        expandedProduct && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 px-4 py-12 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedProduct(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-3xl rounded-[32px] bg-white px-8 py-10 text-primary shadow-[0_45px_90px_rgba(0,0,0,0.45)] md:px-14 md:py-12"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setExpandedProduct(null)}
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors duration-200 hover:bg-primary-light"
                aria-label="Zamknij"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>

              {(() => {
                const product = items.find((item: any) => item.slug === expandedProduct);
                if (!product) return null;

                return (
                  <>
                    <h2 className="pr-14 text-xl font-semibold text-primary md:text-2xl">{parse(product.title)}</h2>

                    {/* Product intro */}
                    {product.intro && (
                      <p className="mt-6 text-lg leading-relaxed text-primary font-bold">{parse(product.intro)}</p>
                    )}

                    {/* Additional description paragraphs */}
                    {product.description && product.description.length > 0 && (
                      <div className="mt-4 space-y-3">
                        {product.description.map((paragraph: string, index: number) => (
                          <p key={index} className="text-base leading-relaxed text-primary/90">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Features section */}
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-primary">{product.featuresHeading}</h3>
                      <ul className="mt-4 space-y-3 text-sm text-primary/90 md:text-base">
                        {product.features.map((feature: string) => (
                          <li key={feature} className="flex items-start gap-3">
                            <span className="material-symbols-rounded mt-0.5 text-[20px] leading-none text-[#77bb61]">arrow_right</span>
                            <span>{parse(feature)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )
      }
    </AnimatePresence >
  );
};

export default ProductDetailsModal;