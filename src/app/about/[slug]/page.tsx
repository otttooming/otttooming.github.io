import { evaluate, MDXRemote } from 'next-mdx-remote-client/rsc';
import TagList from '../../../components/TagList/TagList';
import { socialTags } from '../../../constants/social';
import { About } from './page.components';
import * as styles from './page.css';
import Image from 'next/image';
import MDXComponents from '../../../components/MDXComponents/MDXComponents';
import { readSourceFile } from '../../../utils/fs';

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

async function getPost(slug: string) {
  const source = await readSourceFile(
    `public/content/about/${slug}`,
    'index.mdx',
  );

  const { frontmatter } = await evaluate<Frontmatter>({
    source,
    options: {
      parseFrontmatter: true,
    },
  });
  return {
    source,
    slug,
    frontmatter,
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { source, frontmatter } = await getPost(slug);
  const {
    title,
    tags,
    featured: { illustration, width, height, alt },
  } = frontmatter;

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
        <h1>{frontmatter.title}</h1>

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
