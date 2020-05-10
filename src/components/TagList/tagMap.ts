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

export const getMappedTags = (items: string[], tagMap: TagMap) =>
  items.reduce(getTag(tagMap), []);
