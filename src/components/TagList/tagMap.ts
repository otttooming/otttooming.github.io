import { textMap } from '../../utils/textMap';

export type Tag = { title: string; url: string };

export type TagMap = { [K in string]: Tag };

const getTag = (tags: TagMap) => (acc: Tag[], cur: string): Tag[] => {
  const value = textMap(cur, tags);

  if (!value) {
    return acc;
  }

  return [...acc, value];
};

export const getMappedTags = (
  passedItems: string[] | undefined | null,
  tagMap: TagMap
) => {
  const items = passedItems || [];

  return items.reduce(getTag(tagMap), []);
};
