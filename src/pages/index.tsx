import * as React from 'react';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/SEO';
import { GitHub, Linkedin, Twitter } from 'react-feather';
import Gallery from '../components/Gallery/Gallery';
import HexGrid from '../components/HexGrid/HexGrid';
import Coop from '../components/Coop/Coop';
import { theme } from '../utils/theme';
import {
  Link,
  Heading,
  Box,
  Text as ChakraText,
  IconButton,
  useColorMode,
  BoxProps,
  HeadingProps,
} from '@chakra-ui/core';

const Grid: React.FC<BoxProps> = ({ ...restProps }) => {
  const { colorMode } = useColorMode();

  const backgroundColor = colorMode === 'light' ? ' #edf2f7' : '#2c3442';

  return (
    <Box
      as="section"
      display="grid"
      gridGap="var(--space-l)"
      gridTemplateColumns="repeat(auto-fit, minmax(256px, 1fr))"
      alignItems="center"
      backgroundColor={backgroundColor}
      padding="48px"
      borderRadius="16px"
      {...restProps}
    />
  );
};

const AltGrid: React.FC<BoxProps> = ({ ...restProps }) => (
  <Box
    as="section"
    display="grid"
    gridGap="var(--space-l)"
    gridTemplateColumns="repeat(auto-fit, minmax(64px, auto))"
    alignItems="center"
    maxWidth="1280px"
    margin="0 auto"
    padding={theme.space.xl}
    {...restProps}
  />
);

const PlainGrid: React.FC<BoxProps> = ({ ...restProps }) => (
  <Box
    as="section"
    maxWidth="960px"
    margin="var(--space-xl) auto"
    {...restProps}
  />
);

const Subheading: React.FC<HeadingProps> = ({ ...restProps }) => (
  <Heading
    as="h2"
    size="md"
    fontWeight={theme.fontWeight.normal}
    {...restProps}
  />
);

const Segment: React.FC<BoxProps> = ({ ...restProps }) => (
  <Box px="16px" {...restProps} />
);

const SmallType = ({ children }) => {
  const { colorMode } = useColorMode();

  const color = colorMode === 'light' ? '#243343' : '';

  return (
    <ChakraText
      mb="8px"
      color={color}
      textTransform="uppercase"
      fontSize="14px"
    >
      {children}
    </ChakraText>
  );
};

const Text: React.FC<BoxProps> = ({ ...restProps }) => (
  <ChakraText mt="8px" {...restProps} />
);

const OutLink = ({ ...restProps }) => (
  <Link
    display="flex"
    alignItems="center"
    fontSize="16px"
    isExternal={true}
    {...restProps}
  />
);

const SocialIcon = ({ ...restProps }) => (
  <IconButton
    as="span"
    aria-label="button"
    size="sm"
    mr={theme.space.s}
    {...restProps}
  />
);

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="" />
    <Segment
      minHeight="calc(100vh - 72px)"
      pb="72px"
      display="flex"
      alignItems="center"
      maxWidth="960px"
      margin="0 auto"
    >
      <Grid>
        <Box>
          <Heading as="h1" fontWeight={400}>
            Hi, I am <strong>Ott</strong>
          </Heading>

          <Subheading>
            Front-end developer/<strong>student</strong>
          </Subheading>

          <Text mt="16px">
            This is something to collate all my thoughts and gather the
            documentation I have lingering around
          </Text>

          <Text mt="24px">
            <OutLink href="https://github.com/otttooming">
              <SocialIcon icon={() => <GitHub size="20" />} />
              <strong>github.com</strong>/otttooming
            </OutLink>
          </Text>

          <Text mt="4px">
            <OutLink href="https://www.linkedin.com/in/otttooming/">
              <SocialIcon icon={() => <Linkedin size="16" />} />
              <strong>linkedin.com</strong>/in/otttooming
            </OutLink>
          </Text>

          <Text mt="4px">
            <OutLink href="https://twitter.com/otttooming">
              <SocialIcon icon={() => <Twitter size="16" />} />
              <strong>twitter.com</strong>/otttooming
            </OutLink>
          </Text>
        </Box>

        <Box display="flex" alignContent="center" justifyContent="center">
          <Box
            as={Image}
            display="flex"
            justifyContent="center"
            width="100%"
            borderRadius="8px"
            boxShadow="5px 25px 40px rgba(0, 0, 0, 0.2)"
          />
        </Box>
      </Grid>
    </Segment>

    <Segment>
      <PlainGrid>
        <SmallType>Passions</SmallType>
        <Subheading>
          <strong>Animal welfare</strong> and my cats and dogs specifically
        </Subheading>
      </PlainGrid>

      <Gallery />
    </Segment>
    <Segment>
      <AltGrid>
        <HexGrid />

        <Box>
          <SmallType>Experience</SmallType>
          <Subheading>
            <strong>Tech stack</strong> that I currently use
          </Subheading>

          <Text mt="16px">
            Passionate about TypeScript, React, NodeJS, GraphQL and statically
            typed languages in general.
          </Text>
        </Box>
      </AltGrid>
    </Segment>

    <Segment>
      <PlainGrid textAlign="center">
        <SmallType>Industry</SmallType>
        <Subheading>
          Some <strong>amazing companies </strong> I&apos;ve worked with
        </Subheading>

        <Coop />
      </PlainGrid>
    </Segment>
  </Layout>
);

export default IndexPage;
