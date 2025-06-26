import ProjectItem from '../../components/ProjectItem/ProjectItem';
import * as styles from './page.css';
import { compileMDX, MDXRemote } from 'next-mdx-remote/rsc';
import * as fs from 'node:fs/promises';
import path from 'node:path';

type Frontmatter = {
  title: string;
};

export default async function Projects() {
  const pathNames = await fs.readdir(
    path.join(process.cwd(), 'content/projects'),
  );

  const projects = await Promise.all(
    pathNames.map(async (slug) => {
      const content = await fs.readFile(
        path.join(process.cwd(), `content/projects/${slug}`, 'index.mdx'),
        'utf-8',
      );
      const { frontmatter } = await compileMDX<Frontmatter>({
        source: content,
        options: {
          parseFrontmatter: true,
        },
      });
      return {
        slug,
        excerpt: '',
        frontmatter,
      };
    }),
  );

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
        {projects.map(({ slug, excerpt, frontmatter }) => (
          <ProjectItem
            key={slug}
            id={slug}
            excerpt={excerpt}
            frontmatter={frontmatter}
          />
        ))}
      </ol>
    </>
  );
}
