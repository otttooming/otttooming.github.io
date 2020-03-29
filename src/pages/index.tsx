import * as React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/SEO"
import styled from "@emotion/styled"
import { GitHub, Linkedin, Twitter } from "react-feather"
import Gallery from "../components/Gallery/Gallery"
import HexGrid from "../components/HexGrid/HexGrid"
import Coop from "../components/Coop/Coop"
import { theme } from "../utils/theme"
import { Link, Heading, Box, Text as ChakraText } from "@chakra-ui/core"

const StyledImage = styled(Image)`
  border-radius: 8px;
  width: 100%;
  align-content: center;
  display: flex;
  justify-content: center;
`

const Grid = styled.section`
  display: grid;
  grid-gap: var(--space-l);
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
  min-height: calc(100vh - 72px);
  max-width: 960px;
  margin: 0 auto;
`

const AltGrid = styled.section`
  display: grid;
  grid-gap: var(--space-l);
  grid-template-columns: repeat(auto-fit, minmax(64px, auto));
  align-items: center;
  padding: ${theme.space.xl};
  max-width: 1280px;
  margin: 0 auto;
`

const PlainGrid = ({ ...restProps }) => (
  <Box
    as="section"
    maxWidth="960px"
    margin="var(--space-xl) auto"
    {...restProps}
  />
)

const CenterImage = styled.div`
  align-content: center;
  display: flex;
  justify-content: center;
`

const Subheading = ({ ...restProps }) => (
  <ChakraText as="h2" fontWeight={theme.fontWeight.normal} {...restProps} />
)

const Segment = styled.div``

const SmallType = styled.p`
  margin: 0 0 8px;
  text-transform: uppercase;
  color: #243343;
  font-size: 14px;
`

const Text = ({ ...restProps }) => <ChakraText mt="8px" {...restProps} />

const OutLink = ({ ...restProps }) => (
  <Link mt={theme.space.s} display="flex" {...restProps} />
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="" />
    <Segment>
      <Grid>
        <Box>
          <Heading fontWeight={500}>
            Hi, I am <strong>Ott</strong>
          </Heading>

          <Subheading>
            Front-end developer/<strong>student</strong>
          </Subheading>

          <Text mt="16px">
            This is something to collate all my thoughts and gather the
            documentation I have lingering around
          </Text>

          <Text mt="32px">
            <OutLink href="https://github.com/otttooming">
              <GitHub /> github.com/otttooming
            </OutLink>
          </Text>

          <Text>
            <OutLink href="https://www.linkedin.com/in/otttooming/">
              <Linkedin /> linkedin.com/in/otttooming
            </OutLink>
          </Text>

          <Text>
            <OutLink href="https://twitter.com/otttooming">
              <Twitter /> twitter.com/otttooming
            </OutLink>
          </Text>
        </Box>

        <CenterImage>
          <StyledImage />
        </CenterImage>
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
        <Box>
          <HexGrid />
        </Box>

        <Box>
          <SmallType>Experience</SmallType>
          <Subheading>
            <strong>Tech stack</strong> that I currently use
          </Subheading>

          <Text>
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
          Some <strong>amazing companies </strong> I've worked with
        </Subheading>

        <Coop />
      </PlainGrid>
    </Segment>
  </Layout>
)

export default IndexPage
