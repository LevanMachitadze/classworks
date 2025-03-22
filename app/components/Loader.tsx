'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (step === 1) {
      setTimeout(() => setStep(2), 1500);
    } else if (step === 2) {
      setTimeout(() => {
        setStep(3);
        onComplete();
      }, 1500);
    }
  }, [step, onComplete]);

  return (
    <AnimatePresence>
      {step < 3 && (
        <motion.div
          className='fixed inset-0 flex items-center justify-center pointer-events-none z-50'
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {step === 1 && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 2, opacity: 0 }}
              transition={{ duration: 1 }}
              className='text-white text-3xl sm:text-5xl font-bold'
            >
              მოგესალმებით
            </motion.span>
          )}
          {step === 2 && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 2, opacity: 0 }}
              transition={{ duration: 1 }}
              className='text-white text-3xl sm:text-5xl font-bold'
            >
              Relax Room-ში
            </motion.span>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
