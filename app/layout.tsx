import { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import VideoBackground from './components/VideoBackground';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Relax Room',
  description: 'Massage and Relaxation',
  openGraph: {
    title: 'Relax Room',
    description: 'Massage and Relaxation',
    siteName: 'Relaxroom.space',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <VideoBackground />
        {children}
      </body>
    </html>
  );
}
