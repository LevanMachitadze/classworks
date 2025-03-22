'use client';

import { useRouter } from 'next/navigation';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  const router = useRouter();

  return (
    <main className='flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-10'>
      <button
        onClick={() => router.push('/')}
        className='absolute top-4 left-4 sm:top-5 sm:left-5 bg-white/20 hover:bg-white/40 transition text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg backdrop-blur-md text-sm sm:text-base'
      >
        ⬅ უკან
      </button>
      <div className='bg-white/10 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-2xl text-white text-center max-w-lg w-full space-y-6 sm:space-y-8 flex flex-col items-center'>
        <h1 className='text-3xl sm:text-4xl font-bold tracking-wide'>
          კონტაქტი
        </h1>

        <div className='space-y-4 sm:space-y-5 text-base sm:text-lg w-full'>
          <div className='flex items-center gap-3 sm:gap-4 justify-center'>
            <Mail className='w-6 sm:w-7 h-6 sm:h-7 text-white' />
            <a
              href='mailto:ratimumladze19900930@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline text-lg sm:text-xl'
            >
              ratimumladze19900930@gmail.com
            </a>
          </div>
          <div className='flex items-center gap-3 sm:gap-4 justify-center'>
            <Phone className='w-6 sm:w-7 h-6 sm:h-7 text-white' />
            <a
              href='tel:+995597956646'
              className='hover:underline text-lg sm:text-xl'
            >
              +597 95 66 46
            </a>
          </div>
        </div>

        <div className='flex justify-center gap-5 sm:gap-6 pt-6'>
          <a
            href='https://www.facebook.com/p/%E1%83%A0%E1%83%94%E1%83%9A%E1%83%90%E1%83%A5%E1%83%A1-%E1%83%A0%E1%83%A3%E1%83%9B%E1%83%98-Relax-Room-100095126013059/?locale=fo_FO'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:scale-110 sm:hover:scale-125 transition'
          >
            <Facebook className='w-8 sm:w-10 h-8 sm:h-10 text-white' />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:scale-110 sm:hover:scale-125 transition'
          >
            <Instagram className='w-8 sm:w-10 h-8 sm:h-10 text-white' />
          </a>
        </div>
      </div>
    </main>
  );
}
