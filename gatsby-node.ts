import { createFilePath } from 'gatsby-source-filesystem';
import path from 'node:path';

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

export function onCreateNode({ node, actions, getNode }) {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    const directory = node.internal.contentFilePath.split('/').reverse()[2];

    createNodeField({
      name: 'slug',
      node,
      value: `/${directory}${value}`,
    });
  }
}

export async function createPages({ graphql, actions: { createPage } }) {
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

  const posts = result.data.allMdx.nodes;

  posts.forEach((node) => {
    const directory = node.internal.contentFilePath.split('/').reverse()[2];

    createPage({
      path: `${directory}/${node.frontmatter.slug}`,
      component: `${templates[directory]}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    });
  });
}
