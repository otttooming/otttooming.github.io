import Footer from './Footer/Footer';
import Header from './Header';
import { ColorModeProvider, useColorMode } from './ui/color-mode';
import { root } from '../utils/root.css';
import './layout.css';

const Root = ({ children }: React.PropsWithChildren) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <div className={root} data-theme={colorMode}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <ColorModeProvider>
      <Root>{children}</Root>
    </ColorModeProvider>
  );
};

export default Layout;
