import { MDXRemote } from 'next-mdx-remote-client/rsc';
import MDXComponents from '../../../components/MDXComponents/MDXComponents';
import { Metadata } from 'next';
import { readPost } from '../../../services/readPost';
import Layout from '../../../components/Layout/Layout';
import CoverImage from '../../../components/CoverImage/CoverImage';

type Frontmatter = {
  date: string;
  slug: string;
  featured: {
    illustration: string;
    width: number;
    height: number;
    alt: string;
  };
};

export const metadata: Metadata = {
  title: 'About me | Personal portfolio - Ott',
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const {
    source,
    featured: { illustration, height, width, alt },
  } = await readPost<Frontmatter>`public/content/about/${slug}`;

  return (
    <main>
      <Layout.Breakout as="article">
        <Layout.Hero>
          <CoverImage
            alt={alt}
            src={`/content/about/${slug}/${illustration}`}
            height={height}
            width={width}
            background="#fff"
            fit="contain"
            wrapper="fullRestricted"
          />
        </Layout.Hero>

        <MDXRemote
          options={{ parseFrontmatter: true }}
          components={MDXComponents}
          source={source}
        />
      </Layout.Breakout>
    </main>
  );
}
