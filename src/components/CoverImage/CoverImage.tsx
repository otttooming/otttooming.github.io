import Image from 'next/image';
import * as styles from './CoverImage.css';

type Props = {
  fit: 'contain' | 'cover' | null;
  src: string;
  sizes?: string;
  alt: string;
  background?: string;
  height: number;
  width: number;
};

const CoverImage = ({
  src,
  alt,
  background = '#EDF2F7',
  height,
  width,
  sizes,
  fit = 'cover',
}: Props) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        background,
      }}
    >
      <Image
        height={height}
        width={width}
        className={styles.image[fit]}
        alt={alt}
        src={src}
        priority={true}
        sizes={sizes}
      />
    </div>
  );
};

export default CoverImage;
