import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import styled from '@emotion/styled';
import TagList from '../components/TagList/TagList';
import { textMap, projectTexts } from '../utils/textMap';
import Logo from '../components/Logo/Logo';
import SEO from '../components/SEO';
import { Heading, Link, Box } from '@chakra-ui/core';
import MDXComponents from '../components/MDXComponents/MDXComponents';
import CoverImage from '../components/CoverImage/CoverImage';
import { getMappedTags } from '../components/TagList/tagMap';
import { techTags } from '../constants/tech';
import { theme } from '../utils/theme';
import { ExternalLink } from 'react-feather';

export interface PostProps {
  data: any;
}

const Wrapper = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;

  > * {
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
  }

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

const Project: React.FC<PostProps> = ({ data: { mdx } }) => {
  const { image, background, fit } = mdx.frontmatter.featured;

  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} description="" />

      <Box maxWidth="1024px" m="80px auto 0" position="relative">
        <CoverImage
          maxHeight="70vh"
          fit={fit}
          background={background}
          fluid={image.childImageSharp.fluid}
        />

        <Link
          position="absolute"
          bottom="-16px"
          left="32px"
          display="inline-flex"
          background="#edf2f7"
          p="8px 16px"
          borderWidth="1px"
          flex="1"
          rounded="md"
          fontSize="14px"
          alignItems="center"
          href={mdx.frontmatter.link}
          target="_blank"
        >
          <p>Link to project</p>

          <Box as={ExternalLink} ml="8px" width="16px" />
        </Link>
      </Box>

      <Box as="header" mt="80px" mx="auto" maxWidth="960px">
        <Logo name={mdx.frontmatter.company} />

        <Heading as="h1" fontWeight={400} mt={theme.space.s}>
          <strong>{mdx.frontmatter.title}</strong>{' '}
          {textMap(mdx.frontmatter.kind, projectTexts)}
        </Heading>

        <TagList tags={getMappedTags(mdx.frontmatter.tech, techTags)} />
      </Box>

      <Wrapper>
        <MDXProvider components={MDXComponents}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </Wrapper>
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
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          background
          fit
        }
      }
    }
  }
`;
