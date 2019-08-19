import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const Projects = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <Layout>
      <h1>Awesome MDX Blog</h1>
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
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
