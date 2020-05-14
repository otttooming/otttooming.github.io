import { TagMap } from '../components/TagList/tagMap';

export enum Tech {
  ESNEXT = 'esnext',
  TYPESCRIPT = 'typescript',
  GRAPHQL = 'graphql',
  NODEJS = 'nodejs',
  REACT = 'react',
  APOLLO = 'apollo',
  PRISMA = 'prisma',
  ES6 = 'es6',
  ES5 = 'es5',
  TWIG = 'twig',
  SCSS = 'scss',
  REDUX = 'redux',
  REST = 'rest',
  JQUERY = 'jquery',
  LIQUID = 'liquid',
  VUE = 'vue',
  ILLUSTRATOR = 'illustrator',
  PHOTOSHOP = 'photoshop',
}

export const techTags: TagMap = {
  [Tech.ESNEXT]: {
    title: 'ESNext',
    url: '/',
  },
  [Tech.TYPESCRIPT]: {
    title: 'TypeScript',
    url: '/',
  },
  [Tech.GRAPHQL]: {
    title: 'GraphQL',
    url: '/',
  },
  [Tech.NODEJS]: {
    title: 'NodeJS',
    url: '/',
  },
  [Tech.REACT]: {
    title: 'React',
    url: '/',
  },
  [Tech.APOLLO]: {
    title: 'Apollo',
    url: '/',
  },
  [Tech.PRISMA]: {
    title: 'Prisma',
    url: '/',
  },
  [Tech.ES6]: {
    title: 'ES6',
    url: '/',
  },
  [Tech.ES5]: {
    title: 'ES5',
    url: '/',
  },
  [Tech.TWIG]: {
    title: 'Twig',
    url: '/',
  },
  [Tech.SCSS]: {
    title: 'SCSS',
    url: '/',
  },
  [Tech.REDUX]: {
    title: 'Redux',
    url: '/',
  },
  [Tech.REST]: {
    title: 'REST',
    url: '/',
  },
  [Tech.JQUERY]: {
    title: 'jQuery',
    url: '/',
  },
  [Tech.LIQUID]: {
    title: 'Liquid',
    url: '/',
  },
  [Tech.VUE]: {
    title: 'Vue.js',
    url: '/',
  },
  [Tech.ILLUSTRATOR]: {
    title: 'Adobe Illustrator',
    url: '/',
  },
  [Tech.PHOTOSHOP]: {
    title: 'Adobe Photoshop',
    url: '/',
  },
};
