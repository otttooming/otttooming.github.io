import { Box, type BoxProps } from '@chakra-ui/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './CoverImage.css';

const CoverImage = ({
  maxHeight: passedMaxHeight,
  fit: passedFit,
  fluid,
  background: passedBackground,
  alt,
  ...restProps
}: BoxProps & { maxHeight: string; fit: string; fluid: any; alt: string }) => {
  const fit = passedFit ? passedFit : 'cover';

  const isObjectFitCover = fit === 'cover';
  const background = passedBackground ?? '#EDF2F7';

  const fitProps: BoxProps = {
    display: 'flex',
    alignItems: 'center',
  };

  const width = isObjectFitCover ? '100%' : undefined;
  const objectFitmaxHeight = isObjectFitCover ? undefined : passedMaxHeight;

  return (
    <Box
      className={styles.wrapper}
      background={background}
      maxHeight={passedMaxHeight}
      {...(isObjectFitCover && fitProps)}
      {...restProps}
    >
      <GatsbyImage
        alt={alt}
        image={fluid}
        style={{ width }}
        imgStyle={{
          objectFit: fit,
          maxHeight: objectFitmaxHeight,
        }}
      />
    </Box>
  );
};

export default CoverImage;
