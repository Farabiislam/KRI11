import type { Metadata } from 'next';
import './globals.css';
import { firaCode } from '../lib/fonts';
import { Toaster } from '@/components/ui/sonner';
import CustomCursor from '@/components/custom-cursor';
import { ModalProvider } from '@/app/context/ModalContext';
import GlobalModal from '@/components/GlobalModal';

export const metadata: Metadata = {
  title: 'Khandokar Rashidul Islam | Fullstack developer',
  description:
    'Professional Fullstack developer specializing in modern web and backend development. Explore projects, blogs, and contact details.',
  keywords: [
    'Khandokar Rashidul Islam',
    'Fullstack developer',
    'Web Developer',
    'Backend Developer',
    'Fullstack Developer',
    'Developer portfolio',
    'Portfolio',
    'Next.js',
    'JavaScript',
    'Node.js',
    'React',
  ],
  openGraph: {
    title: 'Khandokar Rashidul Islam | Fullstack developer',
    description:
      'Explore the portfolio of Khandokar Rashidul Islam, a professional fullstack developer experienced in full-stack development.',
    siteName: 'Khandokar Rashidul Islam',
    locale: 'en_US',
    type: 'website',
    url: 'https://kri11.vercel.app/',
    images: [
      {
        url: 'https://kri11.vercel.app/ogimg.png',
        width: 1200,
        height: 630,
        alt: 'Khandokar Rashidul Islam',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={firaCode.variable}>
        <ModalProvider>
          {children}
          <Toaster />
          <CustomCursor />
          <GlobalModal />
        </ModalProvider>
      </body>
    </html>
  );
}
