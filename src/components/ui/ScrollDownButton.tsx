'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

const ScrollDownButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 150); // nasconde dopo 150px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="scroll-down-button"
          className="scroll-down-button fixed z-30 left-1/2 translate-x-[-50%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            className="mx-auto h-[57px] w-[57px] z-30 cursor-pointer flex items-center justify-center rounded-[30px] bg-[#bcb7b7] transition-colors duration-300 hover:bg-[#d0d0d0]"
            type="button"
            initial={{ y: -16 }}
            animate={{ y: 0, transition: { delay: 0.5, duration: 0.6 } }}
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
            className="mt-4 2xl:mt-14 mx-auto"
            alt=""
            width={49}
            height={177}
            priority
            draggable={false}
          />
        </motion.div>
      )}
    </AnimatePresence>

  );
};

export default ScrollDownButton;