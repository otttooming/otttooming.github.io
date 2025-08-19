import { MDXRemote } from 'next-mdx-remote-client/rsc';
import CoverImage from '../../../components/CoverImage/CoverImage';
import Logo from '../../../components/Logo/Logo';
import MDXComponents from '../../../components/MDXComponents/MDXComponents';
import TagList from '../../../components/TagList/TagList';
import { techTags } from '../../../constants/tech';
import Image from 'next/image';
import { Metadata } from 'next';
import { ProjectHeader } from '../_components/ProjectHeader';
import { readPost } from '../../../services/readPost';
import Layout from '../../../components/Layout/Layout';

type Frontmatter = {
  title: string;
  date: string;
  slug: string;
  featured: {
    src: string;
    height: number;
    width: number;
    background?: string;
    fit?: 'contain' | 'cover';
  };
  link: string;
  company: string;
  kind: string;
  tech: string[];
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const { title } =
    await readPost<Frontmatter>`public/content/projects/${slug}`;

  return {
    title: `${title} | Personal portfolio - Ott`,
  };
}

export default async function ProjectPostPage({ params }: Props) {
  const { slug } = await params;
  const {
    source,
    title,
    company,
    kind,
    tech,
    featured: { src, height, width, background, fit },
  } = await readPost<Frontmatter>`public/content/projects/${slug}`;

  return (
    <main>
      <Layout.Breakout as="article">
        <Layout.Hero data-layout-breakout>
          <CoverImage
            alt={title}
            src={`/content/projects/${slug}/${src}`}
            height={height}
            width={width}
            background={background}
            fit={fit}
          />
        </Layout.Hero>

        <Layout.DetailHeader>
          <Logo name={company} />

          <ProjectHeader as="h1" title={title} kind={kind} />

          <TagList tags={tech} mapping={techTags} />
        </Layout.DetailHeader>

        <MDXRemote
          options={{ parseFrontmatter: true }}
          components={{
            ...MDXComponents,
            img: ({ src, alt }) => {
              return (
                <Image
                  alt={alt}
                  src={`/content/projects/${slug}/${src}`}
                  fill={true}
                />
              );
            },
          }}
          source={source}
        />
      </Layout.Breakout>
    </main>
  );
}
