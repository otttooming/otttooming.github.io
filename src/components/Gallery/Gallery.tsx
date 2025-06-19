import * as styles from './Gallery.css';
import bella from '../../../content/persons/bella/featured.jpeg';
import bobby from '../../../content/persons/bobby/featured.jpeg';
import gustav from '../../../content/persons/gustav/featured.jpeg';
import max from '../../../content/persons/max/featured.jpeg';
import ossu from '../../../content/persons/ossu/featured.jpeg';
import tondu from '../../../content/persons/tondu/featured.jpeg';

import Image from 'next/image';

const images = [
  ['Bella', bella],
  ['Bobby', bobby],
  ['Gustav', gustav],
  ['Max', max],
  ['Ossu', ossu],
  ['Tondu', tondu],
] as const;

const Gallery = () => {
  return (
    <div className={styles.wrapper}>
      {images.map(([alt, src]) => {
        return (
          <div key={alt} className={styles.item}>
            <div className={styles.itemContainer}>
              <Image src={src} alt={alt} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
