import { Children, PropsWithChildren } from 'react';
import ImageZoom from '../Image/Image.Zoom';
import * as styles from './MasonryGallery.css';

const MasonryGallery = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.wrapper} data-layout-breakout>
      {Children.map(children, (child) => (
        <ImageZoom>
          <div className={styles.item}>{child}</div>
        </ImageZoom>
      ))}
    </div>
  );
};

export default MasonryGallery;
