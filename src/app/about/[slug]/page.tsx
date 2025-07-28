import { MDXRemote } from 'next-mdx-remote-client/rsc';
import TagList from '../../../components/TagList/TagList';
import { socialTags } from '../../../constants/social';
import { About } from './page.components';
import * as styles from './page.css';
import Image from 'next/image';
import MDXComponents from '../../../components/MDXComponents/MDXComponents';
import { Metadata } from 'next';
import { readPost } from '../../../services/readPost';

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
    featured: { illustration, width, height, alt },
  } = await readPost<Frontmatter>`public/content/about/${slug}`;

  return (
    <>
      <div className={styles.coverWrapper}>
        <Image
          className={styles.coverImage}
          src={`/content/about/${slug}/${illustration}`}
          width={width}
          height={height}
          alt={alt}
          priority={true}
        />
      </div>

      <About.Wrapper>
        <h1>{title}</h1>

        <TagList tags={tags} mapping={socialTags} />
      </About.Wrapper>

      <About.Wrapper>
        <MDXRemote
          options={{ parseFrontmatter: true }}
          components={MDXComponents}
          source={source}
        />
      </About.Wrapper>
    </>
  );
}
