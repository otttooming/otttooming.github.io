import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import { GridItem, theme } from "@coterminous/ui"
import Illustration from "../components/Illustration"
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

const Segment = styled.div``

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Segment>
      <Grid>
        <GridItem>
          <h1>
            <strong>Hi,</strong> my name is Ott
          </h1>
          <p>I'm a developer/student</p>
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
