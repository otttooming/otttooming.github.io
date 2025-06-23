import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
  },
});

const withVanillaExtract = createVanillaExtractPlugin();

export default withVanillaExtract(
  withMDX({
    pageExtensions: ['mdx', 'ts', 'tsx'],
  }),
);
