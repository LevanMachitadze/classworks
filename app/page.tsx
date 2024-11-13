'use client';

import Collection from '@/components/Collection';
import { url } from 'inspector';
import { useEffect, useState } from 'react';

type CollectenData = {
  category: number;
  name: string;
  photos: string[];
};
type Category = {
  name: string;
};

export default function Home() {
  const [collections, setCollections] = useState<CollectenData[]>([]);
  const [searchValues, setSearchValues] = useState('');
  const [categoryId, setCategoryId] = useState<number>(0);

  const myCategory: Category[] = [
    { name: 'All' },
    { name: 'Sea' },
    { name: 'Mountains' },
    { name: 'Architecture' },
    { name: 'Cities' },
  ];

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const url = `https://6734cf2f5995834c8a90f12a.mockapi.io/photos${
          categoryId ? `?category=${categoryId}` : ''
        }`;

        const response = await fetch(url);
        const data: CollectenData[] = await response.json();
        setCollections(data);
        console.log(data);
      } catch (error) {
        console.error('Error with fetching', error);
      }
    };
    fetchCollection();
  }, [categoryId]);

  // filter collection varriable
  const flterCollections = collections.filter((collecton) =>
    collecton.name.toLowerCase().includes(searchValues.toLowerCase())
  );

  return (
    <div className='p-[50px] max-w-[1200px] 2-full'>
      <h1 className='font-serif'>My Photo Collection</h1>
      <div className='flex items-center flex-wrap mt-[40px]'>
        <ul className='flex list-none p-0'>
          {myCategory.map((category, index) => (
            <li
              key={index}
              onClick={() => setCategoryId(index)}
              className={`inline-block py-[12px] px-[18px] rounded-[10px] mr-[10px] cursor-pointer font-semibold text-[18px] border-[1px] border-transparent hover:border-black active:bg-black active:text-white transition-all duration-150 ease-in-out ${
                categoryId === index ? 'bg-black text-white' : 'bg-white'
              }`}
            >
              {category.name}
            </li>
          ))}
        </ul>
        <input
          className='mt-[20px] w-[250px] h-[50px] p-[0_15px] text-[16px] rounded-[10px] border-[1px] border-[#00000033] focus:border-[#00000066] outline-none transition-all duration-150 ease-in-out'
          placeholder='Search With Name'
          value={searchValues}
          onChange={(e) => setSearchValues(e.target.value)}
        />
      </div>{' '}
      {/* Colection */}
      <div className='grid grid-cols-1 gap-[30px] sm:grid-cols-3'>
        {/* <Collection
          name='travel around world'
          photos={[
            'https://images.unsplash.com/photo-1613746546375-fc892a3d44a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYXZlbGxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1613401688321-f9464c7f16e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHRyYXZlbGxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1607366631022-285d7b3f9e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHRyYXZlbGxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1607623814075-7d87d62cfd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHRyYXZlbGxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          ]}
        /> */}
        {flterCollections.map((colection) => (
          <Collection
            key={colection.name}
            name={colection.name}
            photos={colection.photos}
          />
        ))}
      </div>
    </div>
  );
}
