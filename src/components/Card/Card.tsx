import CoverImage from '../CoverImage/CoverImage';
import MDXComponents from '../MDXComponents/MDXComponents';
import { getMatchingProjects } from './Card.helpers';
import * as styles from './Card.css';
import { getProjects } from '../../app/projects/page';
import { MDXRemote } from 'next-mdx-remote-client/rsc';

export interface CardProps {
  title: string;
  slug: string;
  source: string;
  content: string;
  featured: any;
  projects: Awaited<ReturnType<typeof getProjects>>;
}

const Item = ({
  slug,
  frontmatter: { featured, title },
}: CardProps['projects'][number]) => {
  const { image, background, fit } = featured;

  return (
    <div className={styles.projectItem}>
      <CoverImage
        alt={title}
        src={`/content/projects/${slug}/${image}`}
        maxHeight="260px"
        background={background}
        boxShadow="none"
        fit={fit}
      />
    </div>
  );
};

const Card = ({ title, slug, featured, source, projects }: CardProps) => {
  const {
    illustration,
    height: htmlHeight,
    width: htmlWidth,
    alt,
    background,
  } = featured;

  const ratio = htmlWidth / htmlHeight;

  const matchingProjects = getMatchingProjects(projects, title);

  return (
    <li
      className={styles.card}
      style={{ '--card-background': background } as React.CSSProperties}
    >
      <header className={`${styles.header} ${styles.scrollContainer}`}>
        <div
          className={styles.illustrationWrapper}
          style={{ aspectRatio: ratio }}
        >
          <img
            className={styles.illustration}
            src={`public/content/technologies/${slug}/${illustration}`}
            alt={alt}
            height={htmlHeight}
            width={htmlWidth}
            loading="lazy"
          />
        </div>

        <div className={styles.projectsContainer}>
          <div className={styles.projectsList}>
            {matchingProjects.map((item) => (
              <Item key={item.slug} {...item} />
            ))}
          </div>
        </div>
      </header>

      <div className={styles.content}>
        <h2>{title}</h2>

        <MDXRemote
          options={{ parseFrontmatter: true }}
          components={MDXComponents}
          source={source}
        />
      </div>
    </li>
  );
};

export default Card;
