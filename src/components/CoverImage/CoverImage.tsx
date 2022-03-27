import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { BoxProps } from '@chakra-ui/react';
import CoverImageWrapper from './CoverImageWrapper';

const CoverImage: React.FC<
  BoxProps & { maxHeight: string; fit: string; fluid: any }
> = ({
  maxHeight: passedMaxHeight,
  fit: passedFit,
  fluid,
  background: passedBackground,
  ...restProps
}) => {
  const fit = Boolean(passedFit) ? passedFit : 'cover';

  const isObjectFitCover = fit === 'cover';
  const background = passedBackground ?? '#EDF2F7';

  const fitProps: BoxProps = {
    display: 'flex',
    alignItems: 'center',
  };

  const width = isObjectFitCover ? '100%' : undefined;
  const objectFitmaxHeight = isObjectFitCover ? undefined : passedMaxHeight;

  return (
    <CoverImageWrapper
      background={background}
      maxHeight={passedMaxHeight}
      {...(isObjectFitCover && fitProps)}
      {...restProps}
    >
      <GatsbyImage
        image={fluid}
        style={{ width }}
        imgStyle={{
          objectFit: fit,
          maxHeight: objectFitmaxHeight,
        }}
      />
    </CoverImageWrapper>
  );
};

export default CoverImage;
