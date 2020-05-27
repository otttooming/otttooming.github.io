import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import styled from '@emotion/styled';
import SEO from '../components/SEO';
import { Heading, Image, AspectRatioBox } from '@chakra-ui/core';
import MDXComponents from '../components/MDXComponents/MDXComponents';
import CoverImage from '../components/CoverImage/CoverImage';
import CoverImageWrapper from '../components/CoverImage/CoverImageWrapper';
import TagList from '../components/TagList/TagList';
import { getMappedTags } from '../components/TagList/tagMap';
import { socialTags } from '../constants/social';

export interface PostProps {
  data: any;
}

const Wrapper = styled.div`
  max-width: 960px;
  margin: 80px auto;

  .gatsby-resp-image-wrapper {
    width: 100%;
  }

  .gatsby-resp-image-wrapper > picture {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .gatsby-resp-image-wrapper > picture img {
    width: 100%;
  }
`;

const About: React.FC<PostProps> = ({
  data: {
    mdx: {
      frontmatter: {
        featured: { illustration, height: htmlHeight, width: htmlWidth, alt },
        title,
        tags: tagList,
      },
      body,
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
        <AspectRatioBox ratio={ratio} maxWidth={htmlWidth} width="100%">
          <Image
            maxHeight="100%"
            src={illustration.publicURL}
            alt={alt}
            htmlHeight={htmlHeight}
            htmlWidth={htmlWidth}
            loading="lazy"
          />
        </AspectRatioBox>
      </CoverImageWrapper>

      <Wrapper>
        <Heading as="h1">{title}</Heading>

        <TagList tags={tags} />
      </Wrapper>

      <Wrapper>
        <MDXProvider components={MDXComponents}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </Wrapper>
    </Layout>
  );
};

export default About;

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
