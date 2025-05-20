const { createFilePath } = require('gatsby-source-filesystem');
const path = require('node:path');

const templates = {
  about: path.resolve('./src/templates/About.tsx'),
  persons: path.resolve('./src/templates/Project.tsx'),
  projects: path.resolve('./src/templates/Project.tsx'),
  /**
   * We don't need individual pages for technologies listing.
   * Only listing is shown.
   */
  technologies: path.resolve('./src/pages/Route404.tsx'),
};

async function createProjects(graphql, reporter, createPage) {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach((node) => {
    const directory = node.internal.contentFilePath.split('/').reverse()[2];

    createPage({
      // This is the slug we created before
      // (or 'node.frontmatter.slug')
      path: `${directory}/${node.frontmatter.slug}`,
      // This component will wrap our MDX content
      component: `${templates[directory]}?__contentFilePath=${node.internal.contentFilePath}`,
      // We can use the values in this context in
      // our page layout component
      context: { id: node.id },
    });
  });
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // We only want to operate on `Mdx` nodes. If we had content from a
  // remote CMS we could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    const directory = node.internal.contentFilePath.split('/').reverse()[2];

    createNodeField({
      // Name of the field you are adding
      name: 'slug',
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. We
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `/${directory}${value}`,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;
  await createProjects(graphql, reporter, createPage);
};
