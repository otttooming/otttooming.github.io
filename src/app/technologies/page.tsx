// import Card from '../../components/Card/Card';
import * as styles from './page.css';

export default function Technologies() {
  // const posts = nodes;

  return (
    <>
      {/* <SEO title="Technologies" description="Tech stack that I currently use" /> */}

      <h1 className={styles.heading}>
        <strong>Tech stack</strong> that I currently use
      </h1>

      <p className={styles.description}>
        Passionate about TypeScript, React, NodeJS, GraphQL and statically typed
        languages in general.
      </p>

      <ol className={styles.cardList}>
        {[].map(({ body, frontmatter }) => {
          const { title, featured } = frontmatter;

          return null;

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
    </>
  );
}
