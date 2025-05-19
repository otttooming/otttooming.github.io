import { AspectRatio, Box, Heading, Image } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import * as React from 'react';
import CoverImageWrapper from '../components/CoverImage/CoverImageWrapper';
import MDXComponents from '../components/MDXComponents/MDXComponents';
import SEO from '../components/SEO';
import TagList from '../components/TagList/TagList';
import { getMappedTags } from '../components/TagList/tagMap';
import Layout from '../components/layout';
import { socialTags } from '../constants/social';
import { About } from './About.components';

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
  const tags = getMappedTags(tagList, socialTags);
  const ratio = htmlWidth / htmlHeight;

  return (
    <Layout>
      <SEO title={title} description="" />

      <CoverImageWrapper
        maxWidth="1024px"
        m="80px auto 0"
        p="32px"
        display="flex"
        justifyContent="center"
      >
        <AspectRatio ratio={ratio} maxWidth={htmlWidth} width="100%">
          <Image
            maxHeight="100%"
            src={illustration.publicURL}
            alt={alt}
            htmlHeight={htmlHeight}
            htmlWidth={htmlWidth}
            loading="lazy"
          />
        </AspectRatio>
      </CoverImageWrapper>

      <About.Wrapper>
        <Heading as="h1">{title}</Heading>

        <TagList tags={tags} />
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
