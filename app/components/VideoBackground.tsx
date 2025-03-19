'use client';

export default function VideoBackground() {
  return (
    <video
      src='/video.mp4'
      autoPlay
      loop
      playsInline
      className='fixed top-0 left-0 w-full h-full object-cover -z-10'
    />
  );
}
