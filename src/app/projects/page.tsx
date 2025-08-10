import { ProjectItem } from './_components/ProjectItem';
import { readDirNames } from '../../utils/fs';
import { Metadata } from 'next';
import { readPost } from '../../services/readPost';
import Layout from '../../components/Layout/Layout';
import CoverImage from '../../components/CoverImage/CoverImage';

type Frontmatter = {
  title: string;
  date: string;
  slug: string;
  featured: {
    src: string;
    background?: string;
    fit?: 'contain' | 'cover';
    height: number;
    width: number;
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
    <main>
      <Layout.DetailHeader>
        <h1>
          <strong>Some projects</strong> I have been involved in
        </h1>

        <div>
          <p>All of the projects have been a team collaboration and effort.</p>

          <p>
            I have been thoroughly fortunate to have been given the opportunity
            to work with some amazing people.
          </p>
        </div>
      </Layout.DetailHeader>

      <Layout.ListSection>
        {projects.map(({ slug, title, kind, company, featured }) => (
          <ProjectItem
            key={slug}
            slug={slug}
            title={title}
            kind={kind}
            company={company}
          >
            <CoverImage
              src={`/content/projects/${slug}/${featured.src}`}
              height={featured.height}
              width={featured.width}
              background={featured.background}
              alt={title}
              fit={featured.fit}
            />
          </ProjectItem>
        ))}
      </Layout.ListSection>
    </main>
  );
}
