import { PropsWithChildren } from 'react';
import { Link } from '../../../components/Link/Link';
import Logo from '../../../components/Logo/Logo';
import { ProjectHeader } from './ProjectHeader';
import * as styles from './ProjectItem.css';

interface ProjectItemProps {
  title: string;
  slug: string;
  company?: string;
  kind?: string;
}

export const ProjectItem = async ({
  title,
  slug,
  company,
  kind,
  children,
}: PropsWithChildren<ProjectItemProps>) => {
  return (
    <article className={styles.projectItem}>
      <div className={styles.projectLink}>
        <Link href={`projects/${slug}`}>{children}</Link>
      </div>

      <div className={styles.projectContent}>
        <Logo name={company} />

        <Link href={`projects/${slug}`}>
          <ProjectHeader
            title={title}
            kind={kind}
            as="h2"
            className={styles.projectTitle}
          />
        </Link>
      </div>
    </article>
  );
};
