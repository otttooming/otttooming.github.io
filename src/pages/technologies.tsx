import { Box, Heading, Text } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Card from '../components/Card/Card';
import SEO from '../components/SEO';
import Layout from '../components/layout';
import type { TechnologiesListQueryQuery } from '../types';
import { theme } from '../utils/theme';

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
export const pageQuery = graphql`fragment TechnologiesFrontmatterFragment on MdxFrontmatter {
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
    filter: {internal: {contentFilePath: {regex: "/technologies/"}}}
    sort: {frontmatter: {order: ASC}}
  ) {
    nodes {
      id
      body
      frontmatter {
        ...TechnologiesFrontmatterFragment
      }
      frontmatter {
        slug
      }
    }
  }
  projects: allMdx(
    filter: {internal: {contentFilePath: {regex: "/projects/"}}}
    sort: {frontmatter: {date: DESC}}
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
      frontmatter {
        slug
      }
    }
  }
}`;

export default Technologies;
