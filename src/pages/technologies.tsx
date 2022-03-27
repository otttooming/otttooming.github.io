import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { theme } from '../utils/theme';
import SEO from '../components/SEO';
import { Heading, Text, Box } from '@chakra-ui/react';
import Card from '../components/Card/Card';
import { TechnologiesListQueryQuery } from '../types';

interface TechnologiesProps {
  data: TechnologiesListQueryQuery;
}

const Technologies: React.FC<TechnologiesProps> = ({
  data: {
    allMdx: { nodes },
    projects,
  },
}) => {
  const posts = nodes;

  return (
    <Layout>
      <SEO title="Technologies" description="Tech stack that I currently use" />

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
        {posts.map(({ body, frontmatter }) => {
          const { title, featured } = frontmatter;

          return (
            <Card
              key={title}
              title={title}
              body={body}
              featured={featured}
              projects={projects}
            />
          );
        })}
      </Box>
    </Layout>
  );
};
export const pageQuery = graphql`
  fragment TechnologiesFrontmatterFragment on MdxFrontmatter {
    featured {
      illustration {
        publicURL
      }
      background
      width
      height
      alt
    }
    tags
    kind
    title
  }

  query TechnologiesListQuery {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/technologies/" } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      nodes {
        id
        body
        frontmatter {
          ...TechnologiesFrontmatterFragment
        }
        fields {
          slug
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
                gatsbyImageData(width: 476, layout: CONSTRAINED)
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
