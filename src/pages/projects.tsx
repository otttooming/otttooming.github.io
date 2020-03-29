import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import { theme } from '../utils/theme';
import styled from '@emotion/styled';
import GatsbyImage from 'gatsby-image';
import Logo from '../components/Logo/Logo';
import { textMap } from '../utils/textMap';
import SEO from '../components/SEO';
import { Heading, Text } from '@chakra-ui/core';

const Wrapper = styled.div`
  margin: 80px auto;
  padding: 0;
  max-width: 960px;
`;

const Container = styled.ul`
  margin: 80px auto;
  padding: 0;
  max-width: 1080px;
`;

const Item = styled.li`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  grid-gap: 32px;
  list-style: none;
  margin-bottom: 196px;
  align-items: center;

  &:nth-of-type(even) {
    direction: rtl;
  }
`;

const Content = styled.div`
  direction: ltr;
`;

const Img = styled(GatsbyImage)`
  border-radius: ${theme.borderRadius.m};
`;

const Description = styled.div`
  margin-top: ${theme.space.l};
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
  const posts = getPosts(data);

  return (
    <Layout>
      <SEO title="Projects" description="" />

      <Wrapper>
        <Heading mt={theme.space.s} fontWeight={500}>
          <strong>Some projects</strong> I have been involved in
        </Heading>

        <Description>
          <Text>
            All of the projects have been a team collaboration and effort.
          </Text>
          <Text>
            I have been thoroughly fortunate to have been given the opportunity
            to work with some amazing people.
          </Text>
        </Description>
      </Wrapper>

      <Container>
        {posts.map(({ node: post }) => {
          const featuredImgFluid =
            post.frontmatter.featuredImage.childImageSharp.fluid;

          return (
            <Item key={post.id}>
              <Img fluid={featuredImgFluid} />
              <Content>
                <Logo
                  name={post.frontmatter.company}
                  link={post.frontmatter.link}
                />

                <Heading mt={theme.space.s} fontWeight={400}>
                  <Link to={post.fields.slug}>
                    <strong>{post.frontmatter.title}</strong>{' '}
                    {textMap(post.frontmatter.kind)}
                  </Link>
                </Heading>

                <Text mt={theme.space.s}>{post.excerpt}</Text>
              </Content>
            </Item>
          );
        })}
      </Container>
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
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
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
