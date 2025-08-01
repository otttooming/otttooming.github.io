import CoverImage from '../../../components/CoverImage/CoverImage';
import { Link } from '../../../components/Link/Link';
import Logo from '../../../components/Logo/Logo';
import { ProjectHeader } from './ProjectHeader';
import * as styles from './ProjectItem.css';

interface ProjectItemProps {
  title: string;
  slug: string;
  company?: string;
  kind?: string;
  image: string;
  background?: string;
  fit?: 'contain' | 'cover';
}

export const ProjectItem = async ({
  title,
  slug,
  company,
  kind,
  image,
  background,
  fit,
}: ProjectItemProps) => {
  return (
    <li className={styles.projectItem}>
      <div className={styles.projectLink}>
        <Link href={`projects/${slug}`}>
          <CoverImage
            src={`/content/projects/${slug}/${image}`}
            maxHeight="360px"
            sizes="(max-width: 480px) 100vw, 33vw"
            background={background}
            fit={fit}
            alt={title}
          />
        </Link>
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
    </li>
  );
};
