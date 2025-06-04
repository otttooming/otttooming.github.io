import { graphql } from 'gatsby';
import Card from '../components/Card/Card';
import SEO from '../components/SEO';
import Layout from '../components/layout';
import type { TechnologiesListQueryQuery } from '../types';
import * as styles from './technologies.css';

interface TechnologiesProps {
  data: TechnologiesListQueryQuery;
}

const Technologies = ({
  data: {
    allMdx: { nodes },
    projects,
  },
}: TechnologiesProps) => {
  const posts = nodes;

  return (
    <Layout>
      <SEO title="Technologies" description="Tech stack that I currently use" />

      <h1 className={styles.heading}>
        <strong>Tech stack</strong> that I currently use
      </h1>

      <p className={styles.description}>
        Passionate about TypeScript, React, NodeJS, GraphQL and statically typed
        languages in general.
      </p>

      <ol className={styles.cardList}>
        {posts.map(({ body, frontmatter }) => {
          const { title, featured } = frontmatter;

          return (
            <Card
              key={title}
              title={title}
              body={body}
              featured={featured}
              projects={projects}
            />
          );
        })}
      </ol>
    </Layout>
  );
};
export const pageQuery = graphql`fragment TechnologiesFrontmatterFragment on MdxFrontmatter {
  featured {
    illustration {
      publicURL
    }
    background
    width
    height
    alt
  }
  tags
  kind
  title
}

query TechnologiesListQuery {
  allMdx(
    filter: {internal: {contentFilePath: {regex: "/technologies/"}}}
    sort: {frontmatter: {order: ASC}}
  ) {
    nodes {
      id
      body
      frontmatter {
        ...TechnologiesFrontmatterFragment
      }
      frontmatter {
        slug
      }
    }
  }
  projects: allMdx(
    filter: {internal: {contentFilePath: {regex: "/projects/"}}}
    sort: {frontmatter: {date: DESC}}
  ) {
    nodes {
      id
      excerpt(pruneLength: 72)
      frontmatter {
        title
        company
        git
        link
        kind
        tech
        featured {
          image {
            childImageSharp {
              gatsbyImageData(width: 476, layout: CONSTRAINED)
            }
          }
          background
          fit
        }
      }
      frontmatter {
        slug
      }
    }
  }
}`;

export default Technologies;
