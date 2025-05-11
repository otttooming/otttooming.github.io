import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';

const GalleryImage = ({ image, ...restProps }) => {
  return (
    <GatsbyImage image={image.childImageSharp.gatsbyImageData} {...restProps} />
  );
};

export default GalleryImage;
