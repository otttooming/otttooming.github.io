import './layout.css';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import { ColorModeProvider } from '../components/ui/color-mode';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
