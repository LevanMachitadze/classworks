'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AboutUs() {
  const router = useRouter();

  return (
    <main className='flex flex-col items-center justify-start min-h-screen px-6 py-12'>
      <button
        onClick={() => router.push('/')}
        className='absolute top-5 left-5 bg-white/20 hover:bg-white/40 transition text-white px-4 py-2 rounded-lg backdrop-blur-md'
      >
        ⬅ უკან
      </button>

      <div className='bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-2xl text-white text-center max-w-4xl w-full space-y-8 mt-10'>
        <h2 className='text-3xl font-bold tracking-wide mt-6 mb-4'>
          ჩვენს შესახებ
        </h2>

        <div className='w-full text-center'>
          <Image
            src='/mainImg.jpg'
            alt='რატი მუმლაძე'
            width={300}
            height={400}
            className='rounded-lg mx-auto'
          />
          <h1 className='text-4xl font-bold mt-4 text-white'>რატი მუმლაძე</h1>
        </div>

        <div className='space-y-6 text-lg'>
          <p>
            🔹 2009-2014 წლებში სწავლობდა საქართველოს სახელმწიფო სამედიცინო
            უნივერსიტეტში
          </p>
          <p>
            🔹 2017 წელს დაამთავრა ბალნეოლოგიური კურორტის სამედიცინო მასაჟის
            სკოლა ავანი. სწავლება მოიცავდა: ანატომიას და ფიზიოლოგიას, კლასიკურ
            ჰიგიენურ მასაჟს, წერტილოვან მასაჟს ჰიგიენური მასაჟის სისტემაში,
            მანუალურ თერაპიას ჰიგიენური მასაჟის სისტემაში და კოსმეტიკურ მასაჟს.
          </p>
          <p>
            🔹 2018 წელს დაამთავრა მასაჟის სკოლა, სწავლება მოიცავდა: ანატომია
            ფიზიოლოგიას, სარელაქსაციო მასაჟს, სპორტულ-გამაჯანსაღებელ მასაჟს და
            ანტიცელულიტურ მასაჟს.
          </p>
          <p>
            🔹 2023 წელს გაიარა ტრეინინგ კურსი პროფესიონალთა მასაჟის სკოლაში
          </p>
          <p>
            🔹 2023 წელს გაიარა სამკურნალო მასაჟის ტრეინინგ კურსი ნ.ბ-ს
            აკადემიაში
          </p>
          <p>🔹 2023 წელს გაიარა სარეაბილიტაციო მასაჟის სრული კურსი</p>
          <p>
            🔹 2024 წელს პროფესიული მასაჟის სკოლაში გაიარა ბავშვთა სამკურნალო
            მასაჟის და ფიზკულტურის სრული კურსი
          </p>
        </div>
      </div>
    </main>
  );
}
