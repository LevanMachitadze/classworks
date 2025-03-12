import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center h-screen p-24'>
      <div className='text-center'>
        <h1 className='uppercase text-white tracking-[1.5rem] font-medium py-8 text-2xl'>
          Welcome To Relax Room
        </h1>
        <div className='flex items-center justify-center space-x-4'>
          <Link
            href='/aboutus'
            className='px-8 py-6 mx-4 bg-transparent border border-white text-xs text-white uppercase transition duration-20 hover:bg-white hover:text-black'
          >
            About Us
          </Link>
          <Link
            href='/services'
            className='px-8 py-6 mx-4 bg-transparent border border-white text-xs text-white uppercase transition duration-20 hover:bg-white hover:text-black'
          >
            Services
          </Link>
          <Link
            href='/contact'
            className='px-8 py-6 mx-4 bg-transparent border border-white text-xs text-white uppercase transition duration-20 hover:bg-white hover:text-black'
          >
            Contact
          </Link>
          <Link
            href='/galerry'
            className='px-8 py-6 mx-4 bg-transparent border border-white text-xs text-white uppercase transition duration-20 hover:bg-white hover:text-black'
          >
            Galerry
          </Link>
        </div>
      </div>
    </main>
  );
}
