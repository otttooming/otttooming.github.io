import ProjectItem from '../../components/ProjectItem/ProjectItem';
import * as styles from './page.css';
import { evaluate } from 'next-mdx-remote-client/rsc';
import * as fs from 'node:fs/promises';
import path from 'node:path';
import { readDirNames } from '../../utils/fs';

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

export const getProjects = async () => {
  const directories = await readDirNames('public/content/projects');

  return (
    await Promise.all(
      directories.map(async (slug) => {
        const content = await fs.readFile(
          path.join(
            process.cwd(),
            `public/content/projects/${slug}`,
            'index.mdx',
          ),
          'utf-8',
        );
        const { frontmatter } = await evaluate<Frontmatter>({
          source: content,
          options: {
            parseFrontmatter: true,
          },
        });
        return {
          slug,
          frontmatter,
        };
      }),
    )
  ).toSorted((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date));
};

export default async function Projects() {
  const projects = await getProjects();

  return (
    <>
      <h1 className={styles.heading}>
        <strong>Some projects</strong> I have been involved in
      </h1>

      <p className={styles.descriptionWithMargin}>
        All of the projects have been a team collaboration and effort.
      </p>

      <p className={styles.description}>
        I have been thoroughly fortunate to have been given the opportunity to
        work with some amazing people.
      </p>

      <ol className={styles.projectList}>
        {projects.map(({ slug, frontmatter }) => (
          <ProjectItem
            key={slug}
            slug={slug}
            title={frontmatter.title}
            kind={frontmatter.kind}
            company={frontmatter.company}
            link={frontmatter.link}
            image={frontmatter.featured.image}
            background={frontmatter.featured.background}
            fit={frontmatter.featured.fit}
          />
        ))}
      </ol>
    </>
  );
}
