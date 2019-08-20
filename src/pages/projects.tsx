import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Card } from "@coterminous/ui"
import styled from "styled-components"
import Img from "gatsby-image"

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  margin: 80px auto;
  padding: 0;
  max-width: 960px;
`

const Item = styled.li`
  list-style: none;
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
              <Card content={<Img fluid={featuredImgFluid} />}>
                <Link to={post.fields.slug}>
                  <h2>{post.frontmatter.title}</h2>
                </Link>
                <p>{post.excerpt}</p>
              </Card>
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
