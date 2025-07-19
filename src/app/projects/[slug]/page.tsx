import { evaluate, MDXRemote } from 'next-mdx-remote-client/rsc';
import { ExternalLink } from 'react-feather';
import CoverImage from '../../../components/CoverImage/CoverImage';
import Logo from '../../../components/Logo/Logo';
import MDXComponents from '../../../components/MDXComponents/MDXComponents';
import TagList from '../../../components/TagList/TagList';
// import Layout from '../components/layout';
import { techTags } from '../../../constants/tech';
import { textMap } from '../../../utils/textMap';
import * as styles from './page.css';
import Image from 'next/image';
import { readSourceFile } from '../../../utils/fs';
import { Metadata } from 'next';

type Frontmatter = {
  title: string;
  date: string;
  slug: string;
  featured: {
    image: string;
    background?: string;
    fit?: 'contain' | 'cover';
  };
  link: string;
  company: string;
  kind: string;
  tech: string[];
};

async function getPost(slug: string) {
  const source = await readSourceFile(
    `public/content/projects/${slug}`,
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

export const metadata: Metadata = {
  title: 'Projects | Personal portfolio - Ott',
};

export default async function ProjectPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { source, frontmatter } = await getPost(slug);
  const {
    title,
    link,
    company,
    kind,
    tech,
    featured: { image, fit, background },
  } = frontmatter;

  return (
    <>
      <div className={styles.coverContainer}>
        <CoverImage
          alt={title}
          src={`/content/projects/${slug}/${image}`}
          maxHeight="70vh"
          background={background}
          fit={fit}
        />

        <a
          className={styles.projectLink}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Link to project</p>
          <ExternalLink className={styles.externalLinkIcon} />
        </a>
      </div>

      <header className={styles.header}>
        <Logo name={company} />

        <h1 className={styles.heading}>
          <strong>{title}</strong> {textMap(kind)}
        </h1>

        <TagList tags={tech} mapping={techTags} />
      </header>

      <div className={styles.wrapper}>
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
      </div>
    </>
  );
}
