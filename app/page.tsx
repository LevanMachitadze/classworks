'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Loader from './components/Loader';

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loader onComplete={handleLoaderComplete} />
      ) : (
        <motion.main
          className='flex flex-col items-center justify-center min-h-screen px-4 sm:px-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className='text-center space-y-8'>
            <h1 className='uppercase text-white tracking-widest font-semibold text-3xl sm:text-4xl md:text-5xl drop-shadow-lg'>
              მოგესალმებით Relax Room-ში
            </h1>

            <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-6'>
              {[
                { href: '/aboutus', label: 'ჩვენს შესახებ' },
                { href: '/services', label: 'სერვისები' },
                { href: '/contact', label: 'კონტაქტები' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className='px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white uppercase border border-white rounded-lg backdrop-blur-md bg-white/10 hover:bg-white/30 hover:text-black transition-all duration-300 shadow-lg'
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <footer className='absolute bottom-4 sm:bottom-6 w-full text-center'>
            <p className='text-white text-sm sm:text-base'>
              © {new Date().getFullYear()} Relax Room. All rights reserved.
            </p>
            <p className='text-white text-xs sm:text-sm'>
              Created By MALE Group
            </p>
          </footer>
        </motion.main>
      )}
    </>
  );
}
