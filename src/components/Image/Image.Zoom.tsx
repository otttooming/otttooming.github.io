import * as React from 'react';
import ImageWithZoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ImageZoom: React.FC<React.HTMLAttributes<HTMLImageElement>> = ({
  children,
  ...restProps
}) => {
  return (
    <ImageWithZoom
      wrapElement="div"
      wrapStyle={{ display: 'block', width: '100%', ...restProps }}
    >
      {children}
    </ImageWithZoom>
  );
};

export default ImageZoom;
