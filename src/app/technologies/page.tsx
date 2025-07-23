import Card from '../../components/Card/Card';
import * as styles from './page.css';
import { getProjects } from '../projects/page';
import { readDirNames } from '../../utils/fs';
import { Metadata } from 'next';
import { readPost } from '../../services/readPost';

type Frontmatter = {
  title: string;
  order: string;
  slug: string;
  link: string;
  featured: {
    illustration: string;
    width: number;
    height: number;
    alt: string;
    background?: string;
  };
};

export const metadata: Metadata = {
  title: 'Technologies | Personal portfolio - Ott',
  description: 'Tech stack that I currently use',
};

export default async function Technologies() {
  const directories = await readDirNames('public/content/technologies');

  const technologies = (
    await Promise.all(
      directories.map(async (slug) => {
        const post = await readPost<Frontmatter>(
          `public/content/technologies/${slug}`,
        );

        return {
          slug,
          ...post,
        };
      }),
    )
  ).toSorted((a, b) => Number(a.order) - Number(b.order));

  const projects = await getProjects();

  return (
    <>
      <h1 className={styles.heading}>
        <strong>Tech stack</strong> that I currently use
      </h1>

      <p className={styles.description}>
        Passionate about TypeScript, React, NodeJS, GraphQL and statically typed
        languages in general.
      </p>

      <ol className={styles.cardList}>
        {technologies.map(({ source, title, slug, featured }) => {
          return (
            <Card
              key={slug}
              title={title}
              slug={slug}
              source={source}
              featured={featured}
              projects={projects}
            />
          );
        })}
      </ol>
    </>
  );
}
