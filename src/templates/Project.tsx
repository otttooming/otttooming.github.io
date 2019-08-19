import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import styled from "styled-components"

export interface PostProps {
  data: any
}

const Wrapper = styled.div`
  max-width: 960px;
  margin: 80px auto;
`

const Project: React.FC<PostProps> = ({ data: { mdx } }) => {
  return (
    <Layout>
      <Wrapper>
        <h1>{mdx.frontmatter.title}</h1>
        <MDXRenderer>{mdx.body}</MDXRenderer>
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
      }
    }
  }
`
