import Image from 'next/image';
import * as styles from './CoverImage.css';

type Props = {
  maxHeight: string;
  fit: 'contain' | 'cover' | null;
  src: string;
  alt: string;
  background?: string;
  boxShadow?: string;
};

const CoverImage = ({
  maxHeight: passedMaxHeight,
  fit: passedFit,
  src,
  alt,
  background = '#EDF2F7',
}: Props) => {
  const objectFit = passedFit ?? 'cover';
  const maxHeight = objectFit === 'cover' ? undefined : passedMaxHeight;
  const width = objectFit === 'cover' ? '100%' : undefined;

  return (
    <div
      className={styles.wrapper}
      style={{
        maxHeight: passedMaxHeight,
        background,
      }}
    >
      <div className={styles.imageContainer({ fit: objectFit })}>
        <Image
          className={styles.image}
          alt={alt}
          src={src}
          fill={true}
          style={{
            width,
            objectFit,
            maxHeight,
          }}
        />
      </div>
    </div>
  );
};

export default CoverImage;
