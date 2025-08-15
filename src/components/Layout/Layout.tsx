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
  as: ComponentTag = 'section',
  layout = 'detail',
}: PropsWithChildren<{
  as?: React.ElementType;
  layout?: 'detail' | 'grid';
}>) => (
  <ComponentTag className={styles.breakout[layout]}>{children}</ComponentTag>
);

export default {
  DetailHeader,
  Hero,
  Breakout,
};
