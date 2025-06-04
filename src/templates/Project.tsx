import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import { ExternalLink } from 'react-feather';
import CoverImage from '../components/CoverImage/CoverImage';
import Logo from '../components/Logo/Logo';
import MDXComponents from '../components/MDXComponents/MDXComponents';
import SEO from '../components/SEO';
import TagList from '../components/TagList/TagList';
import Layout from '../components/layout';
import { techTags } from '../constants/tech';
import { projectTexts, textMap } from '../utils/textMap';
import * as styles from './Project.css';

const Project = ({ children, data: { mdx } }) => {
  const { image, background, fit } = mdx.frontmatter.featured;

  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} description="" />

      <div className={styles.coverContainer}>
        <CoverImage
          alt={mdx.frontmatter.title}
          maxHeight="70vh"
          fit={fit}
          background={background}
          fluid={image.childImageSharp.gatsbyImageData}
        />

        <a
          className={styles.projectLink}
          href={mdx.frontmatter.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Link to project</p>
          <ExternalLink className={styles.externalLinkIcon} />
        </a>
      </div>

      <header className={styles.header}>
        <Logo name={mdx.frontmatter.company} />

        <h1 className={styles.heading}>
          <strong>{mdx.frontmatter.title}</strong>{' '}
          {textMap(mdx.frontmatter.kind, projectTexts)}
        </h1>

        <TagList tags={mdx.frontmatter.tech} mapping={techTags} />
      </header>

      <div className={styles.wrapper}>
        <MDXProvider components={MDXComponents}>{children}</MDXProvider>
      </div>
    </Layout>
  );
};

export default Project;

export const pageQuery = graphql`
  query ProjectPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        company
        git
        link
        kind
        tech
        featured {
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          background
          fit
        }
      }
    }
  }
`;
