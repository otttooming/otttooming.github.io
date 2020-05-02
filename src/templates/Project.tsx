import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import styled from '@emotion/styled';
import GatsbyImage from 'gatsby-image';
import TechStack from '../components/TechStack/TechStack';
import { textMap } from '../utils/textMap';
import Logo from '../components/Logo/Logo';
import SEO from '../components/SEO';
import { theme } from '../utils/theme';
import { Box, Heading, BoxProps } from '@chakra-ui/core';
import MDXComponents from '../components/MDXComponents/MDXComponents';

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

const Image: React.FC<BoxProps & { fit: string; fluid: any }> = ({
  fit: passedFit,
  fluid,
  background: passedBackground,
  ...restProps
}) => {
  const fit = Boolean(passedFit) ? passedFit : 'cover';

  const isObjectFitCover = fit === 'cover';
  const background = passedBackground ?? '#EDF2F7';

  const fitProps: BoxProps = {
    display: 'flex',
    alignItems: 'center',
  };

  const width = isObjectFitCover ? '100%' : undefined;
  const maxHeight = isObjectFitCover ? undefined : '70vh';

  return (
    <Box
      maxWidth="1024px"
      background={background}
      m="80px auto 0"
      borderRadius={theme.borderRadius.m}
      overflow="hidden"
      maxHeight="70vh"
      boxShadow="5px 25px 40px rgba(0, 0, 0, 0.2)"
      {...(isObjectFitCover && fitProps)}
      {...restProps}
    >
      <GatsbyImage
        fluid={fluid}
        style={{ width }}
        imgStyle={{
          objectFit: fit,
          maxHeight,
        }}
      />
    </Box>
  );
};

const Project: React.FC<PostProps> = ({ data: { mdx } }) => {
  const { image, background, fit } = mdx.frontmatter.featured;

  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} description="" />

      <Image
        fit={fit}
        background={background}
        fluid={image.childImageSharp.fluid}
      />

      <Wrapper>
        <Logo name={mdx.frontmatter.company} link={mdx.frontmatter.link} />

        <Heading fontWeight={500}>
          <strong>{mdx.frontmatter.title}</strong>{' '}
          {textMap(mdx.frontmatter.kind)}
        </Heading>

        <TechStack items={mdx.frontmatter.tech} />
      </Wrapper>

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
              fluid(maxWidth: 800) {
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
