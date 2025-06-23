import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
const withVanillaExtract = createVanillaExtractPlugin();

import createMDX from '@next/mdx';
const withMDX = createMDX({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
};

export default withVanillaExtract(withMDX(nextConfig));
