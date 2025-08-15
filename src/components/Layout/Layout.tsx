import { PropsWithChildren } from 'react';
import * as styles from './Layout.css';

const DetailHeader = ({ children }: PropsWithChildren) => (
  <header className={styles.detailHeader}>{children}</header>
);

const Hero = ({ children }: PropsWithChildren) => (
  <section className={styles.hero}>{children}</section>
);

const Breakout = ({
  children,
  layout = 'detail',
}: PropsWithChildren<{
  layout?: 'detail' | 'grid';
}>) => <section className={styles.breakout[layout]}>{children}</section>;

export default {
  DetailHeader,
  Hero,
  Breakout,
};
