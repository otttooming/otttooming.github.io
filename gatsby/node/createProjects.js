const path = require('path');

const templates = {
  about: path.resolve(`./src/templates/About.tsx`),
  persons: path.resolve(`./src/templates/Project.tsx`),
  projects: path.resolve(`./src/templates/Project.tsx`),
  /**
   * We don't need individual pages for technologies listing.
   * Only listing is shown.
   */
  technologies: path.resolve(`./src/pages/404.js`),
};

module.exports = async function createProjects(graphql, reporter, createPage) {
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fileAbsolutePath
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  // Create blog post pages.
  const posts = result.data.allMdx.edges;
  // We'll call `createPage` for each result
  const promises = posts.map(async ({ node }) => {
    const directory = node.fileAbsolutePath.split('/').reverse()[2];

    createPage({
      // This is the slug we created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: templates[directory],
      // We can use the values in this context in
      // our page layout component
      context: { id: node.id },
    });
  });

  await Promise.all(promises);
};
