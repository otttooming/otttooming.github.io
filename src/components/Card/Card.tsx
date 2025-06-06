import { MDXProvider } from '@mdx-js/react';
import type {
  TechnologiesFrontmatterFragmentFragment,
  TechnologiesListQueryQuery,
} from '../../types';
import CoverImage from '../CoverImage/CoverImage';
import MDXComponents from '../MDXComponents/MDXComponents';
import { getMatchingProjects } from './Card.helpers';
import { useColorMode } from '../ui/color-mode';
import * as styles from './Card.css';

export interface CardProps {
  title: string;
  body: any;
  featured: TechnologiesFrontmatterFragmentFragment['featured'];
  projects: TechnologiesListQueryQuery['projects'];
}

const Item = ({
  id,
  frontmatter: { featured, title },
}: TechnologiesListQueryQuery['projects']['nodes'][0]) => {
  const { image, background, fit } = featured;

  return (
    <div key={id} className={styles.projectItem}>
      <CoverImage
        maxHeight="260px"
        fit={fit}
        background={background}
        fluid={image.childImageSharp.gatsbyImageData}
        boxShadow="none"
        alt={title}
      />
    </div>
  );
};

const Card = ({ title, body, featured, projects }: CardProps) => {
  const {
    illustration,
    height: htmlHeight,
    width: htmlWidth,
    alt,
    background,
  } = featured;

  const { colorMode } = useColorMode();
  const ratio = htmlWidth / htmlHeight;

  const matchingProjects = getMatchingProjects(projects, title);

  return (
    <li
      className={styles.card}
      style={{ '--card-background': background } as React.CSSProperties}
    >
      <header className={`${styles.header} ${styles.scrollContainer}`}>
        <div className={styles.illustration} style={{ aspectRatio: ratio }}>
          <img
            src={illustration.publicURL}
            alt={alt}
            height={htmlHeight}
            width={htmlWidth}
            loading="lazy"
            style={{ maxHeight: '100%' }}
          />
        </div>

        <div className={styles.projectsContainer}>
          <div className={styles.projectsList}>
            {matchingProjects.map((item) => (
              <Item key={item.id} {...item} />
            ))}
          </div>
        </div>
      </header>

      <div className={styles.content({ mode: colorMode })}>
        <h2>{title}</h2>
        <MDXProvider components={MDXComponents}>{body}</MDXProvider>
      </div>
    </li>
  );
};

export default Card;
