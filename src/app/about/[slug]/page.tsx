import { MDXRemote } from 'next-mdx-remote-client/rsc';
import TagList from '../../../components/TagList/TagList';
import { socialTags } from '../../../constants/social';
import MDXComponents from '../../../components/MDXComponents/MDXComponents';
import { Metadata } from 'next';
import { readPost } from '../../../services/readPost';
import Layout from '../../../components/Layout/Layout';
import CoverImage from '../../../components/CoverImage/CoverImage';

type Frontmatter = {
  title: string;
  date: string;
  slug: string;
  featured: {
    illustration: string;
    width: number;
    height: number;
    alt: string;
  };
  tags: string[];
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
    title,
    tags,
    featured: { illustration, height, alt },
  } = await readPost<Frontmatter>`public/content/about/${slug}`;

  return (
    <main>
      <Layout.Hero>
        <CoverImage
          alt={alt}
          src={`/content/about/${slug}/${illustration}`}
          maxHeight={height}
          background="#fff"
          fit="contain"
        />
      </Layout.Hero>

      <Layout.DetailHeader>
        <h1>{title}</h1>

        <TagList tags={tags} mapping={socialTags} />
      </Layout.DetailHeader>

      <Layout.DetailSection>
        <MDXRemote
          options={{ parseFrontmatter: true }}
          components={MDXComponents}
          source={source}
        />
      </Layout.DetailSection>
    </main>
  );
}
