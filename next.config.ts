import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();

import createMDX from '@next/mdx';
const withMDX = createMDX({
  extension: /\.mdx$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withVanillaExtract(withMDX(nextConfig));
