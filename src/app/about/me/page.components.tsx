import { PropsWithChildren } from 'react';
import * as styles from './page.css';

const Wrapper = ({ children }: PropsWithChildren) => (
  <div className={styles.wrapper}>{children}</div>
);

export const About = {
  Wrapper,
};
