import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './CoverImage.css';

type Props = {
  maxHeight: string;
  fit: 'contain' | null;
  fluid: any;
  alt: string;
  background?: string;
  boxShadow?: string;
};

const CoverImage = ({
  maxHeight: passedMaxHeight,
  fit: passedFit,
  fluid,
  alt,
  background = '#EDF2F7',
}: Props) => {
  const fit = passedFit ?? 'cover';
  const objectFitmaxHeight = fit === 'cover' ? undefined : passedMaxHeight;

  return (
    <div
      className={styles.wrapper}
      style={{
        maxHeight: passedMaxHeight,
        background,
      }}
    >
      <div
        className={styles.imageContainer({ fit: fit as 'cover' | 'contain' })}
      >
        <GatsbyImage
          alt={alt}
          image={fluid}
          style={{ width: fit === 'cover' ? '100%' : undefined }}
          imgStyle={{
            objectFit: fit,
            maxHeight: objectFitmaxHeight,
          }}
        />
      </div>
    </div>
  );
};

export default CoverImage;
