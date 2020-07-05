export const WHITESPACE = /\s/g;

export const getIsString = (unknownValue: unknown): unknownValue is string =>
  typeof unknownValue === 'string';

export const getURISafeString = (value: unknown): string => {
  if (!getIsString(value)) {
    return '';
  }

  const stringValue = String(value).replace(WHITESPACE, '-').toLowerCase();

  return encodeURIComponent(stringValue);
};
