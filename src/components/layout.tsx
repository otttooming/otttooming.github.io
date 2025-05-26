import Footer from './Footer/Footer';
import Header from './Header';
import { useColorMode } from './ui/color-mode';
import { Provider } from './ui/provider';
import { root } from '../utils/root.css';
import './layout.css';

const Layout = ({ children }: React.PropsWithChildren) => {
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

export default ({ children }: React.PropsWithChildren) => {
  return (
    <Provider>
      <Layout>{children}</Layout>
    </Provider>
  );
};
