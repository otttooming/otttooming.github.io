import * as React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import styled from "styled-components"
import { theme, Heading } from "@coterminous/ui"
import MasonryGallery from "../components/MasonryGallery/MasonryGallery"
import ImageZoom from "../components/Image/Image.Zoom"

export interface PostProps {
  data: any
}

const Wrapper = styled.div`
  max-width: 960px;
  margin: 80px auto;

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
`

const StyledHeading = styled(Heading)`
  font-weight: ${theme.fontWeight.normal};
`

const components = { MasonryGallery, img: ImageZoom }

const About: React.FC<PostProps> = ({ data: { mdx } }) => {
  return (
    <Layout>
      <Wrapper>
        <StyledHeading>
          <strong>{mdx.frontmatter.title}</strong>{" "}
        </StyledHeading>
      </Wrapper>

      <Wrapper>
        <MDXProvider components={components}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </Wrapper>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query AboutPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
