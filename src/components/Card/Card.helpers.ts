import { TechnologiesListQueryQuery } from '../../types';

export const getMatchingProjects = (
  projects: TechnologiesListQueryQuery['projects'],
  title: string,
) => {
  const getMatchedProject = (item) =>
    item.frontmatter.tech.includes(title.toLowerCase());

  return projects.nodes.filter(getMatchedProject);
};
