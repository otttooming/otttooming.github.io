import * as React from 'react';
import ImageWithZoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { Box } from '@chakra-ui/core';

const ImageZoom: React.FC<React.HTMLAttributes<HTMLImageElement>> = ({
  style,
  ...restProps
}) => {
  return (
    <ImageWithZoom>
      <Box {...restProps} as="img" position="relative" />
    </ImageWithZoom>
  );
};

export default ImageZoom;
