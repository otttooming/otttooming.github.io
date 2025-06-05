import { Heading, Image } from '@chakra-ui/react';
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
        <Image
          className={styles.coverImage}
          src={illustration.publicURL}
          alt={alt}
          htmlHeight={htmlHeight}
          htmlWidth={htmlWidth}
          loading="lazy"
        />
      </div>

      <About.Wrapper>
        <Heading as="h1">{title}</Heading>

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
