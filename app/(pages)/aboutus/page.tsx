'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AboutUs() {
  const router = useRouter();

  return (
    <main className='flex flex-col items-center justify-start min-h-screen px-4 md:px-6 py-12'>
      <button
        onClick={() => router.push('/')}
        className='absolute top-4 left-4 md:top-5 md:left-5 bg-white/20 hover:bg-white/40 transition text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg backdrop-blur-md text-sm md:text-base'
      >
        ⬅ უკან
      </button>

      <div className='bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-2xl text-white text-center max-w-4xl w-full space-y-6 md:space-y-8 mt-10'>
        <h2 className='text-2xl md:text-3xl font-bold tracking-wide mt-4 md:mt-6 mb-3 md:mb-4'>
          ჩვენს შესახებ
        </h2>

        <div className='w-full text-center'>
          <Image
            src='/mainImg.jpg'
            alt='რატი მუმლაძე'
            width={300}
            height={400}
            className='rounded-lg mx-auto w-3/4 sm:w-1/2 md:w-[300px]'
          />
          <h1 className='text-2xl md:text-4xl font-bold mt-3 md:mt-4 text-white'>
            რატი მუმლაძე
          </h1>
        </div>

        <div className='space-y-4 md:space-y-6 text-base md:text-lg'>
          <p>
            🔹 2009-2014 წლებში სწავლობდა საქართველოს სახელმწიფო სამედიცინო
            უნივერსიტეტში
          </p>
          <p>
            🔹 2017 წელს დაამთავრა ბალნეოლოგიური კურორტის სამედიცინო მასაჟის
            სკოლა ავანი.
          </p>
          <p>
            🔹 2018 წელს დაამთავრა მასაჟის სკოლა, სწავლება მოიცავდა ანატომია
            ფიზიოლოგიას.
          </p>
          <p>
            🔹 2023 წელს გაიარა ტრეინინგ კურსი პროფესიონალთა მასაჟის სკოლაში.
          </p>
          <p>
            🔹 2023 წელს გაიარა სამკურნალო მასაჟის ტრეინინგ კურსი ნ.ბ-ს
            აკადემიაში.
          </p>
          <p>🔹 2023 წელს გაიარა სარეაბილიტაციო მასაჟის სრული კურსი.</p>
          <p>
            🔹 2024 წელს გაიარა ბავშვთა სამკურნალო მასაჟის და ფიზკულტურის სრული
            კურსი.
          </p>
        </div>
      </div>
    </main>
  );
}
