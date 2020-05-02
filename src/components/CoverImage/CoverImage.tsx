import * as React from 'react';
import GatsbyImage from 'gatsby-image';
import { Box, BoxProps } from '@chakra-ui/core';
import { theme } from '../../utils/theme';

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
    <Box
      background={background}
      borderRadius={theme.borderRadius.m}
      overflow="hidden"
      maxHeight={passedMaxHeight}
      boxShadow="5px 25px 40px rgba(0, 0, 0, 0.2)"
      {...(isObjectFitCover && fitProps)}
      {...restProps}
    >
      <GatsbyImage
        fluid={fluid}
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
