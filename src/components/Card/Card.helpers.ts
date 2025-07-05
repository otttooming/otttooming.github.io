export const getMatchingProjects = (projects: any, title: string) => {
  const getMatchedProject = (item) =>
    item.frontmatter.tech.includes(title.toLowerCase());

  return projects.filter(getMatchedProject);
};
