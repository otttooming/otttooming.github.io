import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { theme } from '../utils/theme';
import SEO from '../components/SEO';
import { Heading, Text, Box } from '@chakra-ui/core';
import Card from '../components/Card/Card';
import { TechnologiesListQueryQuery } from '../types';

interface TechnologiesProps {
  data: TechnologiesListQueryQuery;
}

/**
 * Only return posts when Gatsby has run static site query
 */
const getPosts = (data: TechnologiesListQueryQuery) => {
  if (!data.allMdx) {
    return [];
  }
  const { edges: posts } = data.allMdx;

  return posts;
};

const Technologies: React.FC<TechnologiesProps> = ({ data }) => {
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
        <strong>Tech stack</strong> that I currently use
      </Heading>

      <Text mt={theme.space.l} marginX="auto" maxWidth="960px" px="16px">
        Passionate about TypeScript, React, NodeJS, GraphQL and statically typed
        languages in general.
      </Text>

      <Box as="ol" m="80px auto" p={0} maxWidth="1080px" px={[0, 0, '16px']}>
        {posts.map(({ node: post }) => {
          const { title, featured } = post.frontmatter;

          return (
            <Card
              key={title}
              title={title}
              body={post.body}
              featured={featured}
              projects={data.projects}
            />
          );
        })}
      </Box>
    </Layout>
  );
};
export const pageQuery = graphql`
  query TechnologiesListQuery {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/technologies/" } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          id
          body
          frontmatter {
            title
            featured {
              illustration {
                publicURL
              }
              width
              height
              alt
              background
            }
          }
          fields {
            slug
          }
        }
      }
    }
    projects: allMdx(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        excerpt(pruneLength: 72)
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
`;

export default Technologies;
