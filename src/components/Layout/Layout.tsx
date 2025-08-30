import { PropsWithChildren } from 'react';
import * as styles from './Layout.css';

const DetailHeader = ({ children }: PropsWithChildren) => (
  <header className={styles.detailHeader}>{children}</header>
);

const Hero = ({ children, ...restProps }: PropsWithChildren) => (
  <figure {...restProps} className={styles.hero}>
    {children}
  </figure>
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
