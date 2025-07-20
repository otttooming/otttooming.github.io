import { PropsWithChildren } from 'react';
import ImageWithZoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ImageZoom = ({ children }: PropsWithChildren) => {
  return <ImageWithZoom wrapElement="div">{children}</ImageWithZoom>;
};

export default ImageZoom;
