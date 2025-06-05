import { graphql } from 'gatsby';
import CoverImage from '../components/CoverImage/CoverImage';
import Logo from '../components/Logo/Logo';
import { Link as MDXLink } from '../components/MDXComponents/MDXComponents';
import SEO from '../components/SEO';
import Layout from '../components/layout';
import type { ProjectsListQueryQuery } from '../types';
import { projectTexts, textMap } from '../utils/textMap';
import { useColorMode } from '../components/ui/color-mode';
import * as styles from './projects.css';

export interface ProjectsProps {
  data: ProjectsListQueryQuery;
}

const Projects = ({
  data: {
    allMdx: { nodes: posts },
  },
}: ProjectsProps) => {
  const { colorMode } = useColorMode();

  return (
    <Layout>
      <SEO title="Projects" description="" />

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
        {posts.map(({ id, excerpt, frontmatter }) => {
          const { image, background, fit } = frontmatter.featured;

          return (
            <li
              key={id}
              className={styles.projectItem({
                mode: colorMode as 'light' | 'dark',
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
                    <strong>{frontmatter.title}</strong>{' '}
                    {textMap(frontmatter.kind, projectTexts)}
                  </h2>
                </MDXLink>

                <p className={styles.description}>{excerpt}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};
export const pageQuery = graphql`
query ProjectsListQuery {
  allMdx(
    filter: {internal: {contentFilePath: {regex: "/projects/"}}}
    sort: {frontmatter: {date: DESC}}
  ) {
    nodes {
      id
      excerpt(pruneLength: 72)
      frontmatter {
        title
        slug
        company
        git
        link
        kind
        featured {
          image {
            childImageSharp {
              gatsbyImageData(width: 500, layout: CONSTRAINED)
            }
          }
          background
          fit
        }
      }
    }
  }
}`;
export default Projects;
