import { TagMap } from '../components/TagList/tagMap';

export enum Social {
  GITHUB = 'github',
  LINKEDIN = 'linkedin',
  TWITTER = 'twitter',
}

export const socialTags: TagMap = {
  [Social.GITHUB]: {
    title: 'GitHub',
    url: 'https://github.com/otttooming',
  },
  [Social.LINKEDIN]: {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/otttooming/',
  },
  [Social.TWITTER]: {
    title: 'Twitter',
    url: 'https://twitter.com/otttooming',
  },
};
