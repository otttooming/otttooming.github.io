import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import *as React from 'react';

const Image = ({ ...restProps }) => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { eq: "portrait-ott.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 466, layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <GatsbyImage
      image={data.placeholderImage.childImageSharp.gatsbyImageData}
      {...restProps}
    />
  );
};

export default Image;
