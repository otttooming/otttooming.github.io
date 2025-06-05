import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/layout';
import type { ProjectsListQueryQuery } from '../types';
import ProjectItem from '../components/ProjectItem/ProjectItem';
import * as styles from './projects.css';

export interface ProjectsProps {
  data: ProjectsListQueryQuery;
}

const Projects = ({
  data: {
    allMdx: { nodes: posts },
  },
}: ProjectsProps) => {
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
        {posts.map(({ id, excerpt, frontmatter }) => (
          <ProjectItem
            key={id}
            id={id}
            excerpt={excerpt}
            frontmatter={frontmatter}
          />
        ))}
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
