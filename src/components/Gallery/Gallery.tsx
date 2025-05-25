import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './Gallery.css';

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query GalleryQuery {
      images: allMdx(
        filter: {internal: {contentFilePath: { regex: "/persons/" }}}
        limit: 6
      ) {
        edges {
          node {
            frontmatter {
              slug
              featured {
                image {
                  childImageSharp {
                    gatsbyImageData(width: 245, layout: CONSTRAINED)
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div className={styles.wrapper}>
      {data.images.edges.map(
        ({
          node: {
            frontmatter: {
              slug,
              featured: { image },
            },
          },
        }) => {
          return (
            <div key={slug} className={styles.item}>
              <div className={styles.itemContainer}>
                <GatsbyImage
                  image={image.childImageSharp.gatsbyImageData}
                  alt={slug}
                />
              </div>
            </div>
          );
        },
      )}
    </div>
  );
};

export default Gallery;
