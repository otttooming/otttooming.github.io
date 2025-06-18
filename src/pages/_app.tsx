import type { AppProps } from 'next/app';
import './_app.css';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import { ColorModeProvider } from '../components/ui/color-mode';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Aoo({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <ColorModeProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ColorModeProvider>
    </main>
  );
}
