import Image from 'next/image';
import portrait from '../../images/portrait-ott.jpg';
import * as styles from './Portrait.css';

export const Portrait = () => (
  <Image
    width={466}
    height={466}
    src={portrait}
    className={styles.image}
    alt="Ott Tooming"
    priority={true}
  />
);
