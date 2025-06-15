import type { AppProps } from 'next/app';
import './_app.css';
import { ThemeProvider } from 'next-themes';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import { ColorModeProvider } from '../components/ui/color-mode';

export default function Aoo({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
      enableColorScheme
    >
      <ColorModeProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ColorModeProvider>
    </ThemeProvider>
  );
}
