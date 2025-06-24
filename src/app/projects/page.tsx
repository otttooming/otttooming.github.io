import ProjectItem from '../../components/ProjectItem/ProjectItem';
import * as styles from './page.css';

export default function Projects() {
  return (
    <>
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
        {[].map(({ id, excerpt, frontmatter }) => (
          <ProjectItem
            key={id}
            id={id}
            excerpt={excerpt}
            frontmatter={frontmatter}
          />
        ))}
      </ol>
    </>
  );
}
