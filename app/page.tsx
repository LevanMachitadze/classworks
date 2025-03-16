import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen px-6'>
      <div className='text-center space-y-8'>
        <h1 className='uppercase text-white tracking-widest font-semibold text-3xl md:text-5xl drop-shadow-lg'>
          მოგესალმებით "Relax Room"-ში
        </h1>

        <div className='flex flex-wrap items-center justify-center gap-6'>
          {[
            { href: '/aboutus', label: 'ჩვენს შესახებ' },
            { href: '/services', label: 'სერვისები' },
            { href: '/contact', label: 'კონტაქტები' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className='px-8 py-4 text-lg font-medium text-white uppercase border border-white rounded-lg backdrop-blur-md bg-white/10 hover:bg-white/30 hover:text-black transition-all duration-300 shadow-lg'
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      <footer className='absolute bottom-0 w-full p-4 bg-black bg-opacity-50'>
        <p className='text-center text-white'>
          © 2021 Relax Room. All rights reserved.
        </p>
        <p className='text-center text-white'>Created By NOMA Group</p>
      </footer>
    </main>
  );
}
