import type { AppProps } from 'next/app';
import './_app.css';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import { ColorModeProvider } from '../components/ui/color-mode';

export default function Aoo({ Component, pageProps }: AppProps) {
  return (
    <ColorModeProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ColorModeProvider>
  );
}
