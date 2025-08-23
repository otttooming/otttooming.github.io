import * as styles from './Gallery.css';
import bella from '/public/content/persons/bella/featured.jpeg';
import bobby from '/public/content/persons/bobby/featured.jpeg';
import gustav from '/public/content/persons/gustav/featured.jpeg';
import max from '/public/content/persons/max/featured.jpeg';
import ossu from '/public/content/persons/ossu/featured.jpeg';
import tondu from '/public/content/persons/tondu/featured.jpeg';

import Image from 'next/image';

const images = [
  ['Bella', bella],
  ['Ossu', ossu],
  ['Gustav', gustav],
  ['Max', max],
  ['Bobby', bobby],
  ['Tondu', tondu],
] as const;

const Gallery = () => {
  return (
    <div className={styles.wrapper}>
      {images.map(([alt, src]) => {
        return (
          <div key={alt} className={styles.item}>
            <Image src={src} alt={alt} />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
