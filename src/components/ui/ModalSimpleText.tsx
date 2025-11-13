import { AnimatePresence, motion } from 'framer-motion';
import parse from 'html-react-parser';

const ModalSimpleText = (
  { setIsModalOpen, title, intro, content, buttonAriaLabel }
    :
    {
      setIsModalOpen: (value: boolean) => void,
      title: string,
      intro: string,
      content: any,
      buttonAriaLabel: string,
    }
) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-12 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsModalOpen(false)}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="hero-modal-title"
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.25 }}
        className="relative max-w-3xl rounded-[36px] bg-white px-10 py-12 text-primary shadow-[0_40px_80px_rgba(0,0,0,0.45)] md:px-16 md:py-14"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setIsModalOpen(false)}
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors duration-200 hover:bg-primary-light"
          aria-label={buttonAriaLabel}
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
        {title && (
          <h2 id="hero-modal-title" className="text-2xl font-semibold text-primary">
            {parse(title)}
          </h2>
        )}
        <p className="mt-6 text-base font-semibold leading-relaxed text-primary">{parse(intro)}</p>
        {content.map((paragraph, index) => (
          <p
            key={paragraph}
            className={`text-base leading-relaxed text-primary ${index === 0 ? 'mt-6' : 'mt-4'}`}
          >
            {parse(paragraph)}
          </p>
        ))}
      </motion.div>
    </motion.div>
  )
};

export default ModalSimpleText;