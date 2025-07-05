import { CardProps } from './Card';

export const getMatchingProjects = (
  projects: CardProps['projects'],
  title: string,
) => {
  const getMatchedProject = (item) =>
    item.frontmatter.tech.includes(title.toLowerCase());

  return projects.filter(getMatchedProject);
};
