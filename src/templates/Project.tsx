import { Box, Heading, Link } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import { ExternalLink } from 'react-feather';
import CoverImage from '../components/CoverImage/CoverImage';
import Logo from '../components/Logo/Logo';
import MDXComponents from '../components/MDXComponents/MDXComponents';
import SEO from '../components/SEO';
import TagList from '../components/TagList/TagList';
import { getMappedTags } from '../components/TagList/tagMap';
import Layout from '../components/layout';
import { techTags } from '../constants/tech';
import { ProjectPostQueryQuery } from '../types';
import { projectTexts, textMap } from '../utils/textMap';
import { theme } from '../utils/theme.css';
import { wrapper } from './Project.css';

const Project = ({ children, data: { mdx } }) => {
  const { image, background, fit } = mdx.frontmatter.featured;

  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} description="" />

      <Box maxWidth="1024px" m="80px auto 0" px="16px" position="relative">
        <CoverImage
          alt={mdx.frontmatter.title}
          maxHeight="70vh"
          fit={fit}
          background={background}
          fluid={image.childImageSharp.gatsbyImageData}
        />

        <Link
          position="absolute"
          bottom="-16px"
          left="32px"
          display="inline-flex"
          background="#edf2f7"
          color="rgb(26, 32, 44)"
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

      <Box as="header" mt="80px" mx="auto" px="16px" maxWidth="960px">
        <Logo name={mdx.frontmatter.company} />

        <Heading as="h1" fontWeight={400} mt={theme.space.s}>
          <strong>{mdx.frontmatter.title}</strong>{' '}
          {textMap(mdx.frontmatter.kind, projectTexts)}
        </Heading>

        <TagList tags={getMappedTags(mdx.frontmatter.tech, techTags)} />
      </Box>

      <div className={wrapper}>
        <MDXProvider components={MDXComponents}>{children}</MDXProvider>
      </div>
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
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          background
          fit
        }
      }
    }
  }
`;
