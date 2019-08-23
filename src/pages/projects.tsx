import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Heading, theme } from "@coterminous/ui"
import styled from "styled-components"
import Img from "gatsby-image"
import Logo from "../components/Logo/Logo"

const Wrapper = styled.ul`
  margin: 80px auto;
  padding: 0;
  max-width: 960px;
`

const Item = styled.li`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  grid-gap: 32px;
  list-style: none;
  margin-bottom: 256px;
  align-items: center;

  &:nth-child(even) {
    direction: rtl;
  }
`

const StyledHeading = styled(Heading)`
  font-weight: ${theme.fontWeight.normal};
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const Projects = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <Layout>
      <Wrapper>
        {posts.map(({ node: post }) => {
          const featuredImgFluid =
            post.frontmatter.featuredImage.childImageSharp.fluid

          return (
            <Item key={post.id}>
              <Img fluid={featuredImgFluid} />
              <div>
                <Logo name={post.frontmatter.company} />

                <StyledHeading mt={theme.space.s}>
                  <StyledLink to={post.fields.slug}>
                    <strong>{post.frontmatter.title}</strong>{" "}
                    {post.frontmatter.kind}
                  </StyledLink>
                </StyledHeading>

                <p>{post.excerpt}</p>
              </div>
            </Item>
          )
        })}
      </Wrapper>
    </Layout>
  )
}
export const pageQuery = graphql`
  query projectIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            company
            git
            link
            kind
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
export default Projects
