import { ProjectItem } from './_components/ProjectItem';
import * as styles from './page.css';
import { readDirNames } from '../../utils/fs';
import { Metadata } from 'next';
import { readPost } from '../../services/readPost';

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
        const post =
          await readPost<Frontmatter>`public/content/projects/${slug}`;

        return {
          slug,
          ...post,
        };
      }),
    )
  ).toSorted((a, b) => b.date.localeCompare(a.date));
};

export const metadata: Metadata = {
  title: 'Projects | Personal portfolio - Ott',
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
        {projects.map(({ slug, title, kind, company, featured }) => (
          <ProjectItem
            key={slug}
            slug={slug}
            title={title}
            kind={kind}
            company={company}
            image={featured.image}
            background={featured.background}
            fit={featured.fit}
          />
        ))}
      </ol>
    </>
  );
}
