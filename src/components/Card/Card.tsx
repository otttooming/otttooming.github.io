import * as React from 'react';
import {
  PseudoBox,
  Box,
  AspectRatio,
  Image,
  Heading,
  useColorMode,
} from '@chakra-ui/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import MDXComponents from '../MDXComponents/MDXComponents';
import { MDXProvider } from '@mdx-js/react';
import CoverImage from '../CoverImage/CoverImage';
import { getMatchingProjects } from './Card.helpers';
import { TechnologiesFrontmatterFragmentFragment } from '../../types';
import { css } from '@emotion/react';

export interface CardProps {
  title: string;
  body: any;
  featured: TechnologiesFrontmatterFragmentFragment['featured'];
  projects: any;
}

const Item = ({ id, frontmatter: { featured } }) => {
  const { image, background, fit } = featured;

  return (
    <Box key={id} minWidth="320px" mr="16px">
      <CoverImage
        maxHeight="260px"
        fit={fit}
        background={background}
        fluid={image.childImageSharp.fluid}
        boxShadow="none"
      />
    </Box>
  );
};

const Card: React.FC<CardProps> = ({ title, body, featured, projects }) => {
  const {
    illustration,
    height: htmlHeight,
    width: htmlWidth,
    alt,
    background,
  } = featured;

  const { colorMode } = useColorMode();

  const backgroundColor = colorMode === 'light' ? ' #edf2f7' : '#2c3442';

  const ratio = htmlWidth / htmlHeight;

  const matchingProjects = getMatchingProjects(projects, title);

  return (
    <Box
      as="li"
      display="grid"
      gridTemplateColumns={['0 1fr 0', '0 1fr 0', '64px 1fr 64px']}
      gridTemplateRows="auto 8em 1fr auto"
      _before={{
        content: `""`,
        gridColumn: '1/-1',
        gridRow: '1/3',
        background,
        borderRadius: [0, 0, 8],
      }}
      marginBottom="80px"
    >
      <Box
        gridColumn="1 / 4"
        gridRow="1 / 2"
        color="#fff"
        height="320px"
        display="flex"
        alignItems="center"
        overflow="scroll hidden"
        css={css`
          scrollbar-width: none;

          &::-webkit-scrollbar {
            width: 0px;
          }
        `}
      >
        <AspectRatio
          ratio={ratio}
          maxWidth={96}
          width="100%"
          ml="96px"
          mr="64px"
        >
          <Image
            maxHeight="100%"
            src={illustration.publicURL}
            alt={alt}
            htmlHeight={htmlHeight}
            htmlWidth={htmlWidth}
            loading="lazy"
          />
        </AspectRatio>

        <Box width="100%" height="100%" position="relative">
          <Box
            display="flex"
            alignItems="center"
            position="absolute"
            left="0"
            right="0"
            top="0"
            bottom="0"
          >
            {matchingProjects.map((item) => {
              return <Item key={item.id} {...item} />;
            })}
          </Box>
        </Box>
      </Box>
      <Box
        gridRow="2 / 4"
        gridColumn="2 / 3"
        paddingY="32px"
        paddingX={['16px', '32px', '32px']}
        backgroundColor={backgroundColor}
        borderRadius={['0 0 8px 8px', '0 0 8px 8px', 8]}
      >
        <Heading>{title}</Heading>

        <MDXProvider components={MDXComponents}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </Box>
    </Box>
  );
};

export default Card;
