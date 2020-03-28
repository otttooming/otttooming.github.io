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
import { Button, Link, Heading, Box } from "@chakra-ui/core"

const StyledImage = styled(Image)`
  border-radius: 8px;
  width: 100%;
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

const PlainGrid = styled.section`
  max-width: 960px;
  margin: var(--space-xl) auto;
`

const CenterImage = styled.div`
  align-content: center;
  display: flex;
  justify-content: center;
`

const StyledSubHeading = styled.h2`
  font-weight: ${theme.fontWeight.normal};
  margin: 0;
`

const Segment = styled.div``

const SmallType = styled.p`
  margin: 0 0 8px;
  text-transform: uppercase;
  color: #243343;
  font-size: 14px;
`

const Center = styled.div`
  text-align: center;
`

const Text = styled.p`
  margin: 0;
`

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

          <StyledSubHeading>
            Front-end developer/<strong>student</strong>
          </StyledSubHeading>
          <p>
            This is something to collate all my thoughts and gather the
            documentation I have lingering around
          </p>

          <Text>
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

        <Box>
          <CenterImage>
            <StyledImage />
          </CenterImage>
        </Box>
      </Grid>
    </Segment>

    <Segment>
      <PlainGrid>
        <SmallType>Passions</SmallType>
        <StyledSubHeading>
          <strong>Animal welfare</strong> and my cats and dogs specifically
        </StyledSubHeading>
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
          <StyledSubHeading>
            <strong>Tech stack</strong> that I currently use
          </StyledSubHeading>
          <p>
            Passionate about TypeScript, React, NodeJS, GraphQL and statically
            typed languages in general.
          </p>
        </Box>
      </AltGrid>
    </Segment>

    <Segment>
      <PlainGrid>
        <Center>
          <SmallType>Industry</SmallType>
          <StyledSubHeading>
            Some <strong>amazing companies </strong> I've worked with
          </StyledSubHeading>
        </Center>

        <Coop />
      </PlainGrid>
    </Segment>
  </Layout>
)

export default IndexPage
