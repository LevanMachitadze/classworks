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

      <div className='w-full max-w-md sm:max-w-3xl overflow-x-auto rounded-lg bg-white/10 backdrop-blur-lg shadow-md p-3 sm:p-4 md:p-6'>
        <table className='w-full text-xs sm:text-sm md:text-base border border-gray-500 text-center'>
          <thead>
            <tr className='bg-white/20'>
              <th className='border border-gray-400 p-1 sm:p-2 md:p-3 w-[50%]'>
                მასაჟის დასახელება
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
            <tr className='border border-gray-400 bg-white/10 hover:bg-white/20 transition hover:shadow-md'>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3 whitespace-normal'>
                სარელაქსაციო
              </td>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>1</td>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>1სთ</td>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>30₾</td>
            </tr>
            <tr className='border border-gray-400 bg-white/5 hover:bg-white/20 transition hover:shadow-md'>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3 whitespace-normal'>
                სპორტული
              </td>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>1</td>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>1სთ</td>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>35₾</td>
            </tr>
            <tr className='border border-gray-400 bg-white/10 hover:bg-white/20 transition hover:shadow-md'>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3 whitespace-normal'>
                ანტიცელულიტური
              </td>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>1</td>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>1სთ</td>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>35₾</td>
            </tr>
            <tr className='border border-gray-400 bg-white/5 hover:bg-white/20 transition hover:shadow-md'>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3 whitespace-normal'>
                სამკურნალო
              </td>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>1</td>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>1სთ</td>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>40₾</td>
            </tr>
            <tr className='border border-gray-400 bg-white/10 hover:bg-white/20 transition hover:shadow-md'>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3 whitespace-normal'>
                სარეაბილიტაციო
              </td>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>1</td>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>1სთ</td>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>40₾</td>
            </tr>
            <tr className='border border-gray-400 bg-white/5 hover:bg-white/20 transition hover:shadow-md'>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3 whitespace-normal'>
                ანტიცელულიტური
              </td>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>12</td>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>1სთ</td>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>400₾</td>
            </tr>
            <tr className='border border-gray-400 bg-white/10 hover:bg-white/20 transition hover:shadow-md'>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3 whitespace-normal'>
                სარელაქსაციო
              </td>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>12</td>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>1სთ</td>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>330₾</td>
            </tr>
            <tr className='border border-gray-400 bg-white/5 hover:bg-white/20 transition hover:shadow-md'>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3 whitespace-normal'>
                სპორტული
              </td>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>12</td>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>1სთ</td>
              <td className='border border-gray-400 p-1 sm:p-2 md:p-3'>400₾</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
