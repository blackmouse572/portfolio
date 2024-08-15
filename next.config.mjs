// const { withContentlayer } = require('next-contentlayer');
import createMDX from '@next/mdx';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import rehypeImageSize from './misc/rehypeImageSize.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
      },
    ],
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  cleanDistDir: true,
  reactStrictMode: true,
};

/** @type {import('@next/mdx').NextMDXOptions} */
const mdxOptions = {
  options: {
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypePrettyCode, [rehypeImageSize, { root: process.cwd() }]],
    remarkPlugins: [remarkGfm],
    mdxExtensions: ['.mdx', '.md'],
    mdExtensions: ['.md'],
  },
};
const withMDX = createMDX(mdxOptions);

export default withMDX(nextConfig);
