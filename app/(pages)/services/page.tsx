'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Services() {
  const router = useRouter();

  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen p-6 text-white'>
      <button
        onClick={() => router.push('/')}
        className='absolute top-5 left-5 bg-white/20 hover:bg-white/40 transition text-white px-4 py-2 rounded-lg backdrop-blur-md'
      >
        ⬅ უკან
      </button>

      <h2 className='text-white font-bold text-4xl md:text-5xl border border-dashed rounded-full px-6 py-3 mb-8 backdrop-blur-md bg-white/10 hover:shadow-lg cursor-pointer transition'>
        სერვისები
      </h2>

      <div className='w-full max-w-4xl overflow-x-auto rounded-xl bg-white/10 backdrop-blur-lg shadow-lg p-6'>
        <table className='w-full border border-gray-500 text-center'>
          <thead>
            <tr className='bg-white/20 text-lg'>
              <th className='border border-gray-400 p-3'>მასაჟის დასახელება</th>
              <th className='border border-gray-400 p-3'>
                პროცედურის რაოდენობა
              </th>
              <th className='border border-gray-400 p-3'>
                ხანგრძლივობა (საათი)
              </th>
              <th className='border border-gray-400 p-3'>ფასი</th>
            </tr>
          </thead>
          <tbody className='text-base'>
            {[
              ['სარელაქსაციო მასაჟი', 1, 1, 30],
              ['სპორტულ გამაჯანსაღებელი', 1, 1, 35],
              ['ანტიცელულიტური მასაჟი (ორივე ზონა პლიუს მუცელი)', 1, 1, 35],
              [
                'სამკურნალო მასაჟი (სკოლიოზი, ოსტეოქონდროზი, პლიუს ვარჯიშები)',
                1,
                1,
                40,
              ],
              ['სარეაბილიტაციო მასაჟი', 1, 1, 40],
              ['ანტიცელულიტური მასაჟი', 12, 1, 400],
              ['სარელაქსაციო მასაჟი', 12, 1, 330],
              ['სპორტულ გამაჯანსაღებელი მასაჟი', 12, 1, 400],
              [
                'სამკურნალო მასაჟი (სკოლიოზი, ოსტეოქონდროზი, პლიუს ვარჯიშები)',
                12,
                1,
                450,
              ],
            ].map(([name, sessions, duration, price], idx) => (
              <tr
                key={idx}
                className={`border border-gray-400 hover:bg-white/20 transition hover:shadow-md ${
                  idx % 2 === 0 ? 'bg-white/10' : 'bg-white/5'
                }`}
              >
                <td className='border border-gray-400 p-3'>{name}</td>
                <td className='border border-gray-400 p-3'>{sessions}</td>
                <td className='border border-gray-400 p-3'>{duration}</td>
                <td className='border border-gray-400 p-3'>{price}₾</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
