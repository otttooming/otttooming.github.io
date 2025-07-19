const WHITESPACE = /\s/g;

export const getURISafeString = (value: unknown): string =>
  typeof value === 'string'
    ? encodeURIComponent(value.replace(WHITESPACE, '-').toLowerCase())
    : '';
