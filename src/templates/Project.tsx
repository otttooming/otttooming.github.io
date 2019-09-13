import * as React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import styled from "styled-components"
import GatsbyImage from "gatsby-image"
import { theme, Heading } from "@coterminous/ui"
import TechStack from "../components/TechStack/TechStack"
import { textMap } from "../utils/textMap"
import Logo from "../components/Logo/Logo"

export interface PostProps {
  data: any
}

const Wrapper = styled.div`
  max-width: 960px;
  margin: 80px auto;

  .gatsby-resp-image-wrapper > picture {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const Img = styled(GatsbyImage)`
  max-width: 1024px;
  margin: 0 auto;
  border-radius: ${theme.borderRadius.m};
`

const StyledHeading = styled(Heading)`
  font-weight: ${theme.fontWeight.normal};
`

const components = {}

const Project: React.FC<PostProps> = ({ data: { mdx } }) => {
  const featuredImgFluid = mdx.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <Wrapper>
        <Logo name={mdx.frontmatter.company} link={mdx.frontmatter.link} />

        <StyledHeading>
          <strong>{mdx.frontmatter.title}</strong>{" "}
          {textMap(mdx.frontmatter.kind)}
        </StyledHeading>
        <TechStack items={mdx.frontmatter.tech} />
      </Wrapper>
      <Img fluid={featuredImgFluid} />

      <Wrapper>
        <MDXProvider components={components}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </Wrapper>
    </Layout>
  )
}

export default Project

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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
