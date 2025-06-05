import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import MDXComponents from '../components/MDXComponents/MDXComponents';
import SEO from '../components/SEO';
import TagList from '../components/TagList/TagList';
import Layout from '../components/layout';
import { socialTags } from '../constants/social';
import { About } from './About.components';
import * as styles from './About.css';

const AboutTemplate = ({
  children,
  data: {
    mdx: {
      frontmatter: {
        featured: { illustration, height: htmlHeight, width: htmlWidth, alt },
        title,
        tags: tagList,
      },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title={title} description="" />

      <div className={styles.coverWrapper}>
        <img
          className={styles.coverImage}
          src={illustration.publicURL}
          alt={alt}
          height={htmlHeight}
          width={htmlWidth}
          loading="lazy"
        />
      </div>

      <About.Wrapper>
        <h1>{title}</h1>

        <TagList tags={tagList} mapping={socialTags} />
      </About.Wrapper>

      <About.Wrapper>
        <MDXProvider components={MDXComponents}>{children}</MDXProvider>
      </About.Wrapper>
    </Layout>
  );
};

export default AboutTemplate;

export const pageQuery = graphql`
  query AboutPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        tags
        featured {
          illustration {
            publicURL
          }
          width
          height
          alt
        }
      }
    }
  }
`;
