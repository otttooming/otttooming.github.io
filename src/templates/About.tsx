import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import styled from '@emotion/styled';
import SEO from '../components/SEO';
import { Heading, Box, Image } from '@chakra-ui/core';
import MDXComponents from '../components/MDXComponents/MDXComponents';
import CoverImage from '../components/CoverImage/CoverImage';
import CoverImageWrapper from '../components/CoverImage/CoverImageWrapper';
import TechStack from '../components/TechStack/TechStack';

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
        tags,
      },
      body,
    },
  },
}) => {
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
        <Image
          maxHeight="100%"
          src={illustration.publicURL}
          alt={alt}
          htmlHeight={htmlHeight}
          htmlWidth={htmlWidth}
        />
      </CoverImageWrapper>

      <Wrapper>
        <Heading>{title}</Heading>

        <TechStack items={tags} />
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
