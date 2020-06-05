import * as React from 'react';
import {
  PseudoBox,
  Box,
  AspectRatioBox,
  Image,
  Heading,
  useColorMode,
} from '@chakra-ui/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import MDXComponents from '../MDXComponents/MDXComponents';
import { MDXProvider } from '@mdx-js/react';

export interface CardProps {
  title: string;
  body: any;
  featured: any;
}

const Card: React.FC<CardProps> = ({ title, body, featured }) => {
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

  return (
    <PseudoBox
      display="grid"
      gridTemplateColumns="64px 1fr 64px"
      gridTemplateRows="auto 8em 1fr auto"
      _before={{
        content: `""`,
        gridColumn: '1/-1',
        gridRow: '1/3',
        background,
        borderRadius: 8,
      }}
      marginBottom="80px"
    >
      <Box
        gridColumn="2 / 3"
        gridRow="1 / 2"
        color="#fff"
        padding="35px 20px"
        height="320px"
        display="flex"
        alignItems="center"
      >
        <AspectRatioBox ratio={ratio} maxWidth={160} width="100%">
          <Image
            maxHeight="100%"
            src={illustration.publicURL}
            alt={alt}
            htmlHeight={htmlHeight}
            htmlWidth={htmlWidth}
            loading="lazy"
          />
        </AspectRatioBox>
      </Box>
      <Box
        gridRow="2 / 4"
        gridColumn="2 / 3"
        padding="32px"
        backgroundColor={backgroundColor}
        borderRadius="8px"
      >
        <Heading>{title}</Heading>

        <MDXProvider components={MDXComponents}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </Box>
    </PseudoBox>
  );
};

export default Card;
