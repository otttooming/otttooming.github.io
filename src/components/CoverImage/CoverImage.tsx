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
  wrapper?: 'contain' | 'full';
};

const CoverImage = ({
  src,
  alt,
  background = '#EDF2F7',
  height,
  width,
  sizes,
  fit = 'cover',
  wrapper = 'full',
}: Props) => {
  return (
    <div
      className={styles.wrapper[wrapper]}
      style={{
        background,
      }}
    >
      <Image
        height={height}
        width={width}
        alt={alt}
        src={src}
        priority={true}
        sizes={sizes}
        style={{ objectFit: fit }}
      />
    </div>
  );
};

export default CoverImage;
