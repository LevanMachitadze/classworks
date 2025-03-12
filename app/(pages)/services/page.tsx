'use client';

import React from 'react';

export default function Services() {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen p-24 text-white'>
        <div className='flex flex-col items-center justify-center h-screen p-24 text-white'>
          <h2 className='text-white font-bold text-[50px]  border border-dashed rounded-[50px] cursor-pointer  border-white px-3 py-2'>
            სერვისები
          </h2>
        </div>
        <table className='min-w-full border border-gray-300'>
          <thead>
            <tr>
              <th className='border border-gray-300 p-2'>მასაჟის დასახელება</th>
              <th className='border border-gray-300 p-2'>
                პროცედურის რაოდენობა
              </th>
              <th className='border border-gray-300 p-2'>
                ხანგრძ₾ივობა(საათი)
              </th>
              <th className='border border-gray-300 p-2'>ფასი</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-2'>
                სარელაქსაციო მასაჟი
              </td>
              <td className='border border-gray-300 p-2'>1</td>
              <td className='border border-gray-300 p-2'>1</td>
              <td className='border border-gray-300 p-2'>30</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-2'>
                სპორტულ გამაჯანსაღებელი
              </td>
              <td className='border border-gray-300 p-2'>1</td>
              <td className='border border-gray-300 p-2'>1</td>
              <td className='border border-gray-300 p-2'>35</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-2'>
                ანტიცელულიტური მასაჟი (ორივე ზონა პლიუს მუცელი){' '}
              </td>
              <td className='border border-gray-300 p-2'>1</td>
              <td className='border border-gray-300 p-2'>1</td>
              <td className='border border-gray-300 p-2'>35</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-2'>
                სამკურნალო მასაჟი(სკოლიოზი,ოსტექონდროზი, პლიუს ვარჯიშები)
              </td>
              <td className='border border-gray-300 p-2'>1</td>
              <td className='border border-gray-300 p-2'>1</td>
              <td className='border border-gray-300 p-2'>40</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-2 border-b-red-500'>
                სარეაბილიტაციო მასაჟი
              </td>
              <td className='border border-gray-300 p-2 border-b-red-500'>1</td>
              <td className='border border-gray-300 p-2 border-b-red-500'>1</td>
              <td className='border border-gray-300 p-2 border-b-red-500'>
                40
              </td>
            </tr>
            <tr>
              <td className='border border-red-500 p-2 '>
                ანტიცელულიტური მასაჟი{' '}
              </td>
              <td className='border border-red-500 p-2'>12</td>
              <td className='border border-red-500 p-2'>1</td>
              <td className='border border-red-500 p-2'>400</td>
            </tr>
            <tr>
              <td className='border border-red-500 p-2'>სარელაქსაციო მასაჟი</td>
              <td className='border border-red-500 p-2'>12</td>
              <td className='border border-red-500 p-2'>1</td>
              <td className='border border-red-500 p-2'>330</td>
            </tr>
            <tr>
              <td className='border border-red-500 p-2'>
                სპორტულ გამაჯანსაღებელი მასაჟი
              </td>
              <td className='border border-red-500 p-2'>12</td>
              <td className='border border-red-500 p-2'>1</td>
              <td className='border border-red-500 p-2'>400</td>
            </tr>
            <tr>
              <td className='border border-red-500 p-2'>
                სამკურნალო მასაჟი(სკოლიოზი,ოსტექონდროზი, პლიუს ვარჯიშები)
              </td>
              <td className='border border-red-500 p-2'>12</td>
              <td className='border border-red-500 p-2'>1</td>
              <td className='border border-red-500 p-2'>450</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
