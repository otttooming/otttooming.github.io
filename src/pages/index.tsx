import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import { GridItem, theme, Heading } from "@coterminous/ui"
import Illustration from "../components/Illustration"
// @ts-ignore
import GithubIcon from "../assets/github.svg"

const StyledImage = styled(Image)`
  border-radius: 8px;
  width: 100%;
  max-width: 300px;
`

const Grid = styled.section`
  display: grid;
  grid-gap: var(--space-l);
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
  min-height: 100vh;
  padding: ${theme.space.xl};
  max-width: 960px;
  margin: 0 auto;
`

const GridSec = styled(Grid)`
  min-height: 100%;
`

const IconWrapper = styled.div`
  padding: 32px;
`

const CenterImage = styled.div`
  align-content: center;
  display: flex;
  justify-content: center;
`

const StyledHeading = styled(props => {
  console.log(props)
  return <Heading {...props} />
})`
  font-weight: ${theme.fontWeight.normal};
`

const StyledSubHeading = styled.h2`
  font-weight: ${theme.fontWeight.normal};
  margin: 0;
`

const Segment = styled.div``

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Segment>
      <Grid>
        <GridItem>
          <StyledHeading>
            Hi, I am <strong>Ott</strong>
          </StyledHeading>
          <StyledSubHeading>
            Front-end developer/<strong>student</strong>
          </StyledSubHeading>
          <p>
            This is something to collate all my thoughts and gather the
            documentation I have lingering around
          </p>
        </GridItem>
        <GridItem>
          <CenterImage>
            <StyledImage />
          </CenterImage>
        </GridItem>
      </Grid>
    </Segment>
  </Layout>
)

export default IndexPage
