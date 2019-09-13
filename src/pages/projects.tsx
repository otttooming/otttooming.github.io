import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Heading, theme } from "@coterminous/ui"
import styled from "styled-components"
import GatsbyImage from "gatsby-image"
import Logo from "../components/Logo/Logo"
import { textMap } from "../utils/textMap"

const Wrapper = styled.ul`
  margin: 80px auto;
  padding: 0;
  max-width: 960px;
`

const Container = styled.ul`
  margin: 80px auto;
  padding: 0;
  max-width: 1080px;
`

const Item = styled.li`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  grid-gap: 32px;
  list-style: none;
  margin-bottom: 196px;
  align-items: center;

  &:nth-child(even) {
    direction: rtl;
  }
`

const Content = styled.div`
  direction: ltr;
`

const StyledHeading = styled(Heading)`
  font-weight: ${theme.fontWeight.normal};
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const Img = styled(GatsbyImage)`
  border-radius: ${theme.borderRadius.m};
`

const Description = styled.div`
  margin-top: ${theme.space.l};
`

const Text = styled.p`
  margin: 0;
`

/**
 * Only return posts when Gatsby has run static site query
 */
const getPosts = data => {
  if (!data.allMdx) {
    return []
  }
  const { edges: posts } = data.allMdx

  return posts
}

const Projects = ({ data }) => {
  const posts = getPosts(data)

  return (
    <Layout>
      <Wrapper as="div">
        <StyledHeading mt={theme.space.s}>
          <strong>Some projects</strong> I have been involved in
        </StyledHeading>

        <Description>
          <Text>
            All of the projects have been a team collaboration and effort.
          </Text>
          <Text>
            I have been thoroughly fortunate to have been given the opportunity
            to work with some amazing people.
          </Text>
        </Description>
      </Wrapper>

      <Container>
        {posts.map(({ node: post }) => {
          const featuredImgFluid =
            post.frontmatter.featuredImage.childImageSharp.fluid

          return (
            <Item key={post.id}>
              <Img fluid={featuredImgFluid} />
              <Content>
                <Logo
                  name={post.frontmatter.company}
                  link={post.frontmatter.link}
                />

                <StyledHeading mt={theme.space.s}>
                  <StyledLink to={post.fields.slug}>
                    <strong>{post.frontmatter.title}</strong>{" "}
                    {textMap(post.frontmatter.kind)}
                  </StyledLink>
                </StyledHeading>

                <p>{post.excerpt}</p>
              </Content>
            </Item>
          )
        })}
      </Container>
    </Layout>
  )
}
export const pageQuery = graphql`
  query projectIndex {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 72)
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
