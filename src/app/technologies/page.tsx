import Card from '../../components/Card/Card';
import * as styles from './page.css';
import { evaluate } from 'next-mdx-remote-client/rsc';
import { getProjects } from '../projects/page';
import { readDirNames, readSourceFile } from '../../utils/fs';

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

export default async function Technologies() {
  const directories = await readDirNames('public/content/technologies');

  const technologies = (
    await Promise.all(
      directories.map(async (slug) => {
        const source = await readSourceFile(
          `public/content/technologies/${slug}`,
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
      }),
    )
  ).toSorted(
    (a, b) => Number(a.frontmatter.order) - Number(b.frontmatter.order),
  );

  const projects = await getProjects();

  return (
    <>
      {/* <SEO title="Technologies" description="Tech stack that I currently use" /> */}

      <h1 className={styles.heading}>
        <strong>Tech stack</strong> that I currently use
      </h1>

      <p className={styles.description}>
        Passionate about TypeScript, React, NodeJS, GraphQL and statically typed
        languages in general.
      </p>

      <ol className={styles.cardList}>
        {technologies.map(({ source, frontmatter }) => {
          const { title, slug, featured } = frontmatter;

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
