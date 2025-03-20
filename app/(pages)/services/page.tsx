'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Services() {
  const router = useRouter();

  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen p-3 sm:p-6 text-white'>
      <button
        onClick={() => router.push('/')}
        className='absolute top-3 left-3 sm:top-5 sm:left-5 bg-white/20 hover:bg-white/40 transition text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg backdrop-blur-md text-xs sm:text-sm'
      >
        ⬅ უკან
      </button>

      <h2 className='text-white font-bold text-2xl sm:text-3xl md:text-4xl border border-dashed rounded-full px-4 py-2 mb-4 sm:mb-6 backdrop-blur-md bg-white/10 hover:shadow-lg cursor-pointer transition'>
        სერვისები
      </h2>

      {/* Responsive Table */}
      <div className='w-full max-w-md sm:max-w-3xl overflow-x-auto rounded-lg bg-white/10 backdrop-blur-lg shadow-md p-3 sm:p-4 md:p-6'>
        <table className='w-full text-xs sm:text-sm md:text-base border border-gray-500 text-center'>
          <thead>
            <tr className='bg-white/20'>
              <th className='border border-gray-400 p-1 sm:p-2 md:p-3 w-[50%]'>
                დასახელება
              </th>
              <th className='border border-gray-400 p-1 sm:p-2 md:p-3 w-[15%]'>
                პროც.
              </th>
              <th className='border border-gray-400 p-1 sm:p-2 md:p-3 w-[15%]'>
                დრო
              </th>
              <th className='border border-gray-400 p-1 sm:p-2 md:p-3 w-[20%]'>
                ფასი
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ['სარელაქსაციო', 1, '1სთ', '30₾'],
              ['სპორტული', 1, '1სთ', '35₾'],
              ['ანტიცელულიტური', 1, '1სთ', '35₾'],
              ['სამკურნალო', 1, '1სთ', '40₾'],
              ['სარეაბილიტაციო', 1, '1სთ', '40₾'],
              ['ანტიცელულიტური', 12, '1სთ', '400₾'],
              ['სარელაქსაციო', 12, '1სთ', '330₾'],
              ['სპორტული', 12, '1სთ', '400₾'],
              ['სამკურნალო', 12, '1სთ', '450₾'],
            ].map(([name, sessions, duration, price], idx) => (
              <tr
                key={idx}
                className={`border border-gray-400 hover:bg-white/20 transition hover:shadow-md ${
                  idx % 2 === 0 ? 'bg-white/10' : 'bg-white/5'
                }`}
              >
                <td className='border border-gray-400 p-1 sm:p-2 md:p-3 text-left whitespace-normal'>
                  {name}
                </td>
                <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>
                  {sessions}
                </td>
                <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>
                  {duration}
                </td>
                <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>
                  {price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
