import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { theme } from '../utils/theme';
import styled from '@emotion/styled';
import Logo from '../components/Logo/Logo';
import { textMap, projectTexts } from '../utils/textMap';
import SEO from '../components/SEO';
import {
  Heading,
  Text,
  useColorMode,
  Box,
  Link as ExternalLink,
} from '@chakra-ui/core';
import { css } from '@emotion/core';
import CoverImage from '../components/CoverImage/CoverImage';
import { Link as MDXLink } from '../components/MDXComponents/MDXComponents';
import { ProjectsListQueryQuery } from '../types';

export interface ProjectsProps {
  data: ProjectsListQueryQuery;
}

const lightMode = css`
  background: #edf2f7;
`;

const darkMode = css`
  background: #2c3442;
`;

const Item = styled.li<{ colorMode: 'light' | 'dark' }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  grid-gap: 32px;
  list-style: none;
  margin-bottom: 196px;
  align-items: center;

  ${({ colorMode }) => (colorMode === 'light' ? lightMode : darkMode)}

  padding: 48px;
  border-radius: 16px;
  margin-bottom: 96px;

  &:nth-of-type(even) {
    direction: rtl;
  }
`;

/**
 * Only return posts when Gatsby has run static site query
 */
const getPosts = (data: ProjectsListQueryQuery) => {
  if (!data.allMdx) {
    return [];
  }
  const { edges: posts } = data.allMdx;

  return posts;
};

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  const { colorMode } = useColorMode();

  const posts = getPosts(data);

  return (
    <Layout>
      <SEO title="Projects" description="" />

      <Heading
        as="h1"
        mt="80px"
        marginX="auto"
        maxWidth="960px"
        px="16px"
        fontWeight={400}
      >
        <strong>Some projects</strong> I have been involved in
      </Heading>

      <Text mt={theme.space.l} marginX="auto" maxWidth="960px" px="16px">
        All of the projects have been a team collaboration and effort.
      </Text>

      <Text marginX="auto" maxWidth="960px" px="16px">
        I have been thoroughly fortunate to have been given the opportunity to
        work with some amazing people.
      </Text>

      <Box as="ol" m="80px auto" p={0} maxWidth="1080px" px="16px">
        {posts.map(({ node: post }) => {
          const { image, background, fit } = post.frontmatter.featured;

          return (
            <Item key={post.id} colorMode={colorMode}>
              <MDXLink to={post.fields.slug} display="block">
                <CoverImage
                  maxHeight="360px"
                  fluid={image.childImageSharp.fluid}
                  background={background}
                  fit={fit}
                />
              </MDXLink>

              <Box dir="ltr">
                <ExternalLink href={post.frontmatter.link} display="block">
                  <Logo name={post.frontmatter.company} />
                </ExternalLink>

                <MDXLink to={post.fields.slug}>
                  <Heading mt={theme.space.s} fontWeight={400}>
                    <strong>{post.frontmatter.title}</strong>{' '}
                    {textMap(post.frontmatter.kind, projectTexts)}
                  </Heading>
                </MDXLink>

                <Text mt={theme.space.s}>{post.excerpt}</Text>
              </Box>
            </Item>
          );
        })}
      </Box>
    </Layout>
  );
};
export const pageQuery = graphql`
  query ProjectsListQuery {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 72)
          frontmatter {
            title
            company
            git
            link
            kind
            featured {
              image {
                childImageSharp {
                  fluid(maxWidth: 476) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              background
              fit
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
export default Projects;
