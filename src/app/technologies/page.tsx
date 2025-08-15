import Card from '../../components/Card/Card';
import { getProjects } from '../projects/page';
import { readDirNames } from '../../utils/fs';
import { Metadata } from 'next';
import { readPost } from '../../services/readPost';
import Layout from '../../components/Layout/Layout';

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

async function getTechnologies() {
  const directories = await readDirNames('public/content/technologies');

  return (
    await Promise.all(
      directories.map(async (slug) => {
        const post =
          await readPost<Frontmatter>`public/content/technologies/${slug}`;

        return {
          slug,
          ...post,
        };
      }),
    )
  ).toSorted((a, b) => Number(a.order) - Number(b.order));
}

export const metadata: Metadata = {
  title: 'Technologies | Personal portfolio - Ott',
  description: 'Tech stack that I currently use',
};

export default async function Technologies() {
  const [technologies, projects] = await Promise.all([
    getTechnologies(),
    getProjects(),
  ]);

  return (
    <main>
      <Layout.DetailHeader>
        <h1>
          <strong>Tech stack</strong> that I currently use
        </h1>

        <p>
          Passionate about TypeScript, React, NodeJS, GraphQL and statically
          typed languages in general.
        </p>
      </Layout.DetailHeader>

      <Layout.Breakout layout="grid">
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
      </Layout.Breakout>
    </main>
  );
}
