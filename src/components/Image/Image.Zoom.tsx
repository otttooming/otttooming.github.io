import ImageWithZoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ImageZoom = ({ children }) => {
  return <ImageWithZoom wrapElement="div">{children}</ImageWithZoom>;
};

export default ImageZoom;
