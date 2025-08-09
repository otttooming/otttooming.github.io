import './layout.css';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import { ColorModeProvider } from '../components/ui/color-mode';
import { Montserrat } from 'next/font/google';
import { Viewport } from 'next';
import { PropsWithChildren } from 'react';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const montserrat = Montserrat({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ColorModeProvider>
          <Header />
          {children}
          <Footer />
        </ColorModeProvider>
      </body>
    </html>
  );
}
