import { MDXRemote } from 'next-mdx-remote-client/rsc';
import { ExternalLink } from 'react-feather';
import CoverImage from '../../../components/CoverImage/CoverImage';
import Logo from '../../../components/Logo/Logo';
import MDXComponents from '../../../components/MDXComponents/MDXComponents';
import TagList from '../../../components/TagList/TagList';
// import Layout from '../components/layout';
import { techTags } from '../../../constants/tech';
import * as styles from './page.css';
import Image from 'next/image';
import { Metadata } from 'next';
import { ProjectHeader } from '../_components/ProjectHeader';
import { readPost } from '../../../services/readPost';

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

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const { title } = await readPost<Frontmatter>(
    `public/content/projects/${slug}`,
  );

  return {
    title: `${title} | Personal portfolio - Ott`,
  };
}

export default async function ProjectPostPage({ params }: Props) {
  const { slug } = await params;
  const {
    source,
    title,
    link,
    company,
    kind,
    tech,
    featured: { image, fit, background },
  } = await readPost<Frontmatter>(`public/content/projects/${slug}`);

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

        <ProjectHeader
          as="h1"
          title={title}
          kind={kind}
          className={styles.heading}
        />

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
