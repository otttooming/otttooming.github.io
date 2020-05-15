import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import { theme } from '../utils/theme';
import styled from '@emotion/styled';
import Logo from '../components/Logo/Logo';
import { textMap, projectTexts } from '../utils/textMap';
import SEO from '../components/SEO';
import { Heading, Text, useColorMode, Box } from '@chakra-ui/core';
import { css } from '@emotion/core';
import CoverImage from '../components/CoverImage/CoverImage';

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
const getPosts = (data) => {
  if (!data.allMdx) {
    return [];
  }
  const { edges: posts } = data.allMdx;

  return posts;
};

const Projects = ({ data }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const posts = getPosts(data);

  return (
    <Layout>
      <SEO title="Projects" description="" />

      <Heading
        as="h1"
        mt="80px"
        marginX="auto"
        maxWidth="960px"
        fontWeight={400}
      >
        <strong>Some projects</strong> I have been involved in
      </Heading>

      <Text mt={theme.space.l} marginX="auto" maxWidth="960px">
        All of the projects have been a team collaboration and effort.
      </Text>

      <Text marginX="auto" maxWidth="960px">
        I have been thoroughly fortunate to have been given the opportunity to
        work with some amazing people.
      </Text>

      <Box as="ol" m="80px auto" p={0} maxWidth="1080px">
        {posts.map(({ node: post }) => {
          const { image, background, fit } = post.frontmatter.featured;

          return (
            <Item key={post.id} colorMode={colorMode}>
              <CoverImage
                maxHeight="360px"
                fluid={image.childImageSharp.fluid}
                background={background}
                fit={fit}
              />

              <Box dir="ltr">
                <Logo
                  name={post.frontmatter.company}
                  link={post.frontmatter.link}
                />

                <Heading mt={theme.space.s} fontWeight={400}>
                  <Link to={post.fields.slug}>
                    <strong>{post.frontmatter.title}</strong>{' '}
                    {textMap(post.frontmatter.kind, projectTexts)}
                  </Link>
                </Heading>

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
  query projectIndex {
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
