import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { theme } from '../utils/theme';
import Logo from '../components/Logo/Logo';
import { textMap, projectTexts } from '../utils/textMap';
import SEO from '../components/SEO';
import {
  Heading,
  Text,
  useColorMode,
  Box,
  Link as ExternalLink,
  BoxProps,
} from '@chakra-ui/core';
import CoverImage from '../components/CoverImage/CoverImage';
import { Link as MDXLink } from '../components/MDXComponents/MDXComponents';
import { ProjectsListQueryQuery } from '../types';

export interface ProjectsProps {
  data: ProjectsListQueryQuery;
}

const Item: React.FC<BoxProps> = ({ ...restProps }) => {
  const { colorMode } = useColorMode();

  const backgroundColor = colorMode === 'light' ? ' #edf2f7' : '#2c3442';

  return (
    <Box
      as="li"
      display="grid"
      listStyleType="none"
      gridGap="var(--space-l)"
      gridTemplateColumns="repeat(auto-fit, minmax(256px, 1fr))"
      alignItems="center"
      backgroundColor={backgroundColor}
      padding="48px"
      borderRadius="16px"
      mb="196px"
      {...restProps}
    />
  );
};

const Projects: React.FC<ProjectsProps> = ({
  data: {
    allMdx: { nodes: posts },
  },
}) => {
  const { colorMode } = useColorMode();

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
        {posts.map(({ id, fields, excerpt, frontmatter }) => {
          const { image, background, fit } = frontmatter.featured;

          return (
            <Item key={id} colorMode={colorMode}>
              <MDXLink to={fields.slug} display="block">
                <CoverImage
                  maxHeight="360px"
                  fluid={image.childImageSharp.fluid}
                  background={background}
                  fit={fit}
                />
              </MDXLink>

              <Box dir="ltr">
                <ExternalLink href={frontmatter.link} display="block">
                  <Logo name={frontmatter.company} />
                </ExternalLink>

                <MDXLink to={fields.slug}>
                  <Heading mt={theme.space.s} fontWeight={400}>
                    <strong>{frontmatter.title}</strong>{' '}
                    {textMap(frontmatter.kind, projectTexts)}
                  </Heading>
                </MDXLink>

                <Text mt={theme.space.s}>{excerpt}</Text>
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
      nodes {
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
`;
export default Projects;
