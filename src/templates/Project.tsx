import * as React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import GatsbyImage from "gatsby-image"
import TechStack from "../components/TechStack/TechStack"
import { textMap } from "../utils/textMap"
import Logo from "../components/Logo/Logo"
import MasonryGallery from "../components/MasonryGallery/MasonryGallery"
import ImageZoom from "../components/Image/Image.Zoom"
import PieChart from "../components/PieChart"
import Illustration from "../components/Illustration/"
import SEO from "../components/SEO"
import { theme } from "../utils/theme"
import { Heading } from "@chakra-ui/core"

export interface PostProps {
  data: any
}

const Wrapper = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;

  > * {
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
  }

  h2 {
    font-size: 48px;
  }

  h3 {
    font-size: 40px;
  }

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

const Img = styled(GatsbyImage)`
  max-width: 1024px;
  margin: 0 auto;
  border-radius: ${theme.borderRadius.m};
`

const components = { MasonryGallery, img: ImageZoom, PieChart, Illustration }

const Project: React.FC<PostProps> = ({ data: { mdx } }) => {
  const featuredImgFluid = mdx.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} description="" />

      <Wrapper>
        <Logo name={mdx.frontmatter.company} link={mdx.frontmatter.link} />

        <Heading fontWeight={500}>
          <strong>{mdx.frontmatter.title}</strong>{" "}
          {textMap(mdx.frontmatter.kind)}
        </Heading>
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
