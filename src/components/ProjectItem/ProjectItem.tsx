import CoverImage from '../CoverImage/CoverImage';
import Logo from '../Logo/Logo';
import * as styles from './ProjectItem.css';
import { projectTexts, textMap } from '../../utils/textMap';
import { Link } from '../Link/Link';

interface ProjectItemProps {
  title: string;
  slug: string;
  excerpt: string;
  company?: string;
  link?: string;
  kind?: string;
  image: string;
  background?: string;
  fit?: 'contain' | 'cover';
}

export const ProjectItem = async ({
  title,
  slug,
  excerpt,
  company,
  link,
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
            background={background}
            fit={fit}
            alt={title}
          />
        </Link>
      </div>

      <div className={styles.projectContent}>
        <a href={link} className={styles.companyLink}>
          <Logo name={company} />
        </a>

        <Link href={`projects/${slug}`}>
          <h2 className={styles.projectTitle}>
            <strong>{title}</strong> {textMap(kind, projectTexts)}
          </h2>
        </Link>

        <p className={styles.description}>{excerpt}</p>
      </div>
    </li>
  );
};

export default ProjectItem;
