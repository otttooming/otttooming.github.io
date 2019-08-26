/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require("gatsby-source-filesystem")
const createProjects = require("./gatsby/node/createProjects")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  // We only want to operate on `Mdx` nodes. If we had content from a
  // remote CMS we could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. We
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `/project${value}`,
    })
  }
}

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  createProjects(graphql, reporter, createPage)
}
