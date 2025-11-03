'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const ScrollDownButton = () => {
  return (
    <div id='scroll-down-button' className='fixed xl:relative z-30 top-[85vh] md:top-[70vh] lg:top-[80vh] xl:top-[45vh]'>
      <motion.button
        className="mx-auto h-[57px] w-[57px] z-30 cursor-pointer flex items-center justify-center rounded-[30px] bg-[#bcb7b7] transition-colors duration-300 hover:bg-[#d0d0d0]"
        type="button"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.6 } }}
        whileHover={{ y: -8 }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
            ease: "easeInOut"
          }
        }}
        onClick={() => {
          const nextSection = document.querySelector('section:nth-of-type(2)');
          nextSection?.scrollIntoView({ behavior: 'smooth' });
        }}
        aria-label="Scroll down"
      >
        <span className="material-symbols-rounded text-[24px] text-white">
          arrow_cool_down
        </span>
      </motion.button>
      <Image
        src="/central-shape.svg"
        className='mt-4 2xl:mt-14 mx-auto'
        alt=""
        width={49}
        height={177}
        priority
        draggable={false}
      />
    </div>
  );
};

export default ScrollDownButton;