const path = require("path")

module.exports = async function createProjects(graphql, reporter, createPage) {
  const result = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  // Create blog post pages.
  const posts = result.data.allMdx.edges
  // We'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      // This is the slug we created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/Project.tsx`),
      // We can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}
