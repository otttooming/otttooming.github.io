import { PropsWithChildren } from 'react';
import * as styles from './Illustration.css';

const Illustration = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Illustration;
