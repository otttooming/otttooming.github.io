import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const GalleryImage = ({ image, ...restProps }) => {
  return (
    <GatsbyImage image={image.childImageSharp.gatsbyImageData} {...restProps} />
  );
};

export default GalleryImage;
