import { Link as MDXLink } from '../MDXComponents/MDXComponents';
import CoverImage from '../CoverImage/CoverImage';
import Logo from '../Logo/Logo';
import type { ProjectsListQueryQuery } from '../../types';
import * as styles from './ProjectItem.css';
import { useColorMode } from '../ui/color-mode';

interface ProjectItemProps {
  id: string;
  excerpt: string;
  frontmatter: ProjectsListQueryQuery['allMdx']['nodes'][number]['frontmatter'];
}

export const ProjectItem = ({ id, excerpt, frontmatter }: ProjectItemProps) => {
  const { colorMode } = useColorMode();

  const { image, background, fit } = frontmatter.featured;

  return (
    <li
      className={styles.projectItem({
        mode: colorMode,
      })}
    >
      <MDXLink href={frontmatter.slug} className={styles.projectLink}>
        <CoverImage
          maxHeight="360px"
          fluid={image.childImageSharp.gatsbyImageData}
          background={background}
          fit={fit}
          alt={frontmatter.title}
        />
      </MDXLink>

      <div className={styles.projectContent}>
        <a href={frontmatter.link} className={styles.companyLink}>
          <Logo name={frontmatter.company} />
        </a>

        <MDXLink href={frontmatter.slug}>
          <h2 className={styles.projectTitle}>
            <strong>{frontmatter.title}</strong> {frontmatter.kind}
          </h2>
        </MDXLink>

        <p className={styles.description}>{excerpt}</p>
      </div>
    </li>
  );
};

export default ProjectItem;
