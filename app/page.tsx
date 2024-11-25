import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center h-screen p-24'>
      <div className='text-center'>
        <h1 className='uppercase text-white tracking-[1.5rem] font-medium py-8 text-2xl'>
          Welcome To Relax Room
        </h1>
        <div className='flex items-center justify-center space-x-4'>
          <button className='px-8 py-6 mx-4 bg-transparent border border-white text-xs text-white uppercase transition duration-20 hover:bg-white hover:text-black'>
            About Us
          </button>
          <button className='px-8 py-6 mx-4 bg-transparent border border-white text-xs text-white uppercase transition duration-20 hover:bg-white hover:text-black'>
            Services
          </button>
          <button className='px-8 py-6 mx-4 bg-transparent border border-white text-xs text-white uppercase transition duration-20 hover:bg-white hover:text-black'>
            Contact
          </button>
          <button className='px-8 py-6 mx-4 bg-transparent border border-white text-xs text-white uppercase transition duration-20 hover:bg-white hover:text-black'>
            Galerry
          </button>
        </div>
      </div>
      <video
        src='/video.mp4'
        autoPlay
        loop
        className='absolute -z-10 h-full w-full object-cover inset-0'
      />
    </main>
  );
}
