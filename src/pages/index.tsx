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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
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
  </Layout>
)

export default IndexPage
